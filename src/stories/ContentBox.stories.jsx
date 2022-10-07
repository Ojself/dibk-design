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

export const Primary = Template.bind({});
Primary.args = {
    color: "primary",
    title: "Box title",
    children: <>Box with primary color</>
};

export const Success = Template.bind({});
Success.args = {
    color: "success",
    title: "Box title",
    children: <>Box with success color</>
};

export const Warning = Template.bind({});
Warning.args = {
    color: "warning",
    title: "Box title",
    children: <>Box with warning color</>
};

export const Info = Template.bind({});
Info.args = {
    color: "info",
    title: "Box title",
    children: <>Box with info color</>
};

export const LightCyan = Template.bind({});
LightCyan.args = {
    color: "lightCyan",
    title: "Box title",
    children: <>Box with light cyan color</>
};

export const Orange = Template.bind({});
Orange.args = {
    color: "orange",
    title: "Box title",
    children: <>Box with orange color</>
};

export const LightOrange = Template.bind({});
LightOrange.args = {
    color: "lightOrange",
    title: "Box title",
    children: <>Box with light orange color</>
};

export const Lime = Template.bind({});
Lime.args = {
    color: "lime",
    title: "Box title",
    children: <>Box with lime color</>
};

export const LightLime = Template.bind({});
LightLime.args = {
    color: "lightLime",
    title: "Box title",
    children: <>Box with light lime color</>
};
