// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Functions
import {
    getThemePaletteBackgroundColor,
    getThemePaletteTextColor,
    getThemePaletteBorderColor
} from "../functions/theme";
import { classNameArrayToClassNameString } from "../functions/helpers";

// Stylesheets
import style from "./Button.module.scss";

/**
 * Primary UI component for user interaction
 */
const Button = (props) => {
    const getArrowClass = (arrow) => {
        switch (arrow) {
            case "left":
                return style.hasArrowLeft;
            case "right":
                return style.hasArrowRight;
            default:
                return "";
        }
    };

    const getThemeStyle = (theme, color) => {
        return {
            backgroundColor: getThemePaletteBackgroundColor(theme, color),
            color: getThemePaletteTextColor(theme, color),
            borderColor: getThemePaletteBorderColor(theme, color),
            borderWidth: getThemePaletteBorderColor(theme, color) ? "1px" : "0"
        };
    };

    let buttonProps = { ...props };
    delete buttonProps.noHover;
    delete buttonProps.hasErrors;
    delete buttonProps.rounded;
    const themeStyle = props.theme ? getThemeStyle(props.theme, props.color) : null;
    const className = classNameArrayToClassNameString([
        style.button,
        style[props.color],
        style[props.size],
        getArrowClass(props.arrow),
        props.theme && style.hasTheme,
        props.noHover && style.noHover,
        props.rounded && style.rounded,
        props.hasErrors && style.hasErrors
    ]);
    //const className = `${style.button} ${style[props.color]} ${style[props.size]} ${getArrowClass(props.arrow)} ${
    //   props.theme ? style.hasTheme : ""
    //} ${props.noHover ? style.noHover : ""} ${props.rounded ? style.rounded : ""}`;
    return props.href?.length ? (
        <a {...buttonProps} className={className} style={themeStyle}>
            {props.content || props.children}
        </a>
    ) : (
        <button {...buttonProps} className={className} style={themeStyle}>
            {props.content || props.children}
        </button>
    );
};

Button.propTypes = {
    /**
     * Text content inside button
     */
    content: PropTypes.string,
    /**
     * What color to use
     */
    color: PropTypes.oneOf(["default", "primary"]),
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(["small", "regular"]),
    /**
     * Which direction should the arrow point
     */
    arrow: PropTypes.oneOf(["none", "left", "right"]),
    theme: PropTypes.object,
    disabled: PropTypes.bool,
    hasErrors: PropTypes.bool,
    noHover: PropTypes.bool,
    rounded: PropTypes.bool,
    href: PropTypes.string,

    /**
     * Optional click handler
     */
    onClick: PropTypes.func
};

Button.defaultProps = {
    color: "default",
    size: "regular",
    disabled: false,
    hasErrors: false,
    noHover: false,
    arrow: "none"
};

export default Button;
