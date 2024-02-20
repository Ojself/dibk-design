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
        props.checked ? style.checked : null,
        props.disabled ? style.disabled : null,
        props.compact ? style.compact : null,
        props.contentOnly ? style.contentOnly : null,
        props.hasErrors ? style.hasErrors : null,
        props.theme && style.hasTheme
    ];
    const listItemClassNameString = classNameArrayToClassNameString(listItemClassNameArray);
    const inputProps = {
        onChange: props.onChange,
        inputValue: props.inputValue,
        checked: props.checked,
        disabled: props.disabled,
        required: props.required,
        requiredGroup: props.requiredGroup,
        contentOnly: props.contentOnly,
        hasErrors: props.hasErrors,
        "aria-controls": props["aria-controls"],
        "aria-describedby": props["aria-describedby"],
        id: props.id,
        name: props.name,
        theme: props.theme
    };
    return (
        <div className={listItemClassNameString}>
            <RadioButtonInput {...inputProps}>{props.children}</RadioButtonInput>
        </div>
    );
};

RadioButtonListItem.propTypes = {
    inputValue: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    requiredGroup: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    contentOnly: PropTypes.bool,
    compact: PropTypes.bool,
    theme: PropTypes.object,
    hasErrors: PropTypes.bool,
    "aria-controls": PropTypes.string,
    "aria-describedby": PropTypes.string
};

RadioButtonListItem.defaultProps = {
    name: "",
    checked: false,
    required: false,
    requiredGroup: false,
    disabled: false,
    contentOnly: false,
    hasErrors: false,
    type: "RadioButtonListItem"
};

export default RadioButtonListItem;
