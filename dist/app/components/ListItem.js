import * as React from "react";
import classNames from "classnames";
function ListItem(props) {
    const node = props.node;
    const handleClick = id => {
        props.onClick(id);
    };
    return (React.createElement("li", { id: node.id, className: classNames(`list-item`, {
            "list-item--active": props.activeLayer === node.id,
            "list-item--selected": props.activeLayer === node.id
        }), onClick: () => handleClick(node.id) },
        React.createElement("div", { className: "list-flex-row" },
            React.createElement("span", { className: "list-arrow" }),
            React.createElement("span", { className: "list-icon" },
                React.createElement("img", { src: require("../assets/" + node.type.toLowerCase() + ".svg") })),
            React.createElement("span", { className: "list-name type type--pos-small-normal" }, node.name))));
}
export default ListItem;
