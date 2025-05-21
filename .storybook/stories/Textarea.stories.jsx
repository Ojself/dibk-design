// Dependencies
import React from 'react';

// Components
import Textarea from '@/components/Textarea';
import ThemeProvider from '@/components/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Textarea',
  component: Textarea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <ThemeProvider theme={args.theme}>
    <Textarea {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  id: 'textarea1',
};

export const WithValue = Template.bind({});
WithValue.args = {
  id: 'textarea2',
  value: 'Textarea with value',
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  id: 'textarea3',
  defaultValue: 'Textarea with default value',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  id: 'textarea4',
  value: 'Textarea with label and value',
  label: 'Textarea with label and value',
};

export const Required = Template.bind({});
Required.args = {
  id: 'textarea5',
  required: true,
  label: 'Required textarea',
  value: 'Textarea with required value',
};

export const WithLinkInLabel = Template.bind({});
WithLinkInLabel.args = {
  id: 'textarea6',
  value: 'Textarea with link in label',
  label: [
    'Textarea with ',
    <a key="labelLink" href="#textarea6">
      link
    </a>,
    ' in label',
  ],
};

export const WithError = Template.bind({});
WithError.args = {
  id: 'textarea7',
  value: 'Textarea with label, value, errors and error message',
  label: 'Textarea with label, value, errors and error message',
  hasErrors: true,
  errorMessage: 'Wrong value',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  id: 'textarea8',
  readOnly: true,
  value: 'Read only Textarea with label and value',
  label: 'Read only Textarea with label and value',
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'textarea9',
  disabled: true,
  value: 'Disabled Textarea with label and value',
  label: 'Disabled Textarea with label and value',
};

export const ContentOnly = Template.bind({});
ContentOnly.args = {
  id: 'textarea10',
  value: 'Value for Textarea',
  label: 'Textarea with label, value and contentOnly set to true',
  contentOnly: true,
};

export const ContentOnlyAndDefaultContent = Template.bind({});
ContentOnlyAndDefaultContent.args = {
  id: 'textarea11',
  label: 'Textarea without value, contentOnly set to true and defaultContent',
  contentOnly: true,
  defaultContent: 'Please insert a value',
};

export const WithCustomWidth = Template.bind({});
WithCustomWidth.args = {
  id: 'textarea12',
  value: 'Textarea with custom width',
  width: '320px',
};

export const WithCustomWidthAndVerticalResizing = Template.bind({});
WithCustomWidthAndVerticalResizing.args = {
  id: 'textarea13',
  value: 'Textarea with custom width and vertical resizing',
  width: '450px',
  resize: 'vertical',
};

export const WithCustomElementKey = Template.bind({});
WithCustomElementKey.args = {
  id: 'textarea14',
  value: 'Textarea with a not auto generated key',
  elementKey: 'textareaKeyHere',
};
