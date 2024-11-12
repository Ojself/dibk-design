"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _helpers = require("../functions/helpers");
var _ListItemModule = _interopRequireDefault(require("./ListItem.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ListItem = _ref => {
  let {
    compact,
    children
  } = _ref;
  return _react.default.createElement("li", {
    className: (0, _helpers.classNameArrayToClassNameString)([_ListItemModule.default.listItem, compact && _ListItemModule.default.compact])
  }, children);
};
ListItem.propTypes = {
  compact: _propTypes.default.bool
};
ListItem.defaultProps = {
  compact: false
};
var _default = exports.default = ListItem;