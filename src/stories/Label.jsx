import React from "react";
import PropTypes from "prop-types";
import style from "./Label.module.scss";

const Label = (props) => {
    let labelProps = { ...props };
    delete labelProps.inline;
    delete labelProps.normalCursor;
    const className = `${style.label} ${props.inline ? style.inline : ""} ${
        props.normalCursor ? style.normalCursor : ""
    }`;
    return (
        <label {...labelProps} className={className}>
            {props.children}
        </label>
    );
};

Label.propTypes = {
    inline: PropTypes.bool,
    normalCursor: PropTypes.bool
};

Label.defaultProps = {
    inline: false,
    normalCursor: false
};

export default Label;
