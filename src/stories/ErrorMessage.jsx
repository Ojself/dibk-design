// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Functions
import { getThemePaletteBackgroundColor } from "../functions/theme";

// Stylesheets
import style from "./ErrorMessage.module.scss";

const ErrorMessage = (props) => {
    const getThemeErrorMessageStyle = (theme) => {
        return {
            color: getThemePaletteBackgroundColor(theme, "warning")
        };
    };
    return (
        <span className={style.errorMessage} style={getThemeErrorMessageStyle(props.theme)}>
            {props.content ? props.content : ""}
        </span>
    );
};

ErrorMessage.propTypes = {
    /** Text content inside error message */
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    ]),
    theme: PropTypes.object
};

ErrorMessage.defaultProps = {
    content: ""
};

export default ErrorMessage;
