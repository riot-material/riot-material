(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('tabbable'), require('riot'), require('@riot-material/ripple')) :
    typeof define === 'function' && define.amd ? define(['tabbable', 'riot', '@riot-material/ripple'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.list = factory(global.tabbable, global.riot, global.riotMaterial.ripple)));
}(this, (function (tabbable, riot, ripple) { 'use strict';

    const TABINDEX = Symbol("tabindex");
    const RIPPLE_HIGHLIGHT = Symbol("ripple-highlight");

    function disableTabbable(tabbable, definitely) {
        tabbable[TABINDEX] = tabbable.getAttribute("tabindex");
        if (definitely) {
            tabbable.removeAttribute("tabindex");
        } else {
            tabbable.setAttribute("tabindex", "-1");
        }
    }
    function enableTabbable(tabbable) {
        if (tabbable[TABINDEX] === undefined) {
            return;
        }
        tabbable.setAttribute("tabindex", tabbable[TABINDEX]);
    }
    function restoreTabbable(tabbable) {
        enableTabbable(tabbable);
        delete tabbable[TABINDEX];
    }

    var index = {
      'css': `rm-list,[is="rm-list"]{ display: block; outline: none; }`,

      'exports': {
        _onkeydown(event) {
            if (this.getPreventFocus()) {
                return;
            }
            switch (event.key) {
                case "ArrowDown": {
                    this.highlightNext();
                    break;
                }
                case "ArrowUp": {
                    this.highlightPrevious();
                    break;
                }
                default: {
                    return;
                }
            }
            event.preventDefault();
        },

        _onmouseleave() {
            if (!this.getPreventFocus() || this._lastHighlight == null || this.getKeepHighlight()) {
                return;
            }
            this.lessen();
        },

        getItems() {
            return Array.prototype.filter.call(this.root.querySelectorAll("rm-list-item"), item => {
                return item[TABINDEX] !== undefined || tabbable.isFocusable(item);
            });
        },

        onMounted() {
            [
                "highlightCurrent",
                "highlightNext",
                "highlightPrevious",
                "isHighlighted",
                "getCurrent",
                "lessen",
                "setIndex"
            ].forEach(method => {
                this.root[method] = this[method].bind(this);
            });

            const preventFocus = this.getPreventFocus();
            this.getItems().forEach((item, index) => {
                if (this.getSingleHighlight() && ripple.isRipple(item)) {
                    const obj = ripple.ripple(item);
                    item[RIPPLE_HIGHLIGHT] = obj.getOption("highlight") || null;
                    obj.set({ highlight: false });
                }
                if (index === 0 && !preventFocus) {
                    return;
                }
                tabbable.tabbable(item).forEach(disableTabbable);
                disableTabbable(item, preventFocus);
            });
        },

        onBeforeUpdate() {
            this.getItems().forEach((item, index) => {
                tabbable.focusable(item, { includeContainer: true }).forEach(restoreTabbable);
                if (ripple.isRipple(item) && item[RIPPLE_HIGHLIGHT] !== undefined) {
                    ripple.ripple(item, { highlight: item[RIPPLE_HIGHLIGHT] });
                    delete item[RIPPLE_HIGHLIGHT];
                }
            });
        },

        onUpdated() {
            const preventFocus = this.getPreventFocus();
            const items = this.getItems();
            items.forEach((item, index) => {
                if (this.getSingleHighlight() && ripple.isRipple(item)) {
                    const obj = ripple.ripple(item);
                    item[RIPPLE_HIGHLIGHT] = obj.getOption("highlight") || null;
                    obj.set({ highlight: false });
                }
                if (index === this._index && !preventFocus) {
                    return;
                }
                tabbable.tabbable(item).forEach(disableTabbable);
                disableTabbable(item, preventFocus);
            });
            this._index = Math.max(0, Math.min(this._index, items.length - 1));
        },

        _index: 0,
        _lastHighlight: null,
        _lastHighlighted: null,

        _updateCurrent(event) {
            const singleHighlight = this.getSingleHighlight();
            if (event.type === "mousemove" && !singleHighlight) {
                return;
            }
            const preventFocus = this.getPreventFocus();
            if (preventFocus) {
                event.preventDefault();
            }
            parent = event.target;
            while (
                parent != null && parent !== this.root &&
                parent.tagName !== "RM-LIST-ITEM" &&
                [parent.getAttribute(riot.__.globals.IS_DIRECTIVE)].map(i => i && i.toUpperCase())[0] !== "RM-LIST-ITEM"
            ) {
                parent = parent.parentElement;
            }
            if (parent == null || parent === this.root) {
                return;
            }
            const items = this.getItems();
            if (!Array.prototype.some.call(items, (item, index) => {
                if (parent === item) {
                    if (this._index === index) {
                        return true;
                    }
                    if (this._index < items.length) {
                        const lastItem = items[this._index];
                        tabbable.tabbable(lastItem).forEach(disableTabbable);
                        disableTabbable(lastItem, preventFocus);
                    }
                    this._index = index;
                    tabbable.focusable(item, { includeContainer: true }).forEach(enableTabbable);
                    this.root.dispatchEvent(new Event("currentchange"));
                    return true;
                }
                return false;
            })) {
                if (preventFocus && !this.getKeepHighlight()) {
                    this.lessen();
                    return;
                }
            }
            if (
                preventFocus &&
                (!this.getPreventHighlight() || this._lastHighlight != null ||
                (singleHighlight && event.type === "mousemove"))
            ) {
                this.highlightCurrent();
            }
        },

        highlightCurrent() {
            const item = this.getCurrent();
            if (this._lastHighlighted === item) {
                return;
            }
            if (this.getPreventFocus()) {
                this.lessen();
                this._lastHighlighted = item;
                this._lastHighlight = ripple.isRipple(item) ? ripple.ripple(item).highlight() : null;
            } else {
                item.focus();
            }
            this.root.dispatchEvent(new Event("highlightchange"));
        },

        highlightNext() {
            const items = this.getItems();
            if (this._index >= items.length - 1) {
                this.highlightCurrent();
                return;
            }
            const target = items[this._index + 1];
            this._updateCurrent({ preventDefault() {}, target });
            this.highlightCurrent();
        },

        highlightPrevious() {
            const items = this.getItems();
            if (this._index <= 0) {
                this.highlightCurrent();
                return;
            }
            const target = items[this._index - 1];
            this._updateCurrent({ preventDefault() {}, target });
            this.highlightCurrent();
        },

        lessen() {
            if (this._lastHighlight != null) {
                this._lastHighlight.end();
                this._lastHighlight = null;
                this._lastHighlighted = null;
            }
        },

        getPreventFocus() {
            return this.props.preventFocus != null && this.props.preventFocus !== false;
        },

        getPreventHighlight() {
            return this.props.preventHighlight != null && this.props.preventHighlight !== false;
        },

        getSingleHighlight() {
            return this.props.singleHighlight != null && this.props.singleHighlight !== false;
        },

        getKeepHighlight() {
            return this.props.keepHighlight != null && this.props.keepHighlight !== false;
        },

        getCurrent() {
            const items = this.getItems();
            return items[Math.max(0, Math.min(this._index, items.length - 1))];
        },

        isHighlighted() {
            return this.getPreventFocus() ? this._lastHighlight != null : this.getCurrent() === document.activeElement;
        },

        setIndex(index) {
            const items = this.getItems();
            index = Math.max(0, Math.min(index, items.length - 1));
            if (isNaN(index)) {
                return;
            }
            const wasHighlighted = this.isHighlighted();
            const target = items[index];
            this._updateCurrent({ preventDefault() {}, target });
            if (wasHighlighted) {
                this.highlightCurrent();
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
          '<slot expr0="expr0"></slot>',
          [
            {
              'expressions': [
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onkeydown',

                  'evaluate': function(
                    scope
                  ) {
                    return scope._onkeydown;
                  }
                },
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onmousedown',

                  'evaluate': function(
                    scope
                  ) {
                    return scope._updateCurrent;
                  }
                },
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onmousemove',

                  'evaluate': function(
                    scope
                  ) {
                    return scope._updateCurrent;
                  }
                },
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onmouseleave',

                  'evaluate': function(
                    scope
                  ) {
                    return scope._onmouseleave;
                  }
                }
              ]
            },
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

      'name': 'rm-list'
    };

    return index;

})));
