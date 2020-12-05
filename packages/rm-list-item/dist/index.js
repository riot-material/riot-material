(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@riot-material/ripple')) :
    typeof define === 'function' && define.amd ? define(['@riot-material/ripple'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.listItem = factory(global.riotMaterial.ripple)));
}(this, (function (ripple) { 'use strict';

    var index = {
      'css': `rm-list-item,[is="rm-list-item"]{ outline: none; display: block; padding: .5em 1em; line-height: 1.5em; cursor: pointer; user-select: none; } rm-list-item[short-inset],[is="rm-list-item"][short-inset]{ padding-left: 1.5em; } rm-list-item rm-icon,[is="rm-list-item"] rm-icon,rm-list-item .material-icons,[is="rm-list-item"] .material-icons{ margin-right: 16px; } rm-list-item rm-button,[is="rm-list-item"] rm-button{ margin: -8px; vertical-align: top; }`,

      'exports': {
        _hasLeadingSlot() {
            return this.slots.some(slot => slot.id === "leading");
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
            if (this.props.value != null && this.props.menuOption == null) {
                this.root.setAttribute("menu-option", "");
            }
            ripple.ripple(this.root, { highlight: true, instantHighlight: true });
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template(
          '<div style="display: table; width: 100%;"><div expr32="expr32" style="display: table-cell; width: 1px; padding-right: 16px; vertical-align: middle;"></div><div style="display: table-cell; max-width: 1px; padding: 0.25em 0; vertical-align: middle;"><div><span style="float: right;"><slot expr34="expr34" name="trailing"></slot></span><div expr35="expr35" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"> </div><div style="clear: both;"></div></div></div></div>',
          [{
            'expressions': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'tabindex',

              'evaluate': function(scope) {
                return '0';
              }
            }]
          }, {
            'type': bindingTypes.IF,

            'evaluate': function(scope) {
              return scope._hasLeadingSlot();
            },

            'redundantAttribute': 'expr32',
            'selector': '[expr32]',

            'template': template('<slot expr33="expr33" name="leading"></slot>', [{
              'type': bindingTypes.SLOT,
              'attributes': [],
              'name': 'leading',
              'redundantAttribute': 'expr33',
              'selector': '[expr33]'
            }])
          }, {
            'type': bindingTypes.SLOT,
            'attributes': [],
            'name': 'trailing',
            'redundantAttribute': 'expr34',
            'selector': '[expr34]'
          }, {
            'redundantAttribute': 'expr35',
            'selector': '[expr35]',

            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.props.label;
              }
            }]
          }]
        );
      },

      'name': 'rm-list-item'
    };

    return index;

})));
