"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../functions/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NavigationBarListItem extends _react.default.Component {
  getListItemThemeStyle(theme) {
    return {
      color: (0, _theme.getThemeNavigationBarTextColor)(theme),
      borderBottomColor: (0, _theme.getThemeNavigationBarTextColor)(theme)
    };
  }

  render() {
    const listItemThemeStyle = this.getListItemThemeStyle(this.props.theme);

    if (typeof this.props.listItem === 'string') {
      return /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("span", {
        style: listItemThemeStyle
      }, this.props.listItem));
    } else if (typeof this.props.listItem === 'object') {
      return /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        href: this.props.listItem.href,
        style: listItemThemeStyle
      }, this.props.listItem.name));
    } else {
      return null;
    }
  }

}

NavigationBarListItem.propTypes = {
  listItem: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  theme: _propTypes.default.object
};
var _default = NavigationBarListItem;
exports.default = _default;