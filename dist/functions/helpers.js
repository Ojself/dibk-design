"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFocusToElement = exports.getFocusableElementsInsideElement = exports.cloneThroughFragments = exports.classNameArrayToClassNameString = exports.addFocusTrapInsideElement = void 0;
var _react = require("react");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var classNameArrayToClassNameString = function classNameArrayToClassNameString(classNameArray) {
  var _classNameArray$filte;
  return (classNameArray === null || classNameArray === void 0 ? void 0 : (_classNameArray$filte = classNameArray.filter(function (className) {
    return className;
  })) === null || _classNameArray$filte === void 0 ? void 0 : _classNameArray$filte.join(" ")) || "";
};
exports.classNameArrayToClassNameString = classNameArrayToClassNameString;
var cloneThroughFragments = function cloneThroughFragments(children) {
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
exports.cloneThroughFragments = cloneThroughFragments;
var setFocusToElement = function setFocusToElement(element) {
  var autoFocusElement = document.createElement("button");
  element.prepend(autoFocusElement);
  autoFocusElement.focus();
  autoFocusElement.remove();
};
exports.setFocusToElement = setFocusToElement;
var getFocusableElementsInsideElement = function getFocusableElementsInsideElement(element) {
  return Array.from(element.querySelectorAll('button, [href], input, [tabindex="0"]')).filter(function (resultElement) {
    return resultElement;
  });
};
exports.getFocusableElementsInsideElement = getFocusableElementsInsideElement;
var addFocusTrapInsideElement = function addFocusTrapInsideElement(element) {
  setFocusToElement(element);
  var focusableElements = getFocusableElementsInsideElement(element);
  var firstFocusableElement = focusableElements[0];
  var lastFocusableElement = focusableElements[focusableElements.length - 1];
  firstFocusableElement.onkeydown = function (event) {
    if (event.keyCode === 9 && event.shiftKey) {
      lastFocusableElement.focus();
    }
  };
  lastFocusableElement.onclick = function () {
    firstFocusableElement.focus();
  };
  lastFocusableElement.onkeydown = function (event) {
    if (event.keyCode === 9 && !event.shiftKey) {
      event.preventDefault();
      firstFocusableElement.focus();
    }
  };
};
exports.addFocusTrapInsideElement = addFocusTrapInsideElement;