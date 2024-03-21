// Dependencies
import React, { useState } from "react";

// Components
import Dialog from "./Dialog";
import ThemeProvider from "./ThemeProvider";
import Header from "./Header";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Dialog",
  component: Dialog,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    attachTo: {
      control: "select",
      options: ["None", "Left", "Right"],
      mapping: { None: null, Left: "left", Right: "right" },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const [showDialog, setShowDialog] = useState();

  return (
    <ThemeProvider theme={args.theme}>
      <button onClick={() => setShowDialog(true)}>Show dialog</button>
      <Dialog
        {...args}
        hidden={!showDialog}
        onClickOutside={() => setShowDialog(false)}
      ></Dialog>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: (
    <>
      <Header size={3}>Dialog title</Header>
      <p>dialog paragraph</p>
    </>
  ),
  closeButton: true,
  modal: true,
  onClickOutside: () => {
    console.log("clicked outside");
  },
};
