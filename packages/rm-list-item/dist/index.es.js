import { ripple } from '@riot-material/ripple';

var index = {
  'css': `rm-list-item,[is="rm-list-item"]{ display: block; padding: 8px 12px; }`,

  'exports': {
    _updateRipple() {
        if (this.root.value != null) {
            ripple(this.root, { highlight: true });
        } else {
            ripple(this.root, { disabled: true, highlight: false });
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

export default index;
