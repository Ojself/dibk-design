// Dependencies
import React from "react";

// Components
import ErrorBox from "./ErrorBox";

// Theme
import customTheme from "data/customTheme";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/ErrorBox",
    component: ErrorBox,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ErrorBox {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    children: (
        <>
            <h3>Du kan ikke signere erklæringen før alle opplysningene er fylt ut:</h3>
            <ul>
                <li>Du må krysse av for at foretaket erklærer ansvar i henhold til plan- og bygningsloven.</li>
                <li>Du må fylle ut mobil- eller telefonnummeret til kontaktpersonen.</li>
            </ul>
        </>
    )
};

export const WithCustomTheme = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithCustomTheme.args = {
    children: (
        <>
            <h3>Du kan ikke signere erklæringen før alle opplysningene er fylt ut:</h3>
            <ul>
                <li>Du må krysse av for at foretaket erklærer ansvar i henhold til plan- og bygningsloven.</li>
                <li>Du må fylle ut mobil- eller telefonnummeret til kontaktpersonen.</li>
            </ul>
        </>
    ),
    theme: customTheme
};

/*
Error box example:

```js
<ErrorBox>
<h3>Du kan ikke signere erklæringen før alle opplysningene er fylt ut:</h3>
<ul>
    <li>Du må krysse av for at foretaket erklærer ansvar i henhold til plan- og bygningsloven.</li>
    <li>Du må fylle ut mobil- eller telefonnummeret til kontaktpersonen.</li>
</ul>
</ErrorBox>
```


Themed error box example:

```js
import customTheme from 'data/customTheme';
<React.Fragment>
    <ErrorBox theme={customTheme}>
    <h3>Du kan ikke signere erklæringen før alle opplysningene er fylt ut:</h3>
    <ul>
        <li>Du må krysse av for at foretaket erklærer ansvar i henhold til plan- og bygningsloven.</li>
        <li>Du må fylle ut mobil- eller telefonnummeret til kontaktpersonen.</li>
    </ul>
</ErrorBox>
</React.Fragment>
```

*/
