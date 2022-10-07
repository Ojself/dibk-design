// Dependencies
import React from "react";

// Components
import ErrorMessage from "./ErrorMessage";

// Theme
import customTheme from "data/customTheme";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/ErrorMessage",
    component: ErrorMessage,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ErrorMessage {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    content: 'Wrong value'
};

export const WithCustomTheme = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithCustomTheme.args = {
    content: 'Wrong value',
    theme: customTheme
};
