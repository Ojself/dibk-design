"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFocusToElement = exports.getFocusableElementsInsideElement = exports.cloneThroughFragments = exports.classNameArrayToClassNameString = exports.addFocusTrapInsideElement = void 0;
var _react = require("react");
const classNameArrayToClassNameString = classNameArray => {
  var _classNameArray$filte;
  return (classNameArray === null || classNameArray === void 0 || (_classNameArray$filte = classNameArray.filter(className => className)) === null || _classNameArray$filte === void 0 ? void 0 : _classNameArray$filte.join(" ")) || "";
};
exports.classNameArrayToClassNameString = classNameArrayToClassNameString;
const cloneThroughFragments = children => {
  return _react.Children.map(children, c => {
    if ((0, _react.isValidElement)(c)) {
      if (c.type === _react.Fragment) {
        return cloneThroughFragments(c.props.children);
      }
      return (0, _react.cloneElement)(c, {
        ...c.props
      });
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