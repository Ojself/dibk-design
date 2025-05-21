// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Helpers
import { cloneThroughFragments } from "../functions/helpers";

// Assets
import asterisk from "../assets/svg/asterisk.svg?url";

// Stylesheets
import style from "./RadioButtonList.module.scss";
import Header from "./Header";

const RadioButtonList = ({ required, compact, legend, legendSize, children }) => {
    const renderChildElements = (childElements) => {
        const childElementsthroughFragments = cloneThroughFragments(childElements);
        return childElementsthroughFragments.map((childElement, index) => {
            const isRadioButtonListItem = childElement?.props?.type === "RadioButtonListItem";
            if (isRadioButtonListItem) {
                const childElementCopy = React.cloneElement(childElement, {
                    requiredGroup: required,
                    compact: compact,
                    key: `radioButtonListItem-${index}`
                });
                return childElementCopy;
            } else {
                return childElement;
            }
        });
    };

    return (
        <fieldset className={style.radioButtonList}>
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

RadioButtonList.propTypes = {
    legend: PropTypes.string,
    legendSize: PropTypes.oneOf([1, 2, 3, 4, 5]),
    required: PropTypes.bool,
    compact: PropTypes.bool
};

export default RadioButtonList;
