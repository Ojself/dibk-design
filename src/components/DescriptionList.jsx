// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./DescriptionList.module.scss";
import { classNameArrayToClassNameString, cloneThroughFragments } from "../functions/helpers";

const DescriptionList = ({ compact, titleWidth, children }) => {
    const renderChildElements = (childElements) => {
        const childElementsthroughFragments = cloneThroughFragments(childElements);
        return childElementsthroughFragments.map((childElement, index) => {
            const childElementCopy = React.cloneElement(childElement, {
                compact: compact,
                titleWidth: titleWidth,
                key: `descriptionListItem-${index}`
            });
            return childElementCopy;
        });
    };

    const renderList = (children) => {
        let listElement = React.createElement(
            "dl",
            {
                className: classNameArrayToClassNameString([style.descriptionList, !!compact && style.compact]),
                style: { "--title-width": titleWidth || null }
            },
            renderChildElements(React.Children.toArray(children))
        );
        return listElement;
    };
    return renderList(children);
};

DescriptionList.propTypes = {
    compact: PropTypes.bool,
    titleWidth: PropTypes.string
};

DescriptionList.defaultProps = {
    compact: false
};

export default DescriptionList;
