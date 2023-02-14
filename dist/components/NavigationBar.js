"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _NavigationBarListItem = _interopRequireDefault(require("./NavigationBarListItem"));
var _theme = require("../functions/theme");
var _dibkLogoMobile = _interopRequireDefault(require("../assets/svg/dibk-logo-mobile.svg?url"));
var _NavigationBarModule = _interopRequireDefault(require("./NavigationBar.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var NavigationBar = function NavigationBar(props) {
  var _props$primaryListIte, _props$secondaryListI;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var toggleList = function toggleList() {
    setActive(!active);
  };
  var getNavigationBarThemeStyle = function getNavigationBarThemeStyle(theme) {
    return {
      backgroundColor: (0, _theme.getThemeNavigationBarBackgroundColor)(theme),
      color: (0, _theme.getThemeNavigationBarTextColor)(theme)
    };
  };
  var getListItemThemeStyle = function getListItemThemeStyle(theme) {
    return {
      color: (0, _theme.getThemeNavigationBarTextColor)(theme),
      borderBottomColor: (0, _theme.getThemeNavigationBarTextColor)(theme)
    };
  };
  var getLogoThemeStyle = function getLogoThemeStyle(theme) {
    return {
      padding: (0, _theme.getThemeLogoPadding)(theme)
    };
  };
  var renderPrimaryList = function renderPrimaryList() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props.primaryListItems;
    var iteration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var listItemThemeStyle = getListItemThemeStyle(props.theme);
    var listItems = items.map(function (listItem, i) {
      var key = iteration + "-" + i;
      if (listItem.listItems !== undefined) {
        return _react.default.createElement("li", {
          key: key
        }, _react.default.createElement("span", {
          style: listItemThemeStyle
        }, listItem.name), renderPrimaryList(listItem.listItems, iteration + 1));
      } else {
        return _react.default.createElement(_NavigationBarListItem.default, {
          listItem: listItem,
          key: key,
          theme: props.theme
        });
      }
    });
    return !!(listItems !== null && listItems !== void 0 && listItems.length) && _react.default.createElement("ul", {
      className: _NavigationBarModule.default.primaryList
    }, listItems);
  };
  var renderSecondaryList = function renderSecondaryList() {
    var listItems = props.secondaryListItems.map(function (listItem, i) {
      return _react.default.createElement(_NavigationBarListItem.default, {
        listItem: listItem,
        key: i,
        theme: props.theme
      });
    });
    return !!(listItems !== null && listItems !== void 0 && listItems.length) && _react.default.createElement("ul", {
      className: _NavigationBarModule.default.secondaryList
    }, listItems);
  };
  var renderLogo = function renderLogo(logoLink) {
    var themeLogo = (0, _theme.getThemeLogo)(props.theme);
    var themeAppName = (0, _theme.getThemeAppName)(props.theme);
    var logoElement = themeLogo && themeAppName ? _react.default.createElement("img", {
      alt: "".concat(themeAppName, " logo"),
      src: themeLogo,
      style: getLogoThemeStyle(props.theme)
    }) : _react.default.createElement("img", {
      alt: "DIBK logo",
      src: _dibkLogoMobile.default
    });
    var logoLinkProps = {
      target: props.openLogoLinkInNewTab ? "_blank" : null,
      rel: props.openLogoLinkInNewTab ? "noopener noreferrer" : null
    };
    return logoLink && logoLink.length ? _react.default.createElement("a", _extends({}, logoLinkProps, {
      href: logoLink
    }), logoElement) : logoElement;
  };
  var navigationBarThemeStyle = getNavigationBarThemeStyle(props.theme);
  var hamburgerIconLineStyle = {
    backgroundColor: (0, _theme.getThemeNavigationBarTextColor)(props.theme)
  };
  var hasListItems = !!((_props$primaryListIte = props.primaryListItems) !== null && _props$primaryListIte !== void 0 && _props$primaryListIte.length) || !!((_props$secondaryListI = props.secondaryListItems) !== null && _props$secondaryListI !== void 0 && _props$secondaryListI.length);
  return _react.default.createElement("header", null, _react.default.createElement("div", {
    className: _NavigationBarModule.default.isPresent
  }, _react.default.createElement("div", {
    className: _NavigationBarModule.default.navigationBar,
    style: navigationBarThemeStyle
  }, _react.default.createElement("div", {
    className: _NavigationBarModule.default.logoContainer
  }, renderLogo(props.logoLink)), !!props.children && _react.default.createElement("div", {
    className: _NavigationBarModule.default.childElements
  }, props.children), hasListItems && _react.default.createElement("button", {
    type: "button",
    className: "".concat(_NavigationBarModule.default.menuToggle, " ").concat(active ? _NavigationBarModule.default.active : ""),
    onClick: function onClick() {
      return toggleList();
    },
    "aria-expanded": active ? "true" : "false",
    "aria-controls": "main-menu-dropdown"
  }, _react.default.createElement("span", {
    className: _NavigationBarModule.default.hamburgerIcon
  }, _react.default.createElement("span", {
    className: _NavigationBarModule.default.line,
    style: hamburgerIconLineStyle
  }), _react.default.createElement("span", {
    className: _NavigationBarModule.default.line,
    style: hamburgerIconLineStyle
  }), _react.default.createElement("span", {
    className: _NavigationBarModule.default.line,
    style: hamburgerIconLineStyle
  })))), hasListItems && _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
    className: "".concat(_NavigationBarModule.default.dropdownContainer, " ").concat(active ? _NavigationBarModule.default.active : "")
  }, _react.default.createElement("div", {
    id: "main-menu-dropdown",
    className: _NavigationBarModule.default.dropdown,
    style: navigationBarThemeStyle
  }, renderPrimaryList(), renderSecondaryList())), _react.default.createElement("div", {
    className: "".concat(_NavigationBarModule.default.dropdownOverlay, " ").concat(active ? _NavigationBarModule.default.active : "")
  }))));
};
NavigationBar.propTypes = {
  primaryListItems: _propTypes.default.array,
  secondaryListItems: _propTypes.default.array,
  logoLink: _propTypes.default.string,
  openLogoLinkInNewTab: _propTypes.default.bool,
  theme: _propTypes.default.object
};
NavigationBar.defaultProps = {
  primaryListItems: [],
  secondaryListItems: [],
  logoLink: null
};
var _default = NavigationBar;
exports.default = _default;