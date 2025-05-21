// Dependencies
import React from 'react';

// Components
import Label from '@/components/Label';
import ThemeProvider from '@/components/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Label',
  component: Label,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <ThemeProvider theme={args.theme}>
    <Label {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Label',
};

export const Inline = Template.bind({});
Inline.args = {
  children: 'Inline label',
  inline: true,
};

export const LabelStyledSpan = Template.bind({});
LabelStyledSpan.args = {
  children: 'Label styled span',
  htmlTag: 'span',
};
