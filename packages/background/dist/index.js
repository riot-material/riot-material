(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.background = {})));
})(this, (function (exports) { 'use strict';

    const cssName = "rm-background";
    function init() {
        let style = document.createElement("style");
        style.innerHTML = `` +
            `.${cssName} {` +
            `background: rgb(245, 245, 245);` +
            `background: rgb(var(--color-background, 245, 245, 245));` +
            `color: rgb(0, 0, 0);` +
            `color: rgb(var(--color-on-background, 0, 0, 0));` +
            `}`;
        document.head.appendChild(style);
    }

    exports.cssName = cssName;
    exports.init = init;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
