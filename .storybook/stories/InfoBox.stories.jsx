// Dependencies
import React from 'react';

// Components
import InfoBox from '@/components/InfoBox';
import Header from '@/components/Header';
import ThemeProvider from '@/components/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/InfoBox',
  component: InfoBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <ThemeProvider theme={args.theme}>
    <InfoBox {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: (
    <>
      <Header size={2}>
        Du kan ikke signere erklæringen før alle opplysningene er fylt ut:
      </Header>
      <ul>
        <li>
          Du må krysse av for at foretaket erklærer ansvar i henhold til plan-
          og bygningsloven.
        </li>
        <li>
          Du må fylle ut mobil- eller telefonnummeret til kontaktpersonen.
        </li>
      </ul>
    </>
  ),
};
