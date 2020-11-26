# radio component based on [Material Design](https://material.io/components/buttons/) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/rm-radio
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
      "@riot-material/rm-radio": "path/to/@riot-material/rm-radio",
   },
});

require(['@riot-material/rm-radio'], function (RadioComponent) {
    // ...
});

/**
 * `dist/index.js`
 * `dist/index.es.js`
 * npm installation
 */
import RadioComponent from "@riot-material/rm-radio";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/rm-radio/index.umd.js" />
<!-- or -->
<script src="@riot-material/rm-radio/index.umd+libs.js" />
```
and access it via
```js
window.riotMaterial.components.radio;
```
*Note: all the bundled file having `+libs` contain also the dependencies needed by the component, which, in this case, are:  
`@riot-material/ripple`  
Be sure to have them when installing manually or including via html*
## Properties
### `chcked` optional
### `disabled` optional
Any value will be result in the disabled state
### `label` optional
### `name` optional
## Methods
### `getName(): string|null`
### `isChecked(): boolean`
### `isDisabled(): boolean`