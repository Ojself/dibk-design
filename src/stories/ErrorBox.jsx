// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Functions
import { getThemePaletteBackgroundColor } from "../functions/theme";

// Stylesheets
import style from "./ErrorBox.module.scss";

const ErrorBox = (props) => {
    const getThemeErrorBoxStyle = () => {
        return {
            borderColor: getThemePaletteBackgroundColor(props.theme, "warning")
        };
    };

    return (
        <div className={style.errorBox} style={getThemeErrorBoxStyle()}>
            {props.children}
        </div>
    );
};

ErrorBox.propTypes = {
    theme: PropTypes.object
};

ErrorBox.defaultProps = {
    children: ""
};

export default ErrorBox;
