"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CheckBoxListModule = _interopRequireDefault(require("./CheckBoxList.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckBoxList = function CheckBoxList(props) {
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: _CheckBoxListModule.default.checkBoxList
  }, props.children);
};

var _default = CheckBoxList;
exports.default = _default;