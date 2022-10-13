"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _CheckBoxIcon = _interopRequireDefault(require("./CheckBoxIcon"));
var _CheckBoxInputModule = _interopRequireDefault(require("./CheckBoxInput.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckBoxInput = function CheckBoxInput(props) {
  var labelProps = {
    className: "".concat(_CheckBoxInputModule.default.checkBoxInput, " ").concat(props.contentOnly ? _CheckBoxInputModule.default.contentOnly : "", " ").concat(props.disabled ? _CheckBoxInputModule.default.disabled : "", " ").concat(props.hasErrors ? _CheckBoxInputModule.default.hasErrors : ""),
    htmlFor: props.id
  };
  var iconProps = {
    checked: props.checked,
    disabled: props.disabled,
    theme: props.theme,
    showBox: !props.contentOnly,
    hasErrors: props.contentOnly && props.hasErrors,
    checkmarkCharacter: props.checkmarkCharacter
  };
  var inputProps = {
    id: props.id,
    name: props.name || null,
    type: "checkbox",
    checked: props.checked,
    disabled: props.disabled,
    onChange: props.onChange,
    tabIndex: props.tabIndex || null,
    "aria-controls": props["aria-controls"]
  };
  return _react.default.createElement("label", labelProps, !props.contentOnly ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_CheckBoxIcon.default, iconProps), _react.default.createElement("input", inputProps)) : _react.default.createElement(_CheckBoxIcon.default, iconProps), _react.default.createElement("span", null, props.children));
};
CheckBoxInput.propTypes = {
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired,
  name: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  contentOnly: _propTypes.default.bool,
  hasErrors: _propTypes.default.bool,
  theme: _propTypes.default.object,
  checkmarkCharacter: _propTypes.default.string,
  "aria-controls": _propTypes.default.string
};
CheckBoxInput.defaultProps = {
  checked: false,
  disabled: false,
  name: "",
  contentOnly: false,
  hasErrors: false,
  checkmarkCharacter: "✔"
};
var _default = CheckBoxInput;
exports.default = _default;