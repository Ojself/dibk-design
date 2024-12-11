"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _LabelModule = _interopRequireDefault(require("./Label.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const Label = props => {
  var _props$htmlTag;
  let labelProps = _objectSpread({}, props);
  const htmlTag = (_props$htmlTag = props.htmlTag) !== null && _props$htmlTag !== void 0 && _props$htmlTag.length ? props.htmlTag : "label";
  delete labelProps.inline;
  delete labelProps.normalCursor;
  delete labelProps.htmlTag;
  const className = "".concat(_LabelModule.default.label, " ").concat(props.inline ? _LabelModule.default.inline : "", " ").concat(props.normalCursor ? _LabelModule.default.normalCursor : "");
  const labelElement = _react.default.createElement(htmlTag, _objectSpread(_objectSpread({}, labelProps), {}, {
    className,
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
var _default = exports.default = Label;