# visibility trigger utility
## Installation
You can install it via nodejs
```sh
npm install @riot-material/rm-visibility-trigger
```
or download one of the bundled file
```js
/**
 * `dist/index.js`
 */
requirejs.config({
  paths: {
      "@riot-material/rm-visibility-trigger": "path/to/@riot-material/rm-visibility-trigger",
   },
});

require(['@riot-material/rm-visibility-trigger'], function (RmVisibilityTrigger) {
    // ...
});

/**
 * `dist/index.es.js`
 * npm installation
 */
import RmVisibilityTrigger from "@riot-material/rm-visibility-trigger";

```
otherwise you can include the script in your project html
```html
<script src="@riot-material/rm-visibility-trigger/index.js"></script>
<!-- or -->
<script src="@riot-material/rm-visibility-trigger/index+libs.js"></script>
```
and access it via
```js
window.riotMaterial.components.visibilityTrigger;
```
## Events
### `visible`
### `hidden`