# position controller for [riot-material](https://github.com/riot-material/riot-material)
## Installation
You can install it via nodejs
```sh
npm install @riot-material/position-controller
```
or download one of the bundled file
```js
/**
 * `dist/index.amd.js`
 * `dist/index.umd.js`
 */
requirejs.config({
    paths: {
        "@riot-material/position-controller": "path/to/@riot-material/position-controller",
    },
});

require(['@riot-material/position-controller'], function (positionController) {
    // ...
});

/**
 * `dist/index.js`
 */
import positionController from "@riot-material/position-controller";

// or

import { default as positionController } from "@riot-material/position-controller";
```
otherwise you can include the script in your project html
```html
<script src="@riot-material/position-controller/index.umd.js" />
```
and access it via
```js
window.riotMaterial.positionController;
```
## Methods
### `<default export>(element: HTMLElement): `[`IPositionController`](#ipositioncontroller)
## Interfaces
### `IPositionController`
`getPosition(): number`

`getSelectedIndex(): number`

`setSelectedIndex(index: number): `[`IPositionController`](#ipositioncontroller)

`getLength(): number`

`setLength(length: number): `[`IPositionController`](#ipositioncontroller)

`on(type, callback): `[`IPositionController`](#ipositioncontroller)  
- type: `"positionchanged" | "positionapplied"`  
- callback: `(event: `[`PositionChangedEvent`](#positionchangedevent)` | `[`PositionAppliedEvent`](#positionappliedevent)`) => void`

`off(type, callback): `[`IPositionController`](#ipositioncontroller)  
- type: `"positionchanged" | "positionapplied"`  
- callback: `(event: `[`PositionChangedEvent`](#positionchangedevent)` | `[`PositionAppliedEvent`](#positionappliedevent)`) => void`
## Types
### `PositionChangedEvent`
`detail: { position: number }`
### `PositionAppliedEvent`
`detail: { previousIndex: number, currentIndex: number }`