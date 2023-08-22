"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _LabelModule = _interopRequireDefault(require("./Label.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Label = function Label(props) {
  var _props$htmlTag;
  var labelProps = _objectSpread({}, props);
  var htmlTag = (_props$htmlTag = props.htmlTag) !== null && _props$htmlTag !== void 0 && _props$htmlTag.length ? props.htmlTag : "label";
  delete labelProps.inline;
  delete labelProps.normalCursor;
  delete labelProps.htmlTag;
  var className = "".concat(_LabelModule.default.label, " ").concat(props.inline ? _LabelModule.default.inline : "", " ").concat(props.normalCursor ? _LabelModule.default.normalCursor : "");
  var labelElement = _react.default.createElement(htmlTag, _objectSpread(_objectSpread({}, labelProps), {}, {
    className: className,
    id: props.id || null
  }), props.children);
  return labelElement;
};
Label.propTypes = {
  inline: _propTypes.default.bool,
  normalCursor: _propTypes.default.bool,
  htmlTag: _propTypes.default.string
};
Label.defaultProps = {
  inline: false,
  normalCursor: false,
  htmlTag: "label"
};
var _default = Label;
exports.default = _default;