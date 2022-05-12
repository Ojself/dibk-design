import React from "react";
import PropTypes from "prop-types";
import CheckBoxInput from "./CheckBoxInput";
import style from "./CheckBoxListItem.module.scss";

const CheckBoxListItem = (props) => {
    const listItemClass = `${style.checkBoxListItem} ${props.checked ? style.checked : ""} ${
        props.disabled ? style.disabled : ""
    } ${props.contentOnly ? style.contentOnly : ""} ${props.compact ? style.compact : ""} ${
        props.hasErrors ? style.hasErrors : ""
    }`;
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
        <li className={listItemClass}>
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
