// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./CheckBoxList.module.scss";

const CheckBoxList = (props) => {
    const renderChildElements = (childElements) => {
        return childElements.map((childElement, index) => {
            if (childElement?.type?.name === "CheckBoxListItem" && props.required) {
                const childElementCopy = React.cloneElement(childElement, {
                    requiredGroup: true,
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
            {!!props.legend?.length ? <legend>{props.legend}{props.required && <span className={style.requiredSymbol}>*</span>}</legend> : null}
            {renderChildElements(props.children)}
        </fieldset>
    );
};

CheckBoxList.propTypes = {
    legend: PropTypes.string,
    required: PropTypes.bool
};

export default CheckBoxList;
