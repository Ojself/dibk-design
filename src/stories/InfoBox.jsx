// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Functions
import { getThemePaletteBackgroundColor } from "../functions/theme";

// Stylesheets
import style from "./InfoBox.module.scss";

// Assets
import infoSign from "../assets/svg/info-sign.svg?url";

const InfoBox = (props) => {
    const getThemeInfoBoxStyle = () => {
        return {
            borderColor: getThemePaletteBackgroundColor(props.theme, "secondary-light")
        };
    };

    return (
        <div className={style.infoBox} style={getThemeInfoBoxStyle()}>
            <img src={infoSign} alt="" className={style.infoSign} />
            {props.children}
        </div>
    );
};

InfoBox.propTypes = {
    theme: PropTypes.object
};

InfoBox.defaultProps = {
    children: ""
};

export default InfoBox;
