// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";

// Functions
import { getThemePaletteBackgroundColor } from "../functions/theme";
import { generateRandomString } from "../functions/generators";

// Stylesheets
import style from "./Textarea.module.scss";

const Textarea = (props) => {
    const getThemeErrorInputStyle = (theme) => {
        return {
            boxShadow: `0 0 3px ${getThemePaletteBackgroundColor(theme, "warning")}`,
            borderColor: getThemePaletteBackgroundColor(theme, "warning")
        };
    };
    const renderValueAsText = (value, defaultContent) => {
        return value ? value : defaultContent;
    };
    const renderInputField = () => {
        const defaultValue = !props.value?.length && props.defaultValue?.length ? props.defaultValue : false;
        const defaultKey = props.elementKey || null;
        const styleRules = {
            ...(props.hasErrors ? getThemeErrorInputStyle(props.theme) : null),
            ...(props.width?.length && { maxWidth: props.width }),
            ...(props.resize?.length && { resize: props.resize })
        };
        const textareaElementProps = {
            name: props.name,
            readOnly: props.readOnly,
            disabled: props.disabled,
            type: props.type,
            id: props.id,
            key: defaultKey || `${props.id}-${generateRandomString(6)}`,
            onChange: props.onChange,
            onBlur: props.onBlur,
            [defaultValue ? "defaultValue" : "value"]: defaultValue || props.value,
            placeholder: props.placeholder,
            rows: props.rows,
            className: props.hasErrors ? style.hasErrors : "",
            "aria-required": props.mandatory, // TODO: replace with required
            style: styleRules
        };

        return <textarea {...textareaElementProps} />;
    };
    return (
        <div className={style.textarea}>
            <Label htmlFor={props.id}>{props.label}</Label>
            {!props.contentOnly ? (
                renderInputField()
            ) : (
                <span>{renderValueAsText(props.value || props.defaultValue, props.defaultContent)}</span>
            )}
            <ErrorMessage content={props.errorMessage} theme={props.theme} />
        </div>
    );
};

Textarea.propTypes = {
    /** Text content inside list item */
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.string,
    resize: PropTypes.oneOf(['both', 'horizontal', 'vertical', 'none']),
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    elementKey: PropTypes.string,
    rows: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    ]),
    contentOnly: PropTypes.bool,
    placeholder: PropTypes.string,
    defaultContent: PropTypes.string,
    hasErrors: PropTypes.bool,
    errorMessage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    ]),
    mandatory: PropTypes.bool, // TODO: replace with required
    theme: PropTypes.object
};

Textarea.defaultProps = {
    name: "",
    type: "text",
    label: "",
    contentOnly: false,
    resize: 'both',
    placeholder: "",
    defaultContent: "",
    hasErrors: false,
    errorMessage: "",
    mandatory: false, // TODO: replace with required
    onChange: () => {
        return false;
    }
};

export default Textarea;
