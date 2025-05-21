// Dependencies
import React from 'react';

// Components
import Accordion from '@/components/Accordion';
import ThemeProvider from '@/components/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Accordion',
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return (
    <ThemeProvider theme={args.theme}>
      <Accordion {...args}></Accordion>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: 'default',
  title: 'Accordion title',
  noMargin: false,
  children: <>Accordion with default color</>,
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  title: 'Accordion title',
  noMargin: false,
  children: <>Accordion with secondary color</>,
};
