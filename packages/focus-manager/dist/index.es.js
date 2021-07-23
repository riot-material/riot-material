/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var currentOptions = {};
var container = null;
var actual = null;
var keydownListeners = [];
var keyupListeners = [];
function getElements() {
    if (container !== null) {
        return {
            container: container,
            actual: actual
        };
    }
    container = document.createElement("div");
    var previous = container.appendChild(document.createElement("span"));
    actual = container.appendChild(document.createElement("span"));
    var next = container.appendChild(document.createElement("span"));
    container.style.position = "fixed";
    container.style.top =
        container.style.left =
            container.style.width =
                container.style.height = "0";
    previous.tabIndex =
        actual.tabIndex =
            next.tabIndex = 0;
    previous.style.outline =
        actual.style.outline =
            next.style.outline = "none";
    actual.addEventListener("blur", function onActualBlur(event) {
        setTimeout(function () {
            var element = document.activeElement;
            switch (element) {
                case previous: {
                    if (currentOptions.onPrevious) {
                        currentOptions.onPrevious();
                    }
                    break;
                }
                case next: {
                    if (currentOptions.onNext) {
                        currentOptions.onNext();
                    }
                    break;
                }
                default: {
                    var mainElement = currentOptions.element;
                    var parent_1 = element;
                    if (mainElement != null) {
                        while (parent_1 && parent_1 !== mainElement) {
                            parent_1 = parent_1.parentElement;
                        }
                    }
                    if (parent_1 != null) {
                        if (currentOptions.onFocusInside && currentOptions.onFocusInside(element)) {
                            container.removeChild(previous);
                            element.insertAdjacentElement("beforebegin", previous);
                            container.removeChild(next);
                            element.insertAdjacentElement("afterend", next);
                            element.addEventListener("blur", function onElementBlur(event) {
                                previous.parentElement.removeChild(previous);
                                actual.insertAdjacentElement("beforebegin", previous);
                                next.parentElement.removeChild(next);
                                actual.insertAdjacentElement("afterend", next);
                                element.removeEventListener("blur", onElementBlur);
                                onActualBlur.call(null, event);
                            });
                            return;
                        }
                    }
                    else {
                        if (currentOptions.onFocusOutside && currentOptions.onFocusOutside(element)) {
                            release();
                            return;
                        }
                    }
                }
            }
            actual.focus();
        });
    });
    actual.addEventListener("keydown", function onActualKeydown(event) {
        var _this = this;
        keydownListeners.forEach(function (listener) { return listener.call(_this, event); });
    });
    actual.addEventListener("keyup", function onActualKeyup(event) {
        var _this = this;
        keyupListeners.forEach(function (listener) { return listener.call(_this, event); });
    });
    return {
        container: container,
        actual: actual
    };
}
function hold(options) {
    currentOptions = __assign({ element: document.body }, options);
    var _a = getElements(), container = _a.container, actual = _a.actual;
    document.body.appendChild(container);
    actual.focus();
}
function release() {
    var container = getElements().container;
    if (!container.isConnected) {
        return;
    }
    keydownListeners = [];
    keyupListeners = [];
    currentOptions = {};
    document.body.removeChild(container);
}
function on(type, listener) {
    if (!getElements().container.isConnected) {
        return;
    }
    switch (type) {
        case "keydown": {
            keydownListeners.push(listener);
            break;
        }
        case "keyup": {
            keyupListeners.push(listener);
            break;
        }
    }
}

export { hold, on, release };
