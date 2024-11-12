"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getThemeLogoPadding = exports.getThemeLogo = exports.getThemeAppName = void 0;
const getThemeLogo = theme => {
  return theme?.logo || null;
};
exports.getThemeLogo = getThemeLogo;
const getThemeLogoPadding = theme => {
  return theme?.logoPadding || null;
};
exports.getThemeLogoPadding = getThemeLogoPadding;
const getThemeAppName = theme => {
  return theme?.appName || null;
};
exports.getThemeAppName = getThemeAppName;