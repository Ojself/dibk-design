"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../functions/theme");

var _RadioButtonIconModule = _interopRequireDefault(require("./RadioButtonIcon.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RadioButtonIcon extends _react.default.Component {
  render() {
    let inlineStyle = {
      height: this.props.size,
      width: this.props.size
    };

    if (this.props.theme && this.props.checked) {
      inlineStyle = { ...inlineStyle,
        background: (0, _theme.getThemePaletteBackgroundColor)(this.props.theme, 'primary'),
        boxShadow: "0 0 0 1px ".concat((0, _theme.getThemePaletteBackgroundColor)(this.props.theme, 'primary'))
      };
    }

    return /*#__PURE__*/_react.default.createElement("span", {
      className: "".concat(_RadioButtonIconModule.default.radioButtonIcon, " ").concat(this.props.checked ? _RadioButtonIconModule.default.checked : ''),
      style: inlineStyle
    });
  }

}

RadioButtonIcon.propTypes = {
  size: _propTypes.default.string,
  checked: _propTypes.default.bool,
  theme: _propTypes.default.object
};
RadioButtonIcon.defaultProps = {
  size: '10px',
  checked: false
};
var _default = RadioButtonIcon;
exports.default = _default;