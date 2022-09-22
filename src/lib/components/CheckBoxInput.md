Checkbox input example:

```js
<div className="flex">
  <CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-1" checked={true}>
    Label for checked checkbox
  </CheckBoxInput>
  <CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-2" checked={true} disabled={true}>
    Label for checked disabled checkbox
  </CheckBoxInput>
  <CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-3">
    Label for unchecked checkbox
  </CheckBoxInput>
  <CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-4" checked={true} contentOnly={true}>
    Checked checkbox with content only
  </CheckBoxInput>
  <CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-5" contentOnly={true}>
    Unchecked checkbox with content only
  </CheckBoxInput>
  <CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-6" checked={true} checkmarkCharacter="✕">
    Label for checked checkbox with custom checkmark
  </CheckBoxInput>
</div>
```


Themed Checkbox input example:

```js
import customTheme from 'data/customTheme';
<div className="flex">
  <CheckBoxInput onChange={()=>{console.log('onchange')}} name="themed-checkbox" id="themed-checkBoxInput-1" checked={true} theme={customTheme}>
    Label for checked checkbox
  </CheckBoxInput>
  <CheckBoxInput onChange={()=>{console.log('onchange')}} name="themed-checkbox" id="themed-checkBoxInput-2" checked={true} disabled={true} theme={customTheme}>
    Label for checked disabled checkbox
  </CheckBoxInput>
  <CheckBoxInput onChange={()=>{console.log('onchange')}} name="themed-checkbox" id="themed-checkBoxInput-3" theme={customTheme}>
    Label for unchecked checkbox
  </CheckBoxInput>
  <CheckBoxInput onChange={()=>{console.log('onchange')}} name="themed-checkbox" id="themed-checkBoxInput-4" checked={true} contentOnly={true} theme={customTheme}>
    Checked checkbox with content only
  </CheckBoxInput>
  <CheckBoxInput onChange={()=>{console.log('onchange')}} name="themed-checkbox" id="themed-checkBoxInput-5" contentOnly={true} theme={customTheme}>
    Unchecked checkbox with content only
  </CheckBoxInput>
  <CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="themed-checkBoxInput-6" checked={true} checkmarkCharacter="✕" theme={customTheme}>
    Label for checked checkbox with custom checkmark
  </CheckBoxInput>
</div>
```
