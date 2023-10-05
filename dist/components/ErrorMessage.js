"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _theme = require("../functions/theme");
var _ErrorMessageModule = _interopRequireDefault(require("./ErrorMessage.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var ErrorMessage = function ErrorMessage(props) {
  var getThemeErrorMessageStyle = function getThemeErrorMessageStyle(theme) {
    return {
      color: (0, _theme.getThemePaletteBackgroundColor)(theme, "warning")
    };
  };
  var getErrorElementProps = function getErrorElementProps() {
    var _props$id;
    return {
      id: !!((_props$id = props.id) !== null && _props$id !== void 0 && _props$id.length) ? props.id : null,
      className: _ErrorMessageModule.default.errorMessage,
      style: getThemeErrorMessageStyle(props.theme)
    };
  };
  return _react.default.createElement("span", _extends({
    "aria-live": "polite"
  }, getErrorElementProps()), props.content ? props.content : "");
};
ErrorMessage.propTypes = {
  id: _propTypes.default.string,
  content: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  theme: _propTypes.default.object
};
ErrorMessage.defaultProps = {
  content: ""
};
var _default = exports.default = ErrorMessage;