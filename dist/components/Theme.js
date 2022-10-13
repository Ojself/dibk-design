"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../functions/theme");

var _dibkLogoMobile = _interopRequireDefault(require("../assets/svg/dibk-logo-mobile.svg?url"));

var _ThemeModule = _interopRequireDefault(require("./Theme.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Theme = function Theme(props) {
  var getThemeColorPaletteStyle = function getThemeColorPaletteStyle(theme, color) {
    return {
      backgroundColor: (0, _theme.getThemePaletteBackgroundColor)(theme, color),
      color: (0, _theme.getThemePaletteTextColor)(theme, color)
    };
  };

  var getThemeTextStyle = function getThemeTextStyle(theme) {
    return {
      color: (0, _theme.getThemeTextColor)(theme)
    };
  };

  var getThemeLinkStyle = function getThemeLinkStyle(theme) {
    return {
      color: (0, _theme.getThemeLinkColor)(theme)
    };
  };

  var renderColors = function renderColors(theme) {
    var colors = ["default", "primary", "success", "warning", "info", "lightCyan", "orange", "lightOrange", "lime", "lightLime"];
    return colors.map(function (color) {
      var colorClassName = _ThemeModule.default[color];
      var colorPaletteStyle = props.theme ? getThemeColorPaletteStyle(props.theme, color) : null;
      return _react.default.createElement("div", {
        key: color,
        className: "".concat(_ThemeModule.default.color, " ").concat(colorClassName),
        style: colorPaletteStyle
      }, color);
    });
  };

  var renderLogo = function renderLogo(logoLink) {
    var themeLogo = (0, _theme.getThemeLogo)(props.theme);
    var themeAppName = (0, _theme.getThemeAppName)(props.theme);
    var logoElement = themeLogo && themeAppName ? _react.default.createElement("img", {
      alt: "".concat(themeAppName, " logo"),
      src: themeLogo
    }) : _react.default.createElement("img", {
      alt: "DIBK logo",
      src: _dibkLogoMobile.default
    });
    return logoLink && logoLink.length ? _react.default.createElement("a", {
      href: logoLink
    }, logoElement) : logoElement;
  };

  var themeTextStyle = props.theme ? getThemeTextStyle(props.theme) : null;
  var themeLinkStyle = props.theme ? getThemeLinkStyle(props.theme) : null;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: _ThemeModule.default.colorPalette
  }, renderColors(props.theme)), _react.default.createElement("p", {
    style: themeTextStyle
  }, "The is default text"), _react.default.createElement("p", null, _react.default.createElement("a", {
    style: themeLinkStyle,
    href: "#theme"
  }, "This is a hyperlink")), renderLogo(props.theme));
};

Theme.propTypes = {
  theme: _propTypes.default.object
};
Theme.defaultProps = {};
var _default = Theme;
exports.default = _default;