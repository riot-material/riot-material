declare const LAST_PROPS: unique symbol;
declare const NEW_PROPS: unique symbol;
declare function newPropsWrapper<T extends {
    onBeforeUpdate?(props: Record<string, any>, state: Record<string, any>, newProps: Record<string, any>): void;
    onBeforeMount?(props: Record<string, any>, state: Record<string, any>): void;
    onUpdated?(props: Record<string, any>, state: Record<string, any>, newProps: Record<string, any>): void;
}>(exports: T): T & {
    onBeforeUpdate(this: {
        [LAST_PROPS]: Record<string, any>;
        [NEW_PROPS]: Record<string, any>;
    }, props: Record<string, any>, state: Record<string, any>): void | undefined;
    onBeforeMount(this: {
        [LAST_PROPS]: Record<string, any>;
        [NEW_PROPS]: Record<string, any>;
    }, props: Record<string, any>, state: Record<string, any>): void | undefined;
    onUpdated(this: {
        [LAST_PROPS]: Record<string, any>;
        [NEW_PROPS]: Record<string, any>;
    }, props: Record<string, any>, state: Record<string, any>): void | undefined;
};
export { newPropsWrapper as default };
