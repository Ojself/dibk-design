"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ContainerModule = _interopRequireDefault(require("./Container.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(props) {
  return _react.default.createElement("div", {
    className: _ContainerModule.default.container
  }, props.children);
};
var _default = Container;
exports.default = _default;