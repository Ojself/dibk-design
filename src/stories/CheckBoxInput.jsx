// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import CheckBoxIcon from "./CheckBoxIcon";

// Stylesheets
import style from "./CheckBoxInput.module.scss";

const CheckBoxInput = (props) => {
    const labelProps = {
        className: `${style.checkBoxInput} ${props.contentOnly ? style.contentOnly : ""} ${
            props.disabled ? style.disabled : ""
        } ${props.hasErrors ? style.hasErrors : ""}`,
        htmlFor: props.id
    };

    const iconProps = {
        checked: props.checked,
        disabled: props.disabled,
        theme: props.theme,
        showBox: !props.contentOnly,
        hasErrors: props.contentOnly && props.hasErrors,
        checkmarkCharacter: props.checkmarkCharacter
    };

    const inputProps = {
        id: props.id,
        name: props.name || null,
        type: "checkbox",
        checked: props.checked,
        disabled: props.disabled,
        onChange: props.onChange,
        tabIndex: props.tabIndex || null,
        "aria-controls": props["aria-controls"]
    };

    return (
        <label {...labelProps}>
            {!props.contentOnly ? (
                <React.Fragment>
                    <CheckBoxIcon {...iconProps} />
                    <input {...inputProps} />
                </React.Fragment>
            ) : (
                <CheckBoxIcon {...iconProps} />
            )}
            <span>{props.children}</span>
        </label>
    );
};

CheckBoxInput.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    contentOnly: PropTypes.bool,
    hasErrors: PropTypes.bool,
    theme: PropTypes.object,
    checkmarkCharacter: PropTypes.string,
    "aria-controls": PropTypes.string
};
CheckBoxInput.defaultProps = {
    checked: false,
    disabled: false,
    name: "",
    contentOnly: false,
    hasErrors: false,
    checkmarkCharacter: "✔"
};

export default CheckBoxInput;
