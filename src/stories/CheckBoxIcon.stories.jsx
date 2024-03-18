// Dependencies
import React from "react";

// Components
import CheckBoxIcon from "./CheckBoxIcon";
import ThemeProvider from "./ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/CheckBoxIcon",
    component: CheckBoxIcon,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
    return (
        <ThemeProvider theme={args.theme}>
            <CheckBoxIcon {...args} />
        </ThemeProvider>
    );
};

export const Unchecked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unchecked.args = {};

export const Checked = Template.bind({});
Checked.args = {
    checked: true
};

export const CheckedCustomCheckmark = Template.bind({});
CheckedCustomCheckmark.args = {
    checked: true,
    checkmarkCharacter: "✕"
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

export const CheckedDisabledCustomCheckmark = Template.bind({});
CheckedDisabledCustomCheckmark.args = {
    checked: true,
    disabled: true,
    checkmarkCharacter: "✕"
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
