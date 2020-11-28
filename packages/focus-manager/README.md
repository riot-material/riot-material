# focus manager for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/focus-manager
```
or download one of the bundled file
```js
/**
 * `dist/index.amd.js`
 * `dist/index.umd.js`
 */
requirejs.config({
  paths: {
    "@riot-material/focus-manager": "path/to/@riot-material/focus-manager",
  },
});

require(['@riot-material/focus-manager'], function (focusManager) {
    // ...
});

/**
 * `dist/index.js`
 */
import * as focusManager from "@riot-material/focus-manager";

// or

import { ... } from "@riot-material/focus-manager";
```
otherwise you can include the script in your project html
```html
<script src="@riot-material/focus-manager/index.umd.js" />
```
and access it via
```js
window.riotMaterial.focusManager;
```
## Methods
### `hold(options?: `[`IOptions`](#ioptions)`): void`
### `release(): void`
## Interfaces
### `IOptions`
`element?: HTMLElement`
`onFocusInside?: (element: Element) => boolean`
if returns `true` the focus is kept to the element and hold back when it blurs away
`onFocusOutside?: (element: Element) => boolean`
if returns `true` the focus-manager is `release`d
`onPrevious?: () => void`
`onNext?: () => void`