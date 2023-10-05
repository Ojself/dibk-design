"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFocusToElement = exports.getFocusableElementsInsideElement = exports.cloneThroughFragments = exports.classNameArrayToClassNameString = exports.addFocusTrapInsideElement = void 0;
var _react = require("react");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var classNameArrayToClassNameString = exports.classNameArrayToClassNameString = function classNameArrayToClassNameString(classNameArray) {
  var _classNameArray$filte;
  return (classNameArray === null || classNameArray === void 0 || (_classNameArray$filte = classNameArray.filter(function (className) {
    return className;
  })) === null || _classNameArray$filte === void 0 ? void 0 : _classNameArray$filte.join(" ")) || "";
};
var cloneThroughFragments = exports.cloneThroughFragments = function cloneThroughFragments(children) {
  return _react.Children.map(children, function (c) {
    if ((0, _react.isValidElement)(c)) {
      if (c.type === _react.Fragment) {
        return cloneThroughFragments(c.props.children);
      }
      return (0, _react.cloneElement)(c, _objectSpread({}, c.props));
    }
    return c;
  });
};
var setFocusToElement = exports.setFocusToElement = function setFocusToElement(element) {
  var autoFocusElement = document.createElement("button");
  element.prepend(autoFocusElement);
  autoFocusElement.focus();
  autoFocusElement.remove();
};
var getFocusableElementsInsideElement = exports.getFocusableElementsInsideElement = function getFocusableElementsInsideElement(element) {
  return Array.from(element.querySelectorAll('button, [href], input, [tabindex="0"]')).filter(function (resultElement) {
    return resultElement;
  });
};
var addFocusTrapInsideElement = exports.addFocusTrapInsideElement = function addFocusTrapInsideElement(element) {
  setFocusToElement(element);
  var focusableElements = getFocusableElementsInsideElement(element);
  var firstFocusableElement = focusableElements !== null && focusableElements !== void 0 && focusableElements.length ? focusableElements[0] : null;
  var lastFocusableElement = (focusableElements === null || focusableElements === void 0 ? void 0 : focusableElements.length) > 1 ? focusableElements[focusableElements.length - 1] : firstFocusableElement;
  if (firstFocusableElement) {
    firstFocusableElement.onkeydown = function (event) {
      if (event.keyCode === 9 && event.shiftKey) {
        lastFocusableElement.focus();
      }
    };
  }
  if (lastFocusableElement) {
    lastFocusableElement.onclick = function () {
      firstFocusableElement.focus();
    };
    lastFocusableElement.onkeydown = function (event) {
      if (event.keyCode === 9 && !event.shiftKey) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    };
  }
};