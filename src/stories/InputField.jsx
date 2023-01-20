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

// Assets
import asterisk from "../assets/svg/asterisk.svg?url";

// Stylesheets
import style from "./InputField.module.scss";

const InputField = (props) => {
    const getThemeErrorInputStyle = (theme) => {
        return {
            boxShadow: `0 0 3px ${getThemePaletteBackgroundColor(theme, "warning")}`,
            borderColor: getThemePaletteBackgroundColor(theme, "warning")
        };
    };

    const formatDate = (inputDate) => {
        if (!inputDate) {
            return null;
        }
        const date = new Date(inputDate);
        const year = date.getFullYear();
        const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        return `${day}.${month}.${year}`;
    };

    const renderValueAsText = (value, defaultContent) => {
        return props.type === "date" ? (value ? formatDate(value) : defaultContent) : value ? value : defaultContent;
    };

    const getErrorElementId = () => {
        return `${props.id}-errorMessage`;
    };

    const getInputElementProps = (defaultValue, defaultKey, styleRules) => {
        return {
            name: props.name,
            readOnly: props.readOnly,
            disabled: props.disabled,
            required: props.required,
            type: props.type,
            role: props.role,
            id: props.id,
            key: defaultKey || `${props.id}-${generateRandomString(6)}`,
            min: props.min || null,
            max: props.max || null,
            onChange: props.onChange,
            onBlur: props.onBlur,
            [defaultValue ? "defaultValue" : "value"]: defaultValue || props.value,
            placeholder: props.placeholder || null,
            className: props.hasErrors ? style.hasErrors : null,
            "aria-describedby":
                props.hasErrors && !!props.errorMessage?.length
                    ? getErrorElementId()
                    : !!props["aria-describedby"]?.length
                    ? props["aria-describedby"]
                    : null,
            "aria-invalid": props.hasErrors ? "true" : null,
            "aria-autocomplete": props["aria-controls"] || null,
            style: styleRules
        };
    };

    const defaultValue = props.defaultValue ? props.defaultValue : props.value || null;
    const defaultKey = props.elementKey || null;
    const styleRules = {
        ...(props.hasErrors ? getThemeErrorInputStyle(props.theme) : null),
        ...(props.width?.length && { maxWidth: props.width })
    };
    return (
        <div className={`${style.inputField} ${style[props.type]}`}>
            <Label htmlFor={props.id}>
                {props.label}
                {props.required && <img src={asterisk} alt="" className={style.requiredSymbol} />}
                {props.type === "file" ? (
                    <div className={style.fileInputContainer}>
                        <span className={style.input}>{props.selectedFileName}</span>
                        {props.buttonContent ? (
                            <Button
                                color={props.buttonColor}
                                onClick={() => {
                                    document.getElementById(props.id).click();
                                }}
                                content={props.buttonContent}
                                type="button"
                                theme={props.theme}
                            />
                        ) : null}
                    </div>
                ) : null}
            </Label>
            {!props.contentOnly ? (
                <input {...getInputElementProps(defaultValue, defaultKey, styleRules)} />
            ) : (
                <span>{renderValueAsText(props.value || props.defaultValue, props.defaultContent)}</span>
            )}
            <ErrorMessage id={getErrorElementId()} content={props.errorMessage} theme={props.theme} />
        </div>
    );
};

InputField.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool,
    width: PropTypes.string,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    elementKey: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    ]),
    contentOnly: PropTypes.bool,
    buttonColor: PropTypes.oneOf(["default", "primary"]),
    buttonContent: PropTypes.string,
    selectedFileName: PropTypes.string,
    dateFormat: PropTypes.string,
    placeholder: PropTypes.string,
    defaultContent: PropTypes.string,
    "aria-describedby": PropTypes.string,
    "aria-autocomplete": PropTypes.oneOf(["none", "inline", "list", "both"]),
    hasErrors: PropTypes.bool,
    errorMessage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    ]),
    theme: PropTypes.object
};

InputField.defaultProps = {
    onChange: () => {
        return false;
    },
    name: "",
    type: "text",
    required: false,
    label: "",
    contentOnly: false,
    buttonColor: "default",
    dateFormat: "d. MMMM, yyyy",
    placeholder: "",
    defaultContent: "",
    hasErrors: false,
    errorMessage: ""
};

export default InputField;
