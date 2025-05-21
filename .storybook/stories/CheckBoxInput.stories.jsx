// Dependencies
import React from 'react';

// Components
import CheckBoxInput from '@/components/CheckBoxInput';
import ThemeProvider from '@/components/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CheckBoxInput',
  component: CheckBoxInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return (
    <ThemeProvider theme={args.theme}>
      <CheckBoxInput {...args} />
    </ThemeProvider>
  );
};

export const Unchecked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unchecked.args = {
  id: 'checkBoxInput-1',
  children: 'Label for unchecked checkbox',
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'checkBoxInput-2',
  children: 'Label for checked checkbox',
  checked: true,
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  id: 'checkBoxInput-3',
  children: 'Label for checked disabled checkbox',
  checked: true,
  disabled: true,
};

export const UncheckedContentOnly = Template.bind({});
UncheckedContentOnly.args = {
  id: 'checkBoxInput-4',
  children: 'Label for unchecked checkbox with content only',
  contentOnly: true,
};

export const CheckedContentOnly = Template.bind({});
CheckedContentOnly.args = {
  id: 'checkBoxInput-5',
  children: 'Label for checked checkbox with content only',
  checked: true,
  contentOnly: true,
};

export const CheckedCustomCheckmark = Template.bind({});
CheckedCustomCheckmark.args = {
  id: 'checkBoxInput-6',
  children: 'Label for checked checkbox with custom checkmark',
  checked: true,
  disabled: true,
  checkmarkCharacter: '✕',
};

export const hasErrors = Template.bind({});
hasErrors.args = {
  id: 'checkBoxInput-7',
  children: 'Label for checkbox with errors',
  hasErrors: true,
};

export const hasErrorsDisabled = Template.bind({});
hasErrorsDisabled.args = {
  id: 'checkBoxInput-8',
  children: 'Label for disabled checkbox with errors',
  hasErrors: true,
  disabled: true,
};

export const hasErrorsChecked = Template.bind({});
hasErrorsChecked.args = {
  id: 'checkBoxInput-9',
  children: 'Label for checked checkbox with errors',
  hasErrors: true,
  checked: true,
};

export const hasErrorsCheckedDisabled = Template.bind({});
hasErrorsCheckedDisabled.args = {
  id: 'checkBoxInput-10',
  children: 'Label for checked disabled checkbox with errors',
  hasErrors: true,
  checked: true,
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  id: 'checkBoxInput-11',
  required: true,
  children: 'Label for required checkbox',
};
