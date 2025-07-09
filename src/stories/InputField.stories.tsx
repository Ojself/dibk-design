import type { Meta, StoryObj } from '@storybook/react-vite';

import InputField from '../components/InputField';

const meta: Meta<typeof InputField> = {
  title: 'Example/InputField',
  component: InputField,
  argTypes: {
    'aria-autocomplete': {
      control: 'select',
      options: ['none', 'inline', 'list', 'both'],
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;
const render: Story['render'] = (args) => <InputField {...args} />;

// All stories follow this format:
export const Default: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField1',
  },
  render,
};

export const Required: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField2',
    required: true,
  },
  render,
};

export const WithValue: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField3',
    value: 'Input field value',
  },
  render,
};

export const WithDefaultValue: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField4',
    value: 'Input field default value',
  },
  render,
};

export const WithLabelAndValue: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField5',
    value: 'Input field value',
    label: 'Input field label',
  },
  render,
};

export const RequiredWithLabelAndValue: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField6',
    value: 'Input field value',
    label: 'Input field label',
    required: true,
  },
  render,
};

export const WithLinkInLabel: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField7',
    value: 'Input field value',
    label: [
      'Input with ',
      <a key="labelLink" href="#label-link">
        link
      </a>,
      ' in label',
    ],
  },
  render,
};

export const WithErrors: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField8',
    value: 'Input field value',
    label: 'Input with label, value, errors and error message',
    hasErrors: true,
    errorMessage: 'Wrong value',
  },
  render,
};

export const Readonly: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField9',
    value: 'Input field value',
    label: 'Readonly input',
    readOnly: true,
  },
  render,
};

export const Disabled: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField10',
    value: 'Input field value',
    label: 'Disabled input',
    disabled: true,
  },
  render,
};

export const Number: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField11',
    value: '3',
    label: 'Input with number values',
    type: 'number',
  },
  render,
};

export const ContentOnly: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField12',
    value: 'Input field value',
    label: 'Input with contentOnly set to true',
    contentOnly: true,
  },
  render,
};

export const ContentOnlyWithDefaultContent: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField13',
    label: 'Input with contentOnly set to true and default content',
    contentOnly: true,
    defaultContent: 'Default content',
  },
  render,
};

export const FileInput: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField14',
    label: 'File input',
    type: 'file',
  },
  render,
};

export const FileInputWithButtonContentAndSelectedFile: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField15',
    label: 'File input',
    type: 'file',
    buttonContent: 'Legg til fil',
    selectedFileName: 'file.txt',
  },
  render,
};

export const DateInput: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField16',
    label: 'Date input without value',
    type: 'date',
  },
  render,
};

export const DateInputWithValue: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField17',
    label: 'Date input with value',
    value: '2020-05-10',
    type: 'date',
  },
  render,
};

export const DateInputWithValueAndError: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField17',
    label: 'Date input with error',
    value: '2020-05-10',
    type: 'date',
    hasErrors: true,
    errorMessage: 'Wrong date value',
  },
  render,
};

export const InputWithCustomWidth: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField19',
    label: 'Input with custom width',
    width: '400px',
  },
  render,
};

export const InputWithCustomElementKey: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
    id: 'inputField20',
    label: 'Input with custom element key',
    elementKey: 'inputKeyHere',
  },
  render,
};