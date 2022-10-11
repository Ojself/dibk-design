// Dependencies
import React from "react";

// Components
import ProgressBar from "./ProgressBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/ProgressBar",
    component: ProgressBar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    progress: 25
};

export const WithError = Template.bind({});
WithError.args = {
    progress: 60,
    hasErrors: true
};
