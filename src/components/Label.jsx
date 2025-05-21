// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./Label.module.scss";

const Label = (props) => {
    let labelProps = { ...props };
    const htmlTag = props.htmlTag?.length ? props.htmlTag : "label";
    delete labelProps.inline;
    delete labelProps.normalCursor;
    delete labelProps.htmlTag;
    const className = `${style.label} ${props.inline ? style.inline : ""} ${
        props.normalCursor ? style.normalCursor : ""
    }`;
    const labelElement = React.createElement(
        htmlTag,
        {
            ...labelProps,
            className,
            id: props.id || null
        },
        props.children
    );
    return labelElement;
};

Label.propTypes = {
    inline: PropTypes.bool,
    normalCursor: PropTypes.bool,
    htmlTag: PropTypes.string
};

Label.defaultProps = {
    inline: false,
    normalCursor: false,
    htmlTag: "label"
};

export default Label;
