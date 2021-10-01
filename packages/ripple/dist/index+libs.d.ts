declare const RIPPLE: unique symbol;
declare const RIPPLE_COUNT: unique symbol;
declare const RIPPLE_OPTIONS: unique symbol;
declare global {
    interface HTMLElement {
        [RIPPLE]?: IRipple;
    }
}
interface IRippleOptions {
    radius?: number;
    centered?: boolean;
    unbounded?: boolean;
    disabled?: boolean;
    highlight?: boolean;
    instantHighlight?: boolean;
    unboundedFocus?: boolean;
    focusTarget?: HTMLElement;
    color?: string;
    detectLabel?: boolean;
    usePointerFocus?: boolean;
    stopRippling?: boolean;
    [key: string]: any;
}
declare enum TYPE {
    NORMAL = 0,
    QUICK = 1,
    INSTANT = 2
}
interface IRipple {
    highlight(): Ripple;
    start(x: number | null, y: number | null, event?: PointerEvent | FocusEvent, type?: TYPE): Ripple;
    set(options: IRippleOptions): IRipple;
    getOption(option: string): any;
    [RIPPLE_OPTIONS]: IRippleOptions;
    [RIPPLE_COUNT]: number;
}
declare function init(): () => void;
declare class Ripple {
    private _div;
    private _computedStyle;
    private _ended;
    private _onEnd;
    constructor(x: number, y: number, r: number | null, type?: TYPE);
    private _frame;
    private _scaleUp;
    attachTo(element: HTMLElement, onEnd?: () => void): Ripple;
    end(): Ripple;
}
declare function ripple(element: HTMLElement, options?: IRippleOptions): IRipple;
declare function isRipple(element: HTMLElement): boolean;
export { IRippleOptions, TYPE, IRipple, init, ripple, isRipple };
