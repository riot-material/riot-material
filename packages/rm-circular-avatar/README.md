# circular avatar component based on [Material Design](https://material.io/) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/rm-circular-avatar
```
or download one of the bundled file
```js
/**
 * `dist/index.js`
 */
requirejs.config({
  paths: {
      "@riot-material/rm-circular-avatar": "path/to/@riot-material/rm-circular-avatar",
   },
});

require(['@riot-material/rm-circular-avatar'], function (CircularAvatarComponent) {
    // ...
});

/**
 * `dist/index.es.js`
 * npm installation
 */
import CircularAvatarComponent from "@riot-material/rm-circular-avatar";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/rm-circular-avatar/index.js" />
```
and access it via
```js
window.riotMaterial.components.circularAvatar;
```
## Properties
### `src`