(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@riot-material/ripple')) :
    typeof define === 'function' && define.amd ? define(['@riot-material/ripple'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.listItem = factory(global.riotMaterial.ripple)));
}(this, (function (ripple) { 'use strict';

    var index = {
      'css': `rm-list-item,[is="rm-list-item"]{ outline: none; display: block; padding: .5em 1em; line-height: 1.5em; cursor: pointer; user-select: none; } rm-list-item rm-icon,[is="rm-list-item"] rm-icon,rm-list-item .material-icons,[is="rm-list-item"] .material-icons{ margin-right: 16px; } rm-list-item rm-button,[is="rm-list-item"] rm-button{ margin: -8px; vertical-align: top; }`,

      'exports': {
        _hasSlot(name) {
            return this.slots.some(slot => slot.id === name);
        },

        _updateRipple() {
            ripple.ripple(this.root, { highlight: true, instantHighlight: true, disabled: this.isPassive() });
        },

        isPassive() {
            return this.props.passive != null && this.props.passive !== false;
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
                    return this.props.label == null ?
                        (this._hasSlot("default") ? this.root.innerText : "") :
                        this.props.label + ""
                    ;
                }
            });
            if (this.props.value != null && this.props.menuOption == null) {
                this.root.setAttribute("menu-option", "");
            }
            this._updateRipple();
        },

        onUpdated() {
            this._updateRipple();
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template(
          '<div style="display: table; width: 100%;"><div expr0="expr0" style="display: table-cell; width: 1px; padding-right: 16px; vertical-align: middle;"></div><div style="display: table-cell; max-width: 1px; padding: 0.25em 0; vertical-align: middle;"><div><span style="float: right;"><slot expr2="expr2" name="trailing"></slot></span><div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><template expr3="expr3"></template><slot expr4="expr4"></slot></div><div style="clear: both;"></div></div></div></div>',
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
              return scope._hasSlot("leading");
            },

            'redundantAttribute': 'expr0',
            'selector': '[expr0]',

            'template': template('<slot expr1="expr1" name="leading"></slot>', [{
              'type': bindingTypes.SLOT,
              'attributes': [],
              'name': 'leading',
              'redundantAttribute': 'expr1',
              'selector': '[expr1]'
            }])
          }, {
            'type': bindingTypes.SLOT,
            'attributes': [],
            'name': 'trailing',
            'redundantAttribute': 'expr2',
            'selector': '[expr2]'
          }, {
            'type': bindingTypes.IF,

            'evaluate': function(scope) {
              return !scope._hasSlot("default");
            },

            'redundantAttribute': 'expr3',
            'selector': '[expr3]',

            'template': template(' ', [{
              'expressions': [{
                'type': expressionTypes.TEXT,
                'childNodeIndex': 0,

                'evaluate': function(scope) {
                  return scope.props.label || "\xa0";
                }
              }]
            }])
          }, {
            'type': bindingTypes.SLOT,
            'attributes': [],
            'name': 'default',
            'redundantAttribute': 'expr4',
            'selector': '[expr4]'
          }]
        );
      },

      'name': 'rm-list-item'
    };

    return index;

})));
