// Dependencies
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

// Components
import Button from "./Button";
import ThemeProvider from "./ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: "radio", options: ["primary", "secondary"] },
    inputType: { control: "radio", options: ["button", "radio"] },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return (
    <ThemeProvider theme={args.theme}>
      <Button {...args}></Button>
    </ThemeProvider>
  );
};

const RouterTemplate = (args) => (
  <BrowserRouter>
    <Button {...args}></Button>
  </BrowserRouter>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: "default",
  content: "Button",
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  content: "Button",
};

export const Large = Template.bind({});
Large.args = {
  content: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  content: "Button",
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
  content: "Button",
};

export const ButtonWithHTMLContent = Template.bind({});
ButtonWithHTMLContent.args = {
  children: (
    <span>
      Button with <b>HTML</b> content
    </span>
  ),
};

export const ButtonWithLink = Template.bind({});
ButtonWithLink.args = {
  content: "Button with link",
  href: "test",
};

export const ButtonWithReactLink = RouterTemplate.bind({});
ButtonWithReactLink.args = {
  children: <Link to="/test">Button with React Link</Link>,
};

export const DisabledButtonWithReactLink = RouterTemplate.bind({});
DisabledButtonWithReactLink.args = {
  disabled: true,
  children: <Link to="/test">Disabled button with React Link</Link>,
};

export const InputButton = Template.bind({});
InputButton.args = {
  content: "InputButton",
  inputType: "button",
};

export const RadioButton = Template.bind({});
RadioButton.args = {
  content: "RadioButton",
  inputType: "radio",
  name: "radio-button",
  defaultChecked: false,
};
