(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.appBar = factory()));
}(this, (function () { 'use strict';

    var dist = {};

    Object.defineProperty(dist, '__esModule', { value: true });

    var breakpoints = {
        0: {
            0: 48,
            560: 56
        },
        600: {
            0: 48,
            560: 56,
            640: 64
        }
    };
    var height;
    function get_height() {
        var documentHeight = document.documentElement.clientHeight;
        var documentWidth = document.documentElement.clientWidth;
        var barHeight = 48;
        var heightBreakpoints;
        Object.entries(breakpoints).some(function (entry) {
            var minWidth = entry[0], heightBreakpoints_ = entry[1];
            if (documentWidth < minWidth) {
                return true;
            }
            heightBreakpoints = heightBreakpoints_;
            return false;
        });
        Object.entries(heightBreakpoints).some(function (entry) {
            var minHeight = entry[0], height = entry[1];
            if (documentHeight < minHeight) {
                return true;
            }
            barHeight = height;
            return false;
        });
        return barHeight;
    }
    function getHeight() {
        setup();
        return height;
    }
    var done = false;
    var listeners = [];
    function setup() {
        if (done) {
            return;
        }
        window.addEventListener("resize", function () {
            height = get_height();
            for (var i = 0; i < listeners.length;) {
                var actual = listeners[i];
                actual.listener.call(actual.thisArg);
                if (actual.once) {
                    listeners.splice(i, 1);
                }
                else {
                    i++;
                }
            }
        });
        height = get_height();
        done = true;
    }
    function onChange(listener, thisArg) {
        listeners.push({
            listener: listener,
            thisArg: thisArg,
            once: false
        });
    }
    function onceChange(listener, thisArg) {
        listeners.push({
            listener: listener,
            thisArg: thisArg,
            once: true
        });
    }
    function offChange(listener, thisArg) {
        var index = -1;
        if (listeners.some(function (l, i) {
            if (listener === l.listener &&
                thisArg === l.thisArg) {
                index = i;
                return true;
            }
            return false;
        })) {
            listeners.splice(index, 1);
        }
    }

    dist.getHeight = getHeight;
    dist.offChange = offChange;
    dist.onChange = onChange;
    dist.onceChange = onceChange;
    dist.setup = setup;

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z = ".mdc-elevation--z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-elevation--z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mdc-elevation--z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mdc-elevation--z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mdc-elevation--z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-elevation--z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mdc-elevation--z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mdc-elevation--z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mdc-elevation--z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-elevation--z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mdc-elevation--z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mdc-elevation--z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mdc-elevation--z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mdc-elevation--z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mdc-elevation--z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mdc-elevation--z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mdc-elevation--z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mdc-elevation--z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mdc-elevation--z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mdc-elevation--z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mdc-elevation--z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mdc-elevation--z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mdc-elevation--z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mdc-elevation--z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mdc-elevation--z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mdc-elevation-transition{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow}";
    styleInject(css_248z);

    if (css_248z._______) {
        css_248z.justForCorrectlyInjectStyle();
    }

    var index = {
      'css': `rm-app-bar,[is="rm-app-bar"]{ display: block; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary, 255, 255, 255)); padding: 8px; box-sizing: border-box; transition: box-shadow ease-in-out 100ms; } rm-app-bar[placeholder]:not([placeholder="false"]),[is="rm-app-bar"][placeholder]:not([placeholder="false"]){ opacity: 0; } rm-app-bar[surface="black"],[is="rm-app-bar"][surface="black"]{ background: rgb(0, 0, 0); background: rgb(var(--color-black-surface, 0, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-black, 255, 255, 255)); } rm-app-bar[surface="dark"],[is="rm-app-bar"][surface="dark"]{ background: rgb(10, 10, 10); background: rgb(var(--color-dark-surface, 10, 10, 10)); color: rgb(255, 255, 255); color: rgb(var(--color-on-dark, 255, 255, 255)); } rm-app-bar[surface="light"],[is="rm-app-bar"][surface="light"]{ background: rgb(250, 250, 250); background: rgb(var(--color-light-surface, 250, 250, 250)); color: rgb(0, 0, 0); color: rgb(var(--color-on-light, 0, 0, 0)); } rm-app-bar[surface="white"],[is="rm-app-bar"][surface="white"]{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); color: rgb(0, 0, 0); color: rgb(var(--color-on-white, 0, 0, 0)); } rm-app-bar[fixed]:not([fixed="false"]),[is="rm-app-bar"][fixed]:not([fixed="false"]){ position: fixed; top: 0; left: 0; right: 0; z-index: 99; } rm-app-bar[fixed]:not([fixed="false"])[bottom]:not([bottom="false"]),[is="rm-app-bar"][fixed]:not([fixed="false"])[bottom]:not([bottom="false"]){ position: fixed; top: unset; bottom: 0; left: 0; right: 0; } rm-app-bar[clamped]:not([clamped="false"]),[is="rm-app-bar"][clamped]:not([clamped="false"]){ overflow: hidden; } rm-app-bar.height-48,[is="rm-app-bar"].height-48{ height: 48px; padding: 4px 8px; } rm-app-bar.height-56,[is="rm-app-bar"].height-56{ height: 56px; } rm-app-bar.height-64,[is="rm-app-bar"].height-64{ height: 64px; padding: 12px 8px; }`,

      'exports': {
        state: {
            hasShadow: false
        },

        _mounted: false,

        onBeforeMount() {
            this._onscroll = () => {
                let hasShadow = false;
                if (this._scrollTarget != null) {
                    if (this.props.bottom != null && this.props.bottom !== "false") {
                        if (this._scrollTarget instanceof Window) {
                            hasShadow = this._scrollTarget.scrollY < this._scrollTarget.document.documentElement.scrollHeight - this._scrollTarget.document.documentElement.clientHeight;
                        } else {
                            hasShadow = this._scrollTarget.scrollTop < this._scrollTarget.scrollHeight - this._scrollTarget.clientHeight;
                        }
                    } else {
                        hasShadow = this.hasPassedElevationThreshold();
                    }
                }
                this.update({ hasShadow });
            };
            let scrollTarget = null;
            if (this.props.scrollTarget) {
                if (typeof this.props.scrollTarget === "string") {
                    scrollTarget = (
                        this.props.scrollTarget !== "window" ?
                        document.querySelector(this.props.scrollTarget) : window
                    ) || window;
                } else if ((this.props.scrollTarget instanceof HTMLElement) || (this.props.scrollTarget instanceof Window)) {
                    scrollTarget = this.props.scrollTarget;
                }
            }
            this.setScrollTarget(scrollTarget);
        },

        onMounted() {
            dist.onChange(this.update, this);
            window.addEventListener("resize", this._onresize = () => {
                this._recalculateScrollbar();
            });
            this._mounted = true;
            if (this._scrollTarget) {
                this._onscroll();
            }
        },

        onUnmounted() {
            this._mounted = false;
            dist.offChange(this.update, this);
            this.setScrollTarget(null);
            window.removeEventListener("resize", this._onresize);
        },

        getHeight() {
            return dist.getHeight();
        },

        _onresize: null,
        _onscroll: null,
        _scrollTarget: null,

        _recalculateScrollbar() {
            let margin = 0;
            if (this._scrollTarget != null && !(this._scrollTarget instanceof Window)) {
                margin = this._scrollTarget.getBoundingClientRect().width - this._scrollTarget.scrollWidth;
            }
            this.root.style.marginRight = margin + "px";
        },

        setScrollTarget(element) {
            if (element === this._scrollTarget) {
                return;
            }
            if (this._scrollTarget != null) {
                this._scrollTarget.removeEventListener("scroll", this._onscroll);
            }
            if (element) {
                (this._scrollTarget = element).addEventListener("scroll", this._onscroll);
            } else {
                this._scrollTarget = null;
            }
            this._recalculateScrollbar();
            if (this._mounted) {
                this._onscroll();
            }
        },

        getSurface() {
            if (this.props.lightSurface != null && this.props.lightSurface !== "false") {
                return "rm-light-surface";
            }
            if (this.props.darkSurface != null && this.props.darkSurface !== "false"){
                return "rm-dark-surface";
            }
            return "";
        },

        hasPassedElevationThreshold() {
            let elevationThreshold = 0;
            if (this.props.elevationThreshold != null) {
                elevationThreshold = parseInt(this.props.elevationThreshold);
                if (isNaN(elevationThreshold)) {
                    elevationThreshold = 0;
                }
            }
            return (
                this._scrollTarget instanceof Window ? this._scrollTarget.scrollY : this._scrollTarget.scrollTop
            ) > elevationThreshold;
        },

        hasPassedBackgroundThreshold() {
            if (this.props.unelevatedBackground == null) {
                return true;
            }
            return this.hasPassedElevationThreshold();
        }
      },

      'template': function(
        template,
        expressionTypes,
        bindingTypes,
        getComponent
      ) {
        return template(
          '<slot expr5="expr5"></slot>',
          [
            {
              'expressions': [
                {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'class',

                  'evaluate': function(
                    _scope
                  ) {
                    return [
                      'height-',
                      _scope.getHeight(),
                      ' ',
                      _scope.getSurface(),
                      ' mdc-elevation--z',
                      _scope.state.hasShadow ? 8 : 0
                    ].join(
                      ''
                    );
                  }
                },
                {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'style',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope.hasPassedBackgroundThreshold() ? "" : "background: " + _scope.props.unelevatedBackground +";";
                  }
                }
              ]
            },
            {
              'type': bindingTypes.SLOT,
              'attributes': [],
              'name': 'default',
              'redundantAttribute': 'expr5',
              'selector': '[expr5]'
            }
          ]
        );
      },

      'name': 'rm-app-bar'
    };

    return index;

})));
