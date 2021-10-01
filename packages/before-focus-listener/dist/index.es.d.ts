declare const BEFORE_FOCUS_CONTROLLER_INSTANCE: unique symbol;
declare const WAS_FUNCTION: unique symbol;
type BeforeFocusEvent = CustomEvent<{
    nativeEvent: TouchEvent | MouseEvent;
}>;
type BeforeFocusEventHandle = (event: BeforeFocusEvent) => void;
type BeforeFocusEventHandler = {
    [WAS_FUNCTION]?: boolean;
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
declare global {
    interface HTMLElementEventMap {
        "beforefocus": TouchEvent | MouseEvent;
    }
    interface HTMLElement {
        [BEFORE_FOCUS_CONTROLLER_INSTANCE]?: IBeforeFocusController;
    }
}
declare function addListener(element: HTMLElement, handler: BeforeFocusEventHandle | BeforeFocusEventHandler): void;
declare function removeListener(element: HTMLElement, handler: BeforeFocusEventHandle | BeforeFocusEventHandler): void;
declare function polyfill(): void;
declare function restore(): void;
export { addListener, removeListener, polyfill, restore };
