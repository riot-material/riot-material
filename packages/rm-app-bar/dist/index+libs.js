(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.appBar = factory()));
})(this, (function () { 'use strict';

    /**
     * Giuliano Collacchioni: 2020
     */
    // i punti di interruzione dell'altezza delle barre sono struttati nel seguente modo:
    // {
    //     min-width-1: {
    //         min-height-1: height,
    //         min-height-2: height,
    //         ...,
    //         min-height-n: height
    //     },
    //     ...,
    //     min-width-n: {
    //         min-height-1: height,
    //         min-height-2: height,
    //         ...,
    //         min-height-n: height
    //     }
    // }
    let breakpoints = {
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
    let height;
    function get_height() {
        let documentHeight = document.documentElement.clientHeight;
        let documentWidth = document.documentElement.clientWidth;
        let barHeight = 48;
        let heightBreakpoints;
        // iterazione su tutti i punti di interruzione della larghezza,
        // per recuperare i punti di interruzzione dell'altezza
        Object.entries(breakpoints).some(entry => {
            let [minWidth, heightBreakpoints_] = entry;
            // se il punto d'interruzione supera la larghezza attuale della finestra
            // usare i punti di interruzione dell'altezza precedentemente salvati
            if (documentWidth < parseFloat(minWidth)) {
                return true;
            }
            // salvataggio dei punti di interruzione dell'altezza
            // dell'attuale punto di interruzione della larghezza
            heightBreakpoints = heightBreakpoints_;
            return false;
        });
        // iterazione su tutti i punti di interruzione dell'altezza,
        // per impostare l'altezza delle barre
        Object.entries(heightBreakpoints).some(entry => {
            let [minHeight, height] = entry;
            // se il punto di interruzione supera l'altezza attuale della finestra
            // uscire dalle iterazioni e usare l'ultima altezza delle barre salvata
            if (documentHeight < parseFloat(minHeight)) {
                return true;
            }
            // salvataggio dell'altezza delle barre dell'attuale punto di interruzione
            barHeight = height;
            return false;
        });
        return barHeight;
    }
    function getHeight() {
        setup();
        return height;
    }
    // funzione di setup delle utilità del modulo
    let done = false;
    let listeners = [];
    function setup() {
        if (done) {
            return;
        }
        // associare il calcolo dell'altezza delle barre al ridimensionamento della finestra
        window.addEventListener("resize", function () {
            height = get_height();
            for (let i = 0; i < listeners.length;) {
                let actual = listeners[i];
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
            listener,
            thisArg,
            once: false
        });
    }
    function offChange(listener, thisArg) {
        let index = -1;
        if (listeners.some((l, i) => {
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

    var css_248z = ".mdc-elevation--z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-elevation--z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mdc-elevation--z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mdc-elevation--z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mdc-elevation--z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-elevation--z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mdc-elevation--z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mdc-elevation--z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mdc-elevation--z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-elevation--z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mdc-elevation--z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mdc-elevation--z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mdc-elevation--z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mdc-elevation--z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mdc-elevation--z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mdc-elevation--z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mdc-elevation--z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mdc-elevation--z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mdc-elevation--z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mdc-elevation--z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mdc-elevation--z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mdc-elevation--z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mdc-elevation--z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mdc-elevation--z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mdc-elevation--z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mdc-elevation-transition{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow}";
    var css = css_248z;

    let destroyer = null;
    function init() {
        if (destroyer !== null) {
            return destroyer;
        }
        const style = document.head.appendChild(document.createElement("style"));
        style.innerHTML = css;
        return destroyer = () => {
            document.head.removeChild(style);
            destroyer = null;
        };
    }

    var RmAppBar = {
      'css': `rm-app-bar,[is="rm-app-bar"]{ display: block; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); color: rgb(255, 255, 255); color: rgb(var(--color-on-primary, 255, 255, 255)); padding: 8px; box-sizing: border-box; transition: box-shadow ease-in-out 100ms; } rm-app-bar[placeholder]:not([placeholder="false"]),[is="rm-app-bar"][placeholder]:not([placeholder="false"]){ opacity: 0; } rm-app-bar[surface="black"],[is="rm-app-bar"][surface="black"]{ background: rgb(0, 0, 0); background: rgb(var(--color-black-surface, 0, 0, 0)); color: rgb(255, 255, 255); color: rgb(var(--color-on-black, 255, 255, 255)); } rm-app-bar[surface="dark"],[is="rm-app-bar"][surface="dark"]{ background: rgb(10, 10, 10); background: rgb(var(--color-dark-surface, 10, 10, 10)); color: rgb(255, 255, 255); color: rgb(var(--color-on-dark, 255, 255, 255)); } rm-app-bar[surface="light"],[is="rm-app-bar"][surface="light"]{ background: rgb(250, 250, 250); background: rgb(var(--color-light-surface, 250, 250, 250)); color: rgb(0, 0, 0); color: rgb(var(--color-on-light, 0, 0, 0)); } rm-app-bar[surface="white"],[is="rm-app-bar"][surface="white"]{ background: rgb(255, 255, 255); background: rgb(var(--color-white-surface, 255, 255, 255)); color: rgb(0, 0, 0); color: rgb(var(--color-on-white, 0, 0, 0)); } rm-app-bar[fixed]:not([fixed="false"]),[is="rm-app-bar"][fixed]:not([fixed="false"]){ position: fixed; top: 0; left: 0; right: 0; z-index: 99; } rm-app-bar[fixed]:not([fixed="false"])[bottom]:not([bottom="false"]),[is="rm-app-bar"][fixed]:not([fixed="false"])[bottom]:not([bottom="false"]){ position: fixed; top: unset; bottom: 0; left: 0; right: 0; } rm-app-bar[clamped]:not([clamped="false"]),[is="rm-app-bar"][clamped]:not([clamped="false"]){ overflow: hidden; } rm-app-bar.height-48,[is="rm-app-bar"].height-48{ height: 48px; padding: 4px 8px; } rm-app-bar.height-56,[is="rm-app-bar"].height-56{ height: 56px; } rm-app-bar.height-64,[is="rm-app-bar"].height-64{ height: 64px; padding: 12px 8px; }`,

      'exports': {
        state: {
            hasShadow: false
        },

        _mounted: false,

        onBeforeMount() {
            init();
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
            onChange(this.update, this);
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
            offChange(this.update, this);
            this.setScrollTarget(null);
            window.removeEventListener("resize", this._onresize);
        },

        getHeight() {
            return getHeight();
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
          '<slot expr1="expr1"></slot>',
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
              'redundantAttribute': 'expr1',
              'selector': '[expr1]'
            }
          ]
        );
      },

      'name': 'rm-app-bar'
    };

    return RmAppBar;

}));
