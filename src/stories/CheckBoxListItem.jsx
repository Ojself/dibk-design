// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import CheckBoxInput from "./CheckBoxInput";

// Functions
import { classNameArrayToClassNameString } from "../functions/helpers";

// Stylesheets
import style from "./CheckBoxListItem.module.scss";

const CheckBoxListItem = (props) => {
    const listItemClassNameArray = [
        style.checkBoxListItem,
        props.checked ? style.checked : null,
        props.disabled ? style.disabled : null,
        props.compact ? style.compact : null,
        props.contentOnly ? style.contentOnly : null,
        props.hasErrors ? style.hasErrors : null
    ];
    const listItemClassNameString = classNameArrayToClassNameString(listItemClassNameArray);
    const inputProps = {
        onChange: props.onChange,
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
        theme: props.theme,
        checkmarkCharacter: props.checkmarkCharacter
    };
    return (
        <div className={listItemClassNameString}>
            <CheckBoxInput {...inputProps}>{props.children}</CheckBoxInput>
        </div>
    );
};

CheckBoxListItem.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    requiredGroup: PropTypes.bool,
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    contentOnly: PropTypes.bool,
    theme: PropTypes.object,
    compact: PropTypes.bool,
    hasErrors: PropTypes.bool,
    checkmarkCharacter: PropTypes.string,
    "aria-controls": PropTypes.string,
    "aria-describedby": PropTypes.string
};
CheckBoxListItem.defaultProps = {
    checked: false,
    disabled: false,
    required: false,
    requiredGroup: false,
    id: "",
    name: "",
    contentOnly: false,
    hasErrors: false,
    checkmarkCharacter: "✔"
};
export default CheckBoxListItem;
