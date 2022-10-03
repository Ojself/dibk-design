// Dependencies
import React from "react";

// Components
import NavigationBar from "./NavigationBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/NavigationBar",
    component: NavigationBar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        primaryListItems: {
            name: "primaryListItems",
            type: { name: "array", required: false },
            defaultValue: []
        },
        secondaryListItems: {
            name: "secondaryListItems",
            type: { name: "array", required: false },
            defaultValue: []
        }
    }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <NavigationBar {...args}></NavigationBar>;

const primaryListItems = [
    { name: "Primary item 1", listItems: ["Sub item 1", "Sub item 2"] },
    "Primary item 2",
    { name: "Primary item 3", href: "#" }
];
const secondaryListItems = ["Secondary item 1", "Secondary item 2"];

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

export const WithLogoLink = Template.bind({});
WithLogoLink.args = {
    logoLink: "https://dibk.no/",
    openLogoLinkInNewTab: true
};

export const WithListItems = Template.bind({});
WithListItems.args = {
    primaryListItems,
    secondaryListItems
};

export const WithChildElements = Template.bind({});
WithChildElements.args = {
    children: <span>Content here</span>
};
