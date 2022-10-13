"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getThemeTextColor = exports.getThemePaletteTextColor = exports.getThemePaletteBorderColor = exports.getThemePaletteBackgroundColor = exports.getThemeNavigationBarTextColor = exports.getThemeNavigationBarBackgroundColor = exports.getThemeLogoPadding = exports.getThemeLogo = exports.getThemeLinkColor = exports.getThemeAppName = void 0;

var getThemePaletteBackgroundColor = function getThemePaletteBackgroundColor(theme, color) {
  var _theme$colors, _theme$colors$palette, _theme$colors$palette2;

  return (theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : (_theme$colors$palette = _theme$colors.palette) === null || _theme$colors$palette === void 0 ? void 0 : (_theme$colors$palette2 = _theme$colors$palette[color]) === null || _theme$colors$palette2 === void 0 ? void 0 : _theme$colors$palette2.background) || null;
};

exports.getThemePaletteBackgroundColor = getThemePaletteBackgroundColor;

var getThemePaletteTextColor = function getThemePaletteTextColor(theme, color) {
  var _theme$colors2, _theme$colors2$palett, _theme$colors2$palett2;

  return (theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : (_theme$colors2$palett = _theme$colors2.palette) === null || _theme$colors2$palett === void 0 ? void 0 : (_theme$colors2$palett2 = _theme$colors2$palett[color]) === null || _theme$colors2$palett2 === void 0 ? void 0 : _theme$colors2$palett2.text) || null;
};

exports.getThemePaletteTextColor = getThemePaletteTextColor;

var getThemePaletteBorderColor = function getThemePaletteBorderColor(theme, color) {
  var _theme$colors3, _theme$colors3$palett, _theme$colors3$palett2;

  return (theme === null || theme === void 0 ? void 0 : (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : (_theme$colors3$palett = _theme$colors3.palette) === null || _theme$colors3$palett === void 0 ? void 0 : (_theme$colors3$palett2 = _theme$colors3$palett[color]) === null || _theme$colors3$palett2 === void 0 ? void 0 : _theme$colors3$palett2.border) || null;
};

exports.getThemePaletteBorderColor = getThemePaletteBorderColor;

var getThemeNavigationBarBackgroundColor = function getThemeNavigationBarBackgroundColor(theme) {
  var _theme$colors4, _theme$colors4$naviga;

  return (theme === null || theme === void 0 ? void 0 : (_theme$colors4 = theme.colors) === null || _theme$colors4 === void 0 ? void 0 : (_theme$colors4$naviga = _theme$colors4.navigationBar) === null || _theme$colors4$naviga === void 0 ? void 0 : _theme$colors4$naviga.background) || null;
};

exports.getThemeNavigationBarBackgroundColor = getThemeNavigationBarBackgroundColor;

var getThemeNavigationBarTextColor = function getThemeNavigationBarTextColor(theme) {
  var _theme$colors5, _theme$colors5$naviga;

  return (theme === null || theme === void 0 ? void 0 : (_theme$colors5 = theme.colors) === null || _theme$colors5 === void 0 ? void 0 : (_theme$colors5$naviga = _theme$colors5.navigationBar) === null || _theme$colors5$naviga === void 0 ? void 0 : _theme$colors5$naviga.text) || null;
};

exports.getThemeNavigationBarTextColor = getThemeNavigationBarTextColor;

var getThemeLogo = function getThemeLogo(theme) {
  return (theme === null || theme === void 0 ? void 0 : theme.logo) || null;
};

exports.getThemeLogo = getThemeLogo;

var getThemeLogoPadding = function getThemeLogoPadding(theme) {
  return (theme === null || theme === void 0 ? void 0 : theme.logoPadding) || null;
};

exports.getThemeLogoPadding = getThemeLogoPadding;

var getThemeAppName = function getThemeAppName(theme) {
  return (theme === null || theme === void 0 ? void 0 : theme.appName) || null;
};

exports.getThemeAppName = getThemeAppName;

var getThemeTextColor = function getThemeTextColor(theme) {
  var _theme$colors6;

  return (theme === null || theme === void 0 ? void 0 : (_theme$colors6 = theme.colors) === null || _theme$colors6 === void 0 ? void 0 : _theme$colors6.text) || null;
};

exports.getThemeTextColor = getThemeTextColor;

var getThemeLinkColor = function getThemeLinkColor(theme) {
  var _theme$colors7;

  return (theme === null || theme === void 0 ? void 0 : (_theme$colors7 = theme.colors) === null || _theme$colors7 === void 0 ? void 0 : _theme$colors7.link) || null;
};

exports.getThemeLinkColor = getThemeLinkColor;