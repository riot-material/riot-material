declare const POSITION_CONTROLLER: unique symbol;
type PositionChangedEvent = CustomEvent<{
    position: number;
}>;
type PositionAppliedEvent = CustomEvent<{
    previousIndex: number;
    currentIndex: number;
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
interface IPositionController {
    getPosition(): number;
    getSelectedIndex(): number;
    setSelectedIndex(index: number): IPositionController;
    getLength(): number;
    setLength(length: number): IPositionController;
    on<T extends keyof IPositionEvent>(type: T, callback: (event: IPositionEvent[T]) => void): IPositionController;
    off<T extends keyof IPositionEvent>(type: T, callback: (event: IPositionEvent[T]) => void): IPositionController;
}
declare function positionController(element: HTMLElement, actionThreshold?: number): IPositionController;
export { PositionChangedEvent, PositionAppliedEvent, IPositionController, positionController as default };
