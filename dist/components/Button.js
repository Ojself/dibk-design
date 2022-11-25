"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _theme = require("../functions/theme");
var _helpers = require("functions/helpers");
var _ButtonModule = _interopRequireDefault(require("./Button.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Button = function Button(props) {
  var _props$href;
  var getArrowClass = function getArrowClass(arrow) {
    switch (arrow) {
      case "left":
        return _ButtonModule.default.hasArrowLeft;
      case "right":
        return _ButtonModule.default.hasArrowRight;
      default:
        return "";
    }
  };
  var getThemeStyle = function getThemeStyle(theme, color) {
    return {
      backgroundColor: (0, _theme.getThemePaletteBackgroundColor)(theme, color),
      color: (0, _theme.getThemePaletteTextColor)(theme, color),
      borderColor: (0, _theme.getThemePaletteBorderColor)(theme, color),
      borderWidth: (0, _theme.getThemePaletteBorderColor)(theme, color) ? "1px" : "0"
    };
  };
  var buttonProps = _objectSpread({}, props);
  delete buttonProps.noHover;
  delete buttonProps.rounded;
  var themeStyle = props.theme ? getThemeStyle(props.theme, props.color) : null;
  var className = (0, _helpers.classNameArrayToClassNameString)([_ButtonModule.default.button, _ButtonModule.default[props.color], _ButtonModule.default[props.size], getArrowClass(props.arrow), props.theme && _ButtonModule.default.hasTheme, props.noHover && _ButtonModule.default.noHover, props.rounded && _ButtonModule.default.rounded, props.hasErrors && _ButtonModule.default.hasErrors]);
  return (_props$href = props.href) !== null && _props$href !== void 0 && _props$href.length ? _react.default.createElement("a", _extends({}, buttonProps, {
    className: className,
    style: themeStyle
  }), props.content || props.children) : _react.default.createElement("button", _extends({}, buttonProps, {
    className: className,
    style: themeStyle
  }), props.content || props.children);
};
Button.propTypes = {
  content: _propTypes.default.string,
  color: _propTypes.default.oneOf(["default", "primary"]),
  size: _propTypes.default.oneOf(["small", "regular"]),
  arrow: _propTypes.default.oneOf(["none", "left", "right"]),
  theme: _propTypes.default.object,
  disabled: _propTypes.default.bool,
  hasErrors: _propTypes.default.bool,
  noHover: _propTypes.default.bool,
  rounded: _propTypes.default.bool,
  href: _propTypes.default.string,
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  color: "default",
  size: "regular",
  disabled: false,
  hasErrors: false,
  noHover: false,
  arrow: "none"
};
var _default = Button;
exports.default = _default;