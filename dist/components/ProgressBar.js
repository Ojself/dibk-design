"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ProgressBarModule = _interopRequireDefault(require("./ProgressBar.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProgressBar = function ProgressBar(_ref) {
  var progress = _ref.progress,
      hasErrors = _ref.hasErrors;
  var scssValueProperty = '--value';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_ProgressBarModule.default.progressBar, " ").concat(hasErrors ? _ProgressBarModule.default.hasErrors : ''),
    role: "progressbar",
    "aria-valuenow": progress || 0,
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    style: _defineProperty({}, scssValueProperty, progress || 0)
  });
};

var _default = ProgressBar;
exports.default = _default;