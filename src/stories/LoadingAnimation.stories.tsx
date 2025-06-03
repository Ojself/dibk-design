// stories/LoadingAnimation.stories.tsx

import type { Meta, StoryObj } from '@storybook/react-vite';

import ThemeProvider from '../components/ThemeProvider';
import type { ThemeProps } from '../components/Theme';
import LoadingAnimation, {
  type LoadingAnimationProps,
} from '../components/LoadingAnimation';

type ExtendedArgs = LoadingAnimationProps & { theme?: ThemeProps };

const meta: Meta<typeof LoadingAnimation> = {
  title: 'Example/LoadingAnimation',
  component: LoadingAnimation,
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
  args: {
    message: 'Loading...',
  },
};
