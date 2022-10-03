// Dependencies
import React from "react";

// Components
import Accordion from "./Accordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Accordion",
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Accordion {...args}></Accordion>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    color: "default",
    title: "Accordion title",
    children: <>Accordion with default color</>
};

export const Primary = Template.bind({});
Primary.args = {
    color: "primary",
    title: "Accordion title",
    children: <>Accordion with primary color</>
};

export const Success = Template.bind({});
Success.args = {
    color: "success",
    title: "Accordion title",
    children: <>Accordion with success color</>
};

export const Warning = Template.bind({});
Warning.args = {
    color: "warning",
    title: "Accordion title",
    children: <>Accordion with warning color</>
};

export const Info = Template.bind({});
Info.args = {
    color: "info",
    title: "Accordion title",
    children: <>Accordion with info color</>
};

export const LightCyan = Template.bind({});
LightCyan.args = {
    color: "lightCyan",
    title: "Accordion title",
    children: <>Accordion with light cyan color</>
};

export const Orange = Template.bind({});
Orange.args = {
    color: "orange",
    title: "Accordion title",
    children: <>Accordion with orange color</>
};

export const LightOrange = Template.bind({});
LightOrange.args = {
    color: "lightOrange",
    title: "Accordion title",
    children: <>Accordion with light orange color</>
};

export const Lime = Template.bind({});
Lime.args = {
    color: "lime",
    title: "Accordion title",
    children: <>Accordion with lime color</>
};

export const LightLime = Template.bind({});
LightLime.args = {
    color: "lightLime",
    title: "Accordion title",
    children: <>Accordion with light lime color</>
};
