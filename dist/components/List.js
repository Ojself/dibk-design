"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ListModule = _interopRequireDefault(require("./List.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const List = props => {
  const renderList = () => {
    let listType = props.ordered ? "ol" : "ul";
    const defaultListStyle = props.ordered ? "decimal" : "disc";
    const scssValueProperty = "--listStyle";
    let listElement = _react.default.createElement(listType, {
      className: "".concat(_ListModule.default.list, " ").concat(!!props.compact ? _ListModule.default.compact : ""),
      style: {
        [scssValueProperty]: props.listStyle || defaultListStyle
      }
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