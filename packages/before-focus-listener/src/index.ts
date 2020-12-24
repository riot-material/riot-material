const BEFORE_FOCUS_CONTROLLER_INSTANCE: unique symbol = Symbol("before-focus-controller-instance");

const WAS_FUNCTION: unique symbol = Symbol("was-function");

type BeforeFocusEvent = CustomEvent<{ nativeEvent: TouchEvent | MouseEvent }>;
type BeforeFocusEventHandle = (event: BeforeFocusEvent) => void;
type BeforeFocusEventHandler = {
    [WAS_FUNCTION]?: boolean,
    handleEvent: BeforeFocusEventHandle;
};

interface IBeforeFocusController {
    _window_ontouchstart: (event: TouchEvent) => void;
    ontouchstart: (event: TouchEvent) => void;
    ontouchmove: (event: TouchEvent) => void;
    ontouchend: (event: TouchEvent) => void;
    ontouchcancel: (event: TouchEvent) => void;
    onmousedown: (event: MouseEvent) => void;
    listeners: BeforeFocusEventHandler[];
}

export function addListener(
    element: HTMLElement,
    handler: BeforeFocusEventHandle | BeforeFocusEventHandler
): void {
    if (handler === void 0) {
        throw new Error("invalid handler");
    }
    if (typeof handler === "function") {
        handler = {
            [WAS_FUNCTION]: true,
            handleEvent: handler
        };
    } else if (typeof handler !== "object" || !("handleEvent" in handler)){
        throw new Error("invalid handler");
    }
    let instance: IBeforeFocusController = element[BEFORE_FOCUS_CONTROLLER_INSTANCE];
    if (instance) {
        instance.listeners.push(handler);
        if (instance.listeners.length === 1) {
            window.addEventListener("touchstart", instance._window_ontouchstart);
        }
        return;
    }
    let touchShouldFire: boolean;
    let lastTouch: number | null = null;
    let ontouchstart: (event: TouchEvent) => void = event => {
        if (lastTouch == null || event.changedTouches[0].identifier === lastTouch) {
            return;
        }
        touchShouldFire = false;
    };
    window.addEventListener("touchstart", ontouchstart);

    function callListeners(event: MouseEvent | TouchEvent): void {
        let stop: boolean = false;
        let stopImmediate: boolean = false;
        let beforeFocusEvent: BeforeFocusEvent = new CustomEvent("beforefocus", {
            detail: {
                nativeEvent: event
            }
        });
        beforeFocusEvent.stopPropagation = function (): void {
            stop = true;
        };
        beforeFocusEvent.stopImmediatePropagation = function (): void {
            stopImmediate = true;
        };
        instance.listeners.some(handler => {
            if (handler[WAS_FUNCTION]) {
                handler.handleEvent.call(null, beforeFocusEvent);
            } else {
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

    let eventHandled: boolean = false;
    element[BEFORE_FOCUS_CONTROLLER_INSTANCE] = instance = {
        _window_ontouchstart: ontouchstart,
        ontouchstart(event: TouchEvent): void {
            if (instance.listeners.length === 0 || lastTouch != null) {
                return;
            }
            lastTouch = event.changedTouches[0].identifier;
            touchShouldFire = true;
        },
        ontouchmove(event: TouchEvent): void {
            if (instance.listeners.length === 0) {
                return;
            }
            touchShouldFire = false;
        },
        ontouchend(event: TouchEvent): void {
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
        ontouchcancel(event: TouchEvent): void {
            if (instance.listeners.length === 0) {
                return;
            }
            lastTouch = null;
            eventHandled = true;
            setTimeout(() => eventHandled = false, 200);
        },
        onmousedown(event: MouseEvent): void {
            if (instance.listeners.length === 0 || eventHandled) {
                return;
            }
            callListeners(event);
        },
        listeners: [ handler ]
    };
    element.addEventListener("touchstart", instance.ontouchstart);
    element.addEventListener("touchmove", instance.ontouchmove);
    element.addEventListener("touchend", instance.ontouchend);
    element.addEventListener("touchcancel", instance.ontouchcancel);
    element.addEventListener("mousedown", instance.onmousedown);
}
export function removeListener(
    element: HTMLElement,
    handler: BeforeFocusEventHandle | BeforeFocusEventHandler
): void {
    let instance: IBeforeFocusController = element[BEFORE_FOCUS_CONTROLLER_INSTANCE];
    if (!instance) {
        return;
    }
    let index: number = -1;
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

declare global {
    // tslint:disable-next-line: interface-name
    interface HTMLElementEventMap {
        "beforefocus": TouchEvent | MouseEvent;
    }
}

const nativeAddEventListener: typeof HTMLElement.prototype.addEventListener = HTMLElement.prototype.addEventListener;
HTMLElement.prototype.addEventListener = function <K extends keyof HTMLElementEventMap> (
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
): void {
    if (type === "beforefocus") {
        addListener(this, listener as any);
    } else {
        nativeAddEventListener.call(this, type, listener as any, options);
    }
};
const nativeRemoveEventListener: typeof HTMLElement.prototype.removeEventListener = HTMLElement.prototype.removeEventListener;
HTMLElement.prototype.removeEventListener = function <K extends keyof HTMLElementEventMap> (
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
): void {
    if (type === "beforefocus") {
        removeListener(this, listener as any);
    } else {
        nativeRemoveEventListener.call(this, type, listener as any, options);
    }
};