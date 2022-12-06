"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _TableModule = _interopRequireDefault(require("./Table.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Table = function Table(props) {
  return _react.default.createElement("table", {
    className: _TableModule.default.table
  }, props.children);
};
var _default = Table;
exports.default = _default;