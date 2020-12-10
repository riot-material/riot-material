# checkbox component based on [Material Design](https://material.io/components/selection-controls#checkboxes) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/rm-checkbox
```
or download one of the bundled file
```js
/**
 * `dist/index.js`
 * `dist/index+libs.js`
 */
requirejs.config({
  paths: {
      "@riot-material/rm-checkbox": "path/to/@riot-material/rm-checkbox",
   },
});

require(['@riot-material/rm-checkbox'], function (CheckboxComponent) {
    // ...
});

/**
 * `dist/index.es.js`
 * npm installation
 */
import CheckboxComponent from "@riot-material/rm-checkbox";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/rm-checkbox/index.js" />
<!-- or -->
<script src="@riot-material/rm-checkbox/index+libs.js" />
```
and access it via
```js
window.riotMaterial.components.checkbox;
```
*Note: all the bundled file having `+libs` contain also the dependencies needed by the component, which, in this case, are:  
`@riot-material/ripple`  
`what-input`  
Be sure to have them when installing manually or including via html*
## Properties
### `checked` *optional*
### `disabled` *optional*
### `label` *optional*
### `name` *optional*
### `readonly` *optional*
## Methods
### `isChecked(): boolean`
### `isDisabled(): boolean`
### `isReadonly(): boolean`