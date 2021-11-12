"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Label = _interopRequireDefault(require("./Label"));

var _theme = require("../functions/theme");

var _TextareaModule = _interopRequireDefault(require("./Textarea.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Textarea extends _react.default.Component {
  getThemeErrorInputStyle(theme) {
    return {
      boxShadow: "0 0 3px ".concat((0, _theme.getThemePaletteBackgroundColor)(theme, 'warning')),
      borderColor: (0, _theme.getThemePaletteBackgroundColor)(theme, 'warning')
    };
  }

  getThemeErrorMessageStyle(theme) {
    return {
      color: (0, _theme.getThemePaletteBackgroundColor)(theme, 'warning')
    };
  }

  renderValueAsText(value, defaultContent) {
    return value ? value : defaultContent;
  }

  renderInputField() {
    var _this$props$width, _this$props$resize;

    const defaultValue = !this.props.value && this.props.defaultValue ? this.props.defaultValue : false;
    const styleRules = { ...(this.props.hasErrors ? this.getThemeErrorInputStyle(this.props.theme) : null),
      ...(((_this$props$width = this.props.width) === null || _this$props$width === void 0 ? void 0 : _this$props$width.length) && {
        maxWidth: this.props.width
      }),
      ...(((_this$props$resize = this.props.resize) === null || _this$props$resize === void 0 ? void 0 : _this$props$resize.length) && {
        resize: this.props.resize
      })
    };
    const props = {
      name: this.props.name,
      readOnly: this.props.readOnly,
      disabled: this.props.disabled,
      type: this.props.type,
      id: this.props.id,
      onChange: this.props.onChange,
      onBlur: this.props.onBlur,
      [defaultValue ? 'defaultValue' : 'value']: defaultValue || this.props.value,
      placeholder: this.props.placeholder,
      rows: this.props.rows,
      className: this.props.hasErrors ? _TextareaModule.default.hasErrors : '',
      'aria-required': this.props.mandatory,
      style: styleRules
    };
    return /*#__PURE__*/_react.default.createElement("textarea", props);
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _TextareaModule.default.textarea
    }, /*#__PURE__*/_react.default.createElement(_Label.default, {
      htmlFor: this.props.id
    }, this.props.label), !this.props.contentOnly ? this.renderInputField() : /*#__PURE__*/_react.default.createElement("span", null, this.renderValueAsText(this.props.value || this.props.defaultValue, this.props.defaultContent)), /*#__PURE__*/_react.default.createElement("span", {
      className: _TextareaModule.default.errorMessage,
      style: this.getThemeErrorMessageStyle(this.props.theme)
    }, this.props.errorMessage ? this.props.errorMessage : ''));
  }

}

Textarea.propTypes = {
  /** Text content inside list item */
  id: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onBlur: _propTypes.default.func,
  name: _propTypes.default.string,
  type: _propTypes.default.string,
  width: _propTypes.default.string,
  resize: _propTypes.default.string,
  value: _propTypes.default.string,
  defaultValue: _propTypes.default.string,
  rows: _propTypes.default.string,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  contentOnly: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  defaultContent: _propTypes.default.string,
  hasErrors: _propTypes.default.bool,
  errorMessage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  mandatory: _propTypes.default.bool,
  theme: _propTypes.default.object
};
Textarea.defaultProps = {
  name: '',
  type: 'text',
  label: '',
  contentOnly: false,
  placeholder: '',
  defaultContent: '',
  hasErrors: false,
  errorMessage: '',
  mandatory: false,
  onChange: () => {
    return false;
  }
};
var _default = Textarea;
exports.default = _default;