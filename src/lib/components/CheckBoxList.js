// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./CheckBoxList.module.scss";

const CheckBoxList = (props) => {
    return (
        <fieldset className={style.checkBoxList}>
            {!!props.legend?.length ? <legend>{props.legend}</legend> : null}
            {props.children}
        </fieldset>
    );
};

CheckBoxList.propTypes = {
    legend: PropTypes.string
};

export default CheckBoxList;
