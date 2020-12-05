(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.listImage = factory()));
}(this, (function () { 'use strict';

    var index = {
      'css': `rm-list-image,[is="rm-list-image"]{ display: block; height: 56px; width: 56px; background: gray; } rm-list-image[large],[is="rm-list-image"][large]{ width: 100px; margin-left: -16px; }`,
      'exports': null,
      'template': null,
      'name': 'rm-list-image'
    };

    return index;

})));
