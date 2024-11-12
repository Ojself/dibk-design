"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _LoadingAnimationModule = _interopRequireDefault(require("./LoadingAnimation.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const LoadingAnimation = props => {
  return _react.default.createElement("div", {
    className: props.fixed ? _LoadingAnimationModule.default.loadingAnimation + " " + _LoadingAnimationModule.default.fixed : _LoadingAnimationModule.default.loadingAnimation
  }, props.message);
};
LoadingAnimation.propTypes = {
  fixed: _propTypes.default.bool,
  active: _propTypes.default.bool,
  message: _propTypes.default.string
};
LoadingAnimation.defaultProps = {
  fixed: false,
  active: true,
  message: ""
};
var _default = exports.default = LoadingAnimation;