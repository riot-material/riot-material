# button component based on [Material Design](https://material.io/components/buttons/) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/rm-button
```
or download one of the bundled file
```js
/**
 * `dist/index.amd.js`,
 * `dist/index.amd+libs.js`
 * `dist/index.umd.js`,
 * `dist/index.umd+libs.js`
 */
requirejs.config({
  paths: {
      "@riot-material/rm-button": "path/to/@riot-material/rm-button",
   },
});

require(['@riot-material/rm-button'], function (ButtonComponent) {
    // ...
});

/**
 * `dist/index.js`,
 * `dist/index.es.js`,
 * npm installation
 */
import ButtonComponent from "@riot-material/rm-button";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/rm-button/index.umd.js" />
<!-- or -->
<script src="@riot-material/rm-button/index.umd+libs.js" />
```
and access it via
```js
window.riotMaterial.components.button;
```
*Note: all the bundled file having `+libs` contain also the dependencies needed by the component, which, in this case, are:  
`@riot-material/before-focus-listener`  
`@riot-material/ripple`  
`@riot-material/rm-icon`  
`riot`  
Be sure to have them when installing manually or including via html*
## Properties
### `variant` (default: `flat`)
Possible values:  
- `flat`  
- `unelevated`  
- `raised`  
- `outlined`  
- `icon`
### `disabled` optional
Any value will be result in the disabled state
### `open-overlay` optional
The value should be a css selector for an overlay  
*Actually any element connected to a riot component with a `open` method will work*
### `ripple-*` optional
Any attribute starting with "ripple-" will be passed to the ripple options
*Note: `detectLabel` will be always `false` and `disabled` will be always matching the disabled state of the button
## Methods
### isDisabled(): boolean
### isFlat(): boolean
### isIcon(): boolean
### isOutlined(): boolean
### isRaised(): boolean
### isUnelevated(): boolean
### setDisabled(disabled: boolean): void