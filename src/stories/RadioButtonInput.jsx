// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import RadioButtonIcon from "./RadioButtonIcon";

// Stylesheets
import style from "./RadioButtonInput.module.scss";

const RadioButtonInput = (props) => {
    const labelProps = {
        className: `${style.radioButtonInput} ${props.checked ? style.checked : ""} ${
            props.disabled ? style.disabled : ""
        } ${props.hasErrors ? style.hasErrors : ""}`,
        htmlFor: props.id
    };

    const iconProps = {
        checked: props.checked,
        disabled: props.disabled,
        theme: props.theme,
        hasErrors: !props.contentOnly && props.hasErrors
    };

    const inputProps = {
        id: props.id,
        name: props.name || null,
        type: "radio",
        value: props.inputValue,
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
                    <RadioButtonIcon {...iconProps} />
                    <input {...inputProps} />
                </React.Fragment>
            ) : null}
            <span>{props.children}</span>
        </label>
    );
};

RadioButtonInput.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func,
    contentOnly: PropTypes.bool,
    hasErrors: PropTypes.bool,
    theme: PropTypes.object,
    inputValue: PropTypes.string.isRequired,
    "aria-controls": PropTypes.string
};

RadioButtonInput.defaultProps = {
    name: "",
    checked: false,
    disabled: false,
    contentOnly: false,
    hasErrors: false
};

export default RadioButtonInput;
