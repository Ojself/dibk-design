import type { Meta, StoryObj } from '@storybook/react-vite';
import Table from '../components/Table';

const meta: Meta<typeof Table> = {
  title: 'Example/Table',
  component: Table,
  argTypes: {
    captionSide: { control: 'radio', options: ['top', 'bottom'] },
    captionAlign: { control: 'radio', options: ['left', 'center', 'right'] },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const rows = (
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
);

export const Default: Story = {
  args: {
    children: rows,
  },
};

export const WithCaption: Story = {
  args: {
    children: (
      <>
        <caption>Table caption</caption>
        {rows}
      </>
    ),
  },
};