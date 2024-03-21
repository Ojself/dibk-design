import customThemes from "../src/data/customTheme";

// All stories expect a theme arg
export const argTypes = {
    theme: {
        control: "select",
        options: ["Default", "DiBK", "Arbeidstilsynet"],
        mapping: { Default: null, DiBK: customThemes.dibk, "Arbeidstilsynet": customThemes.arbeidstilsynet }
    }
};
