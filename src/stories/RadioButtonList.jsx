// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Helpers
import { cloneThroughFragments } from "../functions/helpers";

// Assets
import asterisk from "../assets/svg/asterisk.svg?url";

// Stylesheets
import style from "./RadioButtonList.module.scss";

const RadioButtonList = (props) => {
    const renderChildElements = (childElements) => {
        const childElementsthroughFragments = cloneThroughFragments(childElements);
        return childElementsthroughFragments.map((childElement, index) => {
            const childElementCopy = React.cloneElement(childElement, {
                requiredGroup: props.required,
                compact: props.compact,
                key: `radioButtonListItem-${index}`
            });
            return childElementCopy;
        });
    };

    return (
        <fieldset className={style.radioButtonList}>
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

RadioButtonList.propTypes = {
    legend: PropTypes.string,
    required: PropTypes.bool,
    compact: PropTypes.bool
};

export default RadioButtonList;
