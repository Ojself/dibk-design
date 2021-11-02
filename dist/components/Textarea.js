"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Textarea = /*#__PURE__*/function (_React$Component) {
  _inherits(Textarea, _React$Component);

  var _super = _createSuper(Textarea);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _super.apply(this, arguments);
  }

  _createClass(Textarea, [{
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
    key: "renderValueAsText",
    value: function renderValueAsText(value, defaultContent) {
      return value ? value : defaultContent;
    }
  }, {
    key: "renderInputField",
    value: function renderInputField() {
      var _this$props$width, _this$props$resize, _props;

      var defaultValue = !this.props.value && this.props.defaultValue ? this.props.defaultValue : false;

      var styleRules = _objectSpread(_objectSpread(_objectSpread({}, this.props.hasErrors ? this.getThemeErrorInputStyle(this.props.theme) : null), ((_this$props$width = this.props.width) === null || _this$props$width === void 0 ? void 0 : _this$props$width.length) && {
        maxWidth: this.props.width
      }), ((_this$props$resize = this.props.resize) === null || _this$props$resize === void 0 ? void 0 : _this$props$resize.length) && {
        resize: this.props.resize
      });

      var props = (_props = {
        name: this.props.name,
        readOnly: this.props.readOnly,
        disabled: this.props.disabled,
        type: this.props.type,
        id: this.props.id,
        onChange: this.props.onChange,
        onBlur: this.props.onBlur
      }, _defineProperty(_props, defaultValue ? 'defaultValue' : 'value', defaultValue || this.props.value), _defineProperty(_props, "placeholder", this.props.placeholder), _defineProperty(_props, "rows", this.props.rows), _defineProperty(_props, "className", this.props.hasErrors ? _TextareaModule.default.hasErrors : ''), _defineProperty(_props, 'aria-required', this.props.mandatory), _defineProperty(_props, "style", styleRules), _props);
      return /*#__PURE__*/_react.default.createElement("textarea", props);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _TextareaModule.default.textarea
      }, /*#__PURE__*/_react.default.createElement(_Label.default, {
        htmlFor: this.props.id
      }, this.props.label), !this.props.contentOnly ? this.renderInputField() : /*#__PURE__*/_react.default.createElement("span", null, this.renderValueAsText(this.props.value || this.props.defaultValue, this.props.defaultContent)), /*#__PURE__*/_react.default.createElement("span", {
        className: _TextareaModule.default.errorMessage,
        style: this.getThemeErrorMessageStyle(this.props.theme)
      }, this.props.errorMessage ? this.props.errorMessage : ''));
    }
  }]);

  return Textarea;
}(_react.default.Component);

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
  onChange: function onChange() {
    return false;
  }
};
var _default = Textarea;
exports.default = _default;