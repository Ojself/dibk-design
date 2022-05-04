"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ListModule = _interopRequireDefault(require("./List.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ListItem = function ListItem(props) {
  return /*#__PURE__*/_react.default.createElement("li", null, props.listItem);
};

var List = function List(props) {
  var renderList = function renderList() {
    var listItems = props.listItems.map(function (listItem, i) {
      return /*#__PURE__*/_react.default.createElement(ListItem, {
        listItem: listItem,
        key: i
      });
    });
    var listType = props.ordered ? "ol" : "ul";
    var defaultListStyle = props.ordered ? 'decimal' : 'disc';
    var scssValueProperty = "--listStyle";

    var listElement = /*#__PURE__*/_react.default.createElement(listType, {
      className: "".concat(_ListModule.default.list, " ").concat(!!props.compact ? _ListModule.default.compact : ''),
      style: _defineProperty({}, scssValueProperty, props.listStyle || defaultListStyle)
    }, listItems);

    return listElement;
  };

  return renderList();
};

List.propTypes = {
  listItems: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])),
  ordered: _propTypes.default.bool
};
List.defaultProps = {
  listItems: [],
  ordered: false
};
var _default = List;
exports.default = _default;