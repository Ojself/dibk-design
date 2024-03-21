import customThemes from "../src/data/customTheme";

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }
};

export default preview;

// All stories expect a theme arg
export const argTypes = {
    theme: {
        control: "select",
        options: ["Default", "DiBK", "Arbeidstilsynet"],
        mapping: { Default: null, DiBK: customThemes.dibk, Arbeidstilsynet: customThemes.arbeidstilsynet }
    }
};
