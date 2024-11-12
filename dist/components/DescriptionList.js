"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _DescriptionListModule = _interopRequireDefault(require("./DescriptionList.module.scss"));
var _helpers = require("../functions/helpers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DescriptionList = _ref => {
  let {
    compact,
    titleWidth,
    children
  } = _ref;
  const renderChildElements = childElements => {
    const childElementsthroughFragments = (0, _helpers.cloneThroughFragments)(childElements);
    return childElementsthroughFragments.map((childElement, index) => {
      const childElementCopy = _react.default.cloneElement(childElement, {
        compact: compact,
        titleWidth: titleWidth,
        key: `descriptionListItem-${index}`
      });
      return childElementCopy;
    });
  };
  const renderList = children => {
    let listElement = _react.default.createElement("dl", {
      className: (0, _helpers.classNameArrayToClassNameString)([_DescriptionListModule.default.descriptionList, !!compact && _DescriptionListModule.default.compact]),
      style: {
        "--title-width": titleWidth || null
      }
    }, renderChildElements(_react.default.Children.toArray(children)));
    return listElement;
  };
  return renderList(children);
};
DescriptionList.propTypes = {
  compact: _propTypes.default.bool,
  titleWidth: _propTypes.default.string
};
DescriptionList.defaultProps = {
  compact: false
};
var _default = exports.default = DescriptionList;