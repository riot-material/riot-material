const LAST_PROPS: unique symbol = Symbol("last-props");
const NEW_PROPS: unique symbol = Symbol("new-props");

export default function newPropsWrapper<T extends {
    onBeforeUpdate?(
        props: Record<string, any>,
        state: Record<string, any>,
        newProps: Record<string, any>
    ): void,
    onBeforeMount?(
        props: Record<string, any>,
        state: Record<string, any>
    ): void,
    onUpdated?(
        props: Record<string, any>,
        state: Record<string, any>,
        newProps: Record<string, any>
    ): void
}>(exports: T) {
    return {
        ...exports,

        onBeforeUpdate(
            this: {
                [LAST_PROPS]: Record<string, any>,
                [NEW_PROPS]: Record<string, any>,
            },
            props: Record<string, any>,
            state: Record<string, any>
        ) {
            const newProps = this[NEW_PROPS] = (
                getNewProps(this[LAST_PROPS], props)
            );
            this[LAST_PROPS] = props;

            return exports.onBeforeUpdate?.call(
                this, props, state, newProps
            );
        },
        onBeforeMount(
            this: {
                [LAST_PROPS]: Record<string, any>,
                [NEW_PROPS]: Record<string, any>,
            },
            props: Record<string, any>,
            state: Record<string, any>
        ) {
            this[LAST_PROPS] = props;

            return exports.onBeforeMount?.call(
                this, props, state
            );
        },
        onUpdated(
            this: {
                [LAST_PROPS]: Record<string, any>,
                [NEW_PROPS]: Record<string, any>,
            },
            props: Record<string, any>,
            state: Record<string, any>
        ) {
            return exports.onUpdated?.call(
                this, props, state, this[NEW_PROPS]
            );
        }
    };

    function getNewProps(
        lastProps: Record<string, any>,
        props: Record<string, any>
    ) {
        return  Object.freeze(
            Object.entries(
                props
            ).filter(([prop, value]) => {
                return lastProps![prop] !== value;
            }).reduce((result, [prop, value]) => {
                result[prop] = value;
                return result;
            }, {} as Record<string, any>)
        );
    }
}