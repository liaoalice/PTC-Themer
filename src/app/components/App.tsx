import * as React from "react";
import "../styles/figma-plugin-ds.css";
import "../styles/ui.css";
import "../styles/nav.css";
import "../styles/controls.css";
import "../styles/empty-state.css";

// @ts-ignore
import ListItem from "./ListItem";

import TokenList from "./TokenList";

declare function require(path: string): any;

const App = ({}) => {
  const [selectedLayersLength, setSelectLayersLength] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState("themes");
  const [skippedLayers, setSkippedLayers] = React.useState([]);
  // @ts-ignore
  const [activeLayer, setActiveLayer] = React.useState(0);

  const onRunApp = React.useCallback(() => {
    const message = "";
    parent.postMessage({ pluginMessage: { type: "run-app", message } }, "*");
  }, []);

  // Legacy to CDS Theme
  const themeToCDS = React.useCallback(() => {
    const message = "legacy-to-cds-theme";
    parent.postMessage(
      { pluginMessage: { type: "theme-update", message } },
      "*"
    );
  }, []);

  function setThemesActive() {
    setActiveTab("themes");
  }

  function setLayersActive() {
    setActiveTab("layers");
  }

  // function setCDSTokensActive() {
  //   setActiveTab("cds");
  // }

  // When the user selects a layer in the skipped layer list.
  // @ts-ignore
  const handleLayerSelect = id => {
    setActiveLayer(id);
    parent.postMessage(
      { pluginMessage: { type: "select-layer", id: id } },
      "*"
    );
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

  // const listItems = skippedLayers.map((node, index) => (
  //   <ListItem
  //     activeLayer={activeLayer}
  //     onClick={handleLayerSelect}
  //     key={index}
  //     node={node}
  //   />
  // ));

  return (
    <div className="wrapper">
      {selectedLayersLength === 0 ? (
        <div className="empty-state">
          <div className="empty-state__image">
            <img
              className="layer-icon"
              src={require("../assets/layers.svg")}
              alt="Empty Layers"
            />
          </div>
          <h3 className="type type--pos-large-medium">
            Select a layer to get started.
          </h3>
        </div>
      ) : (
        <React.Fragment>
          <nav className="nav">
            <div
              onClick={setThemesActive}
              className={`section-title ${
                activeTab === "themes" ? "active" : "disabled"
              }`}
            >
              Migrate
            </div>
            <div
              onClick={setLayersActive}
              className={`section-title ${
                activeTab === "layers" ? "active" : "disabled"
              }`}
            >
              Tokens{" "}
              {skippedLayers.length !== 0 ? (
                <span className="layer-count"> ({skippedLayers.length})</span>
              ) : null}
            </div>
          </nav>
          {activeTab === "themes" ? (
            <div className="active-state">
              {/* <h3 className="active-state-title type type--pos-large-medium">
                {selectedLayersLength} layers selected for theming
              </h3> */}
              {/* Get rid of buttons, change to list for selection */}
              {/* <ul className="list">
                <li className="list-flex-row">
                  <span className="list-name type type--pos-small-normal">
                    2.0 {"("}New{")"} Theme
                  </span>
                </li>
                <li className="list-flex-row">
                  <span className="list-name type type--pos-small-normal">
                    1.0 {"("}Legacy{")"} Theme
                  </span>
                </li>
              </ul> */}
              <h3 className="type type--pos-large-normal">
                Select a Figma Component (or multiple), then press the button
                below.
              </h3>
              <br></br>
              <button
                className="button button--primary button-margin-bottom"
                onClick={themeToCDS}
              >
                Migrate to 2.0
              </button>
              {/* Make onClick change depending on selection (above buttons will be menu items) */}
              {/* <button
                className="button button--primary button-margin-bottom"
                onClick={themeToCDS}
              >
                Apply to selection
              </button> */}
            </div>
          ) : (
            <div className="layer-list-wrapper">
              <TokenList />
              {/* <React.Fragment>
                <nav className="nav-tokens">
                  <div
                    onClick={setCDSTokensActive}
                    className={`section-title ${activeTab === "layers" ? "active" : "disabled"
                      }`}
                  >
                    2.0 Theme
                  </div>
                </nav>
              </React.Fragment> */}
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
