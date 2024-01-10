// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Helpers
import { cloneThroughFragments } from "../functions/helpers";

// Assets
import asterisk from "../assets/svg/asterisk.svg?url";

// Stylesheets
import style from "./CheckBoxList.module.scss";

const CheckBoxList = (props) => {
    const renderChildElements = (childElements) => {
        const childElementsthroughFragments = cloneThroughFragments(childElements);
        return childElementsthroughFragments.map((childElement, index) => {
            const isCheckBoxListItem = childElement?.props?.type === "CheckBoxListItem";
            if (isCheckBoxListItem) {
                const childElementCopy = React.cloneElement(childElement, {
                    requiredGroup: props.required,
                    compact: props.compact,
                    key: `checkboxListItem-${index}`
                });
                return childElementCopy;
            } else {
                return childElement;
            }
        });
    };

    return (
        <fieldset className={style.checkBoxList}>
            {!!props.legend?.length ? (
                <legend>
                    {props.legend}
                    {props.required && <img src={asterisk} alt="" className={style.requiredSymbol} />}
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
