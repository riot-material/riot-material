# icon set of [Material Design](https://material.io/components/icons/) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/rm-icon
```
or download one of the bundled file
```js
/**
 * `dist/index.amd.js`
 * `dist/index.umd.js`
 */
requirejs.config({
  paths: {
      "@riot-material/rm-icon": "path/to/@riot-material/rm-icon",
   },
});

require(['@riot-material/rm-icon'], function (IconComponent) {
    // ...
});

/**
 * `dist/index.js`
 * `dist/index.es.js`
 * npm installation
 */
import IconComponent from "@riot-material/rm-icon";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/rm-icon/index.umd.js" />
```
and access it via
```js
window.riotMaterial.components.icon;
```
## Documentation
Just write inside the tag the name of the chosen icon

Check the available icons [here](https://jossef.github.io/material-design-icons-iconfont/)