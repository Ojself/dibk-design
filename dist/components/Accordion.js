"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AccordionModule = _interopRequireDefault(require("./Accordion.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Accordion extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: this.props.expanded,
      initialized: this.props.expanded
    };
    this.handleToggleExpand = this.handleToggleExpand.bind(this);
  }

  handleToggleExpand() {
    this.setState({
      expanded: !this.state.expanded,
      initialized: true
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.expanded !== prevProps.expanded) {
      this.setState({
        expanded: this.props.expanded
      });
    }
  }

  renderPanel() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _AccordionModule.default.panel,
      onClick: this.handleToggleExpand
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: _AccordionModule.default.panelText
    }, this.props.title), /*#__PURE__*/_react.default.createElement("span", {
      className: "".concat(_AccordionModule.default.panelChevron, " ").concat(this.state.expanded ? _AccordionModule.default.expanded : '')
    }));
  }

  render() {
    const className = "".concat(_AccordionModule.default.accordion, " ").concat(this.props.color ? _AccordionModule.default[this.props.color] : '');
    return /*#__PURE__*/_react.default.createElement("div", {
      className: className
    }, this.renderPanel(), /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(_AccordionModule.default.content, " ").concat(this.state.initialized ? _AccordionModule.default.initialized : '', " ").concat(this.state.expanded ? _AccordionModule.default.expanded : '')
    }, this.props.children));
  }

}

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