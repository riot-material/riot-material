(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@riot-material/elevation'), require('@riot-material/ripple'), require('@riot-material/focus-manager')) :
    typeof define === 'function' && define.amd ? define(['@riot-material/elevation', '@riot-material/ripple', '@riot-material/focus-manager'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.menu = factory(global.riotMaterial.elevation, global.riotMaterial.ripple, global.riotMaterial.focusManager)));
}(this, (function (elevation, ripple, focusManager) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var elevation__default = /*#__PURE__*/_interopDefaultLegacy(elevation);

    function getMenuStyleAt(time, anchor) {
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
        var rippleElement = null;
        while (element && element !== container) {
            if (ripple.isRipple(element)) {
                rippleElement = element;
                break;
            }
            element = element.parentElement;
        }
        return rippleElement;
    }
    var Component = {
        _onkeydown: null,
        _lastOpenedProp: null,
        _anchorElement: null,
        _closeThis: null,
        _direction: 0,
        _mounted: false,
        _time: 0,
        _realParent: null,
        _canHighlight: null,
        _currentHighlighted: null,
        _lastHighlighted: null,
        onBeforeMount: function () {
            this._closeThis = this.close.bind(this);
            this._canHighlight = new Map();
        },
        onMounted: function () {
            var _this = this;
            this._mounted = true;
            menuAnimationFrame.call(this);
            [
                "_bindTo",
                "close",
                "getAnchorElement",
                "isOpened",
                "open",
                "setAnchorElement"
            ].forEach(function (method) {
                _this.root[method] = _this[method].bind(_this);
            });
            Object.defineProperties(this.root, {
                "options": {
                    get: function () {
                        return _this._getOptions();
                    }
                }
            });
            this._onkeydown = function (event) {
                if (!_this.isOpened()) {
                    return;
                }
                switch (event.key) {
                    case "ArrowDown": {
                        return _this.highlightNext();
                    }
                    case "ArrowUp": {
                        return _this.highlightPrevious();
                    }
                    case "Enter": {
                        _this._selectHighlighted(true);
                        event.preventDefault();
                        return;
                    }
                    case "Escape": {
                        if (!_this.getPreventAutoClose()) {
                            _this.close();
                        }
                        else {
                            var wantsCloseEvent = new CustomEvent("wantsclose", {
                                detail: { source: "Escape" },
                                cancelable: true
                            });
                            _this.root.dispatchEvent(wantsCloseEvent);
                            if (wantsCloseEvent.defaultPrevented) {
                                _this.close();
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
        onBeforeUpdate: function () {
            var lastHighlighted = this._lastHighlighted;
            this._clean();
            this._lastHighlightedBeforeUpdate = lastHighlighted;
        },
        onUpdated: function () {
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
        onUnmounted: function () {
            this._mounted = false;
        },
        _scrollToHighlighted: function () {
            if (!this._lastHighlighted) {
                return;
            }
            var container = this.root.firstElementChild.firstElementChild;
            var containerRect = container.getBoundingClientRect();
            var highlightRect = this._lastHighlighted.getBoundingClientRect();
            var highlightTop = highlightRect.top - containerRect.top;
            var highlightBottom = highlightRect.bottom - containerRect.top;
            if (highlightTop < 0) {
                container.scrollBy(0, highlightTop);
            }
            else if (highlightBottom > containerRect.height) {
                container.scrollBy(0, highlightBottom - containerRect.height);
            }
        },
        _selectHighlighted: function (programmatical) {
            if (programmatical === void 0) { programmatical = false; }
            if (!this._lastHighlighted) {
                return;
            }
            var option = this._canHighlight.get(this._lastHighlighted);
            if (programmatical) {
                ripple.ripple(this._lastHighlighted).start().end();
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
        _handleClick: function (event) {
            if (!this._lastHighlighted ||
                (this._lastHighlighted !== event.target && !this._lastHighlighted.contains(event.target))) {
                return;
            }
            this._selectHighlighted();
        },
        _onmousedown: function (event) {
            if (this.getPreventFocus()) {
                event.preventDefault();
            }
        },
        _bindedElement: null,
        _bindTo: function (element) {
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
        _getOptions: function () {
            var options = [];
            var container = this.root.firstElementChild.firstElementChild;
            this.root.querySelectorAll("[menu-option]").forEach(function (option) {
                if (getRippleElement(option, container) == null) {
                    return;
                }
                options.push(option);
            });
            return options;
        },
        _clean: function () {
            this._lastHighlighted = this._lastHighlightedBeforeUpdate = null;
            this._clearHighlight();
            this._canHighlight.forEach(function (_, element) {
                ripple.ripple(element, { highlight: true });
            });
            this._canHighlight.clear();
        },
        _setup: function () {
            var _this = this;
            this._getOptions().forEach(function (option) {
                var rippleElement = getRippleElement(option, _this.root.firstElementChild.firstElementChild);
                if (ripple.ripple(rippleElement).getOption("highlight") && !_this._canHighlight.has(rippleElement)) {
                    _this._canHighlight.set(rippleElement, option);
                    var rippleObject = ripple.ripple(rippleElement, { highlight: false });
                    var isSelected = "selected" in option && option.selected;
                    if ((isSelected && !_this._lastHighlighted && !_this._lastHighlightedBeforeUpdate) ||
                        _this._lastHighlightedBeforeUpdate === rippleElement) {
                        _this._lastHighlighted = rippleElement;
                        _this._currentHighlighted = rippleObject.highlight();
                    }
                }
            });
        },
        _clearHighlight: function () {
            if (this._currentHighlighted) {
                this._currentHighlighted.end();
                this._currentHighlighted = null;
            }
        },
        _setHighlighted: function (event) {
            var _this = this;
            var rippleElement = getRippleElement(event.target, this.root.firstElementChild.firstElementChild);
            if (!this.getKeepHighlight()) {
                this._clearHighlight();
            }
            if (rippleElement != null) {
                Array.from(this._canHighlight.keys()).some(function (highligthable) {
                    if (rippleElement !== highligthable) {
                        return false;
                    }
                    _this._clearHighlight();
                    _this._currentHighlighted = ripple.ripple(_this._lastHighlighted = rippleElement).highlight();
                    return true;
                });
            }
        },
        _handleHighlightOnLeave: function () {
            if (this.getKeepHighlight()) {
                return;
            }
            this._clearHighlight();
        },
        highlightNext: function () {
            var _this = this;
            if (!this.isOpened() || this._canHighlight.size === 0) {
                return;
            }
            this._clearHighlight();
            var index = -1;
            if (!this._lastHighlighted || !Array.from(this._canHighlight.keys()).some(function (highlightable, i) {
                if (_this._lastHighlighted === highlightable) {
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
        highlightPrevious: function () {
            var _this = this;
            if (!this.isOpened() || this._canHighlight.size === 0) {
                return;
            }
            this._clearHighlight();
            var index = -1;
            if (!this._lastHighlighted || !Array.from(this._canHighlight.keys()).some(function (highlightable, i) {
                if (_this._lastHighlighted === highlightable) {
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
        isOpened: function () {
            if (this._direction === 0) {
                return this._time > 0;
            }
            return this._direction > 0;
        },
        open: function () {
            if (this._time > 0 && this._direction !== -1) {
                return;
            }
            elevation__default['default'](this.root.firstElementChild, 4);
            this._direction = 1;
            this.root.dispatchEvent(new Event("opening"));
        },
        close: function () {
            if (this._time < 1 && this._direction !== 1) {
                return;
            }
            focusManager.release();
            this._clean();
            elevation__default['default'](this.root.firstElementChild, 0);
            this._direction = -1;
            this.root.dispatchEvent(new Event("closing"));
        },
        setAnchorElement: function (element) {
            var previousAnchorElement = this._anchorElement;
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
        getAnchorElement: function () {
            return this._anchorElement;
        },
        getPreventFocus: function () {
            return this.props.preventFocus != null && this.props.preventFocus !== false;
        },
        getPreventAutoClose: function () {
            return this.props.preventAutoClose != null && this.props.preventAutoClose !== false;
        },
        getInheritWidth: function () {
            return this.props.inheritWidth == null && this.props.inheritWidth !== false;
        },
        getKeepHighlight: function () {
            return this.props.keepHighlight != null && this.props.keepHighlight !== false;
        }
    };
    function menuAnimationFrame() {
        var _this = this;
        var child = this.root.firstElementChild;
        var _lastNow = Date.now();
        var frame = function () {
            if (_this._mounted) {
                window.requestAnimationFrame(frame);
            }
            if (!_this.root.isConnected) {
                return;
            }
            var last = _lastNow;
            _lastNow = Date.now();
            if (_this._direction !== 0) {
                var duration = 150;
                var delta = (_lastNow - last) / duration;
                if (_this._direction > 0) {
                    if (_this._anchorElement == null) {
                        _this._time = 1;
                    }
                    else {
                        _this._time = Math.min(_this._time + delta, 1);
                    }
                }
                else if (_this._direction < 0) {
                    if (_this._anchorElement == null) {
                        _this._time = 0;
                    }
                    else {
                        _this._time = Math.max(_this._time - delta, 0);
                    }
                }
                if (_this._time >= 1) {
                    if (!_this.getPreventFocus() || !_this._anchorElement) {
                        focusManager.hold({
                            element: child,
                            onFocusInside: function () {
                            },
                            onFocusOutside: function () {
                                if (_this.getPreventAutoClose()) {
                                    var wantsCloseEvent = new CustomEvent("wantsclose", {
                                        detail: { source: "FocusOutside" },
                                        cancelable: true
                                    });
                                    _this.root.dispatchEvent(wantsCloseEvent);
                                    if (!wantsCloseEvent.defaultPrevented) {
                                        return false;
                                    }
                                }
                                _this.close();
                                return true;
                            },
                            onNext: function () {
                                _this.highlightNext();
                            },
                            onPrevious: function () {
                                _this.highlightPrevious();
                            }
                        });
                        focusManager.on("keydown", _this._onkeydown);
                    }
                    _this._direction = 0;
                    _this.root.dispatchEvent(new Event("open"));
                }
                else if (_this._time <= 0) {
                    _this._direction = 0;
                    _this.root.dispatchEvent(new Event("close"));
                }
            }
            if (_this._time === 0) {
                _this.root.style.display = "none";
            }
            else {
                _this.root.style.display = "";
                var anchor = "top";
                if (_this._anchorElement) {
                    var height = window.innerHeight;
                    var rect = _this._anchorElement.getBoundingClientRect();
                    if (rect.bottom < 0) {
                        _this.root.style.top = "0px";
                        _this.root.style.bottom = "";
                        child.firstElementChild.style.maxHeight = height -
                            (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px";
                    }
                    else if (rect.top > height) {
                        _this.root.style.top = "";
                        _this.root.style.bottom = "0px";
                        child.firstElementChild.style.maxHeight = height -
                            (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px";
                        anchor = "bottom";
                    }
                    else {
                        var heightTop = rect.top;
                        var heightBottom = height - rect.bottom;
                        if (heightTop < heightBottom) {
                            _this.root.style.top = rect.bottom + "px";
                            _this.root.style.bottom = "";
                            child.firstElementChild.style.maxHeight = height - rect.bottom -
                                (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px";
                        }
                        else {
                            _this.root.style.bottom = (height - rect.top) + "px";
                            _this.root.style.top = "";
                            anchor = "bottom";
                            child.firstElementChild.style.maxHeight = rect.top -
                                (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px";
                        }
                    }
                    if (_this.getInheritWidth()) {
                        var right = window.innerWidth - rect.right;
                        if (rect.left >= right) {
                            _this.root.style.left = "";
                            _this.root.style.right = right + "px";
                        }
                        else {
                            _this.root.style.left = rect.left + "px";
                            _this.root.style.right = "";
                        }
                    }
                    else {
                        _this.root.style.left = rect.left + "px";
                        _this.root.style.width = rect.width + "px";
                    }
                    _this.root.setAttribute("anchor", anchor);
                }
                var styleAt = getMenuStyleAt(_this._time, anchor);
                child.style.transform = styleAt.transform;
                child.style.opacity = styleAt.opacity + "";
                if (_this._direction > 0) {
                    if (_this._lastHighlighted) {
                        _this._scrollToHighlighted();
                    }
                    else {
                        _this.root.firstElementChild.firstElementChild.scrollTo(0, 0);
                    }
                }
            }
        };
        frame();
    }

    var index = {
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
                    scope
                  ) {
                    return scope._onmousedown;
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
                    scope
                  ) {
                    return scope._setHighlighted;
                  }
                },
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onmousemove',

                  'evaluate': function(
                    scope
                  ) {
                    return scope._setHighlighted;
                  }
                },
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onmouseleave',

                  'evaluate': function(
                    scope
                  ) {
                    return scope._handleHighlightOnLeave;
                  }
                },
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onclick',

                  'evaluate': function(
                    scope
                  ) {
                    return scope._handleClick;
                  }
                },
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onfocus',

                  'evaluate': function(
                    scope
                  ) {
                    return scope.open;
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
                    scope
                  ) {
                    return scope._closeThis;
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

    return index;

})));
