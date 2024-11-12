"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _helpers = require("../functions/helpers");
var _asterisk = _interopRequireDefault(require("../assets/svg/asterisk.svg?url"));
var _CheckBoxListModule = _interopRequireDefault(require("./CheckBoxList.module.scss"));
var _Header = _interopRequireDefault(require("./Header"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CheckBoxList = _ref => {
  let {
    required,
    compact,
    legend,
    legendSize,
    children
  } = _ref;
  const renderChildElements = childElements => {
    const childElementsthroughFragments = (0, _helpers.cloneThroughFragments)(childElements);
    return childElementsthroughFragments.map((childElement, index) => {
      const isCheckBoxListItem = childElement?.props?.type === "CheckBoxListItem";
      if (isCheckBoxListItem) {
        const childElementCopy = _react.default.cloneElement(childElement, {
          requiredGroup: required,
          compact: compact,
          key: `checkboxListItem-${index}`
        });
        return childElementCopy;
      } else {
        return childElement;
      }
    });
  };
  return _react.default.createElement("fieldset", {
    className: _CheckBoxListModule.default.checkBoxList
  }, !!legend?.length ? _react.default.createElement("legend", null, legendSize ? _react.default.createElement(_Header.default, {
    size: legendSize
  }, legend) : legend, required && _react.default.createElement("img", {
    src: _asterisk.default,
    alt: "",
    className: _CheckBoxListModule.default.requiredSymbol
  })) : null, renderChildElements(_react.default.Children.toArray(children)));
};
CheckBoxList.propTypes = {
  legend: _propTypes.default.string,
  legendSize: _propTypes.default.oneOf([1, 2, 3, 4, 5]),
  required: _propTypes.default.bool,
  compact: _propTypes.default.bool
};
var _default = exports.default = CheckBoxList;