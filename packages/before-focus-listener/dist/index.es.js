const BEFORE_FOCUS_CONTROLLER_INSTANCE = Symbol("before-focus-controller-instance");
const WAS_FUNCTION = Symbol("was-function");
function addListener(element, handler) {
    if (handler === void 0) {
        throw new Error("invalid handler");
    }
    if (typeof handler === "function") {
        handler = {
            [WAS_FUNCTION]: true,
            handleEvent: handler
        };
    }
    else if (typeof handler !== "object" || !("handleEvent" in handler)) {
        throw new Error("invalid handler");
    }
    let instance = element[BEFORE_FOCUS_CONTROLLER_INSTANCE];
    if (instance) {
        instance.listeners.push(handler);
        if (instance.listeners.length === 1) {
            window.addEventListener("touchstart", instance._window_ontouchstart);
        }
        return;
    }
    let touchShouldFire;
    let lastTouch = null;
    let ontouchstart = event => {
        if (lastTouch == null || event.changedTouches[0].identifier === lastTouch) {
            return;
        }
        touchShouldFire = false;
    };
    window.addEventListener("touchstart", ontouchstart);
    function callListeners(event) {
        let stop = false;
        let stopImmediate = false;
        const beforeFocusEvent = {
            type: "beforefocus",
            detail: { nativeEvent: event },
            initEvent() { return; },
            initCustomEvent() { return; },
            get cancelable() { return false; },
            get bubbles() { return false; },
            get composed() { return false; },
            get defaultPrevented() { return event.defaultPrevented; },
            get currentTarget() { return event.currentTarget; },
            get eventPhase() { return Event.AT_TARGET; },
            get cancelBubble() { return false; },
            get returnValue() { return event.returnValue; },
            set returnValue(value) { event.returnValue = value; },
            get isTrusted() { return true; },
            get srcElement() { return this.currentTarget; },
            get target() { return this.currentTarget; },
            get timeStamp() { return event.timeStamp; },
            composedPath() { return []; },
            preventDefault() { event.preventDefault(); },
            NONE: Event.NONE,
            BUBBLING_PHASE: Event.BUBBLING_PHASE,
            CAPTURING_PHASE: Event.CAPTURING_PHASE,
            AT_TARGET: Event.AT_TARGET,
            stopPropagation() { stop = true; },
            stopImmediatePropagation() { stopImmediate = true; }
        };
        instance.listeners.some(handler => {
            if (handler[WAS_FUNCTION]) {
                handler.handleEvent.call(null, beforeFocusEvent);
            }
            else {
                handler.handleEvent(beforeFocusEvent);
            }
            if (stopImmediate) {
                event.stopImmediatePropagation();
                return true;
            }
            if (stop) {
                event.stopPropagation();
                return true;
            }
            return false;
        });
    }
    let eventHandled = false;
    element[BEFORE_FOCUS_CONTROLLER_INSTANCE] = instance = {
        _window_ontouchstart: ontouchstart,
        ontouchstart(event) {
            if (instance.listeners.length === 0 || lastTouch != null) {
                return;
            }
            lastTouch = event.changedTouches[0].identifier;
            touchShouldFire = true;
        },
        ontouchmove(event) {
            if (instance.listeners.length === 0) {
                return;
            }
            touchShouldFire = false;
        },
        ontouchend(event) {
            if (instance.listeners.length === 0) {
                return;
            }
            lastTouch = null;
            eventHandled = true;
            setTimeout(() => eventHandled = false, 200);
            if (!touchShouldFire) {
                return;
            }
            callListeners(event);
        },
        ontouchcancel(event) {
            if (instance.listeners.length === 0) {
                return;
            }
            lastTouch = null;
            eventHandled = true;
            setTimeout(() => eventHandled = false, 200);
        },
        onmousedown(event) {
            if (instance.listeners.length === 0 || eventHandled) {
                return;
            }
            callListeners(event);
        },
        listeners: [handler]
    };
    element.addEventListener("touchstart", instance.ontouchstart);
    element.addEventListener("touchmove", instance.ontouchmove);
    element.addEventListener("touchend", instance.ontouchend);
    element.addEventListener("touchcancel", instance.ontouchcancel);
    element.addEventListener("mousedown", instance.onmousedown);
}
function removeListener(element, handler) {
    let instance = element[BEFORE_FOCUS_CONTROLLER_INSTANCE];
    if (!instance) {
        return;
    }
    let index = -1;
    if (instance.listeners.some((listener, i) => {
        if (typeof handler === "function" ? listener.handleEvent === handler : listener === handler) {
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
let nativeAddEventListener = null;
let nativeRemoveEventListener = null;
function polyfill() {
    if (nativeAddEventListener !== null) {
        return;
    }
    nativeAddEventListener = HTMLElement.prototype.addEventListener;
    HTMLElement.prototype.addEventListener = function (type, listener, options) {
        if (type === "beforefocus") {
            addListener(this, listener);
        }
        else {
            nativeAddEventListener.call(this, type, listener, options);
        }
    };
    nativeRemoveEventListener = HTMLElement.prototype.removeEventListener;
    HTMLElement.prototype.removeEventListener = function (type, listener, options) {
        if (type === "beforefocus") {
            removeListener(this, listener);
        }
        else {
            nativeRemoveEventListener.call(this, type, listener, options);
        }
    };
}
function restore() {
    if (nativeAddEventListener === null) {
        return;
    }
    HTMLElement.prototype.addEventListener = nativeAddEventListener;
    nativeAddEventListener = null;
    HTMLElement.prototype.removeEventListener = nativeRemoveEventListener;
    nativeRemoveEventListener = null;
}

export { addListener, polyfill, removeListener, restore };
