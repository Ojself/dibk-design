// Dependencies
import React from "react";

// Components
import LoadingAnimation from "./LoadingAnimation";
import ThemeProvider from "./ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/LoadingAnimation",
    component: LoadingAnimation,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
    <ThemeProvider theme={args.theme}>
        <LoadingAnimation {...args} />
    </ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    message: "Loading..."
};
