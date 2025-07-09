import type { Meta, StoryObj } from '@storybook/react-vite';

import CheckBoxList from '../components/CheckBoxList';
import CheckBoxListItem from '../components/CheckBoxListItem';

const meta: Meta<typeof CheckBoxList> = {
  title: 'Example/CheckBoxList',
  component: CheckBoxList,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

/** Shared children for all stories */
const checkboxes = (
  <>
    <CheckBoxListItem
      onChange={() => console.log('onchange')}
      checked
      name="checkboxlist"
      id="checkboxList-listItem-1"
    >
      Label for checked checkbox
    </CheckBoxListItem>
    <CheckBoxListItem
      onChange={() => console.log('onchange')}
      name="checkboxlist"
      id="checkboxList-listItem-2"
    >
      Label for unchecked checkbox
    </CheckBoxListItem>
  </>
);

export const Default: Story = {
  args: {
    legend: 'Default checkbox list',
  },
  render: (args) => <CheckBoxList {...args}>{checkboxes}</CheckBoxList>,
};

export const Required: Story = {
  args: {
    legend: 'Required checkbox list',
    required: true,
  },
  render: (args) => <CheckBoxList {...args}>{checkboxes}</CheckBoxList>,
};

export const Compact: Story = {
  args: {
    legend: 'Compact checkbox list',
    compact: true,
  },
  render: (args) => <CheckBoxList {...args}>{checkboxes}</CheckBoxList>,
};