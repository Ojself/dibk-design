"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AccordionModule = _interopRequireDefault(require("./Accordion.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Accordion = function Accordion(props) {
  var _useState = (0, _react.useState)(props.expanded),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _useState3 = (0, _react.useState)(props.initialized),
      _useState4 = _slicedToArray(_useState3, 2),
      initialized = _useState4[0],
      setInitialized = _useState4[1];

  var handleToggleExpand = function handleToggleExpand() {
    setExpanded(!expanded);
    setInitialized(true);
  };

  (0, _react.useEffect)(function () {
    setExpanded(props.expanded);
  }, [props.expanded]);

  var renderPanel = function renderPanel() {
    return _react.default.createElement("button", {
      className: _AccordionModule.default.panel,
      onClick: handleToggleExpand,
      "aria-expanded": expanded ? "true" : "false"
    }, _react.default.createElement("span", {
      className: _AccordionModule.default.panelText
    }, props.title), _react.default.createElement("span", {
      className: "".concat(_AccordionModule.default.panelChevron, " ").concat(expanded ? _AccordionModule.default.expanded : "")
    }));
  };

  var className = "".concat(_AccordionModule.default.accordion, " ").concat(props.color ? _AccordionModule.default[props.color] : "");
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
  color: _propTypes.default.oneOf(["default", "primary", "success", "warning", "info", "lightCyan", "orange", "lightOrange", "lime", "lightLime"]),
  expanded: _propTypes.default.bool
};
Accordion.defaultProps = {
  title: null,
  titleSize: "regular",
  href: null,
  content: "",
  color: "default",
  expanded: false
};
var _default = Accordion;
exports.default = _default;