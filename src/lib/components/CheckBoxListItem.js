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
        contentOnly: props.contentOnly,
        hasErrors: props.hasErrors,
        id: props.id,
        theme: props.theme,
        checkmarkCharacter: props.checkmarkCharacter
    };
    return (
        <li className={listItemClassNameString}>
            <CheckBoxInput {...inputProps}>{props.children}</CheckBoxInput>
        </li>
    );
};

CheckBoxListItem.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    contentOnly: PropTypes.bool,
    theme: PropTypes.object,
    compact: PropTypes.bool,
    hasErrors: PropTypes.bool,
    checkmarkCharacter: PropTypes.string
};
CheckBoxListItem.defaultProps = {
    checked: false,
    disabled: false,
    id: "",
    name: "",
    contentOnly: false,
    hasErrors: false,
    checkmarkCharacter: "✔"
};
export default CheckBoxListItem;
