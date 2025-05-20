// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./Paper.module.scss";

const Paper = (props) => {
    return (
        <div
            className={`${style.paper} ${props.noMargin ? style.noMargin : ""} ${
                props.noPadding ? style.noPadding : ""
            }`}
        >
            {props.children}
        </div>
    );
};

Paper.propTypes = {
    noMargin: PropTypes.bool,
    noPadding: PropTypes.bool
};

Paper.defaultProps = {
    noMargin: false,
    noPadding: false
};

export default Paper;
