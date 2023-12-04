"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Label = _interopRequireDefault(require("./Label"));
var _ErrorMessage = _interopRequireDefault(require("./ErrorMessage"));
var _CheckBoxList = _interopRequireDefault(require("./CheckBoxList"));
var _CheckBoxListItem = _interopRequireDefault(require("./CheckBoxListItem"));
var _theme = require("../functions/theme");
var _generators = require("../functions/generators");
var _helpers = require("../functions/helpers");
var _asterisk = _interopRequireDefault(require("../assets/svg/asterisk.svg?url"));
var _SelectModule = _interopRequireDefault(require("./Select.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Select = props => {
  const [showDropdownList, setShowDropdownList] = (0, _react.useState)(false);
  const dropdownRef = (0, _react.useRef)();
  const wrapperRef = (0, _react.useCallback)(element => {
    if (!!element) {
      (0, _helpers.addFocusTrapInsideElement)(element);
    }
  }, []);
  const hideDropdownList = () => {
    setShowDropdownList(false);
  };
  (0, _react.useEffect)(() => {
    const keyDownFunction = event => {
      switch (event.keyCode) {
        case 27:
          hideDropdownList();
          break;
        default:
          return null;
      }
    };
    const handleClickOutside = event => {
      if (dropdownRef !== null && dropdownRef !== void 0 && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        hideDropdownList();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", keyDownFunction, false);
  }, [props, wrapperRef]);
  const getThemeErrorInputStyle = theme => {
    return {
      boxShadow: "0 0 3px ".concat((0, _theme.getThemePaletteBackgroundColor)(theme, "warning")),
      borderColor: (0, _theme.getThemePaletteBackgroundColor)(theme, "warning")
    };
  };
  const getThemeArrowStyle = theme => {
    return {
      borderTopColor: (0, _theme.getThemePaletteBackgroundColor)(theme, "primary")
    };
  };
  const getKeyByValue = (value, options) => {
    const selectedOption = options && options.length ? options.find(option => {
      if (typeof option === "object") {
        return option.value === value;
      } else {
        return option === value;
      }
    }) : null;
    if (selectedOption && selectedOption.key) {
      return selectedOption.key;
    } else if (selectedOption && selectedOption.value) {
      return selectedOption.value;
    } else {
      return selectedOption;
    }
  };
  const createOptionObject = option => {
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
  const renderSelectedValues = (options, selectElementProps) => {
    const selectedValues = selectElementProps.defaultValue || selectElementProps.value;
    return selectedValues !== null && selectedValues !== void 0 && selectedValues.length ? selectedValues.map(value => {
      const keyForValue = getKeyByValue(value, options);
      return keyForValue;
    }).join(", ") : null;
  };
  const renderCheckBoxElements = (options, selectElementProps) => {
    return options.map((option, index) => {
      let optionObject = createOptionObject(option);
      const selectedValues = selectElementProps.defaultValue || selectElementProps.value;
      const isSelected = selectedValues && selectedValues.length && selectedValues.includes(optionObject.value);
      return _react.default.createElement(_CheckBoxListItem.default, {
        key: index,
        id: "".concat(props.id, "-").concat(index),
        value: optionObject.value,
        checked: isSelected,
        onChange: () => selectElementProps.onChange(optionObject.value),
        theme: props.theme
      }, optionObject.key);
    });
  };
  const renderOptionElements = options => {
    return options.map((option, key) => {
      let optionObject = createOptionObject(option);
      return _react.default.createElement("option", {
        value: optionObject.value,
        key: key
      }, optionObject.key);
    });
  };
  const renderPlaceholderOption = (placeholder, placeholderValue) => {
    return placeholder ? _react.default.createElement("option", {
      value: placeholderValue || "",
      disabled: true
    }, placeholder) : "";
  };
  const getErrorElementId = () => {
    return "".concat(props.id, "-errorMessage");
  };
  if (props.contentOnly) {
    const value = props.defaultValue ? props.defaultValue : props.value || null;
    return _react.default.createElement("div", {
      className: _SelectModule.default.select
    }, _react.default.createElement(_Label.default, {
      htmlFor: props.id
    }, props.label), _react.default.createElement("span", null, value ? props.keyAsContent ? getKeyByValue(value, props.options) : value : props.defaultContent));
  } else {
    var _props$width, _props$errorMessage, _props$ariaDescribed, _props$width2;
    const defaultValue = !props.value && props.defaultValue ? props.defaultValue : false;
    const styleRules = {
      ...(props.hasErrors ? getThemeErrorInputStyle(props.theme) : null),
      ...(((_props$width = props.width) === null || _props$width === void 0 ? void 0 : _props$width.length) && {
        maxWidth: props.width
      })
    };
    const className = (0, _helpers.classNameArrayToClassNameString)([props.hasErrors && _SelectModule.default.hasErrors, props.multiple && _SelectModule.default.multiple]);
    const selectElementProps = {
      name: props.name,
      multiple: props.multiple,
      required: props.required,
      disabled: props.disabled,
      [defaultValue ? "defaultValue" : "value"]: defaultValue || props.value || "",
      onChange: props.onChange,
      id: props.id,
      role: props.role,
      key: "".concat(props.id, "-").concat((0, _generators.generateRandomString)(6)),
      className,
      "aria-describedby": props.hasErrors && !!((_props$errorMessage = props.errorMessage) !== null && _props$errorMessage !== void 0 && _props$errorMessage.length) ? getErrorElementId() : !!((_props$ariaDescribed = props["aria-describedby"]) !== null && _props$ariaDescribed !== void 0 && _props$ariaDescribed.length) ? props["aria-describedby"] : null,
      "aria-invalid": props.hasErrors ? "true" : null,
      "data-transaction-name": props["data-transaction-name"],
      style: styleRules
    };
    return _react.default.createElement("div", {
      className: _SelectModule.default.select
    }, _react.default.createElement(_Label.default, {
      htmlFor: props.id
    }, props.label, props.required && _react.default.createElement("img", {
      src: _asterisk.default,
      alt: "",
      className: _SelectModule.default.requiredSymbol
    })), _react.default.createElement("div", {
      className: _SelectModule.default.selectContainer,
      style: {
        ...(((_props$width2 = props.width) === null || _props$width2 === void 0 ? void 0 : _props$width2.length) && {
          maxWidth: props.width
        })
      }
    }, _react.default.createElement("span", {
      className: _SelectModule.default.selectListArrow,
      style: getThemeArrowStyle(props.theme)
    }), props.multiple ? _react.default.createElement("div", {
      ref: dropdownRef
    }, _react.default.createElement("div", {
      onClick: () => {
        setShowDropdownList(!showDropdownList);
      },
      className: _SelectModule.default.multipleSelectElement
    }, renderSelectedValues(props.options, selectElementProps)), showDropdownList ? _react.default.createElement("div", {
      className: _SelectModule.default.multipleSelectDropdown
    }, _react.default.createElement(_CheckBoxList.default, {
      compact: true
    }, renderCheckBoxElements(props.options, selectElementProps))) : null) : _react.default.createElement("select", selectElementProps, renderPlaceholderOption(props.placeholder, props.placeholderValue), renderOptionElements(props.options))), _react.default.createElement(_ErrorMessage.default, {
      id: getErrorElementId(),
      content: props.errorMessage,
      theme: props.theme
    }));
  }
};
Select.propTypes = {
  id: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  multiple: _propTypes.default.bool,
  options: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]), _propTypes.default.shape({
    key: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
  })])),
  width: _propTypes.default.string,
  value: _propTypes.default.any,
  defaultValue: _propTypes.default.any,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  contentOnly: _propTypes.default.bool,
  keyAsContent: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  placeholderValue: _propTypes.default.string,
  defaultContent: _propTypes.default.string,
  "aria-describedby": _propTypes.default.string,
  hasErrors: _propTypes.default.bool,
  errorMessage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  "data-transaction-name": _propTypes.default.string,
  theme: _propTypes.default.object
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
var _default = exports.default = Select;