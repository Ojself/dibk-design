// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Stylesheets
import { getCssColorVariablesFromTheme, stringifyCssColorVariables } from "functions/helpers";

const ThemeProvider = ({ injectToBody, theme, children }) => {
    const hasTheme = !!theme && Object.keys(theme).length > 0;
    const cssCssColorVariablesFromTheme = getCssColorVariablesFromTheme(theme);
    if (!hasTheme) {
        return children;
    }
    if (!injectToBody) {
        return <div style={{ ...cssCssColorVariablesFromTheme }}>{children}</div>;
    } else {
        const cssString = stringifyCssColorVariables(cssCssColorVariablesFromTheme);
        document.getElementsByTagName("body")[0].style = cssString;
        return children;
    }
};

ThemeProvider.propTypes = {
    theme: PropTypes.object,
    injectToBody: PropTypes.bool
};

ThemeProvider.defaultProps = {
    injectToBody: true
};

export default ThemeProvider;
