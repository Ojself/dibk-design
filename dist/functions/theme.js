"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getThemeTextColor = exports.getThemePaletteTextColor = exports.getThemePaletteBorderColor = exports.getThemePaletteBackgroundColor = exports.getThemeNavigationBarTextColor = exports.getThemeNavigationBarBackgroundColor = exports.getThemeLogoPadding = exports.getThemeLogo = exports.getThemeLinkColor = exports.getThemeAppName = void 0;

const getThemePaletteBackgroundColor = (theme, color) => {
  return theme && theme.colors && theme.colors.palette && theme.colors.palette[color] && theme.colors.palette[color].background ? theme.colors.palette[color].background : null;
};

exports.getThemePaletteBackgroundColor = getThemePaletteBackgroundColor;

const getThemePaletteTextColor = (theme, color) => {
  return theme && theme.colors && theme.colors.palette && theme.colors.palette[color] && theme.colors.palette[color].text ? theme.colors.palette[color].text : null;
};

exports.getThemePaletteTextColor = getThemePaletteTextColor;

const getThemePaletteBorderColor = (theme, color) => {
  return theme && theme.colors && theme.colors.palette && theme.colors.palette[color] && theme.colors.palette[color].border ? theme.colors.palette[color].border : null;
};

exports.getThemePaletteBorderColor = getThemePaletteBorderColor;

const getThemeNavigationBarBackgroundColor = theme => {
  return theme && theme.colors && theme.colors.navigationBar && theme.colors.navigationBar.background ? theme.colors.navigationBar.background : null;
};

exports.getThemeNavigationBarBackgroundColor = getThemeNavigationBarBackgroundColor;

const getThemeNavigationBarTextColor = theme => {
  return theme && theme.colors && theme.colors.navigationBar && theme.colors.navigationBar.text ? theme.colors.navigationBar.text : null;
};

exports.getThemeNavigationBarTextColor = getThemeNavigationBarTextColor;

const getThemeLogo = theme => {
  return theme && theme.logo ? theme.logo : null;
};

exports.getThemeLogo = getThemeLogo;

const getThemeLogoPadding = theme => {
  return theme && theme.logoPadding ? theme.logoPadding : null;
};

exports.getThemeLogoPadding = getThemeLogoPadding;

const getThemeAppName = theme => {
  return theme && theme.appName ? theme.appName : null;
};

exports.getThemeAppName = getThemeAppName;

const getThemeTextColor = theme => {
  return theme && theme.colors && theme.colors.text ? theme.colors.text : null;
};

exports.getThemeTextColor = getThemeTextColor;

const getThemeLinkColor = theme => {
  return theme && theme.colors && theme.colors.link ? theme.colors.link : null;
};

exports.getThemeLinkColor = getThemeLinkColor;