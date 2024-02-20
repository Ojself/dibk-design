// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Functions
import { getThemePaletteBackgroundColor } from "../functions/theme";
import { classNameArrayToClassNameString } from "functions/helpers";

// Stylesheets
import style from "./ErrorBox.module.scss";

// Assets
import infoSign from "../assets/svg/info-sign.svg?url";

const ErrorBox = (props) => {
    const getThemeErrorBoxStyle = () => {
        return {
            borderColor:
                props.type === "error"
                    ? getThemePaletteBackgroundColor(props.theme, "error")
                    : getThemePaletteBackgroundColor(props.theme, "warning")
        };
    };

    return (
        <div
            className={classNameArrayToClassNameString([style.errorBox, style[props.type]])}
            style={getThemeErrorBoxStyle()}
        >
            <img src={infoSign} alt="" className={style.infoSign} />
            {props.children}
        </div>
    );
};

ErrorBox.propTypes = {
    theme: PropTypes.object,
    type: PropTypes.oneOf(["warning", "error"])
};

ErrorBox.defaultProps = {
    children: "",
    type: "warning"
};

export default ErrorBox;
