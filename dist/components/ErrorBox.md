Error box example:

```js
<ErrorBox>
<h3>Du kan ikke signere erklæringen før alle opplysningene er fylt ut:</h3>
<ul>
    <li>Du må krysse av for at foretaket erklærer ansvar i henhold til plan- og bygningsloven.</li>
    <li>Du må fylle ut mobil- eller telefonnummeret til kontaktpersonen.</li>
</ul>
</ErrorBox>
```


Themed error box example:

```js
import customTheme from 'data/customTheme';
<React.Fragment>
    <ErrorBox theme={customTheme}>
    <h3>Du kan ikke signere erklæringen før alle opplysningene er fylt ut:</h3>
    <ul>
        <li>Du må krysse av for at foretaket erklærer ansvar i henhold til plan- og bygningsloven.</li>
        <li>Du må fylle ut mobil- eller telefonnummeret til kontaktpersonen.</li>
    </ul>
</ErrorBox>
</React.Fragment>
```
