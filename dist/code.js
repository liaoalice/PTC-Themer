/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/plugin/controller.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/plugin/controller.ts":
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dark_to_light_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dark-to-light-theme */ "./src/plugin/dark-to-light-theme.ts");
/* harmony import */ var _light_to_dark_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./light-to-dark-theme */ "./src/plugin/light-to-dark-theme.ts");
/* harmony import */ var _old_to_new_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./old-to-new-theme */ "./src/plugin/old-to-new-theme.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 320, height: 358 });



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
            nodesToTheme.map(selected => updateTheme(selected, _dark_to_light_theme__WEBPACK_IMPORTED_MODULE_0__["darkTheme"]));
        }
        if (msg.message === "light-to-dark-theme") {
            nodesToTheme.map(selected => updateTheme(selected, _light_to_dark_theme__WEBPACK_IMPORTED_MODULE_1__["lightTheme"]));
        }
        if (msg.message === "legacy-to-cds-theme") {
            nodesToTheme.map(selected => updateTheme(selected, _old_to_new_theme__WEBPACK_IMPORTED_MODULE_2__["cdsTheme"]));
        }
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
    function swapComponent(node, key, mappings, textOverrides, leftIcon, rightIcon) {
        return __awaiter(this, void 0, void 0, function* () {
            yield replaceComponent(node, key, mappings, (node, masterComponent) => (node.masterComponent = masterComponent));
            function traverseText(node, i) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (node.type === "GROUP" ||
                        node.type === "FRAME" ||
                        node.type === "INSTANCE") {
                        for (const child of node.children)
                            traverseText(child, i);
                    }
                    else if (node.type === "TEXT") {
                        yield figma.loadFontAsync(node.fontName);
                        node.characters = textOverrides;
                    }
                });
            }
            function traverseIcon(node, i, leftIcon, rightIcon) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (node.type === "GROUP" ||
                        node.type === "FRAME" ||
                        ((node.type === "INSTANCE" && node.name !== "Left Icon") &&
                            (node.type === "INSTANCE" && node.name !== "Right Icon"))) {
                        for (const child of node.children)
                            traverseIcon(child, i, leftIcon, rightIcon);
                    }
                    else if (node.name === "Left Icon") {
                        node.visible = leftIcon;
                    }
                    else if (node.name === "Right Icon") {
                        console.log("Right icon!");
                        node.visible = rightIcon;
                    }
                });
            }
            traverseIcon(node, node.children.length, leftIcon, rightIcon);
            traverseText(node, node.children.length);
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
                    var textOverrides = [];
                    let leftIcon = false;
                    let rightIcon = false;
                    if (node.mainComponent.key ===
                        "a49cb847db7c647fd15612c7bf381d10164e50b4" ||
                        node.mainComponent.key ===
                            "b4b977139dba80eba8392be3effa8eaaaff32c1f" ||
                        node.mainComponent.key ===
                            "4e3ae58e7516afa8e909f4eff3def5dd76d87654" ||
                        node.mainComponent.key ===
                            "8f9d1a97fa9b5e9a41ea2fdfd5a8b2c5d599dc52") {
                        function traverse(node, i) {
                            if (node.type === "GROUP" ||
                                node.type === "FRAME" ||
                                ((node.type === "INSTANCE" && node.name !== "Left Icon") &&
                                    (node.type === "INSTANCE" && node.name !== "Right Icon"))) {
                                for (const child of node.children)
                                    traverse(child, i);
                            }
                            else if (node.name === "Left Icon") {
                                console.log("Found left icon!");
                                leftIcon = node.visible;
                            }
                            else if (node.name === "Right Icon") {
                                console.log("Found right icon!");
                                rightIcon = node.visible;
                            }
                        }
                        traverse(node, node.children.length);
                    }
                    if (node.overrides.length > 0) {
                        function traverse(node, i) {
                            if (node.type === "GROUP" ||
                                node.type === "FRAME" ||
                                node.type === "INSTANCE") {
                                for (const child of node.children)
                                    traverse(child, i);
                            }
                            else if (node.type === "TEXT") {
                                console.log("Found text layer!");
                                textOverrides = node.characters;
                            }
                        }
                        traverse(node, node.children.length);
                    }
                    swapComponent(node, componentKey, theme, textOverrides, leftIcon, rightIcon);
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


/***/ }),

/***/ "./src/plugin/dark-to-light-theme.ts":
/*!*******************************************!*\
  !*** ./src/plugin/dark-to-light-theme.ts ***!
  \*******************************************/
/*! exports provided: darkTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return darkTheme; });
const darkTheme = {
    f0d4aa5e63fff4392e3b3c22884523369f5d0424: {
        componentName: "iPhone X Status Bar / Dark",
        mapsToKey: "33425bd93c1b8cea071df9b5297f0b19583a643b"
    },
    "5b8dce7a790466da546d319a69f5de220e1a66f1": {
        componentName: "iPhone X Home Indicator / Dark",
        mapsToKey: "0489bde7fd0346a97eff3170167714838a8ffb9c"
    },
    "3ee4cf479eefd5e181ff4abd1c982011438e692d": {
        componentName: "System (Dark) / Numeric Keyboard",
        mapsToKey: "867fa47defeb07293aa37e5467e4ca487019dd78"
    },
    e4dcbeb8549332e4c969ef4d0d302e75a7932c25: {
        componentName: "System (Dark) / Keyboard",
        mapsToKey: "bca69f03db8e938cd78ca91c84e35553804ca8c1"
    },
    e9622ab25248f31fb02b6faa00308b8faa4acb3e: {
        componentName: "Header / Guild / Dark",
        mapsToKey: "00230f03c08e00a787e9c2659c3165bcad7ae06b"
    },
    "4592fb98edf78fdeea07d23445de948286e7c5f2": {
        componentName: "Header / DM",
        mapsToKey: "ff8b5c71a60fc212647c40e481c0bf1886a3ec85"
    },
    "46d6bed4edd9482b1452afab5ab0292b516c9e09": {
        componentName: "Navigation Tab / Dark",
        mapsToKey: "64d16554561a7496b2d23854074ce923655918e0"
    },
    "9e0a9f99024fb9baedcacbb123c84d7cc4b8f87a": {
        componentName: "Guild Selected / Dark",
        mapsToKey: "a9231a3d9fac5b7d26d56904c7b28d5d00bfff97"
    },
    c25d89953041d095215c972fa55dc6f7776d9a54: {
        componentName: "Messages Selected / Dark",
        mapsToKey: "8c80d5bd7bdd80acec9793a719f6caaebba1c6ee"
    },
    "3588fe4d5a302b2fca2be2b0cb5c12e2a2f41c05": {
        componentName: "Status Bar / Dark",
        mapsToKey: "790d7d3d884a6d3dadc79bf3c48a4918f4c16ba7"
    },
    "43c14ca23834d2aa3bf1e027a0635c7393e87378": {
        componentName: "Navigation Tab / Dark",
        mapsToKey: "bd56c3e89162d8274c4ca591f2ca1e1064658570"
    },
    d31d651767116b73f9209c5362669782ff3a8a25: {
        componentName: "Windows Bar / Dark",
        mapsToKey: "05fc2a6b4207baa8f672dc9e8a5d750c5d60711b"
    },
    "5c1691cbeaaf4270107d34f1a12f02fdd04afa02": {
        name: "Dark / Header / Primary (White)",
        mapsToName: "Light / Header / Primary (900)",
        mapsToKey: "b19a14675b8adeb1528ab5f84e57b2eeed10d46c"
    },
    "text #ffffff": {
        name: "Unstyled Dark Header",
        mapsToName: "Light / Header / Primary (900)",
        mapsToKey: "b19a14675b8adeb1528ab5f84e57b2eeed10d46c"
    },
    "text #b9bbbe": {
        name: "Unstyled Dark Secondary Header",
        mapsToName: "themes/light/header/header-secondary",
        mapsToKey: "608f2ea1aa64ff7f202e8c22cc4147a02be9d85b"
    },
    "text #a3a6aa": {
        name: "Unstyled Dark Muted",
        mapsToName: "themes/light/text/text-muted",
        mapsToKey: "7d8703ec132ddaf6968f6d190d1e80031c559d7c"
    },
    bc090cb3b1c7313ae276acbd791b5b87b478ec59: {
        name: "Dark / Header / Secondary (300)",
        mapsToName: "Light / Header / Secondary (600)",
        mapsToKey: "608f2ea1aa64ff7f202e8c22cc4147a02be9d85b"
    },
    "5c77a96137b698b5575557c069cabd6877d66e1e": {
        name: "Dark / Text / Normal (200)",
        mapsToName: "Light / Text / Normal (700)",
        mapsToKey: "546c7d46e754ac2b23b338783d72f206b77b6436"
    },
    "5d84ad92f3ad152f196e2093a3c0542a08dfba11": {
        name: "Dark / Text / Muted (400)",
        mapsToName: "Light / Text / Muted (500)",
        mapsToKey: "7d8703ec132ddaf6968f6d190d1e80031c559d7c"
    },
    bf03232753079bdd5bec6c55343b659876b5283f: {
        name: "Dark / Text / Link",
        mapsToName: "Light / Text / Link",
        mapsToKey: "64d3058dd508a4985670b2d19418a06a3503c9c2"
    },
    "6e4aef7677e2ea82c87465276522da7ef5a07121": {
        name: "themes/dark/text/text-brand",
        mapsToName: "themes/light/text/text-brand",
        mapsToKey: "15320fd498dcd4e113c5bd587dca2d11d4492e84"
    },
    "094cbaac0817be7bbfd8292cb98fc1e515e7ea0e": {
        name: "themes/dark/text/text-danger",
        mapsToName: "themes/light/text/text-danger",
        mapsToKey: "c8d237080d38671193403b49cdc6a5778a14bf45"
    },
    df0622bb33232fe041c468e8d3dd37e5428b10e7: {
        name: "themes/dark/text/text-warning",
        mapsToName: "themes/light/text/text-warning",
        mapsToKey: "0d95a7d4d30ef99ebd04abd5b2dd4708913f765b"
    },
    "7733117cf1ef570b77332c86ba783af6cb735fc1": {
        name: "themes/dark/text/text-positive",
        mapsToName: "themes/light/text/text-positive",
        mapsToKey: "71f64b08bdec4daf747a850b128e0994c4593c04"
    },
    "287463bade90c1eed5ea4cb0b5d63794daa8aec2": {
        name: "Dark / Interactive Text & Icons / Normal (300)",
        mapsToName: "Light / Interactive Text & Icons / Normal (600)",
        mapsToKey: "9c23a031773711e026394f4354661c37ee5b4682"
    },
    "boolean_operation #b9bbbe": {
        name: "Dark / Interactive Text & Icons / Normal (300)",
        mapsToName: "Light / Interactive Text & Icons / Normal (600)",
        mapsToKey: "9c23a031773711e026394f4354661c37ee5b4682"
    },
    "boolean_operation #757575": {
        name: "Dark / Interactive Text & Icons / Normal (300)",
        mapsToName: "Light / Interactive Text & Icons / Normal (600)",
        mapsToKey: "9c23a031773711e026394f4354661c37ee5b4682"
    },
    "vector #757575": {
        name: "Dark / Interactive Text & Icons / Normal (300)",
        mapsToName: "Light / Interactive Text & Icons / Normal (600)",
        mapsToKey: "9c23a031773711e026394f4354661c37ee5b4682"
    },
    "vector #b9bbbe": {
        name: "Dark / Interactive Text & Icons / Normal (300)",
        mapsToName: "Light / Interactive Text & Icons / Normal (600)",
        mapsToKey: "9c23a031773711e026394f4354661c37ee5b4682"
    },
    "502dcdf04992818dcbaed125ad711b446dee4c68": {
        name: "Dark / Interactive Text & Icons / Hover (200)",
        mapsToName: "themes/light/interactive/interactive-hover",
        mapsToKey: "e9542e95adf3bbe74286c2cf279fee64f7ba3279"
    },
    "3eddc15e90bbd7064aea7cc13dc13e23a712f0b0": {
        name: "Dark / Interactive Text & Icons / Active (White)",
        mapsToName: "Light / Interactive Text & Icons / Active (900)",
        mapsToKey: "620c98e8f9255a6107dee91745669e5b702b413c"
    },
    "boolean_operation #ffffff": {
        name: "Dark / Interactive Text & Icons / Active (White)",
        mapsToName: "Light / Interactive Text & Icons / Active (900)",
        mapsToKey: "620c98e8f9255a6107dee91745669e5b702b413c"
    },
    fa698aa2a724522a7c29efb0a662aec75a1be5a1: {
        name: "Dark / Interactive Text & Icons / Muted (500)",
        mapsToName: "Light / Interactive Text & Icons / Muted (300)",
        mapsToKey: "9328cd78a39149b070d68f98d9fe4df7a92bf67d"
    },
    "4b93d40f61be15e255e87948a715521c3ae957e6": {
        name: "Dark / Background / Primary (600)",
        mapsToName: "Light / Background / Primary (White)",
        mapsToKey: "2449a2983d43793d80baa20c6c60e8a48e7f3a0c"
    },
    "frame #36393f": {
        name: "Dark Primary Background",
        mapsToName: "Light / Background / Primary (White)",
        mapsToKey: "2449a2983d43793d80baa20c6c60e8a48e7f3a0c"
    },
    "rectangle #36393f": {
        name: "Dark Primary Background",
        mapsToName: "Dark / Background / Primary (600)",
        mapsToKey: "2449a2983d43793d80baa20c6c60e8a48e7f3a0c"
    },
    "frame #5865f2": {
        name: "Unstyled Brand",
        mapsToName: "other/blurple (brand-500)",
        mapsToKey: "25b165222f45fd70dc3c8e68d1a25f8d379a597d"
    },
    "rectangle #5865f2": {
        name: "Unstyled Brand",
        mapsToName: "other/blurple (brand-500)",
        mapsToKey: "25b165222f45fd70dc3c8e68d1a25f8d379a597d"
    },
    fb1358e5bd6dec072801298238cf49ff77b79a4b: {
        name: "Dark / Background / Secondary (630)",
        mapsToName: "Light / Background / Primary (White)",
        mapsToKey: "83704278c845a6a7ceb1f837387972ccb6d41960"
    },
    abf9ad88ae1ade1a4b945b012f0965c9cdc068c9: {
        name: "Dark / Background / Secondary Alternate",
        mapsToName: "Light / Background / Secondary Alternate",
        mapsToKey: "6acd84c794796d112d4e9d22c4c8a5cae940a61d"
    },
    ef179b6abe6cb8779857e05a6333d33f7a2b9320: {
        name: "Dark / Background / Tertiary (700)",
        mapsToName: "Light / Background / Tertiary (200)",
        mapsToKey: "dbd02a76b7b77c1976114c04068f0fbc22015fab"
    },
    "3dd0e30ce0a8287eb91ec1fbeff92031e634ed01": {
        name: "Dark / Background / Accent (500)",
        mapsToName: "Light / Background / Accent (500)",
        mapsToKey: "7a199ce029a847f3a361dfb6a6e0ee4e4ba84d4f"
    },
    "11516f4b43f381afb5a6bdf2c34b9437f0eecde1": {
        name: "Dark / Background / Floating (800)",
        mapsToName: "Light / Background / Floating (White)",
        mapsToKey: "6c8b08a42f9614842e880bf7bb795014d8fbae94"
    },
    bfcdf063eb2c1edb446ba5d7880da6a324cc9b4f: {
        name: "Dark / Override / Read Channels",
        mapsToName: "Light / Override / Read Channels 360",
        mapsToKey: "634ef95b53ab529a774f27ed16be07c0b3fb3a5f"
    },
    b659c283950f8b335922f52e40cefd3cf679d297: {
        name: "themes/dark/background/status-danger-background",
        mapsToName: "themes/light/background/status-danger-background",
        mapsToKey: "c592ea0b26929cf1374f973b857027dbd21ffb12"
    },
    "3dbd679897876b69bc9cc8fa38be83c525ac5ed5": {
        name: "themes/dark/background/status-warning-background",
        mapsToName: "themes/light/background/status-warning-background",
        mapsToKey: "45f2139348b50263fda4704d4a9accea74540dcc"
    },
    "746e170ac6e7ba80d171f01313735a3ec5535ef8": {
        name: "themes/dark/background/status-positive-background",
        mapsToName: "themes/light/background/status-positive-background",
        mapsToKey: "2a135fa63c0cea473936ced51ccd767b2f156739"
    },
    da21c08d5f887ae8d6195d7f8a7585219d670b93: {
        name: "themes/dark/background/background-mentioned",
        mapsToName: "themes/light/background/background-mentioned",
        mapsToKey: "30d44092c13231213143b50015907463dd1b6211"
    },
    "39c91bf62536cb1c6f51087853c35afcc6462bac": {
        name: "themes/dark/background/background-mentioned-hover",
        mapsToName: "themes/light/background/background-mentioned-hover",
        mapsToKey: "4d15ee684eb9fd6cb114d7fb585c83c9b0a598fd"
    },
    "1054e0c4bc3e52ae2c7c48aa0d0f95ed5d998587": {
        name: "themes/dark/background/background-message-hover",
        mapsToName: "themes/light/background/background-message-hover",
        mapsToKey: "440a2d66490b7162417c740e66355f39d7b9e41a"
    },
    "72a70771ff2a268130e7352250f374722f4d8bfe": {
        name: "themes/dark/background/background-mobile-primary",
        mapsToName: "themes/light/background/background-mobile-primary",
        mapsToKey: "5747d5e2f1e6047746c77e9368e8d21324eb93d9"
    },
    "251f85bc338c5411608c2dc141a538305ab6b4c1": {
        name: "themes/dark/background/background-mobile-secondary",
        mapsToName: "themes/light/background/background-mobile-secondary",
        mapsToKey: "de9f518c35096095c02c215543174a04900b07d7"
    },
    de9f518c35096095c02c215543174a04900b07d7: {
        name: "themes/light/background/background-mobile-secondary",
        mapsToName: "themes/dark/background/background-mobile-secondary",
        mapsToKey: "251f85bc338c5411608c2dc141a538305ab6b4c1"
    },
    "1e1caa8f31ed3bb7ce6e6ce20dfe3187b20766c8": {
        name: "themes/dark/background/background-nested-floating",
        mapsToName: "themes/light/background/background-nested-floating",
        mapsToKey: "1fae53b19be2fe85aa44529cd3243c7b280173f1"
    },
    d6c9270834b11c99ee651f0f5072ad2c63701165: {
        name: "Dark / Background Mod / Hover",
        mapsToName: "Light / Background Mod / Hover",
        mapsToKey: "35307396ae29aaeb583ae65891c69ec689f0c41e"
    },
    bcf890d7a215c65deef97fb3d3f5bcebc9869bab: {
        name: "Dark / Background Mod / Active",
        mapsToName: "Light / Background Mod / Active",
        mapsToKey: "ddadf76919d9bacb925242a024dc1e2f5f517a46"
    },
    ce012db42f35fb58b4fe1d6d8b46c4905a8fad0a: {
        name: "Dark / Background Mod / Selected",
        mapsToName: "Light / Background Mod / Selected",
        mapsToKey: "5af2eaf14901472c26b641997796bdba76ee1794"
    },
    a6a3dc153f0e589408186176ebf8f20ed2f9bda3: {
        name: "Dark / Background Mod / Accent",
        mapsToName: "Light / Background Mod / Accent",
        mapsToKey: "08c7091f8d6950dc3f616afe8ed45b086f9124c7"
    },
    "61c493d9d14f2a5ae52c2037149773f0cd7690a5": {
        name: "themes/dark/status/status-positive",
        mapsToName: "themes/light/status/status-positive",
        mapsToKey: "6faa6d09b47caeb32fa0f5f81c561dcb7d68e9b1"
    },
    "0ff4d563aae53dd8012f78a67f9fd182693a0f21": {
        name: "themes/dark/status/status-danger",
        mapsToName: "themes/light/status/status-danger",
        mapsToKey: "0c9cfa27f153e6a5a9954242bb6ae3cac02d4468"
    },
    f719fb8e7bf04342010ecb37165e55aa8a638d35: {
        name: "themes/dark/status/status-warning",
        mapsToName: "themes/light/status/status-warning",
        mapsToKey: "9fa2f99cffe7ba587f259e98fb4de12c0b893223"
    },
    "6c54be693a4bbdff6fa4c02f672bc5c9e4654f8b": {
        name: "themes/dark/other/channeltextarea-background",
        mapsToName: "themes/light/other/channeltextarea-background",
        mapsToKey: "3c098a8d09acbd25ef37e7fc0b657c2dc78f243e"
    },
    a4d76cf75156ab760df1685a30dadab20724010e: {
        name: "themes/dark/other/focus-primary0",
        mapsToName: "themes/light/other/focus-primary",
        mapsToKey: "d1dbae483f4eefcf5adccfbba8e6d50dbef1ec27"
    },
    "7337ac931b2c9b699d44e6e783637e5afac50298": {
        name: "themes/dark/other/control-brand-foreground",
        mapsToName: "themes/light/other/control-brand-foreground",
        mapsToKey: "bbdc5cb26595f77283b8dfe51e659c5bfdc6a2d0"
    },
    a926774d558d0e70f505df697c21c12dc4270206: {
        name: "themes/dark/other/scrollbar-thin-thumb",
        mapsToName: "themes/light/other/scrollbar-thin-thumb",
        mapsToKey: "084969be9bfee752064df1c504b6ba07a8d727ad"
    },
    "2ab24b1a3901fae7960deb8a36e49f0d6b1732af": {
        name: "themes/dark/other/scrollbar-auto-thumb",
        mapsToName: "themes/light/other/scrollbar-auto-thumb",
        mapsToKey: "6436d02f21d749b84cbd8736bd453dad1c4ac3ab"
    },
    d509bf14b1c3aac55dc0fd6b822f628956ad80c3: {
        name: "themes/dark/other/scrollbar-auto-track",
        mapsToName: "themes/light/other/scrollbar-auto-track",
        mapsToKey: "54fb146609c07fba199d4066f8c2ce14829a0d0a"
    },
    b7edafef4513a59a40c8ba7adb382a0b6d3313ff: {
        name: "Border Elevation / Dark",
        mapsToName: "Border Elevation / Light",
        mapsToKey: "bf64ca51f902a903935680f692618a5eba4ea894"
    },
    "67aabb2beb8092e4c0094e0175657bb0758e6ba8": {
        name: "High Elevation / Dark",
        mapsToName: "High Elevation / Light",
        mapsToKey: "30f011bbe03506a59052d7f8435cc1ec3b743b19"
    },
    d104f004f79d0e422c44d14efdd5e527d57a185f: {
        name: "BETA_DEPRECATED/header/header-primary",
        mapsToName: "themes/light/header/header-primary",
        mapsToKey: "b19a14675b8adeb1528ab5f84e57b2eeed10d46c"
    },
    "1aee47626b0083fe2830fb8262d9ba2d1790949f": {
        name: "BETA_DEPRECATED/header/header-secondary",
        mapsToName: "themes/light/header/header-secondary",
        mapsToKey: "608f2ea1aa64ff7f202e8c22cc4147a02be9d85b"
    },
    bd768f7dda36913ff061b1f82a273264e710e9e0: {
        name: "BETA_DEPRECATED/background/background-primary",
        mapsToName: "themes/light/background/background-primary",
        mapsToKey: "2449a2983d43793d80baa20c6c60e8a48e7f3a0c"
    },
    e8c94a8857a45794172b8e7e1f4392b388403cfd: {
        name: "BETA_DEPRECATED/background/background-secondary",
        mapsToName: "themes/light/background/background-secondary",
        mapsToKey: "83704278c845a6a7ceb1f837387972ccb6d41960"
    },
    "8ed7c2cbc95b1ef5dbd750e29446fb30f5e2c7d6": {
        name: "themes/light/text/text-normal",
        mapsToName: "themes/light/background/background-primary",
        mapsToKey: "546c7d46e754ac2b23b338783d72f206b77b6436"
    },
    "7a18a8af03b002b7433560a024d0416017a927bd": {
        name: "BETA_DEPRECATED/text/text-muted",
        mapsToName: "themes/light/text/text-muted",
        mapsToKey: "7d8703ec132ddaf6968f6d190d1e80031c559d7c"
    }
};



/***/ }),

/***/ "./src/plugin/light-to-dark-theme.ts":
/*!*******************************************!*\
  !*** ./src/plugin/light-to-dark-theme.ts ***!
  \*******************************************/
/*! exports provided: lightTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightTheme", function() { return lightTheme; });
const lightTheme = {
    "33425bd93c1b8cea071df9b5297f0b19583a643b": {
        componentName: "iPhone X Status Bar / Light",
        mapsToKey: "f0d4aa5e63fff4392e3b3c22884523369f5d0424"
    },
    "0489bde7fd0346a97eff3170167714838a8ffb9c": {
        componentName: "iPhone X Home Indicator / Light",
        mapsToKey: "5b8dce7a790466da546d319a69f5de220e1a66f1"
    },
    "867fa47defeb07293aa37e5467e4ca487019dd78": {
        componentName: "System (Light) / Numeric Keyboard",
        mapsToKey: "3ee4cf479eefd5e181ff4abd1c982011438e692d"
    },
    bca69f03db8e938cd78ca91c84e35553804ca8c1: {
        componentName: "System (Light) / Keyboard",
        mapsToKey: "e4dcbeb8549332e4c969ef4d0d302e75a7932c25"
    },
    "46d6bed4edd9482b1452afab5ab0292b516c9e09": {
        componentName: "Navigation Tab / Light",
        mapsToKey: "64d16554561a7496b2d23854074ce923655918e0"
    },
    "00230f03c08e00a787e9c2659c3165bcad7ae06b": {
        componentName: "Header / Guild / Light",
        mapsToKey: "e9622ab25248f31fb02b6faa00308b8faa4acb3e"
    },
    "4592fb98edf78fdeea07d23445de948286e7c5f2": {
        componentName: "Header / DM",
        mapsToKey: "ff8b5c71a60fc212647c40e481c0bf1886a3ec85"
    },
    "790d7d3d884a6d3dadc79bf3c48a4918f4c16ba7": {
        componentName: "Status Bar / Light",
        mapsToKey: "3588fe4d5a302b2fca2be2b0cb5c12e2a2f41c05"
    },
    a9231a3d9fac5b7d26d56904c7b28d5d00bfff97: {
        componentName: "Guild Selected / Light",
        mapsToKey: "9e0a9f99024fb9baedcacbb123c84d7cc4b8f87a"
    },
    "8c80d5bd7bdd80acec9793a719f6caaebba1c6ee": {
        componentName: "Messages Selected / Light",
        mapsToKey: "c25d89953041d095215c972fa55dc6f7776d9a54"
    },
    bd56c3e89162d8274c4ca591f2ca1e1064658570: {
        componentName: "Navigation Tab / Dark",
        mapsToKey: "43c14ca23834d2aa3bf1e027a0635c7393e87378"
    },
    "05fc2a6b4207baa8f672dc9e8a5d750c5d60711b": {
        componentName: "Windows Bar / Light",
        mapsToKey: "d31d651767116b73f9209c5362669782ff3a8a25"
    },
    b19a14675b8adeb1528ab5f84e57b2eeed10d46c: {
        name: "Light / Header / Primary (900)",
        mapsToName: "Dark / Header / Primary (White)",
        mapsToKey: "5c1691cbeaaf4270107d34f1a12f02fdd04afa02"
    },
    "608f2ea1aa64ff7f202e8c22cc4147a02be9d85b": {
        name: "Light / Header / Secondary (600)",
        mapsToName: "Dark / Header / Secondary (300)",
        mapsToKey: "bc090cb3b1c7313ae276acbd791b5b87b478ec59"
    },
    "546c7d46e754ac2b23b338783d72f206b77b6436": {
        name: "Light / Text / Normal (700)",
        mapsToName: "Dark / Text / Normal (200)",
        mapsToKey: "5c77a96137b698b5575557c069cabd6877d66e1e"
    },
    "7d8703ec132ddaf6968f6d190d1e80031c559d7c": {
        name: "Light / Text / Muted (500)",
        mapsToName: "Dark / Text / Muted (400)",
        mapsToKey: "5d84ad92f3ad152f196e2093a3c0542a08dfba11"
    },
    "64d3058dd508a4985670b2d19418a06a3503c9c2": {
        name: "Light / Text / Link",
        mapsToName: "Dark / Text / Link",
        mapsToKey: "bf03232753079bdd5bec6c55343b659876b5283f"
    },
    "15320fd498dcd4e113c5bd587dca2d11d4492e84": {
        name: "themes/light/text/text-brand",
        mapsToName: "themes/dark/text/text-brand",
        mapsToKey: "6e4aef7677e2ea82c87465276522da7ef5a07121"
    },
    c8d237080d38671193403b49cdc6a5778a14bf45: {
        name: "themes/light/text/text-danger",
        mapsToName: "themes/dark/text/text-danger",
        mapsToKey: "094cbaac0817be7bbfd8292cb98fc1e515e7ea0e"
    },
    "0d95a7d4d30ef99ebd04abd5b2dd4708913f765b": {
        name: "themes/light/text/text-warning",
        mapsToName: "themes/dark/text/text-warning",
        mapsToKey: "df0622bb33232fe041c468e8d3dd37e5428b10e7"
    },
    "71f64b08bdec4daf747a850b128e0994c4593c04": {
        name: "themes/light/text/text-positive",
        mapsToName: "themes/dark/text/text-positive",
        mapsToKey: "7733117cf1ef570b77332c86ba783af6cb735fc1"
    },
    "9c23a031773711e026394f4354661c37ee5b4682": {
        name: "Light / Interactive Text & Icons / Normal (600)",
        mapsToName: "Dark / Interactive Text & Icons / Normal (300)",
        mapsToKey: "287463bade90c1eed5ea4cb0b5d63794daa8aec2"
    },
    "vector #757575": {
        name: "Unstyled Icon",
        mapsToName: "Dark / Interactive Text & Icons / Normal (300)",
        mapsToKey: "287463bade90c1eed5ea4cb0b5d63794daa8aec2"
    },
    "vector #4f5660": {
        name: "Unstyled Icon",
        mapsToName: "Dark / Interactive Text & Icons / Normal (300)",
        mapsToKey: "287463bade90c1eed5ea4cb0b5d63794daa8aec2"
    },
    "boolean_operation #757575": {
        name: "Unstyled Icon",
        mapsToName: "Dark / Interactive Text & Icons / Normal (300)",
        mapsToKey: "287463bade90c1eed5ea4cb0b5d63794daa8aec2"
    },
    "boolean_operation #4f5660": {
        name: "Unstyled Icon",
        mapsToName: "Dark / Interactive Text & Icons / Normal (300)",
        mapsToKey: "287463bade90c1eed5ea4cb0b5d63794daa8aec2"
    },
    e9542e95adf3bbe74286c2cf279fee64f7ba3279: {
        name: "themes/light/interactive/interactive-hover",
        mapsToName: "themes/dark/interactive/interactive-hover",
        mapsToKey: "502dcdf04992818dcbaed125ad711b446dee4c68"
    },
    "620c98e8f9255a6107dee91745669e5b702b413c": {
        name: "Light / Interactive Text & Icons / Active (900)",
        mapsToName: "Dark / Interactive Text & Icons / Active (White)",
        mapsToKey: "3eddc15e90bbd7064aea7cc13dc13e23a712f0b0"
    },
    "9328cd78a39149b070d68f98d9fe4df7a92bf67d": {
        name: "Light / Interactive Text & Icons / Muted (300)",
        mapsToName: "Dark / Interactive Text & Icons / Muted (500)",
        mapsToKey: "fa698aa2a724522a7c29efb0a662aec75a1be5a1"
    },
    "2449a2983d43793d80baa20c6c60e8a48e7f3a0c": {
        name: "Light / Background / Primary (White)",
        mapsToName: "Dark / Background / Primary (600)",
        mapsToKey: "4b93d40f61be15e255e87948a715521c3ae957e6"
    },
    "frame #ffffff": {
        name: "White Background",
        mapsToName: "Dark / Background / Primary (600)",
        mapsToKey: "4b93d40f61be15e255e87948a715521c3ae957e6"
    },
    "frame #5865f2": {
        name: "Unstyled Brand",
        mapsToName: "other/blurple (brand-500)",
        mapsToKey: "25b165222f45fd70dc3c8e68d1a25f8d379a597d"
    },
    "rectangle #5865f2": {
        name: "Unstyled Brand",
        mapsToName: "other/blurple (brand-500)",
        mapsToKey: "25b165222f45fd70dc3c8e68d1a25f8d379a597d"
    },
    "83704278c845a6a7ceb1f837387972ccb6d41960": {
        name: "Light / Background / Secondary (130)",
        mapsToName: "Dark / Background / Secondary (630)",
        mapsToKey: "fb1358e5bd6dec072801298238cf49ff77b79a4b"
    },
    "6acd84c794796d112d4e9d22c4c8a5cae940a61d": {
        name: "Light / Background / Secondary Alternate",
        mapsToName: "Dark / Background / Secondary Alternate",
        mapsToKey: "abf9ad88ae1ade1a4b945b012f0965c9cdc068c9"
    },
    dbd02a76b7b77c1976114c04068f0fbc22015fab: {
        name: "Light / Background / Tertiary (200)",
        mapsToName: "Dark / Background / Tertiary (700)",
        mapsToKey: "ef179b6abe6cb8779857e05a6333d33f7a2b9320"
    },
    "7a199ce029a847f3a361dfb6a6e0ee4e4ba84d4f": {
        name: "Light / Background / Accent (500)",
        mapsToName: "Dark / Background / Accent (500)",
        mapsToKey: "3dd0e30ce0a8287eb91ec1fbeff92031e634ed01"
    },
    "634ef95b53ab529a774f27ed16be07c0b3fb3a5f": {
        name: "Light / Override / Read Channels 360",
        mapsToName: "Dark / Override / Read Channels",
        mapsToKey: "bfcdf063eb2c1edb446ba5d7880da6a324cc9b4f"
    },
    "6c8b08a42f9614842e880bf7bb795014d8fbae94": {
        name: "Light / Background / Floating (White)",
        mapsToName: "Dark / Background / Floating (800)",
        mapsToKey: "11516f4b43f381afb5a6bdf2c34b9437f0eecde1"
    },
    c592ea0b26929cf1374f973b857027dbd21ffb12: {
        name: "themes/light/background/status-danger-background",
        mapsToName: "themes/dark/background/status-danger-background",
        mapsToKey: "b659c283950f8b335922f52e40cefd3cf679d297"
    },
    "45f2139348b50263fda4704d4a9accea74540dcc": {
        name: "themes/light/background/status-warning-background",
        mapsToName: "themes/dark/background/status-warning-background",
        mapsToKey: "3dbd679897876b69bc9cc8fa38be83c525ac5ed5"
    },
    "2a135fa63c0cea473936ced51ccd767b2f156739": {
        name: "themes/light/background/status-positive-background",
        mapsToName: "themes/dark/background/status-positive-background",
        mapsToKey: "746e170ac6e7ba80d171f01313735a3ec5535ef8"
    },
    "30d44092c13231213143b50015907463dd1b6211": {
        name: "themes/light/background/background-mentioned",
        mapsToName: "themes/dark/background/background-mentioned",
        mapsToKey: "da21c08d5f887ae8d6195d7f8a7585219d670b93"
    },
    "4d15ee684eb9fd6cb114d7fb585c83c9b0a598fd": {
        name: "themes/light/background/background-mentioned-hover",
        mapsToName: "themes/dark/background/background-mentioned-hover",
        mapsToKey: "39c91bf62536cb1c6f51087853c35afcc6462bac"
    },
    "440a2d66490b7162417c740e66355f39d7b9e41a": {
        name: "themes/light/background/background-message-hover",
        mapsToName: "themes/dark/background/background-message-hover",
        mapsToKey: "1054e0c4bc3e52ae2c7c48aa0d0f95ed5d998587"
    },
    "5747d5e2f1e6047746c77e9368e8d21324eb93d9": {
        name: "themes/light/background/background-mobile-primary",
        mapsToName: "themes/dark/background/background-mobile-primary",
        mapsToKey: "72a70771ff2a268130e7352250f374722f4d8bfe"
    },
    de9f518c35096095c02c215543174a04900b07d7: {
        name: "themes/light/background/background-mobile-secondary",
        mapsToName: "themes/dark/background/background-mobile-secondary",
        mapsToKey: "251f85bc338c5411608c2dc141a538305ab6b4c1"
    },
    "1fae53b19be2fe85aa44529cd3243c7b280173f1": {
        name: "themes/light/background/background-nested-floating",
        mapsToName: "themes/dark/background/background-nested-floating",
        mapsToKey: "1e1caa8f31ed3bb7ce6e6ce20dfe3187b20766c8"
    },
    "35307396ae29aaeb583ae65891c69ec689f0c41e": {
        name: "Light / Background Mod / Hover",
        mapsToName: "Dark / Background Mod / Hover",
        mapsToKey: "d6c9270834b11c99ee651f0f5072ad2c63701165"
    },
    ddadf76919d9bacb925242a024dc1e2f5f517a46: {
        name: "Light / Background Mod / Active",
        mapsToName: "Dark / Background Mod / Active",
        mapsToKey: "bcf890d7a215c65deef97fb3d3f5bcebc9869bab"
    },
    "5af2eaf14901472c26b641997796bdba76ee1794": {
        name: "Light / Background Mod / Selected",
        mapsToName: "Dark / Background Mod / Selected",
        mapsToKey: "ce012db42f35fb58b4fe1d6d8b46c4905a8fad0a"
    },
    "08c7091f8d6950dc3f616afe8ed45b086f9124c7": {
        name: "Light / Background Mod / Accent",
        mapsToName: "Dark / Background Mod / Accent",
        mapsToKey: "a6a3dc153f0e589408186176ebf8f20ed2f9bda3"
    },
    "6faa6d09b47caeb32fa0f5f81c561dcb7d68e9b1": {
        name: "themes/light/status/status-positive",
        mapsToName: "themes/dark/status/status-positive",
        mapsToKey: "61c493d9d14f2a5ae52c2037149773f0cd7690a5"
    },
    "0c9cfa27f153e6a5a9954242bb6ae3cac02d4468": {
        name: "themes/light/status/status-danger",
        mapsToName: "themes/dark/status/status-danger",
        mapsToKey: "0ff4d563aae53dd8012f78a67f9fd182693a0f21"
    },
    "9fa2f99cffe7ba587f259e98fb4de12c0b893223": {
        name: "themes/light/status/status-warning",
        mapsToName: "themes/dark/status/status-warning",
        mapsToKey: "f719fb8e7bf04342010ecb37165e55aa8a638d35"
    },
    "3c098a8d09acbd25ef37e7fc0b657c2dc78f243e": {
        name: "themes/light/other/channeltextarea-background",
        mapsToName: "themes/dark/other/channeltextarea-background",
        mapsToKey: "6c54be693a4bbdff6fa4c02f672bc5c9e4654f8b"
    },
    d1dbae483f4eefcf5adccfbba8e6d50dbef1ec27: {
        name: "themes/light/other/focus-primary",
        mapsToName: "themes/dark/other/focus-primary",
        mapsToKey: "a4d76cf75156ab760df1685a30dadab20724010e"
    },
    bbdc5cb26595f77283b8dfe51e659c5bfdc6a2d0: {
        name: "themes/light/other/control-brand-foreground",
        mapsToName: "themes/dark/other/control-brand-foreground",
        mapsToKey: "7337ac931b2c9b699d44e6e783637e5afac50298"
    },
    "084969be9bfee752064df1c504b6ba07a8d727ad": {
        name: "themes/light/other/scrollbar-thin-thumb",
        mapsToName: "themes/dark/other/scrollbar-thin-thumb",
        mapsToKey: "a926774d558d0e70f505df697c21c12dc4270206"
    },
    "6436d02f21d749b84cbd8736bd453dad1c4ac3ab": {
        name: "themes/light/other/scrollbar-auto-thumb",
        mapsToName: "themes/dark/other/scrollbar-auto-thumb",
        mapsToKey: "2ab24b1a3901fae7960deb8a36e49f0d6b1732af"
    },
    "54fb146609c07fba199d4066f8c2ce14829a0d0a": {
        name: "themes/light/other/scrollbar-auto-track",
        mapsToName: "themes/dark/other/scrollbar-auto-track",
        mapsToKey: "d509bf14b1c3aac55dc0fd6b822f628956ad80c3"
    },
    bf64ca51f902a903935680f692618a5eba4ea894: {
        name: "Border Elevation / Light",
        mapsToName: "Border Elevation / Dark",
        mapsToKey: "b7edafef4513a59a40c8ba7adb382a0b6d3313ff"
    },
    "30f011bbe03506a59052d7f8435cc1ec3b743b19": {
        name: "High Elevation / Light",
        mapsToName: "High Elevation / Dark",
        mapsToKey: "67aabb2beb8092e4c0094e0175657bb0758e6ba8"
    },
    "5afa1524777579ea2eebc983f3210547c838fd3a": {
        name: "BETA_DEPRECATED/header/header-primary",
        mapsToName: "themes/dark/header/header-primary",
        mapsToKey: "5c1691cbeaaf4270107d34f1a12f02fdd04afa02"
    },
    "206fc2ae47513da5db7cd705e758593221bb4b63": {
        name: "BETA_DEPRECATED/header/header-secondary",
        mapsToName: "themes/dark/header/header-secondary",
        mapsToKey: "bc090cb3b1c7313ae276acbd791b5b87b478ec59"
    },
    ac344309d7e7d20a6b518d49d1501e3d134d996b: {
        name: "BETA_DEPRECATED/background/background-primary",
        mapsToName: "themes/dark/background/background-primary",
        mapsToKey: "4b93d40f61be15e255e87948a715521c3ae957e6"
    },
    "5100d653a726bf86e3b43a3349c396474bd63950": {
        name: "BETA_DEPRECATED/background/background-secondary",
        mapsToName: "themes/dark/background/background-secondary",
        mapsToKey: "fb1358e5bd6dec072801298238cf49ff77b79a4b"
    },
    "6e18949a990499bc0af852de9de4f2e378b1f954": {
        name: "BETA_DEPRECATED/text/text-normal",
        mapsToName: "themes/dark/text/text-normal",
        mapsToKey: "5c77a96137b698b5575557c069cabd6877d66e1e"
    },
    "15d9230a1d41d9acd21b63012f86613f879cfaae": {
        name: "BETA_DEPRECATED/text/text-muted",
        mapsToName: "themes/dark/text/text-muted",
        mapsToKey: "5d84ad92f3ad152f196e2093a3c0542a08dfba11"
    }
};



/***/ }),

/***/ "./src/plugin/old-to-new-theme.ts":
/*!****************************************!*\
  !*** ./src/plugin/old-to-new-theme.ts ***!
  \****************************************/
/*! exports provided: cdsTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cdsTheme", function() { return cdsTheme; });
const cdsTheme = {
    "82c83bb9c1cf6cf521cbf5e62415e3053cf155f8": {
        name: "White",
        mapsToName: "White",
        mapsToKey: "4207fd53f422499ce526640a85a43986932952e5"
    },
    "87d133ff2eb48cc6082afcc817dd4d4cd3ff1c6b": {
        name: "A_Light_1.1",
        mapsToName: "Blue 1",
        mapsToKey: "67079c6a65289354dd87694e59e8c26de6594f3b"
    },
    ae3d8493b3f59eaceb1b7a62131763bede9440fd: {
        name: "A_Light_2.1",
        mapsToName: "Blue 2",
        mapsToKey: "be30a12538d2efad9ce2c6441e87985ea9d51d0a"
    },
    "4d7d3bc20a98fe123c8fd9594917b7aaf7f431c3": {
        name: "A_Light_3.1",
        mapsToName: "Blue 3",
        mapsToKey: "3d7ebc4225a325cab42be2887e48fb1e29d14506"
    },
    db43416d71a4241283785aab4f0900cf4ae3366f: {
        name: "A_Mid_1.1",
        mapsToName: "Blue 6",
        mapsToKey: "7a51bb8f5fee2abbb42b940aeae8f20f651a5a42"
    },
    "55eb9151a4dcba3097e2ef3ac3351431f5cd5ab3": {
        name: "A_Mid_2.1",
        mapsToName: "Blue 7",
        mapsToKey: "7925d2d3a793891ad31e8d690bafcac136451370"
    },
    "756bfee6f498e41028abba8952b03db45ffbf413": {
        name: "A_Dark_1.1",
        mapsToName: "Blue 8",
        mapsToKey: "207eb81d34d97e7b9b3f473d346ec0c50efaab94"
    },
    d4a06bdd3f6a7793a49c3c2781468319056ec556: {
        name: "A_Dark_2.1",
        mapsToName: "Blue 9",
        mapsToKey: "714ba741f7b6d27dd80bceca1b9c8d14063af873"
    },
    ffc55eda5952075f8f89a3bdc14df50c484180e5: {
        name: "B_Light_1.1",
        mapsToName: "Green 1",
        mapsToKey: "c42dba8b239bf4ed7ee2900c9127b550ee69c019"
    },
    "3c3eb00c7c9e88dd3a0599caa66a271f0c37fb2b": {
        name: "B_Light_2.1",
        mapsToName: "Green 2",
        mapsToKey: "34c57440d58d02a011fc040f01cbcd0ffb8ce103"
    },
    e2cba5415acaf3f77a78fa2162432c0f72caf328: {
        name: "B_Mid_1.1",
        mapsToName: "Green 6",
        mapsToKey: "67a75493c5bf0cba113c820d2f1d998a80d3c266"
    },
    c87aa243e86b0560a7e10640ba34ff0b06666aa1: {
        name: "B_Mid_2.1",
        mapsToName: "Green 7",
        mapsToKey: "e727bcb58822b02076e8bf1a3b576db6e5185987"
    },
    a89c8fe722ca322b4c9028a0c78cfffff80cea68: {
        name: "B_Mid_3.1",
        mapsToName: "Green 8",
        mapsToKey: "315986acad193c19351291764017a2dcd41d997f"
    },
    "209bc18d7b81cc635a086664396e3d626a135fd7": {
        name: "B_Mid_4.1",
        mapsToName: "Green 8",
        mapsToKey: "315986acad193c19351291764017a2dcd41d997f"
    },
    "47f88ce5aed84085aac8669d78ca6d971eb064a2": {
        name: "B_Dark_1.1",
        mapsToName: "Green 8",
        mapsToKey: "315986acad193c19351291764017a2dcd41d997f"
    },
    "09a27111fbce1ccfc6976df7ceb042da6000cb58": {
        name: "B_Dark_2.1",
        mapsToName: "Green 9",
        mapsToKey: "1dd1b4fed48f85fc47885c7fb075289aebe5c174"
    },
    "9675dd35a8e744679ddba3d48f8324a6b11b8e18": {
        name: "B_Dark_3.1",
        mapsToName: "Green 10",
        mapsToKey: "bea6529d0eb7bcc32c7e9b11e6a96a54844d3f26"
    },
    ec18e06b93515a3eca3b41f3be0a6a6b20b9c5cb: {
        name: "C_Mid_1.1",
        mapsToName: "Orange 6",
        mapsToKey: "dcdb613524aca1ca4cb8d96d029ded3070811302"
    },
    "93c3270e5279c1f4ef0338163a58ad8567c1e294": {
        name: "C_Mid_2.1",
        mapsToName: "Orange 7",
        mapsToKey: "494770bf8d9f0f7da2f2dbb48723c232f26a78c2"
    },
    ace7719362211ee625792f2e7e3de7a5b6f19f6f: {
        name: "D_Mid_1.1",
        mapsToName: "Red 6",
        mapsToKey: "58dac2583a4270c0cae8919b30ac504fe0cd4d71"
    },
    "1679356ccc0091bc9b3b5e90ffa7a3b41228595e": {
        name: "D_Mid_2.1",
        mapsToName: "Red 7",
        mapsToKey: "fc4d00e633850a73da14720425e1c80b34ed13ff"
    },
    "24242b68e95690a39cf5c380a44141318409aa3d": {
        name: "D_Dark_1.1",
        mapsToName: "Red 8",
        mapsToKey: "34af246994b66bad7f431cafe026e4607fe7e431"
    },
    fdedac5d55b6689f337aba34a9c577bf47d0e694: {
        name: "E_SuperLight_1.1",
        mapsToName: "Gray 1",
        mapsToKey: "33c7165453ee0d0d63012c4f90236c2a5c494440"
    },
    b9765434ac2d8da8b8d48b5de7a76f8bd8b1d855: {
        name: "E_SuperLight_2.1",
        mapsToName: "Gray 1",
        mapsToKey: "33c7165453ee0d0d63012c4f90236c2a5c494440"
    },
    a395508de1445693bdb270c94207d5e0a8f86b72: {
        name: "E_Light_1.1",
        mapsToName: "Gray 2",
        mapsToKey: "24cbe3cc75cc023128d75302c91734721f7e2bab"
    },
    "20f93c76f9ef3dcc0277a422783e61ff5d247ccb": {
        name: "E_Light_2.1",
        mapsToName: "Gray 2",
        mapsToKey: "24cbe3cc75cc023128d75302c91734721f7e2bab"
    },
    b2edfce7d1c1fa39c211aa7b5221c056382e6500: {
        name: "E_Mid_1.1",
        mapsToName: "Gray 3",
        mapsToKey: "9f9a6e44f40548c9c48be6039d44397f46045de8"
    },
    c0e518b91080f9a80ce066a1dd74a9d94e7ab394: {
        name: "E_Mid_2.1",
        mapsToName: "Gray 4",
        mapsToKey: "b1d4caa983bdc013a1405ee049ed8e9678de77dd"
    },
    ecfb60fcda210ee2db63c704c0e23d8b81d31e7f: {
        name: "E_Mid_3.1",
        mapsToName: "Gray 5",
        mapsToKey: "f011ceb5cd33eaf4c5d49f6b49af3aa61c0d0b01"
    },
    "1cb9fca782a78dc69fd7a8d221b3f14de8e4f321": {
        name: "E_Mid_4.1",
        mapsToName: "Gray 6",
        mapsToKey: "77db449be1de3fca6d644a05fd5b92f8b65efa95"
    },
    b5247b7f16364ce66b1c35e7ec4eb9c79fa2e486: {
        name: "E_Dark_1.1",
        mapsToName: "Gray 7",
        mapsToKey: "cb7ba23e4c300f2ea6527aa721257d9c5c1aa242"
    },
    "58420c0790448a4db66cf4bed934c6cd9fcbf429": {
        name: "E_Dark_2.1",
        mapsToName: "Gray 10",
        mapsToKey: "571216adfa53a3afc50980def4fd722ddad6a9e4"
    },
    "7071d6bf97b8a39e8b311237aa2db5cf9fa1de68": {
        name: "E_Dark_3.1",
        mapsToName: "Gray 12",
        mapsToKey: "2e639e7eb3de10bedae7087d7409a4be24b4b293"
    },
    "780e847777b957a50445fe8f9fdf34fd7e82b0a4": {
        name: "Accordion / Parent",
        mapsToKey: "28d4bcc1451494064634705bb41ea0e303239990",
        mapsToName: "Accordion / Parent"
    },
    "0f385b83826d7223b5fe19db40e0891fb8dd200d": {
        name: "Accordion / Child",
        mapsToKey: "b8ffcffa8ed31f8cb2dd3b181fd527b4a142c52e",
        mapsToName: "Accordion / Child"
    },
    "109d31db0118b1d3ba8f0d2cc68286e94c7e6952": {
        name: "Accordion / Expanded",
        mapsToKey: "08374023a69f03a75d8283762513e541ed151001",
        mapsToName: "Accordion / Expanded"
    },
    f6f6adb964367c514db29aa250f747ebe0e4cd98: {
        name: "Accordion / Collapsed",
        mapsToKey: "2a1bbf6fda633e458ec93d83b0909ed28dca2e65",
        mapsToName: "Accordion / Collapsed"
    },
    ca414720bf79919b0cc4e470293a7205cb16987f: {
        name: "*Breadcrumb",
        mapsToKey: "b965024d7bc13e623d95b16ea26b5a6f05e0598d",
        mapsToName: "*Breadcrumb"
    },
    fa21655d4e75355339f36fe9f6af17b9f6a76058: {
        name: "Button / Primary / Enabled",
        mapsToKey: "606ff8ef4449ed44bea03891ea498716e5b21474",
        mapsToName: "Button / Primary / Active"
    },
    e5c697c717533ca879436c916e544f630423bc5f: {
        name: "Button / Primary / Hovered",
        mapsToKey: "eb0c40ae18b8b15e1e15d251affc08b38f0ce262",
        mapsToName: "Button / Primary / Hovered"
    },
    d3f7a46044d3a25cbca61f2f4e92548d77c98231: {
        name: "Button / Primary / Pressed",
        mapsToKey: "f62393e584067f798e0c5f1f4ce59569152a67e2",
        mapsToName: "Button / Primary / Pressed"
    },
    f7d79eec392fc2371eb0a2e79bde29a9996ba483: {
        name: "Button / Primary / Disabled",
        mapsToKey: "213ee09ed132e8110a91bcd1bf28017e345fb49b",
        mapsToName: "Button / Primary / Disabled"
    },
    a49cb847db7c647fd15612c7bf381d10164e50b4: {
        name: "Button / Secondary / Enabled",
        mapsToKey: "c0a17e23de589f0986518ea3f9c39eed9e501989",
        mapsToName: "Button / Secondary / Active"
    },
    "8ea6499120a33786c86716ef5e38aa185eaee7a0": {
        name: "Button / Secondary / Hovered",
        mapsToKey: "fd8d687558f54f3fc10e51d99f114378ea9df2fb",
        mapsToName: "Button / Secondary / Hovered"
    },
    c45000850e5c6361cab142701c8d0148bfcc4bad: {
        name: "Button / Secondary / Pressed",
        mapsToKey: "6f1b82ff8a5d451057dc24833199dcf927bb9fe7",
        mapsToName: "Button / Secondary / Pressed"
    },
    ec943f31b71b1767989afefc01b86e490723b91d: {
        name: "Button / Secondary / Disabled",
        mapsToKey: "af9d9e34da1c8667f60047edb1ebb59abaea8cd0",
        mapsToName: "Button / Secondary / Disabled"
    },
    b4b977139dba80eba8392be3effa8eaaaff32c1f: {
        name: "Button / Tertiary / Enabled",
        mapsToKey: "62ccb2dbf25ad0e2f8710c43e8740673908e03c6",
        mapsToName: "Button / Tertiary / Active"
    },
    "3eba650be3c049546fdbf8dbff25a98442769bd5": {
        name: "Button / Tertiary / Hovered",
        mapsToKey: "aa6175c04c674bc0539f8c66903b520ef9b258ef",
        mapsToName: "Button / Tertiary / Hovered"
    },
    "1dd25355426e06a2fd335d89b2e27de778f853a9": {
        name: "Button / Tertiary / Pressed",
        mapsToKey: "9deac6077535f6655aa77af881e9ee852429f443",
        mapsToName: "Button / Tertiary / Pressed"
    },
    af1e823509b45a6e216d2fa003c76bb3c3157c4f: {
        name: "Button / Tertiary / Disabled",
        mapsToKey: "0a4a50a4786d6cc15b19db474e7252e677722109",
        mapsToName: "Button / Tertiary / Disabled"
    },
    "4e3ae58e7516afa8e909f4eff3def5dd76d87654": {
        name: "Button / Danger / Enabled",
        mapsToKey: "7c1888d932d5ac223ed7d1aee946c6d9cd7cda38",
        mapsToName: "Button / Danger / Active"
    },
    ef34f7ed1ccc8373995b4e89ffe8fddcb7626539: {
        name: "Button / Danger / Hovered",
        mapsToKey: "cff925d09de929b02f1fe8f51d31738326a6f730",
        mapsToName: "Button / Danger / Hovered"
    },
    d60af2ba2cf9b9a8ea7983a3bffc5dd8bde77c1b: {
        name: "Button / Danger / Pressed",
        mapsToKey: "cf0000f2810e5108f88d209760977bcbfd06e686",
        mapsToName: "Button / Danger / Pressed"
    },
    "588e7d0aa502f470be1a72578ccc47a90dfcbb37": {
        name: "Button / Danger / Disabled",
        mapsToKey: "b50fa1aa09ed8530df4397963db9c6c8e026cc67",
        mapsToName: "Button / Danger / Disabled"
    },
    "8f9d1a97fa9b5e9a41ea2fdfd5a8b2c5d599dc52": {
        name: "Button / Transparent / Enabled",
        mapsToKey: "515d897006f3bd50c6812603b6a0ac9b4c1aa427",
        mapsToName: "Button / Transparent / Active"
    },
    "5249c381257511fb8c87d55f4760ba9946c01f1d": {
        name: "Button / Transparent / Hovered",
        mapsToKey: "dad5483b21fade7c649c5649469ddee2eb7eef0c",
        mapsToName: "Button / Transparent / Hovered"
    },
    "97550c2903d47ad3b2b9aafcae15c59f1140cdec": {
        name: "Button / Transparent / Pressed",
        mapsToKey: "80aaea3352f934dccfd51126796ae905e37b9d5f",
        mapsToName: "Button / Transparent / Pressed"
    },
    "537cef10af10bd77d56718bf50a14097638755f6": {
        name: "Button / Transparent / Disabled",
        mapsToKey: "c0e348e20165d393aa909a0ba7eff514d5d5df61",
        mapsToName: "Button / Transparent / Disabled"
    },
    a1d52200eb2a3dd6f4f1270910b3cdbe8c31213c: {
        name: "Button-Large-Icon / Primary / Enabled",
        mapsToKey: "406a72e6d78adb5db431cc519ba4fe999c5e7919",
        mapsToName: "Button-Large-Icon / Primary / Enabled"
    },
    e40d3df5bcec183ac9dd17b525466b54662f971f: {
        name: "Button-Large-Icon / Primary / Hover",
        mapsToKey: "fc6688a24a930a9be74232e8afad911a950606ae",
        mapsToName: "Button-Large-Icon / Primary / Hover"
    }
};



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vZGFyay10by1saWdodC10aGVtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL2xpZ2h0LXRvLWRhcmstdGhlbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9vbGQtdG8tbmV3LXRoZW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDQTtBQUNDO0FBQ0w7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsOERBQVM7QUFDeEU7QUFDQTtBQUNBLCtEQUErRCwrREFBVTtBQUN6RTtBQUNBO0FBQ0EsK0RBQStELDBEQUFRO0FBQ3ZFO0FBQ0EsMENBQTBDLGVBQWU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixXQUFXLGFBQWEsZUFBZTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5VUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FCOzs7Ozs7Ozs7Ozs7O0FDN1dyQjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7Ozs7Ozs7Ozs7Ozs7QUMvVXRCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQiIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGx1Z2luL2NvbnRyb2xsZXIudHNcIik7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogMzIwLCBoZWlnaHQ6IDM1OCB9KTtcbmltcG9ydCB7IGRhcmtUaGVtZSB9IGZyb20gXCIuL2RhcmstdG8tbGlnaHQtdGhlbWVcIjtcbmltcG9ydCB7IGxpZ2h0VGhlbWUgfSBmcm9tIFwiLi9saWdodC10by1kYXJrLXRoZW1lXCI7XG5pbXBvcnQgeyBjZHNUaGVtZSB9IGZyb20gXCIuL29sZC10by1uZXctdGhlbWVcIjtcbmZ1bmN0aW9uIHNlcmlhbGl6ZU5vZGVzKG5vZGVzKSB7XG4gICAgbGV0IHNlcmlhbGl6ZWROb2RlcyA9IEpTT04uc3RyaW5naWZ5KG5vZGVzLCBbXG4gICAgICAgIFwibmFtZVwiLFxuICAgICAgICBcInR5cGVcIixcbiAgICAgICAgXCJjaGlsZHJlblwiLFxuICAgICAgICBcImlkXCJcbiAgICBdKTtcbiAgICByZXR1cm4gc2VyaWFsaXplZE5vZGVzO1xufVxuY29uc3QgZmxhdHRlbiA9IG9iaiA9PiB7XG4gICAgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5KG9iaikgPyBvYmogOiBbb2JqXTtcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChhY2MsIHZhbHVlKSA9PiB7XG4gICAgICAgIGFjYy5wdXNoKHZhbHVlKTtcbiAgICAgICAgaWYgKHZhbHVlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBhY2MgPSBhY2MuY29uY2F0KGZsYXR0ZW4odmFsdWUuY2hpbGRyZW4pKTtcbiAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZS5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbn07XG5maWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xuICAgIGxldCBza2lwcGVkTGF5ZXJzID0gW107XG4gICAgaWYgKG1zZy50eXBlID09PSBcInJ1bi1hcHBcIikge1xuICAgICAgICBpZiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwic2VsZWN0aW9uLXVwZGF0ZWRcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZE5vZGVzID0gZmxhdHRlbihmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwic2VsZWN0aW9uLXVwZGF0ZWRcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBzZXJpYWxpemVOb2RlcyhzZWxlY3RlZE5vZGVzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcInRoZW1lLXVwZGF0ZVwiKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzVG9UaGVtZSA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICAgICAgaWYgKG1zZy5tZXNzYWdlID09PSBcImRhcmstdG8tbGlnaHQtdGhlbWVcIikge1xuICAgICAgICAgICAgbm9kZXNUb1RoZW1lLm1hcChzZWxlY3RlZCA9PiB1cGRhdGVUaGVtZShzZWxlY3RlZCwgZGFya1RoZW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1zZy5tZXNzYWdlID09PSBcImxpZ2h0LXRvLWRhcmstdGhlbWVcIikge1xuICAgICAgICAgICAgbm9kZXNUb1RoZW1lLm1hcChzZWxlY3RlZCA9PiB1cGRhdGVUaGVtZShzZWxlY3RlZCwgbGlnaHRUaGVtZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtc2cubWVzc2FnZSA9PT0gXCJsZWdhY3ktdG8tY2RzLXRoZW1lXCIpIHtcbiAgICAgICAgICAgIG5vZGVzVG9UaGVtZS5tYXAoc2VsZWN0ZWQgPT4gdXBkYXRlVGhlbWUoc2VsZWN0ZWQsIGNkc1RoZW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEubm90aWZ5KGBUaGVtaW5nIGNvbXBsZXRlYCwgeyB0aW1lb3V0OiA3NTAgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJzZWxlY3QtbGF5ZXJcIikge1xuICAgICAgICBsZXQgbGF5ZXIgPSBmaWdtYS5nZXROb2RlQnlJZChtc2cuaWQpO1xuICAgICAgICBsZXQgbGF5ZXJBcnJheSA9IFtdO1xuICAgICAgICBsYXllckFycmF5LnB1c2gobGF5ZXIpO1xuICAgICAgICBmaWdtYS5ub3RpZnkoYExheWVyICR7bGF5ZXIubmFtZX0gc2VsZWN0ZWRgLCB7IHRpbWVvdXQ6IDc1MCB9KTtcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gbGF5ZXJBcnJheTtcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGxheWVyQXJyYXkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBsYWNlU3R5bGVzKG5vZGUsIHN0eWxlLCBtYXBwaW5ncywgYXBwbHlTdHlsZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IGltcG9ydGVkU3R5bGUgPSB5aWVsZCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoc3R5bGUua2V5KTtcbiAgICAgICAgICAgIGlmIChtYXBwaW5nc1tpbXBvcnRlZFN0eWxlLmtleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCBtYXBwaW5nU3R5bGUgPSBtYXBwaW5nc1tpbXBvcnRlZFN0eWxlLmtleV07XG4gICAgICAgICAgICAgICAgbGV0IG5ld1N0eWxlID0geWllbGQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKG1hcHBpbmdTdHlsZS5tYXBzVG9LZXkpO1xuICAgICAgICAgICAgICAgIGFwcGx5U3R5bGUobm9kZSwgbmV3U3R5bGUuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2tpcHBlZExheWVycy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZml4U3R5bGVzKG5vZGUsIG5vZGVUeXBlLCBzdHlsZSwgbWFwcGluZ3MsIGFwcGx5U3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZU5hbWUgPSBub2RlVHlwZS50b0xvd2VyQ2FzZSgpICsgXCIgXCIgKyBzdHlsZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0eWxlTmFtZSk7XG4gICAgICAgICAgICBpZiAobWFwcGluZ3Nbc3R5bGVOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1hcHBpbmdTdHlsZSA9IG1hcHBpbmdzW3N0eWxlTmFtZV07XG4gICAgICAgICAgICAgICAgbGV0IG5ld1N0eWxlID0geWllbGQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKG1hcHBpbmdTdHlsZS5tYXBzVG9LZXkpO1xuICAgICAgICAgICAgICAgIGFwcGx5U3R5bGUobm9kZSwgbmV3U3R5bGUuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2tpcHBlZExheWVycy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwbGFjZUNvbXBvbmVudChub2RlLCBrZXksIG1hcHBpbmdzLCBhcHBseUNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IGNvbXBvbmVudFRvU3dpdGNoV2l0aCA9IG1hcHBpbmdzW2tleV07XG4gICAgICAgICAgICBsZXQgaW1wb3J0ZWRDb21wb25lbnQgPSB5aWVsZCBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKGNvbXBvbmVudFRvU3dpdGNoV2l0aC5tYXBzVG9LZXkpO1xuICAgICAgICAgICAgYXBwbHlDb21wb25lbnQobm9kZSwgaW1wb3J0ZWRDb21wb25lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3dhcENvbXBvbmVudChub2RlLCBrZXksIG1hcHBpbmdzLCB0ZXh0T3ZlcnJpZGVzLCBsZWZ0SWNvbiwgcmlnaHRJY29uKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB5aWVsZCByZXBsYWNlQ29tcG9uZW50KG5vZGUsIGtleSwgbWFwcGluZ3MsIChub2RlLCBtYXN0ZXJDb21wb25lbnQpID0+IChub2RlLm1hc3RlckNvbXBvbmVudCA9IG1hc3RlckNvbXBvbmVudCkpO1xuICAgICAgICAgICAgZnVuY3Rpb24gdHJhdmVyc2VUZXh0KG5vZGUsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIkdST1VQXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnR5cGUgPT09IFwiSU5TVEFOQ0VcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYXZlcnNlVGV4dChjaGlsZCwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS50eXBlID09PSBcIlRFWFRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhub2RlLmZvbnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuY2hhcmFjdGVycyA9IHRleHRPdmVycmlkZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHRyYXZlcnNlSWNvbihub2RlLCBpLCBsZWZ0SWNvbiwgcmlnaHRJY29uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJHUk9VUFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKChub2RlLnR5cGUgPT09IFwiSU5TVEFOQ0VcIiAmJiBub2RlLm5hbWUgIT09IFwiTGVmdCBJY29uXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5vZGUudHlwZSA9PT0gXCJJTlNUQU5DRVwiICYmIG5vZGUubmFtZSAhPT0gXCJSaWdodCBJY29uXCIpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYXZlcnNlSWNvbihjaGlsZCwgaSwgbGVmdEljb24sIHJpZ2h0SWNvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5uYW1lID09PSBcIkxlZnQgSWNvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnZpc2libGUgPSBsZWZ0SWNvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLm5hbWUgPT09IFwiUmlnaHQgSWNvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJpZ2h0IGljb24hXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS52aXNpYmxlID0gcmlnaHRJY29uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmF2ZXJzZUljb24obm9kZSwgbm9kZS5jaGlsZHJlbi5sZW5ndGgsIGxlZnRJY29uLCByaWdodEljb24pO1xuICAgICAgICAgICAgdHJhdmVyc2VUZXh0KG5vZGUsIG5vZGUuY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGxhY2VGaWxscyhub2RlLCBzdHlsZSwgbWFwcGluZ3MpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHlpZWxkIHJlcGxhY2VTdHlsZXMobm9kZSwgc3R5bGUsIG1hcHBpbmdzLCAobm9kZSwgc3R5bGVJZCkgPT4gKG5vZGUuZmlsbFN0eWxlSWQgPSBzdHlsZUlkKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBsYWNlTm9TdHlsZUZpbGwobm9kZSwgbm9kZVR5cGUsIHN0eWxlLCBtYXBwaW5ncykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgZml4U3R5bGVzKG5vZGUsIG5vZGVUeXBlLCBzdHlsZSwgbWFwcGluZ3MsIChub2RlLCBzdHlsZUlkKSA9PiAobm9kZS5maWxsU3R5bGVJZCA9IHN0eWxlSWQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGxhY2VTdHJva2VzKG5vZGUsIHN0eWxlLCBtYXBwaW5ncykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgcmVwbGFjZVN0eWxlcyhub2RlLCBzdHlsZSwgbWFwcGluZ3MsIChub2RlLCBzdHlsZUlkKSA9PiAobm9kZS5zdHJva2VTdHlsZUlkID0gc3R5bGVJZCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwbGFjZUVmZmVjdHMobm9kZSwgc3R5bGUsIG1hcHBpbmdzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB5aWVsZCByZXBsYWNlU3R5bGVzKG5vZGUsIHN0eWxlLCBtYXBwaW5ncywgKG5vZGUsIHN0eWxlSWQpID0+IChub2RlLmVmZmVjdFN0eWxlSWQgPSBzdHlsZUlkKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVUaGVtZShub2RlLCB0aGVtZSkge1xuICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIkNPTVBPTkVOVFwiOlxuICAgICAgICAgICAgY2FzZSBcIkNPTVBPTkVOVF9TRVRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJSRUNUQU5HTEVcIjpcbiAgICAgICAgICAgIGNhc2UgXCJHUk9VUFwiOlxuICAgICAgICAgICAgY2FzZSBcIkVMTElQU0VcIjpcbiAgICAgICAgICAgIGNhc2UgXCJQT0xZR09OXCI6XG4gICAgICAgICAgICBjYXNlIFwiU1RBUlwiOlxuICAgICAgICAgICAgY2FzZSBcIkxJTkVcIjpcbiAgICAgICAgICAgIGNhc2UgXCJCT09MRUFOX09QRVJBVElPTlwiOlxuICAgICAgICAgICAgY2FzZSBcIkZSQU1FXCI6XG4gICAgICAgICAgICBjYXNlIFwiTElORVwiOlxuICAgICAgICAgICAgY2FzZSBcIlZFQ1RPUlwiOiB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRoZW1lKGNoaWxkLCB0aGVtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5maWxscykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5maWxsU3R5bGVJZCAmJiB0eXBlb2Ygbm9kZS5maWxsU3R5bGVJZCAhPT0gXCJzeW1ib2xcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0eWxlID0gZmlnbWEuZ2V0U3R5bGVCeUlkKG5vZGUuZmlsbFN0eWxlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZUZpbGxzKG5vZGUsIHN0eWxlLCB0aGVtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5maWxsU3R5bGVJZCA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0eWxlID0gZGV0ZXJtaW5lRmlsbChub2RlLmZpbGxzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlVHlwZSA9IG5vZGUudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb1N0eWxlRmlsbChub2RlLCBub2RlVHlwZSwgc3R5bGUsIHRoZW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraXBwZWRMYXllcnMucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5zdHJva2VTdHlsZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VTdHJva2VzKG5vZGUsIGZpZ21hLmdldFN0eWxlQnlJZChub2RlLnN0cm9rZVN0eWxlSWQpLCB0aGVtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub2RlLmVmZmVjdFN0eWxlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZUVmZmVjdHMobm9kZSwgZmlnbWEuZ2V0U3R5bGVCeUlkKG5vZGUuZWZmZWN0U3R5bGVJZCksIHRoZW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiSU5TVEFOQ0VcIjoge1xuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRLZXkgPSBub2RlLm1hc3RlckNvbXBvbmVudC5rZXk7XG4gICAgICAgICAgICAgICAgaWYgKHRoZW1lW2NvbXBvbmVudEtleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dE92ZXJyaWRlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGVmdEljb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0SWNvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5tYWluQ29tcG9uZW50LmtleSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYTQ5Y2I4NDdkYjdjNjQ3ZmQxNTYxMmM3YmYzODFkMTAxNjRlNTBiNFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLm1haW5Db21wb25lbnQua2V5ID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYjRiOTc3MTM5ZGJhODBlYmE4MzkyYmUzZWZmYThlYWFhZmYzMmMxZlwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLm1haW5Db21wb25lbnQua2V5ID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiNGUzYWU1OGU3NTE2YWZhOGU5MDlmNGVmZjNkZWY1ZGQ3NmQ4NzY1NFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLm1haW5Db21wb25lbnQua2V5ID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOGY5ZDFhOTdmYTliNWU5YTQxZWEyZmRmZDVhOGIyYzVkNTk5ZGM1MlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0cmF2ZXJzZShub2RlLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJHUk9VUFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgobm9kZS50eXBlID09PSBcIklOU1RBTkNFXCIgJiYgbm9kZS5uYW1lICE9PSBcIkxlZnQgSWNvblwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5vZGUudHlwZSA9PT0gXCJJTlNUQU5DRVwiICYmIG5vZGUubmFtZSAhPT0gXCJSaWdodCBJY29uXCIpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmF2ZXJzZShjaGlsZCwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubmFtZSA9PT0gXCJMZWZ0IEljb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZvdW5kIGxlZnQgaWNvbiFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRJY29uID0gbm9kZS52aXNpYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLm5hbWUgPT09IFwiUmlnaHQgSWNvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRm91bmQgcmlnaHQgaWNvbiFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0SWNvbiA9IG5vZGUudmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmF2ZXJzZShub2RlLCBub2RlLmNoaWxkcmVuLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUub3ZlcnJpZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRyYXZlcnNlKG5vZGUsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIkdST1VQXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50eXBlID09PSBcIkZSQU1FXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50eXBlID09PSBcIklOU1RBTkNFXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhdmVyc2UoY2hpbGQsIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLnR5cGUgPT09IFwiVEVYVFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRm91bmQgdGV4dCBsYXllciFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVycmlkZXMgPSBub2RlLmNoYXJhY3RlcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhdmVyc2Uobm9kZSwgbm9kZS5jaGlsZHJlbi5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN3YXBDb21wb25lbnQobm9kZSwgY29tcG9uZW50S2V5LCB0aGVtZSwgdGV4dE92ZXJyaWRlcywgbGVmdEljb24sIHJpZ2h0SWNvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5maWxscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuZmlsbFN0eWxlSWQgJiYgdHlwZW9mIG5vZGUuZmlsbFN0eWxlSWQgIT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3R5bGUgPSBmaWdtYS5nZXRTdHlsZUJ5SWQobm9kZS5maWxsU3R5bGVJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZUZpbGxzKG5vZGUsIHN0eWxlLCB0aGVtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLmZpbGxTdHlsZUlkID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0eWxlID0gZGV0ZXJtaW5lRmlsbChub2RlLmZpbGxzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZVR5cGUgPSBub2RlLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vU3R5bGVGaWxsKG5vZGUsIG5vZGVUeXBlLCBzdHlsZSwgdGhlbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpcHBlZExheWVycy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnN0cm9rZVN0eWxlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VTdHJva2VzKG5vZGUsIGZpZ21hLmdldFN0eWxlQnlJZChub2RlLnN0cm9rZVN0eWxlSWQpLCB0aGVtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuZWZmZWN0U3R5bGVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZUVmZmVjdHMobm9kZSwgZmlnbWEuZ2V0U3R5bGVCeUlkKG5vZGUuZWZmZWN0U3R5bGVJZCksIHRoZW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaGVtZShjaGlsZCwgdGhlbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiVEVYVFwiOiB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZmlsbFN0eWxlSWQgJiYgdHlwZW9mIG5vZGUuZmlsbFN0eWxlSWQgIT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZUZpbGxzKG5vZGUsIGZpZ21hLmdldFN0eWxlQnlJZChub2RlLmZpbGxTdHlsZUlkKSwgdGhlbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLmZpbGxTdHlsZUlkID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IGRldGVybWluZUZpbGwobm9kZS5maWxscyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlVHlwZSA9IG5vZGUudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vU3R5bGVGaWxsKG5vZGUsIG5vZGVUeXBlLCBzdHlsZSwgdGhlbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBkZXRlcm1pbmVGaWxsKGZpbGxzKSB7XG4gICAgICAgIGxldCBmaWxsVmFsdWVzID0gW107XG4gICAgICAgIGxldCByZ2JPYmo7XG4gICAgICAgIGZpbGxzLmZvckVhY2goZmlsbCA9PiB7XG4gICAgICAgICAgICBpZiAoZmlsbC50eXBlID09PSBcIlNPTElEXCIgJiYgZmlsbC52aXNpYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmdiT2JqID0gY29udmVydENvbG9yKGZpbGwuY29sb3IpO1xuICAgICAgICAgICAgICAgIGZpbGxWYWx1ZXMucHVzaChSR0JUb0hleChyZ2JPYmpbXCJyXCJdLCByZ2JPYmpbXCJnXCJdLCByZ2JPYmpbXCJiXCJdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmlsbFZhbHVlc1swXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29udmVydENvbG9yKGNvbG9yKSB7XG4gICAgICAgIGNvbnN0IGNvbG9yT2JqID0gY29sb3I7XG4gICAgICAgIGNvbnN0IGZpZ21hQ29sb3IgPSB7fTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY29sb3JPYmopLmZvckVhY2goY2YgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gY2Y7XG4gICAgICAgICAgICBpZiAoW1wiclwiLCBcImdcIiwgXCJiXCJdLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBmaWdtYUNvbG9yW2tleV0gPSAoMjU1ICogdmFsdWUpLnRvRml4ZWQoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcImFcIikge1xuICAgICAgICAgICAgICAgIGZpZ21hQ29sb3Jba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpZ21hQ29sb3I7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJHQlRvSGV4KHIsIGcsIGIpIHtcbiAgICAgICAgciA9IE51bWJlcihyKS50b1N0cmluZygxNik7XG4gICAgICAgIGcgPSBOdW1iZXIoZykudG9TdHJpbmcoMTYpO1xuICAgICAgICBiID0gTnVtYmVyKGIpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgaWYgKHIubGVuZ3RoID09IDEpXG4gICAgICAgICAgICByID0gXCIwXCIgKyByO1xuICAgICAgICBpZiAoZy5sZW5ndGggPT0gMSlcbiAgICAgICAgICAgIGcgPSBcIjBcIiArIGc7XG4gICAgICAgIGlmIChiLmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgYiA9IFwiMFwiICsgYjtcbiAgICAgICAgcmV0dXJuIFwiI1wiICsgciArIGcgKyBiO1xuICAgIH1cbn07XG4iLCJjb25zdCBkYXJrVGhlbWUgPSB7XG4gICAgZjBkNGFhNWU2M2ZmZjQzOTJlM2IzYzIyODg0NTIzMzY5ZjVkMDQyNDoge1xuICAgICAgICBjb21wb25lbnROYW1lOiBcImlQaG9uZSBYIFN0YXR1cyBCYXIgLyBEYXJrXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIzMzQyNWJkOTNjMWI4Y2VhMDcxZGY5YjUyOTdmMGIxOTU4M2E2NDNiXCJcbiAgICB9LFxuICAgIFwiNWI4ZGNlN2E3OTA0NjZkYTU0NmQzMTlhNjlmNWRlMjIwZTFhNjZmMVwiOiB7XG4gICAgICAgIGNvbXBvbmVudE5hbWU6IFwiaVBob25lIFggSG9tZSBJbmRpY2F0b3IgLyBEYXJrXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIwNDg5YmRlN2ZkMDM0NmE5N2VmZjMxNzAxNjc3MTQ4MzhhOGZmYjljXCJcbiAgICB9LFxuICAgIFwiM2VlNGNmNDc5ZWVmZDVlMTgxZmY0YWJkMWM5ODIwMTE0MzhlNjkyZFwiOiB7XG4gICAgICAgIGNvbXBvbmVudE5hbWU6IFwiU3lzdGVtIChEYXJrKSAvIE51bWVyaWMgS2V5Ym9hcmRcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjg2N2ZhNDdkZWZlYjA3MjkzYWEzN2U1NDY3ZTRjYTQ4NzAxOWRkNzhcIlxuICAgIH0sXG4gICAgZTRkY2JlYjg1NDkzMzJlNGM5NjllZjRkMGQzMDJlNzVhNzkzMmMyNToge1xuICAgICAgICBjb21wb25lbnROYW1lOiBcIlN5c3RlbSAoRGFyaykgLyBLZXlib2FyZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiYmNhNjlmMDNkYjhlOTM4Y2Q3OGNhOTFjODRlMzU1NTM4MDRjYThjMVwiXG4gICAgfSxcbiAgICBlOTYyMmFiMjUyNDhmMzFmYjAyYjZmYWEwMDMwOGI4ZmFhNGFjYjNlOiB7XG4gICAgICAgIGNvbXBvbmVudE5hbWU6IFwiSGVhZGVyIC8gR3VpbGQgLyBEYXJrXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIwMDIzMGYwM2MwOGUwMGE3ODdlOWMyNjU5YzMxNjViY2FkN2FlMDZiXCJcbiAgICB9LFxuICAgIFwiNDU5MmZiOThlZGY3OGZkZWVhMDdkMjM0NDVkZTk0ODI4NmU3YzVmMlwiOiB7XG4gICAgICAgIGNvbXBvbmVudE5hbWU6IFwiSGVhZGVyIC8gRE1cIixcbiAgICAgICAgbWFwc1RvS2V5OiBcImZmOGI1YzcxYTYwZmMyMTI2NDdjNDBlNDgxYzBiZjE4ODZhM2VjODVcIlxuICAgIH0sXG4gICAgXCI0NmQ2YmVkNGVkZDk0ODJiMTQ1MmFmYWI1YWIwMjkyYjUxNmM5ZTA5XCI6IHtcbiAgICAgICAgY29tcG9uZW50TmFtZTogXCJOYXZpZ2F0aW9uIFRhYiAvIERhcmtcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjY0ZDE2NTU0NTYxYTc0OTZiMmQyMzg1NDA3NGNlOTIzNjU1OTE4ZTBcIlxuICAgIH0sXG4gICAgXCI5ZTBhOWY5OTAyNGZiOWJhZWRjYWNiYjEyM2M4NGQ3Y2M0YjhmODdhXCI6IHtcbiAgICAgICAgY29tcG9uZW50TmFtZTogXCJHdWlsZCBTZWxlY3RlZCAvIERhcmtcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcImE5MjMxYTNkOWZhYzViN2QyNmQ1NjkwNGM3YjI4ZDVkMDBiZmZmOTdcIlxuICAgIH0sXG4gICAgYzI1ZDg5OTUzMDQxZDA5NTIxNWM5NzJmYTU1ZGM2Zjc3NzZkOWE1NDoge1xuICAgICAgICBjb21wb25lbnROYW1lOiBcIk1lc3NhZ2VzIFNlbGVjdGVkIC8gRGFya1wiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiOGM4MGQ1YmQ3YmRkODBhY2VjOTc5M2E3MTlmNmNhYWViYmExYzZlZVwiXG4gICAgfSxcbiAgICBcIjM1ODhmZTRkNWEzMDJiMmZjYTJiZTJiMGNiNWMxMmUyYTJmNDFjMDVcIjoge1xuICAgICAgICBjb21wb25lbnROYW1lOiBcIlN0YXR1cyBCYXIgLyBEYXJrXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI3OTBkN2QzZDg4NGE2ZDNkYWRjNzliZjNjNDhhNDkxOGY0YzE2YmE3XCJcbiAgICB9LFxuICAgIFwiNDNjMTRjYTIzODM0ZDJhYTNiZjFlMDI3YTA2MzVjNzM5M2U4NzM3OFwiOiB7XG4gICAgICAgIGNvbXBvbmVudE5hbWU6IFwiTmF2aWdhdGlvbiBUYWIgLyBEYXJrXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJiZDU2YzNlODkxNjJkODI3NGM0Y2E1OTFmMmNhMWUxMDY0NjU4NTcwXCJcbiAgICB9LFxuICAgIGQzMWQ2NTE3NjcxMTZiNzNmOTIwOWM1MzYyNjY5NzgyZmYzYThhMjU6IHtcbiAgICAgICAgY29tcG9uZW50TmFtZTogXCJXaW5kb3dzIEJhciAvIERhcmtcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjA1ZmMyYTZiNDIwN2JhYThmNjcyZGM5ZThhNWQ3NTBjNWQ2MDcxMWJcIlxuICAgIH0sXG4gICAgXCI1YzE2OTFjYmVhYWY0MjcwMTA3ZDM0ZjFhMTJmMDJmZGQwNGFmYTAyXCI6IHtcbiAgICAgICAgbmFtZTogXCJEYXJrIC8gSGVhZGVyIC8gUHJpbWFyeSAoV2hpdGUpXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiTGlnaHQgLyBIZWFkZXIgLyBQcmltYXJ5ICg5MDApXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJiMTlhMTQ2NzViOGFkZWIxNTI4YWI1Zjg0ZTU3YjJlZWVkMTBkNDZjXCJcbiAgICB9LFxuICAgIFwidGV4dCAjZmZmZmZmXCI6IHtcbiAgICAgICAgbmFtZTogXCJVbnN0eWxlZCBEYXJrIEhlYWRlclwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkxpZ2h0IC8gSGVhZGVyIC8gUHJpbWFyeSAoOTAwKVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiYjE5YTE0Njc1YjhhZGViMTUyOGFiNWY4NGU1N2IyZWVlZDEwZDQ2Y1wiXG4gICAgfSxcbiAgICBcInRleHQgI2I5YmJiZVwiOiB7XG4gICAgICAgIG5hbWU6IFwiVW5zdHlsZWQgRGFyayBTZWNvbmRhcnkgSGVhZGVyXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2xpZ2h0L2hlYWRlci9oZWFkZXItc2Vjb25kYXJ5XCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI2MDhmMmVhMWFhNjRmZjdmMjAyZThjMjJjYzQxNDdhMDJiZTlkODViXCJcbiAgICB9LFxuICAgIFwidGV4dCAjYTNhNmFhXCI6IHtcbiAgICAgICAgbmFtZTogXCJVbnN0eWxlZCBEYXJrIE11dGVkXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2xpZ2h0L3RleHQvdGV4dC1tdXRlZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiN2Q4NzAzZWMxMzJkZGFmNjk2OGY2ZDE5MGQxZTgwMDMxYzU1OWQ3Y1wiXG4gICAgfSxcbiAgICBiYzA5MGNiM2IxYzczMTNhZTI3NmFjYmQ3OTFiNWI4N2I0NzhlYzU5OiB7XG4gICAgICAgIG5hbWU6IFwiRGFyayAvIEhlYWRlciAvIFNlY29uZGFyeSAoMzAwKVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkxpZ2h0IC8gSGVhZGVyIC8gU2Vjb25kYXJ5ICg2MDApXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI2MDhmMmVhMWFhNjRmZjdmMjAyZThjMjJjYzQxNDdhMDJiZTlkODViXCJcbiAgICB9LFxuICAgIFwiNWM3N2E5NjEzN2I2OThiNTU3NTU1N2MwNjljYWJkNjg3N2Q2NmUxZVwiOiB7XG4gICAgICAgIG5hbWU6IFwiRGFyayAvIFRleHQgLyBOb3JtYWwgKDIwMClcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJMaWdodCAvIFRleHQgLyBOb3JtYWwgKDcwMClcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjU0NmM3ZDQ2ZTc1NGFjMmIyM2IzMzg3ODNkNzJmMjA2Yjc3YjY0MzZcIlxuICAgIH0sXG4gICAgXCI1ZDg0YWQ5MmYzYWQxNTJmMTk2ZTIwOTNhM2MwNTQyYTA4ZGZiYTExXCI6IHtcbiAgICAgICAgbmFtZTogXCJEYXJrIC8gVGV4dCAvIE11dGVkICg0MDApXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiTGlnaHQgLyBUZXh0IC8gTXV0ZWQgKDUwMClcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjdkODcwM2VjMTMyZGRhZjY5NjhmNmQxOTBkMWU4MDAzMWM1NTlkN2NcIlxuICAgIH0sXG4gICAgYmYwMzIzMjc1MzA3OWJkZDViZWM2YzU1MzQzYjY1OTg3NmI1MjgzZjoge1xuICAgICAgICBuYW1lOiBcIkRhcmsgLyBUZXh0IC8gTGlua1wiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkxpZ2h0IC8gVGV4dCAvIExpbmtcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjY0ZDMwNThkZDUwOGE0OTg1NjcwYjJkMTk0MThhMDZhMzUwM2M5YzJcIlxuICAgIH0sXG4gICAgXCI2ZTRhZWY3Njc3ZTJlYTgyYzg3NDY1Mjc2NTIyZGE3ZWY1YTA3MTIxXCI6IHtcbiAgICAgICAgbmFtZTogXCJ0aGVtZXMvZGFyay90ZXh0L3RleHQtYnJhbmRcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJ0aGVtZXMvbGlnaHQvdGV4dC90ZXh0LWJyYW5kXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIxNTMyMGZkNDk4ZGNkNGUxMTNjNWJkNTg3ZGNhMmQxMWQ0NDkyZTg0XCJcbiAgICB9LFxuICAgIFwiMDk0Y2JhYWMwODE3YmU3YmJmZDgyOTJjYjk4ZmMxZTUxNWU3ZWEwZVwiOiB7XG4gICAgICAgIG5hbWU6IFwidGhlbWVzL2RhcmsvdGV4dC90ZXh0LWRhbmdlclwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9saWdodC90ZXh0L3RleHQtZGFuZ2VyXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJjOGQyMzcwODBkMzg2NzExOTM0MDNiNDljZGM2YTU3NzhhMTRiZjQ1XCJcbiAgICB9LFxuICAgIGRmMDYyMmJiMzMyMzJmZTA0MWM0NjhlOGQzZGQzN2U1NDI4YjEwZTc6IHtcbiAgICAgICAgbmFtZTogXCJ0aGVtZXMvZGFyay90ZXh0L3RleHQtd2FybmluZ1wiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9saWdodC90ZXh0L3RleHQtd2FybmluZ1wiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiMGQ5NWE3ZDRkMzBlZjk5ZWJkMDRhYmQ1YjJkZDQ3MDg5MTNmNzY1YlwiXG4gICAgfSxcbiAgICBcIjc3MzMxMTdjZjFlZjU3MGI3NzMzMmM4NmJhNzgzYWY2Y2I3MzVmYzFcIjoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9kYXJrL3RleHQvdGV4dC1wb3NpdGl2ZVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9saWdodC90ZXh0L3RleHQtcG9zaXRpdmVcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjcxZjY0YjA4YmRlYzRkYWY3NDdhODUwYjEyOGUwOTk0YzQ1OTNjMDRcIlxuICAgIH0sXG4gICAgXCIyODc0NjNiYWRlOTBjMWVlZDVlYTRjYjBiNWQ2Mzc5NGRhYThhZWMyXCI6IHtcbiAgICAgICAgbmFtZTogXCJEYXJrIC8gSW50ZXJhY3RpdmUgVGV4dCAmIEljb25zIC8gTm9ybWFsICgzMDApXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiTGlnaHQgLyBJbnRlcmFjdGl2ZSBUZXh0ICYgSWNvbnMgLyBOb3JtYWwgKDYwMClcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjljMjNhMDMxNzczNzExZTAyNjM5NGY0MzU0NjYxYzM3ZWU1YjQ2ODJcIlxuICAgIH0sXG4gICAgXCJib29sZWFuX29wZXJhdGlvbiAjYjliYmJlXCI6IHtcbiAgICAgICAgbmFtZTogXCJEYXJrIC8gSW50ZXJhY3RpdmUgVGV4dCAmIEljb25zIC8gTm9ybWFsICgzMDApXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiTGlnaHQgLyBJbnRlcmFjdGl2ZSBUZXh0ICYgSWNvbnMgLyBOb3JtYWwgKDYwMClcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjljMjNhMDMxNzczNzExZTAyNjM5NGY0MzU0NjYxYzM3ZWU1YjQ2ODJcIlxuICAgIH0sXG4gICAgXCJib29sZWFuX29wZXJhdGlvbiAjNzU3NTc1XCI6IHtcbiAgICAgICAgbmFtZTogXCJEYXJrIC8gSW50ZXJhY3RpdmUgVGV4dCAmIEljb25zIC8gTm9ybWFsICgzMDApXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiTGlnaHQgLyBJbnRlcmFjdGl2ZSBUZXh0ICYgSWNvbnMgLyBOb3JtYWwgKDYwMClcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjljMjNhMDMxNzczNzExZTAyNjM5NGY0MzU0NjYxYzM3ZWU1YjQ2ODJcIlxuICAgIH0sXG4gICAgXCJ2ZWN0b3IgIzc1NzU3NVwiOiB7XG4gICAgICAgIG5hbWU6IFwiRGFyayAvIEludGVyYWN0aXZlIFRleHQgJiBJY29ucyAvIE5vcm1hbCAoMzAwKVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkxpZ2h0IC8gSW50ZXJhY3RpdmUgVGV4dCAmIEljb25zIC8gTm9ybWFsICg2MDApXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI5YzIzYTAzMTc3MzcxMWUwMjYzOTRmNDM1NDY2MWMzN2VlNWI0NjgyXCJcbiAgICB9LFxuICAgIFwidmVjdG9yICNiOWJiYmVcIjoge1xuICAgICAgICBuYW1lOiBcIkRhcmsgLyBJbnRlcmFjdGl2ZSBUZXh0ICYgSWNvbnMgLyBOb3JtYWwgKDMwMClcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJMaWdodCAvIEludGVyYWN0aXZlIFRleHQgJiBJY29ucyAvIE5vcm1hbCAoNjAwKVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiOWMyM2EwMzE3NzM3MTFlMDI2Mzk0ZjQzNTQ2NjFjMzdlZTViNDY4MlwiXG4gICAgfSxcbiAgICBcIjUwMmRjZGYwNDk5MjgxOGRjYmFlZDEyNWFkNzExYjQ0NmRlZTRjNjhcIjoge1xuICAgICAgICBuYW1lOiBcIkRhcmsgLyBJbnRlcmFjdGl2ZSBUZXh0ICYgSWNvbnMgLyBIb3ZlciAoMjAwKVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9saWdodC9pbnRlcmFjdGl2ZS9pbnRlcmFjdGl2ZS1ob3ZlclwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiZTk1NDJlOTVhZGYzYmJlNzQyODZjMmNmMjc5ZmVlNjRmN2JhMzI3OVwiXG4gICAgfSxcbiAgICBcIjNlZGRjMTVlOTBiYmQ3MDY0YWVhN2NjMTNkYzEzZTIzYTcxMmYwYjBcIjoge1xuICAgICAgICBuYW1lOiBcIkRhcmsgLyBJbnRlcmFjdGl2ZSBUZXh0ICYgSWNvbnMgLyBBY3RpdmUgKFdoaXRlKVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkxpZ2h0IC8gSW50ZXJhY3RpdmUgVGV4dCAmIEljb25zIC8gQWN0aXZlICg5MDApXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI2MjBjOThlOGY5MjU1YTYxMDdkZWU5MTc0NTY2OWU1YjcwMmI0MTNjXCJcbiAgICB9LFxuICAgIFwiYm9vbGVhbl9vcGVyYXRpb24gI2ZmZmZmZlwiOiB7XG4gICAgICAgIG5hbWU6IFwiRGFyayAvIEludGVyYWN0aXZlIFRleHQgJiBJY29ucyAvIEFjdGl2ZSAoV2hpdGUpXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiTGlnaHQgLyBJbnRlcmFjdGl2ZSBUZXh0ICYgSWNvbnMgLyBBY3RpdmUgKDkwMClcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjYyMGM5OGU4ZjkyNTVhNjEwN2RlZTkxNzQ1NjY5ZTViNzAyYjQxM2NcIlxuICAgIH0sXG4gICAgZmE2OThhYTJhNzI0NTIyYTdjMjllZmIwYTY2MmFlYzc1YTFiZTVhMToge1xuICAgICAgICBuYW1lOiBcIkRhcmsgLyBJbnRlcmFjdGl2ZSBUZXh0ICYgSWNvbnMgLyBNdXRlZCAoNTAwKVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkxpZ2h0IC8gSW50ZXJhY3RpdmUgVGV4dCAmIEljb25zIC8gTXV0ZWQgKDMwMClcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjkzMjhjZDc4YTM5MTQ5YjA3MGQ2OGY5OGQ5ZmU0ZGY3YTkyYmY2N2RcIlxuICAgIH0sXG4gICAgXCI0YjkzZDQwZjYxYmUxNWUyNTVlODc5NDhhNzE1NTIxYzNhZTk1N2U2XCI6IHtcbiAgICAgICAgbmFtZTogXCJEYXJrIC8gQmFja2dyb3VuZCAvIFByaW1hcnkgKDYwMClcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJMaWdodCAvIEJhY2tncm91bmQgLyBQcmltYXJ5IChXaGl0ZSlcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjI0NDlhMjk4M2Q0Mzc5M2Q4MGJhYTIwYzZjNjBlOGE0OGU3ZjNhMGNcIlxuICAgIH0sXG4gICAgXCJmcmFtZSAjMzYzOTNmXCI6IHtcbiAgICAgICAgbmFtZTogXCJEYXJrIFByaW1hcnkgQmFja2dyb3VuZFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkxpZ2h0IC8gQmFja2dyb3VuZCAvIFByaW1hcnkgKFdoaXRlKVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiMjQ0OWEyOTgzZDQzNzkzZDgwYmFhMjBjNmM2MGU4YTQ4ZTdmM2EwY1wiXG4gICAgfSxcbiAgICBcInJlY3RhbmdsZSAjMzYzOTNmXCI6IHtcbiAgICAgICAgbmFtZTogXCJEYXJrIFByaW1hcnkgQmFja2dyb3VuZFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkRhcmsgLyBCYWNrZ3JvdW5kIC8gUHJpbWFyeSAoNjAwKVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiMjQ0OWEyOTgzZDQzNzkzZDgwYmFhMjBjNmM2MGU4YTQ4ZTdmM2EwY1wiXG4gICAgfSxcbiAgICBcImZyYW1lICM1ODY1ZjJcIjoge1xuICAgICAgICBuYW1lOiBcIlVuc3R5bGVkIEJyYW5kXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwib3RoZXIvYmx1cnBsZSAoYnJhbmQtNTAwKVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiMjViMTY1MjIyZjQ1ZmQ3MGRjM2M4ZTY4ZDFhMjVmOGQzNzlhNTk3ZFwiXG4gICAgfSxcbiAgICBcInJlY3RhbmdsZSAjNTg2NWYyXCI6IHtcbiAgICAgICAgbmFtZTogXCJVbnN0eWxlZCBCcmFuZFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIm90aGVyL2JsdXJwbGUgKGJyYW5kLTUwMClcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjI1YjE2NTIyMmY0NWZkNzBkYzNjOGU2OGQxYTI1ZjhkMzc5YTU5N2RcIlxuICAgIH0sXG4gICAgZmIxMzU4ZTViZDZkZWMwNzI4MDEyOTgyMzhjZjQ5ZmY3N2I3OWE0Yjoge1xuICAgICAgICBuYW1lOiBcIkRhcmsgLyBCYWNrZ3JvdW5kIC8gU2Vjb25kYXJ5ICg2MzApXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiTGlnaHQgLyBCYWNrZ3JvdW5kIC8gUHJpbWFyeSAoV2hpdGUpXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI4MzcwNDI3OGM4NDVhNmE3Y2ViMWY4MzczODc5NzJjY2I2ZDQxOTYwXCJcbiAgICB9LFxuICAgIGFiZjlhZDg4YWUxYWRlMWE0Yjk0NWIwMTJmMDk2NWM5Y2RjMDY4Yzk6IHtcbiAgICAgICAgbmFtZTogXCJEYXJrIC8gQmFja2dyb3VuZCAvIFNlY29uZGFyeSBBbHRlcm5hdGVcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJMaWdodCAvIEJhY2tncm91bmQgLyBTZWNvbmRhcnkgQWx0ZXJuYXRlXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI2YWNkODRjNzk0Nzk2ZDExMmQ0ZTlkMjJjNGM4YTVjYWU5NDBhNjFkXCJcbiAgICB9LFxuICAgIGVmMTc5YjZhYmU2Y2I4Nzc5ODU3ZTA1YTYzMzNkMzNmN2EyYjkzMjA6IHtcbiAgICAgICAgbmFtZTogXCJEYXJrIC8gQmFja2dyb3VuZCAvIFRlcnRpYXJ5ICg3MDApXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiTGlnaHQgLyBCYWNrZ3JvdW5kIC8gVGVydGlhcnkgKDIwMClcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcImRiZDAyYTc2YjdiNzdjMTk3NjExNGMwNDA2OGYwZmJjMjIwMTVmYWJcIlxuICAgIH0sXG4gICAgXCIzZGQwZTMwY2UwYTgyODdlYjkxZWMxZmJlZmY5MjAzMWU2MzRlZDAxXCI6IHtcbiAgICAgICAgbmFtZTogXCJEYXJrIC8gQmFja2dyb3VuZCAvIEFjY2VudCAoNTAwKVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkxpZ2h0IC8gQmFja2dyb3VuZCAvIEFjY2VudCAoNTAwKVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiN2ExOTljZTAyOWE4NDdmM2EzNjFkZmI2YTZlMGVlNGU0YmE4NGQ0ZlwiXG4gICAgfSxcbiAgICBcIjExNTE2ZjRiNDNmMzgxYWZiNWE2YmRmMmMzNGI5NDM3ZjBlZWNkZTFcIjoge1xuICAgICAgICBuYW1lOiBcIkRhcmsgLyBCYWNrZ3JvdW5kIC8gRmxvYXRpbmcgKDgwMClcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJMaWdodCAvIEJhY2tncm91bmQgLyBGbG9hdGluZyAoV2hpdGUpXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI2YzhiMDhhNDJmOTYxNDg0MmU4ODBiZjdiYjc5NTAxNGQ4ZmJhZTk0XCJcbiAgICB9LFxuICAgIGJmY2RmMDYzZWIyYzFlZGI0NDZiYTVkNzg4MGRhNmEzMjRjYzliNGY6IHtcbiAgICAgICAgbmFtZTogXCJEYXJrIC8gT3ZlcnJpZGUgLyBSZWFkIENoYW5uZWxzXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiTGlnaHQgLyBPdmVycmlkZSAvIFJlYWQgQ2hhbm5lbHMgMzYwXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI2MzRlZjk1YjUzYWI1MjlhNzc0ZjI3ZWQxNmJlMDdjMGIzZmIzYTVmXCJcbiAgICB9LFxuICAgIGI2NTljMjgzOTUwZjhiMzM1OTIyZjUyZTQwY2VmZDNjZjY3OWQyOTc6IHtcbiAgICAgICAgbmFtZTogXCJ0aGVtZXMvZGFyay9iYWNrZ3JvdW5kL3N0YXR1cy1kYW5nZXItYmFja2dyb3VuZFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9saWdodC9iYWNrZ3JvdW5kL3N0YXR1cy1kYW5nZXItYmFja2dyb3VuZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiYzU5MmVhMGIyNjkyOWNmMTM3NGY5NzNiODU3MDI3ZGJkMjFmZmIxMlwiXG4gICAgfSxcbiAgICBcIjNkYmQ2Nzk4OTc4NzZiNjliYzljYzhmYTM4YmU4M2M1MjVhYzVlZDVcIjoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9kYXJrL2JhY2tncm91bmQvc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9saWdodC9iYWNrZ3JvdW5kL3N0YXR1cy13YXJuaW5nLWJhY2tncm91bmRcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjQ1ZjIxMzkzNDhiNTAyNjNmZGE0NzA0ZDRhOWFjY2VhNzQ1NDBkY2NcIlxuICAgIH0sXG4gICAgXCI3NDZlMTcwYWM2ZTdiYTgwZDE3MWYwMTMxMzczNWEzZWM1NTM1ZWY4XCI6IHtcbiAgICAgICAgbmFtZTogXCJ0aGVtZXMvZGFyay9iYWNrZ3JvdW5kL3N0YXR1cy1wb3NpdGl2ZS1iYWNrZ3JvdW5kXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2xpZ2h0L2JhY2tncm91bmQvc3RhdHVzLXBvc2l0aXZlLWJhY2tncm91bmRcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjJhMTM1ZmE2M2MwY2VhNDczOTM2Y2VkNTFjY2Q3NjdiMmYxNTY3MzlcIlxuICAgIH0sXG4gICAgZGEyMWMwOGQ1Zjg4N2FlOGQ2MTk1ZDdmOGE3NTg1MjE5ZDY3MGI5Mzoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9kYXJrL2JhY2tncm91bmQvYmFja2dyb3VuZC1tZW50aW9uZWRcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJ0aGVtZXMvbGlnaHQvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLW1lbnRpb25lZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiMzBkNDQwOTJjMTMyMzEyMTMxNDNiNTAwMTU5MDc0NjNkZDFiNjIxMVwiXG4gICAgfSxcbiAgICBcIjM5YzkxYmY2MjUzNmNiMWM2ZjUxMDg3ODUzYzM1YWZjYzY0NjJiYWNcIjoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9kYXJrL2JhY2tncm91bmQvYmFja2dyb3VuZC1tZW50aW9uZWQtaG92ZXJcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJ0aGVtZXMvbGlnaHQvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLW1lbnRpb25lZC1ob3ZlclwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiNGQxNWVlNjg0ZWI5ZmQ2Y2IxMTRkN2ZiNTg1YzgzYzliMGE1OThmZFwiXG4gICAgfSxcbiAgICBcIjEwNTRlMGM0YmMzZTUyYWUyYzdjNDhhYTBkMGY5NWVkNWQ5OTg1ODdcIjoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9kYXJrL2JhY2tncm91bmQvYmFja2dyb3VuZC1tZXNzYWdlLWhvdmVyXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2xpZ2h0L2JhY2tncm91bmQvYmFja2dyb3VuZC1tZXNzYWdlLWhvdmVyXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI0NDBhMmQ2NjQ5MGI3MTYyNDE3Yzc0MGU2NjM1NWYzOWQ3YjllNDFhXCJcbiAgICB9LFxuICAgIFwiNzJhNzA3NzFmZjJhMjY4MTMwZTczNTIyNTBmMzc0NzIyZjRkOGJmZVwiOiB7XG4gICAgICAgIG5hbWU6IFwidGhlbWVzL2RhcmsvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLW1vYmlsZS1wcmltYXJ5XCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2xpZ2h0L2JhY2tncm91bmQvYmFja2dyb3VuZC1tb2JpbGUtcHJpbWFyeVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiNTc0N2Q1ZTJmMWU2MDQ3NzQ2Yzc3ZTkzNjhlOGQyMTMyNGViOTNkOVwiXG4gICAgfSxcbiAgICBcIjI1MWY4NWJjMzM4YzU0MTE2MDhjMmRjMTQxYTUzODMwNWFiNmI0YzFcIjoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9kYXJrL2JhY2tncm91bmQvYmFja2dyb3VuZC1tb2JpbGUtc2Vjb25kYXJ5XCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2xpZ2h0L2JhY2tncm91bmQvYmFja2dyb3VuZC1tb2JpbGUtc2Vjb25kYXJ5XCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJkZTlmNTE4YzM1MDk2MDk1YzAyYzIxNTU0MzE3NGEwNDkwMGIwN2Q3XCJcbiAgICB9LFxuICAgIGRlOWY1MThjMzUwOTYwOTVjMDJjMjE1NTQzMTc0YTA0OTAwYjA3ZDc6IHtcbiAgICAgICAgbmFtZTogXCJ0aGVtZXMvbGlnaHQvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLW1vYmlsZS1zZWNvbmRhcnlcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJ0aGVtZXMvZGFyay9iYWNrZ3JvdW5kL2JhY2tncm91bmQtbW9iaWxlLXNlY29uZGFyeVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiMjUxZjg1YmMzMzhjNTQxMTYwOGMyZGMxNDFhNTM4MzA1YWI2YjRjMVwiXG4gICAgfSxcbiAgICBcIjFlMWNhYThmMzFlZDNiYjdjZTZlNmNlMjBkZmUzMTg3YjIwNzY2YzhcIjoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9kYXJrL2JhY2tncm91bmQvYmFja2dyb3VuZC1uZXN0ZWQtZmxvYXRpbmdcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJ0aGVtZXMvbGlnaHQvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLW5lc3RlZC1mbG9hdGluZ1wiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiMWZhZTUzYjE5YmUyZmU4NWFhNDQ1MjljZDMyNDNjN2IyODAxNzNmMVwiXG4gICAgfSxcbiAgICBkNmM5MjcwODM0YjExYzk5ZWU2NTFmMGY1MDcyYWQyYzYzNzAxMTY1OiB7XG4gICAgICAgIG5hbWU6IFwiRGFyayAvIEJhY2tncm91bmQgTW9kIC8gSG92ZXJcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJMaWdodCAvIEJhY2tncm91bmQgTW9kIC8gSG92ZXJcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjM1MzA3Mzk2YWUyOWFhZWI1ODNhZTY1ODkxYzY5ZWM2ODlmMGM0MWVcIlxuICAgIH0sXG4gICAgYmNmODkwZDdhMjE1YzY1ZGVlZjk3ZmIzZDNmNWJjZWJjOTg2OWJhYjoge1xuICAgICAgICBuYW1lOiBcIkRhcmsgLyBCYWNrZ3JvdW5kIE1vZCAvIEFjdGl2ZVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkxpZ2h0IC8gQmFja2dyb3VuZCBNb2QgLyBBY3RpdmVcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcImRkYWRmNzY5MTlkOWJhY2I5MjUyNDJhMDI0ZGMxZTJmNWY1MTdhNDZcIlxuICAgIH0sXG4gICAgY2UwMTJkYjQyZjM1ZmI1OGI0ZmUxZDZkOGI0NmM0OTA1YThmYWQwYToge1xuICAgICAgICBuYW1lOiBcIkRhcmsgLyBCYWNrZ3JvdW5kIE1vZCAvIFNlbGVjdGVkXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiTGlnaHQgLyBCYWNrZ3JvdW5kIE1vZCAvIFNlbGVjdGVkXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI1YWYyZWFmMTQ5MDE0NzJjMjZiNjQxOTk3Nzk2YmRiYTc2ZWUxNzk0XCJcbiAgICB9LFxuICAgIGE2YTNkYzE1M2YwZTU4OTQwODE4NjE3NmViZjhmMjBlZDJmOWJkYTM6IHtcbiAgICAgICAgbmFtZTogXCJEYXJrIC8gQmFja2dyb3VuZCBNb2QgLyBBY2NlbnRcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJMaWdodCAvIEJhY2tncm91bmQgTW9kIC8gQWNjZW50XCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIwOGM3MDkxZjhkNjk1MGRjM2Y2MTZhZmU4ZWQ0NWIwODZmOTEyNGM3XCJcbiAgICB9LFxuICAgIFwiNjFjNDkzZDlkMTRmMmE1YWU1MmMyMDM3MTQ5NzczZjBjZDc2OTBhNVwiOiB7XG4gICAgICAgIG5hbWU6IFwidGhlbWVzL2Rhcmsvc3RhdHVzL3N0YXR1cy1wb3NpdGl2ZVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9saWdodC9zdGF0dXMvc3RhdHVzLXBvc2l0aXZlXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI2ZmFhNmQwOWI0N2NhZWIzMmZhMGY1ZjgxYzU2MWRjYjdkNjhlOWIxXCJcbiAgICB9LFxuICAgIFwiMGZmNGQ1NjNhYWU1M2RkODAxMmY3OGE2N2Y5ZmQxODI2OTNhMGYyMVwiOiB7XG4gICAgICAgIG5hbWU6IFwidGhlbWVzL2Rhcmsvc3RhdHVzL3N0YXR1cy1kYW5nZXJcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJ0aGVtZXMvbGlnaHQvc3RhdHVzL3N0YXR1cy1kYW5nZXJcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjBjOWNmYTI3ZjE1M2U2YTVhOTk1NDI0MmJiNmFlM2NhYzAyZDQ0NjhcIlxuICAgIH0sXG4gICAgZjcxOWZiOGU3YmYwNDM0MjAxMGVjYjM3MTY1ZTU1YWE4YTYzOGQzNToge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9kYXJrL3N0YXR1cy9zdGF0dXMtd2FybmluZ1wiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9saWdodC9zdGF0dXMvc3RhdHVzLXdhcm5pbmdcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjlmYTJmOTljZmZlN2JhNTg3ZjI1OWU5OGZiNGRlMTJjMGI4OTMyMjNcIlxuICAgIH0sXG4gICAgXCI2YzU0YmU2OTNhNGJiZGZmNmZhNGMwMmY2NzJiYzVjOWU0NjU0ZjhiXCI6IHtcbiAgICAgICAgbmFtZTogXCJ0aGVtZXMvZGFyay9vdGhlci9jaGFubmVsdGV4dGFyZWEtYmFja2dyb3VuZFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9saWdodC9vdGhlci9jaGFubmVsdGV4dGFyZWEtYmFja2dyb3VuZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiM2MwOThhOGQwOWFjYmQyNWVmMzdlN2ZjMGI2NTdjMmRjNzhmMjQzZVwiXG4gICAgfSxcbiAgICBhNGQ3NmNmNzUxNTZhYjc2MGRmMTY4NWEzMGRhZGFiMjA3MjQwMTBlOiB7XG4gICAgICAgIG5hbWU6IFwidGhlbWVzL2Rhcmsvb3RoZXIvZm9jdXMtcHJpbWFyeTBcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJ0aGVtZXMvbGlnaHQvb3RoZXIvZm9jdXMtcHJpbWFyeVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiZDFkYmFlNDgzZjRlZWZjZjVhZGNjZmJiYThlNmQ1MGRiZWYxZWMyN1wiXG4gICAgfSxcbiAgICBcIjczMzdhYzkzMWIyYzliNjk5ZDQ0ZTZlNzgzNjM3ZTVhZmFjNTAyOThcIjoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9kYXJrL290aGVyL2NvbnRyb2wtYnJhbmQtZm9yZWdyb3VuZFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9saWdodC9vdGhlci9jb250cm9sLWJyYW5kLWZvcmVncm91bmRcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcImJiZGM1Y2IyNjU5NWY3NzI4M2I4ZGZlNTFlNjU5YzViZmRjNmEyZDBcIlxuICAgIH0sXG4gICAgYTkyNjc3NGQ1NThkMGU3MGY1MDVkZjY5N2MyMWMxMmRjNDI3MDIwNjoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9kYXJrL290aGVyL3Njcm9sbGJhci10aGluLXRodW1iXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2xpZ2h0L290aGVyL3Njcm9sbGJhci10aGluLXRodW1iXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIwODQ5NjliZTliZmVlNzUyMDY0ZGYxYzUwNGI2YmEwN2E4ZDcyN2FkXCJcbiAgICB9LFxuICAgIFwiMmFiMjRiMWEzOTAxZmFlNzk2MGRlYjhhMzZlNDlmMGQ2YjE3MzJhZlwiOiB7XG4gICAgICAgIG5hbWU6IFwidGhlbWVzL2Rhcmsvb3RoZXIvc2Nyb2xsYmFyLWF1dG8tdGh1bWJcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJ0aGVtZXMvbGlnaHQvb3RoZXIvc2Nyb2xsYmFyLWF1dG8tdGh1bWJcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjY0MzZkMDJmMjFkNzQ5Yjg0Y2JkODczNmJkNDUzZGFkMWM0YWMzYWJcIlxuICAgIH0sXG4gICAgZDUwOWJmMTRiMWMzYWFjNTVkYzBmZDZiODIyZjYyODk1NmFkODBjMzoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9kYXJrL290aGVyL3Njcm9sbGJhci1hdXRvLXRyYWNrXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2xpZ2h0L290aGVyL3Njcm9sbGJhci1hdXRvLXRyYWNrXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI1NGZiMTQ2NjA5YzA3ZmJhMTk5ZDQwNjZmOGMyY2UxNDgyOWEwZDBhXCJcbiAgICB9LFxuICAgIGI3ZWRhZmVmNDUxM2E1OWE0MGM4YmE3YWRiMzgyYTBiNmQzMzEzZmY6IHtcbiAgICAgICAgbmFtZTogXCJCb3JkZXIgRWxldmF0aW9uIC8gRGFya1wiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkJvcmRlciBFbGV2YXRpb24gLyBMaWdodFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiYmY2NGNhNTFmOTAyYTkwMzkzNTY4MGY2OTI2MThhNWViYTRlYTg5NFwiXG4gICAgfSxcbiAgICBcIjY3YWFiYjJiZWI4MDkyZTRjMDA5NGUwMTc1NjU3YmIwNzU4ZTZiYThcIjoge1xuICAgICAgICBuYW1lOiBcIkhpZ2ggRWxldmF0aW9uIC8gRGFya1wiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkhpZ2ggRWxldmF0aW9uIC8gTGlnaHRcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjMwZjAxMWJiZTAzNTA2YTU5MDUyZDdmODQzNWNjMWVjM2I3NDNiMTlcIlxuICAgIH0sXG4gICAgZDEwNGYwMDRmNzlkMGU0MjJjNDRkMTRlZmRkNWU1MjdkNTdhMTg1Zjoge1xuICAgICAgICBuYW1lOiBcIkJFVEFfREVQUkVDQVRFRC9oZWFkZXIvaGVhZGVyLXByaW1hcnlcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJ0aGVtZXMvbGlnaHQvaGVhZGVyL2hlYWRlci1wcmltYXJ5XCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJiMTlhMTQ2NzViOGFkZWIxNTI4YWI1Zjg0ZTU3YjJlZWVkMTBkNDZjXCJcbiAgICB9LFxuICAgIFwiMWFlZTQ3NjI2YjAwODNmZTI4MzBmYjgyNjJkOWJhMmQxNzkwOTQ5ZlwiOiB7XG4gICAgICAgIG5hbWU6IFwiQkVUQV9ERVBSRUNBVEVEL2hlYWRlci9oZWFkZXItc2Vjb25kYXJ5XCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2xpZ2h0L2hlYWRlci9oZWFkZXItc2Vjb25kYXJ5XCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI2MDhmMmVhMWFhNjRmZjdmMjAyZThjMjJjYzQxNDdhMDJiZTlkODViXCJcbiAgICB9LFxuICAgIGJkNzY4ZjdkZGEzNjkxM2ZmMDYxYjFmODJhMjczMjY0ZTcxMGU5ZTA6IHtcbiAgICAgICAgbmFtZTogXCJCRVRBX0RFUFJFQ0FURUQvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLXByaW1hcnlcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJ0aGVtZXMvbGlnaHQvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLXByaW1hcnlcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjI0NDlhMjk4M2Q0Mzc5M2Q4MGJhYTIwYzZjNjBlOGE0OGU3ZjNhMGNcIlxuICAgIH0sXG4gICAgZThjOTRhODg1N2E0NTc5NDE3MmI4ZTdlMWY0MzkyYjM4ODQwM2NmZDoge1xuICAgICAgICBuYW1lOiBcIkJFVEFfREVQUkVDQVRFRC9iYWNrZ3JvdW5kL2JhY2tncm91bmQtc2Vjb25kYXJ5XCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2xpZ2h0L2JhY2tncm91bmQvYmFja2dyb3VuZC1zZWNvbmRhcnlcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjgzNzA0Mjc4Yzg0NWE2YTdjZWIxZjgzNzM4Nzk3MmNjYjZkNDE5NjBcIlxuICAgIH0sXG4gICAgXCI4ZWQ3YzJjYmM5NWIxZWY1ZGJkNzUwZTI5NDQ2ZmIzMGY1ZTJjN2Q2XCI6IHtcbiAgICAgICAgbmFtZTogXCJ0aGVtZXMvbGlnaHQvdGV4dC90ZXh0LW5vcm1hbFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9saWdodC9iYWNrZ3JvdW5kL2JhY2tncm91bmQtcHJpbWFyeVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiNTQ2YzdkNDZlNzU0YWMyYjIzYjMzODc4M2Q3MmYyMDZiNzdiNjQzNlwiXG4gICAgfSxcbiAgICBcIjdhMThhOGFmMDNiMDAyYjc0MzM1NjBhMDI0ZDA0MTYwMTdhOTI3YmRcIjoge1xuICAgICAgICBuYW1lOiBcIkJFVEFfREVQUkVDQVRFRC90ZXh0L3RleHQtbXV0ZWRcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJ0aGVtZXMvbGlnaHQvdGV4dC90ZXh0LW11dGVkXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI3ZDg3MDNlYzEzMmRkYWY2OTY4ZjZkMTkwZDFlODAwMzFjNTU5ZDdjXCJcbiAgICB9XG59O1xuZXhwb3J0IHsgZGFya1RoZW1lIH07XG4iLCJjb25zdCBsaWdodFRoZW1lID0ge1xuICAgIFwiMzM0MjViZDkzYzFiOGNlYTA3MWRmOWI1Mjk3ZjBiMTk1ODNhNjQzYlwiOiB7XG4gICAgICAgIGNvbXBvbmVudE5hbWU6IFwiaVBob25lIFggU3RhdHVzIEJhciAvIExpZ2h0XCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJmMGQ0YWE1ZTYzZmZmNDM5MmUzYjNjMjI4ODQ1MjMzNjlmNWQwNDI0XCJcbiAgICB9LFxuICAgIFwiMDQ4OWJkZTdmZDAzNDZhOTdlZmYzMTcwMTY3NzE0ODM4YThmZmI5Y1wiOiB7XG4gICAgICAgIGNvbXBvbmVudE5hbWU6IFwiaVBob25lIFggSG9tZSBJbmRpY2F0b3IgLyBMaWdodFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiNWI4ZGNlN2E3OTA0NjZkYTU0NmQzMTlhNjlmNWRlMjIwZTFhNjZmMVwiXG4gICAgfSxcbiAgICBcIjg2N2ZhNDdkZWZlYjA3MjkzYWEzN2U1NDY3ZTRjYTQ4NzAxOWRkNzhcIjoge1xuICAgICAgICBjb21wb25lbnROYW1lOiBcIlN5c3RlbSAoTGlnaHQpIC8gTnVtZXJpYyBLZXlib2FyZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiM2VlNGNmNDc5ZWVmZDVlMTgxZmY0YWJkMWM5ODIwMTE0MzhlNjkyZFwiXG4gICAgfSxcbiAgICBiY2E2OWYwM2RiOGU5MzhjZDc4Y2E5MWM4NGUzNTU1MzgwNGNhOGMxOiB7XG4gICAgICAgIGNvbXBvbmVudE5hbWU6IFwiU3lzdGVtIChMaWdodCkgLyBLZXlib2FyZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiZTRkY2JlYjg1NDkzMzJlNGM5NjllZjRkMGQzMDJlNzVhNzkzMmMyNVwiXG4gICAgfSxcbiAgICBcIjQ2ZDZiZWQ0ZWRkOTQ4MmIxNDUyYWZhYjVhYjAyOTJiNTE2YzllMDlcIjoge1xuICAgICAgICBjb21wb25lbnROYW1lOiBcIk5hdmlnYXRpb24gVGFiIC8gTGlnaHRcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjY0ZDE2NTU0NTYxYTc0OTZiMmQyMzg1NDA3NGNlOTIzNjU1OTE4ZTBcIlxuICAgIH0sXG4gICAgXCIwMDIzMGYwM2MwOGUwMGE3ODdlOWMyNjU5YzMxNjViY2FkN2FlMDZiXCI6IHtcbiAgICAgICAgY29tcG9uZW50TmFtZTogXCJIZWFkZXIgLyBHdWlsZCAvIExpZ2h0XCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJlOTYyMmFiMjUyNDhmMzFmYjAyYjZmYWEwMDMwOGI4ZmFhNGFjYjNlXCJcbiAgICB9LFxuICAgIFwiNDU5MmZiOThlZGY3OGZkZWVhMDdkMjM0NDVkZTk0ODI4NmU3YzVmMlwiOiB7XG4gICAgICAgIGNvbXBvbmVudE5hbWU6IFwiSGVhZGVyIC8gRE1cIixcbiAgICAgICAgbWFwc1RvS2V5OiBcImZmOGI1YzcxYTYwZmMyMTI2NDdjNDBlNDgxYzBiZjE4ODZhM2VjODVcIlxuICAgIH0sXG4gICAgXCI3OTBkN2QzZDg4NGE2ZDNkYWRjNzliZjNjNDhhNDkxOGY0YzE2YmE3XCI6IHtcbiAgICAgICAgY29tcG9uZW50TmFtZTogXCJTdGF0dXMgQmFyIC8gTGlnaHRcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjM1ODhmZTRkNWEzMDJiMmZjYTJiZTJiMGNiNWMxMmUyYTJmNDFjMDVcIlxuICAgIH0sXG4gICAgYTkyMzFhM2Q5ZmFjNWI3ZDI2ZDU2OTA0YzdiMjhkNWQwMGJmZmY5Nzoge1xuICAgICAgICBjb21wb25lbnROYW1lOiBcIkd1aWxkIFNlbGVjdGVkIC8gTGlnaHRcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjllMGE5Zjk5MDI0ZmI5YmFlZGNhY2JiMTIzYzg0ZDdjYzRiOGY4N2FcIlxuICAgIH0sXG4gICAgXCI4YzgwZDViZDdiZGQ4MGFjZWM5NzkzYTcxOWY2Y2FhZWJiYTFjNmVlXCI6IHtcbiAgICAgICAgY29tcG9uZW50TmFtZTogXCJNZXNzYWdlcyBTZWxlY3RlZCAvIExpZ2h0XCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJjMjVkODk5NTMwNDFkMDk1MjE1Yzk3MmZhNTVkYzZmNzc3NmQ5YTU0XCJcbiAgICB9LFxuICAgIGJkNTZjM2U4OTE2MmQ4Mjc0YzRjYTU5MWYyY2ExZTEwNjQ2NTg1NzA6IHtcbiAgICAgICAgY29tcG9uZW50TmFtZTogXCJOYXZpZ2F0aW9uIFRhYiAvIERhcmtcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjQzYzE0Y2EyMzgzNGQyYWEzYmYxZTAyN2EwNjM1YzczOTNlODczNzhcIlxuICAgIH0sXG4gICAgXCIwNWZjMmE2YjQyMDdiYWE4ZjY3MmRjOWU4YTVkNzUwYzVkNjA3MTFiXCI6IHtcbiAgICAgICAgY29tcG9uZW50TmFtZTogXCJXaW5kb3dzIEJhciAvIExpZ2h0XCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJkMzFkNjUxNzY3MTE2YjczZjkyMDljNTM2MjY2OTc4MmZmM2E4YTI1XCJcbiAgICB9LFxuICAgIGIxOWExNDY3NWI4YWRlYjE1MjhhYjVmODRlNTdiMmVlZWQxMGQ0NmM6IHtcbiAgICAgICAgbmFtZTogXCJMaWdodCAvIEhlYWRlciAvIFByaW1hcnkgKDkwMClcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJEYXJrIC8gSGVhZGVyIC8gUHJpbWFyeSAoV2hpdGUpXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI1YzE2OTFjYmVhYWY0MjcwMTA3ZDM0ZjFhMTJmMDJmZGQwNGFmYTAyXCJcbiAgICB9LFxuICAgIFwiNjA4ZjJlYTFhYTY0ZmY3ZjIwMmU4YzIyY2M0MTQ3YTAyYmU5ZDg1YlwiOiB7XG4gICAgICAgIG5hbWU6IFwiTGlnaHQgLyBIZWFkZXIgLyBTZWNvbmRhcnkgKDYwMClcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJEYXJrIC8gSGVhZGVyIC8gU2Vjb25kYXJ5ICgzMDApXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJiYzA5MGNiM2IxYzczMTNhZTI3NmFjYmQ3OTFiNWI4N2I0NzhlYzU5XCJcbiAgICB9LFxuICAgIFwiNTQ2YzdkNDZlNzU0YWMyYjIzYjMzODc4M2Q3MmYyMDZiNzdiNjQzNlwiOiB7XG4gICAgICAgIG5hbWU6IFwiTGlnaHQgLyBUZXh0IC8gTm9ybWFsICg3MDApXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiRGFyayAvIFRleHQgLyBOb3JtYWwgKDIwMClcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjVjNzdhOTYxMzdiNjk4YjU1NzU1NTdjMDY5Y2FiZDY4NzdkNjZlMWVcIlxuICAgIH0sXG4gICAgXCI3ZDg3MDNlYzEzMmRkYWY2OTY4ZjZkMTkwZDFlODAwMzFjNTU5ZDdjXCI6IHtcbiAgICAgICAgbmFtZTogXCJMaWdodCAvIFRleHQgLyBNdXRlZCAoNTAwKVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkRhcmsgLyBUZXh0IC8gTXV0ZWQgKDQwMClcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjVkODRhZDkyZjNhZDE1MmYxOTZlMjA5M2EzYzA1NDJhMDhkZmJhMTFcIlxuICAgIH0sXG4gICAgXCI2NGQzMDU4ZGQ1MDhhNDk4NTY3MGIyZDE5NDE4YTA2YTM1MDNjOWMyXCI6IHtcbiAgICAgICAgbmFtZTogXCJMaWdodCAvIFRleHQgLyBMaW5rXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiRGFyayAvIFRleHQgLyBMaW5rXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJiZjAzMjMyNzUzMDc5YmRkNWJlYzZjNTUzNDNiNjU5ODc2YjUyODNmXCJcbiAgICB9LFxuICAgIFwiMTUzMjBmZDQ5OGRjZDRlMTEzYzViZDU4N2RjYTJkMTFkNDQ5MmU4NFwiOiB7XG4gICAgICAgIG5hbWU6IFwidGhlbWVzL2xpZ2h0L3RleHQvdGV4dC1icmFuZFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9kYXJrL3RleHQvdGV4dC1icmFuZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiNmU0YWVmNzY3N2UyZWE4MmM4NzQ2NTI3NjUyMmRhN2VmNWEwNzEyMVwiXG4gICAgfSxcbiAgICBjOGQyMzcwODBkMzg2NzExOTM0MDNiNDljZGM2YTU3NzhhMTRiZjQ1OiB7XG4gICAgICAgIG5hbWU6IFwidGhlbWVzL2xpZ2h0L3RleHQvdGV4dC1kYW5nZXJcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJ0aGVtZXMvZGFyay90ZXh0L3RleHQtZGFuZ2VyXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIwOTRjYmFhYzA4MTdiZTdiYmZkODI5MmNiOThmYzFlNTE1ZTdlYTBlXCJcbiAgICB9LFxuICAgIFwiMGQ5NWE3ZDRkMzBlZjk5ZWJkMDRhYmQ1YjJkZDQ3MDg5MTNmNzY1YlwiOiB7XG4gICAgICAgIG5hbWU6IFwidGhlbWVzL2xpZ2h0L3RleHQvdGV4dC13YXJuaW5nXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2RhcmsvdGV4dC90ZXh0LXdhcm5pbmdcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcImRmMDYyMmJiMzMyMzJmZTA0MWM0NjhlOGQzZGQzN2U1NDI4YjEwZTdcIlxuICAgIH0sXG4gICAgXCI3MWY2NGIwOGJkZWM0ZGFmNzQ3YTg1MGIxMjhlMDk5NGM0NTkzYzA0XCI6IHtcbiAgICAgICAgbmFtZTogXCJ0aGVtZXMvbGlnaHQvdGV4dC90ZXh0LXBvc2l0aXZlXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2RhcmsvdGV4dC90ZXh0LXBvc2l0aXZlXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI3NzMzMTE3Y2YxZWY1NzBiNzczMzJjODZiYTc4M2FmNmNiNzM1ZmMxXCJcbiAgICB9LFxuICAgIFwiOWMyM2EwMzE3NzM3MTFlMDI2Mzk0ZjQzNTQ2NjFjMzdlZTViNDY4MlwiOiB7XG4gICAgICAgIG5hbWU6IFwiTGlnaHQgLyBJbnRlcmFjdGl2ZSBUZXh0ICYgSWNvbnMgLyBOb3JtYWwgKDYwMClcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJEYXJrIC8gSW50ZXJhY3RpdmUgVGV4dCAmIEljb25zIC8gTm9ybWFsICgzMDApXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIyODc0NjNiYWRlOTBjMWVlZDVlYTRjYjBiNWQ2Mzc5NGRhYThhZWMyXCJcbiAgICB9LFxuICAgIFwidmVjdG9yICM3NTc1NzVcIjoge1xuICAgICAgICBuYW1lOiBcIlVuc3R5bGVkIEljb25cIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJEYXJrIC8gSW50ZXJhY3RpdmUgVGV4dCAmIEljb25zIC8gTm9ybWFsICgzMDApXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIyODc0NjNiYWRlOTBjMWVlZDVlYTRjYjBiNWQ2Mzc5NGRhYThhZWMyXCJcbiAgICB9LFxuICAgIFwidmVjdG9yICM0ZjU2NjBcIjoge1xuICAgICAgICBuYW1lOiBcIlVuc3R5bGVkIEljb25cIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJEYXJrIC8gSW50ZXJhY3RpdmUgVGV4dCAmIEljb25zIC8gTm9ybWFsICgzMDApXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIyODc0NjNiYWRlOTBjMWVlZDVlYTRjYjBiNWQ2Mzc5NGRhYThhZWMyXCJcbiAgICB9LFxuICAgIFwiYm9vbGVhbl9vcGVyYXRpb24gIzc1NzU3NVwiOiB7XG4gICAgICAgIG5hbWU6IFwiVW5zdHlsZWQgSWNvblwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkRhcmsgLyBJbnRlcmFjdGl2ZSBUZXh0ICYgSWNvbnMgLyBOb3JtYWwgKDMwMClcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjI4NzQ2M2JhZGU5MGMxZWVkNWVhNGNiMGI1ZDYzNzk0ZGFhOGFlYzJcIlxuICAgIH0sXG4gICAgXCJib29sZWFuX29wZXJhdGlvbiAjNGY1NjYwXCI6IHtcbiAgICAgICAgbmFtZTogXCJVbnN0eWxlZCBJY29uXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiRGFyayAvIEludGVyYWN0aXZlIFRleHQgJiBJY29ucyAvIE5vcm1hbCAoMzAwKVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiMjg3NDYzYmFkZTkwYzFlZWQ1ZWE0Y2IwYjVkNjM3OTRkYWE4YWVjMlwiXG4gICAgfSxcbiAgICBlOTU0MmU5NWFkZjNiYmU3NDI4NmMyY2YyNzlmZWU2NGY3YmEzMjc5OiB7XG4gICAgICAgIG5hbWU6IFwidGhlbWVzL2xpZ2h0L2ludGVyYWN0aXZlL2ludGVyYWN0aXZlLWhvdmVyXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2RhcmsvaW50ZXJhY3RpdmUvaW50ZXJhY3RpdmUtaG92ZXJcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjUwMmRjZGYwNDk5MjgxOGRjYmFlZDEyNWFkNzExYjQ0NmRlZTRjNjhcIlxuICAgIH0sXG4gICAgXCI2MjBjOThlOGY5MjU1YTYxMDdkZWU5MTc0NTY2OWU1YjcwMmI0MTNjXCI6IHtcbiAgICAgICAgbmFtZTogXCJMaWdodCAvIEludGVyYWN0aXZlIFRleHQgJiBJY29ucyAvIEFjdGl2ZSAoOTAwKVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkRhcmsgLyBJbnRlcmFjdGl2ZSBUZXh0ICYgSWNvbnMgLyBBY3RpdmUgKFdoaXRlKVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiM2VkZGMxNWU5MGJiZDcwNjRhZWE3Y2MxM2RjMTNlMjNhNzEyZjBiMFwiXG4gICAgfSxcbiAgICBcIjkzMjhjZDc4YTM5MTQ5YjA3MGQ2OGY5OGQ5ZmU0ZGY3YTkyYmY2N2RcIjoge1xuICAgICAgICBuYW1lOiBcIkxpZ2h0IC8gSW50ZXJhY3RpdmUgVGV4dCAmIEljb25zIC8gTXV0ZWQgKDMwMClcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJEYXJrIC8gSW50ZXJhY3RpdmUgVGV4dCAmIEljb25zIC8gTXV0ZWQgKDUwMClcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcImZhNjk4YWEyYTcyNDUyMmE3YzI5ZWZiMGE2NjJhZWM3NWExYmU1YTFcIlxuICAgIH0sXG4gICAgXCIyNDQ5YTI5ODNkNDM3OTNkODBiYWEyMGM2YzYwZThhNDhlN2YzYTBjXCI6IHtcbiAgICAgICAgbmFtZTogXCJMaWdodCAvIEJhY2tncm91bmQgLyBQcmltYXJ5IChXaGl0ZSlcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJEYXJrIC8gQmFja2dyb3VuZCAvIFByaW1hcnkgKDYwMClcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjRiOTNkNDBmNjFiZTE1ZTI1NWU4Nzk0OGE3MTU1MjFjM2FlOTU3ZTZcIlxuICAgIH0sXG4gICAgXCJmcmFtZSAjZmZmZmZmXCI6IHtcbiAgICAgICAgbmFtZTogXCJXaGl0ZSBCYWNrZ3JvdW5kXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiRGFyayAvIEJhY2tncm91bmQgLyBQcmltYXJ5ICg2MDApXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI0YjkzZDQwZjYxYmUxNWUyNTVlODc5NDhhNzE1NTIxYzNhZTk1N2U2XCJcbiAgICB9LFxuICAgIFwiZnJhbWUgIzU4NjVmMlwiOiB7XG4gICAgICAgIG5hbWU6IFwiVW5zdHlsZWQgQnJhbmRcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJvdGhlci9ibHVycGxlIChicmFuZC01MDApXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIyNWIxNjUyMjJmNDVmZDcwZGMzYzhlNjhkMWEyNWY4ZDM3OWE1OTdkXCJcbiAgICB9LFxuICAgIFwicmVjdGFuZ2xlICM1ODY1ZjJcIjoge1xuICAgICAgICBuYW1lOiBcIlVuc3R5bGVkIEJyYW5kXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwib3RoZXIvYmx1cnBsZSAoYnJhbmQtNTAwKVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiMjViMTY1MjIyZjQ1ZmQ3MGRjM2M4ZTY4ZDFhMjVmOGQzNzlhNTk3ZFwiXG4gICAgfSxcbiAgICBcIjgzNzA0Mjc4Yzg0NWE2YTdjZWIxZjgzNzM4Nzk3MmNjYjZkNDE5NjBcIjoge1xuICAgICAgICBuYW1lOiBcIkxpZ2h0IC8gQmFja2dyb3VuZCAvIFNlY29uZGFyeSAoMTMwKVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkRhcmsgLyBCYWNrZ3JvdW5kIC8gU2Vjb25kYXJ5ICg2MzApXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJmYjEzNThlNWJkNmRlYzA3MjgwMTI5ODIzOGNmNDlmZjc3Yjc5YTRiXCJcbiAgICB9LFxuICAgIFwiNmFjZDg0Yzc5NDc5NmQxMTJkNGU5ZDIyYzRjOGE1Y2FlOTQwYTYxZFwiOiB7XG4gICAgICAgIG5hbWU6IFwiTGlnaHQgLyBCYWNrZ3JvdW5kIC8gU2Vjb25kYXJ5IEFsdGVybmF0ZVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkRhcmsgLyBCYWNrZ3JvdW5kIC8gU2Vjb25kYXJ5IEFsdGVybmF0ZVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiYWJmOWFkODhhZTFhZGUxYTRiOTQ1YjAxMmYwOTY1YzljZGMwNjhjOVwiXG4gICAgfSxcbiAgICBkYmQwMmE3NmI3Yjc3YzE5NzYxMTRjMDQwNjhmMGZiYzIyMDE1ZmFiOiB7XG4gICAgICAgIG5hbWU6IFwiTGlnaHQgLyBCYWNrZ3JvdW5kIC8gVGVydGlhcnkgKDIwMClcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJEYXJrIC8gQmFja2dyb3VuZCAvIFRlcnRpYXJ5ICg3MDApXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJlZjE3OWI2YWJlNmNiODc3OTg1N2UwNWE2MzMzZDMzZjdhMmI5MzIwXCJcbiAgICB9LFxuICAgIFwiN2ExOTljZTAyOWE4NDdmM2EzNjFkZmI2YTZlMGVlNGU0YmE4NGQ0ZlwiOiB7XG4gICAgICAgIG5hbWU6IFwiTGlnaHQgLyBCYWNrZ3JvdW5kIC8gQWNjZW50ICg1MDApXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiRGFyayAvIEJhY2tncm91bmQgLyBBY2NlbnQgKDUwMClcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjNkZDBlMzBjZTBhODI4N2ViOTFlYzFmYmVmZjkyMDMxZTYzNGVkMDFcIlxuICAgIH0sXG4gICAgXCI2MzRlZjk1YjUzYWI1MjlhNzc0ZjI3ZWQxNmJlMDdjMGIzZmIzYTVmXCI6IHtcbiAgICAgICAgbmFtZTogXCJMaWdodCAvIE92ZXJyaWRlIC8gUmVhZCBDaGFubmVscyAzNjBcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJEYXJrIC8gT3ZlcnJpZGUgLyBSZWFkIENoYW5uZWxzXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJiZmNkZjA2M2ViMmMxZWRiNDQ2YmE1ZDc4ODBkYTZhMzI0Y2M5YjRmXCJcbiAgICB9LFxuICAgIFwiNmM4YjA4YTQyZjk2MTQ4NDJlODgwYmY3YmI3OTUwMTRkOGZiYWU5NFwiOiB7XG4gICAgICAgIG5hbWU6IFwiTGlnaHQgLyBCYWNrZ3JvdW5kIC8gRmxvYXRpbmcgKFdoaXRlKVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkRhcmsgLyBCYWNrZ3JvdW5kIC8gRmxvYXRpbmcgKDgwMClcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjExNTE2ZjRiNDNmMzgxYWZiNWE2YmRmMmMzNGI5NDM3ZjBlZWNkZTFcIlxuICAgIH0sXG4gICAgYzU5MmVhMGIyNjkyOWNmMTM3NGY5NzNiODU3MDI3ZGJkMjFmZmIxMjoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9saWdodC9iYWNrZ3JvdW5kL3N0YXR1cy1kYW5nZXItYmFja2dyb3VuZFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9kYXJrL2JhY2tncm91bmQvc3RhdHVzLWRhbmdlci1iYWNrZ3JvdW5kXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJiNjU5YzI4Mzk1MGY4YjMzNTkyMmY1MmU0MGNlZmQzY2Y2NzlkMjk3XCJcbiAgICB9LFxuICAgIFwiNDVmMjEzOTM0OGI1MDI2M2ZkYTQ3MDRkNGE5YWNjZWE3NDU0MGRjY1wiOiB7XG4gICAgICAgIG5hbWU6IFwidGhlbWVzL2xpZ2h0L2JhY2tncm91bmQvc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9kYXJrL2JhY2tncm91bmQvc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiM2RiZDY3OTg5Nzg3NmI2OWJjOWNjOGZhMzhiZTgzYzUyNWFjNWVkNVwiXG4gICAgfSxcbiAgICBcIjJhMTM1ZmE2M2MwY2VhNDczOTM2Y2VkNTFjY2Q3NjdiMmYxNTY3MzlcIjoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9saWdodC9iYWNrZ3JvdW5kL3N0YXR1cy1wb3NpdGl2ZS1iYWNrZ3JvdW5kXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2RhcmsvYmFja2dyb3VuZC9zdGF0dXMtcG9zaXRpdmUtYmFja2dyb3VuZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiNzQ2ZTE3MGFjNmU3YmE4MGQxNzFmMDEzMTM3MzVhM2VjNTUzNWVmOFwiXG4gICAgfSxcbiAgICBcIjMwZDQ0MDkyYzEzMjMxMjEzMTQzYjUwMDE1OTA3NDYzZGQxYjYyMTFcIjoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9saWdodC9iYWNrZ3JvdW5kL2JhY2tncm91bmQtbWVudGlvbmVkXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2RhcmsvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLW1lbnRpb25lZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiZGEyMWMwOGQ1Zjg4N2FlOGQ2MTk1ZDdmOGE3NTg1MjE5ZDY3MGI5M1wiXG4gICAgfSxcbiAgICBcIjRkMTVlZTY4NGViOWZkNmNiMTE0ZDdmYjU4NWM4M2M5YjBhNTk4ZmRcIjoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9saWdodC9iYWNrZ3JvdW5kL2JhY2tncm91bmQtbWVudGlvbmVkLWhvdmVyXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2RhcmsvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLW1lbnRpb25lZC1ob3ZlclwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiMzljOTFiZjYyNTM2Y2IxYzZmNTEwODc4NTNjMzVhZmNjNjQ2MmJhY1wiXG4gICAgfSxcbiAgICBcIjQ0MGEyZDY2NDkwYjcxNjI0MTdjNzQwZTY2MzU1ZjM5ZDdiOWU0MWFcIjoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9saWdodC9iYWNrZ3JvdW5kL2JhY2tncm91bmQtbWVzc2FnZS1ob3ZlclwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9kYXJrL2JhY2tncm91bmQvYmFja2dyb3VuZC1tZXNzYWdlLWhvdmVyXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIxMDU0ZTBjNGJjM2U1MmFlMmM3YzQ4YWEwZDBmOTVlZDVkOTk4NTg3XCJcbiAgICB9LFxuICAgIFwiNTc0N2Q1ZTJmMWU2MDQ3NzQ2Yzc3ZTkzNjhlOGQyMTMyNGViOTNkOVwiOiB7XG4gICAgICAgIG5hbWU6IFwidGhlbWVzL2xpZ2h0L2JhY2tncm91bmQvYmFja2dyb3VuZC1tb2JpbGUtcHJpbWFyeVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9kYXJrL2JhY2tncm91bmQvYmFja2dyb3VuZC1tb2JpbGUtcHJpbWFyeVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiNzJhNzA3NzFmZjJhMjY4MTMwZTczNTIyNTBmMzc0NzIyZjRkOGJmZVwiXG4gICAgfSxcbiAgICBkZTlmNTE4YzM1MDk2MDk1YzAyYzIxNTU0MzE3NGEwNDkwMGIwN2Q3OiB7XG4gICAgICAgIG5hbWU6IFwidGhlbWVzL2xpZ2h0L2JhY2tncm91bmQvYmFja2dyb3VuZC1tb2JpbGUtc2Vjb25kYXJ5XCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2RhcmsvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLW1vYmlsZS1zZWNvbmRhcnlcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjI1MWY4NWJjMzM4YzU0MTE2MDhjMmRjMTQxYTUzODMwNWFiNmI0YzFcIlxuICAgIH0sXG4gICAgXCIxZmFlNTNiMTliZTJmZTg1YWE0NDUyOWNkMzI0M2M3YjI4MDE3M2YxXCI6IHtcbiAgICAgICAgbmFtZTogXCJ0aGVtZXMvbGlnaHQvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLW5lc3RlZC1mbG9hdGluZ1wiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9kYXJrL2JhY2tncm91bmQvYmFja2dyb3VuZC1uZXN0ZWQtZmxvYXRpbmdcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjFlMWNhYThmMzFlZDNiYjdjZTZlNmNlMjBkZmUzMTg3YjIwNzY2YzhcIlxuICAgIH0sXG4gICAgXCIzNTMwNzM5NmFlMjlhYWViNTgzYWU2NTg5MWM2OWVjNjg5ZjBjNDFlXCI6IHtcbiAgICAgICAgbmFtZTogXCJMaWdodCAvIEJhY2tncm91bmQgTW9kIC8gSG92ZXJcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJEYXJrIC8gQmFja2dyb3VuZCBNb2QgLyBIb3ZlclwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiZDZjOTI3MDgzNGIxMWM5OWVlNjUxZjBmNTA3MmFkMmM2MzcwMTE2NVwiXG4gICAgfSxcbiAgICBkZGFkZjc2OTE5ZDliYWNiOTI1MjQyYTAyNGRjMWUyZjVmNTE3YTQ2OiB7XG4gICAgICAgIG5hbWU6IFwiTGlnaHQgLyBCYWNrZ3JvdW5kIE1vZCAvIEFjdGl2ZVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkRhcmsgLyBCYWNrZ3JvdW5kIE1vZCAvIEFjdGl2ZVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiYmNmODkwZDdhMjE1YzY1ZGVlZjk3ZmIzZDNmNWJjZWJjOTg2OWJhYlwiXG4gICAgfSxcbiAgICBcIjVhZjJlYWYxNDkwMTQ3MmMyNmI2NDE5OTc3OTZiZGJhNzZlZTE3OTRcIjoge1xuICAgICAgICBuYW1lOiBcIkxpZ2h0IC8gQmFja2dyb3VuZCBNb2QgLyBTZWxlY3RlZFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkRhcmsgLyBCYWNrZ3JvdW5kIE1vZCAvIFNlbGVjdGVkXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJjZTAxMmRiNDJmMzVmYjU4YjRmZTFkNmQ4YjQ2YzQ5MDVhOGZhZDBhXCJcbiAgICB9LFxuICAgIFwiMDhjNzA5MWY4ZDY5NTBkYzNmNjE2YWZlOGVkNDViMDg2ZjkxMjRjN1wiOiB7XG4gICAgICAgIG5hbWU6IFwiTGlnaHQgLyBCYWNrZ3JvdW5kIE1vZCAvIEFjY2VudFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkRhcmsgLyBCYWNrZ3JvdW5kIE1vZCAvIEFjY2VudFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiYTZhM2RjMTUzZjBlNTg5NDA4MTg2MTc2ZWJmOGYyMGVkMmY5YmRhM1wiXG4gICAgfSxcbiAgICBcIjZmYWE2ZDA5YjQ3Y2FlYjMyZmEwZjVmODFjNTYxZGNiN2Q2OGU5YjFcIjoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9saWdodC9zdGF0dXMvc3RhdHVzLXBvc2l0aXZlXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2Rhcmsvc3RhdHVzL3N0YXR1cy1wb3NpdGl2ZVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiNjFjNDkzZDlkMTRmMmE1YWU1MmMyMDM3MTQ5NzczZjBjZDc2OTBhNVwiXG4gICAgfSxcbiAgICBcIjBjOWNmYTI3ZjE1M2U2YTVhOTk1NDI0MmJiNmFlM2NhYzAyZDQ0NjhcIjoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9saWdodC9zdGF0dXMvc3RhdHVzLWRhbmdlclwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9kYXJrL3N0YXR1cy9zdGF0dXMtZGFuZ2VyXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIwZmY0ZDU2M2FhZTUzZGQ4MDEyZjc4YTY3ZjlmZDE4MjY5M2EwZjIxXCJcbiAgICB9LFxuICAgIFwiOWZhMmY5OWNmZmU3YmE1ODdmMjU5ZTk4ZmI0ZGUxMmMwYjg5MzIyM1wiOiB7XG4gICAgICAgIG5hbWU6IFwidGhlbWVzL2xpZ2h0L3N0YXR1cy9zdGF0dXMtd2FybmluZ1wiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9kYXJrL3N0YXR1cy9zdGF0dXMtd2FybmluZ1wiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiZjcxOWZiOGU3YmYwNDM0MjAxMGVjYjM3MTY1ZTU1YWE4YTYzOGQzNVwiXG4gICAgfSxcbiAgICBcIjNjMDk4YThkMDlhY2JkMjVlZjM3ZTdmYzBiNjU3YzJkYzc4ZjI0M2VcIjoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9saWdodC9vdGhlci9jaGFubmVsdGV4dGFyZWEtYmFja2dyb3VuZFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9kYXJrL290aGVyL2NoYW5uZWx0ZXh0YXJlYS1iYWNrZ3JvdW5kXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI2YzU0YmU2OTNhNGJiZGZmNmZhNGMwMmY2NzJiYzVjOWU0NjU0ZjhiXCJcbiAgICB9LFxuICAgIGQxZGJhZTQ4M2Y0ZWVmY2Y1YWRjY2ZiYmE4ZTZkNTBkYmVmMWVjMjc6IHtcbiAgICAgICAgbmFtZTogXCJ0aGVtZXMvbGlnaHQvb3RoZXIvZm9jdXMtcHJpbWFyeVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9kYXJrL290aGVyL2ZvY3VzLXByaW1hcnlcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcImE0ZDc2Y2Y3NTE1NmFiNzYwZGYxNjg1YTMwZGFkYWIyMDcyNDAxMGVcIlxuICAgIH0sXG4gICAgYmJkYzVjYjI2NTk1Zjc3MjgzYjhkZmU1MWU2NTljNWJmZGM2YTJkMDoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9saWdodC9vdGhlci9jb250cm9sLWJyYW5kLWZvcmVncm91bmRcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJ0aGVtZXMvZGFyay9vdGhlci9jb250cm9sLWJyYW5kLWZvcmVncm91bmRcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjczMzdhYzkzMWIyYzliNjk5ZDQ0ZTZlNzgzNjM3ZTVhZmFjNTAyOThcIlxuICAgIH0sXG4gICAgXCIwODQ5NjliZTliZmVlNzUyMDY0ZGYxYzUwNGI2YmEwN2E4ZDcyN2FkXCI6IHtcbiAgICAgICAgbmFtZTogXCJ0aGVtZXMvbGlnaHQvb3RoZXIvc2Nyb2xsYmFyLXRoaW4tdGh1bWJcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJ0aGVtZXMvZGFyay9vdGhlci9zY3JvbGxiYXItdGhpbi10aHVtYlwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiYTkyNjc3NGQ1NThkMGU3MGY1MDVkZjY5N2MyMWMxMmRjNDI3MDIwNlwiXG4gICAgfSxcbiAgICBcIjY0MzZkMDJmMjFkNzQ5Yjg0Y2JkODczNmJkNDUzZGFkMWM0YWMzYWJcIjoge1xuICAgICAgICBuYW1lOiBcInRoZW1lcy9saWdodC9vdGhlci9zY3JvbGxiYXItYXV0by10aHVtYlwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9kYXJrL290aGVyL3Njcm9sbGJhci1hdXRvLXRodW1iXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIyYWIyNGIxYTM5MDFmYWU3OTYwZGViOGEzNmU0OWYwZDZiMTczMmFmXCJcbiAgICB9LFxuICAgIFwiNTRmYjE0NjYwOWMwN2ZiYTE5OWQ0MDY2ZjhjMmNlMTQ4MjlhMGQwYVwiOiB7XG4gICAgICAgIG5hbWU6IFwidGhlbWVzL2xpZ2h0L290aGVyL3Njcm9sbGJhci1hdXRvLXRyYWNrXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2Rhcmsvb3RoZXIvc2Nyb2xsYmFyLWF1dG8tdHJhY2tcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcImQ1MDliZjE0YjFjM2FhYzU1ZGMwZmQ2YjgyMmY2Mjg5NTZhZDgwYzNcIlxuICAgIH0sXG4gICAgYmY2NGNhNTFmOTAyYTkwMzkzNTY4MGY2OTI2MThhNWViYTRlYTg5NDoge1xuICAgICAgICBuYW1lOiBcIkJvcmRlciBFbGV2YXRpb24gLyBMaWdodFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkJvcmRlciBFbGV2YXRpb24gLyBEYXJrXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJiN2VkYWZlZjQ1MTNhNTlhNDBjOGJhN2FkYjM4MmEwYjZkMzMxM2ZmXCJcbiAgICB9LFxuICAgIFwiMzBmMDExYmJlMDM1MDZhNTkwNTJkN2Y4NDM1Y2MxZWMzYjc0M2IxOVwiOiB7XG4gICAgICAgIG5hbWU6IFwiSGlnaCBFbGV2YXRpb24gLyBMaWdodFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkhpZ2ggRWxldmF0aW9uIC8gRGFya1wiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiNjdhYWJiMmJlYjgwOTJlNGMwMDk0ZTAxNzU2NTdiYjA3NThlNmJhOFwiXG4gICAgfSxcbiAgICBcIjVhZmExNTI0Nzc3NTc5ZWEyZWViYzk4M2YzMjEwNTQ3YzgzOGZkM2FcIjoge1xuICAgICAgICBuYW1lOiBcIkJFVEFfREVQUkVDQVRFRC9oZWFkZXIvaGVhZGVyLXByaW1hcnlcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJ0aGVtZXMvZGFyay9oZWFkZXIvaGVhZGVyLXByaW1hcnlcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjVjMTY5MWNiZWFhZjQyNzAxMDdkMzRmMWExMmYwMmZkZDA0YWZhMDJcIlxuICAgIH0sXG4gICAgXCIyMDZmYzJhZTQ3NTEzZGE1ZGI3Y2Q3MDVlNzU4NTkzMjIxYmI0YjYzXCI6IHtcbiAgICAgICAgbmFtZTogXCJCRVRBX0RFUFJFQ0FURUQvaGVhZGVyL2hlYWRlci1zZWNvbmRhcnlcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJ0aGVtZXMvZGFyay9oZWFkZXIvaGVhZGVyLXNlY29uZGFyeVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiYmMwOTBjYjNiMWM3MzEzYWUyNzZhY2JkNzkxYjViODdiNDc4ZWM1OVwiXG4gICAgfSxcbiAgICBhYzM0NDMwOWQ3ZTdkMjBhNmI1MThkNDlkMTUwMWUzZDEzNGQ5OTZiOiB7XG4gICAgICAgIG5hbWU6IFwiQkVUQV9ERVBSRUNBVEVEL2JhY2tncm91bmQvYmFja2dyb3VuZC1wcmltYXJ5XCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2RhcmsvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLXByaW1hcnlcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjRiOTNkNDBmNjFiZTE1ZTI1NWU4Nzk0OGE3MTU1MjFjM2FlOTU3ZTZcIlxuICAgIH0sXG4gICAgXCI1MTAwZDY1M2E3MjZiZjg2ZTNiNDNhMzM0OWMzOTY0NzRiZDYzOTUwXCI6IHtcbiAgICAgICAgbmFtZTogXCJCRVRBX0RFUFJFQ0FURUQvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLXNlY29uZGFyeVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9kYXJrL2JhY2tncm91bmQvYmFja2dyb3VuZC1zZWNvbmRhcnlcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcImZiMTM1OGU1YmQ2ZGVjMDcyODAxMjk4MjM4Y2Y0OWZmNzdiNzlhNGJcIlxuICAgIH0sXG4gICAgXCI2ZTE4OTQ5YTk5MDQ5OWJjMGFmODUyZGU5ZGU0ZjJlMzc4YjFmOTU0XCI6IHtcbiAgICAgICAgbmFtZTogXCJCRVRBX0RFUFJFQ0FURUQvdGV4dC90ZXh0LW5vcm1hbFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcInRoZW1lcy9kYXJrL3RleHQvdGV4dC1ub3JtYWxcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjVjNzdhOTYxMzdiNjk4YjU1NzU1NTdjMDY5Y2FiZDY4NzdkNjZlMWVcIlxuICAgIH0sXG4gICAgXCIxNWQ5MjMwYTFkNDFkOWFjZDIxYjYzMDEyZjg2NjEzZjg3OWNmYWFlXCI6IHtcbiAgICAgICAgbmFtZTogXCJCRVRBX0RFUFJFQ0FURUQvdGV4dC90ZXh0LW11dGVkXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwidGhlbWVzL2RhcmsvdGV4dC90ZXh0LW11dGVkXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI1ZDg0YWQ5MmYzYWQxNTJmMTk2ZTIwOTNhM2MwNTQyYTA4ZGZiYTExXCJcbiAgICB9XG59O1xuZXhwb3J0IHsgbGlnaHRUaGVtZSB9O1xuIiwiY29uc3QgY2RzVGhlbWUgPSB7XG4gICAgXCI4MmM4M2JiOWMxY2Y2Y2Y1MjFjYmY1ZTYyNDE1ZTMwNTNjZjE1NWY4XCI6IHtcbiAgICAgICAgbmFtZTogXCJXaGl0ZVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIldoaXRlXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI0MjA3ZmQ1M2Y0MjI0OTljZTUyNjY0MGE4NWE0Mzk4NjkzMjk1MmU1XCJcbiAgICB9LFxuICAgIFwiODdkMTMzZmYyZWI0OGNjNjA4MmFmY2M4MTdkZDRkNGNkM2ZmMWM2YlwiOiB7XG4gICAgICAgIG5hbWU6IFwiQV9MaWdodF8xLjFcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJCbHVlIDFcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjY3MDc5YzZhNjUyODkzNTRkZDg3Njk0ZTU5ZThjMjZkZTY1OTRmM2JcIlxuICAgIH0sXG4gICAgYWUzZDg0OTNiM2Y1OWVhY2ViMWI3YTYyMTMxNzYzYmVkZTk0NDBmZDoge1xuICAgICAgICBuYW1lOiBcIkFfTGlnaHRfMi4xXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiQmx1ZSAyXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJiZTMwYTEyNTM4ZDJlZmFkOWNlMmM2NDQxZTg3OTg1ZWE5ZDUxZDBhXCJcbiAgICB9LFxuICAgIFwiNGQ3ZDNiYzIwYTk4ZmUxMjNjOGZkOTU5NDkxN2I3YWFmN2Y0MzFjM1wiOiB7XG4gICAgICAgIG5hbWU6IFwiQV9MaWdodF8zLjFcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJCbHVlIDNcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjNkN2ViYzQyMjVhMzI1Y2FiNDJiZTI4ODdlNDhmYjFlMjlkMTQ1MDZcIlxuICAgIH0sXG4gICAgZGI0MzQxNmQ3MWE0MjQxMjgzNzg1YWFiNGYwOTAwY2Y0YWUzMzY2Zjoge1xuICAgICAgICBuYW1lOiBcIkFfTWlkXzEuMVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkJsdWUgNlwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiN2E1MWJiOGY1ZmVlMmFiYmI0MmI5NDBhZWFlOGYyMGY2NTFhNWE0MlwiXG4gICAgfSxcbiAgICBcIjU1ZWI5MTUxYTRkY2JhMzA5N2UyZWYzYWMzMzUxNDMxZjVjZDVhYjNcIjoge1xuICAgICAgICBuYW1lOiBcIkFfTWlkXzIuMVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkJsdWUgN1wiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiNzkyNWQyZDNhNzkzODkxYWQzMWU4ZDY5MGJhZmNhYzEzNjQ1MTM3MFwiXG4gICAgfSxcbiAgICBcIjc1NmJmZWU2ZjQ5OGU0MTAyOGFiYmE4OTUyYjAzZGI0NWZmYmY0MTNcIjoge1xuICAgICAgICBuYW1lOiBcIkFfRGFya18xLjFcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJCbHVlIDhcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjIwN2ViODFkMzRkOTdlN2I5YjNmNDczZDM0NmVjMGM1MGVmYWFiOTRcIlxuICAgIH0sXG4gICAgZDRhMDZiZGQzZjZhNzc5M2E0OWMzYzI3ODE0NjgzMTkwNTZlYzU1Njoge1xuICAgICAgICBuYW1lOiBcIkFfRGFya18yLjFcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJCbHVlIDlcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjcxNGJhNzQxZjdiNmQyN2RkODBiY2VjYTFiOWM4ZDE0MDYzYWY4NzNcIlxuICAgIH0sXG4gICAgZmZjNTVlZGE1OTUyMDc1ZjhmODlhM2JkYzE0ZGY1MGM0ODQxODBlNToge1xuICAgICAgICBuYW1lOiBcIkJfTGlnaHRfMS4xXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiR3JlZW4gMVwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiYzQyZGJhOGIyMzliZjRlZDdlZTI5MDBjOTEyN2I1NTBlZTY5YzAxOVwiXG4gICAgfSxcbiAgICBcIjNjM2ViMDBjN2M5ZTg4ZGQzYTA1OTljYWE2NmEyNzFmMGMzN2ZiMmJcIjoge1xuICAgICAgICBuYW1lOiBcIkJfTGlnaHRfMi4xXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiR3JlZW4gMlwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiMzRjNTc0NDBkNThkMDJhMDExZmMwNDBmMDFjYmNkMGZmYjhjZTEwM1wiXG4gICAgfSxcbiAgICBlMmNiYTU0MTVhY2FmM2Y3N2E3OGZhMjE2MjQzMmMwZjcyY2FmMzI4OiB7XG4gICAgICAgIG5hbWU6IFwiQl9NaWRfMS4xXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiR3JlZW4gNlwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiNjdhNzU0OTNjNWJmMGNiYTExM2M4MjBkMmYxZDk5OGE4MGQzYzI2NlwiXG4gICAgfSxcbiAgICBjODdhYTI0M2U4NmIwNTYwYTdlMTA2NDBiYTM0ZmYwYjA2NjY2YWExOiB7XG4gICAgICAgIG5hbWU6IFwiQl9NaWRfMi4xXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiR3JlZW4gN1wiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiZTcyN2JjYjU4ODIyYjAyMDc2ZThiZjFhM2I1NzZkYjZlNTE4NTk4N1wiXG4gICAgfSxcbiAgICBhODljOGZlNzIyY2EzMjJiNGM5MDI4YTBjNzhjZmZmZmY4MGNlYTY4OiB7XG4gICAgICAgIG5hbWU6IFwiQl9NaWRfMy4xXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiR3JlZW4gOFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiMzE1OTg2YWNhZDE5M2MxOTM1MTI5MTc2NDAxN2EyZGNkNDFkOTk3ZlwiXG4gICAgfSxcbiAgICBcIjIwOWJjMThkN2I4MWNjNjM1YTA4NjY2NDM5NmUzZDYyNmExMzVmZDdcIjoge1xuICAgICAgICBuYW1lOiBcIkJfTWlkXzQuMVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkdyZWVuIDhcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjMxNTk4NmFjYWQxOTNjMTkzNTEyOTE3NjQwMTdhMmRjZDQxZDk5N2ZcIlxuICAgIH0sXG4gICAgXCI0N2Y4OGNlNWFlZDg0MDg1YWFjODY2OWQ3OGNhNmQ5NzFlYjA2NGEyXCI6IHtcbiAgICAgICAgbmFtZTogXCJCX0RhcmtfMS4xXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiR3JlZW4gOFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiMzE1OTg2YWNhZDE5M2MxOTM1MTI5MTc2NDAxN2EyZGNkNDFkOTk3ZlwiXG4gICAgfSxcbiAgICBcIjA5YTI3MTExZmJjZTFjY2ZjNjk3NmRmN2NlYjA0MmRhNjAwMGNiNThcIjoge1xuICAgICAgICBuYW1lOiBcIkJfRGFya18yLjFcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJHcmVlbiA5XCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIxZGQxYjRmZWQ0OGY4NWZjNDc4ODVjN2ZiMDc1Mjg5YWViZTVjMTc0XCJcbiAgICB9LFxuICAgIFwiOTY3NWRkMzVhOGU3NDQ2NzlkZGJhM2Q0OGY4MzI0YTZiMTFiOGUxOFwiOiB7XG4gICAgICAgIG5hbWU6IFwiQl9EYXJrXzMuMVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkdyZWVuIDEwXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJiZWE2NTI5ZDBlYjdiY2MzMmM3ZTliMTFlNmE5NmE1NDg0NGQzZjI2XCJcbiAgICB9LFxuICAgIGVjMThlMDZiOTM1MTVhM2VjYTNiNDFmM2JlMGE2YTZiMjBiOWM1Y2I6IHtcbiAgICAgICAgbmFtZTogXCJDX01pZF8xLjFcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJPcmFuZ2UgNlwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiZGNkYjYxMzUyNGFjYTFjYTRjYjhkOTZkMDI5ZGVkMzA3MDgxMTMwMlwiXG4gICAgfSxcbiAgICBcIjkzYzMyNzBlNTI3OWMxZjRlZjAzMzgxNjNhNThhZDg1NjdjMWUyOTRcIjoge1xuICAgICAgICBuYW1lOiBcIkNfTWlkXzIuMVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIk9yYW5nZSA3XCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI0OTQ3NzBiZjhkOWYwZjdkYTJmMmRiYjQ4NzIzYzIzMmYyNmE3OGMyXCJcbiAgICB9LFxuICAgIGFjZTc3MTkzNjIyMTFlZTYyNTc5MmYyZTdlM2RlN2E1YjZmMTlmNmY6IHtcbiAgICAgICAgbmFtZTogXCJEX01pZF8xLjFcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJSZWQgNlwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiNThkYWMyNTgzYTQyNzBjMGNhZTg5MTliMzBhYzUwNGZlMGNkNGQ3MVwiXG4gICAgfSxcbiAgICBcIjE2NzkzNTZjY2MwMDkxYmM5YjNiNWU5MGZmYTdhM2I0MTIyODU5NWVcIjoge1xuICAgICAgICBuYW1lOiBcIkRfTWlkXzIuMVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIlJlZCA3XCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJmYzRkMDBlNjMzODUwYTczZGExNDcyMDQyNWUxYzgwYjM0ZWQxM2ZmXCJcbiAgICB9LFxuICAgIFwiMjQyNDJiNjhlOTU2OTBhMzljZjVjMzgwYTQ0MTQxMzE4NDA5YWEzZFwiOiB7XG4gICAgICAgIG5hbWU6IFwiRF9EYXJrXzEuMVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIlJlZCA4XCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIzNGFmMjQ2OTk0YjY2YmFkN2Y0MzFjYWZlMDI2ZTQ2MDdmZTdlNDMxXCJcbiAgICB9LFxuICAgIGZkZWRhYzVkNTViNjY4OWYzMzdhYmEzNGE5YzU3N2JmNDdkMGU2OTQ6IHtcbiAgICAgICAgbmFtZTogXCJFX1N1cGVyTGlnaHRfMS4xXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiR3JheSAxXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIzM2M3MTY1NDUzZWUwZDBkNjMwMTJjNGY5MDIzNmMyYTVjNDk0NDQwXCJcbiAgICB9LFxuICAgIGI5NzY1NDM0YWMyZDhkYThiOGQ0OGI1ZGU3YTc2ZjhiZDhiMWQ4NTU6IHtcbiAgICAgICAgbmFtZTogXCJFX1N1cGVyTGlnaHRfMi4xXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiR3JheSAxXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIzM2M3MTY1NDUzZWUwZDBkNjMwMTJjNGY5MDIzNmMyYTVjNDk0NDQwXCJcbiAgICB9LFxuICAgIGEzOTU1MDhkZTE0NDU2OTNiZGIyNzBjOTQyMDdkNWUwYThmODZiNzI6IHtcbiAgICAgICAgbmFtZTogXCJFX0xpZ2h0XzEuMVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkdyYXkgMlwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiMjRjYmUzY2M3NWNjMDIzMTI4ZDc1MzAyYzkxNzM0NzIxZjdlMmJhYlwiXG4gICAgfSxcbiAgICBcIjIwZjkzYzc2ZjllZjNkY2MwMjc3YTQyMjc4M2U2MWZmNWQyNDdjY2JcIjoge1xuICAgICAgICBuYW1lOiBcIkVfTGlnaHRfMi4xXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiR3JheSAyXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIyNGNiZTNjYzc1Y2MwMjMxMjhkNzUzMDJjOTE3MzQ3MjFmN2UyYmFiXCJcbiAgICB9LFxuICAgIGIyZWRmY2U3ZDFjMWZhMzljMjExYWE3YjUyMjFjMDU2MzgyZTY1MDA6IHtcbiAgICAgICAgbmFtZTogXCJFX01pZF8xLjFcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJHcmF5IDNcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjlmOWE2ZTQ0ZjQwNTQ4YzljNDhiZTYwMzlkNDQzOTdmNDYwNDVkZThcIlxuICAgIH0sXG4gICAgYzBlNTE4YjkxMDgwZjlhODBjZTA2NmExZGQ3NGE5ZDk0ZTdhYjM5NDoge1xuICAgICAgICBuYW1lOiBcIkVfTWlkXzIuMVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkdyYXkgNFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiYjFkNGNhYTk4M2JkYzAxM2ExNDA1ZWUwNDllZDhlOTY3OGRlNzdkZFwiXG4gICAgfSxcbiAgICBlY2ZiNjBmY2RhMjEwZWUyZGI2M2M3MDRjMGUyM2Q4YjgxZDMxZTdmOiB7XG4gICAgICAgIG5hbWU6IFwiRV9NaWRfMy4xXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiR3JheSA1XCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJmMDExY2ViNWNkMzNlYWY0YzVkNDlmNmI0OWFmM2FhNjFjMGQwYjAxXCJcbiAgICB9LFxuICAgIFwiMWNiOWZjYTc4MmE3OGRjNjlmZDdhOGQyMjFiM2YxNGRlOGU0ZjMyMVwiOiB7XG4gICAgICAgIG5hbWU6IFwiRV9NaWRfNC4xXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiR3JheSA2XCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI3N2RiNDQ5YmUxZGUzZmNhNmQ2NDRhMDVmZDViOTJmOGI2NWVmYTk1XCJcbiAgICB9LFxuICAgIGI1MjQ3YjdmMTYzNjRjZTY2YjFjMzVlN2VjNGViOWM3OWZhMmU0ODY6IHtcbiAgICAgICAgbmFtZTogXCJFX0RhcmtfMS4xXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiR3JheSA3XCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJjYjdiYTIzZTRjMzAwZjJlYTY1MjdhYTcyMTI1N2Q5YzVjMWFhMjQyXCJcbiAgICB9LFxuICAgIFwiNTg0MjBjMDc5MDQ0OGE0ZGI2NmNmNGJlZDkzNGM2Y2Q5ZmNiZjQyOVwiOiB7XG4gICAgICAgIG5hbWU6IFwiRV9EYXJrXzIuMVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkdyYXkgMTBcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjU3MTIxNmFkZmE1M2EzYWZjNTA5ODBkZWY0ZmQ3MjJkZGFkNmE5ZTRcIlxuICAgIH0sXG4gICAgXCI3MDcxZDZiZjk3YjhhMzllOGIzMTEyMzdhYTJkYjVjZjlmYTFkZTY4XCI6IHtcbiAgICAgICAgbmFtZTogXCJFX0RhcmtfMy4xXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiR3JheSAxMlwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiMmU2MzllN2ViM2RlMTBiZWRhZTcwODdkNzQwOWE0YmUyNGI0YjI5M1wiXG4gICAgfSxcbiAgICBcIjc4MGU4NDc3NzdiOTU3YTUwNDQ1ZmU4ZjlmZGYzNGZkN2U4MmIwYTRcIjoge1xuICAgICAgICBuYW1lOiBcIkFjY29yZGlvbiAvIFBhcmVudFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiMjhkNGJjYzE0NTE0OTQwNjQ2MzQ3MDViYjQxZWEwZTMwMzIzOTk5MFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkFjY29yZGlvbiAvIFBhcmVudFwiXG4gICAgfSxcbiAgICBcIjBmMzg1YjgzODI2ZDcyMjNiNWZlMTlkYjQwZTA4OTFmYjhkZDIwMGRcIjoge1xuICAgICAgICBuYW1lOiBcIkFjY29yZGlvbiAvIENoaWxkXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJiOGZmY2ZmYThlZDMxZjhjYjJkZDNiMTgxZmQ1MjdiNGExNDJjNTJlXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiQWNjb3JkaW9uIC8gQ2hpbGRcIlxuICAgIH0sXG4gICAgXCIxMDlkMzFkYjAxMThiMWQzYmE4ZjBkMmNjNjgyODZlOTRjN2U2OTUyXCI6IHtcbiAgICAgICAgbmFtZTogXCJBY2NvcmRpb24gLyBFeHBhbmRlZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiMDgzNzQwMjNhNjlmMDNhNzVkODI4Mzc2MjUxM2U1NDFlZDE1MTAwMVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkFjY29yZGlvbiAvIEV4cGFuZGVkXCJcbiAgICB9LFxuICAgIGY2ZjZhZGI5NjQzNjdjNTE0ZGIyOWFhMjUwZjc0N2ViZTBlNGNkOTg6IHtcbiAgICAgICAgbmFtZTogXCJBY2NvcmRpb24gLyBDb2xsYXBzZWRcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjJhMWJiZjZmZGE2MzNlNDU4ZWM5M2Q4M2IwOTA5ZWQyOGRjYTJlNjVcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJBY2NvcmRpb24gLyBDb2xsYXBzZWRcIlxuICAgIH0sXG4gICAgY2E0MTQ3MjBiZjc5OTE5YjBjYzRlNDcwMjkzYTcyMDVjYjE2OTg3Zjoge1xuICAgICAgICBuYW1lOiBcIipCcmVhZGNydW1iXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJiOTY1MDI0ZDdiYzEzZTYyM2Q5NWIxNmVhMjZiNWE2ZjA1ZTA1OThkXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiKkJyZWFkY3J1bWJcIlxuICAgIH0sXG4gICAgZmEyMTY1NWQ0ZTc1MzU1MzM5ZjM2ZmU5ZjZhZjE3YjlmNmE3NjA1ODoge1xuICAgICAgICBuYW1lOiBcIkJ1dHRvbiAvIFByaW1hcnkgLyBFbmFibGVkXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI2MDZmZjhlZjQ0NDllZDQ0YmVhMDM4OTFlYTQ5ODcxNmU1YjIxNDc0XCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiQnV0dG9uIC8gUHJpbWFyeSAvIEFjdGl2ZVwiXG4gICAgfSxcbiAgICBlNWM2OTdjNzE3NTMzY2E4Nzk0MzZjOTE2ZTU0NGY2MzA0MjNiYzVmOiB7XG4gICAgICAgIG5hbWU6IFwiQnV0dG9uIC8gUHJpbWFyeSAvIEhvdmVyZWRcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcImViMGM0MGFlMThiOGIxNWUxZTE1ZDI1MWFmZmMwOGIzOGYwY2UyNjJcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJCdXR0b24gLyBQcmltYXJ5IC8gSG92ZXJlZFwiXG4gICAgfSxcbiAgICBkM2Y3YTQ2MDQ0ZDNhMjVjYmNhNjFmMmY0ZTkyNTQ4ZDc3Yzk4MjMxOiB7XG4gICAgICAgIG5hbWU6IFwiQnV0dG9uIC8gUHJpbWFyeSAvIFByZXNzZWRcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcImY2MjM5M2U1ODQwNjdmNzk4ZTBjNWYxZjRjZTU5NTY5MTUyYTY3ZTJcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJCdXR0b24gLyBQcmltYXJ5IC8gUHJlc3NlZFwiXG4gICAgfSxcbiAgICBmN2Q3OWVlYzM5MmZjMjM3MWViMGEyZTc5YmRlMjlhOTk5NmJhNDgzOiB7XG4gICAgICAgIG5hbWU6IFwiQnV0dG9uIC8gUHJpbWFyeSAvIERpc2FibGVkXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCIyMTNlZTA5ZWQxMzJlODExMGE5MWJjZDFiZjI4MDE3ZTM0NWZiNDliXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiQnV0dG9uIC8gUHJpbWFyeSAvIERpc2FibGVkXCJcbiAgICB9LFxuICAgIGE0OWNiODQ3ZGI3YzY0N2ZkMTU2MTJjN2JmMzgxZDEwMTY0ZTUwYjQ6IHtcbiAgICAgICAgbmFtZTogXCJCdXR0b24gLyBTZWNvbmRhcnkgLyBFbmFibGVkXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJjMGExN2UyM2RlNTg5ZjA5ODY1MThlYTNmOWMzOWVlZDllNTAxOTg5XCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiQnV0dG9uIC8gU2Vjb25kYXJ5IC8gQWN0aXZlXCJcbiAgICB9LFxuICAgIFwiOGVhNjQ5OTEyMGEzMzc4NmM4NjcxNmVmNWUzOGFhMTg1ZWFlZTdhMFwiOiB7XG4gICAgICAgIG5hbWU6IFwiQnV0dG9uIC8gU2Vjb25kYXJ5IC8gSG92ZXJlZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiZmQ4ZDY4NzU1OGY1NGYzZmMxMGU1MWQ5OWYxMTQzNzhlYTlkZjJmYlwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkJ1dHRvbiAvIFNlY29uZGFyeSAvIEhvdmVyZWRcIlxuICAgIH0sXG4gICAgYzQ1MDAwODUwZTVjNjM2MWNhYjE0MjcwMWM4ZDAxNDhiZmNjNGJhZDoge1xuICAgICAgICBuYW1lOiBcIkJ1dHRvbiAvIFNlY29uZGFyeSAvIFByZXNzZWRcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjZmMWI4MmZmOGE1ZDQ1MTA1N2RjMjQ4MzMxOTlkY2Y5MjdiYjlmZTdcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJCdXR0b24gLyBTZWNvbmRhcnkgLyBQcmVzc2VkXCJcbiAgICB9LFxuICAgIGVjOTQzZjMxYjcxYjE3Njc5ODlhZmVmYzAxYjg2ZTQ5MDcyM2I5MWQ6IHtcbiAgICAgICAgbmFtZTogXCJCdXR0b24gLyBTZWNvbmRhcnkgLyBEaXNhYmxlZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiYWY5ZDllMzRkYTFjODY2N2Y2MDA0N2VkYjFlYmI1OWFiYWVhOGNkMFwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkJ1dHRvbiAvIFNlY29uZGFyeSAvIERpc2FibGVkXCJcbiAgICB9LFxuICAgIGI0Yjk3NzEzOWRiYTgwZWJhODM5MmJlM2VmZmE4ZWFhYWZmMzJjMWY6IHtcbiAgICAgICAgbmFtZTogXCJCdXR0b24gLyBUZXJ0aWFyeSAvIEVuYWJsZWRcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjYyY2NiMmRiZjI1YWQwZTJmODcxMGM0M2U4NzQwNjczOTA4ZTAzYzZcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJCdXR0b24gLyBUZXJ0aWFyeSAvIEFjdGl2ZVwiXG4gICAgfSxcbiAgICBcIjNlYmE2NTBiZTNjMDQ5NTQ2ZmRiZjhkYmZmMjVhOTg0NDI3NjliZDVcIjoge1xuICAgICAgICBuYW1lOiBcIkJ1dHRvbiAvIFRlcnRpYXJ5IC8gSG92ZXJlZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiYWE2MTc1YzA0YzY3NGJjMDUzOWY4YzY2OTAzYjUyMGVmOWIyNThlZlwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkJ1dHRvbiAvIFRlcnRpYXJ5IC8gSG92ZXJlZFwiXG4gICAgfSxcbiAgICBcIjFkZDI1MzU1NDI2ZTA2YTJmZDMzNWQ4OWIyZTI3ZGU3NzhmODUzYTlcIjoge1xuICAgICAgICBuYW1lOiBcIkJ1dHRvbiAvIFRlcnRpYXJ5IC8gUHJlc3NlZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiOWRlYWM2MDc3NTM1ZjY2NTVhYTc3YWY4ODFlOWVlODUyNDI5ZjQ0M1wiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkJ1dHRvbiAvIFRlcnRpYXJ5IC8gUHJlc3NlZFwiXG4gICAgfSxcbiAgICBhZjFlODIzNTA5YjQ1YTZlMjE2ZDJmYTAwM2M3NmJiM2MzMTU3YzRmOiB7XG4gICAgICAgIG5hbWU6IFwiQnV0dG9uIC8gVGVydGlhcnkgLyBEaXNhYmxlZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiMGE0YTUwYTQ3ODZkNmNjMTViMTlkYjQ3NGU3MjUyZTY3NzcyMjEwOVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkJ1dHRvbiAvIFRlcnRpYXJ5IC8gRGlzYWJsZWRcIlxuICAgIH0sXG4gICAgXCI0ZTNhZTU4ZTc1MTZhZmE4ZTkwOWY0ZWZmM2RlZjVkZDc2ZDg3NjU0XCI6IHtcbiAgICAgICAgbmFtZTogXCJCdXR0b24gLyBEYW5nZXIgLyBFbmFibGVkXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI3YzE4ODhkOTMyZDVhYzIyM2VkN2QxYWVlOTQ2YzZkOWNkN2NkYTM4XCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiQnV0dG9uIC8gRGFuZ2VyIC8gQWN0aXZlXCJcbiAgICB9LFxuICAgIGVmMzRmN2VkMWNjYzgzNzM5OTViNGU4OWZmZThmZGRjYjc2MjY1Mzk6IHtcbiAgICAgICAgbmFtZTogXCJCdXR0b24gLyBEYW5nZXIgLyBIb3ZlcmVkXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJjZmY5MjVkMDlkZTkyOWIwMmYxZmU4ZjUxZDMxNzM4MzI2YTZmNzMwXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiQnV0dG9uIC8gRGFuZ2VyIC8gSG92ZXJlZFwiXG4gICAgfSxcbiAgICBkNjBhZjJiYTJjZjliOWE4ZWE3OTgzYTNiZmZjNWRkOGJkZTc3YzFiOiB7XG4gICAgICAgIG5hbWU6IFwiQnV0dG9uIC8gRGFuZ2VyIC8gUHJlc3NlZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiY2YwMDAwZjI4MTBlNTEwOGY4OGQyMDk3NjA5NzdiY2JmZDA2ZTY4NlwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkJ1dHRvbiAvIERhbmdlciAvIFByZXNzZWRcIlxuICAgIH0sXG4gICAgXCI1ODhlN2QwYWE1MDJmNDcwYmUxYTcyNTc4Y2NjNDdhOTBkZmNiYjM3XCI6IHtcbiAgICAgICAgbmFtZTogXCJCdXR0b24gLyBEYW5nZXIgLyBEaXNhYmxlZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiYjUwZmExYWEwOWVkODUzMGRmNDM5Nzk2M2RiOWM2YzhlMDI2Y2M2N1wiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkJ1dHRvbiAvIERhbmdlciAvIERpc2FibGVkXCJcbiAgICB9LFxuICAgIFwiOGY5ZDFhOTdmYTliNWU5YTQxZWEyZmRmZDVhOGIyYzVkNTk5ZGM1MlwiOiB7XG4gICAgICAgIG5hbWU6IFwiQnV0dG9uIC8gVHJhbnNwYXJlbnQgLyBFbmFibGVkXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCI1MTVkODk3MDA2ZjNiZDUwYzY4MTI2MDNiNmEwYWM5YjRjMWFhNDI3XCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiQnV0dG9uIC8gVHJhbnNwYXJlbnQgLyBBY3RpdmVcIlxuICAgIH0sXG4gICAgXCI1MjQ5YzM4MTI1NzUxMWZiOGM4N2Q1NWY0NzYwYmE5OTQ2YzAxZjFkXCI6IHtcbiAgICAgICAgbmFtZTogXCJCdXR0b24gLyBUcmFuc3BhcmVudCAvIEhvdmVyZWRcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcImRhZDU0ODNiMjFmYWRlN2M2NDljNTY0OTQ2OWRkZWUyZWI3ZWVmMGNcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJCdXR0b24gLyBUcmFuc3BhcmVudCAvIEhvdmVyZWRcIlxuICAgIH0sXG4gICAgXCI5NzU1MGMyOTAzZDQ3YWQzYjJiOWFhZmNhZTE1YzU5ZjExNDBjZGVjXCI6IHtcbiAgICAgICAgbmFtZTogXCJCdXR0b24gLyBUcmFuc3BhcmVudCAvIFByZXNzZWRcIixcbiAgICAgICAgbWFwc1RvS2V5OiBcIjgwYWFlYTMzNTJmOTM0ZGNjZmQ1MTEyNjc5NmFlOTA1ZTM3YjlkNWZcIixcbiAgICAgICAgbWFwc1RvTmFtZTogXCJCdXR0b24gLyBUcmFuc3BhcmVudCAvIFByZXNzZWRcIlxuICAgIH0sXG4gICAgXCI1MzdjZWYxMGFmMTBiZDc3ZDU2NzE4YmY1MGExNDA5NzYzODc1NWY2XCI6IHtcbiAgICAgICAgbmFtZTogXCJCdXR0b24gLyBUcmFuc3BhcmVudCAvIERpc2FibGVkXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJjMGUzNDhlMjAxNjVkMzkzYWE5MDlhMGJhN2VmZjUxNGQ1ZDVkZjYxXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiQnV0dG9uIC8gVHJhbnNwYXJlbnQgLyBEaXNhYmxlZFwiXG4gICAgfSxcbiAgICBhMWQ1MjIwMGViMmEzZGQ2ZjRmMTI3MDkxMGIzY2RiZThjMzEyMTNjOiB7XG4gICAgICAgIG5hbWU6IFwiQnV0dG9uLUxhcmdlLUljb24gLyBQcmltYXJ5IC8gRW5hYmxlZFwiLFxuICAgICAgICBtYXBzVG9LZXk6IFwiNDA2YTcyZTZkNzhhZGI1ZGI0MzFjYzUxOWJhNGZlOTk5YzVlNzkxOVwiLFxuICAgICAgICBtYXBzVG9OYW1lOiBcIkJ1dHRvbi1MYXJnZS1JY29uIC8gUHJpbWFyeSAvIEVuYWJsZWRcIlxuICAgIH0sXG4gICAgZTQwZDNkZjViY2VjMTgzYWM5ZGQxN2I1MjU0NjZiNTQ2NjJmOTcxZjoge1xuICAgICAgICBuYW1lOiBcIkJ1dHRvbi1MYXJnZS1JY29uIC8gUHJpbWFyeSAvIEhvdmVyXCIsXG4gICAgICAgIG1hcHNUb0tleTogXCJmYzY2ODhhMjRhOTMwYTliZTc0MjMyZThhZmFkOTExYTk1MDYwNmFlXCIsXG4gICAgICAgIG1hcHNUb05hbWU6IFwiQnV0dG9uLUxhcmdlLUljb24gLyBQcmltYXJ5IC8gSG92ZXJcIlxuICAgIH1cbn07XG5leHBvcnQgeyBjZHNUaGVtZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==