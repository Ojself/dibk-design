Check box list item example:

```js
<CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="checkbox" id="checkboxListItem-1">
  Label for checked checkbox
</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} name="checkbox" id="checkboxListItem-2">
  Label for unchecked checkbox
</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="checkbox" id="checkboxListItem-3" contentOnly={true}>
  Label for checked checkbox with content only
</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} name="checkbox" id="checkboxListItem-4" contentOnly={true}>
  Label for unchecked checkbox with content only
</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="checkbox" id="checkboxListItem-5" checkmarkCharacter="✕">
  Label for checked checkbox with custom checkmark
</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="checkbox" id="checkboxListItem-6" disabled={true}>
  Label for disabled checked checkbox
</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} name="checkbox" id="checkboxListItem-7" disabled={true}>
  Label for disabled unchecked checkbox
</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="checkbox" id="checkboxListItem-8" checkmarkCharacter="✕" disabled={true}>
  Label for disabled checked checkbox with custom checkmark
</CheckBoxListItem>
```

Compact check box list item example:

```js
<CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="checkbox" id="compact-checkboxListItem-1" compact>
  Label for checked checkbox
</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} name="checkbox" id="compact-checkboxListItem-2" compact>
  Label for unchecked checkbox
</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="checkbox" id="compact-checkboxListItem-3" contentOnly={true} compact>
  Label for checked checkbox with content only
</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} name="checkbox" id="compact-checkboxListItem-4" contentOnly={true} compact>
  Label for unchecked checkbox with content only
</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="checkbox" id="compact-checkboxListItem-5" compact hasErrors>
  Label for checked checkbox with error
</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} name="checkbox" id="compact-checkboxListItem-6" compact hasErrors>
  Label for unchecked checkbox with error
</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="checkbox" id="compact-checkboxListItem-7" compact checkmarkCharacter="✕">
  Label for checked checkbox with custom checkmark
</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="checkbox" id="compact-checkboxListItem-8" compact disabled={true}>
  Label for disabled checked checkbox
</CheckBoxListItem>
<CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="checkbox" id="compact-checkboxListItem-9" compact hasErrors disabled={true}>
  Label for disabled checked checkbox with error
</CheckBoxListItem>
```

Themed Check box list item example:
```js
import customTheme from 'data/customTheme';
<React.Fragment>
  <CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="themed-checkbox" id="themed-checkboxListItem-1" theme={customTheme}>
    Label for checked checkbox
  </CheckBoxListItem>
  <CheckBoxListItem onChange={()=>{console.log('onchange')}} name="themed-checkbox" id="themed-checkboxListItem-2" theme={customTheme}>
    Label for unchecked checkbox
  </CheckBoxListItem>
  <CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="themed-checkbox" id="themed-checkboxListItem-3" contentOnly={true} theme={customTheme}>
    Label for checked checkbox with content only
  </CheckBoxListItem>
  <CheckBoxListItem onChange={()=>{console.log('onchange')}} name="themed-checkbox" id="themed-checkboxListItem-4" contentOnly={true} theme={customTheme}>
    Label for unchecked checkbox with content only
  </CheckBoxListItem>
  <CheckBoxListItem onChange={()=>{console.log('onchange')}} checked={true} name="themed-checkbox" id="themed-checkboxListItem-5" checkmarkCharacter="✕" theme={customTheme}>
    Label for checked checkbox with custom checkmark
  </CheckBoxListItem>
</React.Fragment>
```
