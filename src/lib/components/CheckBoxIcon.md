Regular check box icons example:

```js
<CheckBoxIcon  />
<CheckBoxIcon checked={true} />
<CheckBoxIcon checked={true} checkmarkCharacter="✕" />
```

Themed Regular check box icons example:

```js
import customTheme from 'data/customTheme';
<React.Fragment>
<CheckBoxIcon theme={customTheme} />
<CheckBoxIcon checked={true} theme={customTheme} />
<CheckBoxIcon checked={true} theme={customTheme} checkmarkCharacter="✕" />
</React.Fragment>
```

Check box icons with custom size example:

```js
<CheckBoxIcon size='43px'  />
<CheckBoxIcon size='43px' checked={true} />
<CheckBoxIcon size='43px' checked={true} checkmarkCharacter="✕" />
```



