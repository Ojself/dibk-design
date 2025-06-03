import type { Meta, StoryObj } from '@storybook/react-vite';
import CheckBoxIcon, {
  type CheckBoxIconProps,
} from '../components/CheckBoxIcon';
import ThemeProvider from '../components/ThemeProvider';
import type { ThemeProps } from '../components/Theme';

type ExtendedArgs = CheckBoxIconProps & { theme?: ThemeProps };

const meta: Meta<typeof CheckBoxIcon> = {
  title: 'Example/CheckBoxIcon',
  component: CheckBoxIcon,
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

export const Unchecked: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const CheckedCustomCheckmark: Story = {
  args: {
    checked: true,
    checkmarkCharacter: '✕',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const CheckedDisabledCustomCheckmark: Story = {
  args: {
    checked: true,
    disabled: true,
    checkmarkCharacter: '✕',
  },
};

export const HasErrors: Story = {
  args: {
    hasErrors: true,
  },
};

export const HasErrorsDisabled: Story = {
  args: {
    hasErrors: true,
    disabled: true,
  },
};

export const HasErrorsChecked: Story = {
  args: {
    hasErrors: true,
    checked: true,
  },
};

export const HasErrorsCheckedDisabled: Story = {
  args: {
    hasErrors: true,
    checked: true,
    disabled: true,
  },
};
