// Dependencies
import React from "react";

// Components
import Button from "./Button";
import { BrowserRouter, Link } from "react-router-dom";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Button",
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        color: { control: "radio", options: ["default", "primary"] },
        inputType: { control: "radio", options: ["button", "radio"] }
    }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args}></Button>;

const RouterTemplate = (args) => (
    <BrowserRouter>
        <Button {...args}></Button>
    </BrowserRouter>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    color: "default",
    content: "Button"
};

export const Primary = Template.bind({});
Primary.args = {
    color: "primary",
    content: "Button"
};

export const Large = Template.bind({});
Large.args = {
    content: "Button"
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    content: "Button"
};

export const Rounded = Template.bind({});
Rounded.args = {
    rounded: true,
    content: "Button"
};

export const ButtonWithHTMLContent = Template.bind({});
ButtonWithHTMLContent.args = {
    children: (
        <span>
            Button with <b>HTML</b> content
        </span>
    )
};

export const ButtonWithReactLink = RouterTemplate.bind({});
ButtonWithReactLink.args = {
    children: <Link to="/test">Button with React Link</Link>
};

export const InputButton = Template.bind({});
InputButton.args = {
    content: "InputButton",
    inputType: "button"
};

export const RadioButton = Template.bind({});
RadioButton.args = {
    content: "RadioButton",
    inputType: "radio",
    name: "radio-button",
    defaultChecked: false
};
