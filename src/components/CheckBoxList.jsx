// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Helpers
import { cloneThroughFragments } from "../functions/helpers";

// Assets
import asterisk from "../assets/svg/asterisk.svg?url";

// Stylesheets
import style from "./CheckBoxList.module.scss";
import Header from "./Header";

const CheckBoxList = ({ required, compact, legend, legendSize, children }) => {
    const renderChildElements = (childElements) => {
        const childElementsthroughFragments = cloneThroughFragments(childElements);
        return childElementsthroughFragments.map((childElement, index) => {
            const isCheckBoxListItem = childElement?.props?.type === "CheckBoxListItem";
            if (isCheckBoxListItem) {
                const childElementCopy = React.cloneElement(childElement, {
                    requiredGroup: required,
                    compact: compact,
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
            {!!legend?.length ? (
                <legend>
                    {legendSize ? <Header size={legendSize}>{legend}</Header> : legend}
                    {required && <img src={asterisk} alt="" className={style.requiredSymbol} />}
                </legend>
            ) : null}
            {renderChildElements(React.Children.toArray(children))}
        </fieldset>
    );
};

CheckBoxList.propTypes = {
    legend: PropTypes.string,
    legendSize: PropTypes.oneOf([1, 2, 3, 4, 5]),
    required: PropTypes.bool,
    compact: PropTypes.bool
};

export default CheckBoxList;
