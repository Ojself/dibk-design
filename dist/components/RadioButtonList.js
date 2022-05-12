"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _RadioButtonListModule = _interopRequireDefault(require("./RadioButtonList.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButtonList = function RadioButtonList(props) {
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: _RadioButtonListModule.default.radioButtonList
  }, props.children);
};

var _default = RadioButtonList;
exports.default = _default;