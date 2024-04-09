// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Helpers
import { classNameArrayToClassNameString } from "functions/helpers";

// Stylesheets
import style from "./ListItem.module.scss";

const ListItem = ({compact, children}) => {
    return (
        <li className={classNameArrayToClassNameString([style.listItem, compact && style.compact])}>
            {children}
        </li>
    );
};

ListItem.propTypes = {
    compact: PropTypes.bool
};

ListItem.defaultProps = {
    compact: false
};

export default ListItem;
