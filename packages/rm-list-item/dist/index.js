(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('riot'), require('@riot-material/ripple')) :
    typeof define === 'function' && define.amd ? define(['riot', '@riot-material/ripple'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.listItem = factory(global.riot, global.riotMaterial.ripple)));
})(this, (function (riot, ripple) { 'use strict';

    const {
        globals: {
            PARENT_KEY_SYMBOL
        }
    } = riot.__;

    const FILTER = Symbol("filter");

    var RmListItem = {
      'css': `rm-list-item,[is="rm-list-item"]{ outline: none; display: block; padding: .5em 1em; line-height: 1.5em; cursor: pointer; user-select: none; } rm-list-item rm-icon,[is="rm-list-item"] rm-icon,rm-list-item .material-icons,[is="rm-list-item"] .material-icons{ margin-right: 16px; } rm-list-item rm-button,[is="rm-list-item"] rm-button{ margin: -8px; vertical-align: top; } rm-list-item.selected,[is="rm-list-item"].selected{ color: rgb(139, 0, 139); color: rgb(var(--color-primary, 139, 0, 139)); } rm-list-item[passive],[is="rm-list-item"][passive]{ cursor: default; } rm-list-item.rm-list-item--filtered-out,[is="rm-list-item"].rm-list-item--filtered-out{ display: none; }`,

      'exports': {
        _filterSymbol: FILTER,
        _selectedHighlight: null,

        _hasSlot(name) {
            return this.slots.some(slot => slot.id === name);
        },

        _updateFilter() {
            if (this.isPassive()) {
                return;
            }
            const filter = this[PARENT_KEY_SYMBOL]?.[FILTER];
            if (
                filter == null ||
                typeof filter !== "function"
            ) {
                return;
            }
            if (!filter(this)) {
                this.state.selected = false;
                this.root.classList.remove("selected");
                this.root.classList.add("rm-list-item--filtered-out");
            } else {
                this.root.classList.remove("rm-list-item--filtered-out");
            }
        },

        _updateRipple() {
            const passive = this.isPassive();
            ripple.ripple(this.root, { highlight: !passive, instantHighlight: true, disabled: passive });
        },

        _updateSelected() {
            if (this.isSelected()) {
                this.root.classList.add("selected");
                if (this._selectedHighlight == null) {
                    this._selectedHighlight = ripple.ripple(this.root).highlight();
                }
            } else {
                this.root.classList.remove("selected");
                if (this._selectedHighlight != null) {
                    this._selectedHighlight.end();
                    this._selectedHighlight = null;
                }
            }
        },

        isPassive() {
            return this.props.passive != null && this.props.passive !== false;
        },

        onMounted() {
            let value = undefined;
            Object.defineProperties(this.root, {
                value: {
                    get: () => {
                        if (value === undefined) {
                            return this.props.value == null ? null : this.props.value + "";
                        }
                        return value;
                    },
                    set(v) {
                        value = v == null ? null : this.props.value + "";
                    }
                },
                label: {
                    get: () => {
                        return this.props.label == null ?
                            (this._hasSlot("default") ? this.root.innerText : "") :
                            this.props.label + ""
                        ;
                    }
                },
                selected: {
                    get: () => this.isSelected(),
                    set: value => {
                        this.update({ selected: value != null && value !== false });
                    }
                },
                passive: {
                    get: () => this.isPassive()
                }
            });
            if (this.props.value != null && this.props.menuOption == null) {
                this.root.setAttribute("menu-option", "");
            }
            this._updateFilter();
            this._updateRipple();
            this._updateSelected();
        },

        shouldUpdate(newProps, currentProps) {
            if ("selected" in newProps) {
                delete this.state.selected;
            }
        },

        onUpdated() {
            this._updateFilter();
            this._updateRipple();
            this._updateSelected();
        },

        isSelected() {
            return this.isPassive() ?
                false :
                (this.state.selected != null ?
                    this.state.selected !== false :
                    (this.props.selected != null && this.props.selected !== false)
                )
            ;
        },

        getLabel() {
            return this.root.label;
        }
      },

      'template': function(
        template,
        expressionTypes,
        bindingTypes,
        getComponent
      ) {
        return template(
          '<div style="display: table; width: 100%;"><div expr0="expr0" style="display: table-cell; width: 1px; padding-right: 16px; vertical-align: middle;"></div><div style="display: table-cell; max-width: 256px; padding: 0.25em 0; vertical-align: middle;"><div><span style="float: right;"><slot expr2="expr2" name="trailing"></slot></span><div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" ref="label"><template expr3="expr3"></template><slot expr4="expr4"></slot></div><div style="clear: both;"></div></div></div></div>',
          [
            {
              'expressions': [
                {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'tabindex',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope.isPassive() ? "" : "0";
                  }
                },
                {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'style',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope.isSelected() && _scope.props.selectedColor != null ? "color:" + _scope.props.selectedColor + ";" : "";
                  }
                }
              ]
            },
            {
              'type': bindingTypes.IF,

              'evaluate': function(
                _scope
              ) {
                return _scope._hasSlot("leading");
              },

              'redundantAttribute': 'expr0',
              'selector': '[expr0]',

              'template': template(
                '<slot expr1="expr1" name="leading"></slot>',
                [
                  {
                    'type': bindingTypes.SLOT,
                    'attributes': [],
                    'name': 'leading',
                    'redundantAttribute': 'expr1',
                    'selector': '[expr1]'
                  }
                ]
              )
            },
            {
              'type': bindingTypes.SLOT,
              'attributes': [],
              'name': 'trailing',
              'redundantAttribute': 'expr2',
              'selector': '[expr2]'
            },
            {
              'type': bindingTypes.IF,

              'evaluate': function(
                _scope
              ) {
                return !_scope._hasSlot("default");
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
                          return _scope.props.label || "\xa0";
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
              'name': 'default',
              'redundantAttribute': 'expr4',
              'selector': '[expr4]'
            }
          ]
        );
      },

      'name': 'rm-list-item'
    };

    return RmListItem;

}));
