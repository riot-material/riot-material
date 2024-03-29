(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.textfieldContainer = factory()));
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

    var RmTextfieldContainer = {
      'css': `rm-textfield-container,[is="rm-textfield-container"]{ display: inline-block; font: message-box; font-size: 16px; margin-top: 0.5em; margin-bottom: 1em; vertical-align: middle; cursor: inherit; border-radius: 0; margin-right: .5em; user-select: none; } rm-textfield-container[full-width],[is="rm-textfield-container"][full-width]{ width: 100%; margin-right: 0; } rm-textfield-container[variant=filled],[is="rm-textfield-container"][variant=filled]{ border-radius: .25em .25em 0 0; } rm-textfield-container[variant=outlined],[is="rm-textfield-container"][variant=outlined]{ border-radius: 0.25em; } rm-textfield-container[disabled],[is="rm-textfield-container"][disabled]{ opacity: 0.6; } rm-textfield-container .rm-textfield-container--container,[is="rm-textfield-container"] .rm-textfield-container--container{ display: table-cell; vertical-align: middle; position: relative; font-size: inherit; box-sizing: border-box; padding: 0.625em 0 0.625em 0; line-height: 1.25em; transition: padding linear 150ms; color: inherit; width: 100%; } rm-textfield-container[variant=filled] .rm-textfield-container--container,[is="rm-textfield-container"][variant=filled] .rm-textfield-container--container{ padding: 0.875em 0.25em 0.875em 0.25em; } rm-textfield-container[variant=filled] .rm-textfield-container--no-leading .rm-textfield-container--container,[is="rm-textfield-container"][variant=filled] .rm-textfield-container--no-leading .rm-textfield-container--container{ padding-left: 0.75em; } rm-textfield-container[variant=filled] .rm-textfield-container--no-trailing .rm-textfield-container--container,[is="rm-textfield-container"][variant=filled] .rm-textfield-container--no-trailing .rm-textfield-container--container{ padding-right: 0.75em; } rm-textfield-container[variant=filled].rm-label-should-float .rm-textfield-container--container,[is="rm-textfield-container"][variant=filled].rm-label-should-float .rm-textfield-container--container{ padding-top: 1.25em; padding-bottom: 0.5em; } rm-textfield-container[variant=outlined] .rm-textfield-container--container,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--container{ padding: 0.875em 0.25em 0.875em 0.25em; } rm-textfield-container[variant=outlined] .rm-textfield-container--no-leading .rm-textfield-container--container,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--no-leading .rm-textfield-container--container{ padding-left: 0.75em; } rm-textfield-container[variant=outlined] .rm-textfield-container--no-trailing .rm-textfield-container--container,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--no-trailing .rm-textfield-container--container{ padding-right: 0.75em; } rm-textfield-container:not([variant=outlined]) .rm-textfield-container--container,[is="rm-textfield-container"]:not([variant=outlined]) .rm-textfield-container--container{ border: none !important; } rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--container,[is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--container{ border-color: rgb(139, 0, 139); border-color: rgb(var(--color-primary, 139, 0, 139)); } rm-textfield-container[variant=outlined] .rm-textfield-container--border,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--border{ border: rgba(0, 0, 0, .42) 1px solid; border: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)) 1px solid; border-radius: inherit; transition: border 150ms linear; position: absolute; top: 0; right: 0; bottom: 0; left: 0; } .rm-black-surface rm-textfield-container[variant=outlined] .rm-textfield-container--border,.rm-black-surface [is="rm-textfield-container"][variant=outlined] .rm-textfield-container--border{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-textfield-container[variant=outlined] .rm-textfield-container--border,.rm-dark-surface [is="rm-textfield-container"][variant=outlined] .rm-textfield-container--border{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-textfield-container[variant=outlined] .rm-textfield-container--border,.rm-light-surface [is="rm-textfield-container"][variant=outlined] .rm-textfield-container--border{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-textfield-container[variant=outlined] .rm-textfield-container--border,.rm-white-surface [is="rm-textfield-container"][variant=outlined] .rm-textfield-container--border{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--border,[is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--border{ border: rgb(139, 0, 139) 2px solid; border: rgb(var(--color-primary, 139, 0, 139)) 2px solid; } .rm-black-surface rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--border,.rm-black-surface [is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--border{ border: rgb(238, 130, 238) 2px solid; border: rgb(var(--color-primary-on-black, 238, 130, 238)) 2px solid; } .rm-dark-surface rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--border,.rm-dark-surface [is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--border{ border: rgb(238, 130, 238) 2px solid; border: rgb(var(--color-primary-on-dark, 238, 130, 238)) 2px solid; } .rm-light-surface rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--border,.rm-light-surface [is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--border{ border: rgb(139, 0, 139) 2px solid; border: rgb(var(--color-primary-on-light, 139, 0, 139)) 2px solid; } .rm-white-surface rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--border,.rm-white-surface [is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--border{ border: rgb(139, 0, 139) 2px solid; border: rgb(var(--color-primary-on-white, 139, 0, 139)) 2px solid; } rm-textfield-container .rm-textfield-container--border-notch,[is="rm-textfield-container"] .rm-textfield-container--border-notch{ position: absolute; top: 0; font-size: 0.6em; padding: 0 0.4166666666666667em; transform: translateY(-50%) scaleX(0); background: inherit; color: transparent; transition: transform ease-in-out 150ms; display: inline-block; } rm-textfield-container .rm-textfield-container--no-leading .rm-textfield-container--border-notch,[is="rm-textfield-container"] .rm-textfield-container--no-leading .rm-textfield-container--border-notch{ margin-left: 0.8333333333333334em; } rm-textfield-container.rm-label-should-float .rm-textfield-container--border-notch,[is="rm-textfield-container"].rm-label-should-float .rm-textfield-container--border-notch{ transform: translateY(-50%) scaleX(1); } rm-textfield-container:not([variant=outlined]) .rm-textfield-container--border-notch,[is="rm-textfield-container"]:not([variant=outlined]) .rm-textfield-container--border-notch{ display: none; } rm-textfield-container .rm-textfield-container--label,[is="rm-textfield-container"] .rm-textfield-container--label{ position: absolute; top: 0; left: 0; font-size: inherit; transition: transform linear 150ms, color linear 150ms; transform-origin: left bottom; color: rgba(0, 0, 0, .6); color: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-primary, .6)); -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none; line-height: inherit; } .rm-black-surface rm-textfield-container .rm-textfield-container--label,.rm-black-surface [is="rm-textfield-container"] .rm-textfield-container--label{ color: rgba(255, 255, 255, .6); color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-primary, .6)); } .rm-dark-surface rm-textfield-container .rm-textfield-container--label,.rm-dark-surface [is="rm-textfield-container"] .rm-textfield-container--label{ color: rgba(255, 255, 255, .6); color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-primary, .6)); } .rm-light-surface rm-textfield-container .rm-textfield-container--label,.rm-light-surface [is="rm-textfield-container"] .rm-textfield-container--label{ color: rgba(0, 0, 0, .6); color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-primary, .6)); } .rm-white-surface rm-textfield-container .rm-textfield-container--label,.rm-white-surface [is="rm-textfield-container"] .rm-textfield-container--label{ color: rgba(0, 0, 0, .6); color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-primary, .6)); } rm-textfield-container.rm-label-should-float .rm-textfield-container--label,[is="rm-textfield-container"].rm-label-should-float .rm-textfield-container--label{ transform: translateY(-100%) scale(.6); } rm-textfield-container[variant=outlined] .rm-textfield-container--content,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--content,rm-textfield-container[variant=outlined] .rm-textfield-container--label,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--label{ background: inherit; } rm-textfield-container[variant=outlined].rm-label-should-float .rm-textfield-container--label,[is="rm-textfield-container"][variant=outlined].rm-label-should-float .rm-textfield-container--label{ transform: translateY(-140%) scale(.6); } rm-textfield-container.rm-focused .rm-textfield-container--label,[is="rm-textfield-container"].rm-focused .rm-textfield-container--label{ color: rgb(139, 0, 139); color: rgb(var(--color-primary, 139, 0, 139)); } .rm-black-surface rm-textfield-container.rm-focused .rm-textfield-container--label,.rm-black-surface [is="rm-textfield-container"].rm-focused .rm-textfield-container--label{ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-textfield-container.rm-focused .rm-textfield-container--label,.rm-dark-surface [is="rm-textfield-container"].rm-focused .rm-textfield-container--label{ color: rgb(238, 130, 238); color: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-textfield-container.rm-focused .rm-textfield-container--label,.rm-light-surface [is="rm-textfield-container"].rm-focused .rm-textfield-container--label{ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-textfield-container.rm-focused .rm-textfield-container--label,.rm-white-surface [is="rm-textfield-container"].rm-focused .rm-textfield-container--label{ color: rgb(139, 0, 139); color: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-textfield-container .rm-textfield-container--basic-underline,[is="rm-textfield-container"] .rm-textfield-container--basic-underline{ position: absolute; background: rgba(0, 0, 0, .42); background: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)); bottom: 0; left: 0; right: 0; height: 1px; } .rm-black-surface rm-textfield-container .rm-textfield-container--basic-underline,.rm-black-surface [is="rm-textfield-container"] .rm-textfield-container--basic-underline{ background: rgba(255, 255, 255, .42); background: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-textfield-container .rm-textfield-container--basic-underline,.rm-dark-surface [is="rm-textfield-container"] .rm-textfield-container--basic-underline{ background: rgba(255, 255, 255, .42); background: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-textfield-container .rm-textfield-container--basic-underline,.rm-light-surface [is="rm-textfield-container"] .rm-textfield-container--basic-underline{ background: rgba(0, 0, 0, .42); background: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-textfield-container .rm-textfield-container--basic-underline,.rm-white-surface [is="rm-textfield-container"] .rm-textfield-container--basic-underline{ background: rgba(0, 0, 0, .42); background: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-textfield-container:not([variant])[disabled] .rm-textfield-container--basic-underline,[is="rm-textfield-container"]:not([variant])[disabled] .rm-textfield-container--basic-underline,rm-textfield-container[variant=flat][disabled] .rm-textfield-container--basic-underline,[is="rm-textfield-container"][variant=flat][disabled] .rm-textfield-container--basic-underline{ border-bottom: rgba(0, 0, 0, .42) 1px dashed; border-bottom: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)) 1px dashed; height: 0; background: transparent; } rm-textfield-container[variant=filled][disabled] .rm-textfield-container--basic-underline,[is="rm-textfield-container"][variant=filled][disabled] .rm-textfield-container--basic-underline{ display: none; } rm-textfield-container .rm-textfield-container--underline,[is="rm-textfield-container"] .rm-textfield-container--underline{ position: absolute; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); bottom: 0; left: 0; right: 0; height: 2px; transform: scaleX(0); transform-origin: center; transition: transform linear 150ms, opacity linear 150ms; } .rm-black-surface rm-textfield-container .rm-textfield-container--underline,.rm-black-surface [is="rm-textfield-container"] .rm-textfield-container--underline{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-textfield-container .rm-textfield-container--underline,.rm-dark-surface [is="rm-textfield-container"] .rm-textfield-container--underline{ background: rgb(238, 130, 238); background: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-textfield-container .rm-textfield-container--underline,.rm-light-surface [is="rm-textfield-container"] .rm-textfield-container--underline{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-textfield-container .rm-textfield-container--underline,.rm-white-surface [is="rm-textfield-container"] .rm-textfield-container--underline{ background: rgb(139, 0, 139); background: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-textfield-container.rm-focused .rm-textfield-container--underline,[is="rm-textfield-container"].rm-focused .rm-textfield-container--underline{ transform: scale(1) !important; opacity: 1 !important; } rm-textfield-container[variant=outlined] .rm-textfield-container--underline,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--underline,rm-textfield-container[variant=outlined] .rm-textfield-container--basic-underline,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--basic-underline{ display: none; } rm-textfield-container .rm-textfield-container--content,[is="rm-textfield-container"] .rm-textfield-container--content{ position: relative; } rm-textfield-container .rm-textfield-container--main,[is="rm-textfield-container"] .rm-textfield-container--main{ display: inline-table; position: relative; background: rgb(245, 245, 245); background: rgb(var(--color-background, 245, 245, 245)); color: rgb(0, 0, 0); color: rgb(var(--color-on-background, 0, 0, 0)); font-size: inherit; cursor: inherit; border-radius: inherit; width: 100%; vertical-align: middle; } .rm-black-surface rm-textfield-container .rm-textfield-container--main,.rm-black-surface [is="rm-textfield-container"] .rm-textfield-container--main{ background: rgb(0, 0, 0); background: rgb(var(--color-black-surface, 0, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-black, 255, 255, 255)); } .rm-dark-surface rm-textfield-container .rm-textfield-container--main,.rm-dark-surface [is="rm-textfield-container"] .rm-textfield-container--main{ background: rgb(10, 10, 10); background: rgb(var(--color-dark-surface, 10, 10, 10)); color: rgb(255, 255, 255); color: rgb(var(--color-on-dark, 255, 255, 255)); } .rm-light-surface rm-textfield-container .rm-textfield-container--main,.rm-light-surface [is="rm-textfield-container"] .rm-textfield-container--main{ background: rgb(250, 250, 250); background: rgb(var(--color-light-surface, 250, 250, 250)); color: rgb(0, 0, 0); color: rgb(var(--color-on-light, 0, 0, 0)); } .rm-white-surface rm-textfield-container .rm-textfield-container--main,.rm-white-surface [is="rm-textfield-container"] .rm-textfield-container--main{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); color: rgb(0, 0, 0); color: rgb(var(--color-on-white, 0, 0, 0)); } rm-textfield-container[variant=filled] .rm-textfield-container--main,[is="rm-textfield-container"][variant=filled] .rm-textfield-container--main{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-tertiary, .12)); } .rm-black-surface rm-textfield-container[variant=filled] .rm-textfield-container--main,.rm-black-surface [is="rm-textfield-container"][variant=filled] .rm-textfield-container--main{ background: rgba(255, 255, 255, .12); background: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-dark-surface rm-textfield-container[variant=filled] .rm-textfield-container--main,.rm-dark-surface [is="rm-textfield-container"][variant=filled] .rm-textfield-container--main{ background: rgba(255, 255, 255, .12); background: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-light-surface rm-textfield-container[variant=filled] .rm-textfield-container--main,.rm-light-surface [is="rm-textfield-container"][variant=filled] .rm-textfield-container--main{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-tertiary, .12)); } .rm-white-surface rm-textfield-container[variant=filled] .rm-textfield-container--main,.rm-white-surface [is="rm-textfield-container"][variant=filled] .rm-textfield-container--main{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-tertiary, .12)); } .rm-black-surface rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--main,.rm-black-surface [is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--main{ border-color: rgb(238, 130, 238); border-color: rgb(var(--color-primary-on-black, 238, 130, 238)); } .rm-dark-surface rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--main,.rm-dark-surface [is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--main{ border-color: rgb(238, 130, 238); border-color: rgb(var(--color-primary-on-dark, 238, 130, 238)); } .rm-light-surface rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--main,.rm-light-surface [is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--main{ border-color: rgb(139, 0, 139); border-color: rgb(var(--color-primary-on-light, 139, 0, 139)); } .rm-white-surface rm-textfield-container[variant=outlined].rm-focused .rm-textfield-container--main,.rm-white-surface [is="rm-textfield-container"][variant=outlined].rm-focused .rm-textfield-container--main{ border-color: rgb(139, 0, 139); border-color: rgb(var(--color-primary-on-white, 139, 0, 139)); } rm-textfield-container .rm-textfield-container--leading,[is="rm-textfield-container"] .rm-textfield-container--leading{ display: table-cell; width: 1px; vertical-align: middle; position: relative; padding-right: .5em; } rm-textfield-container[variant=filled] .rm-textfield-container--leading,[is="rm-textfield-container"][variant=filled] .rm-textfield-container--leading,rm-textfield-container[variant=outlined] .rm-textfield-container--leading,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--leading{ padding-left: .5em; padding-right: 0; } rm-textfield-container .rm-textfield-container--no-leading .rm-textfield-container--leading,[is="rm-textfield-container"] .rm-textfield-container--no-leading .rm-textfield-container--leading{ display: none; } rm-textfield-container .rm-textfield-container--trailing,[is="rm-textfield-container"] .rm-textfield-container--trailing{ display: table-cell; width: 1px; vertical-align: middle; position: relative; padding-left: .5em; } rm-textfield-container[variant=filled] .rm-textfield-container--trailing,[is="rm-textfield-container"][variant=filled] .rm-textfield-container--trailing,rm-textfield-container[variant=outlined] .rm-textfield-container--trailing,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--trailing{ padding-right: .5em; padding-left: 0; } rm-textfield-container .rm-textfield-container--no-trailing .rm-textfield-container--trailing,[is="rm-textfield-container"] .rm-textfield-container--no-trailing .rm-textfield-container--trailing{ display: none; } rm-textfield-container .rm-textfield-container--disabled-block,[is="rm-textfield-container"] .rm-textfield-container--disabled-block{ display: none; position: absolute; top: 0; right: 0; bottom: 0; left: 0; } rm-textfield-container[disabled] .rm-textfield-container--disabled-block,[is="rm-textfield-container"][disabled] .rm-textfield-container--disabled-block{ display: block; } rm-textfield-container .rm-textfield-container--helper-text,[is="rm-textfield-container"] .rm-textfield-container--helper-text{ height: 1em; line-height: 1em; pointer-events: none; margin-top: 0.625em; position: absolute; } rm-textfield-container[variant=outlined] .rm-textfield-container--helper-text,[is="rm-textfield-container"][variant=outlined] .rm-textfield-container--helper-text,rm-textfield-container[variant=filled] .rm-textfield-container--helper-text,[is="rm-textfield-container"][variant=filled] .rm-textfield-container--helper-text{ margin-top: 0.875em; }`,

      'exports': newPropsWrapper(
        {
            onBeforeMount() {
                this.state.helperText = this.props.helperText;
                this.state.label = this.props.label;

                Object.defineProperties(this.root, {
                    helperText: {
                        get: () => this.state.helperText,
                        set: (value) => {
                            this.root.querySelector(
                                ".rm-textfield-container--helper-text > div"
                            ).childNodes[0].data = this.state.helperText = (
                                value?.toString() || ""
                            );
                        }
                    },
                    label: {
                        get: () => this.state.label,
                        set: (value) => {
                            this.root.querySelector(
                                ".rm-textfield-container--border-notch"
                            ).childNodes[0].data = this.root.querySelector(
                                ".rm-textfield-container--label"
                            ).childNodes[0].data = this.state.label = (
                                value?.toString() || ""
                            );
                        }
                    }
                });
            },
            onMounted() {
                this._refreshCaps();
            },
            _onlabelpointerdown(event) {
                const control = this.root.children[0].control;
                if (control === document.activeElement && event.target !== control) {
                    event.preventDefault();
                }
            },
            _hasInputSlot() {
                return this.slots.some(slot => {
                    return slot.id === "input";
                });
            },
            _hasSlot(name) {
                let index;
                return this.slots.some((slot, i) => (index = i, slot.id === name)) && console.log(this.slots[index]);
            },
            _getLeadingIcons() {
                const leadingIcons = this.props.leadingIcons;
                if (leadingIcons == null) {
                    return [];
                }
                switch (typeof leadingIcons) {
                    case "string": {
                        return leadingIcons.split(/[\W]+/).filter(icon => icon.length > 0);
                    }
                    case "object": {
                        return Array.isArray(leadingIcons) ? leadingIcons : [];
                    }
                    default: {
                        return [];
                    }
                }
            },
            _getTrailingIcons() {
                const trailingIcons = this.props.trailingIcons;
                if (trailingIcons == null) {
                    return [];
                }
                switch (typeof trailingIcons) {
                    case "string": {
                        return trailingIcons.split(/[\W]+/).filter(icon => icon.length > 0);
                    }
                    case "object": {
                        return Array.isArray(trailingIcons) ? trailingIcons : [];
                    }
                    default: {
                        return [];
                    }
                }
            },
            _refreshCaps() {
                const label = this.root.firstElementChild;
                label.classList.remove("rm-textfield-container--no-leading", "rm-textfield-container--no-trailing");
                const leading = this.root.querySelector("label > .rm-textfield-container--leading");
                if (leading.children.length === 0 || leading.clientWidth <= 9) {
                    label.classList.add("rm-textfield-container--no-leading");
                } else {
                    label.classList.remove("rm-textfield-container--no-leading");
                }
                const trailing = this.root.querySelector("label > .rm-textfield-container--trailing");
                if (trailing.children.length === 0 || trailing.clientWidth <= 9) {
                    label.classList.add("rm-textfield-container--no-trailing");
                } else {
                    label.classList.remove("rm-textfield-container--no-trailing");
                }
            },
            onBeforeUpdate(_, __, newProps) {
                if ("label" in newProps) {
                    this.state.label = newProps.label;
                }
                if ("helperText" in newProps) {
                    this.state.helperText = newProps.helperText;
                }
            },
            onUpdated() {
                this._refreshCaps();
            }
        }
      ),

      'template': function(
        template,
        expressionTypes,
        bindingTypes,
        getComponent
      ) {
        return template(
          '<label expr9="expr9" class="rm-textfield-container--main"><div class="rm-textfield-container--border"></div><div class="rm-textfield-container--leading"><slot expr10="expr10" name="leading"></slot></div><div expr11="expr11" class="rm-textfield-container--border-notch"> </div><div class="rm-textfield-container--container"><div class="rm-textfield-container--content"><div expr12="expr12" class="rm-textfield-container--label"> </div><div style="position: relative; user-select: auto; min-height: 1.3125em;"><template expr13="expr13"></template><slot expr15="expr15" name="input"></slot></div><div class="rm-textfield-container--helper-text"><div expr16="expr16" style="font-size: .75em;"> </div></div></div></div><div class="rm-textfield-container--trailing"><slot expr17="expr17" name="trailing"></slot></div><div class="rm-textfield-container--basic-underline"></div><div class="rm-textfield-container--underline"></div><div class="rm-textfield-container--disabled-block"></div></label>',
          [
            {
              'redundantAttribute': 'expr9',
              'selector': '[expr9]',

              'expressions': [
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onmousedown',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope._onlabelpointerdown;
                  }
                }
              ]
            },
            {
              'type': bindingTypes.SLOT,
              'attributes': [],
              'name': 'leading',
              'redundantAttribute': 'expr10',
              'selector': '[expr10]'
            },
            {
              'redundantAttribute': 'expr11',
              'selector': '[expr11]',

              'expressions': [
                {
                  'type': expressionTypes.TEXT,
                  'childNodeIndex': 0,

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope.state.label;
                  }
                }
              ]
            },
            {
              'redundantAttribute': 'expr12',
              'selector': '[expr12]',

              'expressions': [
                {
                  'type': expressionTypes.TEXT,
                  'childNodeIndex': 0,

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope.state.label;
                  }
                }
              ]
            },
            {
              'type': bindingTypes.IF,

              'evaluate': function(
                _scope
              ) {
                return !_scope._hasInputSlot();
              },

              'redundantAttribute': 'expr13',
              'selector': '[expr13]',

              'template': template(
                '<slot expr14="expr14"></slot>',
                [
                  {
                    'type': bindingTypes.SLOT,
                    'attributes': [],
                    'name': 'default',
                    'redundantAttribute': 'expr14',
                    'selector': '[expr14]'
                  }
                ]
              )
            },
            {
              'type': bindingTypes.SLOT,
              'attributes': [],
              'name': 'input',
              'redundantAttribute': 'expr15',
              'selector': '[expr15]'
            },
            {
              'redundantAttribute': 'expr16',
              'selector': '[expr16]',

              'expressions': [
                {
                  'type': expressionTypes.TEXT,
                  'childNodeIndex': 0,

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope.state.helperText;
                  }
                }
              ]
            },
            {
              'type': bindingTypes.SLOT,
              'attributes': [],
              'name': 'trailing',
              'redundantAttribute': 'expr17',
              'selector': '[expr17]'
            }
          ]
        );
      },

      'name': 'rm-textfield-container'
    };

    return RmTextfieldContainer;

}));
