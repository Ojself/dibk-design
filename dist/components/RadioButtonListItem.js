"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RadioButtonInput = _interopRequireDefault(require("./RadioButtonInput"));

var _helpers = require("../functions/helpers");

var _RadioButtonListItemModule = _interopRequireDefault(require("./RadioButtonListItem.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
// Components
// Functions
// Stylesheets
var RadioButtonListItem = function RadioButtonListItem(props) {
  var listItemClassNameArray = [_RadioButtonListItemModule.default.radioButtonListItem, props.disabled ? _RadioButtonListItemModule.default.disabled : null, props.compact ? _RadioButtonListItemModule.default.compact : null, props.contentOnly ? _RadioButtonListItemModule.default.contentOnly : null, props.hasErrors ? _RadioButtonListItemModule.default.hasErrors : null];
  var listItemClassNameString = (0, _helpers.classNameArrayToClassNameString)(listItemClassNameArray);
  var inputProps = {
    onChange: props.onChange,
    inputValue: props.inputValue,
    checked: props.checked,
    disabled: props.disabled,
    contentOnly: props.contentOnly,
    hasErrors: props.hasErrors,
    id: props.id,
    name: props.name,
    theme: props.theme
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: listItemClassNameString
  }, /*#__PURE__*/_react.default.createElement(_RadioButtonInput.default, inputProps, props.children));
};

RadioButtonListItem.propTypes = {
  inputValue: _propTypes.default.string.isRequired,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  name: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func,
  contentOnly: _propTypes.default.bool,
  theme: _propTypes.default.object,
  hasErrors: _propTypes.default.bool
};
RadioButtonListItem.defaultProps = {
  name: "",
  checked: false,
  disabled: false,
  contentOnly: false,
  hasErrors: false
};
var _default = RadioButtonListItem;
exports.default = _default;