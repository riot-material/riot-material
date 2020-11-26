# menu item component based on [Material Design](https://material.io/components/buttons/) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/rm-menu-item
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
      "@riot-material/rm-menu-item": "path/to/@riot-material/rm-menu-item",
   },
});

require(['@riot-material/rm-menu-item'], function (MenuItemComponent) {
    // ...
});

/**
 * `dist/index.js`
 * `dist/index.es.js`
 * npm installation
 */
import MenuItemComponent from "@riot-material/rm-menu-item";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/rm-menu-item/index.umd.js" />
<!-- or -->
<script src="@riot-material/rm-menu-item/index.umd+libs.js" />
```
and access it via
```js
window.riotMaterial.components.menuItem;
```
*Note: all the bundled file having `+libs` contain also the dependencies needed by the component, which, in this case, are:  
`@riot-material/ripple`  
Be sure to have them when installing manually or including via html*
## Properties
### `tabindex`
## Slots
### `default`