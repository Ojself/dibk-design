"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ToggleNavigationButtonModule = _interopRequireDefault(require("./ToggleNavigationButton.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ToggleNavigationButton = _ref => {
  let {
    id,
    htmlTag,
    showText,
    hideText,
    buttonProps,
    isOpen
  } = _ref;
  const elementClass = _ToggleNavigationButtonModule.default.toggleNavigationButton;
  let element = _react.default.createElement(htmlTag, {
    className: elementClass,
    id: id || null
  }, isOpen ? hideText : showText);
  return element;
};
ToggleNavigationButton.propTypes = {
  id: _propTypes.default.string,
  htmlTag: _propTypes.default.string,
  showText: _propTypes.default.string,
  hideText: _propTypes.default.string,
  buttonProps: _propTypes.default.object,
  isOpen: _propTypes.default.bool
};
ToggleNavigationButton.defaultProps = {
  htmlTag: "button",
  isOpen: false
};
var _default = exports.default = ToggleNavigationButton;