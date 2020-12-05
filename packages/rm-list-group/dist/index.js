(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@riot-material/rm-list-item')) :
    typeof define === 'function' && define.amd ? define(['@riot-material/rm-list-item'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.listGroup = factory(global.riotMaterial.components.listItem)));
}(this, (function (ListItemComponent) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var ListItemComponent__default = /*#__PURE__*/_interopDefaultLegacy(ListItemComponent);

    var index = {
      'css': `rm-list-group > rm-list-item:not(:first-child),[is="rm-list-group"] > rm-list-item:not(:first-child),rm-list-group > [is="rm-list-item"]:not(:first-child),[is="rm-list-group"] > [is="rm-list-item"]:not(:first-child){ padding-left: 2em; }`,

      'exports': {
        components: {
            "rm-list-item": ListItemComponent__default['default']
        }
      },

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

    return index;

})));
