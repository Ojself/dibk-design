"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Container = _interopRequireDefault(require("./Container"));
var _FooterModule = _interopRequireDefault(require("./Footer.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Footer = props => {
  return _react.default.createElement("footer", {
    className: _FooterModule.default.footer
  }, _react.default.createElement(_Container.default, null, props.children));
};
var _default = exports.default = Footer;