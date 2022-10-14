// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./RadioButtonList.module.scss";

const RadioButtonList = (props) => {
    const renderChildElements = (childElements) => {
        return childElements.map((childElement, index) => {
            if (childElement?.type?.name === "RadioButtonListItem" && props.required) {
                const childElementCopy = React.cloneElement(childElement, {
                    requiredGroup: true,
                    key: `radioButtonListItem-${index}`
                });
                return childElementCopy;
            } else {
                const childElementCopy = React.cloneElement(childElement, { key: `radiobuttonListChild-${index}` });
                return childElementCopy;
            }
        });
    };
    return (
        <fieldset className={style.radioButtonList}>
            {!!props.legend?.length ? (
                <legend>
                    {props.legend}
                    {props.required && <span className={style.requiredSymbol}>*</span>}
                </legend>
            ) : null}
            {renderChildElements(props.children)}
        </fieldset>
    );
};

RadioButtonList.propTypes = {
    legend: PropTypes.string,
    required: PropTypes.bool
};

export default RadioButtonList;
