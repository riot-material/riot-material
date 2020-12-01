(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@riot-material/ripple')) :
    typeof define === 'function' && define.amd ? define(['@riot-material/ripple'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.listItem = factory(global.riotMaterial.ripple)));
}(this, (function (ripple) { 'use strict';

    var index = {
      'css': `rm-list-item,[is="rm-list-item"]{ display: block; padding: .5em .75em; line-height: 1.5em; } rm-list-item[short-inset],[is="rm-list-item"][short-inset]{ padding-left: 1.5em; }`,

      'exports': {
        _updateRipple() {
            if (this.root.value != null) {
                ripple.ripple(this.root, { highlight: true });
            } else {
                ripple.ripple(this.root, { disabled: true, highlight: false });
            }
        },

        onMounted() {
            let value = undefined;
            Object.defineProperty(this.root, "value", {
                get: () => {
                    if (value === undefined) {
                        return this.props.value == null ? null : this.props.value + "";
                    }
                    return value;
                },
                set(v) {
                    value = v == null ? null : this.props.value + "";
                }
            });
            Object.defineProperty(this.root, "label", {
                get: () => {
                    return this.props.label == null ? this.root.innerText : this.props.label + "";
                }
            });
            this._updateRipple();
        },

        onUpdated() {
            this._updateRipple();
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template('<slot expr0="expr0"></slot>', [{
          'type': bindingTypes.SLOT,
          'attributes': [],
          'name': 'default',
          'redundantAttribute': 'expr0',
          'selector': '[expr0]'
        }]);
      },

      'name': 'rm-list-item'
    };

    return index;

})));
