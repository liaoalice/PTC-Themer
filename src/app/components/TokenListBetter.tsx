import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";

function TokenListBetter() {
  //@ts-ignore
  const [isActive, setIsActive] = useState(false);

  const handleFilterClick = filter => {
    if (filter === "All") {
      // control filters
      document.getElementById("all-pill").className = "pill active";
      document.getElementById("bg-pill").className = "pill";
      document.getElementById("text-pill").className = "pill";
      document.getElementById("border-pill").className = "pill";
      document.getElementById("icon-pill").className = "pill";
      document.getElementById("overlay-pill").className = "pill";
      document.getElementById("interaction-pill").className = "pill";
      document.getElementById("chart-pill").className = "pill";
      document.getElementById("elevation-pill").className = "pill";
      document.getElementById("button-pill").className = "pill";
      document.getElementById("link-pill").className = "pill";

      // show all
      document.getElementById("background").style.display = "block";
      document.getElementById("text").style.display = "block";
      document.getElementById("border").style.display = "block";
      document.getElementById("icon-token").style.display = "block";
      document.getElementById("overlay-token").style.display = "block";
      document.getElementById("interaction").style.display = "block";
      document.getElementById("chart").style.display = "block";
      document.getElementById("elevation").style.display = "block";
      document.getElementById("button").style.display = "block";
      document.getElementById("link").style.display = "block";
    } else {
      // Toggle the selected filter
      if (filter === "background") {
        // control filters
        document.getElementById("all-pill").className = "pill";
        document.getElementById("bg-pill").className = "pill active";
        document.getElementById("text-pill").className = "pill";
        document.getElementById("border-pill").className = "pill";
        document.getElementById("icon-pill").className = "pill";
        document.getElementById("overlay-pill").className = "pill";
        document.getElementById("interaction-pill").className = "pill";
        document.getElementById("chart-pill").className = "pill";
        document.getElementById("elevation-pill").className = "pill";
        document.getElementById("button-pill").className = "pill";
        document.getElementById("link-pill").className = "pill";

        // filter tokens
        document.getElementById("background").style.display = "block";
        document.getElementById("text").style.display = "none";
        document.getElementById("border").style.display = "none";
        document.getElementById("icon-token").style.display = "none";
        document.getElementById("overlay-token").style.display = "none";
        document.getElementById("interaction").style.display = "none";
        document.getElementById("chart").style.display = "none";
        document.getElementById("elevation").style.display = "none";
        document.getElementById("button").style.display = "none";
        document.getElementById("link").style.display = "none";
      } else if (filter === "text") {
        // control filters
        document.getElementById("all-pill").className = "pill";
        document.getElementById("bg-pill").className = "pill";
        document.getElementById("text-pill").className = "pill active";
        document.getElementById("border-pill").className = "pill";
        document.getElementById("icon-pill").className = "pill";
        document.getElementById("overlay-pill").className = "pill";
        document.getElementById("interaction-pill").className = "pill";
        document.getElementById("chart-pill").className = "pill";
        document.getElementById("elevation-pill").className = "pill";
        document.getElementById("button-pill").className = "pill";
        document.getElementById("link-pill").className = "pill";

        document.getElementById("background").style.display = "none";
        document.getElementById("text").style.display = "block";
        document.getElementById("border").style.display = "none";
        document.getElementById("icon-token").style.display = "none";
        document.getElementById("overlay-token").style.display = "none";
        document.getElementById("interaction").style.display = "none";
        document.getElementById("chart").style.display = "none";
        document.getElementById("elevation").style.display = "none";
        document.getElementById("button").style.display = "none";
        document.getElementById("link").style.display = "none";
      } else if (filter === "border") {
        // control filters
        document.getElementById("all-pill").className = "pill";
        document.getElementById("bg-pill").className = "pill";
        document.getElementById("text-pill").className = "pill";
        document.getElementById("border-pill").className = "pill active";
        document.getElementById("icon-pill").className = "pill";
        document.getElementById("overlay-pill").className = "pill";
        document.getElementById("interaction-pill").className = "pill";
        document.getElementById("chart-pill").className = "pill";
        document.getElementById("elevation-pill").className = "pill";
        document.getElementById("button-pill").className = "pill";
        document.getElementById("link-pill").className = "pill";

        document.getElementById("background").style.display = "none";
        document.getElementById("text").style.display = "none";
        document.getElementById("border").style.display = "block";
        document.getElementById("icon-token").style.display = "none";
        document.getElementById("overlay-token").style.display = "none";
        document.getElementById("interaction").style.display = "none";
        document.getElementById("chart").style.display = "none";
        document.getElementById("elevation").style.display = "none";
        document.getElementById("button").style.display = "none";
        document.getElementById("link").style.display = "none";
      } else if (filter === "icon-token") {
        // control filters
        document.getElementById("all-pill").className = "pill";
        document.getElementById("bg-pill").className = "pill";
        document.getElementById("text-pill").className = "pill";
        document.getElementById("border-pill").className = "pill";
        document.getElementById("icon-pill").className = "pill active";
        document.getElementById("overlay-pill").className = "pill";
        document.getElementById("interaction-pill").className = "pill";
        document.getElementById("chart-pill").className = "pill";
        document.getElementById("elevation-pill").className = "pill";
        document.getElementById("button-pill").className = "pill";
        document.getElementById("link-pill").className = "pill";

        document.getElementById("background").style.display = "none";
        document.getElementById("text").style.display = "none";
        document.getElementById("border").style.display = "none";
        document.getElementById("icon-token").style.display = "block";
        document.getElementById("overlay-token").style.display = "none";
        document.getElementById("interaction").style.display = "none";
        document.getElementById("chart").style.display = "none";
        document.getElementById("elevation").style.display = "none";
        document.getElementById("button").style.display = "none";
        document.getElementById("link").style.display = "none";
      } else if (filter === "overlay-token") {
        // control filters
        document.getElementById("all-pill").className = "pill";
        document.getElementById("bg-pill").className = "pill";
        document.getElementById("text-pill").className = "pill";
        document.getElementById("border-pill").className = "pill";
        document.getElementById("icon-pill").className = "pill";
        document.getElementById("overlay-pill").className = "pill active";
        document.getElementById("interaction-pill").className = "pill";
        document.getElementById("chart-pill").className = "pill";
        document.getElementById("elevation-pill").className = "pill";
        document.getElementById("button-pill").className = "pill";
        document.getElementById("link-pill").className = "pill";

        document.getElementById("background").style.display = "none";
        document.getElementById("text").style.display = "none";
        document.getElementById("border").style.display = "none";
        document.getElementById("icon-token").style.display = "none";
        document.getElementById("overlay-token").style.display = "block";
        document.getElementById("interaction").style.display = "none";
        document.getElementById("chart").style.display = "none";
        document.getElementById("elevation").style.display = "none";
        document.getElementById("button").style.display = "none";
        document.getElementById("link").style.display = "none";
      } else if (filter === "interaction") {
        // control filters
        document.getElementById("all-pill").className = "pill";
        document.getElementById("bg-pill").className = "pill";
        document.getElementById("text-pill").className = "pill";
        document.getElementById("border-pill").className = "pill";
        document.getElementById("icon-pill").className = "pill";
        document.getElementById("overlay-pill").className = "pill";
        document.getElementById("interaction-pill").className = "pill active";
        document.getElementById("chart-pill").className = "pill";
        document.getElementById("elevation-pill").className = "pill";
        document.getElementById("button-pill").className = "pill";
        document.getElementById("link-pill").className = "pill";

        document.getElementById("background").style.display = "none";
        document.getElementById("text").style.display = "none";
        document.getElementById("border").style.display = "none";
        document.getElementById("icon-token").style.display = "none";
        document.getElementById("overlay-token").style.display = "none";
        document.getElementById("interaction").style.display = "block";
        document.getElementById("chart").style.display = "none";
        document.getElementById("elevation").style.display = "none";
        document.getElementById("button").style.display = "none";
        document.getElementById("link").style.display = "none";
      } else if (filter === "chart") {
        // control filters
        document.getElementById("all-pill").className = "pill";
        document.getElementById("bg-pill").className = "pill";
        document.getElementById("text-pill").className = "pill";
        document.getElementById("border-pill").className = "pill";
        document.getElementById("icon-pill").className = "pill";
        document.getElementById("overlay-pill").className = "pill";
        document.getElementById("interaction-pill").className = "pill";
        document.getElementById("chart-pill").className = "pill active";
        document.getElementById("elevation-pill").className = "pill";
        document.getElementById("button-pill").className = "pill";
        document.getElementById("link-pill").className = "pill";

        document.getElementById("background").style.display = "none";
        document.getElementById("text").style.display = "none";
        document.getElementById("border").style.display = "none";
        document.getElementById("icon-token").style.display = "none";
        document.getElementById("overlay-token").style.display = "none";
        document.getElementById("interaction").style.display = "none";
        document.getElementById("chart").style.display = "block";
        document.getElementById("elevation").style.display = "none";
        document.getElementById("button").style.display = "none";
        document.getElementById("link").style.display = "none";
      } else if (filter === "button") {
        // control filters
        document.getElementById("all-pill").className = "pill";
        document.getElementById("bg-pill").className = "pill";
        document.getElementById("text-pill").className = "pill";
        document.getElementById("border-pill").className = "pill";
        document.getElementById("icon-pill").className = "pill";
        document.getElementById("overlay-pill").className = "pill";
        document.getElementById("interaction-pill").className = "pill";
        document.getElementById("chart-pill").className = "pill";
        document.getElementById("elevation-pill").className = "pill";
        document.getElementById("button-pill").className = "pill active";
        document.getElementById("link-pill").className = "pill";

        document.getElementById("background").style.display = "none";
        document.getElementById("text").style.display = "none";
        document.getElementById("border").style.display = "none";
        document.getElementById("icon-token").style.display = "none";
        document.getElementById("overlay-token").style.display = "none";
        document.getElementById("interaction").style.display = "none";
        document.getElementById("chart").style.display = "none";
        document.getElementById("elevation").style.display = "none";
        document.getElementById("button").style.display = "block";
        document.getElementById("link").style.display = "none";
      } else if (filter === "link") {
        // control filters
        document.getElementById("all-pill").className = "pill";
        document.getElementById("bg-pill").className = "pill";
        document.getElementById("text-pill").className = "pill";
        document.getElementById("border-pill").className = "pill";
        document.getElementById("icon-pill").className = "pill";
        document.getElementById("overlay-pill").className = "pill";
        document.getElementById("interaction-pill").className = "pill";
        document.getElementById("chart-pill").className = "pill";
        document.getElementById("elevation-pill").className = "pill";
        document.getElementById("button-pill").className = "pill";
        document.getElementById("link-pill").className = "pill active";

        document.getElementById("background").style.display = "none";
        document.getElementById("text").style.display = "none";
        document.getElementById("border").style.display = "none";
        document.getElementById("icon-token").style.display = "none";
        document.getElementById("overlay-token").style.display = "none";
        document.getElementById("interaction").style.display = "none";
        document.getElementById("chart").style.display = "none";
        document.getElementById("elevation").style.display = "none";
        document.getElementById("button").style.display = "none";
        document.getElementById("link").style.display = "block";
      } else if (filter === "elevation") {
        // control filters
        document.getElementById("all-pill").className = "pill";
        document.getElementById("bg-pill").className = "pill";
        document.getElementById("text-pill").className = "pill";
        document.getElementById("border-pill").className = "pill";
        document.getElementById("icon-pill").className = "pill";
        document.getElementById("overlay-pill").className = "pill";
        document.getElementById("interaction-pill").className = "pill";
        document.getElementById("chart-pill").className = "pill";
        document.getElementById("elevation-pill").className = "pill active";
        document.getElementById("button-pill").className = "pill";
        document.getElementById("link-pill").className = "pill";

        document.getElementById("background").style.display = "none";
        document.getElementById("text").style.display = "none";
        document.getElementById("border").style.display = "none";
        document.getElementById("icon-token").style.display = "none";
        document.getElementById("overlay-token").style.display = "none";
        document.getElementById("interaction").style.display = "none";
        document.getElementById("chart").style.display = "none";
        document.getElementById("elevation").style.display = "block";
        document.getElementById("button").style.display = "none";
        document.getElementById("link").style.display = "none";
      }
    }
  };

  return (
    // filter pills
    <>
      <div className="filter-pills">
        <motion.button
          className={isActive ? "pill" : "pill active"}
          onClick={() => handleFilterClick("All")}
          whileTap={{ scale: 0.9, opacity: 0.8 }}
          id="all-pill"
        >
          All
        </motion.button>
        {<span className="pill-divider"></span>}
        <motion.button
          className={isActive ? "pill active" : "pill"}
          onClick={() => handleFilterClick("background")}
          whileTap={{ scale: 0.9, opacity: 0.8 }}
          id="bg-pill"
        >
          Background
        </motion.button>
        <motion.button
          className={isActive ? "pill active" : "pill"}
          onClick={() => handleFilterClick("text")}
          whileTap={{ scale: 0.9, opacity: 0.8 }}
          id="text-pill"
        >
          Text
        </motion.button>
        <motion.button
          className={isActive ? "pill active" : "pill"}
          onClick={() => handleFilterClick("border")}
          whileTap={{ scale: 0.9, opacity: 0.8 }}
          id="border-pill"
        >
          Border
        </motion.button>
        <motion.button
          className={isActive ? "pill active" : "pill"}
          onClick={() => handleFilterClick("icon-token")}
          whileTap={{ scale: 0.9, opacity: 0.8 }}
          id="icon-pill"
        >
          Icon
        </motion.button>
        <motion.button
          className={isActive ? "pill active" : "pill"}
          onClick={() => handleFilterClick("overlay-token")}
          whileTap={{ scale: 0.9, opacity: 0.8 }}
          id="overlay-pill"
        >
          Overlay
        </motion.button>
        <motion.button
          className={isActive ? "pill active" : "pill"}
          onClick={() => handleFilterClick("interaction")}
          whileTap={{ scale: 0.9, opacity: 0.8 }}
          id="interaction-pill"
        >
          Interaction
        </motion.button>
        <motion.button
          className={isActive ? "pill active" : "pill"}
          onClick={() => handleFilterClick("chart")}
          whileTap={{ scale: 0.9, opacity: 0.8 }}
          id="chart-pill"
        >
          Chart
        </motion.button>
        <motion.button
          className={isActive ? "pill active" : "pill"}
          onClick={() => handleFilterClick("elevation")}
          whileTap={{ scale: 0.9, opacity: 0.8 }}
          id="elevation-pill"
        >
          Elevation
        </motion.button>
        <motion.button
          className={isActive ? "pill active" : "pill"}
          onClick={() => handleFilterClick("button")}
          whileTap={{ scale: 0.9, opacity: 0.8 }}
          id="button-pill"
        >
          Button
        </motion.button>
        <motion.button
          className={isActive ? "pill active" : "pill"}
          onClick={() => handleFilterClick("link")}
          whileTap={{ scale: 0.9, opacity: 0.8 }}
          id="link-pill"
        >
          Link
        </motion.button>
      </div>

      {/* tokens */}
      <ul className="list" id="tokens">
        {/* Colors */}
        {/* Swatch Structure Reference */}
        <span id="overlay-token">
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch overlay"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-overlay
            </span>
            <motion.button
              className="info-button"
              whileTap={{ scale: 0.92, opacity: 0.8 }}
            ></motion.button>
          </span>
        </span>
      </ul>
    </>
  );
}

export default TokenListBetter;
