"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RadioButtonListModule = _interopRequireDefault(require("./RadioButtonList.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButtonList = function RadioButtonList(props) {
  var _props$legend;

  return _react.default.createElement("fieldset", {
    className: _RadioButtonListModule.default.radioButtonList
  }, !!((_props$legend = props.legend) !== null && _props$legend !== void 0 && _props$legend.length) ? _react.default.createElement("legend", null, props.legend) : null, props.children);
};

RadioButtonList.propTypes = {
  legend: _propTypes.default.string
};
var _default = RadioButtonList;
exports.default = _default;