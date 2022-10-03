// Dependencies
import React from "react";

// Components
import Container from "stories/Container";

// Stylesheets
import style from "./Footer.module.scss";

/**
 * Primary UI component for user interaction
 */
const Footer = (props) => {
    return (
        <footer className={style.footer}>
            <Container>{props.children}</Container>
        </footer>
    );
};

export default Footer;
