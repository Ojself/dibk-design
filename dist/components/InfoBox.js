"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _InfoBoxModule = _interopRequireDefault(require("./InfoBox.module.scss"));
var _infoSign = _interopRequireDefault(require("../assets/svg/info-sign.svg?url"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const InfoBox = props => {
  return _react.default.createElement("div", {
    className: _InfoBoxModule.default.infoBox
  }, _react.default.createElement("img", {
    src: _infoSign.default,
    alt: "",
    className: _InfoBoxModule.default.infoSign
  }), props.children);
};
InfoBox.defaultProps = {
  children: ""
};
var _default = exports.default = InfoBox;