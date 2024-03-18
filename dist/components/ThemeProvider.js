"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _helpers = require("../functions/helpers");
var _ThemeProviderModule = _interopRequireDefault(require("!!raw-loader!sass-loader!./ThemeProvider.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ThemeProvider = _ref => {
  let {
    theme,
    children
  } = _ref;
  const cssVariablesFromTheme = (0, _helpers.getCssVariablesFromTheme)(theme);
  const cssColorVariablesString = (0, _helpers.stringifyCssColorVariables)(cssVariablesFromTheme);
  (0, _helpers.addGlobalStylesheet)("theme-provider", ":root {".concat(cssColorVariablesString, "} ").concat(_ThemeProviderModule.default));
  return children;
};
ThemeProvider.propTypes = {
  theme: _propTypes.default.object
};
var _default = exports.default = ThemeProvider;