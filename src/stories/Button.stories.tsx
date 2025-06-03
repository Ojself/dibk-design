import { BrowserRouter, Link as RouterLink } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Button, { type ButtonProps } from '../components/Button';
import ThemeProvider from '../components/ThemeProvider';
import type { ThemeProps } from '../components/Theme';

type ExtendedArgs = ButtonProps & { theme?: ThemeProps };

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const { theme, ...rest } = context.args as ExtendedArgs;
      return (
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Story args={rest} />
          </ThemeProvider>
        </BrowserRouter>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    content: 'Button',
    size: 'regular',
    arrow: 'none',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    content: 'Button',
  },
};

/* 
No support for large buttons in current version
export const Large: Story = {
  args: {
    content: 'Button',
    size: 'large',
  },
};
*/

export const Small: Story = {
  args: {
    size: 'small',
    content: 'Button',
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
    content: 'Button',
  },
};

export const ButtonWithHTMLContent: Story = {
  args: {
    children: (
      <span>
        Button with <b>HTML</b> content
      </span>
    ),
  },
};

export const ButtonWithLink: Story = {
  args: {
    content: 'Button with link',
    href: 'test',
  },
};

export const ButtonWithReactLink: Story = {
  args: {
    children: <RouterLink to="/test">Button with React Link</RouterLink>,
  },
};

export const DisabledButtonWithReactLink: Story = {
  args: {
    disabled: true,
    children: (
      <RouterLink to="/test">Disabled button with React Link</RouterLink>
    ),
  },
};

export const InputButton: Story = {
  args: {
    content: 'InputButton',
    inputType: 'button',
  },
};

export const RadioButton: Story = {
  args: {
    content: 'RadioButton',
    inputType: 'radio',
    name: 'radio-button',
    defaultChecked: false,
  },
};
