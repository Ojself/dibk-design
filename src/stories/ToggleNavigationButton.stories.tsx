// stories/ToggleNavigationButton.stories.tsx

import type { Meta, StoryObj } from '@storybook/react-vite';
import ToggleNavigationButton, {
  type ToggleNavigationButtonProps,
} from '../components/ToggleNavigationButton';
import ThemeProvider from '../components/ThemeProvider';
import type { ThemeProps } from '../components/Theme';

type ExtendedArgs = ToggleNavigationButtonProps & { theme?: ThemeProps };

const meta: Meta<typeof ToggleNavigationButton> = {
  title: 'Example/ToggleNavigationButton',
  component: ToggleNavigationButton,
  argTypes: {
    htmlTag: { control: 'select', options: ['button', 'a', 'div'] },
  },
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
    showText: 'Show',
    hideText: 'Hide',
    isOpen: false,
    buttonProps: {
      onClick: () => console.log('Button clicked'),
    },
  },
};
