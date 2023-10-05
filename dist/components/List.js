"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ListModule = _interopRequireDefault(require("./List.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var List = function List(props) {
  var renderList = function renderList() {
    var listType = props.ordered ? "ol" : "ul";
    var defaultListStyle = props.ordered ? "decimal" : "disc";
    var scssValueProperty = "--listStyle";
    var listElement = _react.default.createElement(listType, {
      className: "".concat(_ListModule.default.list, " ").concat(!!props.compact ? _ListModule.default.compact : ""),
      style: _defineProperty({}, scssValueProperty, props.listStyle || defaultListStyle)
    }, props.children);
    return listElement;
  };
  return renderList();
};
List.propTypes = {
  listStyle: _propTypes.default.string,
  compact: _propTypes.default.bool,
  ordered: _propTypes.default.bool
};
List.defaultProps = {
  ordered: false,
  compact: false
};
var _default = exports.default = List;