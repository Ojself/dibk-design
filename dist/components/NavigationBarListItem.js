"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const NavigationBarListItem = props => {
  if (typeof props.listItem === "string") {
    return _react.default.createElement("li", null, _react.default.createElement("span", null, props.listItem));
  } else if (typeof props.listItem === "object") {
    return _react.default.createElement("li", null, _react.default.createElement("a", {
      href: props.listItem.href
    }, props.listItem.name));
  } else {
    return null;
  }
};
NavigationBarListItem.propTypes = {
  listItem: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
var _default = exports.default = NavigationBarListItem;