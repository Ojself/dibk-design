// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./RadioButtonList.module.scss";

const RadioButtonList = (props) => {
    return (
        <fieldset className={style.radioButtonList}>
            {!!props.legend?.length ? <legend>{props.legend}</legend> : null}
            {props.children}
        </fieldset>
    );
};

RadioButtonList.propTypes = {
    legend: PropTypes.string
};

export default RadioButtonList;
