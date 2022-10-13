"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function ListItem(props) {
  var elementProps = {
    key: props.elementKey || null
  };
  return _react.default.createElement("li", elementProps, props.children, props.elementKey);
};
ListItem.propTypes = {
  elementKey: _propTypes.default.string
};
var _default = ListItem;
exports.default = _default;