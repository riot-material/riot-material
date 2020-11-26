# checkbox component based on [Material Design](https://material.io/components/selection-controls#checkboxes) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/ripple
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
      "@riot-material/ripple": "path/to/@riot-material/ripple",
   },
});

require(['@riot-material/ripple'], function (ripple) {
    // ...
});

/**
 * `dist/index.js`
 * `dist/index.es.js`
 * npm installation
 */
import * as ripple from "@riot-material/ripple";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/ripple/index.umd.js" />
<!-- or -->
<script src="@riot-material/ripple/index.umd+libs.js" />
```
and access it via
```js
window.riotMaterial.ripple;
```
*Note: all the bundled file having `+libs` contain also the dependencies needed by the component, which, in this case, are:  
`what-input`  
Be sure to have them when installing manually or including via html*
## Methods
### `ripple(element: HTMLElement, options?: `[`IRippleOptions`](#irippleoptions)`): `[`IRipple`](#iripple)
### `isRipple(element: HTMLElement): boolean`
## Types
### IRipple
`highlight(): Ripple`

`start(x: number | null, y: number | null, event?: PointerEvent | FocusEvent, type?: TYPE): Ripple`

`set(options: IRippleOptions): IRipple`

`getOption(option: string): any`
### IRippleOptions
`radius: number` *optional*

`centered: boolean` *optional*

`unbounded: boolean` *optional*

`disabled: boolean` *optional*

`highlight: boolean` *optional*

`instantHighlight: boolean` *optional*

`unboundedFocus: boolean` *optional*

`focusTarget: HTMLElement` *optional*

`color: string` *optional*

`detectLabel: boolean` *optional*

`usePointerFocus: boolean` *optional*

`stopRippling: boolean` *optional*