"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ContainerModule = _interopRequireDefault(require("./Container.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Container = props => {
  var _props$maxWidth;
  const styleProps = {
    "--max-width": (props === null || props === void 0 || (_props$maxWidth = props.maxWidth) === null || _props$maxWidth === void 0 ? void 0 : _props$maxWidth.length) && props.maxWidth
  };
  return _react.default.createElement("div", {
    className: _ContainerModule.default.container,
    style: styleProps
  }, props.children);
};
Container.propTypes = {
  maxWidth: _propTypes.default.string
};
var _default = exports.default = Container;