var RmListAvatar = {
  'css': `rm-list-avatar,[is="rm-list-avatar"]{ display: block; height: 40px; width: 40px; background: gray; } rm-list-avatar[circular],[is="rm-list-avatar"][circular]{ border-radius: 50%; }`,
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

  'name': 'rm-list-avatar'
};

export { RmListAvatar as default };
