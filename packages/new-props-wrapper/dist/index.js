(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.newPropsWrapper = factory()));
})(this, (function () { 'use strict';

    const LAST_PROPS = Symbol("last-props");
    const NEW_PROPS = Symbol("new-props");
    function newPropsWrapper(exports) {
        return {
            ...exports,
            onBeforeUpdate(props, state) {
                const newProps = this[NEW_PROPS] = (getNewProps(this[LAST_PROPS], props));
                this[LAST_PROPS] = props;
                return exports.onBeforeUpdate?.call(this, props, state, newProps);
            },
            onBeforeMount(props, state) {
                this[LAST_PROPS] = props;
                return exports.onBeforeMount?.call(this, props, state);
            },
            onUpdated(props, state) {
                return exports.onUpdated?.call(this, props, state, this[NEW_PROPS]);
            }
        };
        function getNewProps(lastProps, props) {
            return Object.freeze(Object.entries(props).filter(([prop, value]) => {
                return lastProps[prop] !== value;
            }).reduce((result, [prop, value]) => {
                result[prop] = value;
                return result;
            }, {}));
        }
    }

    return newPropsWrapper;

}));
