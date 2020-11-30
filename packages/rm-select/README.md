# select component based on [Material Design](https://material.io/components/selection-controls#selectes) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/rm-select
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
      "@riot-material/rm-select": "path/to/@riot-material/rm-select",
   },
});

require(['@riot-material/rm-select'], function (SelectComponent) {
    // ...
});

/**
 * `dist/index.js`
 * `dist/index.es.js`
 * npm installation
 */
import SelectComponent from "@riot-material/rm-select";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/rm-select/index.umd.js" />
<!-- or -->
<script src="@riot-material/rm-select/index.umd+libs.js" />
```
and access it via
```js
window.riotMaterial.components.select;
```
*Note: all the bundled file having `+libs` contain also the dependencies needed by the component, which, in this case, are:  
`@riot-material/before-focus-listener`  
`@riot-material/ripple`  
`@riot-material/rm-button`  
`@riot-material/rm-menu`  
`@riot-material/rm-textfield-container`  
Be sure to have them when installing manually or including via html*