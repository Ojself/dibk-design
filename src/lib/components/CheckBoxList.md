Ordered List example:

```js
import CheckBoxListItem from "lib/components/CheckBoxListItem";
<CheckBoxList>
    <CheckBoxListItem
        onChange={() => {
            console.log("onchange");
        }}
        checked={true}
        name="checkboxlist"
        id="checkboxList-listItem-1"
    >
        Label for checked checkbox
    </CheckBoxListItem>
    <CheckBoxListItem
        onChange={() => {
            console.log("onchange");
        }}
        name="checkboxlist"
        id="checkboxList-listItem-2"
    >
        Label for unchecked checkbox
    </CheckBoxListItem>
</CheckBoxList>;
```
