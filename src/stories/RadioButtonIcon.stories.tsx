import type { Meta, StoryObj } from '@storybook/react-vite';

import RadioButtonIcon, {
  type RadioButtonIconProps,
} from '../components/RadioButtonIcon';
import ThemeProvider from '../components/ThemeProvider';
import type { ThemeProps } from '../components/Theme';

type ExtendedArgs = RadioButtonIconProps & { theme?: ThemeProps };

const meta: Meta<typeof RadioButtonIcon> = {
  title: 'Example/RadioButtonIcon',
  component: RadioButtonIcon,
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

export const Default: Story = { args: {} };
export const Checked: Story = { args: { checked: true } };
export const Disabled: Story = { args: { disabled: true } };
export const CheckedDisabled: Story = {
  args: { checked: true, disabled: true },
};
export const HasErrors: Story = { args: { hasErrors: true } };
export const HasErrorsDisabled: Story = {
  args: { hasErrors: true, disabled: true },
};
export const HasErrorsChecked: Story = {
  args: { hasErrors: true, checked: true },
};
export const HasErrorsCheckedDisabled: Story = {
  args: { hasErrors: true, checked: true, disabled: true },
};
