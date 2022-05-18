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

var _ErrorMessage = _interopRequireDefault(require("./ErrorMessage"));

var _theme = require("../functions/theme");

var _generators = require("../functions/generators");

var _InputFieldModule = _interopRequireDefault(require("./InputField.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputField = /*#__PURE__*/function (_React$Component) {
  _inherits(InputField, _React$Component);

  var _super = _createSuper(InputField);

  function InputField() {
    var _this;

    _classCallCheck(this, InputField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "formatDate", function (inputDate) {
      if (!inputDate) {
        return null;
      }

      var date = new Date(inputDate);
      var year = date.getFullYear();
      var month = date.getMonth() + 1 < 10 ? "0".concat(date.getMonth() + 1) : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0".concat(date.getDate()) : date.getDate();
      return "".concat(day, ".").concat(month, ".").concat(year);
    });

    return _this;
  }

  _createClass(InputField, [{
    key: "getThemeErrorInputStyle",
    value: function getThemeErrorInputStyle(theme) {
      return {
        boxShadow: "0 0 3px ".concat((0, _theme.getThemePaletteBackgroundColor)(theme, "warning")),
        borderColor: (0, _theme.getThemePaletteBackgroundColor)(theme, "warning")
      };
    }
  }, {
    key: "renderValueAsText",
    value: function renderValueAsText(value, defaultContent) {
      return this.props.type === "date" ? value ? this.formatDate(value) : defaultContent : value ? value : defaultContent;
    }
  }, {
    key: "getInputElementProps",
    value: function getInputElementProps(defaultValue, defaultKey, styleRules) {
      var _ref;

      return _ref = {
        name: this.props.name,
        readOnly: this.props.readOnly,
        disabled: this.props.disabled,
        type: this.props.type,
        role: this.props.role,
        id: this.props.id,
        key: defaultKey || "".concat(this.props.id, "-").concat((0, _generators.generateRandomString)(6)),
        min: this.props.min || null,
        max: this.props.max || null,
        onChange: this.props.onChange,
        onBlur: this.props.onBlur
      }, _defineProperty(_ref, defaultValue ? "defaultValue" : "value", defaultValue || this.props.value), _defineProperty(_ref, "placeholder", this.props.placeholder || null), _defineProperty(_ref, "className", this.props.hasErrors ? _InputFieldModule.default.hasErrors : null), _defineProperty(_ref, "aria-required", this.props.mandatory), _defineProperty(_ref, "aria-describedby", this.props["aria-describedby"] || null), _defineProperty(_ref, "style", styleRules), _ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$width,
          _this2 = this;

      var defaultValue = this.props.defaultValue ? this.props.defaultValue : this.props.value || null;
      var defaultKey = this.props.elementKey || null;

      var styleRules = _objectSpread(_objectSpread({}, this.props.hasErrors ? this.getThemeErrorInputStyle(this.props.theme) : null), ((_this$props$width = this.props.width) === null || _this$props$width === void 0 ? void 0 : _this$props$width.length) && {
        maxWidth: this.props.width
      });

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_InputFieldModule.default.inputField, " ").concat(_InputFieldModule.default[this.props.type])
      }, /*#__PURE__*/_react.default.createElement(_Label.default, {
        htmlFor: this.props.id
      }, this.props.label, this.props.type === "file" ? /*#__PURE__*/_react.default.createElement("div", {
        className: _InputFieldModule.default.fileInputContainer
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: _InputFieldModule.default.input
      }, this.props.selectedFileName), this.props.buttonContent ? /*#__PURE__*/_react.default.createElement(_Button.default, {
        color: this.props.buttonColor,
        onClick: function onClick() {
          document.getElementById(_this2.props.id).click();
        },
        content: this.props.buttonContent,
        type: "button",
        theme: this.props.theme
      }) : null) : null), !this.props.contentOnly ? /*#__PURE__*/_react.default.createElement("input", this.getInputElementProps(defaultValue, defaultKey, styleRules)) : /*#__PURE__*/_react.default.createElement("span", null, this.renderValueAsText(this.props.value || this.props.defaultValue, this.props.defaultContent)), /*#__PURE__*/_react.default.createElement(_ErrorMessage.default, {
        content: this.props.errorMessage,
        theme: this.props.theme
      }));
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
  elementKey: _propTypes.default.string,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  contentOnly: _propTypes.default.bool,
  buttonColor: _propTypes.default.string,
  buttonContent: _propTypes.default.string,
  selectedFileName: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  defaultContent: _propTypes.default.string,
  hasErrors: _propTypes.default.bool,
  errorMessage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  mandatory: _propTypes.default.bool,
  theme: _propTypes.default.object
};
InputField.defaultProps = {
  name: "",
  type: "text",
  label: "",
  contentOnly: false,
  buttonColor: "default",
  dateFormat: "d. MMMM, yyyy",
  placeholder: "",
  defaultContent: "",
  hasErrors: false,
  errorMessage: "",
  mandatory: false,
  onChange: function onChange() {
    return false;
  }
};
var _default = InputField;
exports.default = _default;