import TextfieldContainerComponent from '@riot-material/rm-textfield-container';

const VALUE = Symbol("value");
const IS_MOUNTED = Symbol("is-mounted");

var index = {
  'css': `rm-textfield,[is="rm-textfield"]{ cursor: text; } rm-textfield[disabled],[is="rm-textfield"][disabled],rm-textfield[readonly],[is="rm-textfield"][readonly],rm-textfield[disabled] input,[is="rm-textfield"][disabled] input,rm-textfield[readonly] input,[is="rm-textfield"][readonly] input{ cursor: default; } rm-textfield .rm-textfield--input,[is="rm-textfield"] .rm-textfield--input{ display: inline-block; font: inherit; padding: 0; font-size: inherit; line-height: inherit; border: 0; background: none; outline: none; width: 100%; color: currentColor; opacity: 0; transition: opacity linear 150ms; } rm-textfield .rm-textfield--input-visible,[is="rm-textfield"] .rm-textfield--input-visible{ opacity: 1; } rm-textfield .rm-textfield--input-wrap,[is="rm-textfield"] .rm-textfield--input-wrap{ height: 1.25em; overflow: hidden; display: inline-block; vertical-align: top; width: 100px; } rm-textfield[full-width] .rm-textfield--input-wrap,[is="rm-textfield"][full-width] .rm-textfield--input-wrap{ width: 100%; }`,

  'exports': {
    [IS_MOUNTED]: false,
    [VALUE]: null,

    onBeforeMount() {
        Object.defineProperty(this.root, "value", {
            get: () => {
                if (!this[IS_MOUNTED]) {
                    return this.props.value || "";
                }
                const tmpValue = this[VALUE];
                if (tmpValue != null) {
                    return tmpValue;
                }
                const input = this._input;
                const value = input ? input.value : this.props.value || "";
                return value;
            },
            set: value => {
                const input = this._input;
                if (input == null) {
                    return;
                }
                input.value = value;
                this.update();
            }
        });
        let input = null;
        Object.defineProperty(this, "_input", {
            get: () => {
                if (input == null || !input.isConnected) {
                    input = this.root.querySelector("input.rm-textfield--input");
                }
                return input;
            }
        });
    },

    _onfocus: null,
    _onblur: null,

    onMounted() {
        const input = this._input;
        window.addEventListener("focus", this._onfocus = event => {
            if (event.target !== input) {
                return;
            }
            event.stopImmediatePropagation();
            this.update({ focused: true });
            this.root.dispatchEvent(new FocusEvent("focus", { bubbles: false, cancelable: false }));
        }, true);
        window.addEventListener("blur", this._onblur = event => {
            if (event.target !== input) {
                return;
            }
            event.stopImmediatePropagation();
            this.update({ focused: false });
            this.root.dispatchEvent(new FocusEvent("blur", { bubbles: false, cancelable: false }));
        }, true);

        this.root.focus = () => input.focus();
        this.root.blur = () => input.blur();

        this[IS_MOUNTED] = true;
    },

    onBeforeUnmount() {
        window.removeEventListener("focus", this._onfocus, true);
        window.removeEventListener("blur", this._onblur, true);
    },

    onBeforeUpdate() {
        this[VALUE] = this.root.value;
    },

    onUpdated() {
        this._input.value = this[VALUE];
        this[VALUE] = null;
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

    getType() {
        if (this.isReadonly() || this.isDisabled()) {
            return "hidden";
        }
        switch (this.props.type) {
            case "email": {
                return "email";
            }
            case "number": {
                return "number";
            }
            case "password": {
                return "password";
            }
            case "search": {
                return "search";
            }
            case "tel": {
                return "tel";
            }
            case "url": {
                return "url";
            }
            default: {
                return "text";
            }
        }
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

    isReadonly() {
        return this.props.readonly != null && this.props.readonly !== false;
    },

    clear() {
        this.root.value = "";
        this.update();
    },

    components: {
        "rm-textfield-container": TextfieldContainerComponent
    }
  },

  'template': function(
    template,
    expressionTypes,
    bindingTypes,
    getComponent
  ) {
    return template(
      '<rm-textfield-container expr0="expr0"></rm-textfield-container>',
      [
        {
          'type': bindingTypes.TAG,
          'getComponent': getComponent,

          'evaluate': function(
            _scope
          ) {
            return 'rm-textfield-container';
          },

          'slots': [
            {
              'id': 'input',
              'html': '<span class="rm-textfield--input-wrap" slot="input"><input expr1="expr1" size="1"/><template expr2="expr2"></template></span>',

              'bindings': [
                {
                  'redundantAttribute': 'expr1',
                  'selector': '[expr1]',

                  'expressions': [
                    {
                      'type': expressionTypes.ATTRIBUTE,
                      'name': 'class',

                      'evaluate': function(
                        _scope
                      ) {
                        return [
                          'rm-textfield--input',
                          _scope.state.focused || _scope.root.value ? ' rm-textfield--input-visible' : ''
                        ].join(
                          ''
                        );
                      }
                    },
                    {
                      'type': expressionTypes.EVENT,
                      'name': 'oninput',

                      'evaluate': function(
                        _scope
                      ) {
                        return _scope._oninputinput;
                      }
                    },
                    {
                      'type': expressionTypes.ATTRIBUTE,
                      'name': 'type',

                      'evaluate': function(
                        _scope
                      ) {
                        return _scope.getType();
                      }
                    },
                    {
                      'type': expressionTypes.VALUE,

                      'evaluate': function(
                        _scope
                      ) {
                        return _scope.root.value;
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
                      'name': 'placeholder',

                      'evaluate': function(
                        _scope
                      ) {
                        return _scope.props.placeholder;
                      }
                    }
                  ]
                },
                {
                  'type': bindingTypes.IF,

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope.isDisabled() || _scope.isReadonly();
                  },

                  'redundantAttribute': 'expr2',
                  'selector': '[expr2]',

                  'template': template(
                    ' ',
                    [
                      {
                        'expressions': [
                          {
                            'type': expressionTypes.TEXT,
                            'childNodeIndex': 0,

                            'evaluate': function(
                              _scope
                            ) {
                              return _scope.root.value;
                            }
                          }
                        ]
                      }
                    ]
                  )
                }
              ]
            },
            {
              'id': 'leading',
              'html': '<slot expr3="expr3" name="leading" slot="leading"></slot>',

              'bindings': [
                {
                  'type': bindingTypes.SLOT,
                  'attributes': [],
                  'name': 'leading',
                  'redundantAttribute': 'expr3',
                  'selector': '[expr3]'
                }
              ]
            },
            {
              'id': 'trailing',
              'html': '<span style="white-space: nowrap;" slot="trailing"><rm-button expr4="expr4" variant="icon" dense></rm-button><slot expr5="expr5" name="trailing"></slot></span>',

              'bindings': [
                {
                  'type': bindingTypes.IF,

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope.isClearable() && _scope.root.value;
                  },

                  'redundantAttribute': 'expr4',
                  'selector': '[expr4]',

                  'template': template(
                    null,
                    [
                      {
                        'type': bindingTypes.TAG,
                        'getComponent': getComponent,

                        'evaluate': function(
                          _scope
                        ) {
                          return 'rm-button';
                        },

                        'slots': [
                          {
                            'id': 'default',
                            'html': 'clear',
                            'bindings': []
                          }
                        ],

                        'attributes': [
                          {
                            'type': expressionTypes.EVENT,
                            'name': 'onclick',

                            'evaluate': function(
                              _scope
                            ) {
                              return _scope.clear;
                            }
                          },
                          {
                            'type': expressionTypes.ATTRIBUTE,
                            'name': 'tabindex',

                            'evaluate': function(
                              _scope
                            ) {
                              return _scope.isDisabled() ? "-1" : null;
                            }
                          }
                        ]
                      }
                    ]
                  )
                },
                {
                  'type': bindingTypes.SLOT,
                  'attributes': [],
                  'name': 'trailing',
                  'redundantAttribute': 'expr5',
                  'selector': '[expr5]'
                }
              ]
            }
          ],

          'attributes': [
            {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'variant',

              'evaluate': function(
                _scope
              ) {
                return _scope.props.variant;
              }
            },
            {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'label',

              'evaluate': function(
                _scope
              ) {
                return _scope.props.label;
              }
            },
            {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'full-width',

              'evaluate': function(
                _scope
              ) {
                return _scope.isFullWidth();
              }
            },
            {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'disabled',

              'evaluate': function(
                _scope
              ) {
                return _scope.isDisabled();
              }
            },
            {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'class',

              'evaluate': function(
                _scope
              ) {
                return _scope._getTextfieldContainerClass();
              }
            },
            {
              'type': expressionTypes.EVENT,
              'name': 'onmousedown',

              'evaluate': function(
                _scope
              ) {
                return _scope._oncontainermousedown;
              }
            }
          ],

          'redundantAttribute': 'expr0',
          'selector': '[expr0]'
        }
      ]
    );
  },

  'name': 'rm-textfield'
};

export default index;
