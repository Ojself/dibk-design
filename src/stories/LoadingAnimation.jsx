// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./LoadingAnimation.module.scss";

const LoadingAnimation = (props) => {
    return (
        <div className={props.fixed ? style.loadingAnimation + " " + style.fixed : style.loadingAnimation}>
            {props.message}
        </div>
    );
};

LoadingAnimation.propTypes = {
    fixed: PropTypes.bool,
    active: PropTypes.bool,
    /** Text content inside button */
    message: PropTypes.string
};

LoadingAnimation.defaultProps = {
    fixed: false,
    active: true,
    message: ""
};

export default LoadingAnimation;
