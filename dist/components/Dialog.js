"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DialogModule = _interopRequireDefault(require("./Dialog.module.scss"));

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

var Dialog = /*#__PURE__*/function (_React$Component) {
  _inherits(Dialog, _React$Component);

  var _super = _createSuper(Dialog);

  function Dialog(props) {
    var _this;

    _classCallCheck(this, Dialog);

    _this = _super.call(this, props);
    _this.state = {};
    _this.setWrapperRef = _this.setWrapperRef.bind(_assertThisInitialized(_this));
    _this.setHiddenInputWrapperRef = _this.setHiddenInputWrapperRef.bind(_assertThisInitialized(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized(_this));
    _this.keyDownFunction = _this.keyDownFunction.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
      document.addEventListener("keydown", this.keyDownFunction, false);
      this.hiddenInputWrapperRef.tabIndex = -1;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
      document.removeEventListener("keydown", this.keyDownFunction, false);
    }
  }, {
    key: "keyDownFunction",
    value: function keyDownFunction(event) {
      switch (event.keyCode) {
        case 27:
          // Escape
          if (this.props.onClickOutside) this.props.onClickOutside();
          break;

        default:
          return null;
      }
    }
  }, {
    key: "setWrapperRef",
    value: function setWrapperRef(node) {
      this.wrapperRef = node;
    }
  }, {
    key: "setHiddenInputWrapperRef",
    value: function setHiddenInputWrapperRef(node) {
      this.hiddenInputWrapperRef = node;
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.props.onClickOutside();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _DialogModule.default.dialogOverlay
      }, /*#__PURE__*/_react.default.createElement("div", {
        ref: this.setWrapperRef,
        className: "".concat(_DialogModule.default.dialogContent, " ").concat(this.props.noPadding ? _DialogModule.default.noPadding : ''),
        style: {
          maxWidth: this.props.maxWidth
        }
      }, this.props.closeButton ? /*#__PURE__*/_react.default.createElement("button", {
        onClick: this.props.onClickOutside,
        className: _DialogModule.default.closeButton
      }) : '', /*#__PURE__*/_react.default.createElement("input", {
        type: "button",
        ref: this.setHiddenInputWrapperRef,
        className: _DialogModule.default.hidden,
        autoFocus: true
      }), this.props.children));
    }
  }]);

  return Dialog;
}(_react.default.Component);

;
Dialog.propTypes = {
  /** Sets max width for modal content element */
  maxWidth: _propTypes.default.string,

  /** Removes padding from modal content element */
  noPadding: _propTypes.default.bool,

  /** Displays close button in upper right corner */
  closeButton: _propTypes.default.bool,

  /** Function for click outside modal content element or click on close button element */
  onClickOutside: _propTypes.default.func.isRequired
};
Dialog.defaultProps = {
  maxWidth: 'none'
};
var _default = Dialog;
exports.default = _default;