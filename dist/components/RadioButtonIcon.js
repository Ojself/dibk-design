"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../functions/theme");

var _RadioButtonIconModule = _interopRequireDefault(require("./RadioButtonIcon.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RadioButtonIcon = function RadioButtonIcon(props) {
  var inlineStyle = {
    height: props.size,
    width: props.size
  };

  if (props.theme && props.checked) {
    var _objectSpread2;

    inlineStyle = _objectSpread(_objectSpread({}, inlineStyle), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, !props.hasErrors && "background", (0, _theme.getThemePaletteBackgroundColor)(props.theme, "primary")), _defineProperty(_objectSpread2, !props.hasErrors && "boxShadow", "0 0 0 1px ".concat((0, _theme.getThemePaletteBackgroundColor)(props.theme, "primary"))), _objectSpread2));
  }

  var radioButtonIconProps = {
    className: "".concat(_RadioButtonIconModule.default.radioButtonIcon, " ").concat(props.checked ? _RadioButtonIconModule.default.checked : "", " ").concat(props.disabled ? _RadioButtonIconModule.default.disabled : "", " ").concat(props.hasErrors ? _RadioButtonIconModule.default.hasErrors : ""),
    style: inlineStyle
  };
  return _react.default.createElement("span", radioButtonIconProps);
};

RadioButtonIcon.propTypes = {
  size: _propTypes.default.string,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  theme: _propTypes.default.object,
  hasErrors: _propTypes.default.bool
};
RadioButtonIcon.defaultProps = {
  size: "10px",
  checked: false,
  disabled: false,
  hasErrors: false
};
var _default = RadioButtonIcon;
exports.default = _default;