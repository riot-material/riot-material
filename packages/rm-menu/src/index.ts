
import elevation from "@riot-material/elevation";
import { ripple, isRipple } from "@riot-material/ripple";
import * as focusManager from "@riot-material/focus-manager";
import { RiotComponent } from "riot";

function getMenuStyleAt(time: number, anchor: "top" | "bottom"): {
    opacity: number,
    transform: string
} {
    // time = 0 : closed
    // time = 1 : opened
    time = parseFloat(time as any);
    if (isNaN(time)) {
        time = 0;
    }
    return {
        opacity: time,
        transform: "translateY(" + (({
            "top": -100,
            "bottom": 100
        }[anchor] || -100) * (1 - time)) + "%) scale(" + (0.8 + (0.2 * time)) + ")"
    };
}

interface IComponent {
    _onkeydown: null | ((event: KeyboardEvent) => void);
    _lastOpenedProp: any;
    _anchorElement: null | HTMLElement;
    _closeThis: null | (() => void);
    _direction: number;
    _mounted: boolean;
    _time: number;
    _realParent: HTMLElement | null;
    _canHighlight: Map<HTMLElement, HTMLElement>;
    _currentHighlighted: any;
    _lastHighlighted: HTMLElement | null;
    _lastHighlightedBeforeUpdate: HTMLElement | null;
    _bindedElement: HTMLElement | null;
    _bindTo(this: ComponentEnhanced, element: HTMLElement | null): void;
    _onmousedown(this: ComponentEnhanced, event: Event): void;
    _clean(this: ComponentEnhanced): void;
    _setup(this: ComponentEnhanced): void;
    _clearHighlight(this: ComponentEnhanced): void;
    _setHighlighted(this: ComponentEnhanced, event: Event): void;
    _handleHighlightOnLeave(this: ComponentEnhanced): void;
    _handleClick(this: ComponentEnhanced, event: MouseEvent): void;
    _selectHighlighted(this: ComponentEnhanced, programmatical?: boolean): void;
    _scrollToHighlighted(this: ComponentEnhanced): void;
    _getOptions(this: ComponentEnhanced): Array<HTMLElement>;
    isOpened(this: ComponentEnhanced): boolean;
    onBeforeMount(this: ComponentEnhanced): void;
    onMounted(this: ComponentEnhanced): void;
    onBeforeUpdate(this: ComponentEnhanced): void;
    onUpdated(this: ComponentEnhanced): void;
    onUnmounted(this: ComponentEnhanced): void;
    open(this: ComponentEnhanced): void;
    close(this: ComponentEnhanced): void;
    highlightNext(this: ComponentEnhanced): void;
    highlightPrevious(this: ComponentEnhanced): void;
    setAnchorElement(this: ComponentEnhanced, element: HTMLElement | null): void;
    getAnchorElement(this: ComponentEnhanced): HTMLElement | null;
    getPreventFocus(this: ComponentEnhanced): boolean;
    getPreventAutoClose(this: ComponentEnhanced): boolean;
    getKeepHighlight(this: ComponentEnhanced): boolean;
    getInheritWidth(this: ComponentEnhanced): boolean;
}

type ComponentEnhanced = RiotComponent<{
    inheritWidth: any,
    preventFocus: any,
    preventAutoClose: any,
    keepHighlight: any,
    opened: boolean
}> & IComponent;

function getRippleElement(element: HTMLElement, container: HTMLElement): HTMLElement | null {
    let rippleElement: HTMLElement | null = null;
    while (element && element !== container) {
        if (isRipple(element)) {
            rippleElement = element;
            break;
        }
        element = element.parentElement as HTMLElement;
    }
    return rippleElement;
}

const Component: IComponent = {
    _onkeydown: null,
    _lastOpenedProp: null,
    _anchorElement: null as HTMLElement|null,
    _closeThis: null,
    _direction: 0,
    _mounted: false,
    _time: 0,
    _realParent: null,
    // @ts-ignore
    _canHighlight: null,
    _currentHighlighted: null,
    _lastHighlighted: null,
    onBeforeMount(): void {
        this._closeThis = this.close.bind(this);
        this._canHighlight = new Map<HTMLElement, HTMLElement>();
    },
    onMounted(): void {
        this._mounted = true;
        menuAnimationFrame.call(this);

        [
            "_bindTo",
            "close",
            "getAnchorElement",
            "isOpened",
            "open",
            "setAnchorElement"
        ].forEach(method => {
            this.root[method] = this[method].bind(this);
        });
        Object.defineProperties(this.root, {
            "options": {
                get: () => {
                    return this._getOptions();
                }
            }
        });

        this._onkeydown = event => {
            if (!this.isOpened()) {
                return;
            }
            switch (event.key) {
                case "ArrowDown": {
                    return this.highlightNext();
                }
                case "ArrowUp": {
                    return this.highlightPrevious();
                }
                case "Enter": {
                    this._selectHighlighted(true);
                    event.preventDefault();
                    return;
                }
                case "Escape": {
                    if (!this.getPreventAutoClose()) {
                        this.close();
                    } else {
                        // tslint:disable-next-line:typedef
                        const wantsCloseEvent = new CustomEvent("wantsclose", {
                            detail: { source: "Escape" },
                            cancelable: true
                        });
                        this.root.dispatchEvent(wantsCloseEvent);
                        if (wantsCloseEvent.defaultPrevented) {
                            this.close();
                        }
                    }
                    return;
                }
            }
        };
        this._lastOpenedProp = this.props.opened;
        if (this.props.opened != null && this.props.opened !== false) {
            this.open();
        }
    },
    _lastHighlightedBeforeUpdate: null,
    onBeforeUpdate(): void {
        const lastHighlighted: HTMLElement | null = this._lastHighlighted;
        this._clean();
        this._lastHighlightedBeforeUpdate = lastHighlighted;
    },
    onUpdated(): void {
        this._setup();
        this._lastHighlightedBeforeUpdate = null;
        if (this.props.opened !== this._lastOpenedProp) {
            if ((this._lastOpenedProp = this.props.opened) != null && this.props.opened !== false) {
                this.open();
            } else {
                this.close();
            }
        }
    },
    onUnmounted(): void {
        this._mounted = false;
    },
    _scrollToHighlighted(): void {
        if (!this._lastHighlighted) {
            return;
        }
        const container: HTMLElement = this.root.firstElementChild!.firstElementChild as HTMLElement;
        const containerRect: DOMRect = container.getBoundingClientRect();
        const highlightRect: DOMRect = this._lastHighlighted.getBoundingClientRect();

        const highlightTop: number = highlightRect.top - containerRect.top;
        const highlightBottom: number = highlightRect.bottom - containerRect.top;
        if (highlightTop < 0) {
            container.scrollBy(0, highlightTop);
        } else if (highlightBottom > containerRect.height) {
            container.scrollBy(0, highlightBottom - containerRect.height);
        }
    },
    _selectHighlighted(programmatical: boolean = false): void {
        if (!this._lastHighlighted) {
            return;
        }
        const option: HTMLElement = this._canHighlight.get(this._lastHighlighted)!;
        if (programmatical) {
            ripple(this._lastHighlighted).start().end();
            option.click();
        } else {
            option.dispatchEvent(new CustomEvent("selected", {
                detail: {
                    value: option.getAttribute("value")
                },
                bubbles: true, cancelable: false
            }));
        }
    },
    _handleClick(event: MouseEvent): void {
        if (
            !this._lastHighlighted ||
            (this._lastHighlighted !== event.target && !this._lastHighlighted.contains(event.target as HTMLElement))
         ) {
            return;
        }
        this._selectHighlighted();
    },
    _onmousedown(event: Event): void {
        if (this.getPreventFocus()) {
            event.preventDefault();
        }
    },
    _bindedElement: null,
    _bindTo(element: HTMLElement | null): void {
        if (this._bindedElement === element) {
            return;
        }
        if (this._bindedElement) {
            this._bindedElement.removeEventListener("keydown", this._onkeydown!);
            this._bindedElement = null;
        }
        if (element && element instanceof HTMLElement) {
            this.setAnchorElement(this._bindedElement = element);
            this._bindedElement.addEventListener("keydown", this._onkeydown!);
        } else {
            this.setAnchorElement(null);
        }
    },
    _getOptions(): Array<HTMLElement> {
        const options: Array<HTMLElement> = [];
        const container: HTMLElement = this.root.firstElementChild!.firstElementChild as HTMLElement;
        this.root.querySelectorAll<HTMLElement>("[menu-option]").forEach(option => {
            if (getRippleElement(option, container) == null) {
                return;
            }
            options.push(option);
        });
        return options;
    },
    _clean(): void {
        this._lastHighlighted = this._lastHighlightedBeforeUpdate = null;
        this._clearHighlight();
        this._canHighlight.forEach((_, element) => {
            ripple(element, { highlight: true });
        });
        this._canHighlight.clear();
    },
    _setup(): void {
        this._getOptions().forEach(option => {
            const rippleElement: HTMLElement = getRippleElement(
                option, this.root.firstElementChild!.firstElementChild as HTMLElement
            )!;
            if (ripple(rippleElement).getOption("highlight") && !this._canHighlight.has(rippleElement)) {
                this._canHighlight.set(rippleElement, option);
                const rippleObject: any = ripple(rippleElement, { highlight: false });
                const isSelected: boolean = "selected" in option && (option as any).selected;
                if (
                    (isSelected && !this._lastHighlighted && !this._lastHighlightedBeforeUpdate) ||
                    this._lastHighlightedBeforeUpdate === rippleElement
                ) {
                    this._lastHighlighted = rippleElement;
                    this._currentHighlighted = rippleObject.highlight();
                }
            }
        });
    },
    _clearHighlight(): void {
        if (this._currentHighlighted) {
            this._currentHighlighted.end();
            this._currentHighlighted = null;
        }
    },
    _setHighlighted(event: Event): void {
        const rippleElement: HTMLElement | null = getRippleElement(
            event.target as HTMLElement,
            this.root.firstElementChild!.firstElementChild as HTMLElement
        );
        if (!this.getKeepHighlight()) {
            this._clearHighlight();
        }
        if (rippleElement != null) {
            Array.from(this._canHighlight.keys()).some(highligthable => {
                if (rippleElement !== highligthable) {
                    return false;
                }
                this._clearHighlight();
                this._currentHighlighted = ripple(this._lastHighlighted = rippleElement).highlight();
                return true;
            });
        }
    },
    _handleHighlightOnLeave(): void {
        if (this.getKeepHighlight()) {
            return;
        }
        this._clearHighlight();
    },
    highlightNext(): void {
        if (!this.isOpened() || this._canHighlight.size === 0) {
            return;
        }
        this._clearHighlight();
        let index: number = -1;
        if (!this._lastHighlighted || !Array.from(this._canHighlight.keys()).some((highlightable, i) => {
            if (this._lastHighlighted === highlightable) {
                index = i;
                return true;
            }
        })) {
            this._currentHighlighted = ripple(
                this._lastHighlighted = Array.from(this._canHighlight.keys())[0]
            ).highlight();
        } else {
            this._currentHighlighted = ripple(
                this._lastHighlighted = Array.from(this._canHighlight.keys())[(index + 1) % this._canHighlight.size]
            ).highlight();
        }
        this._scrollToHighlighted();
    },
    highlightPrevious(): void {
        if (!this.isOpened() || this._canHighlight.size === 0) {
            return;
        }
        this._clearHighlight();
        let index: number = -1;
        if (!this._lastHighlighted || !Array.from(this._canHighlight.keys()).some((highlightable, i) => {
            if (this._lastHighlighted === highlightable) {
                index = i;
                return true;
            }
        })) {
            this._currentHighlighted = ripple(
                this._lastHighlighted = Array.from(this._canHighlight.keys())[this._canHighlight.size - 1]
            ).highlight();
        } else {
            this._currentHighlighted = ripple(
                this._lastHighlighted = Array.from(this._canHighlight.keys())[
                    (index - 1 + this._canHighlight.size) % this._canHighlight.size
                ]
            ).highlight();
        }
        this._scrollToHighlighted();
    },
    isOpened(): boolean {
        if (this._direction === 0) {
            return this._time > 0;
        }
        return this._direction > 0;
    },
    open(this: ComponentEnhanced): void {
        if (this._time > 0 && this._direction !== -1) {
            return;
        }
        elevation(this.root.firstElementChild, 4);
        this._direction = 1;
        this.root.dispatchEvent(new Event("opening"));
    },
    close(): void {
        if (this._time < 1 && this._direction !== 1) {
            return;
        }
        focusManager.release();
        this._clean();
        elevation(this.root.firstElementChild, 0);
        this._direction = -1;
        this.root.dispatchEvent(new Event("closing"));
    },
    setAnchorElement(element: HTMLElement | null): void {
        const previousAnchorElement: HTMLElement | null = this._anchorElement;
        if (element == null) {
            this._anchorElement = null;
        } else if (element instanceof HTMLElement) {
            if (this.root.contains(element)) {
                throw new Error("element is in menu tree");
            } else {
                this._anchorElement = element;
            }
        } else {
            throw new Error("invalid element");
        }
        if (previousAnchorElement) {
            document.body.removeChild(this.root);
            this._realParent!.appendChild(this.root);
        }
        if (this._anchorElement) {
            (this._realParent = this.root.parentElement)!.removeChild(this.root);
            document.body.appendChild(this.root);
            this.root.style.position = "fixed";
        } else {
            this._realParent = null;
            this.root.style.top = "";
            this.root.style.left = "";
            this.root.style.width = "";
            this.root.style.position = "";
        }
    },
    getAnchorElement(): HTMLElement | null {
        return this._anchorElement;
    },
    getPreventFocus(): boolean {
        return this.props.preventFocus != null && this.props.preventFocus !== false;
    },
    getPreventAutoClose(): boolean {
        return this.props.preventAutoClose != null && this.props.preventAutoClose !== false;
    },
    getInheritWidth(): boolean {
        return this.props.inheritWidth == null && this.props.inheritWidth !== false;
    },
    getKeepHighlight(): boolean {
        return this.props.keepHighlight != null && this.props.keepHighlight !== false;
    }
};

function menuAnimationFrame(this: ComponentEnhanced): void {
    const child: HTMLElement = this.root.firstElementChild as HTMLElement;
    let _lastNow: number = Date.now();
    const frame: () => void = () => {
        if (this._mounted) {
            window.requestAnimationFrame(frame);
        }
        if (!this.root.isConnected) {
            return;
        }
        const last: number = _lastNow;
        _lastNow = Date.now();
        if (this._direction !== 0) {
            const duration: number = 150;
            const delta: number = (_lastNow - last) / duration;
            if (this._direction > 0) {
                if (this._anchorElement == null) {
                    this._time = 1;
                } else {
                    this._time = Math.min(this._time + delta, 1);
                }
            } else if (this._direction < 0) {
                if (this._anchorElement == null) {
                    this._time = 0;
                } else {
                    this._time = Math.max(this._time - delta, 0);
                }
            }
            if (this._time >= 1) {
                if (!this.getPreventFocus() || !this._anchorElement) {
                    focusManager.hold({
                        element: child,
                        onFocusInside: () => {
                            // should it do something?
                        },
                        onFocusOutside: () => {
                            if (this.getPreventAutoClose()) {
                                // tslint:disable-next-line:typedef
                                const wantsCloseEvent = new CustomEvent("wantsclose", {
                                    detail: { source: "FocusOutside" },
                                    cancelable: true
                                });
                                this.root.dispatchEvent(wantsCloseEvent);
                                if (!wantsCloseEvent.defaultPrevented) {
                                    return false;
                                }
                            }
                            this.close();
                            return true;
                        },
                        onNext: () => {
                            this.highlightNext();
                        },
                        onPrevious: () => {
                            this.highlightPrevious();
                        }
                    });
                    focusManager.on("keydown", this._onkeydown!);
                }
                this._direction = 0;
                // this._setup();
                this.root.dispatchEvent(new Event("open"));
            } else if (this._time <= 0) {
                this._direction = 0;
                this.root.dispatchEvent(new Event("close"));
            }
        }
        if (this._time === 0) {
            this.root.style.display = "none";
        } else {
            this.root.style.display = "";
            let anchor: "top" | "bottom" = "top";
            if (this._anchorElement) {
                const height: number = window.innerHeight;
                const rect: DOMRect = this._anchorElement.getBoundingClientRect();
                if (rect.bottom < 0) {
                    this.root.style.top = "0px";
                    this.root.style.bottom = "";
                    (child.firstElementChild as HTMLElement).style.maxHeight = height -
                        (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px"
                    ;
                } else if (rect.top > height) {
                    this.root.style.top = "";
                    this.root.style.bottom = "0px";
                    (child.firstElementChild as HTMLElement).style.maxHeight = height -
                        (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px"
                    ;
                    anchor = "bottom";
                } else {
                    const heightTop: number = rect.top;
                    const heightBottom: number = height - rect.bottom;
                    if (heightTop < heightBottom) {
                        this.root.style.top = rect.bottom + "px";
                        this.root.style.bottom = "";
                        (child.firstElementChild as HTMLElement).style.maxHeight = height - rect.bottom -
                            (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px"
                        ;
                    } else {
                        this.root.style.bottom = (height - rect.top) + "px";
                        this.root.style.top = "";
                        anchor = "bottom";
                        (child.firstElementChild as HTMLElement).style.maxHeight = rect.top -
                            (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px"
                        ;
                    }
                }
                if (this.getInheritWidth()) {
                    const right: number = window.innerWidth - rect.right;
                    if (rect.left >= right) {
                        this.root.style.left = "";
                        this.root.style.right = right + "px";
                    } else {
                        this.root.style.left = rect.left + "px";
                        this.root.style.right = "";
                    }
                } else {
                    this.root.style.left = rect.left + "px";
                    this.root.style.width = rect.width + "px";
                }
                this.root.setAttribute("anchor", anchor);
            }
            const styleAt: {
                opacity: number,
                transform: string
            } = getMenuStyleAt(this._time, anchor);
            child.style.transform = styleAt.transform;
            child.style.opacity = styleAt.opacity + "";
            if (this._direction > 0) {
                if (this._lastHighlighted) {
                    this._scrollToHighlighted();
                } else {
                    this.root.firstElementChild!.firstElementChild!.scrollTo(0, 0);
                }
            }
        }
    };
    frame();
}

export default Component;