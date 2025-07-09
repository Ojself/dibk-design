import type { Meta, StoryObj } from '@storybook/react-vite';

import Lead from '../components/Lead';

const meta: Meta<typeof Lead> = {
  title: 'Example/Lead',
  component: Lead,
  argTypes: {
    htmlTag: { control: 'select', options: ['p', 'span', 'div'] },
  },
  tags: ['autodocs'],
};

export default meta;

const render: Story['render'] = (args) => <Lead {...args} />;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Lead text',
  },
  render,
};