import React from "react";
import PropTypes from "prop-types";
import CheckBoxIcon from "./CheckBoxIcon";
import style from "./CheckBoxInput.module.scss";

class CheckBoxInput extends React.Component {
    render() {
        const labelProps = {
            className: `${style.checkBoxInput} ${this.props.contentOnly ? style.contentOnly : ""} ${
                this.props.disabled ? style.disabled : ""
            } ${this.props.hasErrors ? style.hasErrors : ""}`,
            htmlFor: this.props.id
        };

        const iconProps = {
            checked: this.props.checked,
            disabled: this.props.disabled,
            theme: this.props.theme,
            showBox: !this.props.contentOnly,
            hasErrors: this.props.contentOnly && this.props.hasErrors,
            checkmarkCharacter: this.props.checkmarkCharacter
        };

        const inputProps = {
            id: this.props.id,
            name: this.props.name || null,
            type: "checkbox",
            checked: this.props.checked,
            disabled: this.props.disabled,
            onChange: this.props.onChange,
            "aria-controls": this.props["aria-controls"]
        };

        return (
            <label {...labelProps}>
                {!this.props.contentOnly ? (
                    <React.Fragment>
                        <CheckBoxIcon {...iconProps} />
                        <input {...inputProps} />
                    </React.Fragment>
                ) : (
                    <CheckBoxIcon {...iconProps} />
                )}
                <span>{this.props.children}</span>
            </label>
        );
    }
}

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
