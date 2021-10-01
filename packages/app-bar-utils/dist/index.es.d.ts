declare function getHeight(): number;
declare function setup(): void;
declare function onChange<T>(listener: (this: T) => void, thisArg?: T): void;
declare function onceChange<T>(listener: (this: T) => void, thisArg?: T): void;
declare function offChange<T>(listener: (this: T) => void, thisArg?: T): void;
export { getHeight, setup, onChange, offChange, onceChange };
