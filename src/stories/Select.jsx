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
import style from "./Select.module.scss";

const Select = (props) => {
    const getThemeErrorInputStyle = (theme) => {
        return {
            boxShadow: `0 0 3px ${getThemePaletteBackgroundColor(theme, "warning")}`,
            borderColor: getThemePaletteBackgroundColor(theme, "warning")
        };
    };
    const getThemeArrowStyle = (theme) => {
        return {
            borderTopColor: getThemePaletteBackgroundColor(theme, "primary")
        };
    };
    const getKeyByValue = (value, options) => {
        const selectedOption =
            options && options.length
                ? options.find((option) => {
                      if (typeof option === "object") {
                          return option.value === value;
                      } else {
                          return option === value;
                      }
                  })
                : null;
        if (selectedOption && selectedOption.key) {
            return selectedOption.key;
        } else if (selectedOption && selectedOption.value) {
            return selectedOption.value;
        } else {
            return selectedOption;
        }
    };

    const renderOptionElements = (options) => {
        return options.map((option, key) => {
            let optionObject = null;
            if (typeof option === "object") {
                optionObject = {
                    key: option.key ? option.key : "",
                    value: option.value ? option.value : ""
                };
            } else {
                optionObject = {
                    key: option,
                    value: option
                };
            }
            return (
                <option value={optionObject.value} key={key}>
                    {optionObject.key}
                </option>
            );
        });
    };

    const renderPlaceholderOption = (placeholder, placeholderValue) => {
        return placeholder ? (
            <option value={placeholderValue} disabled>
                {placeholder}
            </option>
        ) : (
            ""
        );
    };

    if (props.contentOnly) {
        const value = props.defaultValue ? props.defaultValue : props.value || null;
        return (
            <div className={style.select}>
                <Label htmlFor={props.id}>{props.label}</Label>
                <span>
                    {value ? (props.keyAsContent ? getKeyByValue(value, props.options) : value) : props.defaultContent}
                </span>
            </div>
        );
    } else {
        const defaultValue = !props.value && props.defaultValue ? props.defaultValue : false;
        const styleRules = {
            ...(props.hasErrors ? getThemeErrorInputStyle(props.theme) : null),
            ...(props.width?.length && { maxWidth: props.width })
        };
        const selectElementProps = {
            name: props.name,
            multiple: props.multiple,
            [defaultValue ? "defaultValue" : "value"]: defaultValue || props.value,
            onChange: props.onChange,
            id: props.id,
            role: props.role,
            key: `${props.id}-${generateRandomString(6)}`,
            className: props.hasErrors ? style.hasErrors : "",
            style: styleRules
        };
        return (
            <div className={style.select}>
                <Label htmlFor={props.id}>{props.label}</Label>
                <div
                    className={style.selectContainer}
                    style={{ ...(props.width?.length && { maxWidth: props.width }) }}
                >
                    <span className={style.selectListArrow} style={getThemeArrowStyle(props.theme)}></span>
                    <select {...selectElementProps}>
                        {renderPlaceholderOption(props.placeholder, props.placeholderValue)}
                        {renderOptionElements(props.options)}
                    </select>
                </div>
                <ErrorMessage content={props.errorMessage} theme={props.theme} />
            </div>
        );
    }
};

Select.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    multiple: PropTypes.bool,
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            PropTypes.shape({ key: PropTypes.string, value: PropTypes.string })
        ])
    ),
    width: PropTypes.string,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    ]),
    contentOnly: PropTypes.bool,
    keyAsContent: PropTypes.bool,
    placeholder: PropTypes.string,
    placeholderValue: PropTypes.string,
    defaultContent: PropTypes.string,
    hasErrors: PropTypes.bool,
    errorMessage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    ]),
    theme: PropTypes.object
};
Select.defaultProps = {
    name: "",
    options: [],
    label: "",
    contentOnly: false,
    keyAsContent: false,
    placeholder: null,
    placeholderValue: "",
    defaultContent: null,
    hasErrors: false,
    errorMessage: "",
    onChange: () => {
        return false;
    }
};
export default Select;
