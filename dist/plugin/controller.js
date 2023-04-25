var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 320, height: 358 });
import { darkTheme } from "./dark-to-light-theme";
import { lightTheme } from "./light-to-dark-theme";
function serializeNodes(nodes) {
    let serializedNodes = JSON.stringify(nodes, [
        "name",
        "type",
        "children",
        "id"
    ]);
    return serializedNodes;
}
const flatten = obj => {
    const array = Array.isArray(obj) ? obj : [obj];
    return array.reduce((acc, value) => {
        acc.push(value);
        if (value.children) {
            acc = acc.concat(flatten(value.children));
            delete value.children;
        }
        return acc;
    }, []);
};
figma.ui.onmessage = msg => {
    let skippedLayers = [];
    if (msg.type === "run-app") {
        if (figma.currentPage.selection.length === 0) {
            figma.ui.postMessage({
                type: "selection-updated",
                message: 0
            });
        }
        else {
            let selectedNodes = flatten(figma.currentPage.selection);
            figma.ui.postMessage({
                type: "selection-updated",
                message: serializeNodes(selectedNodes)
            });
        }
    }
    if (msg.type === "theme-update") {
        const nodesToTheme = figma.currentPage.selection;
        if (msg.message === "dark-to-light-theme") {
            nodesToTheme.map(selected => updateTheme(selected, darkTheme));
        }
        if (msg.message === "light-to-dark-theme") {
            nodesToTheme.map(selected => updateTheme(selected, lightTheme));
        }
        setTimeout(function () {
            figma.ui.postMessage({
                type: "layers-skipped",
                message: serializeNodes(skippedLayers)
            });
        }, 500);
        figma.notify(`Theming complete`, { timeout: 750 });
    }
    if (msg.type === "select-layer") {
        let layer = figma.getNodeById(msg.id);
        let layerArray = [];
        layerArray.push(layer);
        figma.notify(`Layer ${layer.name} selected`, { timeout: 750 });
        figma.currentPage.selection = layerArray;
        figma.viewport.scrollAndZoomIntoView(layerArray);
    }
    function replaceStyles(node, style, mappings, applyStyle) {
        return __awaiter(this, void 0, void 0, function* () {
            let importedStyle = yield figma.importStyleByKeyAsync(style.key);
            if (mappings[importedStyle.key] !== undefined) {
                let mappingStyle = mappings[importedStyle.key];
                let newStyle = yield figma.importStyleByKeyAsync(mappingStyle.mapsToKey);
                applyStyle(node, newStyle.id);
            }
            else {
                skippedLayers.push(node);
            }
        });
    }
    function fixStyles(node, nodeType, style, mappings, applyStyle) {
        return __awaiter(this, void 0, void 0, function* () {
            let styleName = nodeType.toLowerCase() + " " + style;
            console.log(styleName);
            if (mappings[styleName] !== undefined) {
                let mappingStyle = mappings[styleName];
                let newStyle = yield figma.importStyleByKeyAsync(mappingStyle.mapsToKey);
                applyStyle(node, newStyle.id);
            }
            else {
                skippedLayers.push(node);
            }
        });
    }
    function replaceComponent(node, key, mappings, applyComponent) {
        return __awaiter(this, void 0, void 0, function* () {
            let componentToSwitchWith = mappings[key];
            let importedComponent = yield figma.importComponentByKeyAsync(componentToSwitchWith.mapsToKey);
            applyComponent(node, importedComponent);
        });
    }
    function swapComponent(node, key, mappings) {
        return __awaiter(this, void 0, void 0, function* () {
            yield replaceComponent(node, key, mappings, (node, masterComponent) => (node.masterComponent = masterComponent));
        });
    }
    function replaceFills(node, style, mappings) {
        return __awaiter(this, void 0, void 0, function* () {
            yield replaceStyles(node, style, mappings, (node, styleId) => (node.fillStyleId = styleId));
        });
    }
    function replaceNoStyleFill(node, nodeType, style, mappings) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fixStyles(node, nodeType, style, mappings, (node, styleId) => (node.fillStyleId = styleId));
        });
    }
    function replaceStrokes(node, style, mappings) {
        return __awaiter(this, void 0, void 0, function* () {
            yield replaceStyles(node, style, mappings, (node, styleId) => (node.strokeStyleId = styleId));
        });
    }
    function replaceEffects(node, style, mappings) {
        return __awaiter(this, void 0, void 0, function* () {
            yield replaceStyles(node, style, mappings, (node, styleId) => (node.effectStyleId = styleId));
        });
    }
    function updateTheme(node, theme) {
        switch (node.type) {
            case "COMPONENT":
            case "COMPONENT_SET":
            case "RECTANGLE":
            case "GROUP":
            case "ELLIPSE":
            case "POLYGON":
            case "STAR":
            case "LINE":
            case "BOOLEAN_OPERATION":
            case "FRAME":
            case "LINE":
            case "VECTOR": {
                if (node.children) {
                    node.children.forEach(child => {
                        updateTheme(child, theme);
                    });
                }
                if (node.fills) {
                    if (node.fillStyleId && typeof node.fillStyleId !== "symbol") {
                        let style = figma.getStyleById(node.fillStyleId);
                        replaceFills(node, style, theme);
                    }
                    else if (node.fillStyleId === "") {
                        let style = determineFill(node.fills);
                        let nodeType = node.type;
                        replaceNoStyleFill(node, nodeType, style, theme);
                    }
                    else {
                        skippedLayers.push(node);
                    }
                }
                if (node.strokeStyleId) {
                    replaceStrokes(node, figma.getStyleById(node.strokeStyleId), theme);
                }
                if (node.effectStyleId) {
                    replaceEffects(node, figma.getStyleById(node.effectStyleId), theme);
                }
                break;
            }
            case "INSTANCE": {
                let componentKey = node.masterComponent.key;
                if (theme[componentKey] !== undefined) {
                    swapComponent(node, componentKey, theme);
                }
                else {
                    if (node.fills) {
                        if (node.fillStyleId && typeof node.fillStyleId !== "symbol") {
                            let style = figma.getStyleById(node.fillStyleId);
                            replaceFills(node, style, theme);
                        }
                        else if (node.fillStyleId === "") {
                            let style = determineFill(node.fills);
                            let nodeType = node.type;
                            replaceNoStyleFill(node, nodeType, style, theme);
                        }
                        else {
                            skippedLayers.push(node);
                        }
                    }
                    if (node.strokeStyleId) {
                        replaceStrokes(node, figma.getStyleById(node.strokeStyleId), theme);
                    }
                    if (node.effectStyleId) {
                        replaceEffects(node, figma.getStyleById(node.effectStyleId), theme);
                    }
                    if (node.children) {
                        node.children.forEach(child => {
                            updateTheme(child, theme);
                        });
                    }
                }
                break;
            }
            case "TEXT": {
                if (node.fillStyleId && typeof node.fillStyleId !== "symbol") {
                    replaceFills(node, figma.getStyleById(node.fillStyleId), theme);
                }
                else if (node.fillStyleId === "") {
                    let style = determineFill(node.fills);
                    let nodeType = node.type;
                    replaceNoStyleFill(node, nodeType, style, theme);
                }
                else {
                    skippedLayers.push(node);
                }
            }
            default: {
            }
        }
    }
    function determineFill(fills) {
        let fillValues = [];
        let rgbObj;
        fills.forEach(fill => {
            if (fill.type === "SOLID" && fill.visible === true) {
                rgbObj = convertColor(fill.color);
                fillValues.push(RGBToHex(rgbObj["r"], rgbObj["g"], rgbObj["b"]));
            }
        });
        return fillValues[0];
    }
    function convertColor(color) {
        const colorObj = color;
        const figmaColor = {};
        Object.entries(colorObj).forEach(cf => {
            const [key, value] = cf;
            if (["r", "g", "b"].includes(key)) {
                figmaColor[key] = (255 * value).toFixed(0);
            }
            if (key === "a") {
                figmaColor[key] = value;
            }
        });
        return figmaColor;
    }
    function RGBToHex(r, g, b) {
        r = Number(r).toString(16);
        g = Number(g).toString(16);
        b = Number(b).toString(16);
        if (r.length == 1)
            r = "0" + r;
        if (g.length == 1)
            g = "0" + g;
        if (b.length == 1)
            b = "0" + b;
        return "#" + r + g + b;
    }
};
