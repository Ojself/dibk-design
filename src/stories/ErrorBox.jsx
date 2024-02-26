// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Functions
import { getThemePaletteBackgroundColor } from "../functions/theme";
import { classNameArrayToClassNameString } from "../functions/helpers";

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
            className={classNameArrayToClassNameString([
                style.errorBoxContainer,
                style[props.type],
                props.fullScreen && style.fullScreen
            ])}
            style={getThemeErrorBoxStyle()}
        >
            <div className={classNameArrayToClassNameString([style.errorBox, props.fullScreen && style.fullScreen])}>
                <img src={infoSign} alt="" className={style.infoSign} />
                {props.children}
            </div>
        </div>
    );
};

ErrorBox.propTypes = {
    theme: PropTypes.object,
    type: PropTypes.oneOf(["warning", "error"]),
    fullScreen: PropTypes.bool
};

ErrorBox.defaultProps = {
    children: "",
    type: "warning",
    fullScreen: false
};

export default ErrorBox;
