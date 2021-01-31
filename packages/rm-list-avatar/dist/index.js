(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.circularAvatar = factory()));
}(this, (function () { 'use strict';

    var index = {
      'css': `rm-list-avatar,[is="rm-list-avatar"]{ display: block; height: 40px; width: 40px; background: gray; } rm-list-avatar[circular],[is="rm-list-avatar"][circular]{ border-radius: 50%; }`,
      'exports': null,
      'template': null,
      'name': 'rm-list-avatar'
    };

    return index;

})));
