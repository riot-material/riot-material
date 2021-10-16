(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.visibilityTrigger = factory()));
})(this, (function () { 'use strict';

    var RmVisibilityTrigger = {
      'css': null,

      'exports': {
        onMounted() {
            let wasVisible = false;
            Object.defineProperties(this.root, {
                visible: {
                    get() { return wasVisible; }
                }
            });

            let options = {
                root: null,
                rootMargin: "0px",
                threshold: [ 0 ]
            };

            let observer = new IntersectionObserver(([entry]) => {
                const { x, y, width, height } = entry.intersectionRect;
                let visible = !(x === 0 && y === 0 && width === 0 && height === 0);
                if (wasVisible === visible) {
                    return;
                }
                wasVisible = visible;
                this.root.dispatchEvent(new Event(visible ? "visible" : "hidden"), { cancelable: false, bubbles: false });
            }, options);
            observer.observe(this.root);
        }
      },

      'template': function(
        template,
        expressionTypes,
        bindingTypes,
        getComponent
      ) {
        return template(
          '<slot expr0="expr0"></slot>',
          [
            {
              'type': bindingTypes.SLOT,
              'attributes': [],
              'name': 'default',
              'redundantAttribute': 'expr0',
              'selector': '[expr0]'
            }
          ]
        );
      },

      'name': 'rm-visibility-trigger'
    };

    return RmVisibilityTrigger;

}));
