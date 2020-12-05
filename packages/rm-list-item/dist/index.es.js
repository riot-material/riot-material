import { ripple } from '@riot-material/ripple';

var index = {
  'css': `rm-list-item,[is="rm-list-item"]{ outline: none; display: block; padding: .75em 1em; line-height: 1.5em; cursor: pointer; user-select: none; } rm-list-item[short-inset],[is="rm-list-item"][short-inset]{ padding-left: 1.5em; }`,

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
        ripple(this.root, { highlight: true, instantHighlight: true });
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<div style="display: table; width: 100%;"><div expr0="expr0" style="display: table-cell; width: 1px; padding-right: 32px;"></div><div style="display: table-cell; max-width: 1px;"><div><span style="float: right;"><slot expr2="expr2" name="trailing"></slot></span><div expr3="expr3" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"> </div><div style="clear: both;"></div></div></div></div>',
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
        'redundantAttribute': 'expr3',
        'selector': '[expr3]',

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

export default index;
