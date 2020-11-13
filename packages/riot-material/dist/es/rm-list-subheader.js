var rmListSubheader = {
  'css': `rm-list-subheader,[is="rm-list-subheader"]{ font: message-box; font-size: 16px; line-height: 1.5em; padding: 0.75em 1em; border: 0; background: none; box-sizing: border-box; width: 100%; text-align: left; cursor: initial; outline: none; display: block; min-height: 3em; font-weight: bold; color: rgba(0, 0, 0, 0.9); } rm-list-subheader[inset],[is="rm-list-subheader"][inset]{ padding-left: 4.5em; } rm-list-subheader[short-inset],[is="rm-list-subheader"][short-inset]{ padding-left: 2em; }`,
  'exports': null,

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template('<slot expr131="expr131"></slot>', [{
      'type': bindingTypes.SLOT,
      'attributes': [],
      'name': 'default',
      'redundantAttribute': 'expr131',
      'selector': '[expr131]'
    }]);
  },

  'name': 'rm-list-subheader'
};

export default rmListSubheader;
