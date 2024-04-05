// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./ToggleNavigationButton.module.scss";

const ToggleNavigationButton = ({ id, htmlTag, showText, hideText, buttonProps, isOpen }) => {
    const elementClass = style.toggleNavigationButton;
    let element = React.createElement(
        htmlTag,
        {
            className: elementClass,
            id: id || null
        },
        isOpen ? hideText : showText
    );
    return element;
};

ToggleNavigationButton.propTypes = {
    id: PropTypes.string,
    htmlTag: PropTypes.string,
    showText: PropTypes.string,
    hideText: PropTypes.string,
    buttonProps: PropTypes.object,
    isOpen: PropTypes.bool
};

ToggleNavigationButton.defaultProps = {
    htmlTag: "button",
    isOpen: false
};

export default ToggleNavigationButton;
