# app-bar utilities based on [Material Design](https://material.io/) for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/app-bar-utils
```
or download one of the bundled file
```js
/* `dist/index.amd.js` or `dist/index.umd.js` */
requirejs.config({
  paths: {
    "@riot-material/app-bar-utils": "path/to/@riot-material/app-bar-utils",
  },
});

require(['@riot-material/app-bar-utils'], function (appBarUtils) {
    // ...
});

/* `dist/index.js` */
import * as appBarUtils from "@riot-material/app-bar-utils";

// or

import { ... } from "@riot-material/app-bar-utils";
```
otherwise you can include the script in your project html
```html
<script src="@riot-material/app-bar-utils/index.umd.js" />
```
and access it via
```js
window.riotMaterial.appBarUtils;
```
## Documentation
### getHeight(): number
returns `number`: the height of the app-bar

*Note: it internally calls [setup](#setup)*
### offChange<T>(listener: (this: T) => void, thisArg?: T): void
removes the listener

`listener: (this: T) => void` the listener to call when change in height happens  
`thisArg: T` the this argument to pass to the listener when called
### onceChange<T>(listener: (this: T) => void, thisArg?: T): void
adds a listener that will be called once when the height of the app bar changes

`listener: (this: T) => void` the listener to call when change in height happens  
`thisArg: T` the this argument to pass to the listener when called
### onChange<T>(listener: (this: T) => void, thisArg?: T): void
adds a listener that will be called when the height of the app bar changes

`listener: (this: T) => void` the listener to call when change in height happens  
`thisArg: T` the this argument to pass to the listener when called
### setup()
*Note: internally called by [getHeight](#getheight-number)*