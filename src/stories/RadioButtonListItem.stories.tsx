import type { Meta, StoryObj } from '@storybook/react-vite';
import ThemeProvider from '../components/ThemeProvider';
import type { ThemeProps } from '../components/Theme';
import RadioButtonListItem, {
  type RadioButtonListItemProps,
} from '../components/RadioButtonListItem';

type ExtendedArgs = RadioButtonListItemProps & { theme?: ThemeProps };

const meta: Meta<typeof RadioButtonListItem> = {
  title: 'Example/RadioButtonListItem',
  component: RadioButtonListItem,
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
  args: {
    id: 'radioButtonListItem-1',
    name: 'radioButtonListItem',
    children: 'Label for unchecked radio button',
    inputValue: 'value',
  },
};

export const Checked: Story = {
  args: {
    id: 'radioButtonListItem-2',
    checked: true,
    name: 'radioButtonListItem',
    children: 'Label for checked radio button',
    inputValue: 'value',
  },
};

export const CheckedDisabled: Story = {
  args: {
    id: 'radioButtonListItem-3',
    checked: true,
    disabled: true,
    name: 'radioButtonListItem',
    children: 'Label for checked disabled radio button',
    inputValue: 'value',
  },
};

export const UncheckedContentOnly: Story = {
  args: {
    id: 'radioButtonListItem-4',
    contentOnly: true,
    name: 'radioButtonListItem',
    children: 'Label for unchecked radio button with content only',
    inputValue: 'value',
  },
};

export const CheckedContentOnly: Story = {
  args: {
    id: 'radioButtonListItem-5',
    checked: true,
    contentOnly: true,
    name: 'radioButtonListItem',
    children: 'Label for checked radio button with content only',
    inputValue: 'value',
  },
};

/*
No support for custom checkmarks in RadioButtonListItem as of now.
export const CheckedCustomCheckmark: Story = {
  args: {
    id: 'radioButtonListItem-6',
    checked: true,
    disabled: true,
    name: 'radioButtonListItem',
    checkmarkCharacter: '✕',
    children: 'Label for checked radio button with custom checkmark',
    inputValue: 'value',
  },
}; */

export const HasErrors: Story = {
  args: {
    id: 'radioButtonListItem-7',
    hasErrors: true,
    name: 'radioButtonListItem',
    children: 'Label for radio button with errors',
    inputValue: 'value',
  },
};

export const HasErrorsDisabled: Story = {
  args: {
    id: 'radioButtonListItem-8',
    hasErrors: true,
    disabled: true,
    name: 'radioButtonListItem',
    children: 'Label for disabled radio button with errors',
    inputValue: 'value',
  },
};

export const HasErrorsChecked: Story = {
  args: {
    id: 'radioButtonListItem-9',
    hasErrors: true,
    checked: true,
    name: 'radioButtonListItem',
    children: 'Label for checked radio button with errors',
    inputValue: 'value',
  },
};

export const HasErrorsCheckedDisabled: Story = {
  args: {
    id: 'radioButtonListItem-10',
    hasErrors: true,
    checked: true,
    disabled: true,
    name: 'radioButtonListItem',
    children: 'Label for checked disabled radio button with errors',
    inputValue: 'value',
  },
};

export const Required: Story = {
  args: {
    id: 'radioButtonListItem-11',
    required: true,
    name: 'radioButtonListItem',
    children: 'Label for required radio button',
    inputValue: 'value',
  },
};

export const Compact: Story = {
  args: {
    id: 'radioButtonListItem-12',
    compact: true,
    name: 'radioButtonListItem',
    children: 'Label for compact radio button',
    inputValue: 'value',
  },
};
