"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CheckBoxListModule = _interopRequireDefault(require("./CheckBoxList.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
// Stylesheets
var CheckBoxList = function CheckBoxList(props) {
  var _props$legend;

  return /*#__PURE__*/_react.default.createElement("fieldset", {
    className: _CheckBoxListModule.default.checkBoxList
  }, !!((_props$legend = props.legend) !== null && _props$legend !== void 0 && _props$legend.length) ? /*#__PURE__*/_react.default.createElement("legend", null, props.legend) : null, props.children);
};

CheckBoxList.propTypes = {
  legend: _propTypes.default.string
};
var _default = CheckBoxList;
exports.default = _default;