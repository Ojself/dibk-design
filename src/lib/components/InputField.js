// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import Button from "./Button";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";

// Functions
import { getThemePaletteBackgroundColor } from "../functions/theme";
import { generateRandomString } from "../functions/generators";

// Stylesheets
import style from "./InputField.module.scss";

class InputField extends React.Component {
    getThemeErrorInputStyle(theme) {
        return {
            boxShadow: `0 0 3px ${getThemePaletteBackgroundColor(theme, "warning")}`,
            borderColor: getThemePaletteBackgroundColor(theme, "warning")
        };
    }

    formatDate = (inputDate) => {
        if (!inputDate) {
            return null;
        }
        const date = new Date(inputDate);
        const year = date.getFullYear();
        const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        return `${day}.${month}.${year}`;
    };

    renderValueAsText(value, defaultContent) {
        return this.props.type === "date"
            ? value
                ? this.formatDate(value)
                : defaultContent
            : value
            ? value
            : defaultContent;
    }

    getInputElementProps(defaultValue, defaultKey, styleRules) {
        return {
            name: this.props.name,
            readOnly: this.props.readOnly,
            disabled: this.props.disabled,
            type: this.props.type,
            role: this.props.role,
            id: this.props.id,
            key: defaultKey || `${this.props.id}-${generateRandomString(6)}`,
            min: this.props.min || null,
            max: this.props.max || null,
            onChange: this.props.onChange,
            onBlur: this.props.onBlur,
            [defaultValue ? "defaultValue" : "value"]: defaultValue || this.props.value,
            placeholder: this.props.placeholder || null,
            className: this.props.hasErrors ? style.hasErrors : null,
            "aria-required": this.props.mandatory,
            "aria-describedby": this.props["aria-describedby"] || null,
            style: styleRules
        };
    }

    render() {
        const defaultValue = this.props.defaultValue ? this.props.defaultValue : this.props.value || null;
        const defaultKey = this.props.elementKey || null;
        const styleRules = {
            ...(this.props.hasErrors ? this.getThemeErrorInputStyle(this.props.theme) : null),
            ...(this.props.width?.length && { maxWidth: this.props.width })
        };
        return (
            <div className={`${style.inputField} ${style[this.props.type]}`}>
                <Label htmlFor={this.props.id}>
                    {this.props.label}
                    {this.props.type === "file" ? (
                        <div className={style.fileInputContainer}>
                            <span className={style.input}>{this.props.selectedFileName}</span>
                            {this.props.buttonContent ? (
                                <Button
                                    color={this.props.buttonColor}
                                    onClick={() => {
                                        document.getElementById(this.props.id).click();
                                    }}
                                    content={this.props.buttonContent}
                                    theme={this.props.theme}
                                />
                            ) : null}
                        </div>
                    ) : null}
                </Label>
                {!this.props.contentOnly ? (
                    <input {...this.getInputElementProps(defaultValue, defaultKey, styleRules)} />
                ) : (
                    <span>
                        {this.renderValueAsText(this.props.value || this.props.defaultValue, this.props.defaultContent)}
                    </span>
                )}
                <ErrorMessage content={this.props.errorMessage} theme={this.props.theme} />
            </div>
        );
    }
}

InputField.propTypes = {
    /** Text content inside list item */
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.string,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    elementKey: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    ]),
    contentOnly: PropTypes.bool,
    buttonColor: PropTypes.string,
    buttonContent: PropTypes.string,
    selectedFileName: PropTypes.string,
    placeholder: PropTypes.string,
    defaultContent: PropTypes.string,
    hasErrors: PropTypes.bool,
    errorMessage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    ]),
    mandatory: PropTypes.bool,
    theme: PropTypes.object
};

InputField.defaultProps = {
    name: "",
    type: "text",
    label: "",
    contentOnly: false,
    buttonColor: "default",
    dateFormat: "d. MMMM, yyyy",
    placeholder: "",
    defaultContent: "",
    hasErrors: false,
    errorMessage: "",
    mandatory: false,
    onChange: () => {
        return false;
    }
};

export default InputField;
