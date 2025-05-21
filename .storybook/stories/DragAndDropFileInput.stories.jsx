// Dependencies
import React from 'react';

// Components
import DragAndDropFileInput from '@/components/DragAndDropFileInput';
import ThemeProvider from '@/components/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/DragAndDropFileInput',
  component: DragAndDropFileInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    buttonColor: { control: 'radio', options: ['primary', 'secondary'] },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <ThemeProvider theme={args.theme}>
    <DragAndDropFileInput {...args}>{args.children}</DragAndDropFileInput>
  </ThemeProvider>
);

export const WithoutSelectedFile = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithoutSelectedFile.args = {
  id: 'dragAndDropInput-1',
  label: 'Input without selected file',
  buttonContent: 'Velg fil',
  onSelectChange: () => console.log('Select change'),
  onDragAndDropChange: () => console.log('Drag and drop change'),
};

export const WithSelectedFile = Template.bind({});
WithSelectedFile.args = {
  id: 'dragAndDropInput-2',
  label: 'Input with selected file',
  buttonContent: 'Velg fil',
  selectedFileName: 'important-file.xml',
  onSelectChange: () => console.log('Select change'),
  onDragAndDropChange: () => console.log('Drag and drop change'),
};

export const Required = Template.bind({});
Required.args = {
  id: 'dragAndDropInput-3',
  label: 'Required input without selected file',
  buttonContent: 'Velg fil',
  required: true,
  onSelectChange: () => console.log('Select change'),
  onDragAndDropChange: () => console.log('Drag and drop change'),
};

export const WithCustomButtonContentWhenSelectedFile = Template.bind({});
WithCustomButtonContentWhenSelectedFile.args = {
  id: 'dragAndDropInput-4',
  label: 'Input with selected file and buttonContentWhenSelectedFile',
  buttonContent: 'Velg fil',
  buttonContentWhenSelectedFile: 'Velg annen fil',
  selectedFileName: 'important-file.xml',
  onSelectChange: () => console.log('Select change'),
  onDragAndDropChange: () => console.log('Drag and drop change'),
};

export const WithError = Template.bind({});
WithError.args = {
  id: 'dragAndDropInput-5',
  label: 'Input with selected file and error message',
  buttonContent: 'Velg fil',
  buttonContentWhenSelectedFile: 'Velg annen fil',
  selectedFileName: 'wrong-file.xml',
  onSelectChange: () => console.log('Select change'),
  onDragAndDropChange: () => console.log('Drag and drop change'),
  hasErrors: true,
  errorMessage: 'Filen må være midre enn 15MB',
};

export const ContentOnly = Template.bind({});
ContentOnly.args = {
  id: 'dragAndDropInput-6',
  label: 'Input with selected file and contentOnly',
  buttonContent: 'Velg fil',
  selectedFileName: 'important-file2.xml',
  onSelectChange: () => console.log('Select change'),
  onDragAndDropChange: () => console.log('Drag and drop change'),
  contentOnly: true,
};

export const WithChildElements = Template.bind({});
WithChildElements.args = {
  id: 'dragAndDropInput-1',
  label: 'Input without selected file',
  buttonContent: 'Velg fil',
  onSelectChange: () => console.log('Select change'),
  onDragAndDropChange: () => console.log('Drag and drop change'),
  children: (
    <>
      <p>First paragraph</p>
      <p>second paragraph</p>
    </>
  ),
};
