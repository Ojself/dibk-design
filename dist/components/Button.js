"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _theme = require("../functions/theme");
var _helpers = require("../functions/helpers");
var _ButtonModule = _interopRequireDefault(require("./Button.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Button = function Button(props) {
  var _props$href, _props$children, _props$children$type;
  var getArrowClass = function getArrowClass(arrow) {
    switch (arrow) {
      case "left":
        return _ButtonModule.default.hasArrowLeft;
      case "right":
        return _ButtonModule.default.hasArrowRight;
      default:
        return "";
    }
  };
  var getThemeStyle = function getThemeStyle(theme, color) {
    return {
      backgroundColor: (0, _theme.getThemePaletteBackgroundColor)(theme, color),
      color: (0, _theme.getThemePaletteTextColor)(theme, color),
      borderColor: (0, _theme.getThemePaletteBorderColor)(theme, color),
      borderWidth: (0, _theme.getThemePaletteBorderColor)(theme, color) ? "1px" : "0"
    };
  };
  var buttonProps = _objectSpread(_objectSpread({}, props), {}, {
    "aria-invalid": props.hasErrors || null
  });
  delete buttonProps.noHover;
  delete buttonProps.hasErrors;
  delete buttonProps.rounded;
  delete buttonProps.inputType;
  delete buttonProps.color;
  delete buttonProps.content;
  delete buttonProps.arrow;
  var buttonColor = (props === null || props === void 0 ? void 0 : props.inputType) === "radio" ? props.defaultChecked ? "primary" : "default" : props.color;
  var themeStyle = props.theme ? getThemeStyle(props.theme, buttonColor) : null;
  var className = (0, _helpers.classNameArrayToClassNameString)([_ButtonModule.default.button, _ButtonModule.default[buttonColor], _ButtonModule.default[props.size], getArrowClass(props.arrow), props.theme && _ButtonModule.default.hasTheme, props.noHover || (props === null || props === void 0 ? void 0 : props.inputType) === "radio" ? _ButtonModule.default.noHover : null, props.rounded && _ButtonModule.default.rounded, props.hasErrors && _ButtonModule.default.hasErrors, props.disabled && _ButtonModule.default.disabled]);
  var renderChildElements = function renderChildElements(childElements) {
    var childElementsthroughFragments = (0, _helpers.cloneThroughFragments)(childElements);
    return childElementsthroughFragments.map(function (childElement, index) {
      var childElementCopy = _react.default.cloneElement(childElement, {
        className: className,
        style: themeStyle,
        key: "button-".concat(index)
      });
      return childElementCopy;
    });
  };
  if (props.inputType === "button") {
    return _react.default.createElement("input", _extends({}, buttonProps, {
      className: className,
      style: themeStyle,
      type: "button",
      value: props.content
    }));
  } else if (props.inputType === "radio") {
    return _react.default.createElement("label", {
      className: className
    }, _react.default.createElement("input", _extends({}, buttonProps, {
      style: themeStyle,
      type: "radio"
    })), props.content);
  } else if ((_props$href = props.href) !== null && _props$href !== void 0 && _props$href.length) {
    return _react.default.createElement("a", _extends({}, buttonProps, {
      className: className,
      style: themeStyle
    }), props.content || props.children);
  } else if ((props === null || props === void 0 ? void 0 : (_props$children = props.children) === null || _props$children === void 0 ? void 0 : (_props$children$type = _props$children.type) === null || _props$children$type === void 0 ? void 0 : _props$children$type.displayName) === "Link") {
    return _react.default.createElement(_react.Fragment, null, renderChildElements(_react.default.Children.toArray(props.children)));
  } else {
    return _react.default.createElement("button", _extends({}, buttonProps, {
      className: className,
      style: themeStyle
    }), props.content || props.children);
  }
};
Button.propTypes = {
  content: _propTypes.default.string,
  color: _propTypes.default.oneOf(["default", "primary"]),
  size: _propTypes.default.oneOf(["small", "regular"]),
  arrow: _propTypes.default.oneOf(["none", "left", "right"]),
  theme: _propTypes.default.object,
  disabled: _propTypes.default.bool,
  inputType: _propTypes.default.oneOf(["button", "radio"]),
  name: _propTypes.default.string,
  defaultChecked: _propTypes.default.bool,
  required: _propTypes.default.bool,
  hasErrors: _propTypes.default.bool,
  "aria-describedby": _propTypes.default.string,
  noHover: _propTypes.default.bool,
  rounded: _propTypes.default.bool,
  href: _propTypes.default.string,
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  color: "default",
  size: "regular",
  disabled: false,
  hasErrors: false,
  noHover: false,
  arrow: "none"
};
var _default = Button;
exports.default = _default;