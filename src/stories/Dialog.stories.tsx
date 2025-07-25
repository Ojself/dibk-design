import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import Header from '../components/Header';
import Dialog from '@/components/Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Example/Dialog',
  component: Dialog,
  argTypes: {
    attachTo: {
      control: 'select',
      options: ['None', 'Left', 'Right'],
      mapping: { None: null, Left: 'left', Right: 'right' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Header size={1}>Dialog title</Header>
        <p>dialog paragraph</p>
      </>
    ),
    closeButton: true,
    modal: true,
    onClickOutside: () => {
      console.log('clicked outside');
    },
  },
  render: (args) => {
    const [showDialog, setShowDialog] = useState<boolean>(false);

    return (
      <>
        <button onClick={() => setShowDialog(true)}>Show dialog</button>
        <Dialog
          {...args}
          hidden={!showDialog}
          onClickOutside={() => {
            setShowDialog(false);
            (args.onClickOutside as () => void)();
          }}
        />
      </>
    );
  },
};
