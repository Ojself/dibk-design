// Dependencies
import React from "react";

// Components
import Footer from "./Footer";
import ThemeProvider from "./ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Footer",
  component: Footer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <ThemeProvider theme={args.theme}>
    <Footer {...args}></Footer>
  </ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: <span>Footer content here</span>,
};
