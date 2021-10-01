interface IOptions {
    element?: HTMLElement;
    onFocusInside?: (element: Element) => boolean;
    onFocusOutside?: (element: Element) => boolean;
    onPrevious?: () => void;
    onNext?: () => void;
}
declare function hold(options?: IOptions): void;
declare function release(): void;
interface IManageableEvent {
    "keydown": KeyboardEvent;
    "keyup": KeyboardEvent;
}
declare function on<T extends keyof IManageableEvent>(type: T, listener: (event: HTMLElementEventMap[T]) => void): void;
export { IOptions, hold, release, IManageableEvent, on };
