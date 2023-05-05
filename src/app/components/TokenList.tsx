import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";

function TokenList() {
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
        {/* Background Colors */}
        <span id="background">
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch white"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-background-primary
            </span>
            <motion.button
              className="info-button"
              whileTap={{ scale: 0.92, opacity: 0.8 }}
            >
              <img src={require("../assets/info.svg")} alt="info" />
            </motion.button>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-1"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-background-secondary
            </span>
            <motion.button
              className="info-button"
              whileTap={{ scale: 0.92, opacity: 0.8 }}
            >
              <img src={require("../assets/info.svg")} alt="info" />
            </motion.button>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-12"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-background-inverse
            </span>
            <motion.button
              className="info-button"
              whileTap={{ scale: 0.92, opacity: 0.8 }}
            >
              <img src={require("../assets/info.svg")} alt="info" />
            </motion.button>
          </span>
        </span>

        {/* Text Colors */}
        <span id="text">
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-12"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-text
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch red-7"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-text-error
            </span>
          </span>
          <span className="list-flex-row">
            <span className="token-swatch green-7"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-text-success
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch white"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-text-inverse
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch green-5"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-text-button-primary-disabled
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch red-5"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-text-button-danger-disabled
            </span>
          </span>
        </span>
        {/* Border Colors */}
        <span id="border">
          {" "}
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-3"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-border
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-4"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-border-disabled
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch blue-7"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-border-focused
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch white"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-border-focused-inset
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch red-7"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-border-error
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch green-7"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-border-success
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-10"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-border-button-tertiary
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-4"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-border-button-tertiary-disabled
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-8"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-border-tile-selected
            </span>
          </span>
        </span>

        {/* Icon Colors */}
        <span id="icon-token">
          {" "}
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-10"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-icon-active
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-4"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-icon-disabled
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch white"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-icon-inverse
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch green-5"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-icon-button-primary-disabled
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch red-5"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-icon-button-danger-disabled
            </span>
          </span>
        </span>
        {/* Overlay */}
        <span id="overlay-token">
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch overlay"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-overlay
            </span>
          </span>
        </span>

        {/* Interaction */}
        <span id="interaction">
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-1"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-interaction-hovered
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-2"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-interaction-selected
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-3"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-interaction-selected-hover
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-12"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-interaction-dark-hovered
            </span>
          </span>
        </span>

        {/* Chart Colors */}
        <span id="chart">
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-1"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-1
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-2"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-2
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-3"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-3
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-4"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-4
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-5"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-5
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-6"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-6
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-7"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-7
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-8"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-8
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-9"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-9
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-10"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-10
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-11"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-11
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-12"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-12
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-13"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-13
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-14"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-14
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            {" "}
            <span className="token-swatch chart-15"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-15
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            {" "}
            <span className="token-swatch chart-16"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-16
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            {" "}
            <span className="token-swatch chart-17"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-17
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            {" "}
            <span className="token-swatch chart-18"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-18
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            {" "}
            <span className="token-swatch chart-19"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-19
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-20"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-20
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-21"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-21
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-22"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-22
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-23"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-23
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch chart-24"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-chart-24
            </span>
          </span>
        </span>

        {/* Button */}
        <span id="button">
          {" "}
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch green-7"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-primary
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch green-8"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-primary-hovered
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch green-9"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-primary-pressed
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch green-10"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-primary-selected
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch green-11"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-primary-selected-hover
            </span>
          </span>
          <span className="list-flex-row">
            <span className="token-swatch green-2"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-primary-disabled
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-7"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-secondary
            </span>
          </span>
          <span className="list-flex-row">
            <span className="token-swatch gray-8"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-secondary-hovered
            </span>
          </span>{" "}
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-9"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-secondary-pressed
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-10"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-secondary-selected
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-11"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-secondary-selected-hover
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-2"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-secondary-disabled
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch white"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-tertiary
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-2"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-tertiary-hovered
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-3"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-tertiary-pressed
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-4"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-tertiary-selected
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-5"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-tertiary-selected-hover
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch red-7"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-danger
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch red-8"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-danger-hovered
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch red-9"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-danger-pressed
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch red-10"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-danger-selected
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch red-11"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-danger-selected-hover
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch red-2"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-danger-disabled
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-2"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-transparent-hovered
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-3"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-transparent-pressed
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-4"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-transparent-selected
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-5"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-button-transparent-selected-hover
            </span>
          </span>
        </span>

        {/* Link */}
        <span id="link">
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch blue-7"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-link-primary
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch blue-8"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-link-primary-hovered
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch blue-9"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-link-primary-pressed
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch blue-10"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-link-primary-visited
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-4"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-link-primary-disabled
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-7"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-link-secondary
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-8"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-link-secondary-hovered
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-9"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-link-secondary-pressed
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-10"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-link-secondary-visited
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch gray-4"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-color-link-secondary-disabled
            </span>
          </span>
        </span>

        {/* Elevation */}
        <span id="elevation">
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch elevation-raised"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-elevation-raised
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch elevation-dialog"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-elevation-dialog
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch elevation-tile"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-elevation-tile
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch elevation-slider"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-elevation-slider
            </span>
          </span>
          <span className="list-flex-row" tabIndex={0}>
            <span className="token-swatch elevation-popup-tip"></span>
            <span className="list-name type type--pos-xlarge-normal">
              --cds-elevation-popup-tip
            </span>
          </span>
        </span>
      </ul>
    </>
  );
}

export default TokenList;
