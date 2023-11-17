"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _helpers = require("../functions/helpers");
var _TableModule = _interopRequireDefault(require("./Table.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getCaptionAlignClass = captionAlign => {
  const defaultValue = "left";
  const availableValues = ["left", "center", "right"];
  return captionAlign !== null && captionAlign !== void 0 && captionAlign.length && availableValues.includes(captionAlign) ? _TableModule.default["captionAlign-".concat(captionAlign)] : _TableModule.default["captionAlign-".concat(defaultValue)];
};
const getCaptionSideClass = captionSide => {
  const defaultValue = "top";
  const availableValues = ["top", "bottom"];
  return captionSide !== null && captionSide !== void 0 && captionSide.length && availableValues.includes(captionSide) ? _TableModule.default["captionSide-".concat(captionSide)] : _TableModule.default["captionSide-".concat(defaultValue)];
};
const Table = props => {
  return _react.default.createElement("table", {
    className: (0, _helpers.classNameArrayToClassNameString)([_TableModule.default.table, getCaptionAlignClass(props.captionAlign), getCaptionSideClass(props.captionSide)])
  }, props.children);
};
Table.propTypes = {
  captionAlign: _propTypes.default.oneOf(["left", "center", "right"]),
  captionSide: _propTypes.default.oneOf(["top", "bottom"])
};
var _default = exports.default = Table;