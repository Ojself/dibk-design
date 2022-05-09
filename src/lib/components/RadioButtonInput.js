import React from "react";
import PropTypes from "prop-types";
import RadioButtonIcon from "./RadioButtonIcon";
import style from "./RadioButtonInput.module.scss";

class RadioButtonInput extends React.Component {
    render() {
        const labelProps = {
            className: `${style.radioButtonInput} ${this.props.checked ? style.checked : ""} ${
                this.props.disabled ? style.disabled : ""
            } ${this.props.hasErrors ? style.hasErrors : ""}`,
            htmlFor: this.props.id
        };

        const iconProps = {
            checked: this.props.checked,
            disabled: this.props.disabled,
            theme: this.props.theme,
            hasErrors: this.props.contentOnly && this.props.hasErrors
        };

        const inputProps = {
            id: this.props.id,
            name: this.props.name || null,
            type: "radio",
            value: this.props.inputValue,
            checked: this.props.checked,
            disabled: this.props.disabled,
            onChange: this.props.onChange,
            tabIndex: this.props.tabIndex || null,
            "aria-controls": this.props["aria-controls"]
        };

        return (
            <label {...labelProps}>
                {!this.props.contentOnly ? (
                    <React.Fragment>
                        <RadioButtonIcon {...iconProps} />
                        <input {...inputProps} />
                    </React.Fragment>
                ) : null}
                <span>{this.props.children}</span>
            </label>
        );
    }
}

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
