import customTheme from "../src/data/customTheme";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};

// All stories expect a theme arg
export const argTypes = { theme: { control: "select", options: ["Default", "Custom theme"], mapping: {"Default": null, "Custom theme": customTheme} } };
