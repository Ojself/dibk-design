"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ProgressBarModule = _interopRequireDefault(require("./ProgressBar.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ProgressBar = props => {
  const scssValueProperty = "--value";
  return _react.default.createElement("div", {
    className: `${_ProgressBarModule.default.progressBar} ${props.hasErrors ? _ProgressBarModule.default.hasErrors : ""}`,
    role: "progressbar",
    "aria-valuenow": props.progress || 0,
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    style: {
      [scssValueProperty]: props.progress || 0
    }
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
var _default = exports.default = ProgressBar;