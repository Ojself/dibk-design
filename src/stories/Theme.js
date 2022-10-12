// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Functions
import {
    getThemePaletteBackgroundColor,
    getThemePaletteTextColor,
    getThemeTextColor,
    getThemeLinkColor,
    getThemeLogo,
    getThemeAppName
} from "../functions/theme";

// Assets
import logo from "../assets/svg/dibk-logo-mobile.svg?url";

// Stylesheets
import style from "./Theme.module.scss";

const Theme = (props) => {
    const getThemeColorPaletteStyle = (theme, color) => {
        return {
            backgroundColor: getThemePaletteBackgroundColor(theme, color),
            color: getThemePaletteTextColor(theme, color)
        };
    };

    const getThemeTextStyle = (theme) => {
        return {
            color: getThemeTextColor(theme)
        };
    };

    const getThemeLinkStyle = (theme) => {
        return {
            color: getThemeLinkColor(theme)
        };
    };

    const renderColors = (theme) => {
        const colors = [
            "default",
            "primary",
            "success",
            "warning",
            "info",
            "lightCyan",
            "orange",
            "lightOrange",
            "lime",
            "lightLime"
        ];
        return colors.map((color) => {
            const colorClassName = style[color];
            const colorPaletteStyle = props.theme ? getThemeColorPaletteStyle(props.theme, color) : null;
            return (
                <div key={color} className={`${style.color} ${colorClassName}`} style={colorPaletteStyle}>
                    {color}
                </div>
            );
        });
    };

    const renderLogo = (logoLink) => {
        const themeLogo = getThemeLogo(props.theme);
        const themeAppName = getThemeAppName(props.theme);

        const logoElement =
            themeLogo && themeAppName ? (
                <img alt={`${themeAppName} logo`} src={themeLogo} />
            ) : (
                <img alt="DIBK logo" src={logo} />
            );
        return logoLink && logoLink.length ? <a href={logoLink}>{logoElement}</a> : logoElement;
    };

    const themeTextStyle = props.theme ? getThemeTextStyle(props.theme) : null;
    const themeLinkStyle = props.theme ? getThemeLinkStyle(props.theme) : null;
    return (
        <React.Fragment>
            <div className={style.colorPalette}>{renderColors(props.theme)}</div>
            <p style={themeTextStyle}>The is default text</p>
            <p>
                <a style={themeLinkStyle} href="#theme">
                    This is a hyperlink
                </a>
            </p>
            {renderLogo(props.theme)}
        </React.Fragment>
    );
};

Theme.propTypes = {
    theme: PropTypes.object
};

Theme.defaultProps = {};

export default Theme;
