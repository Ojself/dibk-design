// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./Container.module.scss";

const Container = (props) => {
    const styleProps = {
        "--max-width": props?.maxWidth?.length && props.maxWidth
    };
    return (
        <div className={style.container} style={styleProps}>
            {props.children}
        </div>
    );
};

Container.propTypes = {
    maxWidth: PropTypes.string
};

export default Container;
