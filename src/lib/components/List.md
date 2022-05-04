Ordered List example:

```js
<List listItems={["item 1", "item 2", "item 3"]} ordered={true} />
```

Unordered List example:

```js
<List listItems={["item 1", "item 2", "item 3", <a href="hoy">test</a>]} />
```

Unordered square-styled List example:

```js
<List listItems={["item 1", "item 2", "item 3"]} listStyle="square" />
```

Unordered unstyled List example:

```js
<List listItems={["item 1", "item 2", "item 3"]} listStyle="none" />
```

Unordered unstyled compact List example:

```js
<List listItems={["item 1", "item 2", "item 3"]} listStyle="none" compact />
```

Unordered List with subitems example:

```js
<List listItems={['item 1', <React.Fragment>item 2 <List listItems={['subitem 1', 'subitem 2', 'subitem 3']} /></React.Fragment>, 'item 2']} />
```
