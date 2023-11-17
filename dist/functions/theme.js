"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getThemeTextColor = exports.getThemePaletteTextColor = exports.getThemePaletteBorderColor = exports.getThemePaletteBackgroundColor = exports.getThemeNavigationBarTextColor = exports.getThemeNavigationBarBackgroundColor = exports.getThemeLogoPadding = exports.getThemeLogo = exports.getThemeLinkColor = exports.getThemeAppName = void 0;
const getThemePaletteBackgroundColor = (theme, color) => {
  var _theme$colors;
  return (theme === null || theme === void 0 || (_theme$colors = theme.colors) === null || _theme$colors === void 0 || (_theme$colors = _theme$colors.palette) === null || _theme$colors === void 0 || (_theme$colors = _theme$colors[color]) === null || _theme$colors === void 0 ? void 0 : _theme$colors.background) || null;
};
exports.getThemePaletteBackgroundColor = getThemePaletteBackgroundColor;
const getThemePaletteTextColor = (theme, color) => {
  var _theme$colors2;
  return (theme === null || theme === void 0 || (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 || (_theme$colors2 = _theme$colors2.palette) === null || _theme$colors2 === void 0 || (_theme$colors2 = _theme$colors2[color]) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.text) || null;
};
exports.getThemePaletteTextColor = getThemePaletteTextColor;
const getThemePaletteBorderColor = (theme, color) => {
  var _theme$colors3;
  return (theme === null || theme === void 0 || (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 || (_theme$colors3 = _theme$colors3.palette) === null || _theme$colors3 === void 0 || (_theme$colors3 = _theme$colors3[color]) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.border) || null;
};
exports.getThemePaletteBorderColor = getThemePaletteBorderColor;
const getThemeNavigationBarBackgroundColor = theme => {
  var _theme$colors4;
  return (theme === null || theme === void 0 || (_theme$colors4 = theme.colors) === null || _theme$colors4 === void 0 || (_theme$colors4 = _theme$colors4.navigationBar) === null || _theme$colors4 === void 0 ? void 0 : _theme$colors4.background) || null;
};
exports.getThemeNavigationBarBackgroundColor = getThemeNavigationBarBackgroundColor;
const getThemeNavigationBarTextColor = theme => {
  var _theme$colors5;
  return (theme === null || theme === void 0 || (_theme$colors5 = theme.colors) === null || _theme$colors5 === void 0 || (_theme$colors5 = _theme$colors5.navigationBar) === null || _theme$colors5 === void 0 ? void 0 : _theme$colors5.text) || null;
};
exports.getThemeNavigationBarTextColor = getThemeNavigationBarTextColor;
const getThemeLogo = theme => {
  return (theme === null || theme === void 0 ? void 0 : theme.logo) || null;
};
exports.getThemeLogo = getThemeLogo;
const getThemeLogoPadding = theme => {
  return (theme === null || theme === void 0 ? void 0 : theme.logoPadding) || null;
};
exports.getThemeLogoPadding = getThemeLogoPadding;
const getThemeAppName = theme => {
  return (theme === null || theme === void 0 ? void 0 : theme.appName) || null;
};
exports.getThemeAppName = getThemeAppName;
const getThemeTextColor = theme => {
  var _theme$colors6;
  return (theme === null || theme === void 0 || (_theme$colors6 = theme.colors) === null || _theme$colors6 === void 0 ? void 0 : _theme$colors6.text) || null;
};
exports.getThemeTextColor = getThemeTextColor;
const getThemeLinkColor = theme => {
  var _theme$colors7;
  return (theme === null || theme === void 0 || (_theme$colors7 = theme.colors) === null || _theme$colors7 === void 0 ? void 0 : _theme$colors7.link) || null;
};
exports.getThemeLinkColor = getThemeLinkColor;