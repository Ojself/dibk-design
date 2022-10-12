// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Functions
import { getThemePaletteBackgroundColor } from "../functions/theme";

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
    if (props.theme && props.checked) {
        inlineStyle = {
            ...inlineStyle,
            [!props.hasErrors && "background"]: getThemePaletteBackgroundColor(props.theme, "primary"),
            [!props.hasErrors && "boxShadow"]: `0 0 0 1px ${getThemePaletteBackgroundColor(props.theme, "primary")}`
        };
    }
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
    theme: PropTypes.object,
    hasErrors: PropTypes.bool
};

RadioButtonIcon.defaultProps = {
    size: "10px",
    checked: false,
    disabled: false,
    hasErrors: false
};

export default RadioButtonIcon;
