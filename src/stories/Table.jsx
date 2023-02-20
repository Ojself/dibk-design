// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Helpers
import { classNameArrayToClassNameString } from "../functions/helpers";

// Stylesheets
import style from "./Table.module.scss";

const getCaptionAlignClass = (captionAlign) => {
    const defaultValue = "left";
    const availableValues = ["left", "center", "right"];
    return captionAlign?.length && availableValues.includes(captionAlign)
        ? style[`captionAlign-${captionAlign}`]
        : style[`captionAlign-${defaultValue}`];
};

const getCaptionSideClass = (captionSide) => {
    const defaultValue = "top";
    const availableValues = ["top", "bottom"];
    return captionSide?.length && availableValues.includes(captionSide)
        ? style[`captionSide-${captionSide}`]
        : style[`captionSide-${defaultValue}`];
};

const Table = (props) => {
    return (
        <table
            className={classNameArrayToClassNameString([
                style.table,
                getCaptionAlignClass(props.captionAlign),
                getCaptionSideClass(props.captionSide)
            ])}
        >
            {props.children}
        </table>
    );
};

Table.propTypes = {
    captionAlign: PropTypes.oneOf(["left", "center", "right"]),
    captionSide: PropTypes.oneOf(["top", "bottom"])
};

export default Table;
