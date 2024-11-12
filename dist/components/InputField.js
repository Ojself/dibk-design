"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Button = _interopRequireDefault(require("./Button"));
var _Label = _interopRequireDefault(require("./Label"));
var _ErrorMessage = _interopRequireDefault(require("./ErrorMessage"));
var _generators = require("../functions/generators");
var _helpers = require("../functions/helpers");
var _asterisk = _interopRequireDefault(require("../assets/svg/asterisk.svg?url"));
var _InputFieldModule = _interopRequireDefault(require("./InputField.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const InputField = props => {
  const formatDate = inputDate => {
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
    return props.type === "date" ? value ? formatDate(value) : defaultContent : value ? value : defaultContent;
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
      key: defaultKey || `${props.id}-${(0, _generators.generateRandomString)(6)}`,
      min: props.min || null,
      max: props.max || null,
      onChange: props.onChange,
      onBlur: props.onBlur,
      [defaultValue ? "defaultValue" : "value"]: defaultValue || props.value,
      placeholder: props.placeholder || null,
      className: props.hasErrors ? _InputFieldModule.default.hasErrors : null,
      "aria-describedby": props.hasErrors && !!props.errorMessage?.length ? getErrorElementId() : !!props["aria-describedby"]?.length ? props["aria-describedby"] : null,
      "aria-invalid": props.hasErrors ? "true" : null,
      "aria-autocomplete": props["aria-autocomplete"] || null,
      style: styleRules
    };
  };
  const defaultValue = props.defaultValue ? props.defaultValue : props.value || null;
  const defaultKey = props.elementKey || null;
  const styleRules = {
    ...(props.width?.length && {
      maxWidth: props.width
    })
  };
  return _react.default.createElement("div", {
    className: (0, _helpers.classNameArrayToClassNameString)([_InputFieldModule.default.inputField, _InputFieldModule.default[props.type], props.noMargin && _InputFieldModule.default.noMargin])
  }, _react.default.createElement(_Label.default, {
    htmlFor: props.id
  }, props.label, props.required && _react.default.createElement("img", {
    src: _asterisk.default,
    alt: "",
    className: _InputFieldModule.default.requiredSymbol
  }), props.type === "file" ? _react.default.createElement("div", {
    className: _InputFieldModule.default.fileInputContainer
  }, _react.default.createElement("span", {
    className: _InputFieldModule.default.input
  }, props.selectedFileName), props.buttonContent ? _react.default.createElement(_Button.default, {
    color: props.buttonColor,
    onClick: () => {
      document.getElementById(props.id).click();
    },
    content: props.buttonContent,
    type: "button"
  }) : null) : null), !props.contentOnly ? _react.default.createElement("input", getInputElementProps(defaultValue, defaultKey, styleRules)) : _react.default.createElement("span", null, renderValueAsText(props.value || props.defaultValue, props.defaultContent)), _react.default.createElement(_ErrorMessage.default, {
    id: getErrorElementId(),
    content: props.errorMessage
  }));
};
InputField.propTypes = {
  id: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onBlur: _propTypes.default.func,
  name: _propTypes.default.string,
  type: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  width: _propTypes.default.string,
  value: _propTypes.default.any,
  defaultValue: _propTypes.default.any,
  elementKey: _propTypes.default.string,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  contentOnly: _propTypes.default.bool,
  buttonColor: _propTypes.default.oneOf(["primary", "secondary"]),
  buttonContent: _propTypes.default.string,
  selectedFileName: _propTypes.default.string,
  dateFormat: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  defaultContent: _propTypes.default.string,
  "aria-describedby": _propTypes.default.string,
  "aria-autocomplete": _propTypes.default.oneOf(["none", "inline", "list", "both"]),
  hasErrors: _propTypes.default.bool,
  errorMessage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  noMargin: _propTypes.default.bool
};
InputField.defaultProps = {
  onChange: () => {
    return false;
  },
  name: "",
  type: "text",
  disabled: false,
  required: false,
  label: "",
  contentOnly: false,
  buttonColor: "primary",
  dateFormat: "d. MMMM, yyyy",
  placeholder: "",
  defaultContent: "",
  hasErrors: false,
  errorMessage: "",
  noMargin: false
};
var _default = exports.default = InputField;