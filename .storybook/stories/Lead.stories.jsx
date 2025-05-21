// Dependencies
import React from 'react';

// Components
import Lead from '@/components/Lead';
import ThemeProvider from '@/components/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Lead',
  component: Lead,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    htmlTag: { control: 'select', options: ['p', 'span', 'div'] },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <ThemeProvider theme={args.theme}>
    <Lead {...args}></Lead>
  </ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Lead text',
};
