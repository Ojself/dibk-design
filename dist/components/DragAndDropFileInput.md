Drag and drop file input examples:

```js
<DragAndDropFileInput id="dragAndDropInput-1" label="Input without selected file" buttonContent="Velg fil" onSelectChange={() => console.log('Select change')} onDragAndDropChange={() => console.log('Drag and drop change')}  />

<DragAndDropFileInput id="dragAndDropInput-2" label="Input with selected file" buttonContent="Velg fil" selectedFileName="important-file.xml" onSelectChange={() => console.log('Select change')} onDragAndDropChange={() => console.log('Drag and drop change')}  />

<DragAndDropFileInput id="dragAndDropInput-3" label="Input with selected file and buttonContentWhenSelectedFile" buttonContent="Velg fil" buttonContentWhenSelectedFile="Velg annen fil" selectedFileName="important-file.xml" onSelectChange={() => console.log('Select change')} onDragAndDropChange={() => console.log('Drag and drop change')}  />

<DragAndDropFileInput id="dragAndDropInput-4" label="Input with selected file and error message" buttonContent="Velg fil" buttonContentWhenSelectedFile="Velg annen fil" selectedFileName="wrong-file.xml" onSelectChange={() => console.log('Select change')} onDragAndDropChange={() => console.log('Drag and drop change')} hasErrors errorMessage="Filen må være midre enn 15MB" />

<DragAndDropFileInput id="dragAndDropInput-5" label="Input with selected file and contentOnly" buttonContent="Velg fil" selectedFileName="important-file2.xml" onSelectChange={() => console.log('Select change')} onDragAndDropChange={() => console.log('Drag and drop change')} contentOnly={true} />
```
