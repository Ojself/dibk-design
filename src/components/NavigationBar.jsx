// Dependencies
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

// Components
import NavigationBarListItem from "./NavigationBarListItem";

// Functions
import { getThemeAppName, getThemeLogo, getThemeLogoPadding } from "../functions/theme";
import { classNameArrayToClassNameString } from "../functions/helpers";

// Assets
import compactLogo from "../assets/svg/dibk-logo-mobile.svg?url";
import logo from "../assets/svg/dibk-logo.svg?url";

// Stylesheets
import style from "./NavigationBar.module.scss";

const NavigationBar = (props) => {
    // State
    const [active, setActive] = useState(false);

    const toggleList = () => {
        setActive(!active);
    };

    const getLogoThemeStyle = (theme) => {
        return {
            padding: getThemeLogoPadding(theme)
        };
    };

    const renderPrimaryList = (items = props.primaryListItems, iteration = 0) => {
        let listItems = items.map((listItem, i) => {
            let key = iteration + "-" + i;
            if (listItem.listItems !== undefined) {
                return (
                    <li key={key}>
                        <span>{listItem.name}</span>
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

    const renderLogo = (logoLink, logoLinkTitle) => {
        const themeLogo = getThemeLogo(props.theme);
        const themeAppName = getThemeAppName(props.theme);

        const getLogoAltText = () => {
            if (logoLink && logoLinkTitle) {
                return "";
            } else if (themeLogo && themeAppName) {
                return `${themeAppName} logo`;
            } else {
                return "DIBK logo";
            }
        };

        const renderLogoElement = () => {
            const altText = getLogoAltText();
            return themeLogo ? (
                <img alt={altText} src={themeLogo} style={getLogoThemeStyle(props.theme)} />
            ) : (
                <img alt={altText} src={props.compact ? compactLogo : logo} />
            );
        };

        const logoLinkProps = {
            target: props.openLogoLinkInNewTab ? "_blank" : null,
            rel: props.openLogoLinkInNewTab ? "noopener noreferrer" : null
        };
        return logoLink && logoLink.length ? (
            <a {...logoLinkProps} href={logoLink} title={logoLinkTitle}>
                {renderLogoElement()}
            </a>
        ) : (
            renderLogoElement()
        );
    };

    const hasListItems = !!props.primaryListItems?.length || !!props.secondaryListItems?.length;

    return (
        <div
            className={classNameArrayToClassNameString([props.compact && style.compact, style.navigationBarContainer])}
        >
            {props.mainContentId?.length && (
                <a id="main-content-link" href={`#${props.mainContentId}`} className={style.mainContentLink}>
                    <span id="main-content-link-text">Hopp til hovedinnhold</span>
                </a>
            )}
            <div
                className={classNameArrayToClassNameString([
                    style.navigationBar,
                    props.preventChildElementStacking && style.preventStacking
                ])}
            >
                <div className={style.logoContainer}>{renderLogo(props.logoLink, props.logoLinkTitle)}</div>
                {!!props.children && <div className={style.childElements}>{props.children}</div>}
                {hasListItems && (
                    <button
                        type="button"
                        className={`${style.menuToggle} ${active ? style.active : ""}`}
                        onClick={() => toggleList()}
                        aria-expanded={active ? "true" : "false"}
                        aria-controls="main-menu-dropdown"
                    >
                        {!props.compact && "Meny"}
                        <span className={style.hamburgerIcon}>
                            <span className={style.line}></span>
                            <span className={style.line}></span>
                            <span className={style.line}></span>
                        </span>
                    </button>
                )}
            </div>
            {hasListItems && (
                <Fragment>
                    <div className={classNameArrayToClassNameString([style.dropdownContainer, active && style.active])}>
                        <div id="main-menu-dropdown" className={style.dropdown}>
                            {renderPrimaryList()}
                            {renderSecondaryList()}
                        </div>
                    </div>
                </Fragment>
            )}
        </div>
    );
};

NavigationBar.propTypes = {
    /** Main links in navigation bar */
    primaryListItems: PropTypes.array,
    /** Secondary links in navigation bar */
    secondaryListItems: PropTypes.array,
    /** Link for logo */
    logoLink: PropTypes.string,
    /** Title for the logo link */
    logoLinkTitle: PropTypes.string,
    /** Opens logo link in a new tab on click */
    openLogoLinkInNewTab: PropTypes.bool,
    /** Theme for navigation bar */
    theme: PropTypes.object,
    /** Prevent stacking of child elements on smaller screens */
    preventChildElementStacking: PropTypes.bool
};

NavigationBar.defaultProps = {
    primaryListItems: [],
    secondaryListItems: [],
    logoLink: null,
    preventChildElementStacking: false
};

export default NavigationBar;
