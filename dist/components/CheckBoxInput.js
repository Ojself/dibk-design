"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _CheckBoxIcon = _interopRequireDefault(require("./CheckBoxIcon"));
var _asterisk = _interopRequireDefault(require("../assets/svg/asterisk.svg?url"));
var _CheckBoxInputModule = _interopRequireDefault(require("./CheckBoxInput.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CheckBoxInput = props => {
  const labelProps = {
    className: "".concat(_CheckBoxInputModule.default.checkBoxInput, " ").concat(props.contentOnly ? _CheckBoxInputModule.default.contentOnly : "", " ").concat(props.disabled ? _CheckBoxInputModule.default.disabled : "", " ").concat(props.hasErrors ? _CheckBoxInputModule.default.hasErrors : ""),
    htmlFor: props.id
  };
  const iconProps = {
    checked: props.checked,
    disabled: props.disabled,
    theme: props.theme,
    showBox: !props.contentOnly,
    hasErrors: props.contentOnly && props.hasErrors,
    checkmarkCharacter: props.checkmarkCharacter
  };
  const inputProps = {
    id: props.id,
    name: props.name || null,
    type: "checkbox",
    checked: props.checked,
    disabled: props.disabled,
    required: props.required || props.requiredGroup,
    onChange: props.onChange,
    tabIndex: props.tabIndex || null,
    "aria-controls": props["aria-controls"],
    "aria-invalid": props.hasErrors ? "true" : null,
    "aria-describedby": props["aria-describedby"],
    "data-transaction-name": props["data-transaction-name"]
  };
  return _react.default.createElement("label", labelProps, !props.contentOnly ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_CheckBoxIcon.default, iconProps), _react.default.createElement("input", inputProps)) : _react.default.createElement(_CheckBoxIcon.default, iconProps), _react.default.createElement("span", null, props.children, props.required && _react.default.createElement("img", {
    src: _asterisk.default,
    alt: "",
    className: _CheckBoxInputModule.default.requiredSymbol
  })));
};
CheckBoxInput.propTypes = {
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  requiredGroup: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired,
  name: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  contentOnly: _propTypes.default.bool,
  hasErrors: _propTypes.default.bool,
  theme: _propTypes.default.object,
  checkmarkCharacter: _propTypes.default.string,
  "aria-controls": _propTypes.default.string,
  "aria-describedby": _propTypes.default.string,
  "data-transaction-name": _propTypes.default.string
};
CheckBoxInput.defaultProps = {
  checked: false,
  disabled: false,
  required: false,
  requiredGroup: false,
  name: "",
  contentOnly: false,
  hasErrors: false,
  checkmarkCharacter: "✔"
};
var _default = exports.default = CheckBoxInput;