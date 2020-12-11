# list container component based on [Material Design](https://material.io/components/selection-controls#list-itemes) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/rm-list
```
or download one of the bundled file
```js
/**
 * `dist/index.js`
 * `dist/index+libs.js`
 */
requirejs.config({
  paths: {
      "@riot-material/rm-list": "path/to/@riot-material/rm-list",
   },
});

require(['@riot-material/rm-list'], function (ListComponent) {
    // ...
});

/**
 * `dist/index.es.js`
 * npm installation
 */
import ListComponent from "@riot-material/rm-list";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/rm-list/index.js" />
<!-- or -->
<script src="@riot-material/rm-list/index+libs.js" />
```
and access it via
```js
window.riotMaterial.components.listItem;
```
*Note: all the bundled file having `+libs` contain also the dependencies needed by the component, which, in this case, are:  
`@riot-material/ripple`  
`tabbable`  
Be sure to have them when installing manually or including via html*
## Properties
### `keep-highlight` *optional*
### `prevent-focus` *optional*
### `prevent-highlight` *optional*
### `single-highlight` *optional*
## Slots
### `default`