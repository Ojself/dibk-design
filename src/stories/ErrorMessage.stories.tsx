import type { Meta, StoryObj } from '@storybook/react-vite';

import ErrorMessage from '../components/ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Example/ErrorMessage',
  component: ErrorMessage,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;
const render: Story['render'] = (args) => <ErrorMessage {...args} />;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Wrong value',
  },
  render,
};