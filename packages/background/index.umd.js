(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.background = {})));
}(this, (function (exports) { 'use strict';

	var style = document.createElement("style");
	style.innerHTML = "\n.rm-background {\n    background: rgb(245, 245, 245);\n    background: rgb(var(--color-background, 245, 245, 245));\n    color: rgb(0, 0, 0);\n    color: rgb(var(--color-on-background, 0, 0, 0));\n}\n";
	document.head.appendChild(style);
	var background = "rm-background";

	exports.background = background;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
