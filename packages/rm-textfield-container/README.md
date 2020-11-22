# textfield container component based on [Material Design](https://material.io/components/text-fields) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/rm-textfield-container
```
or download one of the bundled file
```js
/**
 * `dist/index.amd.js`,
 * `dist/index.umd.js`
 */
requirejs.config({
  paths: {
      "@riot-material/rm-textfield-container": "path/to/@riot-material/rm-textfield-container",
   },
});

require(['@riot-material/rm-textfield-container'], function (TextfieldContainerComponent) {
    // ...
});

/**
 * `dist/index.js`,
 * `dist/index.es.js`,
 * npm installation
 */
import TextfieldContainerComponent from "@riot-material/rm-textfield-container";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/rm-textfield-container/index.umd.js" />
```
and access it via
```js
window.riotMaterial.components.textfieldContainer;
```
## Properties
### `disabled` *optional*
Any value will be result in the disabled state
### `helper-text` *optional*
### `label` *optional*
### `variant` *optional* (default: `flat`)
Possible values:  
- `flat`  
- `filled`  
- `outlined`
## Slots
### `default` or `input`
Will be mounted inside the textfield container
### `leading`
Will be mounted before the `default` or `input` slot
### `trailing`
Will be mounted after the `default` or `input` slot