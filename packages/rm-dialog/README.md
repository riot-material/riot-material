# dialog component based on [Material Design](https://material.io/components/dialogs/) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/rm-button
```
or download one of the bundled file
```js
/**
 * `dist/index.js`
 */
requirejs.config({
  paths: {
      "@riot-material/rm-dialog": "path/to/@riot-material/rm-dialog",
   },
});

require(['@riot-material/rm-dialog'], function (DialogComponent) {
    // ...
});

/**
 * `dist/index.es.js`,
 * npm installation
 */
import DialogComponent from "@riot-material/rm-dialog";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/rm-dialog/index.js" />
```
and access it via
```js
window.riotMaterial.components.dialog;
```
## Properties
## Methods
### `open`
### `close`
## Slots
### `title`
### `content`
### `actions`