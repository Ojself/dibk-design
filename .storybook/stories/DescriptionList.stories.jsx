// Dependencies
import React from "react";

// Components
import ThemeProvider from "./ThemeProvider";
import DescriptionList from "./DescriptionList";
import DescriptionTerm from "./DescriptionTerm";
import DescriptionDetails from "./DescriptionDetails";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/DescriptionList",
    component: DescriptionList,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
    <ThemeProvider theme={args.theme}>
        <DescriptionList {...args}>
            <DescriptionTerm>Description term 1</DescriptionTerm>
            <DescriptionDetails>Description details 1</DescriptionDetails>
            <DescriptionTerm>Description term 2</DescriptionTerm>
            <DescriptionDetails>Description details 2</DescriptionDetails>
            <DescriptionTerm>Description term 3</DescriptionTerm>
            <DescriptionDetails>Description details 3</DescriptionDetails>
        </DescriptionList>
    </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const WithCustomTitleWidth = Template.bind({});
WithCustomTitleWidth.args = {
    titleWidth: "160px"
};

export const Compact = Template.bind({});
Compact.args = {
    compact: true
};

export const CompactWithCustomTitleWidth = Template.bind({});
CompactWithCustomTitleWidth.args = {
    compact: true,
    titleWidth: "160px"
};
