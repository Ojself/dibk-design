// Dependencies
import React from "react";

// Stylesheets
import style from "./InfoBox.module.scss";

// Assets
import infoSign from "../assets/svg/info-sign.svg?url";

const InfoBox = (props) => {
    return (
        <div className={style.infoBox}>
            <img src={infoSign} alt="" className={style.infoSign} />
            {props.children}
        </div>
    );
};

InfoBox.defaultProps = {
    children: ""
};

export default InfoBox;
