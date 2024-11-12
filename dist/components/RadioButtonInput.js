"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _RadioButtonIcon = _interopRequireDefault(require("./RadioButtonIcon"));
var _asterisk = _interopRequireDefault(require("../assets/svg/asterisk.svg?url"));
var _RadioButtonInputModule = _interopRequireDefault(require("./RadioButtonInput.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const RadioButtonInput = props => {
  const labelProps = {
    className: `${_RadioButtonInputModule.default.radioButtonInput} ${props.checked ? _RadioButtonInputModule.default.checked : ""} ${props.disabled ? _RadioButtonInputModule.default.disabled : ""} ${props.hasErrors ? _RadioButtonInputModule.default.hasErrors : ""}`,
    htmlFor: props.id
  };
  const iconProps = {
    checked: props.checked,
    disabled: props.disabled,
    hasErrors: !props.contentOnly && props.hasErrors
  };
  const inputProps = {
    id: props.id,
    name: props.name || null,
    type: "radio",
    value: props.inputValue,
    checked: props.checked,
    disabled: props.disabled,
    required: props.required || props.requiredGroup,
    onChange: props.onChange,
    tabIndex: props.tabIndex || null,
    "aria-controls": props["aria-controls"],
    "aria-invalid": props.hasErrors ? "true" : null,
    "aria-describedby": props["aria-describedby"]
  };
  return _react.default.createElement("label", labelProps, !props.contentOnly ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_RadioButtonIcon.default, iconProps), _react.default.createElement("input", inputProps)) : null, _react.default.createElement("span", {
    className: _RadioButtonInputModule.default.labelText
  }, props.children, props.required && _react.default.createElement("img", {
    src: _asterisk.default,
    alt: "",
    className: _RadioButtonInputModule.default.requiredSymbol
  })));
};
RadioButtonInput.propTypes = {
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  requiredGroup: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired,
  name: _propTypes.default.string,
  onChange: _propTypes.default.func,
  contentOnly: _propTypes.default.bool,
  hasErrors: _propTypes.default.bool,
  inputValue: _propTypes.default.string.isRequired,
  "aria-controls": _propTypes.default.string,
  "aria-describedby": _propTypes.default.string
};
RadioButtonInput.defaultProps = {
  name: "",
  checked: false,
  disabled: false,
  required: false,
  requiredGroup: false,
  contentOnly: false,
  hasErrors: false
};
var _default = exports.default = RadioButtonInput;