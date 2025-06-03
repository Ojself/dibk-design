import type { Meta, StoryObj } from '@storybook/react-vite';
import Theme from '../components/Theme';
import ThemeProvider from '../components/ThemeProvider';
import type { ThemeProps } from '../components/Theme';
import customThemes from '../data/customTheme';

type ExtendedArgs = ThemeProps & { theme?: ThemeProps };

const meta: Meta<typeof Theme> = {
  title: 'Example/Theme',
  component: Theme,
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
    ...customThemes.dibk,
  },
};
