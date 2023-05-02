import * as React from "react";
import "../styles/figma-plugin-ds.css";
import "../styles/ui.css";
import "../styles/nav.css";
import "../styles/controls.css";
import "../styles/empty-state.css";

// @ts-ignore
import ListItem from "./ListItem";

import TokenList from "./TokenList";

const App = ({}) => {
  const [activeTab, setActiveTab] = React.useState("themes");
  // @ts-ignore
  const [activeLayer, setActiveLayer] = React.useState(0);

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

  return (
    <div className="wrapper">
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
            Tokens
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
              Select a Figma Component—or multiple—then press the button below.
            </h3>
            <br></br>
            <button
              className="button button--primary button-margin-bottom"
              onClick={themeToCDS}
            >
              Migrate items
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
    </div>
  );
};

export default App;
