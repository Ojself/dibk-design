"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _helpers = require("../functions/helpers");
var _TableModule = _interopRequireDefault(require("./Table.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getCaptionAlignClass = captionAlign => {
  const defaultValue = "left";
  const availableValues = ["left", "center", "right"];
  return captionAlign?.length && availableValues.includes(captionAlign) ? _TableModule.default[`captionAlign-${captionAlign}`] : _TableModule.default[`captionAlign-${defaultValue}`];
};
const getCaptionSideClass = captionSide => {
  const defaultValue = "top";
  const availableValues = ["top", "bottom"];
  return captionSide?.length && availableValues.includes(captionSide) ? _TableModule.default[`captionSide-${captionSide}`] : _TableModule.default[`captionSide-${defaultValue}`];
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