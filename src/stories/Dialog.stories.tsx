import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import Dialog, { type DialogProps } from '../components/Dialog';
import ThemeProvider from '../components/ThemeProvider';
import type { ThemeProps } from '../components/Theme';
import Header from '../components/Header';

type ExtendedArgs = DialogProps & { theme?: ThemeProps };

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

type Story = StoryObj<typeof meta>;

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
  render: (args: ExtendedArgs) => {
    const [showDialog, setShowDialog] = useState<boolean>(false);

    return (
      <ThemeProvider theme={args.theme}>
        <button onClick={() => setShowDialog(true)}>Show dialog</button>
        <Dialog
          {...args}
          hidden={!showDialog}
          onClickOutside={() => {
            setShowDialog(false);
            args.onClickOutside?.();
          }}
        />
      </ThemeProvider>
    );
  },
};
