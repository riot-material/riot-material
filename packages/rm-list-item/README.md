# list item component based on [Material Design](https://material.io/components/selection-controls#list-itemes) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/rm-list-item
```
or download one of the bundled file
```js
/**
 * `dist/index.js`
 * `dist/index+libs.js`
 */
requirejs.config({
  paths: {
      "@riot-material/rm-list-item": "path/to/@riot-material/rm-list-item",
   },
});

require(['@riot-material/rm-list-item'], function (ListItemComponent) {
    // ...
});

/**
 * `dist/index.es.js`
 * npm installation
 */
import ListItemComponent from "@riot-material/rm-list-item";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/rm-list-item/index.js" />
<!-- or -->
<script src="@riot-material/rm-list-item/index+libs.js" />
```
and access it via
```js
window.riotMaterial.components.listItem;
```
*Note: all the bundled file having `+libs` contain also the dependencies needed by the component, which, in this case, are:  
`@riot-material/ripple`  
Be sure to have them when installing manually or including via html*
## Properties
<!-- ### `disabled` -->
### `label` *optional*
### `passive` *optional*
### `value` *optional*
## Slots
### `default`
### `leading`
### `trailing`