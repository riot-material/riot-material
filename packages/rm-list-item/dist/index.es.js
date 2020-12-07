import { ripple } from '@riot-material/ripple';

var index = {
  'css': `rm-list-item,[is="rm-list-item"]{ outline: none; display: block; padding: .5em 1em; line-height: 1.5em; cursor: pointer; user-select: none; } rm-list-item rm-icon,[is="rm-list-item"] rm-icon,rm-list-item .material-icons,[is="rm-list-item"] .material-icons{ margin-right: 16px; } rm-list-item rm-button,[is="rm-list-item"] rm-button{ margin: -8px; vertical-align: top; } rm-list-item.selected,[is="rm-list-item"].selected{ color: rgb(139, 0, 139); color: rgb(var(--color-primary, 139, 0, 139)); }`,

  'exports': {
    _hasSlot(name) {
        return this.slots.some(slot => slot.id === name);
    },

    _updateRipple() {
        ripple(this.root, { highlight: true, instantHighlight: true, disabled: this.isPassive() });
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
        this._updateSelected();
    },

    shouldUpdate(newProps, currentProps) {
        if (newProps.selected !== currentProps.selected) {
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
      '<div style="display: table; width: 100%;"><div expr10="expr10" style="display: table-cell; width: 1px; padding-right: 16px; vertical-align: middle;"></div><div style="display: table-cell; max-width: 1px; padding: 0.25em 0; vertical-align: middle;"><div><span style="float: right;"><slot expr12="expr12" name="trailing"></slot></span><div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><template expr13="expr13"></template><slot expr14="expr14"></slot></div><div style="clear: both;"></div></div></div></div>',
      [
        {
          'expressions': [
            {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'tabindex',

              'evaluate': function(
                scope
              ) {
                return '0';
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

          'redundantAttribute': 'expr10',
          'selector': '[expr10]',

          'template': template(
            '<slot expr11="expr11" name="leading"></slot>',
            [
              {
                'type': bindingTypes.SLOT,
                'attributes': [],
                'name': 'leading',
                'redundantAttribute': 'expr11',
                'selector': '[expr11]'
              }
            ]
          )
        },
        {
          'type': bindingTypes.SLOT,
          'attributes': [],
          'name': 'trailing',
          'redundantAttribute': 'expr12',
          'selector': '[expr12]'
        },
        {
          'type': bindingTypes.IF,

          'evaluate': function(
            scope
          ) {
            return !scope._hasSlot("default");
          },

          'redundantAttribute': 'expr13',
          'selector': '[expr13]',

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
          'redundantAttribute': 'expr14',
          'selector': '[expr14]'
        }
      ]
    );
  },

  'name': 'rm-list-item'
};

export default index;
