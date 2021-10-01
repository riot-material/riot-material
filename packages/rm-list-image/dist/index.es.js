var RmListImage = {
  'css': `rm-list-image,[is="rm-list-image"]{ display: block; height: 56px; width: 56px; background: gray; } rm-list-image[large],[is="rm-list-image"][large]{ width: 100px; margin-left: -16px; }`,
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
                return _scope.props.src ? `background-image: url(${_scope.prop.src});` : "";
              }
            }
          ]
        }
      ]
    );
  },

  'name': 'rm-list-image'
};

export { RmListImage as default };
