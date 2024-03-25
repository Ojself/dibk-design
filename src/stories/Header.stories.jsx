// Dependencies
import React from "react";

// Components
import Header from "./Header";
import ThemeProvider from "./ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Header",
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { control: "select", options: [1, 2, 3, 4, 5] },
    htmlTag: { control: "select", options: ["h1", "h2", "h3", "h4", "h5"] },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <ThemeProvider theme={args.theme}>
    <Header {...args}></Header>
  </ThemeProvider>
);

export const Header1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Header1.args = {
  children: <>Title with size 1</>
};

export const Header1WithLabel = Template.bind({});
Header1WithLabel.args = {
  children: <>Title with size 1</>,
  label: "Veiviser"
};

export const Header2 = Template.bind({});
Header2.args = {
  children: <>Title with size 2</>,
  size: 2,
};

export const Header3 = Template.bind({});
Header3.args = {
  children: <>Title with size 3</>,
  size: 3,
};

export const Header4 = Template.bind({});
Header4.args = {
  children: <>Title with size 4</>,
  size: 4,
};

export const Header5 = Template.bind({});
Header5.args = {
  children: <>Title with size 5</>,
  size: 5,
};

export const BigHeader = Template.bind({});
BigHeader.args = {
  children: <>Big header</>,
  big: true,
};

export const Header2WithH1Tag = Template.bind({});
Header2WithH1Tag.args = {
  children: <>Title with size 2 and htmlTag h1</>,
  size: 2,
  htmlTag: "h1",
};
