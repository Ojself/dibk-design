// Dependencies
import React from "react";

// Components
import Select from "./Select";

// Theme
import customTheme from "data/customTheme";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Select",
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Select {...args} />;

const options = ["option 1", "option 2", { key: "option 3", value: "value 3" }];

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    id: "select1",
    options
};



export const WithLabel = Template.bind({});
WithLabel.args = {
    id: "select2",
    label: "Select with label",
    options
};

export const WithSelectedValue = Template.bind({});
WithSelectedValue.args = {
    id: "select3",
    label: "Select with label and selected value",
    value: "value 3",
    options
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
    id: "select4",
    label: "Select with label and default value",
    defaultValue: "value 3",
    options
};

export const WithError = Template.bind({});
WithError.args = {
    id: "select5",
    label: "Select with label, selected value, errors and error message",
    value: "value 3",
    hasErrors: true,
    errorMessage: "Wrong value selected",
    options
};

export const WithLinkInLabel = Template.bind({});
WithLinkInLabel.args = {
    id: "select6",
    label: [
        "Select with ",
        <a key="labelLink" href="#select6">
            link
        </a>,
        " in label"
    ],
    value: "value 3",
    options
};

export const Disabled = Template.bind({});
Disabled.args = {
    id: "select7",
    disabled: true,
    label: "Disabled select with label and selected value",
    value: "value 3",
    options
};

export const Required = Template.bind({});
Required.args = {
    id: "select8",
    required: true,
    label: "Required select with label",
    options
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
    id: "select9",
    label: "Select with label, placeholder and placeholderValue",
    placeholder: "Select from list",
    placeholderValue: "notSelected",
    value: "notSelected",
    options
};

export const WithContentOnly = Template.bind({});
WithContentOnly.args = {
    id: "select10",
    label: "Select with label, selected value and contentOnly set to true",
    value: "value 3",
    contentOnly: true,
    options
};

export const WithContentOnlyAndKeyAsContent = Template.bind({});
WithContentOnlyAndKeyAsContent.args = {
    id: "select11",
    label: "Select with label, selected value, contentOnly set to true and keyAsContent set to true",
    value: "value 3",
    contentOnly: true,
    keyAsContent: true,
    options
};

export const WithContentOnlyAndDefaultContent = Template.bind({});
WithContentOnlyAndDefaultContent.args = {
    id: "select12",
    label: "Select with label, contentOnly set to true, no value and defaultContent",
    contentOnly: true,
    defaultContent: "No value selected",
    options
};

export const WithCustomWidth = Template.bind({});
WithCustomWidth.args = {
    id: "select13",
    label: "Select with custom width",
    width: "250px",
    options
};

export const WithCustomTheme = Template.bind({});
WithCustomTheme.args = {
    id: "select14",
    label: "Select with custom theme",
    theme: customTheme,
    options
};

export const Multiple = Template.bind({});
Multiple.args = {
    id: "select15",
    label: "Multiple select with label",
    multiple: true,
    options
};

export const MultipleWithSelectedValue = Template.bind({});
MultipleWithSelectedValue.args = {
    id: "select16",
    label: "Multiple select with label and selected value",
    value: ["option 1", "value 3"],
    multiple: true,
    options,
    onChange: (value) => {console.log(value);}
};

export const MultipleWithDefaultValue = Template.bind({});
MultipleWithDefaultValue.args = {
    id: "select17",
    label: "Multiple select with label and default value",
    defaultValue: ["option 1", "value 3"],
    multiple: true,
    options
};
