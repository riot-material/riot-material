import '@riot-material/elevation';
import '@riot-material/surfaces';

var index = {
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
      '<div expr0="expr0"><div style="height: 8px; width: 100%;"></div><div style="overflow: auto; width: 100%;"><slot expr1="expr1"></slot></div><div style="height: 8px; width: 100%;"></div></div>',
      [
        {
          'redundantAttribute': 'expr0',
          'selector': '[expr0]',

          'expressions': [
            {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'class',

              'evaluate': function(
                scope
              ) {
                return [
                  'rm-',
                  scope.getSurface(),
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
          'redundantAttribute': 'expr1',
          'selector': '[expr1]'
        }
      ]
    );
  },

  'name': 'rm-floating-surface'
};

export default index;
