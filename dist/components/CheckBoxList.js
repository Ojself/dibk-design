"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _CheckBoxListModule = _interopRequireDefault(require("./CheckBoxList.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckBoxList = function CheckBoxList(props) {
  var _props$legend;
  var renderChildElements = function renderChildElements(childElements) {
    return childElements.map(function (childElement, index) {
      var _childElement$type;
      if ((childElement === null || childElement === void 0 ? void 0 : (_childElement$type = childElement.type) === null || _childElement$type === void 0 ? void 0 : _childElement$type.name) === "CheckBoxListItem") {
        var childElementCopy = _react.default.cloneElement(childElement, {
          requiredGroup: props.required,
          compact: props.compact,
          key: "checkboxListItem-".concat(index)
        });
        return childElementCopy;
      } else {
        var _childElementCopy = _react.default.cloneElement(childElement, {
          key: "checkboxListChild-".concat(index)
        });
        return _childElementCopy;
      }
    });
  };
  return _react.default.createElement("fieldset", {
    className: _CheckBoxListModule.default.checkBoxList
  }, !!((_props$legend = props.legend) !== null && _props$legend !== void 0 && _props$legend.length) ? _react.default.createElement("legend", null, props.legend, props.required && _react.default.createElement("span", {
    className: _CheckBoxListModule.default.requiredSymbol
  }, "*")) : null, renderChildElements(props.children));
};
CheckBoxList.propTypes = {
  legend: _propTypes.default.string,
  required: _propTypes.default.bool,
  compact: _propTypes.default.bool
};
var _default = CheckBoxList;
exports.default = _default;