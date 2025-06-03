import type { Meta, StoryObj } from '@storybook/react-vite';

import Accordion, { type AccordionProps } from '../components/Accordion';
import ThemeProvider from '../components/ThemeProvider';
import type { ThemeProps } from '../components/Theme';

type ExtendedArgs = AccordionProps & { theme?: ThemeProps };

const meta: Meta<typeof Accordion> = {
  title: 'Example/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const { theme, ...rest } = context.args as ExtendedArgs;
      return (
        <ThemeProvider theme={theme}>
          <Story args={rest} />
        </ThemeProvider>
      );
    },
  ],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'default',
    title: 'Accordion title',
    noMargin: false,
    children: <>Accordion with default color</>,
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    title: 'Accordion title',
    noMargin: false,
    children: <>Accordion with secondary color</>,
  },
};
