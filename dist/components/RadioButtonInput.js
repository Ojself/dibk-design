"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _RadioButtonIcon = _interopRequireDefault(require("./RadioButtonIcon"));
var _RadioButtonInputModule = _interopRequireDefault(require("./RadioButtonInput.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButtonInput = function RadioButtonInput(props) {
  var labelProps = {
    className: "".concat(_RadioButtonInputModule.default.radioButtonInput, " ").concat(props.checked ? _RadioButtonInputModule.default.checked : "", " ").concat(props.disabled ? _RadioButtonInputModule.default.disabled : "", " ").concat(props.hasErrors ? _RadioButtonInputModule.default.hasErrors : ""),
    htmlFor: props.id
  };
  var iconProps = {
    checked: props.checked,
    disabled: props.disabled,
    theme: props.theme,
    hasErrors: !props.contentOnly && props.hasErrors
  };
  var inputProps = {
    id: props.id,
    name: props.name || null,
    type: "radio",
    value: props.inputValue,
    checked: props.checked,
    disabled: props.disabled,
    onChange: props.onChange,
    tabIndex: props.tabIndex || null,
    "aria-controls": props["aria-controls"]
  };
  return _react.default.createElement("label", labelProps, !props.contentOnly ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_RadioButtonIcon.default, iconProps), _react.default.createElement("input", inputProps)) : null, _react.default.createElement("span", null, props.children));
};
RadioButtonInput.propTypes = {
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired,
  name: _propTypes.default.string,
  onChange: _propTypes.default.func,
  contentOnly: _propTypes.default.bool,
  hasErrors: _propTypes.default.bool,
  theme: _propTypes.default.object,
  inputValue: _propTypes.default.string.isRequired,
  "aria-controls": _propTypes.default.string
};
RadioButtonInput.defaultProps = {
  name: "",
  checked: false,
  disabled: false,
  contentOnly: false,
  hasErrors: false
};
var _default = RadioButtonInput;
exports.default = _default;