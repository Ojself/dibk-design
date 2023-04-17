"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Label = _interopRequireDefault(require("./Label"));
var _ErrorMessage = _interopRequireDefault(require("./ErrorMessage"));
var _theme = require("../functions/theme");
var _generators = require("../functions/generators");
var _helpers = require("../functions/helpers");
var _asterisk = _interopRequireDefault(require("../assets/svg/asterisk.svg?url"));
var _SelectModule = _interopRequireDefault(require("./Select.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var Select = function Select(props) {
  var getThemeErrorInputStyle = function getThemeErrorInputStyle(theme) {
    return {
      boxShadow: "0 0 3px ".concat((0, _theme.getThemePaletteBackgroundColor)(theme, "warning")),
      borderColor: (0, _theme.getThemePaletteBackgroundColor)(theme, "warning")
    };
  };
  var getThemeArrowStyle = function getThemeArrowStyle(theme) {
    return {
      borderTopColor: (0, _theme.getThemePaletteBackgroundColor)(theme, "primary")
    };
  };
  var getKeyByValue = function getKeyByValue(value, options) {
    var selectedOption = options && options.length ? options.find(function (option) {
      if (_typeof(option) === "object") {
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
  };
  var renderOptionElements = function renderOptionElements(options) {
    return options.map(function (option, key) {
      var optionObject = null;
      if (_typeof(option) === "object") {
        optionObject = {
          key: option.key ? option.key : "",
          value: option.value ? option.value : ""
        };
      } else {
        optionObject = {
          key: option,
          value: option
        };
      }
      return _react.default.createElement("option", {
        value: optionObject.value,
        key: key
      }, optionObject.key);
    });
  };
  var renderPlaceholderOption = function renderPlaceholderOption(placeholder, placeholderValue) {
    return placeholder ? _react.default.createElement("option", {
      value: placeholderValue,
      disabled: true
    }, placeholder) : "";
  };
  var getErrorElementId = function getErrorElementId() {
    return "".concat(props.id, "-errorMessage");
  };
  if (props.contentOnly) {
    var value = props.defaultValue ? props.defaultValue : props.value || null;
    return _react.default.createElement("div", {
      className: _SelectModule.default.select
    }, _react.default.createElement(_Label.default, {
      htmlFor: props.id
    }, props.label), _react.default.createElement("span", null, value ? props.keyAsContent ? getKeyByValue(value, props.options) : value : props.defaultContent));
  } else {
    var _props$width, _props$errorMessage, _props$ariaDescribed, _selectElementProps, _props$width2;
    var defaultValue = !props.value && props.defaultValue ? props.defaultValue : false;
    var styleRules = _objectSpread(_objectSpread({}, props.hasErrors ? getThemeErrorInputStyle(props.theme) : null), ((_props$width = props.width) === null || _props$width === void 0 ? void 0 : _props$width.length) && {
      maxWidth: props.width
    });
    var className = (0, _helpers.classNameArrayToClassNameString)([props.hasErrors && _SelectModule.default.hasErrors, props.multiple && _SelectModule.default.multiple]);
    var selectElementProps = (_selectElementProps = {
      name: props.name,
      multiple: props.multiple,
      required: props.required,
      disabled: props.disabled
    }, _defineProperty(_selectElementProps, defaultValue ? "defaultValue" : "value", defaultValue || props.value), _defineProperty(_selectElementProps, "onChange", props.onChange), _defineProperty(_selectElementProps, "id", props.id), _defineProperty(_selectElementProps, "role", props.role), _defineProperty(_selectElementProps, "key", "".concat(props.id, "-").concat((0, _generators.generateRandomString)(6))), _defineProperty(_selectElementProps, "className", className), _defineProperty(_selectElementProps, "aria-describedby", props.hasErrors && !!((_props$errorMessage = props.errorMessage) !== null && _props$errorMessage !== void 0 && _props$errorMessage.length) ? getErrorElementId() : !!((_props$ariaDescribed = props["aria-describedby"]) !== null && _props$ariaDescribed !== void 0 && _props$ariaDescribed.length) ? props["aria-describedby"] : null), _defineProperty(_selectElementProps, "aria-invalid", props.hasErrors ? "true" : null), _defineProperty(_selectElementProps, "style", styleRules), _selectElementProps);
    return _react.default.createElement("div", {
      className: _SelectModule.default.select
    }, _react.default.createElement(_Label.default, {
      htmlFor: props.id
    }, props.label, props.required && _react.default.createElement("img", {
      src: _asterisk.default,
      alt: "",
      className: _SelectModule.default.requiredSymbol
    })), _react.default.createElement("div", {
      className: _SelectModule.default.selectContainer,
      style: _objectSpread({}, ((_props$width2 = props.width) === null || _props$width2 === void 0 ? void 0 : _props$width2.length) && {
        maxWidth: props.width
      })
    }, !props.multiple && _react.default.createElement("span", {
      className: _SelectModule.default.selectListArrow,
      style: getThemeArrowStyle(props.theme)
    }), _react.default.createElement("select", _extends({}, selectElementProps, {
      onChange: function onChange(e) {}
    }), renderPlaceholderOption(props.placeholder, props.placeholderValue), renderOptionElements(props.options))), _react.default.createElement(_ErrorMessage.default, {
      id: getErrorElementId(),
      content: props.errorMessage,
      theme: props.theme
    }));
  }
};
Select.propTypes = {
  id: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  multiple: _propTypes.default.bool,
  options: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]), _propTypes.default.shape({
    key: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
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
  "aria-describedby": _propTypes.default.string,
  hasErrors: _propTypes.default.bool,
  errorMessage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  theme: _propTypes.default.object
};
Select.defaultProps = {
  onChange: function onChange() {
    return false;
  },
  name: "",
  required: false,
  disabled: false,
  options: [],
  label: "",
  contentOnly: false,
  keyAsContent: false,
  placeholder: null,
  placeholderValue: "",
  defaultContent: null,
  hasErrors: false,
  errorMessage: ""
};
var _default = Select;
exports.default = _default;