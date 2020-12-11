# floating surface component based on [Material Design](https://material.io) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/rm-floating-surface
```
or download one of the bundled file
```js
/**
 * `dist/index.js`
 * `dist/index+libs.js`
 */
requirejs.config({
  paths: {
      "@riot-material/rm-floating-surface": "path/to/@riot-material/rm-floating-surface",
   },
});

require(['@riot-material/rm-floating-surface'], function (FloatingSurfaceComponent) {
    // ...
});

/**
 * `dist/index.es.js`
 * npm installation
 */
import FloatingSurfaceComponent from "@riot-material/rm-floating-surface";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/rm-floating-surface/index.js" />
<!-- or -->
<script src="@riot-material/rm-floating-surface/index+libs.js" />
```
and access it via
```js
window.riotMaterial.components.floatingSurface;
```
*Note: all the bundled file having `+libs` contain also the dependencies needed by the component, which, in this case, are:  
`@riot-material/ripple`  
`tabbable`  
Be sure to have them when installing manually or including via html*
## Properties
### `inherit-width` *optional*
### `surface` *optional*
### `variant` *optional*
## Slots
### `default`