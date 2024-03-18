// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./RadioButtonIcon.module.scss";

/**
 * Primary UI component for user interaction
 */
const RadioButtonIcon = (props) => {
    let inlineStyle = {
        height: props.size,
        width: props.size
    };
    const radioButtonIconProps = {
        className: `${style.radioButtonIcon} ${props.checked ? style.checked : ""} ${
            props.disabled ? style.disabled : ""
        } ${props.hasErrors ? style.hasErrors : ""}`,
        style: inlineStyle
    };
    return <span {...radioButtonIconProps}></span>;
};

RadioButtonIcon.propTypes = {
    /**
     * How large should the radio button icon be?
     */
    size: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    hasErrors: PropTypes.bool
};

RadioButtonIcon.defaultProps = {
    size: "10px",
    checked: false,
    disabled: false,
    hasErrors: false
};

export default RadioButtonIcon;
