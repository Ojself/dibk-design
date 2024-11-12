"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _PaperModule = _interopRequireDefault(require("./Paper.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Paper = props => {
  return _react.default.createElement("div", {
    className: `${_PaperModule.default.paper} ${props.noMargin ? _PaperModule.default.noMargin : ""} ${props.noPadding ? _PaperModule.default.noPadding : ""}`
  }, props.children);
};
Paper.propTypes = {
  noMargin: _propTypes.default.bool,
  noPadding: _propTypes.default.bool
};
Paper.defaultProps = {
  noMargin: false,
  noPadding: false
};
var _default = exports.default = Paper;