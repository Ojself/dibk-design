// Dependencies
import React from "react";

// Stylesheets
import style from "./Container.module.scss";

/**
 * Primary UI component for user interaction
 */
const Container = (props) => {
    return <div className={style.container}>{props.children}</div>;
};

export default Container;