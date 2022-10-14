// Dependencies
import React from "react";

// Components
import RadioButtonInput from "./RadioButtonInput";

// Theme
import customTheme from "data/customTheme";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/RadioButtonInput",
    component: RadioButtonInput,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <RadioButtonInput {...args} />;

export const Unchecked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unchecked.args = {
    id: "radioButtonInput-1",
    children: "Label for unchecked radio button",
    inputValue: "value"
};

export const Checked = Template.bind({});
Checked.args = {
    id: "radioButtonInput-2",
    children: "Label for radio button",
    checked: true,
    inputValue: "value"
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
    id: "radioButtonInput-3",
    children: "Label for checked disabled radio button",
    checked: true,
    disabled: true,
    inputValue: "value"
};

export const UncheckedContentOnly = Template.bind({});
UncheckedContentOnly.args = {
    id: "radioButtonInput-4",
    children: "Label for unchecked radio button with content only",
    contentOnly: true,
    inputValue: "value"
};

export const CheckedContentOnly = Template.bind({});
CheckedContentOnly.args = {
    id: "radioButtonInput-5",
    children: "Label for checked radio button with content only",
    checked: true,
    contentOnly: true,
    inputValue: "value"
};

export const hasErrors = Template.bind({});
hasErrors.args = {
    id: "radioButtonInput-6",
    children: "Label for radio button with errors",
    hasErrors: true,
    inputValue: "value"
};

export const hasErrorsDisabled = Template.bind({});
hasErrorsDisabled.args = {
    id: "radioButtonInput-7",
    children: "Label for disabled radio button with errors",
    hasErrors: true,
    disabled: true,
    inputValue: "value"
};

export const hasErrorsChecked = Template.bind({});
hasErrorsChecked.args = {
    id: "radioButtonInput-8",
    children: "Label for checked radio button with errors",
    hasErrors: true,
    checked: true,
    inputValue: "value"
};

export const hasErrorsCheckedDisabled = Template.bind({});
hasErrorsCheckedDisabled.args = {
    id: "radioButtonInput-9",
    children: "Label for checked disabled radio button with errors",
    hasErrors: true,
    checked: true,
    disabled: true,
    inputValue: "value"
};

export const Required = Template.bind({});
Required.args = {
    id: "radioButtonInput-10",
    required: true,
    children: "Label for required radio button",
    inputValue: "value"
};

export const CheckedCustomTheme = Template.bind({});
CheckedCustomTheme.args = {
    id: "radioButtonInput-11",
    children: "Label for checked checkbox with custom theme",
    checked: true,
    theme: customTheme,
    inputValue: "value"
};
