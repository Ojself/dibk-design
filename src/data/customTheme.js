import dibkLogo from "../assets/svg/dibk-logo.svg?url";
import arbeidstilsynetLogo from "../assets/svg/arbeidstilsynet-logo.svg?url";

const customThemes = {
    dibk: {
        appName: "DiBK",
        logo: dibkLogo,
        sizes: {
            logoSmallWidth: "85px",
            logoLargeWidth: "100px"
        },
        colors: {
            bodyBackground: "#ebf4fa",
            defaultText: "#202020",
            headingText: "#003045",
            primaryText: "#005275",
            secondaryText: "#89bad6",
            primary: "#003045",
            primaryLight: "#264f61",
            primaryXLight: "#406474",
            primaryContrast: "#ffffff",
            secondary: "#ffffff",
            secondaryLight: "#c7e0f2",
            secondaryXLight: "#ebf4fa",
            secondaryContrast: "#005275",
            focus: "rgba(0, 92, 173, 0.4)",
            defaultBackground: "#f1fae3",
            secondaryBackground: "#f5f0f0",
            success: "#177912",
            successLight: "#cbebb0",
            successXLight: "#f1fae3",
            warning: "#ffbe00",
            warningLight: "#fcefb6",
            warningXLight: "#fff8db",
            error: "#db0000",
            errorLight: "#ffc5c2",
            errorXLight: "#fceceb"
        }
    },
    arbeidstilsynet: {
        appName: "Arbeidstilsynet",
        logo: arbeidstilsynetLogo,
        sizes: {
            logoSmallWidth: "169px",
            logoLargeWidth: "198px"
        },
        colors: {
            bodyBackground: "#ffffff", //
            defaultText: "#262626", //
            headingText: "#323232", //
            primaryText: "#D13C0A", //
            secondaryText: "#89bad6",
            primary: "#0D7168", //
            primaryLight: "#13a094", //
            primaryXLight: "#18cdbe", //
            primaryContrast: "#ffffff", //
            secondary: "#a0e6df", //
            secondaryLight: "#effbfa", //
            secondaryXLight: "#c7f0ec", //
            secondaryContrast: "#38514e", //
            focus: "#00C0B0", //
            defaultBackground: "#EDEEF2", //
            secondaryBackground: "#f6f7f9", //
            success: "#177912",
            successLight: "#cbebb0",
            successXLight: "#f1fae3",
            warning: "#ffbe00",
            warningLight: "#fcefb6",
            warningXLight: "#fff8db",
            error: "#db0000",
            errorLight: "#ffc5c2",
            errorXLight: "#fceceb"
        }
    }
};

export default customThemes;
