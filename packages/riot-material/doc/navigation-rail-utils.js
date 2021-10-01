(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.navigationRailUtils = {})));
}(this, (function (exports) { 'use strict';

    var width;
    function get_width() {
        var documentWidth = document.documentElement.clientWidth;
        return documentWidth > 720 ? 72 : 56;
    }
    function getWidth() {
        setup();
        return width;
    }
    function isDense() {
        return get_width() === 56;
    }
    var cachedShouldHide;
    function should_hide() {
        return document.documentElement.clientWidth <= 600;
    }
    function shouldHide() {
        setup();
        return cachedShouldHide;
    }
    var listeners = new Map();
    function callListeners(type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var typeListeners = listeners.get(type);
        if (typeListeners != null) {
            for (var i = 0; i < typeListeners.length;) {
                var actual = typeListeners[i];
                actual.listener.apply(actual.thisArg, args);
                if (actual.once) {
                    typeListeners.splice(i, 1);
                }
                else {
                    i++;
                }
            }
        }
    }
    var setupDone = false;
    function setup() {
        if (setupDone) {
            return;
        }
        window.addEventListener("resize", function () {
            var prevWidth = width;
            width = get_width();
            if (width !== prevWidth) {
                callListeners("change");
            }
            var prevShouldHide = cachedShouldHide;
            cachedShouldHide = should_hide();
            if (prevShouldHide !== cachedShouldHide) {
                callListeners("visibility");
            }
        });
        width = get_width();
        cachedShouldHide = should_hide();
        setupDone = true;
    }
    function on(type, listener, thisArg) {
        var hasType = listeners.has(type);
        var typeListeners = hasType ? listeners.get(type) : [];
        if (!hasType) {
            listeners.set(type, typeListeners);
        }
        typeListeners.push({
            listener: listener,
            thisArg: thisArg,
            once: false
        });
    }
    function once(type, listener, thisArg) {
        var hasType = listeners.has(type);
        var typeListeners = hasType ? listeners.get(type) : [];
        if (!hasType) {
            listeners.set(type, typeListeners);
        }
        typeListeners.push({
            listener: listener,
            thisArg: thisArg,
            once: false
        });
    }
    function off(type, listener, thisArg) {
        if (!listeners.has(type)) {
            return;
        }
        var typeListeners = listeners.get(type);
        typeListeners.push({
            listener: listener,
            thisArg: thisArg,
            once: false
        });
        var index = -1;
        if (typeListeners.some(function (l, i) {
            if (listener === l.listener &&
                thisArg === l.thisArg) {
                index = i;
                return true;
            }
            return false;
        })) {
            typeListeners.splice(index, 1);
            if (typeListeners.length === 0) {
                listeners.delete(type);
            }
        }
    }

    exports.getWidth = getWidth;
    exports.isDense = isDense;
    exports.off = off;
    exports.on = on;
    exports.once = once;
    exports.shouldHide = shouldHide;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
