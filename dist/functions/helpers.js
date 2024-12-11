"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringifyCssColorVariables = exports.setFocusToElement = exports.getFocusableElementsInsideElement = exports.getCssVariablesFromTheme = exports.getCssSizeVariablesFromTheme = exports.getCssColorVariablesFromTheme = exports.cloneThroughFragments = exports.classNameArrayToClassNameString = exports.camelCaseToKebabCase = exports.addGlobalStylesheet = exports.addFocusTrapInsideElement = void 0;
var _react = require("react");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const classNameArrayToClassNameString = classNameArray => {
  var _classNameArray$filte;
  return (classNameArray === null || classNameArray === void 0 || (_classNameArray$filte = classNameArray.filter(className => className)) === null || _classNameArray$filte === void 0 ? void 0 : _classNameArray$filte.join(" ")) || "";
};
exports.classNameArrayToClassNameString = classNameArrayToClassNameString;
const camelCaseToKebabCase = string => {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
};
exports.camelCaseToKebabCase = camelCaseToKebabCase;
const getCssColorVariablesFromTheme = theme => {
  var _Object$entries;
  return !!(theme !== null && theme !== void 0 && theme.colors) && !!((_Object$entries = Object.entries(theme === null || theme === void 0 ? void 0 : theme.colors)) !== null && _Object$entries !== void 0 && _Object$entries.length) && Object.entries(theme === null || theme === void 0 ? void 0 : theme.colors).reduce((acc, _ref) => {
    let [key, value] = _ref;
    if (key !== null && key !== void 0 && key.length && value !== null && value !== void 0 && value.length) {
      acc["--color-".concat(camelCaseToKebabCase(key))] = value;
    }
    return acc;
  }, {});
};
exports.getCssColorVariablesFromTheme = getCssColorVariablesFromTheme;
const getCssSizeVariablesFromTheme = theme => {
  var _Object$entries2;
  return !!(theme !== null && theme !== void 0 && theme.sizes) && !!((_Object$entries2 = Object.entries(theme === null || theme === void 0 ? void 0 : theme.sizes)) !== null && _Object$entries2 !== void 0 && _Object$entries2.length) && Object.entries(theme === null || theme === void 0 ? void 0 : theme.sizes).reduce((acc, _ref2) => {
    let [key, value] = _ref2;
    if (key !== null && key !== void 0 && key.length && value !== null && value !== void 0 && value.length) {
      acc["--size-".concat(camelCaseToKebabCase(key))] = value;
    }
    return acc;
  }, {});
};
exports.getCssSizeVariablesFromTheme = getCssSizeVariablesFromTheme;
const getCssVariablesFromTheme = theme => {
  return _objectSpread(_objectSpread({}, getCssColorVariablesFromTheme(theme)), getCssSizeVariablesFromTheme(theme));
};
exports.getCssVariablesFromTheme = getCssVariablesFromTheme;
const addGlobalStylesheet = (styleElementId, styles) => {
  var _document$getElementB;
  const style = document.createElement("style");
  style.setAttribute("id", styleElementId);
  style.textContent = styles;
  (_document$getElementB = document.getElementById(styleElementId)) === null || _document$getElementB === void 0 || _document$getElementB.remove();
  document.head.appendChild(style);
};
exports.addGlobalStylesheet = addGlobalStylesheet;
const stringifyCssColorVariables = colorVariables => {
  return Object.keys(colorVariables).reduce((css, key) => {
    return "".concat(css).concat(key, ": ").concat(colorVariables[key], ";");
  }, "");
};
exports.stringifyCssColorVariables = stringifyCssColorVariables;
const cloneThroughFragments = children => {
  return _react.Children.map(children, c => {
    if ((0, _react.isValidElement)(c)) {
      if (c.type === _react.Fragment) {
        return cloneThroughFragments(c.props.children);
      }
      return (0, _react.cloneElement)(c, _objectSpread({}, c.props));
    }
    return c;
  });
};
exports.cloneThroughFragments = cloneThroughFragments;
const setFocusToElement = element => {
  const autoFocusElement = document.createElement("button");
  element.prepend(autoFocusElement);
  autoFocusElement.focus();
  autoFocusElement.remove();
};
exports.setFocusToElement = setFocusToElement;
const getFocusableElementsInsideElement = element => {
  return Array.from(element.querySelectorAll('button, [href], input, [tabindex="0"]')).filter(resultElement => {
    return resultElement;
  });
};
exports.getFocusableElementsInsideElement = getFocusableElementsInsideElement;
const addFocusTrapInsideElement = element => {
  setFocusToElement(element);
  const focusableElements = getFocusableElementsInsideElement(element);
  const firstFocusableElement = focusableElements !== null && focusableElements !== void 0 && focusableElements.length ? focusableElements[0] : null;
  const lastFocusableElement = (focusableElements === null || focusableElements === void 0 ? void 0 : focusableElements.length) > 1 ? focusableElements[focusableElements.length - 1] : firstFocusableElement;
  if (firstFocusableElement) {
    firstFocusableElement.onkeydown = event => {
      if (event.keyCode === 9 && event.shiftKey) {
        lastFocusableElement.focus();
      }
    };
  }
  if (lastFocusableElement) {
    lastFocusableElement.onclick = () => {
      firstFocusableElement.focus();
    };
    lastFocusableElement.onkeydown = event => {
      if (event.keyCode === 9 && !event.shiftKey) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    };
  }
};
exports.addFocusTrapInsideElement = addFocusTrapInsideElement;