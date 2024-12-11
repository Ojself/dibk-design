"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _helpers = require("../functions/helpers");
var _ListModule = _interopRequireDefault(require("./List.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const List = props => {
  const renderChildElements = childElements => {
    const childElementsthroughFragments = (0, _helpers.cloneThroughFragments)(childElements);
    return childElementsthroughFragments.map((childElement, index) => {
      const childElementCopy = _react.default.cloneElement(childElement, {
        compact: props.compact,
        key: "listItem-".concat(index)
      });
      return childElementCopy;
    });
  };
  const renderList = children => {
    let listType = props.ordered ? "ol" : "ul";
    const defaultListStyle = props.ordered ? "decimal" : "disc";
    const scssValueProperty = "--listStyle";
    let listElement = _react.default.createElement(listType, {
      className: "".concat(_ListModule.default.list, " ").concat(!!props.compact ? _ListModule.default.compact : ""),
      style: {
        [scssValueProperty]: props.listStyle || defaultListStyle
      }
    }, renderChildElements(_react.default.Children.toArray(children)));
    return listElement;
  };
  return renderList(props.children);
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