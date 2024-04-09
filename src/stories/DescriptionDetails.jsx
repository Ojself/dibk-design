// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Helpers
import { classNameArrayToClassNameString } from "functions/helpers";

// Stylesheets
import style from "./DescriptionDetails.module.scss";

const DescriptionDetails = ({ compact, titleWidth, children }) => {
    return (
        <dd
            className={classNameArrayToClassNameString([style.descriptionDetails, compact && style.compact])}
            style={{ "--title-width": titleWidth || null }}
        >
            {children}
        </dd>
    );
};

DescriptionDetails.propTypes = {
    compact: PropTypes.bool,
    titleWidth: PropTypes.string
};

DescriptionDetails.defaultProps = {
    compact: false
};

export default DescriptionDetails;
