(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@riot-material/rm-textfield-container')) :
    typeof define === 'function' && define.amd ? define(['@riot-material/rm-textfield-container'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.textfield = factory(global.riotMaterial.components.textfieldContainer)));
}(this, (function (TextfieldContainerComponent) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var TextfieldContainerComponent__default = /*#__PURE__*/_interopDefaultLegacy(TextfieldContainerComponent);

    var index = {
      'css': `rm-textfield,[is="rm-textfield"]{ cursor: text; } rm-textfield[disabled],[is="rm-textfield"][disabled]{ cursor: default; } rm-textfield input,[is="rm-textfield"] input{ padding: 0; font-size: inherit; line-height: inherit; border: 0; background: none; outline: none; width: 100%; color: currentColor; }`,

      'exports': {
        _input: null,

        onBeforeMount() {
            Object.defineProperty(this.root, "value", {
                get: () => {
                    return this._input ? this._input.value : this.props.value || "";
                },
                set: value => {
                    this._input.value = value;
                }
            });
        },

        onMounted() {
            this._input = this.root.querySelector("input");
        },

        _oncontainermousedown(event) {
            if (this.props.disabled) {
                return;
            }
            const input = this.root.querySelector("input");
            if (document.activeElement !== input){
                event.preventDefault();
                input.focus();
            }
        },

        _oninputfocus() {
            this.update({ focused: true });
        },

        _oninputblur() {
            this.update({ focused: false });
        },

        _oninputinput() {
            this.update();
        },

        _getTextfieldContainerClass() {
            const names = {};
            if (this.state.focused) {
                names["rm-focused"] = names["rm-label-should-float"] = true;
            }
            if (this.root.value) {
                names["rm-label-should-float"] = true;
            }
            return Object.keys(names).join(" ");
        },

        isClearable() {
            return this.props.clearable != null && this.props.clearable !== false;
        },

        isDisabled() {
            return this.props.disabled != null && this.props.disabled !== false;
        },

        isFullWidth() {
            return this.props.fullWidth != null && this.props.fullWidth !== false;
        },

        clear() {
            this.root.value = "";
            this.update();
        },

        components: {
            "rm-textfield-container": TextfieldContainerComponent__default['default']
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template('<rm-textfield-container expr20="expr20"></rm-textfield-container>', [{
          'type': bindingTypes.TAG,
          'getComponent': getComponent,

          'evaluate': function(scope) {
            return 'rm-textfield-container';
          },

          'slots': [{
            'id': 'input',
            'html': '<input expr21="expr21" slot="input"/>',

            'bindings': [{
              'redundantAttribute': 'expr21',
              'selector': '[expr21]',

              'expressions': [{
                'type': expressionTypes.EVENT,
                'name': 'onfocus',

                'evaluate': function(scope) {
                  return scope._oninputfocus;
                }
              }, {
                'type': expressionTypes.EVENT,
                'name': 'onblur',

                'evaluate': function(scope) {
                  return scope._oninputblur;
                }
              }, {
                'type': expressionTypes.EVENT,
                'name': 'oninput',

                'evaluate': function(scope) {
                  return scope._oninputinput;
                }
              }, {
                'type': expressionTypes.VALUE,

                'evaluate': function(scope) {
                  return scope.props.value;
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'name',

                'evaluate': function(scope) {
                  return scope.props.name;
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'disabled',

                'evaluate': function(scope) {
                  return scope.isDisabled();
                }
              }]
            }]
          }, {
            'id': 'leading',
            'html': '<slot expr22="expr22" name="leading" slot="leading"></slot>',

            'bindings': [{
              'type': bindingTypes.SLOT,
              'attributes': [],
              'name': 'leading',
              'redundantAttribute': 'expr22',
              'selector': '[expr22]'
            }]
          }, {
            'id': 'trailing',
            'html': '<span style="white-space: nowrap;" slot="trailing"><rm-button expr23="expr23" variant="icon" dense></rm-button><slot expr24="expr24" name="trailing"></slot></span>',

            'bindings': [{
              'type': bindingTypes.IF,

              'evaluate': function(scope) {
                return scope.isClearable() && scope.root.value;
              },

              'redundantAttribute': 'expr23',
              'selector': '[expr23]',

              'template': template(null, [{
                'type': bindingTypes.TAG,
                'getComponent': getComponent,

                'evaluate': function(scope) {
                  return 'rm-button';
                },

                'slots': [{
                  'id': 'default',
                  'html': 'clear',
                  'bindings': []
                }],

                'attributes': [{
                  'type': expressionTypes.EVENT,
                  'name': 'onclick',

                  'evaluate': function(scope) {
                    return scope.clear;
                  }
                }, {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'tabindex',

                  'evaluate': function(scope) {
                    return scope.isDisabled() ? "-1" : null;
                  }
                }]
              }])
            }, {
              'type': bindingTypes.SLOT,
              'attributes': [],
              'name': 'trailing',
              'redundantAttribute': 'expr24',
              'selector': '[expr24]'
            }]
          }],

          'attributes': [{
            'type': expressionTypes.ATTRIBUTE,
            'name': 'variant',

            'evaluate': function(scope) {
              return scope.props.variant;
            }
          }, {
            'type': expressionTypes.ATTRIBUTE,
            'name': 'label',

            'evaluate': function(scope) {
              return scope.props.label;
            }
          }, {
            'type': expressionTypes.ATTRIBUTE,
            'name': 'full-width',

            'evaluate': function(scope) {
              return scope.isFullWidth();
            }
          }, {
            'type': expressionTypes.ATTRIBUTE,
            'name': 'disabled',

            'evaluate': function(scope) {
              return scope.isDisabled();
            }
          }, {
            'type': expressionTypes.ATTRIBUTE,
            'name': 'class',

            'evaluate': function(scope) {
              return scope._getTextfieldContainerComponentClass();
            }
          }, {
            'type': expressionTypes.EVENT,
            'name': 'onmousedown',

            'evaluate': function(scope) {
              return scope._oncontainermousedown;
            }
          }],

          'redundantAttribute': 'expr20',
          'selector': '[expr20]'
        }]);
      },

      'name': 'rm-textfield'
    };

    return index;

})));
