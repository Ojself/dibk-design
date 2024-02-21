// Dependencies
import React from "react";

// Components
import ContentBox from "./ContentBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/ContentBox",
    component: ContentBox,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ContentBox {...args}></ContentBox>;

export const DefaultWithoutTitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

DefaultWithoutTitle.args = {
    color: "default",
    children: <>Box with default color</>
};

export const Default = Template.bind({});
Default.args = {
    color: "default",
    title: "Box title",
    children: <>Box with default color</>
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: "secondary",
    title: "Box title",
    children: <>Box with secondary color</>
};
