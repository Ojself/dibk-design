import type { Meta, StoryObj } from '@storybook/react-vite';

import DragAndDropFileInput from '../components/DragAndDropFileInput';

const meta: Meta<typeof DragAndDropFileInput> = {
  title: 'Example/DragAndDropFileInput',
  component: DragAndDropFileInput,
  argTypes: {
    buttonColor: { control: 'radio', options: ['primary', 'secondary'] },
  },
  tags: ['autodocs'],
  render: (args) => (
    <DragAndDropFileInput {...args}>{args.children}</DragAndDropFileInput>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WithoutSelectedFile: Story = {
  args: {
    id: 'dragAndDropInput-1',
    label: 'Input without selected file',
    buttonContent: 'Velg fil',
    onSelectChange: () => console.log('Select change'),
    onDragAndDropChange: () => console.log('Drag and drop change'),
  },
};

export const WithSelectedFile: Story = {
  args: {
    ...WithoutSelectedFile.args,
    selectedFileName: 'important-file.xml',
  },
};

export const Required: Story = {
  args: {
    ...WithoutSelectedFile.args,
    required: true,
  },
};

export const WithCustomButtonContentWhenSelectedFile: Story = {
  args: {
    ...WithSelectedFile.args,
    buttonContentWhenSelectedFile: 'Velg annen fil',
  },
};

export const WithError: Story = {
  args: {
    ...WithCustomButtonContentWhenSelectedFile.args,
    selectedFileName: 'wrong-file.xml',
    hasErrors: true,
    errorMessage: 'Filen må være midre enn 15MB',
  },
};

export const ContentOnly: Story = {
  args: {
    ...WithSelectedFile.args,
    contentOnly: true,
  },
};

export const WithChildElements: Story = {
  args: {
    ...WithoutSelectedFile.args,
    children: (
      <>
        <p>First paragraph</p>
        <p>second paragraph</p>
      </>
    ),
  },
};