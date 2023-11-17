"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _helpers = require("../functions/helpers");
var _asterisk = _interopRequireDefault(require("../assets/svg/asterisk.svg?url"));
var _RadioButtonListModule = _interopRequireDefault(require("./RadioButtonList.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const RadioButtonList = props => {
  var _props$legend;
  const renderChildElements = childElements => {
    const childElementsthroughFragments = (0, _helpers.cloneThroughFragments)(childElements);
    return childElementsthroughFragments.map((childElement, index) => {
      var _childElement$type;
      const isRadioButtonListItem = (childElement === null || childElement === void 0 || (_childElement$type = childElement.type) === null || _childElement$type === void 0 ? void 0 : _childElement$type.name) === "RadioButtonListItem";
      const childElementProps = isRadioButtonListItem ? {
        requiredGroup: props.required,
        compact: props.compact,
        key: "radioButtonListItem-".concat(index)
      } : null;
      const childElementCopy = _react.default.cloneElement(childElement, childElementProps);
      return childElementCopy;
    });
  };
  return _react.default.createElement("fieldset", {
    className: _RadioButtonListModule.default.radioButtonList
  }, !!((_props$legend = props.legend) !== null && _props$legend !== void 0 && _props$legend.length) ? _react.default.createElement("legend", null, props.legend, props.required && _react.default.createElement("img", {
    src: _asterisk.default,
    alt: "",
    className: _RadioButtonListModule.default.requiredSymbol
  })) : null, renderChildElements(_react.default.Children.toArray(props.children)));
};
RadioButtonList.propTypes = {
  legend: _propTypes.default.string,
  required: _propTypes.default.bool,
  compact: _propTypes.default.bool
};
var _default = exports.default = RadioButtonList;