// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Helpers
import { cloneThroughFragments } from "../functions/helpers";

// Stylesheets
import style from "./CheckBoxList.module.scss";

const CheckBoxList = (props) => {
    const renderChildElements = (childElements) => {
        const childElementsthroughFragments = cloneThroughFragments(childElements);
        return childElementsthroughFragments.map((childElement, index) => {
            if (childElement?.type?.name === "CheckBoxListItem") {
                const childElementCopy = React.cloneElement(childElement, {
                    requiredGroup: props.required,
                    compact: props.compact,
                    key: `checkboxListItem-${index}`
                });
                return childElementCopy;
            } else {
                const childElementCopy = React.cloneElement(childElement, { key: `checkboxListChild-${index}` });
                return childElementCopy;
            }
        });
    };

    return (
        <fieldset className={style.checkBoxList}>
            {!!props.legend?.length ? (
                <legend>
                    {props.legend}
                    {props.required && <span className={style.requiredSymbol}>*</span>}
                </legend>
            ) : null}
            {renderChildElements(React.Children.toArray(props.children))}
        </fieldset>
    );
};

CheckBoxList.propTypes = {
    legend: PropTypes.string,
    required: PropTypes.bool,
    compact: PropTypes.bool
};

export default CheckBoxList;
