// Dependencies
import React from "react";

// Components
import CheckBoxList from "./CheckBoxList";
import CheckBoxListItem from "./CheckBoxListItem";

// Theme
import customTheme from "data/customTheme";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/CheckBoxList",
    component: CheckBoxList,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
    const checkBoxListArgs = { ...args };
    delete checkBoxListArgs.theme;
    const checkBoxListItemArgs = { theme: args.theme };
    return (
        <CheckBoxList {...checkBoxListArgs}>
            <CheckBoxListItem
                onChange={() => {
                    console.log("onchange");
                }}
                checked={true}
                name="checkboxlist"
                theme={checkBoxListItemArgs.theme}
                id="checkboxList-listItem-1"
            >
                Label for checked checkbox
            </CheckBoxListItem>
            <CheckBoxListItem
                onChange={() => {
                    console.log("onchange");
                }}
                name="checkboxlist"
                theme={checkBoxListItemArgs.theme}
                id="checkboxList-listItem-2"
            >
                Label for unchecked checkbox
            </CheckBoxListItem>
        </CheckBoxList>
    );
};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    legend: "Default checkbox list"
};

export const Themed = Template.bind({});
Themed.args = {
    legend: "Themed checkbox list",
    theme: customTheme
};
