// Dependencies
import React from "react";

// Components
import List from "./List";
import ListItem from "./ListItem";
import ThemeProvider from "./ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/List",
  component: List,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <ThemeProvider theme={args.theme}>
    {" "}
    <List {...args}></List>
  </ThemeProvider>
);

const listItems = (
  <>
    <ListItem>item 1</ListItem>
    <ListItem>item 2</ListItem>
    <ListItem>item 3</ListItem>
  </>
);

const listItemsWithSubItems = (
  <>
    <ListItem>item 1</ListItem>
    <ListItem>
      item 2
      <List>
        <ListItem>subitem 1</ListItem>
        <ListItem>subitem 2</ListItem>
      </List>
    </ListItem>
    <ListItem>item 3</ListItem>
  </>
);

export const Ordered = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Ordered.args = {
  children: listItems,
  ordered: true,
};

export const Unordered = Template.bind({});
Unordered.args = {
  children: listItems,
};

export const UnorderedSquareStyled = Template.bind({});
UnorderedSquareStyled.args = {
  children: listItems,
  listStyle: "square",
};

export const UnorderedUnstyled = Template.bind({});
UnorderedUnstyled.args = {
  children: listItems,
  listStyle: "none",
};

export const UnorderedListWithSubItems = Template.bind({});
UnorderedListWithSubItems.args = {
  children: listItemsWithSubItems,
};
