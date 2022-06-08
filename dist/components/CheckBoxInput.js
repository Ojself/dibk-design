"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CheckBoxIcon = _interopRequireDefault(require("./CheckBoxIcon"));

var _CheckBoxInputModule = _interopRequireDefault(require("./CheckBoxInput.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CheckBoxInput = /*#__PURE__*/function (_React$Component) {
  _inherits(CheckBoxInput, _React$Component);

  var _super = _createSuper(CheckBoxInput);

  function CheckBoxInput() {
    _classCallCheck(this, CheckBoxInput);

    return _super.apply(this, arguments);
  }

  _createClass(CheckBoxInput, [{
    key: "render",
    value: function render() {
      var labelProps = {
        className: "".concat(_CheckBoxInputModule.default.checkBoxInput, " ").concat(this.props.contentOnly ? _CheckBoxInputModule.default.contentOnly : "", " ").concat(this.props.disabled ? _CheckBoxInputModule.default.disabled : "", " ").concat(this.props.hasErrors ? _CheckBoxInputModule.default.hasErrors : ""),
        htmlFor: this.props.id
      };
      var iconProps = {
        checked: this.props.checked,
        disabled: this.props.disabled,
        theme: this.props.theme,
        showBox: !this.props.contentOnly,
        hasErrors: this.props.contentOnly && this.props.hasErrors,
        checkmarkCharacter: this.props.checkmarkCharacter
      };
      var inputProps = {
        id: this.props.id,
        name: this.props.name || null,
        type: "checkbox",
        checked: this.props.checked,
        disabled: this.props.disabled,
        onChange: this.props.onChange,
        tabIndex: this.props.tabIndex || null,
        "aria-controls": this.props["aria-controls"]
      };
      return /*#__PURE__*/_react.default.createElement("label", labelProps, !this.props.contentOnly ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_CheckBoxIcon.default, iconProps), /*#__PURE__*/_react.default.createElement("input", inputProps)) : /*#__PURE__*/_react.default.createElement(_CheckBoxIcon.default, iconProps), /*#__PURE__*/_react.default.createElement("span", null, this.props.children));
    }
  }]);

  return CheckBoxInput;
}(_react.default.Component);

CheckBoxInput.propTypes = {
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired,
  name: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  contentOnly: _propTypes.default.bool,
  hasErrors: _propTypes.default.bool,
  theme: _propTypes.default.object,
  checkmarkCharacter: _propTypes.default.string,
  "aria-controls": _propTypes.default.string
};
CheckBoxInput.defaultProps = {
  checked: false,
  disabled: false,
  name: "",
  contentOnly: false,
  hasErrors: false,
  checkmarkCharacter: "✔"
};
var _default = CheckBoxInput;
exports.default = _default;