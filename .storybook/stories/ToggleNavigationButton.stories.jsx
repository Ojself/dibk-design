// Dependencies
import React from 'react';

// Components
import ToggleNavigationButton from '@/components/ToggleNavigationButton';
import ThemeProvider from '@/components/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ToggleNavigationButton',
  component: ToggleNavigationButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    htmlTag: { control: 'select', options: ['button', 'a', 'div'] },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <ThemeProvider theme={args.theme}>
    <ToggleNavigationButton {...args}></ToggleNavigationButton>
  </ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  showText: 'Show',
  hideText: 'Hide',
  isOpen: false,
  buttonProps: {
    onClick: () => console.log('Button clicked'),
  },
};
