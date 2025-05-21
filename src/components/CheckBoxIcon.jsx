// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import style from "./CheckBoxIcon.module.scss";

/**
 * Primary UI component for user interaction
 */
const CheckBoxIcon = (props) => {
    let inlineStyle = {
        height: props.size,
        width: props.size,
        fontSize: props.size
    };

    const checkBoxIconProps = {
        className: `${style.checkBoxIcon} ${props.checked ? style.checked : ""} ${
            props.disabled ? style.disabled : ""
        } ${props.showBox ? style.showBox : ""} ${props.hasErrors ? style.hasErrors : ""}`,
        style: inlineStyle
    };
    return (
        <span {...checkBoxIconProps}>
            <span aria-hidden className={style.checkmark}>
                {props.checked ? props.checkmarkCharacter : ""}
            </span>
        </span>
    );
};

CheckBoxIcon.propTypes = {
    /**
     * How large should the radio button icon be?
     */
    size: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    showBox: PropTypes.bool,
    hasErrors: PropTypes.bool,
    checkmarkCharacter: PropTypes.string
};

CheckBoxIcon.defaultProps = {
    size: "20px",
    checked: false,
    disabled: false,
    showBox: true,
    hasErrors: false,
    checkmarkCharacter: "✔"
};

export default CheckBoxIcon;
