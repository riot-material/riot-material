import ListItemComponent from '@riot-material/rm-list-item';

var RmListGroup = {
  'css': `rm-list-group > rm-list-item:not(:first-child),[is="rm-list-group"] > rm-list-item:not(:first-child),rm-list-group > [is="rm-list-item"]:not(:first-child),[is="rm-list-group"] > [is="rm-list-item"]:not(:first-child){ padding-left: 2em; }`,

  'exports': {
    components: {
        "rm-list-item": ListItemComponent
    }
  },

  'template': function(
    template,
    expressionTypes,
    bindingTypes,
    getComponent
  ) {
    return template(
      '<rm-list-item expr0="expr0" passive></rm-list-item><slot expr1="expr1"></slot>',
      [
        {
          'type': bindingTypes.TAG,
          'getComponent': getComponent,

          'evaluate': function(
            _scope
          ) {
            return 'rm-list-item';
          },

          'slots': [
            {
              'id': 'default',
              'html': ' ',

              'bindings': [
                {
                  'expressions': [
                    {
                      'type': expressionTypes.TEXT,
                      'childNodeIndex': 0,

                      'evaluate': function(
                        _scope
                      ) {
                        return _scope.props.label;
                      }
                    }
                  ]
                }
              ]
            }
          ],

          'attributes': [],
          'redundantAttribute': 'expr0',
          'selector': '[expr0]'
        },
        {
          'type': bindingTypes.SLOT,
          'attributes': [],
          'name': 'default',
          'redundantAttribute': 'expr1',
          'selector': '[expr1]'
        }
      ]
    );
  },

  'name': 'rm-list-group'
};

export { RmListGroup as default };
