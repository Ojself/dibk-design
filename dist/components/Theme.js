"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Accordion = _interopRequireDefault(require("./Accordion"));
var _Button = _interopRequireDefault(require("./Button"));
var _CheckBoxList = _interopRequireDefault(require("./CheckBoxList"));
var _CheckBoxListItem = _interopRequireDefault(require("./CheckBoxListItem"));
var _Container = _interopRequireDefault(require("./Container"));
var _DescriptionDetails = _interopRequireDefault(require("./DescriptionDetails"));
var _DescriptionList = _interopRequireDefault(require("./DescriptionList"));
var _DescriptionTerm = _interopRequireDefault(require("./DescriptionTerm"));
var _Header = _interopRequireDefault(require("./Header"));
var _List = _interopRequireDefault(require("./List"));
var _ListItem = _interopRequireDefault(require("./ListItem"));
var _NavigationBar = _interopRequireDefault(require("./NavigationBar"));
var _Paper = _interopRequireDefault(require("./Paper"));
var _RadioButtonList = _interopRequireDefault(require("./RadioButtonList"));
var _RadioButtonListItem = _interopRequireDefault(require("./RadioButtonListItem"));
var _ThemeModule = _interopRequireDefault(require("./Theme.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Theme = _ref => {
  let {
    theme
  } = _ref;
  const renderColors = theme => {
    return Object.keys(theme.colors).map(color => {
      const colorClassName = _ThemeModule.default[color];
      return _react.default.createElement(_react.Fragment, {
        key: color
      }, _react.default.createElement("div", null, color), _react.default.createElement("div", {
        className: "".concat(_ThemeModule.default.color, " ").concat(colorClassName)
      }));
    });
  };
  return theme ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_NavigationBar.default, {
    theme: theme
  }), _react.default.createElement(_Container.default, {
    maxWidth: "916px"
  }, _react.default.createElement(_Paper.default, {
    noMargin: true
  }, _react.default.createElement("section", null, _react.default.createElement(_Header.default, {
    size: 2
  }, "Colors"), _react.default.createElement("div", {
    className: _ThemeModule.default.colorPalette
  }, " ", renderColors(theme))), _react.default.createElement("section", null, _react.default.createElement(_Header.default, {
    size: 2
  }, "Typography"), _react.default.createElement(_Header.default, {
    size: 1,
    htmlTag: "p"
  }, "Heading size 1"), _react.default.createElement(_Header.default, {
    size: 2,
    htmlTag: "p"
  }, "Heading size 2"), _react.default.createElement(_Header.default, {
    size: 3,
    htmlTag: "p"
  }, "Heading size 3"), _react.default.createElement(_Header.default, {
    size: 4,
    htmlTag: "p"
  }, "Heading size 4"), _react.default.createElement(_Header.default, {
    size: 5,
    htmlTag: "p"
  }, "Heading size 5"), _react.default.createElement("p", null, "Paragraph"), _react.default.createElement("p", null, _react.default.createElement("a", {
    href: "#theme"
  }, "Hyperlink"))), _react.default.createElement("section", null, _react.default.createElement(_Header.default, {
    size: 2
  }, "Accordions"), _react.default.createElement(_Accordion.default, {
    title: "Accordion with default color"
  }, _react.default.createElement("p", null, "Accordion content")), _react.default.createElement(_Accordion.default, {
    title: "Accordion with secondary color",
    color: "secondary"
  }, _react.default.createElement("p", null, "Accordion content"))), _react.default.createElement("section", null, _react.default.createElement(_Header.default, {
    size: 2
  }, "Buttons"), _react.default.createElement(_Button.default, {
    color: "primary",
    content: "Primary button",
    arrow: "left"
  }), _react.default.createElement(_Button.default, {
    color: "secondary",
    content: "Secondary button",
    arrow: "right"
  })), _react.default.createElement("section", null, _react.default.createElement(_Header.default, {
    size: 2
  }, "Checkboxes"), _react.default.createElement(_CheckBoxList.default, {
    legend: "Default checkbox list"
  }, _react.default.createElement(_CheckBoxListItem.default, {
    onChange: () => {},
    checked: true,
    name: "checkboxlist",
    id: "checkboxList-listItem-1"
  }, "Label for checked checkbox"), _react.default.createElement(_CheckBoxListItem.default, {
    onChange: () => {},
    name: "checkboxlist",
    id: "checkboxList-listItem-2"
  }, "Label for unchecked checkbox"))), _react.default.createElement("section", null, _react.default.createElement(_Header.default, {
    size: 2
  }, "Radio buttons"), _react.default.createElement(_RadioButtonList.default, {
    legend: "Default radio button list"
  }, _react.default.createElement(_RadioButtonListItem.default, {
    onChange: () => {},
    inputValue: "value 1",
    name: "radio-button-list-list-item",
    id: "radioButtonList-listItem-1",
    checked: true
  }, "Checked radio button"), _react.default.createElement(_RadioButtonListItem.default, {
    onChange: () => {},
    inputValue: "value 2",
    name: "radio-button-list-list-item",
    id: "radioButtonList-listItem-2"
  }, "Unchecked radio button"))), _react.default.createElement("section", null, _react.default.createElement(_Header.default, {
    size: 2
  }, "Lists"), _react.default.createElement(_Header.default, {
    size: 3
  }, "Unordered list"), _react.default.createElement(_List.default, null, _react.default.createElement(_ListItem.default, null, "First list item"), _react.default.createElement(_ListItem.default, null, "Second list item"), _react.default.createElement(_ListItem.default, null, "Third list item")), _react.default.createElement(_Header.default, {
    size: 3
  }, "Ordered list"), _react.default.createElement(_List.default, {
    ordered: true
  }, _react.default.createElement(_ListItem.default, null, "First list item"), _react.default.createElement(_ListItem.default, null, "Second list item"), _react.default.createElement(_ListItem.default, null, "Third list item"))), _react.default.createElement("section", null, _react.default.createElement(_Header.default, {
    size: 2
  }, "Description lists"), _react.default.createElement(_Header.default, {
    size: 3
  }, "Description list variable title width"), _react.default.createElement(_DescriptionList.default, null, _react.default.createElement(_DescriptionTerm.default, null, "First description term:"), _react.default.createElement(_DescriptionDetails.default, null, "First description details"), _react.default.createElement(_DescriptionTerm.default, null, "Second description term:"), _react.default.createElement(_DescriptionDetails.default, null, "Second description details"), _react.default.createElement(_DescriptionTerm.default, null, "Third description term:"), _react.default.createElement(_DescriptionDetails.default, null, "Third description details")), _react.default.createElement(_Header.default, {
    size: 3
  }, "Description list with static title width"), _react.default.createElement(_DescriptionList.default, {
    titleWidth: "240px"
  }, _react.default.createElement(_DescriptionTerm.default, null, "First description term:"), _react.default.createElement(_DescriptionDetails.default, null, "First description details"), _react.default.createElement(_DescriptionTerm.default, null, "Second description term:"), _react.default.createElement(_DescriptionDetails.default, null, "Second description details"), _react.default.createElement(_DescriptionTerm.default, null, "Third description term:"), _react.default.createElement(_DescriptionDetails.default, null, "Third description details")))))) : "Select a theme";
};
Theme.propTypes = {
  theme: _propTypes.default.object.isRequired
};
Theme.defaultProps = {};
var _default = exports.default = Theme;