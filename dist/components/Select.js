"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Label = _interopRequireDefault(require("./Label"));

var _theme = require("../functions/theme");

var _SelectModule = _interopRequireDefault(require("./Select.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Select extends _react.default.Component {
  getThemeErrorInputStyle(theme) {
    return {
      boxShadow: "0 0 3px ".concat((0, _theme.getThemePaletteBackgroundColor)(theme, 'warning')),
      borderColor: (0, _theme.getThemePaletteBackgroundColor)(theme, 'warning')
    };
  }

  getThemeErrorMessageStyle(theme) {
    return {
      color: (0, _theme.getThemePaletteBackgroundColor)(theme, 'warning')
    };
  }

  getThemeArrowStyle(theme) {
    return {
      borderTopColor: (0, _theme.getThemePaletteBackgroundColor)(theme, 'primary')
    };
  }

  getKeyByValue(value, options) {
    const selectedOption = options && options.length ? options.find(option => {
      if (typeof option === 'object') {
        return option.value === value;
      } else {
        return option === value;
      }
    }) : null;

    if (selectedOption && selectedOption.key) {
      return selectedOption.key;
    } else if (selectedOption && selectedOption.value) {
      return selectedOption.value;
    } else {
      return selectedOption;
    }
  }

  renderOptionElements(options) {
    return options.map((option, key) => {
      let optionObject = null;

      if (typeof option === 'object') {
        optionObject = {
          key: option.key ? option.key : '',
          value: option.value ? option.value : ''
        };
      } else {
        optionObject = {
          key: option,
          value: option
        };
      }

      return /*#__PURE__*/_react.default.createElement("option", {
        value: optionObject.value,
        key: key
      }, optionObject.key);
    });
  }

  renderPlaceholderOption(placeholder, placeholderValue) {
    return placeholder ? /*#__PURE__*/_react.default.createElement("option", {
      value: placeholderValue,
      disabled: true
    }, placeholder) : '';
  }

  render() {
    if (this.props.contentOnly) {
      const value = this.props.defaultValue ? this.props.defaultValue : this.props.value || null;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _SelectModule.default.select
      }, /*#__PURE__*/_react.default.createElement(_Label.default, {
        htmlFor: this.props.id
      }, this.props.label), /*#__PURE__*/_react.default.createElement("span", null, value ? this.props.keyAsContent ? this.getKeyByValue(value, this.props.options) : value : this.props.defaultContent));
    } else {
      var _this$props$width, _this$props$width2;

      const defaultValue = !this.props.value && this.props.defaultValue ? this.props.defaultValue : false;
      const styleRules = { ...(this.props.hasErrors ? this.getThemeErrorInputStyle(this.props.theme) : null),
        ...(((_this$props$width = this.props.width) === null || _this$props$width === void 0 ? void 0 : _this$props$width.length) && {
          maxWidth: this.props.width
        })
      };
      const props = {
        name: this.props.name,
        multiple: this.props.multiple,
        [defaultValue ? 'defaultValue' : 'value']: defaultValue || this.props.value,
        onChange: this.props.onChange,
        id: this.props.id,
        className: this.props.hasErrors ? _SelectModule.default.hasErrors : '',
        style: styleRules
      };
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _SelectModule.default.select
      }, /*#__PURE__*/_react.default.createElement(_Label.default, {
        htmlFor: this.props.id
      }, this.props.label), /*#__PURE__*/_react.default.createElement("div", {
        className: _SelectModule.default.selectContainer,
        style: { ...(((_this$props$width2 = this.props.width) === null || _this$props$width2 === void 0 ? void 0 : _this$props$width2.length) && {
            maxWidth: this.props.width
          })
        }
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: _SelectModule.default.selectListArrow,
        style: this.getThemeArrowStyle(this.props.theme)
      }), /*#__PURE__*/_react.default.createElement("select", props, this.renderPlaceholderOption(this.props.placeholder, this.props.placeholderValue), this.renderOptionElements(this.props.options))), /*#__PURE__*/_react.default.createElement("span", {
        className: _SelectModule.default.errorMessage,
        style: this.getThemeErrorMessageStyle(this.props.theme)
      }, this.props.errorMessage ? this.props.errorMessage : ''));
    }
  }

}

Select.propTypes = {
  id: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  options: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
    key: _propTypes.default.string,
    value: _propTypes.default.string
  })])),
  width: _propTypes.default.string,
  value: _propTypes.default.any,
  defaultValue: _propTypes.default.any,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  contentOnly: _propTypes.default.bool,
  keyAsContent: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  placeholderValue: _propTypes.default.string,
  defaultContent: _propTypes.default.string,
  hasErrors: _propTypes.default.bool,
  errorMessage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  theme: _propTypes.default.object
};
Select.defaultProps = {
  name: '',
  options: [],
  label: '',
  contentOnly: false,
  keyAsContent: false,
  placeholder: null,
  placeholderValue: '',
  defaultContent: null,
  hasErrors: false,
  errorMessage: '',
  onChange: () => {
    return false;
  }
};
var _default = Select;
exports.default = _default;