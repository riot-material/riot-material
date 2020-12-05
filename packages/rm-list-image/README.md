# list image component based on [Material Design](https://material.io/) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/rm-list-image
```
or download one of the bundled file
```js
/**
 * `dist/index.js`
 */
requirejs.config({
  paths: {
      "@riot-material/rm-list-image": "path/to/@riot-material/rm-list-image",
   },
});

require(['@riot-material/rm-list-image'], function (ListImageComponent) {
    // ...
});

/**
 * `dist/index.es.js`
 * npm installation
 */
import ListImageComponent from "@riot-material/rm-list-image";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/rm-list-image/index.js" />
```
and access it via
```js
window.riotMaterial.components.listImage;
```
## Properties
### `src`
### `large` *optional*