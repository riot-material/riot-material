(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.floatingSurface = factory()));
})(this, (function () { 'use strict';

    var css_248z = ".mdc-elevation--z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-elevation--z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mdc-elevation--z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mdc-elevation--z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mdc-elevation--z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-elevation--z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mdc-elevation--z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mdc-elevation--z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mdc-elevation--z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-elevation--z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mdc-elevation--z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mdc-elevation--z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mdc-elevation--z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mdc-elevation--z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mdc-elevation--z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mdc-elevation--z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mdc-elevation--z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mdc-elevation--z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mdc-elevation--z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mdc-elevation--z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mdc-elevation--z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mdc-elevation--z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mdc-elevation--z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mdc-elevation--z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mdc-elevation--z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mdc-elevation-transition{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow}";
    var css = css_248z;

    let destroyer$1 = null;
    function init$1() {
        if (destroyer$1 !== null) {
            return destroyer$1;
        }
        const style = document.head.appendChild(document.createElement("style"));
        style.innerHTML = css;
        return destroyer$1 = () => {
            document.head.removeChild(style);
            destroyer$1 = null;
        };
    }

    const innerHTML = `
.rm-black-surface {
    background: rgb(0, 0, 0);
    background: rgb(var(--color-black-surface, 0, 0, 0));
    color: rgb(255, 255, 255);
    color: rgb(var(--color-on-black, 255, 255, 255));
}
.rm-dark-surface {
    background: rgb(10, 10, 10);
    background: rgb(var(--color-dark-surface, 10, 10, 10));
    color: rgb(255, 255, 255);
    color: rgb(var(--color-on-dark, 255, 255, 255));
}
.rm-light-surface {
    background: rgb(250, 250, 250);
    background: rgb(var(--color-light-surface, 250, 250, 250));
    color: rgb(0, 0, 0);
    color: rgb(var(--color-on-light, 0, 0, 0));
}
.rm-white-surface {
    background: rgb(255, 255, 255);
    background: rgb(var(--color-white-surface, 255, 255, 255));
    color: rgb(0, 0, 0);
    color: rgb(var(--color-on-white, 0, 0, 0));
}
`;
    let destroyer = null;
    function init() {
        if (destroyer != null) {
            return destroyer;
        }
        let style = document.head.appendChild(document.createElement("style"));
        style.innerHTML = innerHTML;
        return destroyer = () => {
            document.head.removeChild(style);
            destroyer = null;
        };
    }

    var RmFloatingSurface = {
      'css': `rm-floating-surface,[is="rm-floating-surface"]{ display: block; position: fixed; z-index: 100; margin: -80px; padding: 80px; overflow: hidden; } rm-floating-surface.anchor-top,[is="rm-floating-surface"].anchor-top{ margin-top: 0; padding-top: 0; } rm-floating-surface.anchor-bottom,[is="rm-floating-surface"].anchor-bottom{ margin-bottom: 0; padding-bottom: 0; } rm-floating-surface > div,[is="rm-floating-surface"] > div{ border-radius: 8px; } rm-floating-surface:not([variant="outlined"]).anchor-top > div,[is="rm-floating-surface"]:not([variant="outlined"]).anchor-top > div{ border-top-left-radius: 0; border-top-right-radius: 0; }`,

      'exports': {
        _animationFrame: null,
        _currentId: -1,

        // _lastRect: null,
        _computePosition() {
            if (!this._anchorEl.isConnected) {
                return;
            }
            const anchorRect = this._anchorEl.getBoundingClientRect();
            // if (
            //     this._lastRect &&
            //     this._lastRect.top === anchorRect.top &&
            //     this._lastRect.left === anchorRect.left &&
            //     this._lastRect.width === anchorRect.width &&
            //     this._lastRect.height === anchorRect.height
            // ) {
            //     return;
            // }
            // this._lastRect = anchorRect;
            const el = this.root.firstElementChild.children[1];
            const documentWidth = document.documentElement.clientWidth;
            if (this.getInheritWidth()) {
                this.root.style.width = Math.min(documentWidth, anchorRect.width) + "px";
            }
            const thisRect = this.root.firstElementChild.getBoundingClientRect();
            thisRect.height = el.scrollHeight + (8 * 2);
            if (anchorRect.left + thisRect.width > documentWidth) {
                console.log(documentWidth, thisRect.width);
                this.root.style.left = (documentWidth - thisRect.width) + "px";
            } else {
                this.root.style.left = Math.max(anchorRect.left, 0) + "px";
            }
            const documentHeight = document.documentElement.clientHeight;
            const marginTop = Math.max(0, Math.min(documentHeight, anchorRect.top));
            const marginBottom = Math.max(
                0, Math.min(
                    documentHeight, documentHeight - anchorRect.bottom
                )
            );
            if (marginBottom >= thisRect.height) {
                this.root.style.top = Math.max(anchorRect.bottom, 0) + "px";
                this.root.classList.add("anchor-top");
                this.root.classList.remove("anchor-bottom");
            } else {
                if (marginBottom >= marginTop) {
                    el.style.maxHeight = (Math.min(marginBottom, thisRect.height) - (8 * 2)) + "px";
                    this.root.style.top = Math.max(anchorRect.bottom, 0) + "px";
                    this.root.classList.add("anchor-top");
                    this.root.classList.remove("anchor-bottom");
                } else {
                    const height = Math.min(marginTop, thisRect.height);
                    el.style.maxHeight = (height - (8 * 2)) + "px";
                    this.root.style.top = Math.max(Math.min(anchorRect.top - height, documentHeight - height), 0) + "px";
                    this.root.classList.remove("anchor-top");
                    this.root.classList.add("anchor-bottom");
                }
            }
        },

        onBeforeMount() {
            init$1();
            init();
        },

        onMounted() {
            this._animationFrame = () => {
                this._computePosition();
                this._currentId = window.requestAnimationFrame(this._animationFrame);
            };
            if (this.props.anchor && this.props.anchor instanceof HTMLElement) {
                this.anchorTo(this.props.anchor);
            }
        },

        onBeforeUnmount() {
            this.loose();
        },

        shouldUpdate(newProps, currentProps) {
            if ("anchor" in newProps) {
                return true;
            }
            return false;
        },

        onBeforeUpdate() {
            this.loose();
        },

        onUpdated() {
            if (this.props.anchor && this.props.anchor instanceof HTMLElement) {
                this.anchorTo(this.props.anchor);
            }
        },

        _anchorEl: null,

        anchorTo(element) {
            this._anchorEl = element;
            this._animationFrame();
        },

        loose() {
            if (this._currentId !== -1) {
                window.cancelAnimationFrame(this._currentId);
            }
            this._anchorEl = null;
        },

        getInheritWidth() {
            return this.props.inheritWidth != null && this.props.inheritWidth !== false;
        },

        getSurface() {
            switch (this.props.surface) {
                case "black": return "black";
                case "dark": return "dark";
                case "light": return "light";
                default: return "white";
            }
        }
      },

      'template': function(
        template,
        expressionTypes,
        bindingTypes,
        getComponent
      ) {
        return template(
          '<div expr2="expr2"><div style="height: 8px; width: 100%;"></div><div style="overflow: auto; width: 100%;"><slot expr3="expr3"></slot></div><div style="height: 8px; width: 100%;"></div></div>',
          [
            {
              'redundantAttribute': 'expr2',
              'selector': '[expr2]',

              'expressions': [
                {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'class',

                  'evaluate': function(
                    _scope
                  ) {
                    return [
                      'rm-',
                      _scope.getSurface(),
                      '-surface mdc-elevation--z4'
                    ].join(
                      ''
                    );
                  }
                }
              ]
            },
            {
              'type': bindingTypes.SLOT,
              'attributes': [],
              'name': 'default',
              'redundantAttribute': 'expr3',
              'selector': '[expr3]'
            }
          ]
        );
      },

      'name': 'rm-floating-surface'
    };

    return RmFloatingSurface;

}));
