"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Label = _interopRequireDefault(require("./Label"));

var _theme = require("../functions/theme");

var _generators = require("../functions/generators");

var _SelectModule = _interopRequireDefault(require("./Select.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var Select = /*#__PURE__*/function (_React$Component) {
  _inherits(Select, _React$Component);

  var _super = _createSuper(Select);

  function Select() {
    _classCallCheck(this, Select);

    return _super.apply(this, arguments);
  }

  _createClass(Select, [{
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
    key: "getThemeArrowStyle",
    value: function getThemeArrowStyle(theme) {
      return {
        borderTopColor: (0, _theme.getThemePaletteBackgroundColor)(theme, 'primary')
      };
    }
  }, {
    key: "getKeyByValue",
    value: function getKeyByValue(value, options) {
      var selectedOption = options && options.length ? options.find(function (option) {
        if (_typeof(option) === 'object') {
          return option.value === value;
        } else {
          return option === value;
        }
      }) : null;

      if (selectedOption && selectedOption.key) {
        return selectedOption.key;
      } else if (selectedOption && selectedOption.value) {
        return selectedOption.value;
      } else {
        return selectedOption;
      }
    }
  }, {
    key: "renderOptionElements",
    value: function renderOptionElements(options) {
      return options.map(function (option, key) {
        var optionObject = null;

        if (_typeof(option) === 'object') {
          optionObject = {
            key: option.key ? option.key : '',
            value: option.value ? option.value : ''
          };
        } else {
          optionObject = {
            key: option,
            value: option
          };
        }

        return /*#__PURE__*/_react.default.createElement("option", {
          value: optionObject.value,
          key: key
        }, optionObject.key);
      });
    }
  }, {
    key: "renderPlaceholderOption",
    value: function renderPlaceholderOption(placeholder, placeholderValue) {
      return placeholder ? /*#__PURE__*/_react.default.createElement("option", {
        value: placeholderValue,
        disabled: true
      }, placeholder) : '';
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.contentOnly) {
        var value = this.props.defaultValue ? this.props.defaultValue : this.props.value || null;
        return /*#__PURE__*/_react.default.createElement("div", {
          className: _SelectModule.default.select
        }, /*#__PURE__*/_react.default.createElement(_Label.default, {
          htmlFor: this.props.id
        }, this.props.label), /*#__PURE__*/_react.default.createElement("span", null, value ? this.props.keyAsContent ? this.getKeyByValue(value, this.props.options) : value : this.props.defaultContent));
      } else {
        var _this$props$width, _props, _this$props$width2;

        var defaultValue = !this.props.value && this.props.defaultValue ? this.props.defaultValue : false;

        var styleRules = _objectSpread(_objectSpread({}, this.props.hasErrors ? this.getThemeErrorInputStyle(this.props.theme) : null), ((_this$props$width = this.props.width) === null || _this$props$width === void 0 ? void 0 : _this$props$width.length) && {
          maxWidth: this.props.width
        });

        var props = (_props = {
          name: this.props.name,
          multiple: this.props.multiple
        }, _defineProperty(_props, defaultValue ? 'defaultValue' : 'value', defaultValue || this.props.value), _defineProperty(_props, "onChange", this.props.onChange), _defineProperty(_props, "id", this.props.id), _defineProperty(_props, "key", "".concat(this.props.id, "-").concat((0, _generators.generateRandomString)(6))), _defineProperty(_props, "className", this.props.hasErrors ? _SelectModule.default.hasErrors : ''), _defineProperty(_props, "style", styleRules), _props);
        return /*#__PURE__*/_react.default.createElement("div", {
          className: _SelectModule.default.select
        }, /*#__PURE__*/_react.default.createElement(_Label.default, {
          htmlFor: this.props.id
        }, this.props.label), /*#__PURE__*/_react.default.createElement("div", {
          className: _SelectModule.default.selectContainer,
          style: _objectSpread({}, ((_this$props$width2 = this.props.width) === null || _this$props$width2 === void 0 ? void 0 : _this$props$width2.length) && {
            maxWidth: this.props.width
          })
        }, /*#__PURE__*/_react.default.createElement("span", {
          className: _SelectModule.default.selectListArrow,
          style: this.getThemeArrowStyle(this.props.theme)
        }), /*#__PURE__*/_react.default.createElement("select", props, this.renderPlaceholderOption(this.props.placeholder, this.props.placeholderValue), this.renderOptionElements(this.props.options))), /*#__PURE__*/_react.default.createElement("span", {
          className: _SelectModule.default.errorMessage,
          style: this.getThemeErrorMessageStyle(this.props.theme)
        }, this.props.errorMessage ? this.props.errorMessage : ''));
      }
    }
  }]);

  return Select;
}(_react.default.Component);

Select.propTypes = {
  id: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  options: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
    key: _propTypes.default.string,
    value: _propTypes.default.string
  })])),
  width: _propTypes.default.string,
  value: _propTypes.default.any,
  defaultValue: _propTypes.default.any,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  contentOnly: _propTypes.default.bool,
  keyAsContent: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  placeholderValue: _propTypes.default.string,
  defaultContent: _propTypes.default.string,
  hasErrors: _propTypes.default.bool,
  errorMessage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  theme: _propTypes.default.object
};
Select.defaultProps = {
  name: '',
  options: [],
  label: '',
  contentOnly: false,
  keyAsContent: false,
  placeholder: null,
  placeholderValue: '',
  defaultContent: null,
  hasErrors: false,
  errorMessage: '',
  onChange: function onChange() {
    return false;
  }
};
var _default = Select;
exports.default = _default;