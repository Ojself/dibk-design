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

var _theme = require("../functions/theme");

var _generators = require("../functions/generators");

var _InputFieldModule = _interopRequireDefault(require("./InputField.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputField = function InputField(props) {
  var _props$width;

  var getThemeErrorInputStyle = function getThemeErrorInputStyle(theme) {
    return {
      boxShadow: "0 0 3px ".concat((0, _theme.getThemePaletteBackgroundColor)(theme, "warning")),
      borderColor: (0, _theme.getThemePaletteBackgroundColor)(theme, "warning")
    };
  };

  var formatDate = function formatDate(inputDate) {
    if (!inputDate) {
      return null;
    }

    var date = new Date(inputDate);
    var year = date.getFullYear();
    var month = date.getMonth() + 1 < 10 ? "0".concat(date.getMonth() + 1) : date.getMonth() + 1;
    var day = date.getDate() < 10 ? "0".concat(date.getDate()) : date.getDate();
    return "".concat(day, ".").concat(month, ".").concat(year);
  };

  var renderValueAsText = function renderValueAsText(value, defaultContent) {
    return props.type === "date" ? value ? formatDate(value) : defaultContent : value ? value : defaultContent;
  };

  var getInputElementProps = function getInputElementProps(defaultValue, defaultKey, styleRules) {
    var _ref;

    return _ref = {
      name: props.name,
      readOnly: props.readOnly,
      disabled: props.disabled,
      required: props.required,
      type: props.type,
      role: props.role,
      id: props.id,
      key: defaultKey || "".concat(props.id, "-").concat((0, _generators.generateRandomString)(6)),
      min: props.min || null,
      max: props.max || null,
      onChange: props.onChange,
      onBlur: props.onBlur
    }, _defineProperty(_ref, defaultValue ? "defaultValue" : "value", defaultValue || props.value), _defineProperty(_ref, "placeholder", props.placeholder || null), _defineProperty(_ref, "className", props.hasErrors ? _InputFieldModule.default.hasErrors : null), _defineProperty(_ref, "aria-required", props.mandatory), _defineProperty(_ref, "aria-describedby", props["aria-describedby"] || null), _defineProperty(_ref, "style", styleRules), _ref;
  };

  var defaultValue = props.defaultValue ? props.defaultValue : props.value || null;
  var defaultKey = props.elementKey || null;

  var styleRules = _objectSpread(_objectSpread({}, props.hasErrors ? getThemeErrorInputStyle(props.theme) : null), ((_props$width = props.width) === null || _props$width === void 0 ? void 0 : _props$width.length) && {
    maxWidth: props.width
  });

  return _react.default.createElement("div", {
    className: "".concat(_InputFieldModule.default.inputField, " ").concat(_InputFieldModule.default[props.type])
  }, _react.default.createElement(_Label.default, {
    htmlFor: props.id
  }, props.label, props.type === "file" ? _react.default.createElement("div", {
    className: _InputFieldModule.default.fileInputContainer
  }, _react.default.createElement("span", {
    className: _InputFieldModule.default.input
  }, props.selectedFileName), props.buttonContent ? _react.default.createElement(_Button.default, {
    color: props.buttonColor,
    onClick: function onClick() {
      document.getElementById(props.id).click();
    },
    content: props.buttonContent,
    type: "button",
    theme: props.theme
  }) : null) : null), !props.contentOnly ? _react.default.createElement("input", getInputElementProps(defaultValue, defaultKey, styleRules)) : _react.default.createElement("span", null, renderValueAsText(props.value || props.defaultValue, props.defaultContent)), _react.default.createElement(_ErrorMessage.default, {
    content: props.errorMessage,
    theme: props.theme
  }));
};

InputField.propTypes = {
  id: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onBlur: _propTypes.default.func,
  name: _propTypes.default.string,
  type: _propTypes.default.string,
  width: _propTypes.default.string,
  value: _propTypes.default.any,
  defaultValue: _propTypes.default.any,
  elementKey: _propTypes.default.string,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  contentOnly: _propTypes.default.bool,
  buttonColor: _propTypes.default.string,
  buttonContent: _propTypes.default.string,
  selectedFileName: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  defaultContent: _propTypes.default.string,
  hasErrors: _propTypes.default.bool,
  errorMessage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  mandatory: _propTypes.default.bool,
  theme: _propTypes.default.object
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
  onChange: function onChange() {
    return false;
  }
};
var _default = InputField;
exports.default = _default;