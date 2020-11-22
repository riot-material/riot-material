# app-bar utilities based on [Material Design](https://material.io/) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/before-focus-listener
```
or download one of the bundled file
```js
/* `dist/index.amd.js` or `dist/index.umd.js` */
requirejs.config({
  paths: {
    "@riot-material/before-focus-listener": "path/to/@riot-material/before-focus-listener",
  },
});

require(['@riot-material/before-focus-listener'], function (beforeFocusListener) {
    // ...
});

/* `dist/index.js` */
import * as beforeFocusListener from "@riot-material/before-focus-listener";

// or

import { ... } from "@riot-material/before-focus-listener";
```
otherwise you can include the script in your project html
```html
<script src="@riot-material/before-focus-listener/index.umd.js" />
```
and access it via
```js
window.riotMaterial.beforeFocusListener;
```
## Documentation
### addListener\<T>(element: HTMLElement, handler: (this: T, event: TouchEvent | MouseEvent) => void, context?: T): void
`element: HTMLElement`  
`handler: (this: T, event: TouchEvent | MouseEvent) => void`  
`context?: T`
### removeListener(element: HTMLElement, handler: (event: TouchEvent | MouseEvent) => void): void
`element: HTMLElement`  
`handler: (event: TouchEvent | MouseEvent) => void`  