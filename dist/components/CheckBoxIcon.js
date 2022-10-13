"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _theme = require("../functions/theme");
var _CheckBoxIconModule = _interopRequireDefault(require("./CheckBoxIcon.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var CheckBoxIcon = function CheckBoxIcon(props) {
  var inlineStyle = {
    height: props.size,
    width: props.size,
    fontSize: props.size
  };
  if (props.theme && props.checked) {
    var _objectSpread2;
    inlineStyle = _objectSpread(_objectSpread({}, inlineStyle), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, !props.hasErrors && "color", (0, _theme.getThemePaletteBackgroundColor)(props.theme, "primary")), _defineProperty(_objectSpread2, !props.hasErrors && props.showBox && "boxShadow", "0 0 0 1px ".concat((0, _theme.getThemePaletteBackgroundColor)(props.theme, "primary"))), _objectSpread2));
  }
  var checkBoxIconProps = {
    className: "".concat(_CheckBoxIconModule.default.checkBoxIcon, " ").concat(props.checked ? _CheckBoxIconModule.default.checked : "", " ").concat(props.disabled ? _CheckBoxIconModule.default.disabled : "", " ").concat(props.showBox ? _CheckBoxIconModule.default.showBox : "", " ").concat(props.hasErrors ? _CheckBoxIconModule.default.hasErrors : ""),
    style: inlineStyle
  };
  return _react.default.createElement("span", checkBoxIconProps, _react.default.createElement("span", {
    "aria-hidden": true,
    className: _CheckBoxIconModule.default.checkmark
  }, props.checked ? props.checkmarkCharacter : ""));
};
CheckBoxIcon.propTypes = {
  size: _propTypes.default.string,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  showBox: _propTypes.default.bool,
  theme: _propTypes.default.object,
  hasErrors: _propTypes.default.bool,
  checkmarkCharacter: _propTypes.default.string
};
CheckBoxIcon.defaultProps = {
  size: "20px",
  checked: false,
  disabled: false,
  showBox: true,
  hasErrors: false,
  checkmarkCharacter: "✔"
};
var _default = CheckBoxIcon;
exports.default = _default;