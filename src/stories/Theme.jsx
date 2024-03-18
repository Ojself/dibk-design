// Dependencies
import React, { Fragment } from "react";
import PropTypes from "prop-types";

// Functions
import { getThemeLogo, getThemeAppName } from "../functions/theme";

// Assets
import logo from "../assets/svg/dibk-logo-mobile.svg?url";

// Stylesheets
import style from "./Theme.module.scss";
import Button from "./Button";
import Container from "./Container";
import Header from "./Header";
import Accordion from "./Accordion";

const Theme = (props) => {
    const renderColors = (theme) => {
        return Object.keys(theme.colors).map((color) => {
            const colorClassName = style[color];
            return (
                <Fragment key={color}>
                    <div>{color}</div>
                    <div className={`${style.color} ${colorClassName}`}></div>
                </Fragment>
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

    return props.theme ? (
        <React.Fragment>
            <Container maxWidth="100%">
                <Header size={2}>Colors</Header>
                <div className={style.colorPalette}> {renderColors(props.theme)}</div>
                <Header size={2}>Typography</Header>
                <Header size={1} htmlTag="p">
                    Heading size 1
                </Header>
                <Header size={2} htmlTag="p">
                    Heading size 2
                </Header>
                <Header size={3} htmlTag="p">
                    Heading size 3
                </Header>
                <Header size={4} htmlTag="p">
                    Heading size 4
                </Header>
                <Header size={5} htmlTag="p">
                    Heading size 5
                </Header>
                <p>Paragraph</p>
                <p>
                    <a href="#theme">Hyperlink</a>
                </p>
                <Accordion title="Accordion with default color">
                    <p>Accordion content</p>
                </Accordion>
                <Accordion title="Accordion with secondary color" color="secondary">
                    <p>Accordion content</p>
                </Accordion>
                <Button color="primary" content="Primary button" arrow="left" />
                <Button color="secondary" content="Secondary button" arrow="right" />
                {renderLogo(props.theme)}
            </Container>
        </React.Fragment>
    ) : (
        "Select a theme"
    );
};

Theme.propTypes = {
    theme: PropTypes.object.isRequired
};

Theme.defaultProps = {};

export default Theme;
