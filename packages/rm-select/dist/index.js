(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@riot-material/new-props-wrapper'), require('@riot-material/rm-textfield-container'), require('@riot-material/rm-button'), require('@riot-material/rm-menu'), require('@riot-material/rm-list-item'), require('@riot-material/before-focus-listener'), require('@riot-material/ripple')) :
    typeof define === 'function' && define.amd ? define(['@riot-material/new-props-wrapper', '@riot-material/rm-textfield-container', '@riot-material/rm-button', '@riot-material/rm-menu', '@riot-material/rm-list-item', '@riot-material/before-focus-listener', '@riot-material/ripple'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.select = factory(global.riotMaterial.newPropsWrapper, global.riotMaterial.components.textfieldContainer, global.riotMaterial.components.button, global.riotMaterial.components.menu, global.riotMaterial.components.listItem, global.riotMaterial.beforeFocusListener, global.riotMaterial.ripple)));
})(this, (function (newPropsWrapper, TextfieldContainerComponent, ButtonComponent, MenuComponent, ListItemComponent, beforeFocusListener, ripple) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var newPropsWrapper__default = /*#__PURE__*/_interopDefaultLegacy(newPropsWrapper);
    var TextfieldContainerComponent__default = /*#__PURE__*/_interopDefaultLegacy(TextfieldContainerComponent);
    var ButtonComponent__default = /*#__PURE__*/_interopDefaultLegacy(ButtonComponent);
    var MenuComponent__default = /*#__PURE__*/_interopDefaultLegacy(MenuComponent);
    var ListItemComponent__default = /*#__PURE__*/_interopDefaultLegacy(ListItemComponent);

    const FILTER = ListItemComponent__default["default"].exports._filterSymbol;

    const blockedInputs = [];
    window.addEventListener("change", event => {
        if (blockedInputs.some(input => event.target === input)) {
            event.stopImmediatePropagation();
        }
    }, true);

    var RmSelect = {
      'css': `rm-select,[is="rm-select"]{ position: relative; } rm-select[filterable],[is="rm-select"][filterable]{ cursor: text; } rm-select[disabled],[is="rm-select"][disabled],rm-select[readonly],[is="rm-select"][readonly]{ cursor: default; } rm-select .rm-select--arrow,[is="rm-select"] .rm-select--arrow{ transition: transform ease-in-out 150ms; transform: rotate(0deg); } rm-select .rm-select--arrow.rm-select--arrow-rotated,[is="rm-select"] .rm-select--arrow.rm-select--arrow-rotated{ transform: rotate(180deg); } rm-select .rm-select--input,[is="rm-select"] .rm-select--input{ display: inline-block; font: inherit; padding: 0.625em 0; margin: -0.625em 0; font-size: inherit; line-height: inherit; border: 0; background: none; outline: none; width: 0px; height: 0px; color: currentColor; opacity: 0; cursor: default; position: absolute; left: -1px; top: -1px; } rm-select[variant="filled"] .rm-textfield--input,[is="rm-select"][variant="filled"] .rm-textfield--input,rm-select[variant="outlined"] .rm-textfield--input,[is="rm-select"][variant="outlined"] .rm-textfield--input{ padding: 0.875em 0.75em; margin: -0.875em -0.75em; } rm-select[variant="filled"] .rm-label-should-float .rm-textfield--input,[is="rm-select"][variant="filled"] .rm-label-should-float .rm-textfield--input{ padding: 1.25em 0.75em 0.5em; margin: -1.25em -0.75em -0.5em; } rm-select[filterable] .rm-select--input,[is="rm-select"][filterable] .rm-select--input{ position: static; width: 100%; height: auto; opacity: 1; cursor: text; } rm-select .rm-select--input-wrap,[is="rm-select"] .rm-select--input-wrap{ position: relative; height: 1.25em; overflow: hidden; display: inline-block; vertical-align: top; width: 100px; } rm-select[full-width] .rm-select--input-wrap,[is="rm-select"][full-width] .rm-select--input-wrap{ width: 100%; }`,

      'exports': newPropsWrapper__default["default"](
        {
            _mounted: false,
            _menu: null,
            _getSlotProps() {
                return {
                    [FILTER]: this.state.filtering ? (item) => {
                        const filter = this.getFilter()?.toLowerCase();
                        return (
                            !filter ||
                            (
                                item.getLabel().toLowerCase()
                            ).indexOf(filter) >= 0
                        );
                    } : null
                };
            },
            _input: null,
            _onmenuselected(event) {
                this._lastSelectedOption = event.target;
                this.update({ refreshLabel: true, menuopened: false });
                this.dispatchMenuEvent(event);
            },
            onBeforeMount() {
                this.state.helperText = this.props.helperText;

                Object.defineProperties(this.root, {
                    value: {
                        get: () => {
                            const selected = this.getSelected().map(option => option.value);
                            return this.isMultiple() ? selected : selected[0] || "";
                        },
                        set: value => {
                            let option = null;
                            if (this.getOptions().some(opt => {
                                if (opt.value == value) {
                                    option = opt;
                                    return true;
                                }
                                return false;
                            })) {
                                this.select(option);
                            }
                        }
                    },
                    label: {
                        get: () => {
                            return this._input ? this._input.label : "";
                        }
                    },
                    selectedIndex: {
                        get: () => this.getSelectedIndex()
                    },
                    options: {
                        get: () => this.getOptions()
                    },
                    selectedOptions: {
                        get: () => this.getSelected()
                    },
                    menu: {
                        get: () => this._selectMenu
                    },
                    helperText: {
                        get: () => this.state.helperText,
                        set: (value) => {
                            this.state.helperText = (
                                this.root.querySelector(
                                    "rm-textfield-container"
                                ).helperText
                            ) = value;
                        }
                    }
                });
            },
            _onclickFirstChild: null,
            _onclickArrow: null,
            onMounted() {
                let _lastSelectedOption = null;
                Object.defineProperty(this, "_lastSelectedOption", {
                    set(option) {
                        if (option === this._lastSelectedOption) {
                            return;
                        }
                        option.selected = true;
                        // const newOptionComponent = option[__r.globals.DOM_COMPONENT_INSTANCE_PROPERTY];
                        // if (newOptionComponent != null) {
                        //     newOptionComponent.update({ selected: true });
                        // }
                        if (_lastSelectedOption != null && !this.isMultiple()) {
                            _lastSelectedOption.selected = false;
                            // const lastOptionComponent = _lastSelectedOption[__r.globals.DOM_COMPONENT_INSTANCE_PROPERTY];
                            // if (lastOptionComponent != null) {
                            //     lastOptionComponent.update({ selected: false });
                            // }
                        }
                        _lastSelectedOption = option;
                    },
                    get() {
                        return _lastSelectedOption;
                    }
                });

                const input = this._input = this.root.querySelector("input");
                
                Object.defineProperties(input, {
                    value: {
                        get: () => this.root.value,
                        set: value => { this.root.value = value; }
                    },
                    label: {
                        get: () => this.getLabel()
                    },
                    filter: {
                        get: () => this.getFilter()
                    },
                    selectedIndex: {
                        get: () => this.getSelectedIndex()
                    },
                    options: {
                        get: () => this.getOptions()
                    },
                    selectedOptions: {
                        get: () => this.getSelected()
                    },
                    menu: {
                        get: () => this.root.menu
                    }
                });

                this.root.children[1].addEventListener("keydown", event => {
                    if (!this.state.menuopened && [ " " ].some(key => event.key === key)) {
                        this.update({ menuopened: true });
                        event.stopImmediatePropagation();
                    } else if (this.state.menuopened && [ "Escape" ].some(key => event.key === key)) {
                        this.update({ menuopened: false });
                        event.stopImmediatePropagation();
                    } else if (!this.state.menuopened) {
                        switch (event.key) {
                            case "ArrowDown": {
                                if (this.isMultiple() || this.isFilterable()) {
                                    this.update({ menuopened: true });
                                } else {
                                    const options = this.getOptions();
                                    if (options.length !== 0) {
                                        let index = -1;
                                        if (options.some((option, i) => {
                                            if (option === this._lastSelectedOption) {
                                                index = i;
                                                return true;
                                            }
                                            return false;
                                        })) {
                                            if (++index < options.length) {
                                                this._lastSelectedOption = options[index];
                                                this.update();
                                            }
                                        }
                                    }
                                }
                                event.stopImmediatePropagation();
                                event.preventDefault();
                                break;
                            }
                            case "ArrowUp": {
                                if (this.isMultiple() || this.isFilterable()) {
                                    this.update({ menuopened: true });
                                } else {
                                    const options = this.getOptions();
                                    if (options.length !== 0) {
                                        let index = -1;
                                        if (options.some((option, i) => {
                                            if (option === this._lastSelectedOption) {
                                                index = i;
                                                return true;
                                            }
                                            return false;
                                        })) {
                                            if (--index >= 0) {
                                                this._lastSelectedOption = options[index];
                                                this.update();
                                            }
                                        }
                                    }
                                }
                                event.stopImmediatePropagation();
                                event.preventDefault();
                                break;
                            }
                        }
                    }
                });
                this._selectMenu = this.root.querySelector("[ref='rm-select-menu']");
                (this._menu = this.root.firstElementChild)._bindTo(this.root.children[1]);

                blockedInputs.push(input);

                beforeFocusListener.addListener(this.root.firstElementChild, this._onclickFirstChild = event => {
                    if (this.isDisabled() || this.isReadonly()) {
                        return;
                    }
                    if (document.activeElement !== input) {
                        if (!this.state.menuopened) {
                            this.update({ menuopened: true });
                        }
                        event.preventDefault();
                        input.focus();
                    } else if (!this.isFilterable()) {
                        this.update({ menuopened: !this.state.menuopened });
                    }
                });
                beforeFocusListener.addListener(this.root.querySelector(".rm-select--arrow"), this._onclickArrow = event => {
                    if (this.isDisabled() || this.isReadonly()) {
                        return;
                    }
                    if (this.isFilterable()) {
                        this.update({ menuopened: !this.state.menuopened });
                    }
                });

                this.root.focus = () => input.focus();
                this.root.blur = () => input.blur();

                this._mounted = true;

                const options = this.getOptions();
                if (options.length) {
                    options.forEach(option => {
                        if (option.selected) {
                            this._lastSelectedOption = option;
                        }
                    });

                    if (this._lastSelectedOption == null) {
                        this._lastSelectedOption = options[0];
                    }

                    this._lastSelected = this.getSelected();
                    HTMLInputElement.prototype.__lookupSetter__("value").call(input, this.getLabel());
                    this.update();
                } else {
                    this._lastSelected = [];
                }

                this._manipulate();

                this._finalizeInputProperties();
            },
            onBeforeUnmount() {
                this._restoreManipulated();
                let index;
                if (blockedInputs.some((input, i) => {
                    index = i;
                    return this._input === input;
                })) {
                    blockedInputs.splice(index, 1);
                }
                beforeFocusListener.removeListener(this.root.firstElementChild, this._onclickFirstChild);
                beforeFocusListener.removeListener(this.root.querySelector(".rm-select--arrow"), this._onclickArrow);
            },
            _manipulated: [],
            _manipulate() {
                this._selectMenu.querySelectorAll("option").forEach(option => {
                    const container = document.createElement("div");
                    option.replaceWith(container);
                    option.setAttribute("menu-option", "");
                    option.style.padding = "8px 12px";
                    container.appendChild(option);
                    ripple.ripple(container, { highlight: true });
                    this._manipulated.push(option);
                });
            },
            _restoreManipulated() {
                while (this._manipulated.length > 0) {
                    const option = this._manipulated.pop();
                    const container = option.parentElement;
                    container.removeChild(option);
                    container.replaceWith(option);
                }
            },
            _lastSelected: null,
            onBeforeUpdate(_, __, newProps) {
                if ("helperText" in newProps) {
                    this.state.helperText = newProps.helperText;
                }
                // this._restoreManipulated();
            },
            onUpdated() {
                // this._manipulate();
                if (this.state.refreshLabel || document.activeElement !== this._input) {
                    HTMLInputElement.prototype.__lookupSetter__("value").call(this._input, this.getLabel());
                    delete this.state.refreshLabel;
                    delete this.state.filtering;
                }
                const selected = this.getSelected();
                if (selected.some((option, i) => option !== this._lastSelected[i])) {
                    this._lastSelected = selected;
                    this.root.dispatchEvent(new Event("change", { bubbles: true }));
                }
            },
            _oninputfocus() {
                this._labelWhenOnFocus = this.root.label;
                this.update({ focused: true }); // , menuopened: true });
            },
            _oninputblur() {
                this.update({ focused: false, menuopened: false, refreshLabel: true });
            },
            _oninputinput() {
                if (!this.isFilterable()) {
                    return;
                }

                this.state.filtering = true;
                this.update({ menuopened: true });
            },
            _getClassNames() {
                const classNames = {};
                if (this.state.focused) {
                    classNames["rm-focused"] = true;
                    if (this.isFilterable()) {
                        classNames["rm-label-should-float"] = true;
                    }
                }
                const label = this.getLabel();
                if (label !== "") {
                    classNames["rm-label-should-float"] = true;
                }
                return Object.keys(classNames).join(" ");
            },
            clear() {
                this.update({ menuopened: true, refreshLabel: true });
            },
            getSelected() {
                return this.getOptions().filter(option => option.selected && !option.disabled);
            },
            getSelectedIndex() {
                let index = -1;
                this.getOptions().some((option, i) => {
                    if (option.selected) {
                        index = i;
                        return true;
                    }
                    return false;
                });
                return index;
            },
            getOptions() {
                return this._menu != null ? this._menu.options : [];
            },
            getLabel() {
                return this.getSelected().map(option => option.label).join(", ");
            },
            getVariant() {
                switch (this.props.variant) {
                    case "outlined": return "outlined";
                    case "filled": return "filled";
                    default: return "flat";
                }
            },
            isFilterable() {
                return this.props.filterable != null && this.props.filterable !== "false" && this.props.filterable !== false;
            },
            isMultiple() {
                return false;
            },
            isClearable() {
                return this.props.clearable != null && this.props.clearable !== false;
            },
            isDisabled() {
                return this.props.disabled != null && this.props.disabled !== false;
            },
            isReadonly() {
                return this.props.readonly != null && this.props.readonly !== false;
            },
            isFullWidth() {
                return this.props.fullWidth != null && this.props.fullWidth !== false;
            },
            select(option) {
                if (option.selected) {
                    return;
                }
                if (!this.isMultiple()) {
                    const selected = this.getSelected()[0];
                    if (selected) {
                        selected.selected = false;
                    }
                }
                option.selected = true;
                this._lastSelectedOption = option;
                if (this._mounted) {
                    this.update({ menuopened: this.isMultiple() ? this.state.menuopened : false, refreshLabel: true });
                }
                HTMLInputElement.prototype.__lookupSetter__("value").call(this._input, this.getLabel());
            },
            getFilter() {
                return this.state.filtering ?
                    HTMLInputElement.prototype.__lookupGetter__("value").call(this._input, this.getLabel())
                    : null
                ;
            },
            dispatchMenuEvent(event) {
                this.root.dispatchEvent(new CustomEvent("menu" + event.type, {
                    detail: { originatingEvent: event }
                }));
            },
            components: {
                "rm-textfield-container": TextfieldContainerComponent__default["default"],
                "rm-button": ButtonComponent__default["default"],
                "rm-menu": MenuComponent__default["default"]
            },
            _finalizeInputProperties() {
                const { _input } = this;
                [
                    [ "helperText", {
                        get: () => this.root.helperText,
                        set: (value) => this.root.helperText = value
                    } ]
                ].forEach(([name, options]) => {
                    if (_input.hasOwnProperty(name)) {
                        return;
                    }
                    Object.defineProperty(_input, name, options);
                });
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
          '<rm-menu expr0="expr0" inherit-width prevent-close-on-click-out prevent-focus keep-highlight></rm-menu><rm-textfield-container expr2="expr2"></rm-textfield-container>',
          [
            {
              'type': bindingTypes.TAG,
              'getComponent': getComponent,

              'evaluate': function(
                _scope
              ) {
                return 'rm-menu';
              },

              'slots': [
                {
                  'id': 'default',
                  'html': '<div ref="rm-select-menu"><slot expr1="expr1"></slot></div>',

                  'bindings': [
                    {
                      'type': bindingTypes.SLOT,

                      'attributes': [
                        {
                          'type': expressionTypes.ATTRIBUTE,
                          'name': null,

                          'evaluate': function(
                            _scope
                          ) {
                            return _scope._getSlotProps();
                          }
                        }
                      ],

                      'name': 'default',
                      'redundantAttribute': 'expr1',
                      'selector': '[expr1]'
                    }
                  ]
                }
              ],

              'attributes': [
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onselected',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope._onmenuselected;
                  }
                },
                {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'opened',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope.state.menuopened;
                  }
                },
                {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'variant',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope.getVariant();
                  }
                },
                {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'selected',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope.state.selected;
                  }
                },
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onopen',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope.dispatchMenuEvent;
                  }
                },
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onclose',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope.dispatchMenuEvent;
                  }
                }
              ],

              'redundantAttribute': 'expr0',
              'selector': '[expr0]'
            },
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
                  'html': '<span class="rm-select--input-wrap" slot="input"><template expr3="expr3"></template><input expr4="expr4" class="rm-select--input" size="1"/></span>',

                  'bindings': [
                    {
                      'type': bindingTypes.IF,

                      'evaluate': function(
                        _scope
                      ) {
                        return !_scope.isFilterable() || _scope.isReadonly();
                      },

                      'redundantAttribute': 'expr3',
                      'selector': '[expr3]',

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
                                  return _scope.getLabel();
                                }
                              }
                            ]
                          }
                        ]
                      )
                    },
                    {
                      'redundantAttribute': 'expr4',
                      'selector': '[expr4]',

                      'expressions': [
                        {
                          'type': expressionTypes.EVENT,
                          'name': 'onfocus',

                          'evaluate': function(
                            _scope
                          ) {
                            return _scope._oninputfocus;
                          }
                        },
                        {
                          'type': expressionTypes.EVENT,
                          'name': 'onblur',

                          'evaluate': function(
                            _scope
                          ) {
                            return _scope._oninputblur;
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
                          'name': 'readonly',

                          'evaluate': function(
                            _scope
                          ) {
                            return !_scope.isFilterable();
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
                          'name': 'type',

                          'evaluate': function(
                            _scope
                          ) {
                            return _scope.isReadonly() ? "hidden" : "text";
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 'leading',
                  'html': '<slot expr5="expr5" name="leading" slot="leading"></slot>',

                  'bindings': [
                    {
                      'type': bindingTypes.SLOT,
                      'attributes': [],
                      'name': 'leading',
                      'redundantAttribute': 'expr5',
                      'selector': '[expr5]'
                    }
                  ]
                },
                {
                  'id': 'trailing',
                  'html': '<span style="white-space: nowrap;" slot="trailing"><rm-button expr6="expr6" variant="icon" class="rm-select--clear" dense></rm-button><slot expr7="expr7" name="trailing"></slot><rm-button expr8="expr8" variant="icon" tabindex="-1" dense></rm-button></span>',

                  'bindings': [
                    {
                      'type': bindingTypes.IF,

                      'evaluate': function(
                        _scope
                      ) {
                        return _scope.isClearable() && _scope.root.value;
                      },

                      'redundantAttribute': 'expr6',
                      'selector': '[expr6]',

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
                      'redundantAttribute': 'expr7',
                      'selector': '[expr7]'
                    },
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
                          'html': 'arrow_drop_down',
                          'bindings': []
                        }
                      ],

                      'attributes': [
                        {
                          'type': expressionTypes.ATTRIBUTE,
                          'name': 'class',

                          'evaluate': function(
                            _scope
                          ) {
                            return [
                              'rm-select--arrow',
                              _scope.state.menuopened ? ' rm-select--arrow-rotated' : ''
                            ].join(
                              ''
                            );
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
                      ],

                      'redundantAttribute': 'expr8',
                      'selector': '[expr8]'
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
                    return _scope.getVariant();
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
                  'name': 'class',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope._getClassNames();
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
                }
              ],

              'redundantAttribute': 'expr2',
              'selector': '[expr2]'
            }
          ]
        );
      },

      'name': 'rm-select'
    };

    return RmSelect;

}));
