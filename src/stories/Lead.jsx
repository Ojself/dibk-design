// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./Lead.module.scss";

const Lead = ({ id, htmlTag, children }) => {
    const leadClass = style.lead;
    let leadElement = React.createElement(
        htmlTag,
        {
            className: leadClass,
            id: id || null
        },
        children
    );
    return leadElement;
};

Lead.propTypes = {
    id: PropTypes.string,
    htmlTag: PropTypes.string
};

Lead.defaultProps = {
    htmlTag: "p"
};

export default Lead;
