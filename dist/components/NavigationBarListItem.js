"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _theme = require("../functions/theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var NavigationBarListItem = function NavigationBarListItem(props) {
  var getListItemThemeStyle = function getListItemThemeStyle() {
    return {
      color: (0, _theme.getThemeNavigationBarTextColor)(props.theme),
      borderBottomColor: (0, _theme.getThemeNavigationBarTextColor)(props.theme)
    };
  };
  var listItemThemeStyle = getListItemThemeStyle();
  if (typeof props.listItem === "string") {
    return _react.default.createElement("li", null, _react.default.createElement("span", {
      style: listItemThemeStyle
    }, props.listItem));
  } else if (_typeof(props.listItem) === "object") {
    return _react.default.createElement("li", null, _react.default.createElement("a", {
      href: props.listItem.href,
      style: listItemThemeStyle
    }, props.listItem.name));
  } else {
    return null;
  }
};
NavigationBarListItem.propTypes = {
  listItem: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  theme: _propTypes.default.object
};
var _default = exports.default = NavigationBarListItem;