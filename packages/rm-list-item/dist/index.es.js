import { ripple } from '@riot-material/ripple';

var index = {
  'css': `rm-list-item,[is="rm-list-item"]{ outline: none; display: block; padding: .5em 1em; line-height: 1.5em; cursor: pointer; user-select: none; } rm-list-item rm-icon,[is="rm-list-item"] rm-icon,rm-list-item .material-icons,[is="rm-list-item"] .material-icons{ margin-right: 16px; } rm-list-item rm-button,[is="rm-list-item"] rm-button{ margin: -8px; vertical-align: top; } rm-list-item.selected,[is="rm-list-item"].selected{ color: rgb(139, 0, 139); color: rgb(var(--color-primary, 139, 0, 139)); } rm-list-item[passive],[is="rm-list-item"][passive]{ cursor: default; }`,

  'exports': {
    _hasSlot(name) {
        return this.slots.some(slot => slot.id === name);
    },

    _updateRipple() {
        const passive = this.isPassive();
        ripple(this.root, { highlight: !passive, instantHighlight: true, disabled: passive });
    },

    _updateSelected() {
        if (this.isSelected()) {
            this.root.classList.add("selected");
        } else {
            this.root.classList.remove("selected");
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
            }
        });
        if (this.props.value != null && this.props.menuOption == null) {
            this.root.setAttribute("menu-option", "");
        }
        this._updateRipple();
        this._updateSelected();
    },

    shouldUpdate(newProps, currentProps) {
        if ("selected" in newProps) {
            delete this.state.selected;
        }
    },

    onUpdated() {
        this._updateRipple();
        this._updateSelected();
    },

    isSelected() {
        return this.state.selected != null ?
            this.state.selected !== false :
            (this.props.selected != null && this.props.selected !== false)
        ;
    }
  },

  'template': function(
    template,
    expressionTypes,
    bindingTypes,
    getComponent
  ) {
    return template(
      '<div style="display: table; width: 100%;"><div expr20="expr20" style="display: table-cell; width: 1px; padding-right: 16px; vertical-align: middle;"></div><div style="display: table-cell; max-width: 1px; padding: 0.25em 0; vertical-align: middle;"><div><span style="float: right;"><slot expr22="expr22" name="trailing"></slot></span><div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><template expr23="expr23"></template><slot expr24="expr24"></slot></div><div style="clear: both;"></div></div></div></div>',
      [
        {
          'expressions': [
            {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'tabindex',

              'evaluate': function(
                scope
              ) {
                return scope.isPassive() ? "" : "0";
              }
            },
            {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'style',

              'evaluate': function(
                scope
              ) {
                return scope.isSelected() && scope.props.selectedColor != null ? "color:" + scope.props.selectedColor + ";" : "";
              }
            }
          ]
        },
        {
          'type': bindingTypes.IF,

          'evaluate': function(
            scope
          ) {
            return scope._hasSlot("leading");
          },

          'redundantAttribute': 'expr20',
          'selector': '[expr20]',

          'template': template(
            '<slot expr21="expr21" name="leading"></slot>',
            [
              {
                'type': bindingTypes.SLOT,
                'attributes': [],
                'name': 'leading',
                'redundantAttribute': 'expr21',
                'selector': '[expr21]'
              }
            ]
          )
        },
        {
          'type': bindingTypes.SLOT,
          'attributes': [],
          'name': 'trailing',
          'redundantAttribute': 'expr22',
          'selector': '[expr22]'
        },
        {
          'type': bindingTypes.IF,

          'evaluate': function(
            scope
          ) {
            return !scope._hasSlot("default");
          },

          'redundantAttribute': 'expr23',
          'selector': '[expr23]',

          'template': template(
            ' ',
            [
              {
                'expressions': [
                  {
                    'type': expressionTypes.TEXT,
                    'childNodeIndex': 0,

                    'evaluate': function(
                      scope
                    ) {
                      return scope.props.label || "\xa0";
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
          'redundantAttribute': 'expr24',
          'selector': '[expr24]'
        }
      ]
    );
  },

  'name': 'rm-list-item'
};

export default index;
