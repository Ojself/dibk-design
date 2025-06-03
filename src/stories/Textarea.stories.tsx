import type { Meta, StoryObj } from '@storybook/react-vite';
import Textarea, { type TextareaProps } from '../components/Textarea';
import ThemeProvider from '../components/ThemeProvider';
import type { ThemeProps } from '../components/Theme';

type ExtendedArgs = TextareaProps & { theme?: ThemeProps };

const meta: Meta<typeof Textarea> = {
  title: 'Example/Textarea',
  component: Textarea,
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
  args: { onChange: (e) => console.log(e.target.value), id: 'textarea1' },
};
export const WithValue: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'textarea2',
    value: 'Textarea with value',
  },
};
export const WithDefaultValue: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'textarea3',
    defaultValue: 'Textarea with default value',
  },
};
export const WithLabel: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'textarea4',
    value: 'Textarea with label and value',
    label: 'Textarea with label and value',
  },
};
export const Required: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'textarea5',
    required: true,
    label: 'Required textarea',
    value: 'Textarea with required value',
  },
};
export const WithLinkInLabel: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'textarea6',
    value: 'Textarea with link in label',
    label: [
      'Textarea with ',
      <a key="link" href="#textarea6">
        link
      </a>,
      ' in label',
    ],
  },
};
export const WithError: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'textarea7',
    value: 'Textarea with label, value, errors and error message',
    label: 'Textarea with label, value, errors and error message',
    hasErrors: true,
    errorMessage: 'Wrong value',
  },
};
export const ReadOnly: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'textarea8',
    readOnly: true,
    value: 'Read only',
    label: 'Read only',
  },
};
export const Disabled: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'textarea9',
    disabled: true,
    value: 'Disabled',
    label: 'Disabled',
  },
};
export const ContentOnly: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'textarea10',
    value: 'Value for Textarea',
    label: 'Textarea with contentOnly',
    contentOnly: true,
  },
};
export const ContentOnlyAndDefaultContent: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'textarea11',
    label: 'Textarea with defaultContent',
    contentOnly: true,
    defaultContent: 'Please insert a value',
  },
};
export const WithCustomWidth: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'textarea12',
    value: 'Textarea with custom width',
    width: '320px',
  },
};
export const WithCustomWidthAndVerticalResizing: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'textarea13',
    value: 'Textarea with resizing',
    width: '450px',
    resize: 'vertical',
  },
};
export const WithCustomElementKey: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'textarea14',
    value: 'Textarea with key',
    elementKey: 'textareaKeyHere',
  },
};
