"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Label = _interopRequireDefault(require("./Label"));
var _ErrorMessage = _interopRequireDefault(require("./ErrorMessage"));
var _CheckBoxList = _interopRequireDefault(require("./CheckBoxList"));
var _CheckBoxListItem = _interopRequireDefault(require("./CheckBoxListItem"));
var _theme = require("../functions/theme");
var _generators = require("../functions/generators");
var _helpers = require("../functions/helpers");
var _asterisk = _interopRequireDefault(require("../assets/svg/asterisk.svg?url"));
var _SelectModule = _interopRequireDefault(require("./Select.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Select = function Select(props) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showDropdownList = _useState2[0],
    setShowDropdownList = _useState2[1];
  var dropdownRef = (0, _react.useRef)();
  var wrapperRef = (0, _react.useCallback)(function (element) {
    if (!!element) {
      (0, _helpers.addFocusTrapInsideElement)(element);
    }
  }, []);
  var hideDropdownList = function hideDropdownList() {
    setShowDropdownList(false);
  };
  (0, _react.useEffect)(function () {
    var keyDownFunction = function keyDownFunction(event) {
      switch (event.keyCode) {
        case 27:
          hideDropdownList();
          break;
        default:
          return null;
      }
    };
    var handleClickOutside = function handleClickOutside(event) {
      if (dropdownRef !== null && dropdownRef !== void 0 && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        hideDropdownList();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", keyDownFunction, false);
  }, [props, wrapperRef]);
  var getThemeErrorInputStyle = function getThemeErrorInputStyle(theme) {
    return {
      boxShadow: "0 0 3px ".concat((0, _theme.getThemePaletteBackgroundColor)(theme, "warning")),
      borderColor: (0, _theme.getThemePaletteBackgroundColor)(theme, "warning")
    };
  };
  var getThemeArrowStyle = function getThemeArrowStyle(theme) {
    return {
      borderTopColor: (0, _theme.getThemePaletteBackgroundColor)(theme, "primary")
    };
  };
  var getKeyByValue = function getKeyByValue(value, options) {
    var selectedOption = options && options.length ? options.find(function (option) {
      if (_typeof(option) === "object") {
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
  };
  var createOptionObject = function createOptionObject(option) {
    if (_typeof(option) === "object") {
      return {
        key: option.key ? option.key : "",
        value: option.value ? option.value : ""
      };
    } else {
      return {
        key: option,
        value: option
      };
    }
  };
  var renderSelectedValues = function renderSelectedValues(options, selectElementProps) {
    var selectedValues = selectElementProps.defaultValue || selectElementProps.value;
    return selectedValues !== null && selectedValues !== void 0 && selectedValues.length ? selectedValues.map(function (value) {
      var keyForValue = getKeyByValue(value, options);
      return keyForValue;
    }).join(", ") : null;
  };
  var renderCheckBoxElements = function renderCheckBoxElements(options, selectElementProps) {
    return options.map(function (option, index) {
      var optionObject = createOptionObject(option);
      var selectedValues = selectElementProps.defaultValue || selectElementProps.value;
      var isSelected = selectedValues && selectedValues.length && selectedValues.includes(optionObject.value);
      return _react.default.createElement(_CheckBoxListItem.default, {
        key: index,
        id: "".concat(props.id, "-").concat(index),
        value: optionObject.value,
        checked: isSelected,
        onChange: function onChange() {
          return selectElementProps.onChange(optionObject.value);
        },
        theme: props.theme
      }, optionObject.key);
    });
  };
  var renderOptionElements = function renderOptionElements(options) {
    return options.map(function (option, key) {
      var optionObject = createOptionObject(option);
      return _react.default.createElement("option", {
        value: optionObject.value,
        key: key
      }, optionObject.key);
    });
  };
  var renderPlaceholderOption = function renderPlaceholderOption(placeholder, placeholderValue) {
    return placeholder ? _react.default.createElement("option", {
      value: placeholderValue,
      disabled: true,
      selected: true
    }, placeholder) : "";
  };
  var getErrorElementId = function getErrorElementId() {
    return "".concat(props.id, "-errorMessage");
  };
  if (props.contentOnly) {
    var value = props.defaultValue ? props.defaultValue : props.value || null;
    return _react.default.createElement("div", {
      className: _SelectModule.default.select
    }, _react.default.createElement(_Label.default, {
      htmlFor: props.id
    }, props.label), _react.default.createElement("span", null, value ? props.keyAsContent ? getKeyByValue(value, props.options) : value : props.defaultContent));
  } else {
    var _props$width, _props$errorMessage, _props$ariaDescribed, _selectElementProps, _props$width2;
    var defaultValue = !props.value && props.defaultValue ? props.defaultValue : false;
    var styleRules = _objectSpread(_objectSpread({}, props.hasErrors ? getThemeErrorInputStyle(props.theme) : null), ((_props$width = props.width) === null || _props$width === void 0 ? void 0 : _props$width.length) && {
      maxWidth: props.width
    });
    var className = (0, _helpers.classNameArrayToClassNameString)([props.hasErrors && _SelectModule.default.hasErrors, props.multiple && _SelectModule.default.multiple]);
    var selectElementProps = (_selectElementProps = {
      name: props.name,
      multiple: props.multiple,
      required: props.required,
      disabled: props.disabled
    }, _defineProperty(_selectElementProps, defaultValue ? "defaultValue" : "value", defaultValue || props.value), _defineProperty(_selectElementProps, "onChange", props.onChange), _defineProperty(_selectElementProps, "id", props.id), _defineProperty(_selectElementProps, "role", props.role), _defineProperty(_selectElementProps, "key", "".concat(props.id, "-").concat((0, _generators.generateRandomString)(6))), _defineProperty(_selectElementProps, "className", className), _defineProperty(_selectElementProps, "aria-describedby", props.hasErrors && !!((_props$errorMessage = props.errorMessage) !== null && _props$errorMessage !== void 0 && _props$errorMessage.length) ? getErrorElementId() : !!((_props$ariaDescribed = props["aria-describedby"]) !== null && _props$ariaDescribed !== void 0 && _props$ariaDescribed.length) ? props["aria-describedby"] : null), _defineProperty(_selectElementProps, "aria-invalid", props.hasErrors ? "true" : null), _defineProperty(_selectElementProps, "style", styleRules), _selectElementProps);
    return _react.default.createElement("div", {
      className: _SelectModule.default.select
    }, _react.default.createElement(_Label.default, {
      htmlFor: props.id
    }, props.label, props.required && _react.default.createElement("img", {
      src: _asterisk.default,
      alt: "",
      className: _SelectModule.default.requiredSymbol
    })), _react.default.createElement("div", {
      className: _SelectModule.default.selectContainer,
      style: _objectSpread({}, ((_props$width2 = props.width) === null || _props$width2 === void 0 ? void 0 : _props$width2.length) && {
        maxWidth: props.width
      })
    }, _react.default.createElement("span", {
      className: _SelectModule.default.selectListArrow,
      style: getThemeArrowStyle(props.theme)
    }), props.multiple ? _react.default.createElement("div", {
      ref: dropdownRef
    }, _react.default.createElement("div", {
      onClick: function onClick() {
        setShowDropdownList(!showDropdownList);
      },
      className: _SelectModule.default.multipleSelectElement
    }, renderSelectedValues(props.options, selectElementProps)), showDropdownList ? _react.default.createElement("div", {
      className: _SelectModule.default.multipleSelectDropdown
    }, _react.default.createElement(_CheckBoxList.default, {
      compact: true
    }, renderCheckBoxElements(props.options, selectElementProps))) : null) : _react.default.createElement("select", selectElementProps, renderPlaceholderOption(props.placeholder, props.placeholderValue), renderOptionElements(props.options))), _react.default.createElement(_ErrorMessage.default, {
      id: getErrorElementId(),
      content: props.errorMessage,
      theme: props.theme
    }));
  }
};
Select.propTypes = {
  id: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  multiple: _propTypes.default.bool,
  options: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]), _propTypes.default.shape({
    key: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
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
  "aria-describedby": _propTypes.default.string,
  hasErrors: _propTypes.default.bool,
  errorMessage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  theme: _propTypes.default.object
};
Select.defaultProps = {
  onChange: function onChange() {
    return false;
  },
  name: "",
  required: false,
  disabled: false,
  options: [],
  label: "",
  contentOnly: false,
  keyAsContent: false,
  placeholder: null,
  placeholderValue: "",
  defaultContent: null,
  hasErrors: false,
  errorMessage: ""
};
var _default = Select;
exports.default = _default;