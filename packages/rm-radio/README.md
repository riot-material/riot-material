# radio component based on [Material Design](https://material.io/) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/rm-radio
```
or download one of the bundled file
```js
/**
 * `dist/index.js`
 * `dist/index+libs.js`
 */
requirejs.config({
  paths: {
      "@riot-material/rm-radio": "path/to/@riot-material/rm-radio",
   },
});

require(['@riot-material/rm-radio'], function (RadioComponent) {
    // ...
});

/**
 * `dist/index.es.js`
 * npm installation
 */
import RadioComponent from "@riot-material/rm-radio";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/rm-radio/index.js" />
<!-- or -->
<script src="@riot-material/rm-radio/index+libs.js" />
```
and access it via
```js
window.riotMaterial.components.radio;
```
*Note: all the bundled file having `+libs` contain also the dependencies needed by the component, which, in this case, are:  
`@riot-material/ripple`  
Be sure to have them when installing manually or including via html*
## Properties
### `checked` optional
### `disabled` optional
Any value will be result in the disabled state
### `label` optional
### `name` optional
### `readonly` optional
## Methods
### `getName(): string|null`
### `isChecked(): boolean`
### `isDisabled(): boolean`
### `isReadonly(): boolean`