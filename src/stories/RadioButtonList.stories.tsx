// stories/RadioButtonList.stories.tsx

import type { Meta, StoryObj } from '@storybook/react-vite';
import RadioButtonList from '../components/RadioButtonList';
import RadioButtonListItem from '../components/RadioButtonListItem';

const meta: Meta<typeof RadioButtonList> = {
  title: 'Example/RadioButtonList',
  component: RadioButtonList,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const sharedChildren = (
  <>
    <RadioButtonListItem
      onChange={() => console.log('onchange')}
      inputValue="value 1"
      name="radio-button-list-list-item"
      id="radioButtonList-listItem-1"
      checked
    >
      Checked radio button
    </RadioButtonListItem>
    <RadioButtonListItem
      onChange={() => console.log('onchange')}
      inputValue="value 2"
      name="radio-button-list-list-item"
      id="radioButtonList-listItem-2"
    >
      Unchecked radio button
    </RadioButtonListItem>
  </>
);

export const Default: Story = {
  args: { legend: 'Default radio button list' },
  render: (args) => <RadioButtonList {...args}>{sharedChildren}</RadioButtonList>,
};

export const Required: Story = {
  args: { legend: 'Required radio button list', required: true },
  render: (args) => <RadioButtonList {...args}>{sharedChildren}</RadioButtonList>,
};

export const Compact: Story = {
  args: { legend: 'Compact radio button list', compact: true },
  render: (args) => <RadioButtonList {...args}>{sharedChildren}</RadioButtonList>,
};