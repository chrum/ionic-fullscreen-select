# ionic-fullscreen-select
Set of two components where one serves as wrapper for trigger that opens page with items that we select from.

## Installation:

```bash
npm install https://github.com/chrum/ionic-fullscreen-select.git --save
```

## Use Example:

Add the declaration to your @NgModule:

```typescript
import {FullScreenSelectModule} from 'ionic-fullscreen-select';

...

@NgModule({
  imports: [
    FullScreenSelectModule
  ]
})
```

Use directly inside your HTML templates

```html
    <ion-fullscreen-select
        title="Payment Methods"
        [options]="selectOptions"
        (onSelected)="onSelect($event)">
        <button ion-item outline text-left>
            <span class="buttonLabel">Opening button title</span>
        </button>
    </ion-fullscreen-select>
```

Where [options] should be something like
```javascript
    ...
    this.selectOptions = [
        {
            title: 'Cash',
            value: {...}
        },
        {
            title: 'Credit card',
            value: {...}
        },
    ]
    ...
```

## Author

[Chrystian Ruminowicz](http://chrum.it)

## Licence

This project is licensed under the MIT license.
