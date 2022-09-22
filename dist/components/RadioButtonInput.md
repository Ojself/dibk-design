Radio button input example:

```js
<div className="flex">
  <RadioButtonInput onChange={()=>{console.log('onchange')}} inputValue="value 1" name="radio-button-input" id="radio-button-input-1" checked={true}>Checked radio button</RadioButtonInput>
  <RadioButtonInput onChange={()=>{console.log('onchange')}} inputValue="value 2" name="radio-button-input" id="radio-button-input-2">Unchecked radio button</RadioButtonInput>
  <RadioButtonInput onChange={()=>{console.log('onchange')}} inputValue="value 1" name="radio-button-input" id="radio-button-input-3" checked={true} disabled={true}>Checked disabled radio button</RadioButtonInput>
  <RadioButtonInput onChange={()=>{console.log('onchange')}} inputValue="value 2" name="radio-button-input" id="radio-button-input-4" disabled={true}>Unchecked disabled radio button</RadioButtonInput>
</div>
```

Themed Radio button input example:

```js
import customTheme from 'data/customTheme';
<div className="flex">
  <RadioButtonInput onChange={()=>{console.log('onchange')}} inputValue="value 1" name="themed-radio-button-input" id="themed-radio-button-input-1" checked={true} theme={customTheme}>
    Checked radio button
  </RadioButtonInput>
  <RadioButtonInput onChange={()=>{console.log('onchange')}} inputValue="value 2" name="themed-radio-button-input" id="themed-radio-button-input-2" theme={customTheme}>
    Unchecked radio button
  </RadioButtonInput>
  <RadioButtonInput onChange={()=>{console.log('onchange')}} inputValue="value 1" name="themed-radio-button-input" id="themed-radio-button-input-3" checked={true} theme={customTheme} disabled={true}>
    Checked disabled radio button
  </RadioButtonInput>
  <RadioButtonInput onChange={()=>{console.log('onchange')}} inputValue="value 2" name="themed-radio-button-input" id="themed-radio-button-input-4" theme={customTheme} disabled={true}>
    Unchecked disabled radio button
  </RadioButtonInput>
</div>
```
