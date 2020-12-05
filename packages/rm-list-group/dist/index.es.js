var index = {
  'css': `rm-list-item:not(rm-list-group > :first-child),rm-list-item:not([is="rm-list-group"] > :first-child){ padding-left: 1.5em; }`,
  'exports': null,

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<rm-list-item expr0="expr0" passive></rm-list-item><slot expr1="expr1"></slot>',
      [{
        'type': bindingTypes.TAG,
        'getComponent': getComponent,

        'evaluate': function(scope) {
          return 'rm-list-item';
        },

        'slots': [{
          'id': 'default',
          'html': ' ',

          'bindings': [{
            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.props.label;
              }
            }]
          }]
        }],

        'attributes': [],
        'redundantAttribute': 'expr0',
        'selector': '[expr0]'
      }, {
        'type': bindingTypes.SLOT,
        'attributes': [],
        'name': 'default',
        'redundantAttribute': 'expr1',
        'selector': '[expr1]'
      }]
    );
  },

  'name': 'rm-list-group'
};

export default index;
