"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Label = _interopRequireDefault(require("./Label"));
var _ErrorMessage = _interopRequireDefault(require("./ErrorMessage"));
var _generators = require("../functions/generators");
var _asterisk = _interopRequireDefault(require("../assets/svg/asterisk.svg?url"));
var _TextareaModule = _interopRequireDefault(require("./Textarea.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Textarea = props => {
  const renderValueAsText = (value, defaultContent) => {
    return value ? value : defaultContent;
  };
  const getErrorElementId = () => {
    return `${props.id}-errorMessage`;
  };
  const renderInputField = () => {
    const defaultValue = !props.value?.length && props.defaultValue?.length ? props.defaultValue : false;
    const defaultKey = props.elementKey || null;
    const styleRules = {
      ...(props.width?.length && {
        maxWidth: props.width
      }),
      ...(props.resize?.length && {
        resize: props.resize
      })
    };
    const textareaElementProps = {
      name: props.name,
      readOnly: props.readOnly,
      disabled: props.disabled,
      required: props.required,
      type: props.type,
      id: props.id,
      key: defaultKey || `${props.id}-${(0, _generators.generateRandomString)(6)}`,
      onChange: props.onChange,
      onBlur: props.onBlur,
      [defaultValue ? "defaultValue" : "value"]: defaultValue || props.value,
      placeholder: props.placeholder,
      rows: props.rows,
      className: props.hasErrors ? _TextareaModule.default.hasErrors : "",
      "aria-describedby": props.hasErrors && !!props.errorMessage?.length ? getErrorElementId() : !!props["aria-describedby"]?.length ? props["aria-describedby"] : null,
      "aria-invalid": props.hasErrors ? "true" : null,
      style: styleRules
    };
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
    content: props.errorMessage
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
  errorMessage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))])
};
Textarea.defaultProps = {
  onChange: () => {
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