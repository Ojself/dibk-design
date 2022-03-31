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

// Dependencies
// Functions
// Stylesheets
var ErrorBox = function ErrorBox(_ref) {
  var theme = _ref.theme,
      children = _ref.children;

  var getThemeErrorBoxStyle = function getThemeErrorBoxStyle() {
    return {
      borderColor: (0, _theme.getThemePaletteBackgroundColor)(theme, 'warning')
    };
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: _ErrorBoxModule.default.errorBox,
    style: getThemeErrorBoxStyle()
  }, children);
};

ErrorBox.propTypes = {
  theme: _propTypes.default.object
};
ErrorBox.defaultProps = {
  children: ''
};
var _default = ErrorBox;
exports.default = _default;