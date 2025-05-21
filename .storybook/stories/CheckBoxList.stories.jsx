// Dependencies
import React from 'react';

// Components
import CheckBoxList from '@/components/CheckBoxList';
import CheckBoxListItem from '@/components/CheckBoxListItem';
import ThemeProvider from '@/components/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CheckBoxList',
  component: CheckBoxList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const checkBoxListArgs = { ...args };
  return (
    <ThemeProvider theme={args.theme}>
      <CheckBoxList {...checkBoxListArgs}>
        <CheckBoxListItem
          onChange={() => {
            console.log('onchange');
          }}
          checked={true}
          name="checkboxlist"
          id="checkboxList-listItem-1"
        >
          Label for checked checkbox
        </CheckBoxListItem>
        <CheckBoxListItem
          onChange={() => {
            console.log('onchange');
          }}
          name="checkboxlist"
          id="checkboxList-listItem-2"
        >
          Label for unchecked checkbox
        </CheckBoxListItem>
      </CheckBoxList>
    </ThemeProvider>
  );
};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  legend: 'Default checkbox list',
};

export const Required = Template.bind({});
Required.args = {
  legend: 'Required checkbox list',
  required: true,
};

export const Compact = Template.bind({});
Compact.args = {
  legend: 'Compact checkbox list',
  compact: true,
};
