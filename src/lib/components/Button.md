Regular buttons example:

```js
<Button content="Click me" color="default" />
<Button content="Click me" color="primary" />
<Button content="Click me" color="default" disabled />
<Button content="Click me" color="primary" disabled />
```

Rounded buttons example:

```js
<Button rounded content="Click me" color="default" />
<Button rounded content="Click me" color="primary" />
<Button rounded content="Click me" color="default" disabled />
<Button rounded content="Click me" color="primary" disabled />
```

Regular buttons with arrow example:

```js
<Button rounded content="Click me" color="default" arrow="left" />
<Button content="Click me" color="primary" arrow="right" />
<Button content="Click me" color="default" arrow="left" disabled />
<Button content="Click me" color="primary" arrow="right" disabled />
```

Regular buttons without hover effect example:

```js
<Button content="Click me" color="default" noHover />
<Button content="Click me" color="primary" noHover />
<Button content="Click me" color="default" noHover disabled />
<Button content="Click me" color="primary" noHover disabled />
```

Small buttons example:

```js
<Button content="Click me" color="default" size="small" />
<Button content="Click me" color="primary" size="small" />
<Button content="Click me" color="default" size="small" disabled />
<Button content="Click me" color="primary" size="small" disabled />
```

Small rounded buttons example:

```js
<Button rounded content="Click me" color="default" size="small" />
<Button rounded content="Click me" color="primary" size="small" />
<Button rounded content="Click me" color="default" size="small" disabled />
<Button rounded content="Click me" color="primary" size="small" disabled />
```


Small buttons with arrow example:

```js
<Button content="Click me" color="default" size="small" arrow="left" />
<Button content="Click me" color="primary" size="small" arrow="right" />
<Button content="Click me" color="default" size="small" arrow="left" disabled />
<Button content="Click me" color="primary" size="small" arrow="right" disabled />
```

Themed buttons:

```js
import customTheme from 'data/customTheme';
<React.Fragment>
<Button content="Click me" color="default" size="small" theme={customTheme} />
<Button content="Click me" color="primary" size="small" theme={customTheme} />
<Button content="Click me" color="default" size="small" theme={customTheme} disabled />
<Button content="Click me" color="primary" size="small" theme={customTheme} disabled />
</React.Fragment>
```
