Ordered List example:

```js
import RadioButtonListItem from "lib/components/RadioButtonListItem";
<RadioButtonList>
    <RadioButtonListItem
        onChange={() => {
            console.log("onchange");
        }}
        inputValue="value 1"
        name="radio-button-list-list-item"
        id="radioButtonList-listItem-1"
        checked={true}
    >
        Checked radio button
    </RadioButtonListItem>
    <RadioButtonListItem
        onChange={() => {
            console.log("onchange");
        }}
        inputValue="value 2"
        name="radio-button-list-list-item"
        id="radioButtonList-listItem-1"
    >
        Unchecked radio button
    </RadioButtonListItem>
</RadioButtonList>;
```

Ordered List with legend example:

```js
import RadioButtonListItem from "lib/components/RadioButtonListItem";
<RadioButtonList legend="Radio button list legend">
    <RadioButtonListItem
        onChange={() => {
            console.log("onchange");
        }}
        inputValue="value 1"
        name="radio-button-list-with-legend-list-item"
        id="radioButtonListWithLegend-listItem-1"
        checked={true}
    >
        Checked radio button
    </RadioButtonListItem>
    <RadioButtonListItem
        onChange={() => {
            console.log("onchange");
        }}
        inputValue="value 2"
        name="radio-button-list-with-legend-list-item"
        id="radioButtonListWithLegend-listItem-1"
    >
        Unchecked radio button
    </RadioButtonListItem>
</RadioButtonList>;
```
