const POSITION_CONTROLLER: unique symbol = Symbol("position-controller");

export type PositionChangedEvent = CustomEvent<{
    position: number
}>;
export type PositionAppliedEvent = CustomEvent<{
    previousIndex: number, currentIndex: number
}>;
interface IPositionEvent {
    "positionapplied": PositionAppliedEvent;
    "positionchanged": PositionChangedEvent;
}

declare global {
    interface HTMLElement {
        [POSITION_CONTROLLER]?: IPositionController;
    }
}

export interface IPositionController {
    getPosition(): number;
    getSelectedIndex(): number;
    setSelectedIndex(index: number): IPositionController;
    getLength(): number;
    setLength(length: number): IPositionController;
    on<T extends keyof IPositionEvent>(type: T, callback: (event: IPositionEvent[T]) => void): IPositionController;
    off<T extends keyof IPositionEvent>(type: T, callback: (event: IPositionEvent[T]) => void): IPositionController;
}

export default function positionController(element: HTMLElement): IPositionController {
    const existingPositionController = element[POSITION_CONTROLLER];
    if (existingPositionController != null) {
        return existingPositionController;
    }
    let self: IPositionController;
    let eventTarget: EventTarget = new EventTarget();
    let length: number = 0;
    const getLength: () => number = () => {
        return length;
    };
    const setLength: (length: number) => IPositionController = l => {
        length = l;
        return self;
    };
    let index: number = 0;
    const getSelectedIndex: () => number = () => {
        return index;
    };
    const setSelectedIndex: (index: number) => IPositionController = i => {
        index = Math.min(Math.max(0, i), length - 1);
        return self;
    };
    let position: number = 0;
    const getPosition: () => number = () => {
        let m: number = parseFloat(position as any);
        if (isNaN(m)) {
            return 0;
        }
        m = Math.max(Math.min(1, m), -1);
        return (index === 0 && m < 0 || index === (length - 1) && m > 0) ? 0 : m;
    };
    {
        let _touchIdentifier: number | null = null;
        let startX: number = 0;
        let lastDirection: number | null = null;
        let positioningStarted: boolean = true;
        const startPositioning: (event: TouchEvent) => void = event => {
            if (_touchIdentifier != null) {
                return;
            }
            const touch: Touch = event.targetTouches[0];
            _touchIdentifier = touch.identifier;
            startX = touch.clientX;
            lastDirection = null;
            positioningStarted = true;
        };
        const updatePosition: (event: TouchEvent) => void = event => {
            if (!positioningStarted) {
                return;
            }
            let index: number;
            if (!Array.prototype.some.call(event.changedTouches, (touch, i) => {
                index = i;
                return touch.identifier === _touchIdentifier;
            })) {
                return;
            }
            const lastPosition: number = getPosition();
            const touch: Touch = event.changedTouches[index!];
            const endX: number = touch.clientX;
            const delta: number = endX - startX;
            position = -delta / element.getBoundingClientRect().width;
            const newPosition: number = getPosition();
            if (newPosition !== lastPosition) {
                lastDirection = newPosition > lastPosition ? 1 : -1;
            }
            eventTarget.dispatchEvent(new CustomEvent("positionchanged", { detail: { position: newPosition } }));
        };
        const endPositioning: (event: TouchEvent) => void = event => {
            if (!positioningStarted) {
                return;
            }
            if (!Array.prototype.some.call(event.changedTouches, touch => {
                return touch.identifier === _touchIdentifier;
            })) {
                return;
            }
            if (lastDirection != null) {
                const m: number = getPosition();
                position = 0;
                let newM: number;
                if (m < 0) {
                    newM = lastDirection < 0 ? -1 : 0;
                } else {
                    newM = lastDirection > 0 ? 1 : 0;
                }
                lastDirection = null;
                const roundedPosition: number = Math.round(newM);
                const previousIndex: number = getSelectedIndex();
                if (roundedPosition !== 0) {
                    setSelectedIndex(previousIndex + roundedPosition);
                }
                eventTarget.dispatchEvent(new CustomEvent("positionapplied", {
                    detail: {
                        previousIndex, currentIndex: getSelectedIndex()
                    }
                }));
            }
            _touchIdentifier = null;
            positioningStarted = false;
        };
        element.addEventListener("touchstart", startPositioning);
        element.addEventListener("touchmove", updatePosition);
        element.addEventListener("touchcancel", endPositioning);
        element.addEventListener("touchend", endPositioning);
    }
    return element[POSITION_CONTROLLER] = self = {
        getPosition,
        getSelectedIndex,
        setSelectedIndex,
        getLength,
        setLength,
        on(type: string, callback: (event: any) => void): IPositionController {
            eventTarget.addEventListener(type, callback);
            return self;
        },
        off(type: string, callback: (event: any) => void): IPositionController {
            eventTarget.removeEventListener(type, callback);
            return self;
        }
    };
}