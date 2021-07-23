define(['exports'], function (exports) { 'use strict';

    var innerHTML = "\n.rm-black-surface {\n    background: rgb(0, 0, 0);\n    background: rgb(var(--color-black-surface, 0, 0, 0));\n    color: rgb(255, 255, 255);\n    color: rgb(var(--color-on-black, 255, 255, 255));\n}\n.rm-dark-surface {\n    background: rgb(10, 10, 10);\n    background: rgb(var(--color-dark-surface, 10, 10, 10));\n    color: rgb(255, 255, 255);\n    color: rgb(var(--color-on-dark, 255, 255, 255));\n}\n.rm-light-surface {\n    background: rgb(250, 250, 250);\n    background: rgb(var(--color-light-surface, 250, 250, 250));\n    color: rgb(0, 0, 0);\n    color: rgb(var(--color-on-light, 0, 0, 0));\n}\n.rm-white-surface {\n    background: rgb(255, 255, 255);\n    background: rgb(var(--color-white-surface, 255, 255, 255));\n    color: rgb(0, 0, 0);\n    color: rgb(var(--color-on-white, 0, 0, 0));\n}\n";
    var destroyer = null;
    function init() {
        if (destroyer != null) {
            return destroyer;
        }
        var style = document.head.appendChild(document.createElement("style"));
        style.innerHTML = innerHTML;
        return destroyer = function () {
            document.head.removeChild(style);
            destroyer = null;
        };
    }
    var black = "rm-black-surface";
    var dark = "rm-dark-surface";
    var light = "rm-light-surface";
    var white = "rm-white-surface";

    exports.black = black;
    exports.dark = dark;
    exports.init = init;
    exports.light = light;
    exports.white = white;

    Object.defineProperty(exports, '__esModule', { value: true });

});
