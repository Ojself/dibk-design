// Dependencies
import React from "react";

// Components
import InputField from "./InputField";
import ThemeProvider from "./ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/InputField",
    component: InputField,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        "aria-autocomplete": { control: "select", options: ["none", "inline", "list", "both"] }
    }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
    <ThemeProvider theme={args.theme}>
        <InputField {...args} />
    </ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    id: "inputField1"
};

export const Required = Template.bind({});
Required.args = {
    id: "inputField2",
    required: true
};

export const WithValue = Template.bind({});
WithValue.args = {
    id: "inputField3",
    value: "Input field value"
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
    id: "inputField4",
    value: "Input field default value"
};

export const WithLabelAndValue = Template.bind({});
WithLabelAndValue.args = {
    id: "inputField5",
    value: "Input field value",
    label: "Input field label"
};

export const RequiredWithLabelAndValue = Template.bind({});
RequiredWithLabelAndValue.args = {
    id: "inputField6",
    value: "Input field value",
    label: "Input field label",
    required: true
};

export const WithLinkInLabel = Template.bind({});
WithLinkInLabel.args = {
    id: "inputField7",
    value: "Input field value",
    label: [
        "Input with ",
        <a key="labelLink" href="#label-link">
            link
        </a>,
        " in label"
    ]
};

export const WithErrors = Template.bind({});
WithErrors.args = {
    id: "inputField8",
    value: "Input field value",
    label: "Input with label, value, errors and error message",
    hasErrors: true,
    errorMessage: "Wrong value"
};

export const Readonly = Template.bind({});
Readonly.args = {
    id: "inputField9",
    value: "Input field value",
    label: "Readonly input",
    readOnly: true
};

export const Disabled = Template.bind({});
Disabled.args = {
    id: "inputField10",
    value: "Input field value",
    label: "Disabled input",
    disabled: true
};

export const Number = Template.bind({});
Number.args = {
    id: "inputField11",
    value: "3",
    label: "Input with number values",
    type: "number"
};

export const ContentOnly = Template.bind({});
ContentOnly.args = {
    id: "inputField12",
    value: "Input field value",
    label: "Input with contentOnly set to true",
    contentOnly: true
};

export const ContentOnlyWithDefaultContent = Template.bind({});
ContentOnlyWithDefaultContent.args = {
    id: "inputField13",
    label: "Input with contentOnly set to true and default content",
    contentOnly: true,
    defaultContent: "Default content"
};

export const FileInput = Template.bind({});
FileInput.args = {
    id: "inputField14",
    label: "File input",
    type: "file"
};

export const FileInputWithButtonContentAndSelectedFile = Template.bind({});
FileInputWithButtonContentAndSelectedFile.args = {
    id: "inputField15",
    label: "File input",
    type: "file",
    buttonContent: "Legg til fil",
    selectedFileName: "file.txt"
};

export const DateInput = Template.bind({});
DateInput.args = {
    id: "inputField16",
    label: "Date input without value",
    type: "date"
};

export const DateInputWithValue = Template.bind({});
DateInputWithValue.args = {
    id: "inputField17",
    label: "Date input with value",
    value: "2020-05-10",
    type: "date"
};

export const DateInputWithValueAndError = Template.bind({});
DateInputWithValueAndError.args = {
    id: "inputField17",
    label: "Date input with error",
    value: "2020-05-10",
    type: "date",
    hasErrors: true,
    errorMessage: "Wrong date value"
};

export const DateInputWithMinAndMaxDate = Template.bind({});
DateInputWithMinAndMaxDate.args = {
    id: "inputField18",
    label: "Date input with min and max date",
    value: "2020-05-10",
    type: "date",
    selectsStart: true,
    min: "2020-05-04",
    max: "2020-05-19"
};

export const InputWithCustomWidth = Template.bind({});
InputWithCustomWidth.args = {
    id: "inputField19",
    label: "Input with custom width",
    width: "400px"
};

export const InputWithCustomElementKey = Template.bind({});
InputWithCustomElementKey.args = {
    id: "inputField20",
    label: "Input with custom element key",
    elementKey: "inputKeyHere"
};
