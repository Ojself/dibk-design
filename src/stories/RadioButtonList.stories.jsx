// Dependencies
import React from "react";

// Components
import RadioButtonList from "./RadioButtonList";
import RadioButtonListItem from "./RadioButtonListItem";

// Theme
import customTheme from "data/customTheme";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/RadioButtonList",
    component: RadioButtonList,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
    const radioButtonListArgs = { ...args };
    delete radioButtonListArgs.theme;
    const radioButtonListItemArgs = { theme: args.theme };
    return (
        <RadioButtonList {...radioButtonListArgs}>
            <RadioButtonListItem
                onChange={() => {
                    console.log("onchange");
                }}
                inputValue="value 1"
                name="radio-button-list-list-item"
                theme={radioButtonListItemArgs.theme}
                id="radioButtonList-listItem-1"
                checked={true}
            >
                Checked radio button
            </RadioButtonListItem>
            <RadioButtonListItem
                onChange={() => {
                    console.log("onchange");
                }}
                inputValue="value 2"
                name="radio-button-list-list-item"
                theme={radioButtonListItemArgs.theme}
                id="radioButtonList-listItem-2"
            >
                Unchecked radio button
            </RadioButtonListItem>
        </RadioButtonList>
    );
};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    legend: "Default radio button list"
};

export const Required = Template.bind({});
Required.args = {
    legend: "Required radio button list",
    required: true
};

export const Compact = Template.bind({});
Compact.args = {
    legend: "Compact radio button list",
    compact: true
};

export const Themed = Template.bind({});
Themed.args = {
    legend: "Themed radio button list",
    theme: customTheme
};
