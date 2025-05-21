// Dependencies
import React from 'react';
import { BrowserRouter, Link as RouterLink } from 'react-router-dom';

// Components
import Button from '@/components/Button';
import ThemeProvider from '@/components/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'radio', options: ['primary', 'secondary'] },
    inputType: { control: 'radio', options: ['button', 'radio'] },
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
    <Button {...args} linkComponent={RouterLink} />
  </BrowserRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  content: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  content: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  content: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  content: 'Button',
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
  content: 'Button',
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
  content: 'Button with link',
  href: 'test',
};

export const ButtonWithReactLink = RouterTemplate.bind({});
ButtonWithReactLink.args = {
  children: <RouterLink to="/test">Button with React Link</RouterLink>,
};

export const DisabledButtonWithReactLink = RouterTemplate.bind({});
DisabledButtonWithReactLink.args = {
  disabled: true,
  children: <RouterLink to="/test">Disabled button with React Link</RouterLink>,
};

export const InputButton = Template.bind({});
InputButton.args = {
  content: 'InputButton',
  inputType: 'button',
};

export const RadioButton = Template.bind({});
RadioButton.args = {
  content: 'RadioButton',
  inputType: 'radio',
  name: 'radio-button',
  defaultChecked: false,
};
