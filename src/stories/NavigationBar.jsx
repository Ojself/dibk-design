// Dependencies
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

// Components
import NavigationBarListItem from "./NavigationBarListItem";

// Functions
import {
    getThemeAppName,
    getThemeLogo,
    getThemeLogoPadding,
    getThemeNavigationBarBackgroundColor,
    getThemeNavigationBarTextColor
} from "../functions/theme";

// Assets
import logo from "../assets/svg/dibk-logo-mobile.svg?url";

// Stylesheets
import style from "./NavigationBar.module.scss";

const NavigationBar = (props) => {
    // State
    const [active, setActive] = useState(false);

    const toggleList = () => {
        setActive(!active);
    };

    const getNavigationBarThemeStyle = (theme) => {
        return {
            backgroundColor: getThemeNavigationBarBackgroundColor(theme),
            color: getThemeNavigationBarTextColor(theme)
        };
    };

    const getListItemThemeStyle = (theme) => {
        return {
            color: getThemeNavigationBarTextColor(theme),
            borderBottomColor: getThemeNavigationBarTextColor(theme)
        };
    };

    const getLogoThemeStyle = (theme) => {
        return {
            padding: getThemeLogoPadding(theme)
        };
    };

    const renderPrimaryList = (items = props.primaryListItems, iteration = 0) => {
        const listItemThemeStyle = getListItemThemeStyle(props.theme);
        let listItems = items.map((listItem, i) => {
            let key = iteration + "-" + i;
            if (listItem.listItems !== undefined) {
                return (
                    <li key={key}>
                        <span style={listItemThemeStyle}>{listItem.name}</span>
                        {renderPrimaryList(listItem.listItems, iteration + 1)}
                    </li>
                );
            } else {
                return <NavigationBarListItem listItem={listItem} key={key} theme={props.theme} />;
            }
        });
        return !!listItems?.length && <ul className={style.primaryList}>{listItems}</ul>;
    };

    const renderSecondaryList = () => {
        let listItems = props.secondaryListItems.map((listItem, i) => {
            return <NavigationBarListItem listItem={listItem} key={i} theme={props.theme} />;
        });
        return !!listItems?.length && <ul className={style.secondaryList}>{listItems}</ul>;
    };

    const renderLogo = (logoLink) => {
        const themeLogo = getThemeLogo(props.theme);
        const themeAppName = getThemeAppName(props.theme);

        const logoElement =
            themeLogo && themeAppName ? (
                <img alt={`${themeAppName} logo`} src={themeLogo} style={getLogoThemeStyle(props.theme)} />
            ) : (
                <img alt="DIBK logo" src={logo} />
            );

        const logoLinkProps = {
            target: props.openLogoLinkInNewTab ? "_blank" : null,
            rel: props.openLogoLinkInNewTab ? "noopener noreferrer" : null
        };
        return logoLink && logoLink.length ? (
            <a {...logoLinkProps} href={logoLink}>
                {logoElement}
            </a>
        ) : (
            logoElement
        );
    };

    const navigationBarThemeStyle = getNavigationBarThemeStyle(props.theme);
    const hamburgerIconLineStyle = {
        backgroundColor: getThemeNavigationBarTextColor(props.theme)
    };

    const hasListItems = !!props.primaryListItems?.length || !!props.secondaryListItems?.length;

    return (
        <header>
            <div className={style.isPresent}>
                <div className={style.navigationBar} style={navigationBarThemeStyle}>
                    <div className={style.logoContainer}>{renderLogo(props.logoLink)}</div>
                    {!!props.children && <div className={style.childElements}>{props.children}</div>}
                    {hasListItems && (
                        <button
                            type="button"
                            className={`${style.menuToggle} ${active ? style.active : ""}`}
                            onClick={() => toggleList()}
                            aria-expanded={active ? "true" : "false"}
                            aria-controls="main-menu-dropdown"
                        >
                            <span className={style.hamburgerIcon}>
                                <span className={style.line} style={hamburgerIconLineStyle}></span>
                                <span className={style.line} style={hamburgerIconLineStyle}></span>
                                <span className={style.line} style={hamburgerIconLineStyle}></span>
                            </span>
                        </button>
                    )}
                </div>
                {hasListItems && (
                    <Fragment>
                        <div className={`${style.dropdownContainer} ${active ? style.active : ""}`}>
                            <div id="main-menu-dropdown" className={style.dropdown} style={navigationBarThemeStyle}>
                                {renderPrimaryList()}
                                {renderSecondaryList()}
                            </div>
                        </div>
                        <div className={`${style.dropdownOverlay} ${active ? style.active : ""}`}></div>
                    </Fragment>
                )}
            </div>
        </header>
    );
};

NavigationBar.propTypes = {
    /** Main links in navigation bar */
    primaryListItems: PropTypes.array,
    /** Secondary links in navigation bar */
    secondaryListItems: PropTypes.array,
    /** Link for logo */
    logoLink: PropTypes.string,
    /** Opens logo link in a new tab on click */
    openLogoLinkInNewTab: PropTypes.bool,
    /** Theme for navigation bar */
    theme: PropTypes.object
};

NavigationBar.defaultProps = {
    primaryListItems: [],
    secondaryListItems: [],
    logoLink: null
};

export default NavigationBar;
