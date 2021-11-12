"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../functions/theme");

var _CheckBoxIconModule = _interopRequireDefault(require("./CheckBoxIcon.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CheckBoxIcon extends _react.default.Component {
  render() {
    let inlineStyle = {
      height: this.props.size,
      width: this.props.size,
      fontSize: this.props.size
    };

    if (this.props.theme && this.props.checked) {
      inlineStyle = { ...inlineStyle,
        color: (0, _theme.getThemePaletteBackgroundColor)(this.props.theme, 'primary'),
        boxShadow: "0 0 0 1px ".concat((0, _theme.getThemePaletteBackgroundColor)(this.props.theme, 'primary')) // TODO: support theme error color

      };
    }

    return /*#__PURE__*/_react.default.createElement("span", {
      className: "".concat(_CheckBoxIconModule.default.checkBoxIcon, " ").concat(this.props.checked ? _CheckBoxIconModule.default.checked : '', " ").concat(this.props.showBox ? _CheckBoxIconModule.default.showBox : '', " ").concat(this.props.hasErrors ? _CheckBoxIconModule.default.hasErrors : ''),
      style: inlineStyle
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: _CheckBoxIconModule.default.checkmark
    }, this.props.checked ? this.props.checkmarkCharacter : ''));
  }

}

CheckBoxIcon.propTypes = {
  size: _propTypes.default.string,
  checked: _propTypes.default.bool,
  showBox: _propTypes.default.bool,
  theme: _propTypes.default.object,
  hasErrors: _propTypes.default.bool,
  checkmarkCharacter: _propTypes.default.string
};
CheckBoxIcon.defaultProps = {
  size: '20px',
  checked: false,
  showBox: true,
  hasErrors: false,
  checkmarkCharacter: '✔'
};
var _default = CheckBoxIcon;
exports.default = _default;