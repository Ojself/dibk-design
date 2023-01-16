// Dependencies
import React, { useState } from "react";

// Components
import Dialog from "./Dialog";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Dialog",
    component: Dialog,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
    const [showDialog, setShowDialog] = useState();

    return (
        <>
            <button onClick={() => setShowDialog(true)}>Show dialog</button>
            {showDialog && <Dialog {...args} onClickOutside={() => setShowDialog(false)}></Dialog>}
        </>
    );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    children: (
        <>
            <h3>Dialog title</h3>
            <p>dialog paragraph</p>
        </>
    ),
    closeButton: true,
    onClickOutside: () => {
        console.log("clicked outside");
    }
};
