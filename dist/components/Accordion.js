"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _AccordionModule = _interopRequireDefault(require("./Accordion.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Accordion = props => {
  const [expanded, setExpanded] = (0, _react.useState)(props.expanded);
  const [initialized, setInitialized] = (0, _react.useState)(props.initialized);
  const handleToggleExpand = () => {
    setExpanded(!expanded);
    setInitialized(true);
    if (props.onToggleExpand) {
      props.onToggleExpand();
    }
  };
  (0, _react.useEffect)(() => {
    setExpanded(props.expanded);
  }, [props.expanded]);
  const renderPanel = () => {
    return _react.default.createElement("button", _extends({}, props.buttonProps, {
      className: _AccordionModule.default.panel,
      onClick: handleToggleExpand,
      "aria-expanded": expanded ? "true" : "false"
    }), _react.default.createElement("span", {
      className: _AccordionModule.default.panelText
    }, props.title), _react.default.createElement("span", {
      className: "".concat(_AccordionModule.default.panelChevron, " ").concat(expanded ? _AccordionModule.default.expanded : "")
    }));
  };
  const className = "".concat(_AccordionModule.default.accordion, " ").concat(props.color ? _AccordionModule.default[props.color] : "");
  return _react.default.createElement("div", {
    className: className
  }, renderPanel(), _react.default.createElement("div", {
    className: "".concat(_AccordionModule.default.content, " ").concat(initialized ? _AccordionModule.default.initialized : "", " ").concat(expanded ? _AccordionModule.default.expanded : "")
  }, props.children));
};
Accordion.propTypes = {
  title: _propTypes.default.string,
  titleSize: _propTypes.default.oneOf(["regular", "large"]),
  content: _propTypes.default.string,
  color: _propTypes.default.oneOf(["default", "secondary"]),
  expanded: _propTypes.default.bool,
  onToggleExpand: _propTypes.default.func,
  buttonProps: _propTypes.default.object
};
Accordion.defaultProps = {
  title: null,
  titleSize: "regular",
  href: null,
  content: "",
  color: "default",
  expanded: false
};
var _default = exports.default = Accordion;