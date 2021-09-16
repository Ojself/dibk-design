Regular buttons example:

```js
<Button content="Click me" color="default" />
<Button content="Click me" color="primary" />
<Button content="Click me" color="default" disabled="disabled" />
<Button content="Click me" color="primary" disabled="disabled" />
```

Regular buttons with arrow example:

```js
<Button content="Click me" color="default" arrow="left" />
<Button content="Click me" color="primary" arrow="right" />
<Button content="Click me" color="default" arrow="left" disabled="disabled" />
<Button content="Click me" color="primary" arrow="right" disabled="disabled" />
```

Regular buttons without hover effect example:

```js
<Button content="Click me" color="default" noHover />
<Button content="Click me" color="primary" noHover />
<Button content="Click me" color="default" noHover disabled="disabled" />
<Button content="Click me" color="primary" noHover disabled="disabled" />
```

Small buttons example:

```js
<Button content="Click me" color="default" size="small" />
<Button content="Click me" color="primary" size="small" />
<Button content="Click me" color="default" size="small" disabled="disabled" />
<Button content="Click me" color="primary" size="small" disabled="disabled" />
```


Small buttons with arrow example:

```js
<Button content="Click me" color="default" size="small" arrow="left" />
<Button content="Click me" color="primary" size="small" arrow="right" />
<Button content="Click me" color="default" size="small" arrow="left" disabled="disabled" />
<Button content="Click me" color="primary" size="small" arrow="right" disabled="disabled" />
```

Themed buttons:

```js
import customTheme from 'data/customTheme';
<React.Fragment>
<Button content="Click me" color="default" size="small" theme={customTheme} />
<Button content="Click me" color="primary" size="small" theme={customTheme} />
<Button content="Click me" color="default" size="small" theme={customTheme} disabled="disabled" />
<Button content="Click me" color="primary" size="small" theme={customTheme} disabled="disabled" />
</React.Fragment>
```
