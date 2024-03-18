// Dependencies
import React from "react";

// Components
import Paper from "./Paper";
import ThemeProvider from "./ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Paper",
    component: Paper,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
    <ThemeProvider theme={args.theme}>
        <Paper {...args}></Paper>
    </ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

export const WithContent = Template.bind({});
WithContent.args = {
    children: <>Paper with content</>
};

export const WithNoPadding = Template.bind({});
WithNoPadding.args = {
    children: <>Paper with no padding</>,
    noPadding: true
};

export const WithNoMargin = Template.bind({});
WithNoMargin.args = {
    children: <>Paper with no margin</>,
    noMargin: true
};

export const WithNoMarginOrPadding = Template.bind({});
WithNoMarginOrPadding.args = {
    children: <>Paper with no margin or padding</>,
    noPadding: true,
    noMargin: true
};
