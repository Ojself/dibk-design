// Dependencies
import React from "react";

// Components
import Container from "./Container";
import ThemeProvider from "./ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Container",
  component: Container,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <ThemeProvider theme={args.theme}>
    <Container {...args}></Container>
  </ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: <>Container content here</>,
};

export const WithMaxWidth = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithMaxWidth.args = {
  children: <>Container with max width</>,
  maxWidth: "230px",
};
