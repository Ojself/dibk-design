import React, { Fragment, useState } from 'react';
import NavigationBarListItem from './NavigationBarListItem';

import { classNameArrayToClassNameString } from '../functions/helpers';
import compactLogo from '../assets/svg/dibk-logo-mobile.svg?url';
import logo from '../assets/svg/dibk-logo.svg?url';
import style from './NavigationBar.module.scss';
import {
  getThemeAppName,
  getThemeLogo,
  getThemeLogoPadding,
} from '../functions/theme';
import type { ThemeProps } from './Theme';

export interface ListItemObject {
  name: string;
  href: string;
  listItems?: ListItemObject[];
}

export interface NavigationBarProps {
  primaryListItems?: ListItemObject[];
  secondaryListItems?: ListItemObject[];
  logoLink?: string;
  logoLinkTitle?: string;
  openLogoLinkInNewTab?: boolean;
  theme?: ThemeProps;
  compact?: boolean;
  mainContentId?: string;
  preventChildElementStacking?: boolean;
  children?: React.ReactNode;
}

const NavigationBar = ({
  primaryListItems = [],
  secondaryListItems = [],
  logoLink = '',
  logoLinkTitle,
  openLogoLinkInNewTab,
  theme,
  compact,
  mainContentId,
  preventChildElementStacking = false,
  children,
}: NavigationBarProps) => {
  const [active, setActive] = useState(false);
  const toggleList = () => setActive(!active);

  const getLogoThemeStyle = (theme?: ThemeProps) => ({
    padding: getThemeLogoPadding(theme),
  });

  const renderPrimaryList = (
    items: ListItemObject[] = primaryListItems,
    iteration = 0
  ): React.ReactNode => {
    return items.length ? (
      <ul className={style.primaryList}>
        {items.map((item, i) => {
          const key = `${iteration}-${i}`;
          return item.listItems ? (
            <li key={key}>
              <span>{item.name}</span>
              {renderPrimaryList(item.listItems, iteration + 1)}
            </li>
          ) : (
            <NavigationBarListItem listItem={item} key={key} />
          );
        })}
      </ul>
    ) : null;
  };

  const renderSecondaryList = () => {
    return secondaryListItems.length ? (
      <ul className={style.secondaryList}>
        {secondaryListItems.map((item, i) => (
          <NavigationBarListItem listItem={item} key={i} />
        ))}
      </ul>
    ) : null;
  };

  const renderLogo = (link?: string, title?: string) => {
    const themeLogo = getThemeLogo(theme);
    const themeAppName = getThemeAppName(theme);

    const alt =
      link && title
        ? ''
        : themeLogo && themeAppName
        ? `${themeAppName} logo`
        : 'DIBK logo';

    const logoElement = themeLogo ? (
      <img alt={alt} src={themeLogo} style={getLogoThemeStyle(theme)} />
    ) : (
      <img alt={alt} src={compact ? compactLogo : logo} />
    );

    if (link?.length) {
      return (
        <a
          href={link}
          title={title}
          target={openLogoLinkInNewTab ? '_blank' : undefined}
          rel={openLogoLinkInNewTab ? 'noopener noreferrer' : undefined}
        >
          {logoElement}
        </a>
      );
    }

    return logoElement;
  };

  const hasListItems =
    primaryListItems.length > 0 || secondaryListItems.length > 0;

  return (
    <div
      className={classNameArrayToClassNameString([
        compact && style.compact,
        style.navigationBarContainer,
      ])}
    >
      {mainContentId && (
        <a
          id="main-content-link"
          href={`#${mainContentId}`}
          className={style.mainContentLink}
        >
          <span id="main-content-link-text">Hopp til hovedinnhold</span>
        </a>
      )}

      <div
        className={classNameArrayToClassNameString([
          style.navigationBar,
          preventChildElementStacking && style.preventStacking,
        ])}
      >
        <div className={style.logoContainer}>
          {renderLogo(logoLink, logoLinkTitle)}
        </div>

        {children && <div className={style.childElements}>{children}</div>}

        {hasListItems && (
          <button
            type="button"
            className={`${style.menuToggle} ${active ? style.active : ''}`}
            onClick={toggleList}
            aria-expanded={active ? 'true' : 'false'}
            aria-controls="main-menu-dropdown"
          >
            {!compact && 'Meny'}
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
          <div
            className={classNameArrayToClassNameString([
              style.dropdownContainer,
              active && style.active,
            ])}
          >
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

export default NavigationBar;
