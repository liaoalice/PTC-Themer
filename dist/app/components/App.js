import * as React from "react";
import "../styles/figma-plugin-ds.css";
import "../styles/ui.css";
import "../styles/nav.css";
import "../styles/controls.css";
import "../styles/empty-state.css";
import ListItem from "./ListItem";
const App = ({}) => {
    const [selectedLayersLength, setSelectLayersLength] = React.useState(0);
    const [activeTab, setActiveTab] = React.useState("themes");
    const [skippedLayers, setSkippedLayers] = React.useState([]);
    const [activeLayer, setActiveLayer] = React.useState(0);
    const onRunApp = React.useCallback(() => {
        const message = "";
        parent.postMessage({ pluginMessage: { type: "run-app", message } }, "*");
    }, []);
    const themeToCDS = React.useCallback(() => {
        const message = "legacy-to-cds-theme";
        parent.postMessage({ pluginMessage: { type: "theme-update", message } }, "*");
    }, []);
    const themeToDark = React.useCallback(() => {
        const message = "light-to-dark-theme";
        parent.postMessage({ pluginMessage: { type: "theme-update", message } }, "*");
    }, []);
    function setThemesActive() {
        setActiveTab("themes");
    }
    function setLayersActive() {
        setActiveTab("layers");
    }
    function setCDSTokensActive() {
        setActiveTab("cds");
    }
    const handleLayerSelect = id => {
        setActiveLayer(id);
        parent.postMessage({ pluginMessage: { type: "select-layer", id: id } }, "*");
    };
    React.useEffect(() => {
        onRunApp();
        window.onmessage = event => {
            const { type, message } = event.data.pluginMessage;
            if (type === "selection-updated") {
                let nodeArray = JSON.parse(message);
                setSelectLayersLength(nodeArray.length);
            }
            if (type === "layers-skipped") {
                let unthemedLayers = JSON.parse(message);
                setSkippedLayers(skippedLayers => [
                    ...skippedLayers,
                    ...unthemedLayers
                ]);
            }
        };
    }, []);
    const listItems = skippedLayers.map((node, index) => (React.createElement(ListItem, { activeLayer: activeLayer, onClick: handleLayerSelect, key: index, node: node })));
    return (React.createElement("div", { className: "wrapper" }, selectedLayersLength === 0 ? (React.createElement("div", { className: "empty-state" },
        React.createElement("div", { className: "empty-state__image" },
            React.createElement("img", { className: "layer-icon", src: require("../assets/layers.svg"), alt: "Empty Layers" })),
        React.createElement("h3", { className: "type type--pos-large-medium" }, "Select a layer to get started."))) : (React.createElement(React.Fragment, null,
        React.createElement("nav", { className: "nav" },
            React.createElement("div", { onClick: setThemesActive, className: `section-title ${activeTab === "themes" ? "active" : "disabled"}` }, "Themes"),
            React.createElement("div", { onClick: setLayersActive, className: `section-title ${activeTab === "layers" ? "active" : "disabled"}` },
                "Skipped Layers",
                " ",
                skippedLayers.length !== 0 ? (React.createElement("span", { className: "layer-count" },
                    " (",
                    skippedLayers.length,
                    ")")) : null)),
            React.createElement("div", { onClick: setCDSTokensActive, className: `section-title ${activeTab === "CDS" ? "active" : "disabled"}`}, "New"),
        activeTab === "themes" ? (React.createElement("div", { className: "active-state" },
            React.createElement("button", { className: "button button--primary button-margin-bottom", onClick: themeToCDS },
                "2.0 ",
                " Theme"),
            React.createElement("button", { className: "button button--secondary", onClick: themeToDark },
                "1.0 ",
                "(",
                "Old",
                ")",
                " Theme"),
            React.createElement("button", { className: "button button--primary button-margin-bottom", onClick: themeToCDS }, "Apply to selection"))) : (React.createElement("div", { className: "layer-list-wrapper" }, skippedLayers.length === 0 ? (React.createElement("div", { className: "active-state" },
            React.createElement("h3", { className: "active-state-title layer-empty-title type type--pos-large-medium" }, "No layers have been skipped yet."))) : (React.createElement("ul", { className: "list" }, listItems))))))));
};
export default App;
