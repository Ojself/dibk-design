// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import RadioButtonInput from "./RadioButtonInput";

// Functions
import { classNameArrayToClassNameString } from "../functions/helpers";

// Stylesheets
import style from "./RadioButtonListItem.module.scss";

const RadioButtonListItem = (props) => {
    const listItemClassNameArray = [
        style.radioButtonListItem,
        props.disabled ? style.disabled : null,
        props.compact ? style.compact : null,
        props.contentOnly ? style.contentOnly : null,
        props.hasErrors ? style.hasErrors : null
    ];
    const listItemClassNameString = classNameArrayToClassNameString(listItemClassNameArray);
    const inputProps = {
        onChange: props.onChange,
        inputValue: props.inputValue,
        checked: props.checked,
        disabled: props.disabled,
        contentOnly: props.contentOnly,
        hasErrors: props.hasErrors,
        id: props.id,
        theme: props.theme
    };
    return (
        <li className={listItemClassNameString}>
            <RadioButtonInput {...inputProps}>{props.children}</RadioButtonInput>
        </li>
    );
};

RadioButtonListItem.propTypes = {
    inputValue: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    contentOnly: PropTypes.bool,
    theme: PropTypes.object,
    hasErrors: PropTypes.bool
};

RadioButtonListItem.defaultProps = {
    name: "",
    checked: false,
    disabled: false,
    contentOnly: false,
    hasErrors: false
};

export default RadioButtonListItem;
