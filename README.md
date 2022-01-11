<img src="https://raw.githubusercontent.com/riot-material/riot-material/master/logo.svg" width="125">

# [Riot.js](https://riot.js.org/) implementation of [Material Design](https://material.io/)
## Installation
You can install it via nodejs
```sh
npm install riot-material
```
or download one of the bundled file
```js
/**
 * `dist/index.js`
 * `dist/index.min.js`
 * `dist/index+libs.js`
 * `dist/index+libs.min.js`
 */
requirejs.config({
  paths: {
      // "what-input": "path/to/what-input // if you do not use +libs bundle
      "riot-material": "path/to/riot-material",
   },
});

require(['riot-material'], function (riotMaterial) {
    // ...
});

/**
 * `dist/index.es.js`
 * npm installation
 */
import * as riotMaterial from "riot-material";
```
otherwise you can include the script in your project html
```html
<!-- if you want to use the what-input library elsewhere -->
<script src="path/to/what-input.umd.js"></script>
<script src="riot-material/index.js"></script>
<!-- <script src="riot-material/index.min.js"></script> -->

<!-- or, if you want to use only riotMaterial -->
<script src="riot-material/index+libs.js"></script>
<!-- <script src="riot-material/index+libs.min.js"></script> -->
```
and access it via
```js
window.riotMaterial;
```
*Note: "riot" dependency is treated as external, be sure to have it when installing manually or including via html*
## Documentation
Importing this package will occur in `register`ing all the components globally in riot

Refer to each sub-package documentation:
- `components.appBar` **rm-app-bar** tag - *Not yet available*
- [`components.button` **rm-button** tag](packages/rm-button/README.md)
- [`components.checkbox` **rm-checkbox** tag](packages/rm-checkbox/README.md)
- [`components.dialog` **rm-dialog** tag](packages/rm-dialog/README.md)
- `components.divider` **rm-divider** tag - *Not yet available*
- [`components.icon` **rm-icon** tag](packages/rm-icon/README.md)
- [`components.listItem` **rm-list-item** tag](packages/rm-list-item/README.md)
- [`components.menuItem` **rm-menu-item** tag](packages/rm-menu-item/README.md)
- [`components.menu` **rm-menu** tag](packages/rm-menu/README.md)
- [`components.radio` **rm-radio** tag](packages/rm-radio/README.md)
- [`components.select` **rm-select** tag](packages/rm-select/README.md)
- [`components.tabbedPages` **rm-tabbed-pages** tag](packages/rm-tabbed-pages/README.md)
- [`components.textfieldContainer` **rm-textfield-container** tag](packages/rm-textfield-container/README.md)
- [`components.textfield` **rm-textfield** tag](packages/rm-textfield/README.md)
- [`components.visibilityTrigger` **rm-visibility-trigger** tag](packages/rm-visibility-trigger/README.md)
<!--  -->
- [`appBarUtils` **app-bar-utils** sub-package](packages/app-bar-utils/README.md)
- `background` **background** sub-package - *Not yet available*
- `elevation` **elevation** sub-package - *Not yet available*
- [`positionController` **position-controller** sub-package](packages/position-controller/README.md)
- `beforeFocusListener` **before-focus-listener** sub-package - *Not yet available*
- [`ripple` **ripple** sub-package](packages/ripple/README.md)
- `surfaces` **surfaces** sub-package - *Not yet available*