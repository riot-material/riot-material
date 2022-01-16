var BEFORE_FOCUS_CONTROLLER_INSTANCE = Symbol("before-focus-controller-instance");
function addListener(element, handler, context) {
    if (handler === void 0) {
        throw new Error("invalid handler");
    }
    if (typeof handler === "function") {
        handler = {
            handleEvent: handler
        };
    }
    else if (typeof handler !== "object" || !("handleEvent" in handler)) {
        throw new Error("invalid handler");
    }
    var instance = element[BEFORE_FOCUS_CONTROLLER_INSTANCE];
    if (instance) {
        instance.listeners.push({
            handler: handler, context: context
        });
        if (instance.listeners.length === 1) {
            window.addEventListener("touchstart", instance._window_ontouchstart);
        }
        return;
    }
    var touchShouldFire;
    var lastTouch = null;
    var ontouchstart = function (event) {
        if (lastTouch == null || event.changedTouches[0].identifier === lastTouch) {
            return;
        }
        touchShouldFire = false;
    };
    window.addEventListener("touchstart", ontouchstart);
    function callListeners(event) {
        var stop = false;
        var stopImmediate = false;
        event.stopPropagation = function () {
            stop = true;
        };
        event.stopImmediatePropagation = function () {
            stopImmediate = true;
        };
        function restore() {
            delete event.stopPropagation;
            delete event.stopImmediatePropagation;
        }
        instance.listeners.some(function (_a) {
            var handler = _a.handler, context = _a.context;
            handler.handleEvent(event);
            if (stopImmediate) {
                restore();
                event.stopImmediatePropagation();
                return true;
            }
            if (stop) {
                restore();
                event.stopPropagation();
                return true;
            }
            return false;
        });
    }
    var eventHandled = false;
    element[BEFORE_FOCUS_CONTROLLER_INSTANCE] = instance = {
        _window_ontouchstart: ontouchstart,
        ontouchstart: function (event) {
            if (instance.listeners.length === 0 || lastTouch != null) {
                return;
            }
            lastTouch = event.changedTouches[0].identifier;
            touchShouldFire = true;
        },
        ontouchmove: function (event) {
            if (instance.listeners.length === 0) {
                return;
            }
            touchShouldFire = false;
        },
        ontouchend: function (event) {
            if (instance.listeners.length === 0) {
                return;
            }
            lastTouch = null;
            eventHandled = true;
            setTimeout(function () { return eventHandled = false; }, 200);
            if (!touchShouldFire) {
                return;
            }
            callListeners(event);
        },
        ontouchcancel: function (event) {
            if (instance.listeners.length === 0) {
                return;
            }
            lastTouch = null;
            eventHandled = true;
            setTimeout(function () { return eventHandled = false; }, 200);
        },
        onmousedown: function (event) {
            if (instance.listeners.length === 0 || eventHandled) {
                return;
            }
            callListeners(event);
        },
        listeners: [{ handler: handler, context: context }]
    };
    element.addEventListener("touchstart", instance.ontouchstart);
    element.addEventListener("touchmove", instance.ontouchmove);
    element.addEventListener("touchend", instance.ontouchend);
    element.addEventListener("touchcancel", instance.ontouchcancel);
    element.addEventListener("mousedown", instance.onmousedown);
}
function removeListener(element, handler) {
    var instance = element[BEFORE_FOCUS_CONTROLLER_INSTANCE];
    if (!instance) {
        return;
    }
    var index = -1;
    if (typeof handler === "function") {
        handler = { handleEvent: handler };
    }
    if (instance.listeners.some(function (listener, i) {
        if (listener.handler === handler || listener.handler.handleEvent === handler.handleEvent) {
            index = i;
            return true;
        }
        return false;
    })) {
        instance.listeners.splice(index, 1);
        if (instance.listeners.length === 0) {
            window.removeEventListener("touchstart", instance._window_ontouchstart);
        }
    }
}
var nativeAddEventListener = HTMLElement.prototype.addEventListener;
HTMLElement.prototype.addEventListener = function (type, listener, options) {
    if (type === "beforefocus") {
        addListener(this, listener);
    }
    else {
        nativeAddEventListener.call(this, type, listener, options);
    }
};
var nativeRemoveEventListener = HTMLElement.prototype.removeEventListener;
HTMLElement.prototype.removeEventListener = function (type, listener, options) {
    if (type === "beforefocus") {
        removeListener(this, listener);
    }
    else {
        nativeRemoveEventListener.call(this, type, listener, options);
    }
};

export { addListener, removeListener };
