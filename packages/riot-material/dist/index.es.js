import AppBarComponent from '@riot-material/rm-app-bar';
import ButtonComponent from '@riot-material/rm-button';
import CheckboxComponent from '@riot-material/rm-checkbox';
import DialogComponent from '@riot-material/rm-dialog';
import DividerComponent from '@riot-material/rm-divider';
import IconComponent from '@riot-material/rm-icon';
import ListItemComponent from '@riot-material/rm-list-item';
import MenuComponent from '@riot-material/rm-menu';
import MenuItemComponent from '@riot-material/rm-menu-item';
import RadioComponent from '@riot-material/rm-radio';
import SelectComponent from '@riot-material/rm-select';
import TabbedPagesComponent from '@riot-material/rm-tabbed-pages';
import TextfieldComponent from '@riot-material/rm-textfield';
import TextfieldContainerComponent from '@riot-material/rm-textfield-container';
import * as appBarUtils from '@riot-material/app-bar-utils';
export { appBarUtils };
import * as background from '@riot-material/background';
export { background };
import * as elevation from '@riot-material/elevation';
export { elevation };
import * as ripple from '@riot-material/ripple';
export { ripple };
import * as surfaces from '@riot-material/surfaces';
export { surfaces };
import { register } from 'riot';

var RmListAvatar = {
  'css': `rm-list-avatar,[is="rm-list-avatar"]{ display: block; height: 40px; width: 40px; background: gray; } rm-list-avatar[circular],[is="rm-list-avatar"][circular]{ border-radius: 50%; }`,
  'exports': null,

  'template': function(
    template,
    expressionTypes,
    bindingTypes,
    getComponent
  ) {
    return template(
      null,
      [
        {
          'expressions': [
            {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'style',

              'evaluate': function(
                _scope
              ) {
                return _scope.props.src ? "background: url(" + _scope.props.src + ");" : "";
              }
            }
          ]
        }
      ]
    );
  },

  'name': 'rm-list-avatar'
};

var RmListGroup = {
  'css': `rm-list-group > rm-list-item:not(:first-child),[is="rm-list-group"] > rm-list-item:not(:first-child),rm-list-group > [is="rm-list-item"]:not(:first-child),[is="rm-list-group"] > [is="rm-list-item"]:not(:first-child){ padding-left: 2em; }`,

  'exports': {
    components: {
        "rm-list-item": ListItemComponent
    }
  },

  'template': function(
    template,
    expressionTypes,
    bindingTypes,
    getComponent
  ) {
    return template(
      '<rm-list-item expr0="expr0" passive></rm-list-item><slot expr1="expr1"></slot>',
      [
        {
          'type': bindingTypes.TAG,
          'getComponent': getComponent,

          'evaluate': function(
            _scope
          ) {
            return 'rm-list-item';
          },

          'slots': [
            {
              'id': 'default',
              'html': ' ',

              'bindings': [
                {
                  'expressions': [
                    {
                      'type': expressionTypes.TEXT,
                      'childNodeIndex': 0,

                      'evaluate': function(
                        _scope
                      ) {
                        return _scope.props.label;
                      }
                    }
                  ]
                }
              ]
            }
          ],

          'attributes': [],
          'redundantAttribute': 'expr0',
          'selector': '[expr0]'
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

  'name': 'rm-list-group'
};

var RmListImage = {
  'css': `rm-list-image,[is="rm-list-image"]{ display: block; height: 56px; width: 56px; background: gray; } rm-list-image[large],[is="rm-list-image"][large]{ width: 100px; margin-left: -16px; }`,
  'exports': null,

  'template': function(
    template,
    expressionTypes,
    bindingTypes,
    getComponent
  ) {
    return template(
      null,
      [
        {
          'expressions': [
            {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'style',

              'evaluate': function(
                _scope
              ) {
                return _scope.props.src ? `background-image: url(${_scope.prop.src});` : "";
              }
            }
          ]
        }
      ]
    );
  },

  'name': 'rm-list-image'
};

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

const BEFORE_FOCUS_CONTROLLER_INSTANCE = Symbol("before-focus-controller-instance");
const WAS_FUNCTION = Symbol("was-function");
function addListener(element, handler) {
    if (handler === void 0) {
        throw new Error("invalid handler");
    }
    if (typeof handler === "function") {
        handler = {
            [WAS_FUNCTION]: true,
            handleEvent: handler
        };
    }
    else if (typeof handler !== "object" || !("handleEvent" in handler)) {
        throw new Error("invalid handler");
    }
    let instance = element[BEFORE_FOCUS_CONTROLLER_INSTANCE];
    if (instance) {
        instance.listeners.push(handler);
        if (instance.listeners.length === 1) {
            window.addEventListener("touchstart", instance._window_ontouchstart);
        }
        return;
    }
    let touchShouldFire;
    let lastTouch = null;
    let ontouchstart = event => {
        if (lastTouch == null || event.changedTouches[0].identifier === lastTouch) {
            return;
        }
        touchShouldFire = false;
    };
    window.addEventListener("touchstart", ontouchstart);
    function callListeners(event) {
        let stop = false;
        let stopImmediate = false;
        const beforeFocusEvent = {
            type: "beforefocus",
            detail: { nativeEvent: event },
            initEvent() { return; },
            initCustomEvent() { return; },
            get cancelable() { return false; },
            get bubbles() { return false; },
            get composed() { return false; },
            get defaultPrevented() { return event.defaultPrevented; },
            get currentTarget() { return event.currentTarget; },
            get eventPhase() { return Event.AT_TARGET; },
            get cancelBubble() { return false; },
            get returnValue() { return event.returnValue; },
            set returnValue(value) { event.returnValue = value; },
            get isTrusted() { return true; },
            get srcElement() { return this.currentTarget; },
            get target() { return this.currentTarget; },
            get timeStamp() { return event.timeStamp; },
            composedPath() { return []; },
            preventDefault() { event.preventDefault(); },
            NONE: Event.NONE,
            BUBBLING_PHASE: Event.BUBBLING_PHASE,
            CAPTURING_PHASE: Event.CAPTURING_PHASE,
            AT_TARGET: Event.AT_TARGET,
            stopPropagation() { stop = true; },
            stopImmediatePropagation() { stopImmediate = true; }
        };
        instance.listeners.some(handler => {
            if (handler[WAS_FUNCTION]) {
                handler.handleEvent.call(null, beforeFocusEvent);
            }
            else {
                handler.handleEvent(beforeFocusEvent);
            }
            if (stopImmediate) {
                event.stopImmediatePropagation();
                return true;
            }
            if (stop) {
                event.stopPropagation();
                return true;
            }
            return false;
        });
    }
    let eventHandled = false;
    element[BEFORE_FOCUS_CONTROLLER_INSTANCE] = instance = {
        _window_ontouchstart: ontouchstart,
        ontouchstart(event) {
            if (instance.listeners.length === 0 || lastTouch != null) {
                return;
            }
            lastTouch = event.changedTouches[0].identifier;
            touchShouldFire = true;
        },
        ontouchmove(event) {
            if (instance.listeners.length === 0) {
                return;
            }
            touchShouldFire = false;
        },
        ontouchend(event) {
            if (instance.listeners.length === 0) {
                return;
            }
            lastTouch = null;
            eventHandled = true;
            setTimeout(() => eventHandled = false, 200);
            if (!touchShouldFire) {
                return;
            }
            callListeners(event);
        },
        ontouchcancel(event) {
            if (instance.listeners.length === 0) {
                return;
            }
            lastTouch = null;
            eventHandled = true;
            setTimeout(() => eventHandled = false, 200);
        },
        onmousedown(event) {
            if (instance.listeners.length === 0 || eventHandled) {
                return;
            }
            callListeners(event);
        },
        listeners: [handler]
    };
    element.addEventListener("touchstart", instance.ontouchstart);
    element.addEventListener("touchmove", instance.ontouchmove);
    element.addEventListener("touchend", instance.ontouchend);
    element.addEventListener("touchcancel", instance.ontouchcancel);
    element.addEventListener("mousedown", instance.onmousedown);
}
function removeListener(element, handler) {
    let instance = element[BEFORE_FOCUS_CONTROLLER_INSTANCE];
    if (!instance) {
        return;
    }
    let index = -1;
    if (instance.listeners.some((listener, i) => {
        if (typeof handler === "function" ? listener.handleEvent === handler : listener === handler) {
            index = i;
            return true;
        }
        return false;
    })) {
        instance.listeners.splice(index, 1);
        if (instance.listeners.length === 0) {
            window.removeEventListener("touchstart", instance._window_ontouchstart);
        }
    }
}
let nativeAddEventListener = null;
let nativeRemoveEventListener = null;
function polyfill() {
    if (nativeAddEventListener !== null) {
        return;
    }
    nativeAddEventListener = HTMLElement.prototype.addEventListener;
    HTMLElement.prototype.addEventListener = function (type, listener, options) {
        if (type === "beforefocus") {
            addListener(this, listener);
        }
        else {
            nativeAddEventListener.call(this, type, listener, options);
        }
    };
    nativeRemoveEventListener = HTMLElement.prototype.removeEventListener;
    HTMLElement.prototype.removeEventListener = function (type, listener, options) {
        if (type === "beforefocus") {
            removeListener(this, listener);
        }
        else {
            nativeRemoveEventListener.call(this, type, listener, options);
        }
    };
}
function restore() {
    if (nativeAddEventListener === null) {
        return;
    }
    HTMLElement.prototype.addEventListener = nativeAddEventListener;
    nativeAddEventListener = null;
    HTMLElement.prototype.removeEventListener = nativeRemoveEventListener;
    nativeRemoveEventListener = null;
}

var index_es$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  addListener: addListener,
  polyfill: polyfill,
  removeListener: removeListener,
  restore: restore
});

const LAST_PROPS = Symbol("last-props");
const NEW_PROPS = Symbol("new-props");
function newPropsWrapper(exports) {
    return {
        ...exports,
        onBeforeUpdate(props, state) {
            const newProps = this[NEW_PROPS] = (getNewProps(this[LAST_PROPS], props));
            this[LAST_PROPS] = props;
            return exports.onBeforeUpdate?.call(this, props, state, newProps);
        },
        onBeforeMount(props, state) {
            this[LAST_PROPS] = props;
            return exports.onBeforeMount?.call(this, props, state);
        },
        onUpdated(props, state) {
            return exports.onUpdated?.call(this, props, state, this[NEW_PROPS]);
        }
    };
    function getNewProps(lastProps, props) {
        return Object.freeze(Object.entries(props).filter(([prop, value]) => {
            return lastProps[prop] !== value;
        }).reduce((result, [prop, value]) => {
            result[prop] = value;
            return result;
        }, {}));
    }
}

var index_es = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': newPropsWrapper
});

register("rm-app-bar", AppBarComponent);
// register("rm-bottom-sheet", BottomSheetComponent);
register("rm-button", ButtonComponent);
register("rm-checkbox", CheckboxComponent);
// register("rm-circular-avatar", CircularAvatarComponent);
register("rm-dialog", DialogComponent);
register("rm-divider", DividerComponent);
register("rm-icon", IconComponent);
register("rm-list-avatar", RmListAvatar);
register("rm-list-group", RmListGroup);
register("rm-list-image", RmListImage);
register("rm-list-item", ListItemComponent);
register("rm-menu", MenuComponent);
register("rm-menu-item", MenuItemComponent);
register("rm-radio", RadioComponent);
// register("rm-ripple", RippleComponent);
register("rm-select", SelectComponent);
register("rm-tabbed-pages", TabbedPagesComponent);
// register("rm-tabs", TabsComponent);
// register("rm-textarea", TextareaComponent);
register("rm-textfield", TextfieldComponent);
register("rm-textfield-container", TextfieldContainerComponent);
register("rm-visibility-trigger", RmVisibilityTrigger);
// tslint:disable-next-line:typedef
const components = {
    appBar: AppBarComponent,
    // bottomSheet: BottomSheetComponent,
    button: ButtonComponent,
    checkbox: CheckboxComponent,
    // circularAvatar: CircularAvatarComponent,
    dialog: DialogComponent,
    divider: DividerComponent,
    icon: IconComponent,
    listAvatar: RmListAvatar,
    listGroup: RmListGroup,
    listImage: RmListImage,
    listItem: ListItemComponent,
    menu: MenuComponent,
    menuItem: MenuItemComponent,
    radio: RadioComponent,
    // ripple: RippleComponent,
    select: SelectComponent,
    tabbedPages: TabbedPagesComponent,
    // tabs: TabsComponent,
    // textarea: TextareaComponent,
    textfield: TextfieldComponent,
    textfieldContainer: TextfieldContainerComponent,
    visibilityTrigger: RmVisibilityTrigger
};

export { index_es$1 as beforeFocusListener, components, index_es as newPropsWrapper };
