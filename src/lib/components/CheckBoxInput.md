Checkbox input example:

```js
<div className="flex">
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-1" checked={true}>
  <span>Label for checked checkbox</span>
</CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-2" checked={true} disabled={true}>
  <span>Label for checked disabled checkbox</span>
</CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-3">
  <span>Label for unchecked checkbox</span>
</CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-4" checked={true} contentOnly={true}>
  <span>Checked checkbox with content only</span>
</CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-5" contentOnly={true}>
  <span>Unchecked checkbox with content only</span>
</CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-6" checked={true} checkmarkCharacter="✕">
  <span>Label for checked checkbox with custom checkmark</span>
</CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-7" checked={true} checkmarkCharacter="✕" expandable={true}>
  <span>Label for checkbox with aria-expanded true</span>
</CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="checkBoxInput-8" checked={false} checkmarkCharacter="✕" expandable={true}>
  <span>Label for checkbox with aria-expanded false</span>
</CheckBoxInput>

</div>
```


Themed Checkbox input example:

```js
import customTheme from 'data/customTheme';
<div className="flex">
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="themed-checkbox" id="themed-checkBoxInput-1" checked={true} theme={customTheme}>
  <span>Label for checked checkbox</span>
</CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="themed-checkbox" id="themed-checkBoxInput-2" checked={true} disabled={true} theme={customTheme}>
  <span>Label for checked disabled checkbox</span>
</CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="themed-checkbox" id="themed-checkBoxInput-3" theme={customTheme}>
  <span>Label for unchecked checkbox</span>
</CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="themed-checkbox" id="themed-checkBoxInput-4" checked={true} contentOnly={true} theme={customTheme}>
  <span>Checked checkbox with content only</span>
</CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="themed-checkbox" id="themed-checkBoxInput-5" contentOnly={true} theme={customTheme}>
  <span>Unchecked checkbox with content only</span>
</CheckBoxInput>
<CheckBoxInput onChange={()=>{console.log('onchange')}} name="checkbox" id="themed-checkBoxInput-6" checked={true} checkmarkCharacter="✕" theme={customTheme}>
  <span>Label for checked checkbox with custom checkmark</span>
</CheckBoxInput>
</div>
```
