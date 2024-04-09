// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Helpers
import { classNameArrayToClassNameString } from "functions/helpers";

// Stylesheets
import style from "./DescriptionTerm.module.scss";

const DescriptionTerm = ({ compact, titleWidth, children }) => {
    return (
        <dt
            className={classNameArrayToClassNameString([style.descriptionTerm, compact && style.compact])}
            style={{ "--title-width": titleWidth || null }}
        >
            {children}
        </dt>
    );
};
DescriptionTerm.propTypes = {
    compact: PropTypes.bool,
    titleWidth: PropTypes.string
};

DescriptionTerm.defaultProps = {
    compact: false
};

export default DescriptionTerm;
