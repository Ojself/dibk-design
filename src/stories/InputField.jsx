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
            "aria-required": props.mandatory, // TODO: change to this.props.required
            "aria-describedby": props["aria-describedby"] || null,
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
            <ErrorMessage content={props.errorMessage} theme={props.theme} />
        </div>
    );
};

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
    mandatory: PropTypes.bool, // TODO: change to props.required
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
    mandatory: false, // TODO: change to props.required
    onChange: () => {
        return false;
    }
};

export default InputField;
