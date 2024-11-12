"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringifyCssColorVariables = exports.setFocusToElement = exports.getFocusableElementsInsideElement = exports.getCssVariablesFromTheme = exports.getCssSizeVariablesFromTheme = exports.getCssColorVariablesFromTheme = exports.cloneThroughFragments = exports.classNameArrayToClassNameString = exports.camelCaseToKebabCase = exports.addGlobalStylesheet = exports.addFocusTrapInsideElement = void 0;
var _react = require("react");
const classNameArrayToClassNameString = classNameArray => {
  return classNameArray?.filter(className => className)?.join(" ") || "";
};
exports.classNameArrayToClassNameString = classNameArrayToClassNameString;
const camelCaseToKebabCase = string => {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
};
exports.camelCaseToKebabCase = camelCaseToKebabCase;
const getCssColorVariablesFromTheme = theme => {
  return !!theme?.colors && !!Object.entries(theme?.colors)?.length && Object.entries(theme?.colors).reduce((acc, _ref) => {
    let [key, value] = _ref;
    if (key?.length && value?.length) {
      acc[`--color-${camelCaseToKebabCase(key)}`] = value;
    }
    return acc;
  }, {});
};
exports.getCssColorVariablesFromTheme = getCssColorVariablesFromTheme;
const getCssSizeVariablesFromTheme = theme => {
  return !!theme?.sizes && !!Object.entries(theme?.sizes)?.length && Object.entries(theme?.sizes).reduce((acc, _ref2) => {
    let [key, value] = _ref2;
    if (key?.length && value?.length) {
      acc[`--size-${camelCaseToKebabCase(key)}`] = value;
    }
    return acc;
  }, {});
};
exports.getCssSizeVariablesFromTheme = getCssSizeVariablesFromTheme;
const getCssVariablesFromTheme = theme => {
  return {
    ...getCssColorVariablesFromTheme(theme),
    ...getCssSizeVariablesFromTheme(theme)
  };
};
exports.getCssVariablesFromTheme = getCssVariablesFromTheme;
const addGlobalStylesheet = (styleElementId, styles) => {
  const style = document.createElement("style");
  style.setAttribute("id", styleElementId);
  style.textContent = styles;
  document.getElementById(styleElementId)?.remove();
  document.head.appendChild(style);
};
exports.addGlobalStylesheet = addGlobalStylesheet;
const stringifyCssColorVariables = colorVariables => {
  return Object.keys(colorVariables).reduce((css, key) => {
    return `${css}${key}: ${colorVariables[key]};`;
  }, "");
};
exports.stringifyCssColorVariables = stringifyCssColorVariables;
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
  const firstFocusableElement = focusableElements?.length ? focusableElements[0] : null;
  const lastFocusableElement = focusableElements?.length > 1 ? focusableElements[focusableElements.length - 1] : firstFocusableElement;
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