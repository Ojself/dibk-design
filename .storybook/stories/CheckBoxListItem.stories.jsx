// Dependencies
import React from 'react';

// Components
import CheckBoxListItem from '@/components/CheckBoxListItem';
import ThemeProvider from '@/components/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CheckBoxListItem',
  component: CheckBoxListItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <ThemeProvider theme={args.theme}>
    <CheckBoxListItem {...args} />
  </ThemeProvider>
);

export const Unchecked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unchecked.args = {
  id: 'checkBoxListItem-1',
  children: 'Label for unchecked checkbox',
  name: 'checkboxListItem',
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'checkBoxListItem-2',
  children: 'Label for checked checkbox',
  checked: true,
  name: 'checkboxListItem',
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  id: 'checkBoxListItem-3',
  children: 'Label for checked disabled checkbox',
  checked: true,
  disabled: true,
};

export const UncheckedContentOnly = Template.bind({});
UncheckedContentOnly.args = {
  id: 'checkBoxListItem-4',
  children: 'Label for unchecked checkbox with content only',
  contentOnly: true,
};

export const CheckedContentOnly = Template.bind({});
CheckedContentOnly.args = {
  id: 'checkBoxListItem-5',
  children: 'Label for checked checkbox with content only',
  checked: true,
  contentOnly: true,
};

export const CheckedCustomCheckmark = Template.bind({});
CheckedCustomCheckmark.args = {
  id: 'checkBoxListItem-6',
  children: 'Label for checked checkbox with custom checkmark',
  checked: true,
  disabled: true,
  checkmarkCharacter: '✕',
};

export const hasErrors = Template.bind({});
hasErrors.args = {
  id: 'checkBoxListItem-7',
  children: 'Label for checkbox with errors',
  hasErrors: true,
};

export const hasErrorsDisabled = Template.bind({});
hasErrorsDisabled.args = {
  id: 'checkBoxListItem-8',
  children: 'Label for disabled checkbox with errors',
  hasErrors: true,
  disabled: true,
};

export const hasErrorsChecked = Template.bind({});
hasErrorsChecked.args = {
  id: 'checkBoxListItem-9',
  children: 'Label for checked checkbox with errors',
  hasErrors: true,
  checked: true,
};

export const hasErrorsCheckedDisabled = Template.bind({});
hasErrorsCheckedDisabled.args = {
  id: 'checkBoxListItem-10',
  children: 'Label for checked disabled checkbox with errors',
  hasErrors: true,
  checked: true,
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  id: 'checkBoxListItem-12',
  required: true,
  children: 'Label for required checkbox',
};

export const Compact = Template.bind({});
Compact.args = {
  id: 'checkBoxListItem-12',
  compact: true,
  children: 'Label for compact checkbox',
};
