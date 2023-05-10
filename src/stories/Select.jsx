// Dependencies
import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

// Components
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";
import CheckBoxList from "./CheckBoxList";
import CheckBoxListItem from "./CheckBoxListItem";

// Functions
import { getThemePaletteBackgroundColor } from "../functions/theme";
import { generateRandomString } from "../functions/generators";
import { addFocusTrapInsideElement, classNameArrayToClassNameString } from "../functions/helpers";

// Assets
import asterisk from "../assets/svg/asterisk.svg?url";

// Stylesheets
import style from "./Select.module.scss";

const Select = (props) => {
    const [showDropdownList, setShowDropdownList] = useState(false);

    const dropdownRef = useRef();

    const wrapperRef = useCallback((element) => {
        if (!!element) {
            addFocusTrapInsideElement(element);
        }
    }, []);

    const hideDropdownList = () => {
        setShowDropdownList(false);
    };

    useEffect(() => {
        const keyDownFunction = (event) => {
            switch (event.keyCode) {
                case 27: // Escape
                    hideDropdownList();
                    break;
                default:
                    return null;
            }
        };
        const handleClickOutside = (event) => {
            if (dropdownRef?.current && !dropdownRef.current.contains(event.target)) {
                hideDropdownList();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", keyDownFunction, false);
    }, [props, wrapperRef]);

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

    const createOptionObject = (option) => {
        if (typeof option === "object") {
            return {
                key: option.key ? option.key : "",
                value: option.value ? option.value : ""
            };
        } else {
            return {
                key: option,
                value: option
            };
        }
    };

    const renderSelectedValues = (selectElementProps) => {
        const selectedValues = selectElementProps.defaultValue || selectElementProps.value;
        return selectedValues?.length
            ? selectedValues
                  .map((value) => {
                      return value;
                  })
                  .join(", ")
            : null;
    };

    const renderCheckBoxElements = (options, selectElementProps) => {
        return options.map((option, index) => {
            let optionObject = createOptionObject(option);
            const selectedValues = selectElementProps.defaultValue || selectElementProps.value;
            const isSelected = selectedValues && selectedValues.length && selectedValues.includes(optionObject.value);
            return (
                <CheckBoxListItem
                    key={index}
                    id={`${props.id}-${index}`}
                    value={optionObject.value}
                    checked={isSelected}
                    onChange={() => selectElementProps.onChange(optionObject.value)}
                    theme={props.theme}
                >
                    {optionObject.key}
                </CheckBoxListItem>
            );
        });
    };

    const renderOptionElements = (options) => {
        return options.map((option, key) => {
            let optionObject = createOptionObject(option);
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

    const getErrorElementId = () => {
        return `${props.id}-errorMessage`;
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
        const className = classNameArrayToClassNameString([
            props.hasErrors && style.hasErrors,
            props.multiple && style.multiple
        ]);
        const selectElementProps = {
            name: props.name,
            multiple: props.multiple,
            required: props.required,
            disabled: props.disabled,
            [defaultValue ? "defaultValue" : "value"]: defaultValue || props.value,
            onChange: props.onChange,
            id: props.id,
            role: props.role,
            key: `${props.id}-${generateRandomString(6)}`,
            className,
            "aria-describedby":
                props.hasErrors && !!props.errorMessage?.length
                    ? getErrorElementId()
                    : !!props["aria-describedby"]?.length
                    ? props["aria-describedby"]
                    : null,
            "aria-invalid": props.hasErrors ? "true" : null,
            style: styleRules
        };
        return (
            <div className={style.select}>
                <Label htmlFor={props.id}>
                    {props.label}
                    {props.required && <img src={asterisk} alt="" className={style.requiredSymbol} />}
                </Label>

                <div
                    className={style.selectContainer}
                    style={{ ...(props.width?.length && { maxWidth: props.width }) }}
                >
                    <span className={style.selectListArrow} style={getThemeArrowStyle(props.theme)}></span>
                    {props.multiple ? (
                        <div ref={dropdownRef}>
                            <div
                                onClick={() => {
                                    setShowDropdownList(!showDropdownList);
                                }}
                                className={style.multipleSelectElement}
                            >
                                {renderSelectedValues(selectElementProps)}
                            </div>
                            {showDropdownList ? (
                                <div className={style.multipleSelectDropdown}>
                                    <CheckBoxList compact>
                                        {renderCheckBoxElements(props.options, selectElementProps)}
                                    </CheckBoxList>
                                </div>
                            ) : null}
                        </div>
                    ) : (
                        <select {...selectElementProps}>
                            {renderPlaceholderOption(props.placeholder, props.placeholderValue)}
                            {renderOptionElements(props.options)}
                        </select>
                    )}
                </div>

                <ErrorMessage id={getErrorElementId()} content={props.errorMessage} theme={props.theme} />
            </div>
        );
    }
};

Select.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    multiple: PropTypes.bool,
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            PropTypes.shape({
                key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            })
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
    "aria-describedby": PropTypes.string,
    hasErrors: PropTypes.bool,
    errorMessage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    ]),
    theme: PropTypes.object
};
Select.defaultProps = {
    onChange: () => {
        return false;
    },
    name: "",
    required: false,
    disabled: false,
    options: [],
    label: "",
    contentOnly: false,
    keyAsContent: false,
    placeholder: null,
    placeholderValue: "",
    defaultContent: null,
    hasErrors: false,
    errorMessage: ""
};
export default Select;
