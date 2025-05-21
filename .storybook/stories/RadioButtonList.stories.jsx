// Dependencies
import React from 'react';

// Components
import RadioButtonList from '@/components/RadioButtonList';
import RadioButtonListItem from '@/components/RadioButtonListItem';
import ThemeProvider from '@/components/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/RadioButtonList',
  component: RadioButtonList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const radioButtonListArgs = { ...args };
  return (
    <ThemeProvider theme={args.theme}>
      <RadioButtonList {...radioButtonListArgs}>
        <RadioButtonListItem
          onChange={() => {
            console.log('onchange');
          }}
          inputValue="value 1"
          name="radio-button-list-list-item"
          id="radioButtonList-listItem-1"
          checked={true}
        >
          Checked radio button
        </RadioButtonListItem>
        <RadioButtonListItem
          onChange={() => {
            console.log('onchange');
          }}
          inputValue="value 2"
          name="radio-button-list-list-item"
          id="radioButtonList-listItem-2"
        >
          Unchecked radio button
        </RadioButtonListItem>
      </RadioButtonList>
    </ThemeProvider>
  );
};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  legend: 'Default radio button list',
};

export const Required = Template.bind({});
Required.args = {
  legend: 'Required radio button list',
  required: true,
};

export const Compact = Template.bind({});
Compact.args = {
  legend: 'Compact radio button list',
  compact: true,
};
