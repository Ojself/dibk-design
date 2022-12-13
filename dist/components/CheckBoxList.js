"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _helpers = require("../functions/helpers");
var _CheckBoxListModule = _interopRequireDefault(require("./CheckBoxList.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CheckBoxList = function CheckBoxList(props) {
  var _props$legend;
  var renderChildElements = function renderChildElements(childElements) {
    var childElementsthroughFragments = (0, _helpers.cloneThroughFragments)(childElements);
    return childElementsthroughFragments.map(function (childElement, index) {
      var childElementCopy = _react.default.cloneElement(childElement, {
        requiredGroup: props.required,
        compact: props.compact,
        key: "checkboxListItem-".concat(index)
      });
      return childElementCopy;
    });
  };
  return _react.default.createElement("fieldset", {
    className: _CheckBoxListModule.default.checkBoxList
  }, !!((_props$legend = props.legend) !== null && _props$legend !== void 0 && _props$legend.length) ? _react.default.createElement("legend", null, props.legend, props.required && _react.default.createElement("span", {
    className: _CheckBoxListModule.default.requiredSymbol
  }, "*")) : null, renderChildElements(_react.default.Children.toArray(props.children)));
};
CheckBoxList.propTypes = {
  legend: _propTypes.default.string,
  required: _propTypes.default.bool,
  compact: _propTypes.default.bool
};
var _default = CheckBoxList;
exports.default = _default;