import * as React from "react";

const TokenList = () => (
  <ul className="list">
    {/* Colors */}
    {/* Background Colors */}
    <span className="list-flex-row">
      <span className="token-swatch white"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-background-primary
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-1"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-background-secondary
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-12"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-background-inverse
      </span>
    </span>
    {/* Text Colors */}
    <span className="list-flex-row">
      <span className="token-swatch gray-12"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-text
      </span>
    </span>
    <span className="list-flex-row">
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
    <span className="list-flex-row">
      <span className="token-swatch white"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-text-inverse
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch green-5"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-text-button-primary-disabled
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch red-5"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-text-button-danger-disabled
      </span>
    </span>
    {/* Border Colors */}
    <span className="list-flex-row">
      <span className="token-swatch gray-3"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-border
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-4"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-border-disabled
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch blue-7"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-border-focused
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch white"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-border-focused-inset
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch red-7"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-border-error
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch green-7"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-border-success
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-10"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-border-button-tertiary
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-4"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-border-button-tertiary-disabled
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-8"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-border-tile-selected
      </span>
    </span>
    {/* Icon Colors */}
    <span className="list-flex-row">
      <span className="token-swatch gray-10"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-icon-active
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-4"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-icon-disabled
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch white"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-icon-inverse
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch green-5"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-icon-button-primary-disabled
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch red-5"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-icon-button-danger-disabled
      </span>
    </span>
    {/* Overlay */}
    <span className="list-flex-row">
      <span className="token-swatch overlay"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-overlay
      </span>
    </span>
    {/* Interaction */}
    <span className="list-flex-row">
      <span className="token-swatch gray-1"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-interaction-hovered
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-2"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-interaction-selected
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-3"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-interaction-selected-hover
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-12"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-interaction-dark-hovered
      </span>
    </span>
    {/* Chart Colors */}
    <span className="list-flex-row">
      <span className="token-swatch chart-1"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-1
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-2"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-2
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-3"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-3
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-4"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-4
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-5"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-5
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-6"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-6
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-7"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-7
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-8"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-8
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-9"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-9
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-10"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-10
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-11"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-11
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-12"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-12
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-13"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-13
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-14"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-14
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-15"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-15
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-16"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-16
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-17"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-17
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-18"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-18
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-19"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-19
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-20"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-20
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-21"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-21
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-22"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-22
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-23"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-23
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch chart-24"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-chart-24
      </span>
    </span>
    {/* Button */}
    <span className="list-flex-row">
      <span className="token-swatch green-7"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-primary
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch green-8"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-primary-hovered
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch green-9"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-primary-pressed
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch green-10"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-primary-selected
      </span>
    </span>
    <span className="list-flex-row">
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
    <span className="list-flex-row">
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
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-9"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-secondary-pressed
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-10"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-secondary-selected
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-11"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-secondary-selected-hover
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-2"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-secondary-disabled
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch white"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-tertiary
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-2"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-tertiary-hovered
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-3"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-tertiary-pressed
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-4"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-tertiary-selected
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-5"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-tertiary-selected-hover
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch red-7"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-danger
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch red-8"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-danger-hovered
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch red-9"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-danger-pressed
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch red-10"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-danger-selected
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch red-11"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-danger-selected-hover
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch red-2"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-danger-disabled
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-2"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-transparent-hovered
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-3"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-transparent-pressed
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-4"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-transparent-selected
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-5"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-button-transparent-selected-hover
      </span>
    </span>
    {/* Link */}
    <span className="list-flex-row">
      <span className="token-swatch blue-7"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-link-primary
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch blue-8"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-link-primary-hovered
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch blue-9"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-link-primary-pressed
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch blue-10"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-link-primary-visited
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-4"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-link-primary-disabled
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-7"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-link-secondary
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-8"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-link-secondary-hovered
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-9"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-link-secondary-pressed
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-10"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-link-secondary-visited
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch gray-4"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-color-link-secondary-disabled
      </span>
    </span>

    {/* Elevation */}
    <span className="list-flex-row">
      <span className="token-swatch elevation-raised"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-elevation-raised
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch elevation-dialog"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-elevation-dialog
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch elevation-tile"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-elevation-tile
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch elevation-slider"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-elevation-slider
      </span>
    </span>
    <span className="list-flex-row">
      <span className="token-swatch elevation-popup-tip"></span>
      <span className="list-name type type--pos-xlarge-normal">
        --cds-elevation-popup-tip
      </span>
    </span>
  </ul>
);

export default TokenList;
