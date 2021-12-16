Regular radio button icons example:

```js
<RadioButtonIcon />
<RadioButtonIcon checked={true} />
<RadioButtonIcon disabled={true} />
<RadioButtonIcon checked={true} disabled={true} />
```

Themed Regular radio button icons example:

```js
import customTheme from 'data/customTheme';
<React.Fragment>
  <RadioButtonIcon theme={customTheme}/>
  <RadioButtonIcon checked={true} theme={customTheme} />
  <RadioButtonIcon theme={customTheme} disabled={true} />
  <RadioButtonIcon checked={true} theme={customTheme} disabled={true} />
</React.Fragment>
```

Radio button icons with custom size example:

```js
<RadioButtonIcon size='36px' />
<RadioButtonIcon size='36px' checked={true} />
<RadioButtonIcon size='36px' disabled={true} />
<RadioButtonIcon size='36px' checked={true} disabled={true} />
```
