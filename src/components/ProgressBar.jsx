// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./ProgressBar.module.scss";

const ProgressBar = (props) => {
    const scssValueProperty = "--value";
    return (
        <div
            className={`${style.progressBar} ${props.hasErrors ? style.hasErrors : ""}`}
            role="progressbar"
            aria-valuenow={props.progress || 0}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ [scssValueProperty]: props.progress || 0 }}
        ></div>
    );
};

ProgressBar.propTypes = {
    progress: PropTypes.number,
    hasErrors: PropTypes.bool
};

ProgressBar.defaultProps = {
    progress: 0,
    hasErrors: false
};

export default ProgressBar;
