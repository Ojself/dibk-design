// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Helpers
import { cloneThroughFragments } from "functions/helpers";

// Stylesheets
import style from "./List.module.scss";

const List = (props) => {
    const renderChildElements = (childElements) => {
        const childElementsthroughFragments = cloneThroughFragments(childElements);
        return childElementsthroughFragments.map((childElement, index) => {
            const childElementCopy = React.cloneElement(childElement, {
                compact: props.compact,
                key: `listItem-${index}`
            });
            return childElementCopy;
        });
    };
    const renderList = (children) => {
        let listType = props.ordered ? "ol" : "ul";
        const defaultListStyle = props.ordered ? "decimal" : "disc";
        const scssValueProperty = "--listStyle";
        let listElement = React.createElement(
            listType,
            {
                className: `${style.list} ${!!props.compact ? style.compact : ""}`,
                style: { [scssValueProperty]: props.listStyle || defaultListStyle }
            },
            renderChildElements(React.Children.toArray(children))
        );
        return listElement;
    };
    return renderList(props.children);
};

List.propTypes = {
    listStyle: PropTypes.string,
    compact: PropTypes.bool,
    ordered: PropTypes.bool
};

List.defaultProps = {
    ordered: false,
    compact: false
};

export default List;
