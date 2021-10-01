var RmCircularAvatar = {
  'css': `rm-circular-avatar,[is="rm-circular-avatar"]{ display: block; height: 40px; width: 40px; border-radius: 50%; background: gray; }`,
  'exports': null,

  'template': function(
    template,
    expressionTypes,
    bindingTypes,
    getComponent
  ) {
    return template(
      null,
      [
        {
          'expressions': [
            {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'style',

              'evaluate': function(
                _scope
              ) {
                return _scope.props.src ? "background: url(" + _scope.props.src + ");" : "";
              }
            }
          ]
        }
      ]
    );
  },

  'name': 'rm-circular-avatar'
};

export { RmCircularAvatar as default };
