"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Label = _interopRequireDefault(require("./Label"));
var _ErrorMessage = _interopRequireDefault(require("./ErrorMessage"));
var _theme = require("../functions/theme");
var _generators = require("../functions/generators");
var _asterisk = _interopRequireDefault(require("../assets/svg/asterisk.svg?url"));
var _TextareaModule = _interopRequireDefault(require("./Textarea.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Textarea = function Textarea(props) {
  var getThemeErrorInputStyle = function getThemeErrorInputStyle(theme) {
    return {
      boxShadow: "0 0 3px ".concat((0, _theme.getThemePaletteBackgroundColor)(theme, "warning")),
      borderColor: (0, _theme.getThemePaletteBackgroundColor)(theme, "warning")
    };
  };
  var renderValueAsText = function renderValueAsText(value, defaultContent) {
    return value ? value : defaultContent;
  };
  var getErrorElementId = function getErrorElementId() {
    return "".concat(props.id, "-errorMessage");
  };
  var renderInputField = function renderInputField() {
    var _props$value, _props$defaultValue, _props$width, _props$resize, _props$errorMessage, _props$ariaDescribed, _textareaElementProps;
    var defaultValue = !((_props$value = props.value) !== null && _props$value !== void 0 && _props$value.length) && (_props$defaultValue = props.defaultValue) !== null && _props$defaultValue !== void 0 && _props$defaultValue.length ? props.defaultValue : false;
    var defaultKey = props.elementKey || null;
    var styleRules = _objectSpread(_objectSpread(_objectSpread({}, props.hasErrors ? getThemeErrorInputStyle(props.theme) : null), ((_props$width = props.width) === null || _props$width === void 0 ? void 0 : _props$width.length) && {
      maxWidth: props.width
    }), ((_props$resize = props.resize) === null || _props$resize === void 0 ? void 0 : _props$resize.length) && {
      resize: props.resize
    });
    var textareaElementProps = (_textareaElementProps = {
      name: props.name,
      readOnly: props.readOnly,
      disabled: props.disabled,
      required: props.required,
      type: props.type,
      id: props.id,
      key: defaultKey || "".concat(props.id, "-").concat((0, _generators.generateRandomString)(6)),
      onChange: props.onChange,
      onBlur: props.onBlur
    }, _defineProperty(_textareaElementProps, defaultValue ? "defaultValue" : "value", defaultValue || props.value), _defineProperty(_textareaElementProps, "placeholder", props.placeholder), _defineProperty(_textareaElementProps, "rows", props.rows), _defineProperty(_textareaElementProps, "className", props.hasErrors ? _TextareaModule.default.hasErrors : ""), _defineProperty(_textareaElementProps, "aria-describedby", props.hasErrors && !!((_props$errorMessage = props.errorMessage) !== null && _props$errorMessage !== void 0 && _props$errorMessage.length) ? getErrorElementId() : !!((_props$ariaDescribed = props["aria-describedby"]) !== null && _props$ariaDescribed !== void 0 && _props$ariaDescribed.length) ? props["aria-describedby"] : null), _defineProperty(_textareaElementProps, "aria-invalid", props.hasErrors ? "true" : null), _defineProperty(_textareaElementProps, "style", styleRules), _textareaElementProps);
    return _react.default.createElement("textarea", textareaElementProps);
  };
  return _react.default.createElement("div", {
    className: _TextareaModule.default.textarea
  }, _react.default.createElement(_Label.default, {
    htmlFor: props.id
  }, props.label, props.required && _react.default.createElement("img", {
    src: _asterisk.default,
    alt: "",
    className: _TextareaModule.default.requiredSymbol
  })), !props.contentOnly ? renderInputField() : _react.default.createElement("span", null, renderValueAsText(props.value || props.defaultValue, props.defaultContent)), _react.default.createElement(_ErrorMessage.default, {
    id: getErrorElementId(),
    content: props.errorMessage,
    theme: props.theme
  }));
};
Textarea.propTypes = {
  id: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onBlur: _propTypes.default.func,
  name: _propTypes.default.string,
  type: _propTypes.default.string,
  required: _propTypes.default.bool,
  width: _propTypes.default.string,
  resize: _propTypes.default.oneOf(["both", "horizontal", "vertical", "none"]),
  value: _propTypes.default.string,
  defaultValue: _propTypes.default.string,
  elementKey: _propTypes.default.string,
  rows: _propTypes.default.string,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  contentOnly: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  defaultContent: _propTypes.default.string,
  "aria-describedby": _propTypes.default.string,
  hasErrors: _propTypes.default.bool,
  errorMessage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  theme: _propTypes.default.object
};
Textarea.defaultProps = {
  onChange: function onChange() {
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
var _default = exports.default = Textarea;