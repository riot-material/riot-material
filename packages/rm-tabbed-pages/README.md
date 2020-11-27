# tabbed pages component based on [Material Design](https://material.io/components/buttons/) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/rm-tabbed-pages
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
      "@riot-material/rm-tabbed-pages": "path/to/@riot-material/rm-tabbed-pages",
   },
});

require(['@riot-material/rm-tabbed-pages'], function (TabbedPagesComponent) {
    // ...
});

/**
 * `dist/index.js`
 * `dist/index.es.js`
 * npm installation
 */
import TabbedPagesComponent from "@riot-material/rm-tabbed-pages";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/rm-tabbed-pages/index.umd.js" />
<!-- or -->
<script src="@riot-material/rm-tabbed-pages/index.umd+libs.js" />
```
and access it via
```js
window.riotMaterial.components.tabbedPages;
```
*Note: all the bundled file having `+libs` contain also the dependencies needed by the component, which, in this case, are:  
`@riot-material/position-controller`  
`@riot-material/ripple`  
Be sure to have them when installing manually or including via html*
## Properties
### `selected-index` *optional*
## Methods
### `getLength(): number`
### `getPosition(): number`
### `getSelectedIndex(): number`
### `setSelectedIndex(index: number)`
## Slots
### `<tab-name>`
Every slot is a tab named as the slot and with the slot innerHTML as content.  
It is hidden if the slot "if" binding evaluates to false