"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _theme = require("../functions/theme");
var _ErrorBoxModule = _interopRequireDefault(require("./ErrorBox.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ErrorBox = function ErrorBox(props) {
  var getThemeErrorBoxStyle = function getThemeErrorBoxStyle() {
    return {
      borderColor: (0, _theme.getThemePaletteBackgroundColor)(props.theme, "warning")
    };
  };
  return _react.default.createElement("div", {
    className: _ErrorBoxModule.default.errorBox,
    style: getThemeErrorBoxStyle()
  }, props.children);
};
ErrorBox.propTypes = {
  theme: _propTypes.default.object
};
ErrorBox.defaultProps = {
  children: ""
};
var _default = ErrorBox;
exports.default = _default;