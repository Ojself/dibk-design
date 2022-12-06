"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _HeaderModule = _interopRequireDefault(require("./Header.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Header = function Header(props) {
  var _props$htmlTag, _props$content;
  var bigClass = props.big ? _HeaderModule.default.bigHeader : "";
  var themeClass = props.theme ? _HeaderModule.default.hasTheme : "";
  var htmlTag = (_props$htmlTag = props.htmlTag) !== null && _props$htmlTag !== void 0 && _props$htmlTag.length ? props.htmlTag : "h".concat(props.size);
  var headerClass = _HeaderModule.default.header;
  var headerSizeClass = _HeaderModule.default["size-".concat(props.size)];
  var headerElement = _react.default.createElement(htmlTag, {
    className: "".concat(headerClass, " ").concat(headerSizeClass, " ").concat(bigClass, " ").concat(themeClass)
  }, !!((_props$content = props.content) !== null && _props$content !== void 0 && _props$content.length) ? props.content : props.children);
  return _react.default.createElement("div", {
    className: _HeaderModule.default.headerContainer
  }, " ", headerElement, " ");
};
Header.propTypes = {
  content: _propTypes.default.string,
  size: _propTypes.default.oneOf([1, 2, 3, 4, 5]),
  big: _propTypes.default.bool,
  htmlTag: _propTypes.default.string,
  theme: _propTypes.default.object
};
Header.defaultProps = {
  size: 1
};
var _default = Header;
exports.default = _default;