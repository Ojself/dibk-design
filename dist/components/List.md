Ordered List example:

```js
import ListItem from "lib/components/ListItem";
<List ordered={true}>
    <ListItem>item 1</ListItem>
    <ListItem>item 2</ListItem>
    <ListItem>item 3</ListItem>
</List>;
```

Unordered List example:

```js
import ListItem from "lib/components/ListItem";
<List>
    <ListItem>item 1</ListItem>
    <ListItem>item 2</ListItem>
    <ListItem>item 3</ListItem>
</List>;
```

Unordered square-styled List example:

```js
import ListItem from "lib/components/ListItem";
<List listStyle="square">
    <ListItem>item 1</ListItem>
    <ListItem>item 2</ListItem>
    <ListItem>item 3</ListItem>
</List>;
```

Unordered unstyled List example:

```js
import ListItem from "lib/components/ListItem";
<List listStyle="none">
    <ListItem>item 1</ListItem>
    <ListItem>item 2</ListItem>
    <ListItem>item 3</ListItem>
</List>;
```

Unordered unstyled compact List example:

```js
import ListItem from "lib/components/ListItem";
<List listStyle="none" compact>
    <ListItem>item 1</ListItem>
    <ListItem>item 2</ListItem>
    <ListItem>item 3</ListItem>
</List>;
```

Unordered List with subitems example:

```js
import ListItem from "lib/components/ListItem";
<List>
    <ListItem>item 1</ListItem>
    <ListItem>
        item 2
        <List>
            <ListItem>subitem 1</ListItem>
            <ListItem>subitem 2</ListItem>
        </List>
    </ListItem>
    <ListItem>item 3</ListItem>
</List>;
```
