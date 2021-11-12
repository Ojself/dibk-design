"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CheckBoxListItemModule = _interopRequireDefault(require("./CheckBoxListItem.module.scss"));

var _CheckBoxInput = _interopRequireDefault(require("./CheckBoxInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CheckBoxListItem extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(_CheckBoxListItemModule.default.checkBoxListItem, " ").concat(this.props.checked ? _CheckBoxListItemModule.default.checked : '', " ").concat(this.props.contentOnly ? _CheckBoxListItemModule.default.contentOnly : '', " ").concat(this.props.compact ? _CheckBoxListItemModule.default.compact : '', " ").concat(this.props.hasErrors ? _CheckBoxListItemModule.default.hasErrors : '')
    }, /*#__PURE__*/_react.default.createElement(_CheckBoxInput.default, {
      onChange: this.props.onChange,
      checked: this.props.checked,
      contentOnly: this.props.contentOnly,
      hasErrors: this.props.hasErrors,
      id: this.props.id,
      theme: this.props.theme,
      checkmarkCharacter: this.props.checkmarkCharacter
    }, this.props.children));
  }

}

CheckBoxListItem.propTypes = {
  /** Text content inside list item */
  checked: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired,
  name: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  contentOnly: _propTypes.default.bool,
  theme: _propTypes.default.object,
  compact: _propTypes.default.bool,
  hasErrors: _propTypes.default.bool,
  checkmarkCharacter: _propTypes.default.string
};
CheckBoxListItem.defaultProps = {
  checked: false,
  id: '',
  name: '',
  contentOnly: false,
  hasErrors: false,
  checkmarkCharacter: '✔'
};
var _default = CheckBoxListItem;
exports.default = _default;