"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _LabelModule = _interopRequireDefault(require("./Label.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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