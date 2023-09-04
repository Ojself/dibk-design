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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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