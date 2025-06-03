// stories/ProgressBar.stories.tsx

import type { Meta, StoryObj } from '@storybook/react-vite';

import ProgressBar, { type ProgressBarProps } from '../components/ProgressBar';
import ThemeProvider from '../components/ThemeProvider';
import type { ThemeProps } from '../components/Theme';

type ExtendedArgs = ProgressBarProps & { theme?: ThemeProps };

const meta: Meta<typeof ProgressBar> = {
  title: 'Example/ProgressBar',
  component: ProgressBar,
  argTypes: {},
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
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { progress: 25 },
};

export const WithError: Story = {
  args: { progress: 60, hasErrors: true },
};
