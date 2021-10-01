(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('what-input')) :
    typeof define === 'function' && define.amd ? define(['exports', 'what-input'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.ripple = {}), global.whatInput));
})(this, (function (exports, whatInput) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var whatInput__default = /*#__PURE__*/_interopDefaultLegacy(whatInput);

    const RIPPLE = Symbol("ripple");
    const RIPPLE_COUNT = Symbol("ripple-count");
    const RIPPLE_OPTIONS = Symbol("ripple_options");
    exports.TYPE = void 0;
    (function (TYPE) {
        TYPE[TYPE["NORMAL"] = 0] = "NORMAL";
        TYPE[TYPE["QUICK"] = 1] = "QUICK";
        TYPE[TYPE["INSTANT"] = 2] = "INSTANT";
    })(exports.TYPE || (exports.TYPE = {}));
    function requestAnimationFrame(fn) {
        if (window.requestAnimationFrame) {
            return window.requestAnimationFrame(fn);
        }
        return setTimeout(fn, 0);
    }
    let scaleUpStyle = null;
    function getScaleUpStyle() {
        if (scaleUpStyle === null) {
            let div = document.createElement("div");
            div.style.transform = "scale(1)";
            document.body.appendChild(div);
            scaleUpStyle = window.getComputedStyle(div).transform;
            document.body.removeChild(div);
        }
        return scaleUpStyle;
    }
    let canEventStartRipple = true;
    let destroyer = null;
    function init() {
        if (destroyer !== null) {
            return destroyer;
        }
        const style = document.head.appendChild(document.createElement("style"));
        style.innerHTML = `` +
            `.rm-ripple-container { overflow: hidden; position: relative; }` +
            `.rm-ripple-container--unbounded { overflow: visible; }` +
            `.rm-ripple-container--highlighto.rm-ripple-container--highlighted:not([disabled])::after,` +
            `.rm-ripple-container--highlighto:not([disabled]):hover::after {` +
            `content: ''; position: absolute;` +
            `top: 0; right: 0; bottom: 0; left: 0;` +
            `background: black; background: var(--ripple-color, black); pointer-events: none;` +
            `border-radius: inherit; opacity: .1;` +
            `}` +
            `.rm-ripple {` +
            `position: absolute; border-radius: 50%; background: black;` +
            `background: var(--ripple-color, black); pointer-events: none;` +
            `/*transition: opacity cubic-bezier(.22,.61,.36,1) 450ms, transform cubic-bezier(.22,.61,.36,1) 400ms;*/` +
            `transition: opacity cubic-bezier(0.4,0,0.2,1) 450ms, transform cubic-bezier(0.4,0,0.2,1) 450ms;` +
            `}`;
        const listener = () => { canEventStartRipple = true; };
        window.addEventListener("pointerdown", listener);
        return destroyer = () => {
            document.head.removeChild(style);
            window.removeEventListener("pointerdown", listener);
            destroyer = null;
        };
    }
    class Ripple {
        _div;
        _computedStyle;
        _ended = false;
        _onEnd = null;
        constructor(x, y, r, type = exports.TYPE.NORMAL) {
            let div = this._div = document.createElement("div");
            if (r == null) {
                div.setAttribute("style", `left:0;top:0;bottom:0;right:0;` +
                    `border-radius:inherit;transform:scale(0);` +
                    `opacity:.12;opacity:var(--color-opacity-tertiary, .12);`);
            }
            else {
                let cx = x - r;
                let cy = y - r;
                div.setAttribute("style", `left:${cx}px;` +
                    `top:${cy}px;` +
                    `width:${r * 2}px;` +
                    `height:${r * 2}px;` +
                    `transform:scale(0);` +
                    `opacity:.12;` +
                    `opacity:var(--color-opacity-tertiary, .12);`);
            }
            switch (type) {
                case exports.TYPE.QUICK: {
                    div.style.transitionDuration = "175ms";
                    break;
                }
                case exports.TYPE.INSTANT: {
                    div.style.transitionDuration = "0ms";
                }
            }
            div.classList.add("rm-ripple");
            this._computedStyle = window.getComputedStyle(div);
        }
        _frame() {
            if (document.hidden || document.visibilityState !== "visible") {
                return;
            }
            let element = this._div.parentElement;
            if (!element) {
                return;
            }
            let rect = this._div.getBoundingClientRect();
            if (rect.width !== 0 || rect.height !== 0) {
                if (this._computedStyle.transform === getScaleUpStyle()) {
                    if (this._computedStyle.opacity === "0") {
                        element.removeChild(this._div);
                        return;
                    }
                    else {
                        if (this._ended) {
                            this._div.style.opacity = "0";
                        }
                    }
                }
            }
            requestAnimationFrame(this._frame.bind(this));
        }
        _scaleUp() {
            requestAnimationFrame(() => {
                this._div.style.transform = "scale(1)";
                requestAnimationFrame(this._frame.bind(this));
            });
        }
        attachTo(element, onEnd) {
            if (this._div.parentElement) {
                throw new Error("Ripple already attached");
            }
            if (this._ended) {
                throw new Error("Ripple already ended");
            }
            if (element.firstElementChild != null) {
                element.insertBefore(this._div, element.firstElementChild);
            }
            else {
                element.appendChild(this._div);
            }
            this._scaleUp();
            this._onEnd = onEnd || null;
            return this;
        }
        end() {
            this._ended = true;
            if (this._onEnd) {
                this._onEnd();
            }
            return this;
        }
    }
    function ripple(element, options) {
        // get the ripple generator stored in the element
        let ripple = element[RIPPLE];
        if (options == null && ripple != null) {
            return ripple;
        }
        init();
        options = {
            radius: undefined,
            unbounded: false,
            centered: false,
            disabled: false,
            highlight: false,
            instantHighlight: false,
            unboundedFocus: false,
            color: "currentColor",
            focusTarget: undefined,
            detectLabel: true,
            usePointerFocus: true,
            stopRippling: true,
            ...(ripple != null ? ripple[RIPPLE_OPTIONS] : {}),
            ...options
        };
        if (options.detectLabel != null && !options.detectLabel) {
            options.usePointerFocus = false;
        }
        else {
            options.detectLabel = true;
        }
        // if already exists, set the new options
        if (ripple) {
            return ripple.set(options);
        }
        let pointerElement = element;
        let lastFocusTarget = undefined;
        let onFocus = event => {
            if (whatInput__default["default"]?.ask?.() !== "keyboard" && !ripple[RIPPLE_OPTIONS].usePointerFocus) {
                return;
            }
            ripple.start(null, null, event);
        };
        let onMouseEnter = event => {
            if (!ripple[RIPPLE_OPTIONS].highlight || ripple[RIPPLE_OPTIONS].disabled) {
                return;
            }
            ripple.start(null, null, event);
        };
        ripple = {
            highlight() {
                const currentRipple = new Ripple(0, 0, null, exports.TYPE.INSTANT).attachTo(element, () => {
                    this[RIPPLE_COUNT]--;
                });
                this[RIPPLE_COUNT]++;
                return currentRipple;
            },
            start(x, y, event, type = exports.TYPE.NORMAL) {
                let isFocus = !!(event && event.type === "focus");
                let isMouseEnter = !!(event && event.type === "mouseenter");
                let options = this[RIPPLE_OPTIONS];
                if (isFocus) {
                    type = options.instantHighlight ? exports.TYPE.INSTANT : exports.TYPE.QUICK;
                }
                else if (isMouseEnter) {
                    type = this[RIPPLE_COUNT] > 0 || options.instantHighlight ? exports.TYPE.INSTANT : exports.TYPE.QUICK;
                }
                let r = null;
                let rect = null;
                if (options.centered || x == null) {
                    x = (rect || element.getBoundingClientRect()).width / 2;
                }
                if (options.centered || y == null) {
                    y = (rect || element.getBoundingClientRect()).height / 2;
                }
                if (!(isFocus || isMouseEnter) || options.unboundedFocus) {
                    r = options.radius || null;
                    if (r == null || r <= 0) {
                        rect = rect || element.getBoundingClientRect();
                        if (y >= rect.height / 2) {
                            if (x >= rect.width / 2) {
                                r = Math.sqrt(x * x + y * y);
                            }
                            else {
                                r = Math.sqrt(Math.pow(rect.width - x, 2) + y * y);
                            }
                        }
                        else {
                            if (x >= rect.width / 2) {
                                r = Math.sqrt(x * x + Math.pow(rect.height - y, 2));
                            }
                            else {
                                r = Math.sqrt(Math.pow(rect.width - x, 2) + Math.pow(rect.height - y, 2));
                            }
                        }
                    }
                }
                let currentRipple = new Ripple(x, y, r, type).attachTo(element, () => {
                    this[RIPPLE_COUNT]--;
                });
                this[RIPPLE_COUNT]++;
                if (event && event.isTrusted) {
                    let once = (up_event) => {
                        if (isFocus) {
                            (lastFocusTarget || element).removeEventListener("blur", once);
                        }
                        else if (isMouseEnter) {
                            pointerElement.removeEventListener("mouseleave", once);
                        }
                        else {
                            window.removeEventListener("pointerup", once);
                            window.removeEventListener("pointercancel", once);
                            if (up_event.pointerId !== event.pointerId) {
                                return;
                            }
                        }
                        currentRipple.end();
                    };
                    if (isFocus) {
                        (lastFocusTarget || element).addEventListener("blur", once);
                    }
                    else if (isMouseEnter) {
                        pointerElement.addEventListener("mouseleave", once);
                    }
                    else {
                        window.addEventListener("pointerup", once);
                        window.addEventListener("pointercancel", once);
                    }
                }
                return currentRipple;
            },
            /**
             * Cambia le impostazioni al creatore di increspature
             * @param options
             */
            set(options) {
                const prevOptions = this[RIPPLE_OPTIONS];
                options = this[RIPPLE_OPTIONS] = {
                    ...prevOptions,
                    ...options,
                    detectLabel: prevOptions.detectLabel
                };
                if (options.detectLabel != null && !options.detectLabel) {
                    options.usePointerFocus = false;
                }
                else {
                    options.detectLabel = true;
                }
                if (options.unbounded) {
                    element.classList.add("rm-ripple-container--unbounded");
                }
                else {
                    element.classList.remove("rm-ripple-container--unbounded");
                }
                if (options.highlight) {
                    element.classList.add("rm-ripple-container--highlight");
                }
                else {
                    element.classList.remove("rm-ripple-container--highlight");
                }
                if (element.style.setProperty) {
                    if (options.color) {
                        element.style.setProperty("--ripple-color", options.color);
                    }
                    else {
                        element.style.setProperty("--ripple-color", "black");
                    }
                }
                if (options.focusTarget !== lastFocusTarget) {
                    if (lastFocusTarget) {
                        lastFocusTarget.removeEventListener("focus", onFocus);
                        lastFocusTarget = undefined;
                    }
                    else {
                        element.removeEventListener("focus", onFocus);
                    }
                    if (options.focusTarget) {
                        lastFocusTarget = options.focusTarget;
                        lastFocusTarget.addEventListener("focus", onFocus);
                    }
                    else {
                        element.addEventListener("focus", onFocus);
                    }
                }
                else {
                    element.removeEventListener("focus", onFocus);
                    element.addEventListener("focus", onFocus);
                }
                pointerElement.removeEventListener("mouseenter", onMouseEnter);
                pointerElement.addEventListener("mouseenter", onMouseEnter);
                return this;
            },
            getOption(option) {
                return this[RIPPLE_OPTIONS][option];
            },
            [RIPPLE_OPTIONS]: options,
            [RIPPLE_COUNT]: 0
        };
        if (options.detectLabel) {
            let parent = element.parentElement;
            while (parent) {
                if (parent.tagName === "LABEL") {
                    pointerElement = parent;
                    break;
                }
                parent = parent.parentElement;
            }
        }
        pointerElement.addEventListener("pointerdown", event => {
            if (!canEventStartRipple || ripple[RIPPLE_OPTIONS].disabled) {
                return;
            }
            let rect = element.getBoundingClientRect();
            ripple.start(event.clientX - rect.x, event.clientY - rect.y, event);
            if (ripple[RIPPLE_OPTIONS].stopRippling) {
                canEventStartRipple = false;
            }
            setTimeout(() => {
            }, 0);
        });
        element[RIPPLE] = ripple;
        element.classList.add("rm-ripple-container");
        ripple.set(options);
        return ripple;
    }
    function isRipple(element) {
        return element[RIPPLE] != null;
    }

    exports.init = init;
    exports.isRipple = isRipple;
    exports.ripple = ripple;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
