// Dependencies
import React from "react";

// Components
import RadioButtonIcon from "./RadioButtonIcon";

// Theme
import customTheme from "data/customTheme";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/RadioButtonIcon",
    component: RadioButtonIcon,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <RadioButtonIcon {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

export const Checked = Template.bind({});
Checked.args = {
    checked: true
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
    checked: true,
    disabled: true
};

export const hasErrors = Template.bind({});
hasErrors.args = {
    hasErrors: true
};

export const hasErrorsDisabled = Template.bind({});
hasErrorsDisabled.args = {
    hasErrors: true,
    disabled: true
};

export const hasErrorsChecked = Template.bind({});
hasErrorsChecked.args = {
    hasErrors: true,
    checked: true
};

export const hasErrorsCheckedDisabled = Template.bind({});
hasErrorsCheckedDisabled.args = {
    hasErrors: true,
    checked: true,
    disabled: true
};

export const CheckedCustomThemeAndSize = Template.bind({});
CheckedCustomThemeAndSize.args = {
    checked: true,
    size: "36px",
    theme: customTheme
};
