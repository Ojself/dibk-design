"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _theme = require("../functions/theme");
var _InfoBoxModule = _interopRequireDefault(require("./InfoBox.module.scss"));
var _infoSign = _interopRequireDefault(require("../assets/svg/info-sign.svg?url"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InfoBox = props => {
  const getThemeInfoBoxStyle = () => {
    return {
      borderColor: (0, _theme.getThemePaletteBackgroundColor)(props.theme, "secondary-light")
    };
  };
  return _react.default.createElement("div", {
    className: _InfoBoxModule.default.infoBox,
    style: getThemeInfoBoxStyle()
  }, _react.default.createElement("img", {
    src: _infoSign.default,
    alt: "",
    className: _InfoBoxModule.default.infoSign
  }), props.children);
};
InfoBox.propTypes = {
  theme: _propTypes.default.object
};
InfoBox.defaultProps = {
  children: ""
};
var _default = exports.default = InfoBox;