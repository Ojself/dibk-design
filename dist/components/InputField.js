"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(0, _reactDatepicker.registerLocale)('nb', _nb.default);

var InputField = /*#__PURE__*/function (_React$Component) {
  _inherits(InputField, _React$Component);

  var _super = _createSuper(InputField);

  function InputField() {
    _classCallCheck(this, InputField);

    return _super.apply(this, arguments);
  }

  _createClass(InputField, [{
    key: "getThemeErrorInputStyle",
    value: function getThemeErrorInputStyle(theme) {
      return {
        boxShadow: "0 0 3px ".concat((0, _theme.getThemePaletteBackgroundColor)(theme, 'warning')),
        borderColor: (0, _theme.getThemePaletteBackgroundColor)(theme, 'warning')
      };
    }
  }, {
    key: "getThemeErrorMessageStyle",
    value: function getThemeErrorMessageStyle(theme) {
      return {
        color: (0, _theme.getThemePaletteBackgroundColor)(theme, 'warning')
      };
    }
  }, {
    key: "convertDateToString",
    value: function convertDateToString(date) {
      return date ? (0, _dateFns.format)(new Date(date), this.props.dateFormat, {
        locale: _nb.default
      }) : '';
    }
  }, {
    key: "renderValueAsText",
    value: function renderValueAsText(value, defaultContent) {
      return this.props.type === 'date' ? value ? this.convertDateToString(value) : defaultContent : value ? value : defaultContent;
    }
  }, {
    key: "getInputElementProps",
    value: function getInputElementProps(defaultValue, styleRules) {
      var _ref;

      return _ref = {
        name: this.props.name,
        readOnly: this.props.readOnly,
        disabled: this.props.disabled,
        type: this.props.type,
        id: this.props.id,
        key: "".concat(this.props.id).concat(defaultValue ? '-' + defaultValue : ''),
        onChange: this.props.onChange,
        onBlur: this.props.onBlur
      }, _defineProperty(_ref, defaultValue ? 'defaultValue' : 'value', defaultValue || this.props.value), _defineProperty(_ref, "placeholder", this.props.placeholder), _defineProperty(_ref, "className", this.props.hasErrors ? _InputFieldModule.default.hasErrors : ''), _defineProperty(_ref, 'aria-required', this.props.mandatory), _defineProperty(_ref, "style", styleRules), _ref;
    }
  }, {
    key: "getDatePickerElementProps",
    value: function getDatePickerElementProps(defaultValue) {
      var _this = this;

      return {
        name: this.props.name,
        readOnly: this.props.readOnly,
        disabled: this.props.disabled,
        id: this.props.id,
        key: "".concat(this.props.id).concat(defaultValue ? '-' + defaultValue : ''),
        dateFormat: this.props.dateFormat,
        locale: 'nb',
        selectsStart: this.props.selectsStart,
        selectsEnd: this.props.selectsEnd,
        startDate: this.props.startDate ? new Date(this.props.startDate) : null,
        endDate: this.props.endDate ? new Date(this.props.endDate) : null,
        minDate: this.props.minDate || null,
        maxDate: this.props.maxDate || null,
        onChange: this.props.onChange ? function (date) {
          return _this.props.onChange(date);
        } : console.log("Missing onChange handler for date picker with id: ".concat(this.props.id)),
        onBlur: this.props.onBlur ? function (date) {
          return _this.props.onBlur(date);
        } : null,
        selected: defaultValue ? new Date(defaultValue) : null,
        placeholderText: this.props.placeholder,
        className: this.props.hasErrors ? _InputFieldModule.default.hasErrors : ''
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$width,
          _this2 = this;

      var defaultValue = this.props.defaultValue ? this.props.defaultValue : this.props.value || null;

      var styleRules = _objectSpread(_objectSpread({}, this.props.hasErrors ? this.getThemeErrorInputStyle(this.props.theme) : null), ((_this$props$width = this.props.width) === null || _this$props$width === void 0 ? void 0 : _this$props$width.length) && {
        maxWidth: this.props.width
      });

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
        onClick: function onClick() {
          document.getElementById(_this2.props.id).click();
        },
        content: this.props.buttonContent,
        theme: this.props.theme
      }) : '') : ''), !this.props.contentOnly ? this.props.type === 'date' ? /*#__PURE__*/_react.default.createElement("div", {
        style: styleRules
      }, /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, this.getDatePickerElementProps(defaultValue))) : /*#__PURE__*/_react.default.createElement("input", this.getInputElementProps(defaultValue, styleRules)) : /*#__PURE__*/_react.default.createElement("span", null, this.renderValueAsText(this.props.value || this.props.defaultValue, this.props.defaultContent)), /*#__PURE__*/_react.default.createElement("span", {
        className: _InputFieldModule.default.errorMessage,
        style: this.getThemeErrorMessageStyle(this.props.theme)
      }, this.props.errorMessage ? this.props.errorMessage : ''));
    }
  }]);

  return InputField;
}(_react.default.Component);

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
  onChange: function onChange() {
    return false;
  }
};
var _default = InputField;
exports.default = _default;