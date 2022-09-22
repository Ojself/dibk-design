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


Ordered List with legend example:

```js
import CheckBoxListItem from "lib/components/CheckBoxListItem";
<CheckBoxList legend="Checkbox list legend">
    <CheckBoxListItem
        onChange={() => {
            console.log("onchange");
        }}
        checked={true}
        name="checkboxlist-with-legend"
        id="checkboxListWithLegend-listItem-1"
    >
        Label for checked checkbox
    </CheckBoxListItem>
    <CheckBoxListItem
        onChange={() => {
            console.log("onchange");
        }}
        name="checkboxlist-with-legend"
        id="checkboxListWithLegend-listItem-2"
    >
        Label for unchecked checkbox
    </CheckBoxListItem>
</CheckBoxList>;
```
