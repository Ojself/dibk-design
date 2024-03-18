// Dependencies
import PropTypes from "prop-types";

// Helpers
import { addGlobalStylesheet, getCssVariablesFromTheme, stringifyCssColorVariables } from "../functions/helpers";

// Stylesheets
/* eslint import/no-webpack-loader-syntax: off */
import style from "!!raw-loader!sass-loader!./ThemeProvider.module.scss";

const ThemeProvider = ({ theme, children }) => {
    const cssVariablesFromTheme = getCssVariablesFromTheme(theme);
    const cssColorVariablesString = stringifyCssColorVariables(cssVariablesFromTheme);
    addGlobalStylesheet("theme-provider", `:root {${cssColorVariablesString}} ${style}`);
    return children;
};

ThemeProvider.propTypes = {
    theme: PropTypes.object
};

export default ThemeProvider;
