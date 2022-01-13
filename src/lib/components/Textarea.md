Input field example:

```js
<Textarea id="textInput1" onChange={()=>{console.log('onchange')}} mandatory={true} />
<Textarea id="textInput2" onChange={()=>{console.log('onchange')}} value="Textarea with value" />
<Textarea id="textInput3" onChange={()=>{console.log('onchange')}} defaultValue="Textarea with defaultValue" />
<Textarea id="textInput4" onChange={()=>{console.log('onchange')}} value="Textarea with label and value" label="Textarea with label and value" />
<Textarea id="textInput5" onChange={()=>{console.log('onchange')}} value="Textarea with link in label" label={['Textarea with ', <a key="labelLink" href="#">link</a>, ' in label']} />
<Textarea id="textInput6" onChange={()=>{console.log('onchange')}} value="Textarea with label, value, errors and error message" label="Textarea with label, value, errors and error message" hasErrors={true} errorMessage="Wrong value" />
<Textarea id="textInput7" onChange={()=>{console.log('onchange')}} readOnly value="Read only Textarea with label and value" label="Read only Textarea with label and value" />
<Textarea id="textInput8" onChange={()=>{console.log('onchange')}} disabled value="Disabled Textarea with label and value" label="Disabled Textarea with label and value" />
<Textarea id="textInput9" onChange={()=>{console.log('onchange')}} value="Value for Textarea" label="Textarea with label, value and contentOnly set to true" contentOnly={true} />
<Textarea id="textInput10" onChange={() => {console.log('onChange')}} label="Textarea without value, contentOnly set to true and defaultContent" contentOnly={true} defaultContent="Please insert a value" />
<Textarea id="textInput11" onChange={()=>{console.log('onchange')}} value="Textarea with custom width" width="320px" />
<Textarea id="textInput11" onChange={()=>{console.log('onchange')}} value="Textarea with custom width and vertical resizing" width="450px" resize="vertical" />
<Textarea id="textInput11" onChange={()=>{console.log('onchange')}} value="Textarea with a not auto generated key" elementKey="textareaKeyHere" />
```

Themed Input field example:

```js
import customTheme from 'data/customTheme';
<React.Fragment>
    <Textarea id="themedTextInput4" onChange={()=>{console.log('onchange')}} value="Textarea with link in label" label={['Textarea with ', <a key="labelLink" href="#">link</a>, ' in label']} theme={customTheme} />
    <Textarea id="themedTextInput5" onChange={()=>{console.log('onchange')}} value="Textarea with label, value, errors and error message" label="Textarea with label, value, errors and error message" hasErrors={true} errorMessage="Wrong value" theme={customTheme} />
</React.Fragment>
```
