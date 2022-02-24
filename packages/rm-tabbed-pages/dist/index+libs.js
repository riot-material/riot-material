(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('riot')) :
    typeof define === 'function' && define.amd ? define(['riot'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.tabbedPages = factory(global.riot)));
})(this, (function (riot) { 'use strict';

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

    var riot__namespace = /*#__PURE__*/_interopNamespace(riot);

    const POSITION_CONTROLLER = Symbol("position-controller");
    function positionController(element, actionThreshold = 10) {
        const existingPositionController = element[POSITION_CONTROLLER];
        if (existingPositionController != null) {
            return existingPositionController;
        }
        let self;
        let eventTarget = new EventTarget();
        let length = 0;
        const getLength = () => {
            return length;
        };
        const setLength = l => {
            length = l;
            return self;
        };
        let index = 0;
        const getSelectedIndex = () => {
            return index;
        };
        const setSelectedIndex = i => {
            index = Math.min(Math.max(0, i), length - 1);
            return self;
        };
        let position = 0;
        const getPosition = () => {
            let m = parseFloat(position);
            if (isNaN(m)) {
                return 0;
            }
            m = Math.max(Math.min(1, m), -1);
            return (index === 0 && m < 0 || index === (length - 1) && m > 0) ? 0 : m;
        };
        {
            let _touchIdentifier = null;
            let startX = 0;
            let startY = 0;
            let lastDirection = null;
            let positioningStarted = true;
            const startPositioning = event => {
                if (_touchIdentifier != null) {
                    return;
                }
                const touch = event.targetTouches[0];
                _touchIdentifier = touch.identifier;
                startX = touch.clientX;
                startY = touch.clientY;
                lastDirection = null;
                positioningStarted = true;
            };
            let preventedScroll = false;
            const updatePosition = event => {
                if (!positioningStarted) {
                    return;
                }
                let index;
                if (!Array.prototype.some.call(event.changedTouches, (touch, i) => {
                    index = i;
                    return touch.identifier === _touchIdentifier;
                })) {
                    return;
                }
                const lastPosition = getPosition();
                const touch = event.changedTouches[index];
                const endX = touch.clientX;
                const endY = touch.clientY;
                const deltaX = endX - startX;
                const deltaY = endY - startY;
                if (Math.abs(deltaX) > actionThreshold) {
                    preventedScroll = true;
                }
                if (!preventedScroll && Math.abs(deltaY) > actionThreshold) {
                    positioningStarted = false;
                    return;
                }
                if (preventedScroll) {
                    event.preventDefault();
                }
                position = -deltaX / element.getBoundingClientRect().width;
                const newPosition = getPosition();
                if (newPosition !== lastPosition) {
                    lastDirection = newPosition > lastPosition ? 1 : -1;
                }
                eventTarget.dispatchEvent(new CustomEvent("positionchanged", { detail: { position: newPosition } }));
            };
            const endPositioning = event => {
                if (!Array.prototype.some.call(event.changedTouches, touch => {
                    return touch.identifier === _touchIdentifier;
                })) {
                    return;
                }
                _touchIdentifier = null;
                preventedScroll = false;
                if (!positioningStarted) {
                    return;
                }
                if (lastDirection != null) {
                    const m = getPosition();
                    position = 0;
                    let newM;
                    if (m < 0) {
                        newM = lastDirection < 0 ? -1 : 0;
                    }
                    else {
                        newM = lastDirection > 0 ? 1 : 0;
                    }
                    lastDirection = null;
                    const roundedPosition = Math.round(newM);
                    const previousIndex = getSelectedIndex();
                    if (roundedPosition !== 0) {
                        setSelectedIndex(previousIndex + roundedPosition);
                    }
                    eventTarget.dispatchEvent(new CustomEvent("positionapplied", {
                        detail: {
                            previousIndex, currentIndex: getSelectedIndex()
                        }
                    }));
                }
                positioningStarted = false;
            };
            element.addEventListener("touchstart", startPositioning);
            element.addEventListener("touchmove", updatePosition);
            element.addEventListener("touchcancel", endPositioning);
            element.addEventListener("touchend", endPositioning);
        }
        return element[POSITION_CONTROLLER] = self = {
            getPosition,
            getSelectedIndex,
            setSelectedIndex,
            getLength,
            setLength,
            on(type, callback) {
                eventTarget.addEventListener(type, callback);
                return self;
            },
            off(type, callback) {
                eventTarget.removeEventListener(type, callback);
                return self;
            }
        };
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    var whatInput$1 = {exports: {}};

    /**
     * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
     * @version v5.2.10
     * @link https://github.com/ten1seven/what-input
     * @license MIT
     */

    (function (module, exports) {
    (function webpackUniversalModuleDefinition(root, factory) {
    	module.exports = factory();
    })(commonjsGlobal, function() {
    return /******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};

    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {

    /******/ 		// Check if module is in cache
    /******/ 		if(installedModules[moduleId])
    /******/ 			return installedModules[moduleId].exports;

    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = installedModules[moduleId] = {
    /******/ 			exports: {},
    /******/ 			id: moduleId,
    /******/ 			loaded: false
    /******/ 		};

    /******/ 		// Execute the module function
    /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    /******/ 		// Flag the module as loaded
    /******/ 		module.loaded = true;

    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}


    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;

    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;

    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";

    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(0);
    /******/ })
    /************************************************************************/
    /******/ ([
    /* 0 */
    /***/ (function(module, exports) {

    	module.exports = function () {
    	  /*
    	   * bail out if there is no document or window
    	   * (i.e. in a node/non-DOM environment)
    	   *
    	   * Return a stubbed API instead
    	   */
    	  if (typeof document === 'undefined' || typeof window === 'undefined') {
    	    return {
    	      // always return "initial" because no interaction will ever be detected
    	      ask: function ask() {
    	        return 'initial';
    	      },

    	      // always return null
    	      element: function element() {
    	        return null;
    	      },

    	      // no-op
    	      ignoreKeys: function ignoreKeys() {},

    	      // no-op
    	      specificKeys: function specificKeys() {},

    	      // no-op
    	      registerOnChange: function registerOnChange() {},

    	      // no-op
    	      unRegisterOnChange: function unRegisterOnChange() {}
    	    };
    	  }

    	  /*
    	   * variables
    	   */

    	  // cache document.documentElement
    	  var docElem = document.documentElement;

    	  // currently focused dom element
    	  var currentElement = null;

    	  // last used input type
    	  var currentInput = 'initial';

    	  // last used input intent
    	  var currentIntent = currentInput;

    	  // UNIX timestamp of current event
    	  var currentTimestamp = Date.now();

    	  // check for a `data-whatpersist` attribute on either the `html` or `body` elements, defaults to `true`
    	  var shouldPersist = 'false';

    	  // form input types
    	  var formInputs = ['button', 'input', 'select', 'textarea'];

    	  // empty array for holding callback functions
    	  var functionList = [];

    	  // list of modifier keys commonly used with the mouse and
    	  // can be safely ignored to prevent false keyboard detection
    	  var ignoreMap = [16, // shift
    	  17, // control
    	  18, // alt
    	  91, // Windows key / left Apple cmd
    	  93 // Windows menu / right Apple cmd
    	  ];

    	  var specificMap = [];

    	  // mapping of events to input types
    	  var inputMap = {
    	    keydown: 'keyboard',
    	    keyup: 'keyboard',
    	    mousedown: 'mouse',
    	    mousemove: 'mouse',
    	    MSPointerDown: 'pointer',
    	    MSPointerMove: 'pointer',
    	    pointerdown: 'pointer',
    	    pointermove: 'pointer',
    	    touchstart: 'touch',
    	    touchend: 'touch'

    	    // boolean: true if the page is being scrolled
    	  };var isScrolling = false;

    	  // store current mouse position
    	  var mousePos = {
    	    x: null,
    	    y: null

    	    // map of IE 10 pointer events
    	  };var pointerMap = {
    	    2: 'touch',
    	    3: 'touch', // treat pen like touch
    	    4: 'mouse'

    	    // check support for passive event listeners
    	  };var supportsPassive = false;

    	  try {
    	    var opts = Object.defineProperty({}, 'passive', {
    	      get: function get() {
    	        supportsPassive = true;
    	      }
    	    });

    	    window.addEventListener('test', null, opts);
    	  } catch (e) {}
    	  // fail silently


    	  /*
    	   * set up
    	   */

    	  var setUp = function setUp() {
    	    // add correct mouse wheel event mapping to `inputMap`
    	    inputMap[detectWheel()] = 'mouse';

    	    addListeners();
    	  };

    	  /*
    	   * events
    	   */

    	  var addListeners = function addListeners() {
    	    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
    	    // can only demonstrate potential, but not actual, interaction
    	    // and are treated separately
    	    var options = supportsPassive ? { passive: true } : false;

    	    document.addEventListener('DOMContentLoaded', setPersist);

    	    // pointer events (mouse, pen, touch)
    	    if (window.PointerEvent) {
    	      window.addEventListener('pointerdown', setInput);
    	      window.addEventListener('pointermove', setIntent);
    	    } else if (window.MSPointerEvent) {
    	      window.addEventListener('MSPointerDown', setInput);
    	      window.addEventListener('MSPointerMove', setIntent);
    	    } else {
    	      // mouse events
    	      window.addEventListener('mousedown', setInput);
    	      window.addEventListener('mousemove', setIntent);

    	      // touch events
    	      if ('ontouchstart' in window) {
    	        window.addEventListener('touchstart', setInput, options);
    	        window.addEventListener('touchend', setInput);
    	      }
    	    }

    	    // mouse wheel
    	    window.addEventListener(detectWheel(), setIntent, options);

    	    // keyboard events
    	    window.addEventListener('keydown', setInput);
    	    window.addEventListener('keyup', setInput);

    	    // focus events
    	    window.addEventListener('focusin', setElement);
    	    window.addEventListener('focusout', clearElement);
    	  };

    	  // checks if input persistence should happen and
    	  // get saved state from session storage if true (defaults to `false`)
    	  var setPersist = function setPersist() {
    	    shouldPersist = !(docElem.getAttribute('data-whatpersist') || document.body.getAttribute('data-whatpersist') === 'false');

    	    if (shouldPersist) {
    	      // check for session variables and use if available
    	      try {
    	        if (window.sessionStorage.getItem('what-input')) {
    	          currentInput = window.sessionStorage.getItem('what-input');
    	        }

    	        if (window.sessionStorage.getItem('what-intent')) {
    	          currentIntent = window.sessionStorage.getItem('what-intent');
    	        }
    	      } catch (e) {
    	        // fail silently
    	      }
    	    }

    	    // always run these so at least `initial` state is set
    	    doUpdate('input');
    	    doUpdate('intent');
    	  };

    	  // checks conditions before updating new input
    	  var setInput = function setInput(event) {
    	    var eventKey = event.which;
    	    var value = inputMap[event.type];

    	    if (value === 'pointer') {
    	      value = pointerType(event);
    	    }

    	    var ignoreMatch = !specificMap.length && ignoreMap.indexOf(eventKey) === -1;

    	    var specificMatch = specificMap.length && specificMap.indexOf(eventKey) !== -1;

    	    var shouldUpdate = value === 'keyboard' && eventKey && (ignoreMatch || specificMatch) || value === 'mouse' || value === 'touch';

    	    // prevent touch detection from being overridden by event execution order
    	    if (validateTouch(value)) {
    	      shouldUpdate = false;
    	    }

    	    if (shouldUpdate && currentInput !== value) {
    	      currentInput = value;

    	      persistInput('input', currentInput);
    	      doUpdate('input');
    	    }

    	    if (shouldUpdate && currentIntent !== value) {
    	      // preserve intent for keyboard interaction with form fields
    	      var activeElem = document.activeElement;
    	      var notFormInput = activeElem && activeElem.nodeName && (formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1 || activeElem.nodeName.toLowerCase() === 'button' && !checkClosest(activeElem, 'form'));

    	      if (notFormInput) {
    	        currentIntent = value;

    	        persistInput('intent', currentIntent);
    	        doUpdate('intent');
    	      }
    	    }
    	  };

    	  // updates the doc and `inputTypes` array with new input
    	  var doUpdate = function doUpdate(which) {
    	    docElem.setAttribute('data-what' + which, which === 'input' ? currentInput : currentIntent);

    	    fireFunctions(which);
    	  };

    	  // updates input intent for `mousemove` and `pointermove`
    	  var setIntent = function setIntent(event) {
    	    var value = inputMap[event.type];

    	    if (value === 'pointer') {
    	      value = pointerType(event);
    	    }

    	    // test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove
    	    detectScrolling(event);

    	    // only execute if scrolling isn't happening
    	    if ((!isScrolling && !validateTouch(value) || isScrolling && event.type === 'wheel' || event.type === 'mousewheel' || event.type === 'DOMMouseScroll') && currentIntent !== value) {
    	      currentIntent = value;

    	      persistInput('intent', currentIntent);
    	      doUpdate('intent');
    	    }
    	  };

    	  var setElement = function setElement(event) {
    	    if (!event.target.nodeName) {
    	      // If nodeName is undefined, clear the element
    	      // This can happen if click inside an <svg> element.
    	      clearElement();
    	      return;
    	    }

    	    currentElement = event.target.nodeName.toLowerCase();
    	    docElem.setAttribute('data-whatelement', currentElement);

    	    if (event.target.classList && event.target.classList.length) {
    	      docElem.setAttribute('data-whatclasses', event.target.classList.toString().replace(' ', ','));
    	    }
    	  };

    	  var clearElement = function clearElement() {
    	    currentElement = null;

    	    docElem.removeAttribute('data-whatelement');
    	    docElem.removeAttribute('data-whatclasses');
    	  };

    	  var persistInput = function persistInput(which, value) {
    	    if (shouldPersist) {
    	      try {
    	        window.sessionStorage.setItem('what-' + which, value);
    	      } catch (e) {
    	        // fail silently
    	      }
    	    }
    	  };

    	  /*
    	   * utilities
    	   */

    	  var pointerType = function pointerType(event) {
    	    if (typeof event.pointerType === 'number') {
    	      return pointerMap[event.pointerType];
    	    } else {
    	      // treat pen like touch
    	      return event.pointerType === 'pen' ? 'touch' : event.pointerType;
    	    }
    	  };

    	  // prevent touch detection from being overridden by event execution order
    	  var validateTouch = function validateTouch(value) {
    	    var timestamp = Date.now();

    	    var touchIsValid = value === 'mouse' && currentInput === 'touch' && timestamp - currentTimestamp < 200;

    	    currentTimestamp = timestamp;

    	    return touchIsValid;
    	  };

    	  // detect version of mouse wheel event to use
    	  // via https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
    	  var detectWheel = function detectWheel() {
    	    var wheelType = null;

    	    // Modern browsers support "wheel"
    	    if ('onwheel' in document.createElement('div')) {
    	      wheelType = 'wheel';
    	    } else {
    	      // Webkit and IE support at least "mousewheel"
    	      // or assume that remaining browsers are older Firefox
    	      wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
    	    }

    	    return wheelType;
    	  };

    	  // runs callback functions
    	  var fireFunctions = function fireFunctions(type) {
    	    for (var i = 0, len = functionList.length; i < len; i++) {
    	      if (functionList[i].type === type) {
    	        functionList[i].fn.call(undefined, type === 'input' ? currentInput : currentIntent);
    	      }
    	    }
    	  };

    	  // finds matching element in an object
    	  var objPos = function objPos(match) {
    	    for (var i = 0, len = functionList.length; i < len; i++) {
    	      if (functionList[i].fn === match) {
    	        return i;
    	      }
    	    }
    	  };

    	  var detectScrolling = function detectScrolling(event) {
    	    if (mousePos.x !== event.screenX || mousePos.y !== event.screenY) {
    	      isScrolling = false;

    	      mousePos.x = event.screenX;
    	      mousePos.y = event.screenY;
    	    } else {
    	      isScrolling = true;
    	    }
    	  };

    	  // manual version of `closest()`
    	  var checkClosest = function checkClosest(elem, tag) {
    	    var ElementPrototype = window.Element.prototype;

    	    if (!ElementPrototype.matches) {
    	      ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.webkitMatchesSelector;
    	    }

    	    if (!ElementPrototype.closest) {
    	      do {
    	        if (elem.matches(tag)) {
    	          return elem;
    	        }

    	        elem = elem.parentElement || elem.parentNode;
    	      } while (elem !== null && elem.nodeType === 1);

    	      return null;
    	    } else {
    	      return elem.closest(tag);
    	    }
    	  };

    	  /*
    	   * init
    	   */

    	  // don't start script unless browser cuts the mustard
    	  // (also passes if polyfills are used)
    	  if ('addEventListener' in window && Array.prototype.indexOf) {
    	    setUp();
    	  }

    	  /*
    	   * api
    	   */

    	  return {
    	    // returns string: the current input type
    	    // opt: 'intent'|'input'
    	    // 'input' (default): returns the same value as the `data-whatinput` attribute
    	    // 'intent': includes `data-whatintent` value if it's different than `data-whatinput`
    	    ask: function ask(opt) {
    	      return opt === 'intent' ? currentIntent : currentInput;
    	    },

    	    // returns string: the currently focused element or null
    	    element: function element() {
    	      return currentElement;
    	    },

    	    // overwrites ignored keys with provided array
    	    ignoreKeys: function ignoreKeys(arr) {
    	      ignoreMap = arr;
    	    },

    	    // overwrites specific char keys to update on
    	    specificKeys: function specificKeys(arr) {
    	      specificMap = arr;
    	    },

    	    // attach functions to input and intent "events"
    	    // funct: function to fire on change
    	    // eventType: 'input'|'intent'
    	    registerOnChange: function registerOnChange(fn, eventType) {
    	      functionList.push({
    	        fn: fn,
    	        type: eventType || 'input'
    	      });
    	    },

    	    unRegisterOnChange: function unRegisterOnChange(fn) {
    	      var position = objPos(fn);

    	      if (position || position === 0) {
    	        functionList.splice(position, 1);
    	      }
    	    },

    	    clearStorage: function clearStorage() {
    	      window.sessionStorage.clear();
    	    }
    	  };
    	}();

    /***/ })
    /******/ ])
    });
    }(whatInput$1));

    var whatInput = whatInput$1.exports;

    const RIPPLE = Symbol("ripple");
    const RIPPLE_COUNT = Symbol("ripple-count");
    const RIPPLE_OPTIONS = Symbol("ripple_options");
    var TYPE;
    (function (TYPE) {
        TYPE[TYPE["NORMAL"] = 0] = "NORMAL";
        TYPE[TYPE["QUICK"] = 1] = "QUICK";
        TYPE[TYPE["INSTANT"] = 2] = "INSTANT";
    })(TYPE || (TYPE = {}));
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
        constructor(x, y, r, type = TYPE.NORMAL) {
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
                case TYPE.QUICK: {
                    div.style.transitionDuration = "175ms";
                    break;
                }
                case TYPE.INSTANT: {
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
            if (whatInput?.ask?.() !== "keyboard" && !ripple[RIPPLE_OPTIONS].usePointerFocus) {
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
                const currentRipple = new Ripple(0, 0, null, TYPE.INSTANT).attachTo(element, () => {
                    this[RIPPLE_COUNT]--;
                });
                this[RIPPLE_COUNT]++;
                return currentRipple;
            },
            start(x, y, event, type = TYPE.NORMAL) {
                let isFocus = !!(event && event.type === "focus");
                let isMouseEnter = !!(event && event.type === "mouseenter");
                let options = this[RIPPLE_OPTIONS];
                if (isFocus) {
                    type = options.instantHighlight ? TYPE.INSTANT : TYPE.QUICK;
                }
                else if (isMouseEnter) {
                    type = this[RIPPLE_COUNT] > 0 || options.instantHighlight ? TYPE.INSTANT : TYPE.QUICK;
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

    const PAGE_INDEX = Symbol("page-index");

    var RmTabbedPages = {
      'css': `rm-tabbed-pages,[is="rm-tabbed-pages"]{ white-space: nowrap; overflow: hidden; width: 100%; display: block; font-size: 0; transform: scaleY(1); } rm-tabbed-pages > div:first-child,[is="rm-tabbed-pages"] > div:first-child{ overflow: hidden; display: block; width: 100%; } rm-tabbed-pages > div:first-child > div:first-child,[is="rm-tabbed-pages"] > div:first-child > div:first-child{ display: block; width: 100%; overflow: scroll visible; position: relative; user-select: none; text-align: center; } rm-tabbed-pages > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:first-child{ display: inline-table; font-size: initial; text-align: center; } rm-tabbed-pages:not([centered]) > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"]:not([centered]) > div:first-child > div:first-child > div:first-child,rm-tabbed-pages[centered="false" i] > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"][centered="false" i] > div:first-child > div:first-child > div:first-child{ width: 100%; } rm-tabbed-pages > div:first-child > div:first-child > div:first-child > div,[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:first-child > div{ display: table-cell; overflow: hidden; position: relative; width: 1px; height: 100%; } rm-tabbed-pages > div:first-child > div:first-child > div:first-child > div > button,[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:first-child > div > button{ background-color: transparent; border: 0; padding: 12px 16px; font-size: 16px; line-height: 20px; height: 100%; width: 100%; cursor: pointer; outline: none; color: rgb(0, 0, 0); color: rgb(var(--color-on-background, 0, 0, 0)); } rm-tabbed-pages > div:first-child > div:first-child > div:nth-child(2),[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:nth-child(2){ position: absolute; bottom: 0; left: 0; height: 2px; width: 100px; transition: transform ease-in-out 200ms; transform-origin: left; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); } rm-tabbed-pages > div:nth-child(2),[is="rm-tabbed-pages"] > div:nth-child(2){ overflow: hidden; max-height: 21474836px; transition: transform ease-in-out 200ms; } rm-tabbed-pages > div:nth-child(2) > *,[is="rm-tabbed-pages"] > div:nth-child(2) > *{ display: inline-block; width: 100%; vertical-align: top; transition: transform ease-in-out 200ms; font-size: initial; white-space: initial; }`,

      'exports': {
        onMounted() {
            this._manipulate();
            {
                const header = this.root.firstElementChild.firstElementChild;
                header.style.marginBottom = `-${ (
                header.getBoundingClientRect().height - header.clientHeight
            ).toFixed(3) }px`;
            }
            let width = this.root.getBoundingClientRect().width;
            const frame = () => {
                if (!this.root.isConnected) {
                    return;
                }
                const newWidth = this.root.getBoundingClientRect().width;
                if (newWidth !== width) {
                    this._updateIndicator(true);
                    width = newWidth;
                }
                window.requestAnimationFrame(frame);
            };
            window.requestAnimationFrame(frame);
            positionController(this.root.children[1])
            .setSelectedIndex(this.getSelectedIndex())
            .on("positionchanged", event => this.update({ instant: true }))
            .on("positionapplied", event => {
                if (event.detail.currentIndex === event.detail.previousIndex) {
                    this.update({ skipUpdate: true });
                } else {
                    this.setSelectedIndex(event.detail.currentIndex);
                }
            });
        },

        onBeforeUpdate() {
            if (this.state.selectedIndex != null) {
                this.state.selectedIndex = Math.round(this.state.selectedIndex);
            }
            if (isNaN(this.state.selectedIndex)) {
                delete this.state.selectedIndex;
            }
        },

        onUpdated() {
            this._manipulate(true);
        },

        _lastHiddenTabsPropValue: undefined,
        _hiddenTabs: [],
        _indicatorTimeout: null,

        _manipulate(update = false) {
            const tabContainer = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .firstElementChild // TAB CONTAINER
            ;
            const pageContainer = this.root.children[1];

            // restore hidden tabs and set correct view
            const currentlySelectedIndex = this.getSelectedIndex();
            const currentlyRawSelectedIndex = this._getRawIndexOf(this.getSelectedIndex());
            this._hiddenTabs = [];
            this.slots.forEach((slot, index) => {
                if (slot.bindings.some(binding => {
                    const parent = this[riot__namespace.__.globals.PARENT_KEY_SYMBOL] || null;
                    if (
                        binding.type !== 1 ||
                        slot.html.match(
                            new RegExp(`^<[^>]+\\s+(?:[^>]+\\s+)*${
                            binding.redundantAttribute
                        }(?:="${
                            binding.redundantAttribute
                        }")?(?:\\s+[^>]+)*(?=>)>`)
                        ) === null ||
                        binding.evaluate(Object.create(parent))
                    ) {
                        return false;
                    }

                    const updatedIndex = this._getUpdatedIndexOf(index);
                    const page = pageContainer.children[updatedIndex];
                    if (page && page[PAGE_INDEX] === index) {
                        tabContainer.removeChild(tabContainer.children[updatedIndex]);
                        // unmount page at hidden index
                        const instance = page[riot__namespace.__.globals.DOM_COMPONENT_INSTANCE_PROPERTY];
                        if (instance != null) {
                            instance.unmount(Object.create(parent), parent);
                        }
                        pageContainer.removeChild(page);
                    }

                    this._hiddenTabs.push(index);
                    return true;
                })) {
                    return;
                }

                let tabButton = null;
                let page;
                const updatedIndex = this._getUpdatedIndexOf(index);
                pageContainer.children[updatedIndex];
                if (updatedIndex >= pageContainer.children.length) {
                    page = pageContainer.appendChild(document.createElement("div"));
                    page[PAGE_INDEX] = index;
                    tabButton = tabContainer.appendChild(document.createElement("div"));
                } else if (index !== (page = pageContainer.children[updatedIndex])[PAGE_INDEX]) {
                    page = pageContainer.insertBefore(document.createElement("div"), pageContainer.children[index]);
                    page[PAGE_INDEX] = index;
                    tabButton = tabContainer.insertBefore(document.createElement("div"), tabContainer.children[index]);
                }
                // scroll to selected index
                const updatedSelectedIndex = this._getUpdatedIndexOf(currentlyRawSelectedIndex);
                page.style.transition = this.state.instant || updatedSelectedIndex !== currentlySelectedIndex ? "none" : "";
                page.style.transform = "translateX(-" + ((updatedSelectedIndex + this.getPosition()) * 100) + "%)";
                page.style.visibility = updatedSelectedIndex === updatedIndex ? "visible" : "hidden";
                page.style.maxHeight = updatedSelectedIndex === updatedIndex ? "" : "0px";

                if (tabButton != null) {
                    const button = tabButton.appendChild(document.createElement("button"));
                    button.addEventListener("click", event => {
                        this.setSelectedIndex(this._getUpdatedIndexOf(index));
                    });
                    button.innerText = slot.id;
                    ripple(button, { detectLabel: false, color: "currentColor", instantHighlight: true });
                }
            });
            const newlySelectedIndex = this._getUpdatedIndexOf(currentlyRawSelectedIndex);
            if (currentlySelectedIndex !== newlySelectedIndex) {
                this.state.selectedIndex = newlySelectedIndex;
                positionController(this.root.children[1]).setSelectedIndex(this.getSelectedIndex());
                this._updateIndicator(true);
            }

            // update positionController length
            positionController(this.root.children[1]).setLength(this.getLength());

            {
                if (this._indicatorTimeout !== null) {
                    clearTimeout(this._indicatorTimeout);
                }
                let instant = !update || this.state.instant;
                this._indicatorTimeout = setTimeout(() => {
                    // set indicator to correct position and size
                    this._updateIndicator(instant);
                    this._indicatorTimeout = null;
                });
            }

            if (!this.state.instant) {
                const selectedIndex = this.getSelectedIndex();
                const slot = this._getSlotAt(selectedIndex);
                const el = pageContainer.children[selectedIndex];
                let instance = el[riot__namespace.__.globals.DOM_COMPONENT_INSTANCE_PROPERTY];
                if (instance == null) {
                    instance = el[riot__namespace.__.globals.DOM_COMPONENT_INSTANCE_PROPERTY] = riot__namespace.__.DOMBindings.template(slot.html, slot.bindings);
                    instance.mount(
                        el, Object.create(this[riot__namespace.__.globals.PARENT_KEY_SYMBOL]),
                        this[riot__namespace.__.globals.PARENT_KEY_SYMBOL]
                    );
                } else if (update && !this.state.skipUpdate) {
                    instance.update(
                        Object.create(this[riot__namespace.__.globals.PARENT_KEY_SYMBOL]),
                        this[riot__namespace.__.globals.PARENT_KEY_SYMBOL]
                    );
                }
            }
            delete this.state.instant;
            delete this.state.skipUpdate;
        },

        _updateIndicator(instant = false) {
            const indicator = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .children[1]       // INDICATOR
            ;
            indicator.style.transition = instant ? "none" : "";
            indicator.style.transform = `translateX(${ this._getIndicatorLeft() }px) scaleX(${ this._getIndicatorWidth()/100 })`;
        },

        _getUpdatedIndexOf(index) {
            return index - this._hiddenTabs.filter(a => a < index).length;
        },

        _getRawIndexOf(index) {
            this._hiddenTabs.some(hidden => {
                if (hidden > index) {
                    return true;
                }
                index++;
                return false;
            });
            return index;
        },

        _getSlotAt(index) {
            return this.slots[this._getRawIndexOf(index)];
        },

        getLength() {
            return this.slots.length - this._hiddenTabs.filter(a => a < this.slots.length).length;
        },

        _lastSelectedIndexPropValue: undefined,

        getSelectedIndex() {
            if (this.props.selectedIndex !== this._lastSelectedIndexPropValue) {
                this._lastSelectedIndexPropValue = this.props.selectedIndex;
                const selectedIndex = parseInt(this.props.selectedIndex, 10);
                if (!isNaN(selectedIndex)) {
                    this.state.selectedIndex = selectedIndex;
                }
            }
            const length = this.getLength();
            if (this.state.selectedIndex === undefined) {
                this.state.selectedIndex = length > 0 ? 0 : null;
            } else {
                this.state.selectedIndex = length > 0 ?
                    Math.max(0, Math.min(this.state.selectedIndex, length - 1)) : null
                ;
            }
            return this.state.selectedIndex;
        },

        setSelectedIndex(index) {
            if (index === this.getSelectedIndex()) {
                return;
            }
            this.update({ selectedIndex: index });
            positionController(this.root.children[1]).setSelectedIndex(this.getSelectedIndex());
        },

        _getIndicatorLeft() {
            const selectedIndex = this.getSelectedIndex();
            if (selectedIndex == null) {
                return 0;
            }
            const rect = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .firstElementChild // TAB CONTAINER
                .children[selectedIndex] // TAB BUTTON
                .getBoundingClientRect()
            ;
            const delta = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .scrollLeft -
                this.root.getBoundingClientRect().left
            ;
            let left = rect.left + delta;
            const position = this.getPosition();
            if (position !== 0) {
                const index = selectedIndex + (position > 0 ? 1 : -1);
                const rect = this.root
                    .firstElementChild // SCROLLBAR HIDER
                    .firstElementChild // HEADER
                    .firstElementChild // TAB CONTAINER
                    .children[index] // TAB BUTTON
                    .getBoundingClientRect()
                ;
                left += ((rect.left + delta - left) * Math.abs(position));
            }
            return left;
        },

        _getIndicatorWidth() {
            const selectedIndex = this.getSelectedIndex();
            if (selectedIndex == null) {
                return 0;
            }
            let width = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .firstElementChild // TAB CONTAINER
                .children[selectedIndex] // TAB BUTTON
                .getBoundingClientRect().width
            ;
            const position = this.getPosition();
            if (position !== 0) {
                const index = selectedIndex + (position > 0 ? 1 : -1);
                const rect = this.root
                    .firstElementChild // SCROLLBAR HIDER
                    .firstElementChild // HEADER
                    .firstElementChild // TAB CONTAINER
                    .children[index] // TAB BUTTON
                    .getBoundingClientRect()
                ;
                width += ((rect.width - width) * Math.abs(position));
            }
            return width;
        },

        getPosition() {
            return positionController(this.root.children[1]).getPosition();
        }
      },

      'template': function(
        template,
        expressionTypes,
        bindingTypes,
        getComponent
      ) {
        return template(
          '<div style="transform: scaleY(1);"><div><div></div><div></div></div></div><div></div>',
          []
        );
      },

      'name': 'rm-tabbed-pages'
    };

    return RmTabbedPages;

}));
