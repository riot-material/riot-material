(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@riot-material/ripple')) :
    typeof define === 'function' && define.amd ? define(['@riot-material/ripple'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.radio = factory(global.riotMaterial.ripple)));
}(this, (function (ripple) { 'use strict';

    var index = {
      'css': `rm-radio,[is="rm-radio"]{ position: relative; font: message-box; font-size: 16px; cursor: pointer; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none; display: inline-block; margin-right: 8px; outline: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; } rm-radio label,[is="rm-radio"] label{ cursor: inherit; display: inline-block; } rm-radio [ref="circle"],[is="rm-radio"] [ref="circle"]{ height: 1.25em; width: 1.25em; position: relative; display: inline-block; vertical-align: middle; box-sizing: border-box; border-radius: 50%; background: transparent; margin: 0.25em .5em 0.25em 0; outline: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; color: rgb(0, 0, 255); color: rgb(var(--color-accent, 0, 0, 255)); } .rm-black-surface rm-radio [ref="circle"],.rm-black-surface [is="rm-radio"] [ref="circle"]{ color: rgb(30, 144, 255); color: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-radio [ref="circle"],.rm-dark-surface [is="rm-radio"] [ref="circle"]{ color: rgb(30, 144, 255); color: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-radio [ref="circle"],.rm-light-surface [is="rm-radio"] [ref="circle"]{ color: rgb(0, 0, 255); color: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-radio [ref="circle"],.rm-white-surface [is="rm-radio"] [ref="circle"]{ color: rgb(0, 0, 255); color: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-radio [ref="border"],[is="rm-radio"] [ref="border"]{ transition: border-color linear 100ms; border: 0.125em solid rgba(0, 0, 0, .42); border: 0.125em solid rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)); height: 100%; width: 100%; box-sizing: border-box; border-radius: inherit; } .rm-black-surface rm-radio [ref="border"],.rm-black-surface [is="rm-radio"] [ref="border"]{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-radio [ref="border"],.rm-dark-surface [is="rm-radio"] [ref="border"]{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-radio [ref="border"],.rm-light-surface [is="rm-radio"] [ref="border"]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-radio [ref="border"],.rm-white-surface [is="rm-radio"] [ref="border"]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-radio [ref="radio-circle"],[is="rm-radio"] [ref="radio-circle"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent, 0, 0, 255)); position: absolute; top: 0.3125em; bottom: 0.3125em; right: 0.3125em; left: 0.3125em; text-align: center; transition: transform linear 100ms; transform: scale(0); border-radius: inherit; } .rm-black-surface rm-radio [ref="radio-circle"],.rm-black-surface [is="rm-radio"] [ref="radio-circle"]{ background: rgb(30, 144, 255); background: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-radio [ref="radio-circle"],.rm-dark-surface [is="rm-radio"] [ref="radio-circle"]{ background: rgb(30, 144, 255); background: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-radio [ref="radio-circle"],.rm-light-surface [is="rm-radio"] [ref="radio-circle"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-radio [ref="radio-circle"],.rm-white-surface [is="rm-radio"] [ref="radio-circle"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-radio.rm-checked [ref="radio-circle"],[is="rm-radio"].rm-checked [ref="radio-circle"]{ transform: scale(1); } rm-radio.rm-checked [ref="border"],[is="rm-radio"].rm-checked [ref="border"]{ border-color: rgb(0, 0, 255); border-color: rgb(var(--color-accent, 0, 0, 255)); } .rm-black-surface rm-radio.rm-checked [ref="border"],.rm-black-surface [is="rm-radio"].rm-checked [ref="border"]{ border-color: rgb(30, 144, 255); border-color: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-radio.rm-checked [ref="border"],.rm-dark-surface [is="rm-radio"].rm-checked [ref="border"]{ border-color: rgb(30, 144, 255); border-color: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-radio.rm-checked [ref="border"],.rm-light-surface [is="rm-radio"].rm-checked [ref="border"]{ border-color: rgb(0, 0, 255); border-color: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-radio.rm-checked [ref="border"],.rm-white-surface [is="rm-radio"].rm-checked [ref="border"]{ border-color: rgb(0, 0, 255); border-color: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-radio input,[is="rm-radio"] input{ border: 0; position: absolute; overflow: hidden; clip: rect(0 0 0 0); height: 1px; width: 1px; margin: -1px; padding: 0; outline: 0; -webkit-appearance: none; -moz-appearance: none; }`,

      'exports': {
        _updateRipple() {
            ripple.ripple(this.root.querySelector("[ref=circle]"), {
                disabled: this.isDisabled() || this.isReadonly()
            });
        },

        onMounted() {
            const circle = this.root.querySelector("[ref=circle]");
            const input = this.root.querySelector("input");
            const circleRipple = ripple.ripple(
                circle,
                {
                    centered: true,
                    unbounded: true,
                    radius: 16,
                    unboundedFocus: true,
                    focusTarget: input,
                    color: "currentColor"
                }
            );
            const refreshUI = () => {
                if (input.checked) {
                    this.root.classList.add("rm-checked");
                } else {
                    this.root.classList.remove("rm-checked");
                }
            };
            const refresh = () => {
                refreshUI();
                const name = this.getName();
                if (!name) {
                    return;
                }
                let parent = this.root;
                while (parent = parent.parentElement) {
                    if (parent.tagName === "FORM") {
                        break;
                    }
                }
                if (!parent) {
                    parent = document;
                }
                const selector = "input[type=radio][name=\"" + name + "\"]";
                const invertedMask = parent.querySelectorAll(":scope form " + selector);
                Array.prototype.forEach.call(
                    parent.querySelectorAll(selector),
                    input => {
                        if (Array.prototype.some.call(invertedMask, masked => {
                            return masked === input;
                        })) {
                            return;
                        }
                        input.dispatchEvent(new Event("unchecked"));
                    }
                );
            };
            input.addEventListener("change", refresh);
            input.addEventListener("unchecked", refreshUI);
            refresh();
            this._updateRipple();
        },

        onUpdated() {
            this._updateRipple();
        },

        getName() {
            const name = this.props.name;
            return typeof name === "string" && !name.match(/^\s*$/) ? name : null;
        },

        isChecked() {
            return this.props.checked != null && this.props.checked !== false;
        },

        isDisabled() {
            return this.props.disabled != null && this.props.disabled !== false;
        },

        isReadonly() {
            return this.props.readonly != null && this.props.readonly !== false;
        }
      },

      'template': function(
        template,
        expressionTypes,
        bindingTypes,
        getComponent
      ) {
        return template(
          '<label><input expr0="expr0" type="radio"/><div ref="circle"><div ref="border"></div><div ref="radio-circle"></div></div><div expr1="expr1" style="vertical-align: middle; display: inline-block;"> </div></label>',
          [
            {
              'redundantAttribute': 'expr0',
              'selector': '[expr0]',

              'expressions': [
                {
                  'type': expressionTypes.VALUE,

                  'evaluate': function(
                    scope
                  ) {
                    return scope.props.value;
                  }
                },
                {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'name',

                  'evaluate': function(
                    scope
                  ) {
                    return scope.props.name;
                  }
                },
                {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'checked',

                  'evaluate': function(
                    scope
                  ) {
                    return scope.isChecked();
                  }
                },
                {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'disabled',

                  'evaluate': function(
                    scope
                  ) {
                    return scope.isDisabled() || scope.isReadonly();
                  }
                }
              ]
            },
            {
              'redundantAttribute': 'expr1',
              'selector': '[expr1]',

              'expressions': [
                {
                  'type': expressionTypes.TEXT,
                  'childNodeIndex': 0,

                  'evaluate': function(
                    scope
                  ) {
                    return scope.props.label;
                  }
                }
              ]
            }
          ]
        );
      },

      'name': 'rm-radio'
    };

    return index;

})));
