"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AccordionModule = _interopRequireDefault(require("./Accordion.module.scss"));

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

var Accordion = /*#__PURE__*/function (_React$Component) {
  _inherits(Accordion, _React$Component);

  var _super = _createSuper(Accordion);

  function Accordion(props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _super.call(this, props);
    _this.state = {
      expanded: _this.props.expanded,
      initialized: _this.props.expanded
    };
    _this.handleToggleExpand = _this.handleToggleExpand.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Accordion, [{
    key: "handleToggleExpand",
    value: function handleToggleExpand() {
      this.setState({
        expanded: !this.state.expanded,
        initialized: true
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.expanded !== prevProps.expanded) {
        this.setState({
          expanded: this.props.expanded
        });
      }
    }
  }, {
    key: "renderPanel",
    value: function renderPanel() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _AccordionModule.default.panel,
        onClick: this.handleToggleExpand
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: _AccordionModule.default.panelText
      }, this.props.title), /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(_AccordionModule.default.panelChevron, " ").concat(this.state.expanded ? _AccordionModule.default.expanded : '')
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var className = "".concat(_AccordionModule.default.accordion, " ").concat(this.props.color ? _AccordionModule.default[this.props.color] : '');
      return /*#__PURE__*/_react.default.createElement("div", {
        className: className
      }, this.renderPanel(), /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_AccordionModule.default.content, " ").concat(this.state.initialized ? _AccordionModule.default.initialized : '', " ").concat(this.state.expanded ? _AccordionModule.default.expanded : '')
      }, this.props.children));
    }
  }]);

  return Accordion;
}(_react.default.Component);

Accordion.propTypes = {
  /** Content title inside box */
  title: _propTypes.default.string,
  titleSize: _propTypes.default.oneOf(['regular', 'large']),

  /** Text content inside box */
  content: _propTypes.default.string,
  color: _propTypes.default.oneOf(['default', 'primary', 'success', 'warning', 'info', 'lightCyan', 'orange', 'lightOrange', 'lime', 'lightLime']),
  expanded: _propTypes.default.bool
};
Accordion.defaultProps = {
  title: null,
  titleSize: 'regular',
  href: null,
  content: '',
  color: 'default',
  expanded: false
};
var _default = Accordion;
exports.default = _default;