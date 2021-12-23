Regular radio button icons example:

```js
<RadioButtonIcon />
<RadioButtonIcon checked={true} />
<RadioButtonIcon disabled={true} />
<RadioButtonIcon checked={true} disabled={true} />
<RadioButtonIcon hasErrors={true} />
<RadioButtonIcon hasErrors={true} disabled={true} />
<RadioButtonIcon checked={true} hasErrors={true} />
<RadioButtonIcon checked={true} hasErrors={true} disabled={true} />
```

Themed Regular radio button icons example:

```js
import customTheme from 'data/customTheme';
<React.Fragment>
  <RadioButtonIcon theme={customTheme}/>
  <RadioButtonIcon checked={true} theme={customTheme} />
  <RadioButtonIcon theme={customTheme} disabled={true} />
  <RadioButtonIcon checked={true} theme={customTheme} disabled={true} />
  <RadioButtonIcon hasErrors={true} theme={customTheme} />
  <RadioButtonIcon hasErrors={true} disabled={true} theme={customTheme} />
  <RadioButtonIcon checked={true} hasErrors={true} theme={customTheme} />
  <RadioButtonIcon checked={true} hasErrors={true} disabled={true} theme={customTheme} />
</React.Fragment>
```

Radio button icons with custom size example:

```js
<RadioButtonIcon size='36px' />
<RadioButtonIcon size='36px' checked={true} />
<RadioButtonIcon size='36px' disabled={true} />
<RadioButtonIcon size='36px' checked={true} disabled={true} />
<RadioButtonIcon size='36px' hasErrors={true} />
<RadioButtonIcon size='36px' hasErrors={true} disabled={true} />
<RadioButtonIcon size='36px' checked={true} hasErrors={true} />
<RadioButtonIcon size='36px' checked={true} hasErrors={true} disabled={true} />
```
