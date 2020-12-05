# list group component based on [Material Design](https://material.io/) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/rm-list-group
```
or download one of the bundled file
```js
/**
 * `dist/index.js`
 */
requirejs.config({
  paths: {
      "@riot-material/rm-list-group": "path/to/@riot-material/rm-list-group",
   },
});

require(['@riot-material/rm-list-group'], function (ListGroupComponent) {
    // ...
});

/**
 * `dist/index.es.js`
 * npm installation
 */
import ListGroupComponent from "@riot-material/rm-list-group";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/rm-list-group/index.js" />
```
and access it via
```js
window.riotMaterial.components.listGroup;
```
## Properties
### `label`
## Slots
### `default`