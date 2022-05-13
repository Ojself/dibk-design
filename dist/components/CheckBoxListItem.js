"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CheckBoxInput = _interopRequireDefault(require("./CheckBoxInput"));

var _helpers = require("../functions/helpers");

var _CheckBoxListItemModule = _interopRequireDefault(require("./CheckBoxListItem.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
// Components
// Functions
// Stylesheets
var CheckBoxListItem = function CheckBoxListItem(props) {
  var listItemClassNameArray = [_CheckBoxListItemModule.default.checkBoxListItem, props.checked ? _CheckBoxListItemModule.default.checked : null, props.disabled ? _CheckBoxListItemModule.default.disabled : null, props.compact ? _CheckBoxListItemModule.default.compact : null, props.contentOnly ? _CheckBoxListItemModule.default.contentOnly : null, props.hasErrors ? _CheckBoxListItemModule.default.hasErrors : null];
  var listItemClassNameString = (0, _helpers.classNameArrayToClassNameString)(listItemClassNameArray);
  var inputProps = {
    onChange: props.onChange,
    checked: props.checked,
    disabled: props.disabled,
    contentOnly: props.contentOnly,
    hasErrors: props.hasErrors,
    id: props.id,
    theme: props.theme,
    checkmarkCharacter: props.checkmarkCharacter
  };
  return /*#__PURE__*/_react.default.createElement("li", {
    className: listItemClassNameString
  }, /*#__PURE__*/_react.default.createElement(_CheckBoxInput.default, inputProps, props.children));
};

CheckBoxListItem.propTypes = {
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
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
  disabled: false,
  id: "",
  name: "",
  contentOnly: false,
  hasErrors: false,
  checkmarkCharacter: "✔"
};
var _default = CheckBoxListItem;
exports.default = _default;