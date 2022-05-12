import React from "react";
import style from "./RadioButtonList.module.scss";

const RadioButtonList = (props) => {
    return <ul className={style.radioButtonList}>{props.children}</ul>;
};

export default RadioButtonList;
