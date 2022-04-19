// Dependencies
import React from "react";

// Stylesheets
import style from "./Table.module.scss";

const Table = (props) => {
    return <table className={style.table}>{props.children}</table>;
};

export default Table;
