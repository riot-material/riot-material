const BEFORE_FOCUS_CONTROLLER_INSTANCE: unique symbol = Symbol("before-focus-controller-instance");

interface IBeforeFocusController {
    _window_ontouchstart: (event: TouchEvent) => void;
    ontouchstart: (event: TouchEvent) => void;
    ontouchmove: (event: TouchEvent) => void;
    ontouchend: (event: TouchEvent) => void;
    ontouchcancel: (event: TouchEvent) => void;
    onmousedown: (event: MouseEvent) => void;
    listeners: {
        handler(event: TouchEvent | MouseEvent): void,
        context: any
    }[];
}

export function addListener(element: HTMLElement, handler: (event: TouchEvent | MouseEvent) => void, context?: any): void {
    if (handler === void 0 || typeof handler !== "function") {
        throw new Error("invalid handler");
    }
    let instance: IBeforeFocusController = element[BEFORE_FOCUS_CONTROLLER_INSTANCE];
    if (instance) {
        instance.listeners.push({
            handler, context
        });
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
        event.stopPropagation = function (): void {
            stop = true;
        };
        event.stopImmediatePropagation = function (): void {
            stopImmediate = true;
        };
        function restore(): void {
            // @ts-ignore
            delete event.stopPropagation;
            // @ts-ignore
            delete event.stopImmediatePropagation;
        }
        instance.listeners.some(({ handler, context }) => {
            handler.call(context, event);
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
        listeners: [ { handler, context } ]
    };
    element.addEventListener("touchstart", instance.ontouchstart);
    element.addEventListener("touchmove", instance.ontouchmove);
    element.addEventListener("touchend", instance.ontouchend);
    element.addEventListener("touchcancel", instance.ontouchcancel);
    element.addEventListener("mousedown", instance.onmousedown);
}
export function removeListener(element: HTMLElement, handler: (event: TouchEvent | MouseEvent) => void): void {
    let instance: IBeforeFocusController = element[BEFORE_FOCUS_CONTROLLER_INSTANCE];
    if (!instance) {
        return;
    }
    let index: number = -1;
    if (instance.listeners.some((listener, i) => {
        if (listener.handler === handler) {
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