(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@riot-material/elevation'), require('@riot-material/ripple'), require('@riot-material/focus-manager')) :
    typeof define === 'function' && define.amd ? define(['@riot-material/elevation', '@riot-material/ripple', '@riot-material/focus-manager'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.menu = factory(global.riotMaterial.elevation, global.riotMaterial.ripple, global.riotMaterial.focusManager)));
})(this, (function (elevation, ripple, focusManager) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var focusManager__namespace = /*#__PURE__*/_interopNamespace(focusManager);

    function getMenuStyleAt(time, anchor) {
        // time = 0 : closed
        // time = 1 : opened
        time = parseFloat(time);
        if (isNaN(time)) {
            time = 0;
        }
        return {
            opacity: time,
            transform: "translateY(" + (({
                "top": -100,
                "bottom": 100
            }[anchor] || -100) * (1 - time)) + "%) scale(" + (0.8 + (0.2 * time)) + ")"
        };
    }
    function getRippleElement(element, container) {
        let rippleElement = null;
        while (element && element !== container) {
            if (ripple.isRipple(element)) {
                rippleElement = element;
                break;
            }
            element = element.parentElement;
        }
        return rippleElement;
    }
    const Component = {
        _onkeydown: null,
        _lastOpenedProp: null,
        _anchorElement: null,
        _closeThis: null,
        _direction: 0,
        _mounted: false,
        _time: 0,
        _realParent: null,
        // @ts-ignore
        _canHighlight: null,
        _currentHighlighted: null,
        _lastHighlighted: null,
        onBeforeMount() {
            this._closeThis = this.close.bind(this);
            this._canHighlight = new Map();
        },
        onMounted() {
            this._mounted = true;
            menuAnimationFrame.call(this);
            [
                "_bindTo",
                "close",
                "getAnchorElement",
                "isOpened",
                "open",
                "setAnchorElement"
            ].forEach(method => {
                this.root[method] = this[method].bind(this);
            });
            Object.defineProperties(this.root, {
                "options": {
                    get: () => {
                        return this._getOptions();
                    }
                }
            });
            this._onkeydown = event => {
                if (!this.isOpened()) {
                    return;
                }
                switch (event.key) {
                    case "ArrowDown": {
                        return this.highlightNext();
                    }
                    case "ArrowUp": {
                        return this.highlightPrevious();
                    }
                    case "Enter": {
                        this._selectHighlighted(true);
                        event.preventDefault();
                        return;
                    }
                    case "Escape": {
                        if (!this.getPreventAutoClose()) {
                            this.close();
                        }
                        else {
                            // tslint:disable-next-line:typedef
                            const wantsCloseEvent = new CustomEvent("wantsclose", {
                                detail: { source: "Escape" },
                                cancelable: true
                            });
                            this.root.dispatchEvent(wantsCloseEvent);
                            if (wantsCloseEvent.defaultPrevented) {
                                this.close();
                            }
                        }
                        return;
                    }
                }
            };
            this._lastOpenedProp = this.props.opened;
            if (this.props.opened != null && this.props.opened !== false) {
                this.open();
            }
        },
        _lastHighlightedBeforeUpdate: null,
        onBeforeUpdate() {
            const lastHighlighted = this._lastHighlighted;
            this._clean();
            this._lastHighlightedBeforeUpdate = lastHighlighted;
        },
        onUpdated() {
            this._setup();
            this._lastHighlightedBeforeUpdate = null;
            if (this.props.opened !== this._lastOpenedProp) {
                if ((this._lastOpenedProp = this.props.opened) != null && this.props.opened !== false) {
                    this.open();
                }
                else {
                    this.close();
                }
            }
        },
        onUnmounted() {
            this._mounted = false;
        },
        _scrollToHighlighted() {
            if (!this._lastHighlighted) {
                return;
            }
            const container = this.root.firstElementChild.firstElementChild;
            const containerRect = container.getBoundingClientRect();
            const highlightRect = this._lastHighlighted.getBoundingClientRect();
            const highlightTop = highlightRect.top - containerRect.top;
            const highlightBottom = highlightRect.bottom - containerRect.top;
            if (highlightTop < 0) {
                container.scrollBy(0, highlightTop);
            }
            else if (highlightBottom > containerRect.height) {
                container.scrollBy(0, highlightBottom - containerRect.height);
            }
        },
        _selectHighlighted(programmatical = false) {
            if (!this._lastHighlighted) {
                return;
            }
            const option = this._canHighlight.get(this._lastHighlighted);
            if (programmatical) {
                ripple.ripple(this._lastHighlighted).start(null, null).end();
                option.click();
            }
            else {
                option.dispatchEvent(new CustomEvent("selected", {
                    detail: {
                        value: option.getAttribute("value")
                    },
                    bubbles: true, cancelable: false
                }));
            }
        },
        _handleClick(event) {
            if (!this._lastHighlighted ||
                (this._lastHighlighted !== event.target && !this._lastHighlighted.contains(event.target))) {
                return;
            }
            this._selectHighlighted();
        },
        _onmousedown(event) {
            if (this.getPreventFocus()) {
                event.preventDefault();
            }
        },
        _bindedElement: null,
        _bindTo(element) {
            if (this._bindedElement === element) {
                return;
            }
            if (this._bindedElement) {
                this._bindedElement.removeEventListener("keydown", this._onkeydown);
                this._bindedElement = null;
            }
            if (element && element instanceof HTMLElement) {
                this.setAnchorElement(this._bindedElement = element);
                this._bindedElement.addEventListener("keydown", this._onkeydown);
            }
            else {
                this.setAnchorElement(null);
            }
        },
        _getOptions() {
            const options = [];
            const container = this.root.firstElementChild.firstElementChild;
            this.root.querySelectorAll("[menu-option]").forEach(option => {
                if (getRippleElement(option, container) == null) {
                    return;
                }
                options.push(option);
            });
            return options;
        },
        _clean() {
            this._lastHighlighted = this._lastHighlightedBeforeUpdate = null;
            this._clearHighlight();
            this._canHighlight.forEach((_, element) => {
                ripple.ripple(element, { highlight: true });
            });
            this._canHighlight.clear();
        },
        _setup() {
            this._getOptions().forEach(option => {
                const rippleElement = getRippleElement(option, this.root.firstElementChild.firstElementChild);
                if (ripple.ripple(rippleElement).getOption("highlight") && !this._canHighlight.has(rippleElement)) {
                    this._canHighlight.set(rippleElement, option);
                    const rippleObject = ripple.ripple(rippleElement, { highlight: false });
                    const isSelected = "selected" in option && option.selected;
                    if ((isSelected && !this._lastHighlighted && !this._lastHighlightedBeforeUpdate) ||
                        this._lastHighlightedBeforeUpdate === rippleElement) {
                        this._lastHighlighted = rippleElement;
                        this._currentHighlighted = rippleObject.highlight();
                    }
                }
            });
        },
        _clearHighlight() {
            if (this._currentHighlighted) {
                this._currentHighlighted.end();
                this._currentHighlighted = null;
            }
        },
        _setHighlighted(event) {
            const rippleElement = getRippleElement(event.target, this.root.firstElementChild.firstElementChild);
            if (!this.getKeepHighlight()) {
                this._clearHighlight();
            }
            if (rippleElement != null) {
                Array.from(this._canHighlight.keys()).some(highligthable => {
                    if (rippleElement !== highligthable) {
                        return false;
                    }
                    this._clearHighlight();
                    this._currentHighlighted = ripple.ripple(this._lastHighlighted = rippleElement).highlight();
                    return true;
                });
            }
        },
        _handleHighlightOnLeave() {
            if (this.getKeepHighlight()) {
                return;
            }
            this._clearHighlight();
        },
        highlightNext() {
            if (!this.isOpened() || this._canHighlight.size === 0) {
                return;
            }
            this._clearHighlight();
            let index = -1;
            if (!this._lastHighlighted || !Array.from(this._canHighlight.keys()).some((highlightable, i) => {
                if (this._lastHighlighted === highlightable) {
                    index = i;
                    return true;
                }
            })) {
                this._currentHighlighted = ripple.ripple(this._lastHighlighted = Array.from(this._canHighlight.keys())[0]).highlight();
            }
            else {
                this._currentHighlighted = ripple.ripple(this._lastHighlighted = Array.from(this._canHighlight.keys())[(index + 1) % this._canHighlight.size]).highlight();
            }
            this._scrollToHighlighted();
        },
        highlightPrevious() {
            if (!this.isOpened() || this._canHighlight.size === 0) {
                return;
            }
            this._clearHighlight();
            let index = -1;
            if (!this._lastHighlighted || !Array.from(this._canHighlight.keys()).some((highlightable, i) => {
                if (this._lastHighlighted === highlightable) {
                    index = i;
                    return true;
                }
            })) {
                this._currentHighlighted = ripple.ripple(this._lastHighlighted = Array.from(this._canHighlight.keys())[this._canHighlight.size - 1]).highlight();
            }
            else {
                this._currentHighlighted = ripple.ripple(this._lastHighlighted = Array.from(this._canHighlight.keys())[(index - 1 + this._canHighlight.size) % this._canHighlight.size]).highlight();
            }
            this._scrollToHighlighted();
        },
        isOpened() {
            if (this._direction === 0) {
                return this._time > 0;
            }
            return this._direction > 0;
        },
        open() {
            if (this._time > 0 && this._direction !== -1) {
                return;
            }
            elevation.elevation(this.root.firstElementChild, 4);
            this._direction = 1;
            this.root.dispatchEvent(new Event("opening"));
        },
        close() {
            if (this._time < 1 && this._direction !== 1) {
                return;
            }
            focusManager__namespace.release();
            this._clean();
            elevation.elevation(this.root.firstElementChild, 0);
            this._direction = -1;
            this.root.dispatchEvent(new Event("closing"));
        },
        setAnchorElement(element) {
            const previousAnchorElement = this._anchorElement;
            if (element == null) {
                this._anchorElement = null;
            }
            else if (element instanceof HTMLElement) {
                if (this.root.contains(element)) {
                    throw new Error("element is in menu tree");
                }
                else {
                    this._anchorElement = element;
                }
            }
            else {
                throw new Error("invalid element");
            }
            if (previousAnchorElement) {
                document.body.removeChild(this.root);
                this._realParent.appendChild(this.root);
            }
            if (this._anchorElement) {
                (this._realParent = this.root.parentElement).removeChild(this.root);
                document.body.appendChild(this.root);
                this.root.style.position = "fixed";
            }
            else {
                this._realParent = null;
                this.root.style.top = "";
                this.root.style.left = "";
                this.root.style.width = "";
                this.root.style.position = "";
            }
        },
        getAnchorElement() {
            return this._anchorElement;
        },
        getPreventFocus() {
            return this.props.preventFocus != null && this.props.preventFocus !== false;
        },
        getPreventAutoClose() {
            return this.props.preventAutoClose != null && this.props.preventAutoClose !== false;
        },
        getInheritWidth() {
            return this.props.inheritWidth == null && this.props.inheritWidth !== false;
        },
        getKeepHighlight() {
            return this.props.keepHighlight != null && this.props.keepHighlight !== false;
        }
    };
    function menuAnimationFrame() {
        const child = this.root.firstElementChild;
        let _lastNow = Date.now();
        const frame = () => {
            if (this._mounted) {
                window.requestAnimationFrame(frame);
            }
            if (!this.root.isConnected) {
                return;
            }
            const last = _lastNow;
            _lastNow = Date.now();
            if (this._direction !== 0) {
                const duration = 150;
                const delta = (_lastNow - last) / duration;
                if (this._direction > 0) {
                    if (this._anchorElement == null) {
                        this._time = 1;
                    }
                    else {
                        this._time = Math.min(this._time + delta, 1);
                    }
                }
                else if (this._direction < 0) {
                    if (this._anchorElement == null) {
                        this._time = 0;
                    }
                    else {
                        this._time = Math.max(this._time - delta, 0);
                    }
                }
                if (this._time >= 1) {
                    if (!this.getPreventFocus() || !this._anchorElement) {
                        focusManager__namespace.hold({
                            element: child,
                            // onFocusInside: () => {
                            //     // should it do something?
                            // },
                            onFocusOutside: () => {
                                if (this.getPreventAutoClose()) {
                                    // tslint:disable-next-line:typedef
                                    const wantsCloseEvent = new CustomEvent("wantsclose", {
                                        detail: { source: "FocusOutside" },
                                        cancelable: true
                                    });
                                    this.root.dispatchEvent(wantsCloseEvent);
                                    if (!wantsCloseEvent.defaultPrevented) {
                                        return false;
                                    }
                                }
                                this.close();
                                return true;
                            },
                            onNext: () => {
                                this.highlightNext();
                            },
                            onPrevious: () => {
                                this.highlightPrevious();
                            }
                        });
                        focusManager__namespace.on("keydown", this._onkeydown);
                    }
                    this._direction = 0;
                    // this._setup();
                    this.root.dispatchEvent(new Event("open"));
                }
                else if (this._time <= 0) {
                    this._direction = 0;
                    this.root.dispatchEvent(new Event("close"));
                }
            }
            if (this._time === 0) {
                this.root.style.display = "none";
            }
            else {
                this.root.style.display = "";
                let anchor = "top";
                if (this._anchorElement) {
                    const height = window.innerHeight;
                    const rect = this._anchorElement.getBoundingClientRect();
                    if (rect.bottom < 0) {
                        this.root.style.top = "0px";
                        this.root.style.bottom = "";
                        child.firstElementChild.style.maxHeight = height -
                            (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px";
                    }
                    else if (rect.top > height) {
                        this.root.style.top = "";
                        this.root.style.bottom = "0px";
                        child.firstElementChild.style.maxHeight = height -
                            (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px";
                        anchor = "bottom";
                    }
                    else {
                        const heightTop = rect.top;
                        const heightBottom = height - rect.bottom;
                        if (heightTop < heightBottom) {
                            this.root.style.top = rect.bottom + "px";
                            this.root.style.bottom = "";
                            child.firstElementChild.style.maxHeight = height - rect.bottom -
                                (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px";
                        }
                        else {
                            this.root.style.bottom = (height - rect.top) + "px";
                            this.root.style.top = "";
                            anchor = "bottom";
                            child.firstElementChild.style.maxHeight = rect.top -
                                (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px";
                        }
                    }
                    if (this.getInheritWidth()) {
                        const right = window.innerWidth - rect.right;
                        if (rect.left >= right) {
                            this.root.style.left = "";
                            this.root.style.right = right + "px";
                        }
                        else {
                            this.root.style.left = rect.left + "px";
                            this.root.style.right = "";
                        }
                    }
                    else {
                        this.root.style.left = rect.left + "px";
                        this.root.style.width = rect.width + "px";
                    }
                    this.root.setAttribute("anchor", anchor);
                }
                const styleAt = getMenuStyleAt(this._time, anchor);
                child.style.transform = styleAt.transform;
                child.style.opacity = styleAt.opacity + "";
                if (this._direction > 0) {
                    if (this._lastHighlighted) {
                        this._scrollToHighlighted();
                    }
                    else {
                        this.root.firstElementChild.firstElementChild.scrollTo(0, 0);
                    }
                }
            }
        };
        frame();
    }

    var RmMenu = {
      'css': `rm-menu,[is="rm-menu"]{ display: block; font-size: 16px; overflow: hidden; padding: 40px; margin: -40px; pointer-events: none; z-index: 100; } rm-menu:not([anchor]),[is="rm-menu"]:not([anchor]){ border-radius: 0; margin: 0; padding: 0; } rm-menu[anchor=top],[is="rm-menu"][anchor=top]{ padding-top: 0; margin-top: 0; border-radius: 0 0 0.25em 0.25em; } rm-menu:not([variant])[anchor=top],[is="rm-menu"]:not([variant])[anchor=top],rm-menu[variant=outlined][anchor=top],[is="rm-menu"][variant=outlined][anchor=top],rm-menu[variant=outlined]:not([anchor]),[is="rm-menu"][variant=outlined]:not([anchor]){ border-radius: 0.25em; } rm-menu[anchor=bottom],[is="rm-menu"][anchor=bottom]{ padding-bottom: 0; margin-bottom: 0; border-radius: 0.25em 0.25em 0 0; } rm-menu[anchor=bottom],[is="rm-menu"][anchor=bottom],rm-menu[variant=filled][anchor=bottom],[is="rm-menu"][variant=filled][anchor=bottom],rm-menu[variant=outlined][anchor=bottom],[is="rm-menu"][variant=outlined][anchor=bottom]{ border-radius: 0.25em; } rm-menu > div,[is="rm-menu"] > div{ background: white; padding: .5em 0; z-index: 99; pointer-events: all; border-radius: inherit; transform-origin: top center; user-select: none; } rm-menu > div,[is="rm-menu"] > div{ background: white; padding: .5em 0; transform: }`,
      'exports': Component,

      'template': function(
        template,
        expressionTypes,
        bindingTypes,
        getComponent
      ) {
        return template(
          '<div expr0="expr0" tabindex="0" style="outline: none;"><div expr1="expr1" style="overflow-y: auto; position: relative;"><slot expr2="expr2"></slot><div style="position: absolute;" ref="item-highlight"></div></div></div>',
          [
            {
              'redundantAttribute': 'expr0',
              'selector': '[expr0]',

              'expressions': [
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onmousedown',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope._onmousedown;
                  }
                }
              ]
            },
            {
              'redundantAttribute': 'expr1',
              'selector': '[expr1]',

              'expressions': [
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onmouseenter',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope._setHighlighted;
                  }
                },
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onmousemove',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope._setHighlighted;
                  }
                },
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onmouseleave',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope._handleHighlightOnLeave;
                  }
                },
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onclick',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope._handleClick;
                  }
                },
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onfocus',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope.open;
                  }
                }
              ]
            },
            {
              'type': bindingTypes.SLOT,

              'attributes': [
                {
                  'type': expressionTypes.ATTRIBUTE,
                  'name': 'close-menu',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope._closeThis;
                  }
                }
              ],

              'name': 'default',
              'redundantAttribute': 'expr2',
              'selector': '[expr2]'
            }
          ]
        );
      },

      'name': 'rm-menu'
    };

    return RmMenu;

}));
