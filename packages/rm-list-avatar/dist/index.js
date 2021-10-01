(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.listAvatar = factory()));
})(this, (function () { 'use strict';

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

    return RmListAvatar;

}));
