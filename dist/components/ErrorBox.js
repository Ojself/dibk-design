"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _theme = require("../functions/theme");
var _helpers = require("functions/helpers");
var _ErrorBoxModule = _interopRequireDefault(require("./ErrorBox.module.scss"));
var _infoSign = _interopRequireDefault(require("../assets/svg/info-sign.svg?url"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ErrorBox = props => {
  const getThemeErrorBoxStyle = () => {
    return {
      borderColor: props.type === "error" ? (0, _theme.getThemePaletteBackgroundColor)(props.theme, "error") : (0, _theme.getThemePaletteBackgroundColor)(props.theme, "warning")
    };
  };
  return _react.default.createElement("div", {
    className: (0, _helpers.classNameArrayToClassNameString)([_ErrorBoxModule.default.errorBox, _ErrorBoxModule.default[props.type]]),
    style: getThemeErrorBoxStyle()
  }, _react.default.createElement("img", {
    src: _infoSign.default,
    alt: "",
    className: _ErrorBoxModule.default.infoSign
  }), props.children);
};
ErrorBox.propTypes = {
  theme: _propTypes.default.object,
  type: _propTypes.default.oneOf(["warning", "error"])
};
ErrorBox.defaultProps = {
  children: "",
  type: "warning"
};
var _default = exports.default = ErrorBox;