// Dependencies
import React from "react";

// Components
import RadioButtonListItem from "./RadioButtonListItem";

// Theme
import customTheme from "data/customTheme";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/RadioButtonListItem",
    component: RadioButtonListItem,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <RadioButtonListItem {...args} />;

export const Unchecked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unchecked.args = {
    id: "radioButtonListItem-1",
    children: "Label for unchecked checkbox",
    name: "radioButtonListItem"
};

export const Checked = Template.bind({});
Checked.args = {
    id: "radioButtonListItem-2",
    children: "Label for checked checkbox",
    checked: true,
    name: "radioButtonListItem"
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
    id: "radioButtonListItem-3",
    children: "Label for checked disabled checkbox",
    checked: true,
    disabled: true,
    name: "radioButtonListItem"
};

export const UncheckedContentOnly = Template.bind({});
UncheckedContentOnly.args = {
    id: "radioButtonListItem-4",
    children: "Label for unchecked checkbox with content only",
    contentOnly: true,
    name: "radioButtonListItem"
};

export const CheckedContentOnly = Template.bind({});
CheckedContentOnly.args = {
    id: "radioButtonListItem-5",
    children: "Label for checked checkbox with content only",
    checked: true,
    contentOnly: true,
    name: "radioButtonListItem"
};

export const CheckedCustomCheckmark = Template.bind({});
CheckedCustomCheckmark.args = {
    id: "radioButtonListItem-6",
    children: "Label for checked checkbox with custom checkmark",
    checked: true,
    disabled: true,
    checkmarkCharacter: "✕",
    name: "radioButtonListItem"
};

export const hasErrors = Template.bind({});
hasErrors.args = {
    id: "radioButtonListItem-7",
    children: "Label for checkbox with errors",
    hasErrors: true,
    name: "radioButtonListItem"
};

export const hasErrorsDisabled = Template.bind({});
hasErrorsDisabled.args = {
    id: "radioButtonListItem-8",
    children: "Label for disabled checkbox with errors",
    hasErrors: true,
    disabled: true,
    name: "radioButtonListItem"
};

export const hasErrorsChecked = Template.bind({});
hasErrorsChecked.args = {
    id: "radioButtonListItem-9",
    children: "Label for checked checkbox with errors",
    hasErrors: true,
    checked: true
};

export const hasErrorsCheckedDisabled = Template.bind({});
hasErrorsCheckedDisabled.args = {
    id: "radioButtonListItem-10",
    children: "Label for checked disabled checkbox with errors",
    hasErrors: true,
    checked: true,
    disabled: true
};

export const CheckedCustomThemeAndCheckmark = Template.bind({});
CheckedCustomThemeAndCheckmark.args = {
    id: "radioButtonListItem-11",
    children: "Label for checked checkbox with custom theme and checkmark",
    checked: true,
    checkmarkCharacter: "✕",
    theme: customTheme
};
