"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../functions/theme");

var _dibkLogoMobile = _interopRequireDefault(require("../images/dibk-logo-mobile.svg"));

var _NavigationBarListItem = _interopRequireDefault(require("./NavigationBarListItem"));

var _NavigationBarModule = _interopRequireDefault(require("./NavigationBar.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class NavigationBar extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  handleClickOutside() {
    this.setState({
      active: false
    });
  }

  toggleList() {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  getNavigationBarThemeStyle(theme) {
    return {
      backgroundColor: (0, _theme.getThemeNavigationBarBackgroundColor)(theme),
      color: (0, _theme.getThemeNavigationBarTextColor)(theme)
    };
  }

  getListItemThemeStyle(theme) {
    return {
      color: (0, _theme.getThemeNavigationBarTextColor)(theme),
      borderBottomColor: (0, _theme.getThemeNavigationBarTextColor)(theme)
    };
  }

  getLogoThemeStyle(theme) {
    return {
      padding: (0, _theme.getThemeLogoPadding)(theme)
    };
  }

  renderPrimaryList() {
    let items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.primaryListItems;
    let iteration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const listItemThemeStyle = this.getListItemThemeStyle(this.props.theme);
    let listItems = items.map((listItem, i) => {
      let key = iteration + '-' + i;

      if (listItem.listItems !== undefined) {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: key
        }, /*#__PURE__*/_react.default.createElement("span", {
          style: listItemThemeStyle
        }, listItem.name), this.renderPrimaryList(listItem.listItems, iteration + 1));
      } else {
        return /*#__PURE__*/_react.default.createElement(_NavigationBarListItem.default, {
          listItem: listItem,
          key: key,
          theme: this.props.theme
        });
      }
    });
    return /*#__PURE__*/_react.default.createElement("ul", {
      className: _NavigationBarModule.default.primaryList
    }, listItems);
  }

  renderSecondaryList() {
    let listItems = this.props.secondaryListItems.map((listItem, i) => {
      return /*#__PURE__*/_react.default.createElement(_NavigationBarListItem.default, {
        listItem: listItem,
        key: i,
        theme: this.props.theme
      });
    });
    return /*#__PURE__*/_react.default.createElement("ul", {
      className: _NavigationBarModule.default.secondaryList
    }, listItems);
  }

  renderLogo(logoLink) {
    const themeLogo = (0, _theme.getThemeLogo)(this.props.theme);
    const themeAppName = (0, _theme.getThemeAppName)(this.props.theme);
    const logoElement = themeLogo && themeAppName ? /*#__PURE__*/_react.default.createElement("img", {
      alt: "".concat(themeAppName, " logo"),
      src: themeLogo,
      style: this.getLogoThemeStyle(this.props.theme)
    }) : /*#__PURE__*/_react.default.createElement("img", {
      alt: "DIBK logo",
      src: _dibkLogoMobile.default
    });
    const logoLinkProps = {
      target: this.props.openLogoLinkInNewTab ? '_blank' : null,
      rel: this.props.openLogoLinkInNewTab ? 'noopener noreferrer' : null
    };
    return logoLink && logoLink.length ? /*#__PURE__*/_react.default.createElement("a", _extends({}, logoLinkProps, {
      href: logoLink
    }), logoElement) : logoElement;
  }

  render() {
    const navigationBarThemeStyle = this.getNavigationBarThemeStyle(this.props.theme);
    const hamburgerIconLineStyle = {
      backgroundColor: (0, _theme.getThemeNavigationBarTextColor)(this.props.theme)
    };
    return /*#__PURE__*/_react.default.createElement("header", null, /*#__PURE__*/_react.default.createElement("div", {
      className: _NavigationBarModule.default.isPresent
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _NavigationBarModule.default.navigationBar,
      style: navigationBarThemeStyle
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _NavigationBarModule.default.logoContainer
    }, this.renderLogo(this.props.logoLink)), this.props.children ? /*#__PURE__*/_react.default.createElement("div", {
      className: _NavigationBarModule.default.childElements
    }, this.props.children) : '', this.props.primaryListItems && this.props.primaryListItems.length || this.props.secondaryListItems && this.props.secondaryListItems.length ? /*#__PURE__*/_react.default.createElement("button", {
      className: "".concat(_NavigationBarModule.default.menuToggle, " ").concat(this.state.active ? _NavigationBarModule.default.active : ''),
      onClick: () => this.toggleList()
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: _NavigationBarModule.default.hamburgerIcon
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: _NavigationBarModule.default.line,
      style: hamburgerIconLineStyle
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: _NavigationBarModule.default.line,
      style: hamburgerIconLineStyle
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: _NavigationBarModule.default.line,
      style: hamburgerIconLineStyle
    }))) : ''), /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(_NavigationBarModule.default.dropdownContainer, " ").concat(this.state.active ? _NavigationBarModule.default.active : '')
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _NavigationBarModule.default.dropdown,
      style: navigationBarThemeStyle
    }, this.renderPrimaryList(), this.renderSecondaryList(), this.props.children)), /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(_NavigationBarModule.default.dropdownOverlay, " ").concat(this.state.active ? _NavigationBarModule.default.active : '')
    })));
  }

}

NavigationBar.propTypes = {
  /** Main links in navigation bar */
  primaryListItems: _propTypes.default.array,

  /** Secondary links in navigation bar */
  secondaryListItems: _propTypes.default.array,

  /** Link for logo */
  logoLink: _propTypes.default.string,

  /** Opens logo link in a new tab on click */
  openLogoLinkInNewTab: _propTypes.default.bool,

  /** Theme for navigation bar */
  theme: _propTypes.default.object
};
NavigationBar.defaultProps = {
  primaryListItems: [],
  secondaryListItems: [],
  logoLink: null
};
var _default = NavigationBar;
exports.default = _default;