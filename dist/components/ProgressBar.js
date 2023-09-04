"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ProgressBarModule = _interopRequireDefault(require("./ProgressBar.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ProgressBar = function ProgressBar(props) {
  var scssValueProperty = "--value";
  return _react.default.createElement("div", {
    className: "".concat(_ProgressBarModule.default.progressBar, " ").concat(props.hasErrors ? _ProgressBarModule.default.hasErrors : ""),
    role: "progressbar",
    "aria-valuenow": props.progress || 0,
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    style: _defineProperty({}, scssValueProperty, props.progress || 0)
  });
};
ProgressBar.propTypes = {
  progress: _propTypes.default.number,
  hasErrors: _propTypes.default.bool
};
ProgressBar.defaultProps = {
  progress: 0,
  hasErrors: false
};
var _default = ProgressBar;
exports.default = _default;