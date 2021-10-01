(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.circularAvatar = factory()));
})(this, (function () { 'use strict';

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

    return RmCircularAvatar;

}));
