// Dependencies
import React from 'react';

// Components
import Table from '@/components/Table';
import ThemeProvider from '@/components/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Table',
  component: Table,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    captionSide: { control: 'radio', options: ['top', 'bottom'] },
    captionAlign: { control: 'radio', options: ['left', 'center', 'right'] },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <ThemeProvider theme={args.theme}>
    <Table {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: (
    <>
      <thead>
        <tr>
          <th>Table header 1</th>
          <th>Table header 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Table data 1</td>
          <td>Table data 2</td>
        </tr>
        <tr>
          <td>Table data 3</td>
          <td>Table data 4</td>
        </tr>
        <tr>
          <td>Table data 5</td>
          <td>Table data 6</td>
        </tr>
      </tbody>
    </>
  ),
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  children: (
    <>
      <caption>Table caption</caption>
      <thead>
        <tr>
          <th>Table header 1</th>
          <th>Table header 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Table data 1</td>
          <td>Table data 2</td>
        </tr>
        <tr>
          <td>Table data 3</td>
          <td>Table data 4</td>
        </tr>
        <tr>
          <td>Table data 5</td>
          <td>Table data 6</td>
        </tr>
      </tbody>
    </>
  ),
};
