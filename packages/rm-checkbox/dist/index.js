(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@riot-material/ripple'), require('what-input')) :
    typeof define === 'function' && define.amd ? define(['@riot-material/ripple', 'what-input'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.checkbox = factory(global.riotMaterial.ripple, global.whatInput)));
})(this, (function (ripple, whatInput) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var whatInput__default = /*#__PURE__*/_interopDefaultLegacy(whatInput);

    var RmCheckbox = {
      'css': `rm-checkbox,[is="rm-checkbox"]{ position: relative; font: message-box; font-size: 16px; cursor: pointer; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none; display: inline-block; margin-right: 8px; outline: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; vertical-align: top; } rm-checkbox[disabled],[is="rm-checkbox"][disabled],rm-checkbox[readonly],[is="rm-checkbox"][readonly]{ cursor: default; } rm-checkbox[disabled],[is="rm-checkbox"][disabled]{ opacity: 0.6; } rm-checkbox label,[is="rm-checkbox"] label{ cursor: inherit; display: inline-table; vertical-align: middle; } rm-checkbox [ref="box"],[is="rm-checkbox"] [ref="box"]{ height: 1em; width: 1em; position: relative; display: inline-block; vertical-align: middle; box-sizing: border-box; border-radius: 0.125em; background: transparent; margin: 0.25em .5em 0.25em 0; outline: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; color: rgb(0, 0, 255); color: rgb(var(--color-accent, 0, 0, 255)); } .rm-black-surface rm-checkbox [ref="box"],.rm-black-surface [is="rm-checkbox"] [ref="box"]{ color: rgb(30, 144, 255); color: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-checkbox [ref="box"],.rm-dark-surface [is="rm-checkbox"] [ref="box"]{ color: rgb(30, 144, 255); color: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-checkbox [ref="box"],.rm-light-surface [is="rm-checkbox"] [ref="box"]{ color: rgb(0, 0, 255); color: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-checkbox [ref="box"],.rm-white-surface [is="rm-checkbox"] [ref="box"]{ color: rgb(0, 0, 255); color: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-checkbox [ref="border"],[is="rm-checkbox"] [ref="border"]{ border: 0.125em solid rgba(0, 0, 0, .42); border: 0.125em solid rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)); height: 100%; width: 100%; box-sizing: border-box; border-radius: inherit; } .rm-black-surface rm-checkbox [ref="border"],.rm-black-surface [is="rm-checkbox"] [ref="border"]{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-checkbox [ref="border"],.rm-dark-surface [is="rm-checkbox"] [ref="border"]{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-checkbox [ref="border"],.rm-light-surface [is="rm-checkbox"] [ref="border"]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-checkbox [ref="border"],.rm-white-surface [is="rm-checkbox"] [ref="border"]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-checkbox [ref="check-box"],[is="rm-checkbox"] [ref="check-box"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent, 0, 0, 255)); position: absolute; top: 0; bottom: 0; right: 0; left: 0; text-align: center; transition: opacity linear 200ms; opacity: 0; border-radius: inherit; } .rm-black-surface rm-checkbox [ref="check-box"],.rm-black-surface [is="rm-checkbox"] [ref="check-box"]{ background: rgb(30, 144, 255); background: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-checkbox [ref="check-box"],.rm-dark-surface [is="rm-checkbox"] [ref="check-box"]{ background: rgb(30, 144, 255); background: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-checkbox [ref="check-box"],.rm-light-surface [is="rm-checkbox"] [ref="check-box"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-checkbox [ref="check-box"],.rm-white-surface [is="rm-checkbox"] [ref="check-box"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-checkbox [ref="check"],[is="rm-checkbox"] [ref="check"]{ width: 60%; height: 100%; box-sizing: border-box; border: solid rgb(255, 255, 255); border: solid rgb(var(--color-on-accent, 255, 255, 255)); border-width: 0 0.1875em 0.1875em 0; border: none; display: inline-block; transform: scale(.65) translateY(-0.125em) rotate(45deg); position: relative; } .rm-black-surface rm-checkbox [ref="check"],.rm-black-surface [is="rm-checkbox"] [ref="check"]{ border-color: rgb(255, 255, 255); border-color: rgb(var(--color-on-accent-on-black, 255, 255, 255)); } .rm-dark-surface rm-checkbox [ref="check"],.rm-dark-surface [is="rm-checkbox"] [ref="check"]{ border-color: rgb(255, 255, 255); border-color: rgb(var(--color-on-accent-on-dark, 255, 255, 255)); } .rm-light-surface rm-checkbox [ref="check"],.rm-light-surface [is="rm-checkbox"] [ref="check"]{ border-color: rgb(255, 255, 255); border-color: rgb(var(--color-on-accent-on-light, 255, 255, 255)); } .rm-white-surface rm-checkbox [ref="check"],.rm-white-surface [is="rm-checkbox"] [ref="check"]{ border-color: rgb(255, 255, 255); border-color: rgb(var(--color-on-accent-on-white, 255, 255, 255)); } rm-checkbox [ref="check"] div:first-child,[is="rm-checkbox"] [ref="check"] div:first-child{ right: 0; background: rgb(255, 255, 255); background: rgb(var(--color-on-accent, 255, 255, 255)); position: absolute; height: 0.1875em; left: 0; bottom: 0; transition: none; transform-origin: left center; transform: scaleX(0); } .rm-black-surface rm-checkbox [ref="check"] div:first-child,.rm-black-surface [is="rm-checkbox"] [ref="check"] div:first-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-black, 255, 255, 255)); } .rm-dark-surface rm-checkbox [ref="check"] div:first-child,.rm-dark-surface [is="rm-checkbox"] [ref="check"] div:first-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-dark, 255, 255, 255)); } .rm-light-surface rm-checkbox [ref="check"] div:first-child,.rm-light-surface [is="rm-checkbox"] [ref="check"] div:first-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-light, 255, 255, 255)); } .rm-white-surface rm-checkbox [ref="check"] div:first-child,.rm-white-surface [is="rm-checkbox"] [ref="check"] div:first-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-white, 255, 255, 255)); } rm-checkbox [ref="check"] div:last-child,[is="rm-checkbox"] [ref="check"] div:last-child{ top: 0; background: rgb(255, 255, 255); background: rgb(var(--color-on-accent, 255, 255, 255)); position: absolute; width: 0.1875em; bottom: 0.15em; right: 0; transform: scaleY(0); transition: none; transform-origin: bottom center; } .rm-black-surface rm-checkbox [ref="check"] div:last-child,.rm-black-surface [is="rm-checkbox"] [ref="check"] div:last-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-black, 255, 255, 255)); } .rm-dark-surface rm-checkbox [ref="check"] div:last-child,.rm-dark-surface [is="rm-checkbox"] [ref="check"] div:last-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-dark, 255, 255, 255)); } .rm-light-surface rm-checkbox [ref="check"] div:last-child,.rm-light-surface [is="rm-checkbox"] [ref="check"] div:last-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-light, 255, 255, 255)); } .rm-white-surface rm-checkbox [ref="check"] div:last-child,.rm-white-surface [is="rm-checkbox"] [ref="check"] div:last-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-white, 255, 255, 255)); } rm-checkbox.rm-checked [ref="check"] div:first-child,[is="rm-checkbox"].rm-checked [ref="check"] div:first-child{ transform: scaleX(1); transition: transform 100ms linear; } rm-checkbox.rm-checked [ref="check"] div:last-child,[is="rm-checkbox"].rm-checked [ref="check"] div:last-child{ transform: scaleY(1); transition: transform 100ms linear 100ms; } rm-checkbox.rm-checked [ref="check-box"],[is="rm-checkbox"].rm-checked [ref="check-box"]{ opacity: 1; } rm-checkbox input,[is="rm-checkbox"] input{ border: 0; position: absolute; overflow: hidden; clip: rect(0 0 0 0); height: 1px; width: 1px; margin: -1px; padding: 0; outline: 0; -webkit-appearance: none; -moz-appearance: none; }`,

      'exports': {
        _updateRipple() {
            const box = this.root.querySelector("[ref=box]");
            ripple.ripple(box, { disabled: this.isDisabled() || this.isReadonly() });
        },

        onMounted() {
            const input = this.root.querySelector("input");
            const box = this.root.querySelector("[ref=box]");
            const boxRipple = ripple.ripple(
                box,
                {
                    centered: true,
                    unbounded: true,
                    radius: 16,
                    unboundedFocus: true,
                    focusTarget: input,
                    color: "currentColor"
                }
            );
            let refresh = (event) => {
                if (input.checked) {
                    this.root.classList.add("rm-checked");
                } else {
                    this.root.classList.remove("rm-checked");
                }
            };
            input.addEventListener("change", () => {
                if (whatInput__default["default"]?.ask?.() === "keyboard") {
                    boxRipple.start().end();
                }
                refresh();
            });
            Object.defineProperty(this.root, "checked", {
                get() {
                    return input.checked;
                },
                set(checked) {
                    input.checked = checked;
                    refresh();
                }
            });
            refresh();
            this._updateRipple();
        },

        onUpdated() {
            this._updateRipple();
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
          '<label><input expr0="expr0" type="checkbox" tabindex="0"/><div ref="box"><div ref="border"></div><div ref="check-box"><div ref="check"><div></div><div></div></div></div></div><div expr1="expr1" style="vertical-align: middle; display: table-cell;"> </div></label>',
          [
            {
              'redundantAttribute': 'expr0',
              'selector': '[expr0]',

              'expressions': [
                {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'checked',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope.isChecked();
                  }
                },
                {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'name',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope.props.name;
                  }
                },
                {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'disabled',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope.isDisabled() || _scope.isReadonly();
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
                    _scope
                  ) {
                    return _scope.props.label;
                  }
                }
              ]
            }
          ]
        );
      },

      'name': 'rm-checkbox'
    };

    return RmCheckbox;

}));
