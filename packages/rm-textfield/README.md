# textfield component based on [Material Design](https://material.io/components/text-fields) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/rm-textfield
```
or download one of the bundled file
```js
/**
 * `dist/index.amd.js`
 * `dist/index.amd+libs.js`
 * `dist/index.umd.js`
 * `dist/index.umd+libs.js`
 */
requirejs.config({
  paths: {
      "@riot-material/rm-textfield": "path/to/@riot-material/rm-textfield",
   },
});

require(['@riot-material/rm-textfield'], function (TextfieldComponent) {
    // ...
});

/**
 * `dist/index.js`
 * `dist/index.es.js`
 * npm installation
 */
import TextfieldComponent from "@riot-material/rm-textfield";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/rm-textfield/index.umd.js" />
<!-- or -->
<script src="@riot-material/rm-textfield/index.umd+libs.js" />
```
and access it via
```js
window.riotMaterial.components.textfield;
```
*Note: all the bundled file having `+libs` contain also the dependencies needed by the component, which, in this case, are:  
`@riot-material/rm-textfield-container`  
Be sure to have them when installing manually or including via html*
## Properties
### `clearable` *optional*
### `disabled` *optional*
Any value will be result in the disabled state
### `full-width` *optional*
### `label` *optional*
### `name` *optional*
### `placeholder` *optional*
### `readonly` *optional*
### `type` *optional* (default: `text`)
Valid values:
- `email`
- `number`
- `password`
- `search`
- `tel`
- `url`
- `text`
### `value` *optional*
### `variant` *optional* (default: `flat`)
Valid values:  
- `flat`  
- `filled`  
- `outlined`
## Methods
### `clear(): void`
### `getType(): string`
### `isClearable(): boolean`
### `isDisabled(): boolean`
### `isFullWidth(): boolean`
### `isReadonly(): boolean`
## Slots
### `leading`
Will be mounted before the input tag
### `trailing`
Will be mounted after the input tag