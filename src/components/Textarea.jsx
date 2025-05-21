// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";

// Functions
import { generateRandomString } from "../functions/generators";

// Assets
import asterisk from "../assets/svg/asterisk.svg?url";

// Stylesheets
import style from "./Textarea.module.scss";

const Textarea = (props) => {
    const renderValueAsText = (value, defaultContent) => {
        return value ? value : defaultContent;
    };

    const getErrorElementId = () => {
        return `${props.id}-errorMessage`;
    };

    const renderInputField = () => {
        const defaultValue = !props.value?.length && props.defaultValue?.length ? props.defaultValue : false;
        const defaultKey = props.elementKey || null;
        const styleRules = {
            ...(props.width?.length && { maxWidth: props.width }),
            ...(props.resize?.length && { resize: props.resize })
        };
        const textareaElementProps = {
            name: props.name,
            readOnly: props.readOnly,
            disabled: props.disabled,
            required: props.required,
            type: props.type,
            id: props.id,
            key: defaultKey || `${props.id}-${generateRandomString(6)}`,
            onChange: props.onChange,
            onBlur: props.onBlur,
            [defaultValue ? "defaultValue" : "value"]: defaultValue || props.value,
            placeholder: props.placeholder,
            rows: props.rows,
            className: props.hasErrors ? style.hasErrors : "",
            "aria-describedby":
                props.hasErrors && !!props.errorMessage?.length
                    ? getErrorElementId()
                    : !!props["aria-describedby"]?.length
                    ? props["aria-describedby"]
                    : null,
            "aria-invalid": props.hasErrors ? "true" : null,
            style: styleRules
        };

        return <textarea {...textareaElementProps} />;
    };
    return (
        <div className={style.textarea}>
            <Label htmlFor={props.id}>
                {props.label}
                {props.required && <img src={asterisk} alt="" className={style.requiredSymbol} />}
            </Label>
            {!props.contentOnly ? (
                renderInputField()
            ) : (
                <span>{renderValueAsText(props.value || props.defaultValue, props.defaultContent)}</span>
            )}
            <ErrorMessage id={getErrorElementId()} content={props.errorMessage} />
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
    required: PropTypes.bool,
    width: PropTypes.string,
    resize: PropTypes.oneOf(["both", "horizontal", "vertical", "none"]),
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
    "aria-describedby": PropTypes.string,
    hasErrors: PropTypes.bool,
    errorMessage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    ])
};

Textarea.defaultProps = {
    onChange: () => {
        return false;
    },
    name: "",
    type: "text",
    required: false,
    label: "",
    contentOnly: false,
    resize: "both",
    placeholder: "",
    defaultContent: "",
    hasErrors: false,
    errorMessage: ""
};

export default Textarea;
