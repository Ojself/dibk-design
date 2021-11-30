"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("./Button"));

var _Label = _interopRequireDefault(require("./Label"));

var _reactDatepicker = _interopRequireWildcard(require("react-datepicker"));

var _dateFns = require("date-fns");

var _nb = _interopRequireDefault(require("date-fns/locale/nb"));

var _theme = require("../functions/theme");

require("react-datepicker/dist/react-datepicker.css");

var _InputFieldModule = _interopRequireDefault(require("./InputField.module.scss"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDatepicker.registerLocale)('nb', _nb.default);

class InputField extends _react.default.Component {
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

  convertDateToString(date) {
    return date ? (0, _dateFns.format)(new Date(date), this.props.dateFormat, {
      locale: _nb.default
    }) : '';
  }

  renderValueAsText(value, defaultContent) {
    return this.props.type === 'date' ? value ? this.convertDateToString(value) : defaultContent : value ? value : defaultContent;
  }

  renderInputField() {
    var _this$props$width;

    const styleRules = { ...(this.props.hasErrors ? this.getThemeErrorInputStyle(this.props.theme) : null),
      ...(((_this$props$width = this.props.width) === null || _this$props$width === void 0 ? void 0 : _this$props$width.length) && {
        maxWidth: this.props.width
      })
    };

    if (this.props.type === 'date') {
      const value = this.props.defaultValue ? this.props.defaultValue : this.props.value || null;
      const props = {
        name: this.props.name,
        readOnly: this.props.readOnly,
        disabled: this.props.disabled,
        id: this.props.id,
        dateFormat: this.props.dateFormat,
        locale: 'nb',
        selectsStart: this.props.selectsStart,
        selectsEnd: this.props.selectsEnd,
        startDate: this.props.startDate ? new Date(this.props.startDate) : null,
        endDate: this.props.endDate ? new Date(this.props.endDate) : null,
        minDate: this.props.minDate || null,
        maxDate: this.props.maxDate || null,
        onChange: this.props.onChange ? date => this.props.onChange(date) : console.log("Missing onChange handler for date picker with id: ".concat(this.props.id)),
        onBlur: this.props.onBlur ? date => this.props.onBlur(date) : null,
        selected: value ? new Date(value) : null,
        placeholderText: this.props.placeholder,
        className: this.props.hasErrors ? _InputFieldModule.default.hasErrors : ''
      };
      return /*#__PURE__*/_react.default.createElement("div", {
        style: styleRules
      }, /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, props));
    } else {
      const defaultValue = !this.props.value && this.props.defaultValue ? this.props.defaultValue : false;
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
        className: this.props.hasErrors ? _InputFieldModule.default.hasErrors : '',
        'aria-required': this.props.mandatory,
        style: styleRules
      };
      return /*#__PURE__*/_react.default.createElement("input", props);
    }
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(_InputFieldModule.default.inputField, " ").concat(_InputFieldModule.default[this.props.type])
    }, /*#__PURE__*/_react.default.createElement(_Label.default, {
      htmlFor: this.props.id
    }, this.props.label, this.props.type === 'file' ? /*#__PURE__*/_react.default.createElement("div", {
      className: _InputFieldModule.default.fileInputContainer
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: _InputFieldModule.default.input
    }, this.props.selectedFileName), this.props.buttonContent ? /*#__PURE__*/_react.default.createElement(_Button.default, {
      color: this.props.buttonColor,
      onClick: () => {
        document.getElementById(this.props.id).click();
      },
      content: this.props.buttonContent,
      theme: this.props.theme
    }) : '') : ''), !this.props.contentOnly ? this.renderInputField() : /*#__PURE__*/_react.default.createElement("span", null, this.renderValueAsText(this.props.value || this.props.defaultValue, this.props.defaultContent)), /*#__PURE__*/_react.default.createElement("span", {
      className: _InputFieldModule.default.errorMessage,
      style: this.getThemeErrorMessageStyle(this.props.theme)
    }, this.props.errorMessage ? this.props.errorMessage : ''));
  }

}

InputField.propTypes = {
  /** Text content inside list item */
  id: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onBlur: _propTypes.default.func,
  name: _propTypes.default.string,
  type: _propTypes.default.string,
  width: _propTypes.default.string,
  value: _propTypes.default.any,
  defaultValue: _propTypes.default.any,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  contentOnly: _propTypes.default.bool,
  buttonColor: _propTypes.default.string,
  buttonContent: _propTypes.default.string,
  selectedFileName: _propTypes.default.string,
  dateFormat: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  defaultContent: _propTypes.default.string,
  hasErrors: _propTypes.default.bool,
  errorMessage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  mandatory: _propTypes.default.bool,
  theme: _propTypes.default.object
};
InputField.defaultProps = {
  name: '',
  type: 'text',
  label: '',
  contentOnly: false,
  buttonColor: 'default',
  dateFormat: 'd. MMMM, yyyy',
  placeholder: '',
  defaultContent: '',
  hasErrors: false,
  errorMessage: '',
  mandatory: false,
  onChange: () => {
    return false;
  }
};
var _default = InputField;
exports.default = _default;