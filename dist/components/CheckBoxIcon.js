"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _CheckBoxIconModule = _interopRequireDefault(require("./CheckBoxIcon.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CheckBoxIcon = props => {
  let inlineStyle = {
    height: props.size,
    width: props.size,
    fontSize: props.size
  };
  const checkBoxIconProps = {
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
var _default = exports.default = CheckBoxIcon;