(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.checkbox = factory()));
})(this, (function () { 'use strict';

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

	var RmCheckbox = {
	  'css': `rm-checkbox,[is="rm-checkbox"]{ position: relative; font: message-box; font-size: 16px; cursor: pointer; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none; display: inline-block; margin-right: 8px; outline: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; vertical-align: top; } rm-checkbox[disabled],[is="rm-checkbox"][disabled],rm-checkbox[readonly],[is="rm-checkbox"][readonly]{ cursor: default; } rm-checkbox[disabled],[is="rm-checkbox"][disabled]{ opacity: 0.6; } rm-checkbox label,[is="rm-checkbox"] label{ cursor: inherit; display: inline-table; vertical-align: middle; } rm-checkbox [ref="box"],[is="rm-checkbox"] [ref="box"]{ height: 1em; width: 1em; position: relative; display: inline-block; vertical-align: middle; box-sizing: border-box; border-radius: 0.125em; background: transparent; margin: 0.25em .5em 0.25em 0; outline: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; color: rgb(0, 0, 255); color: rgb(var(--color-accent, 0, 0, 255)); } .rm-black-surface rm-checkbox [ref="box"],.rm-black-surface [is="rm-checkbox"] [ref="box"]{ color: rgb(30, 144, 255); color: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-checkbox [ref="box"],.rm-dark-surface [is="rm-checkbox"] [ref="box"]{ color: rgb(30, 144, 255); color: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-checkbox [ref="box"],.rm-light-surface [is="rm-checkbox"] [ref="box"]{ color: rgb(0, 0, 255); color: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-checkbox [ref="box"],.rm-white-surface [is="rm-checkbox"] [ref="box"]{ color: rgb(0, 0, 255); color: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-checkbox [ref="border"],[is="rm-checkbox"] [ref="border"]{ border: 0.125em solid rgba(0, 0, 0, .42); border: 0.125em solid rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-secondary, .42)); height: 100%; width: 100%; box-sizing: border-box; border-radius: inherit; } .rm-black-surface rm-checkbox [ref="border"],.rm-black-surface [is="rm-checkbox"] [ref="border"]{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-dark-surface rm-checkbox [ref="border"],.rm-dark-surface [is="rm-checkbox"] [ref="border"]{ border-color: rgba(255, 255, 255, .42); border-color: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-secondary, .42)); } .rm-light-surface rm-checkbox [ref="border"],.rm-light-surface [is="rm-checkbox"] [ref="border"]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-secondary, .42)); } .rm-white-surface rm-checkbox [ref="border"],.rm-white-surface [is="rm-checkbox"] [ref="border"]{ border-color: rgba(0, 0, 0, .42); border-color: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-secondary, .42)); } rm-checkbox [ref="check-box"],[is="rm-checkbox"] [ref="check-box"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent, 0, 0, 255)); position: absolute; top: 0; bottom: 0; right: 0; left: 0; text-align: center; transition: opacity linear 200ms; opacity: 0; border-radius: inherit; } .rm-black-surface rm-checkbox [ref="check-box"],.rm-black-surface [is="rm-checkbox"] [ref="check-box"]{ background: rgb(30, 144, 255); background: rgb(var(--color-accent-on-black, 30, 144, 255)); } .rm-dark-surface rm-checkbox [ref="check-box"],.rm-dark-surface [is="rm-checkbox"] [ref="check-box"]{ background: rgb(30, 144, 255); background: rgb(var(--color-accent-on-dark, 30, 144, 255)); } .rm-light-surface rm-checkbox [ref="check-box"],.rm-light-surface [is="rm-checkbox"] [ref="check-box"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent-on-light, 0, 0, 255)); } .rm-white-surface rm-checkbox [ref="check-box"],.rm-white-surface [is="rm-checkbox"] [ref="check-box"]{ background: rgb(0, 0, 255); background: rgb(var(--color-accent-on-white, 0, 0, 255)); } rm-checkbox [ref="check"],[is="rm-checkbox"] [ref="check"]{ width: 60%; height: 100%; box-sizing: border-box; border: solid rgb(255, 255, 255); border: solid rgb(var(--color-on-accent, 255, 255, 255)); border-width: 0 0.1875em 0.1875em 0; border: none; display: inline-block; transform: scale(.65) translateY(-0.125em) rotate(45deg); position: relative; } .rm-black-surface rm-checkbox [ref="check"],.rm-black-surface [is="rm-checkbox"] [ref="check"]{ border-color: rgb(255, 255, 255); border-color: rgb(var(--color-on-accent-on-black, 255, 255, 255)); } .rm-dark-surface rm-checkbox [ref="check"],.rm-dark-surface [is="rm-checkbox"] [ref="check"]{ border-color: rgb(255, 255, 255); border-color: rgb(var(--color-on-accent-on-dark, 255, 255, 255)); } .rm-light-surface rm-checkbox [ref="check"],.rm-light-surface [is="rm-checkbox"] [ref="check"]{ border-color: rgb(255, 255, 255); border-color: rgb(var(--color-on-accent-on-light, 255, 255, 255)); } .rm-white-surface rm-checkbox [ref="check"],.rm-white-surface [is="rm-checkbox"] [ref="check"]{ border-color: rgb(255, 255, 255); border-color: rgb(var(--color-on-accent-on-white, 255, 255, 255)); } rm-checkbox [ref="check"] div:first-child,[is="rm-checkbox"] [ref="check"] div:first-child{ right: 0; background: rgb(255, 255, 255); background: rgb(var(--color-on-accent, 255, 255, 255)); position: absolute; height: 0.1875em; left: 0; bottom: 0; transition: none; transform-origin: left center; transform: scaleX(0); } .rm-black-surface rm-checkbox [ref="check"] div:first-child,.rm-black-surface [is="rm-checkbox"] [ref="check"] div:first-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-black, 255, 255, 255)); } .rm-dark-surface rm-checkbox [ref="check"] div:first-child,.rm-dark-surface [is="rm-checkbox"] [ref="check"] div:first-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-dark, 255, 255, 255)); } .rm-light-surface rm-checkbox [ref="check"] div:first-child,.rm-light-surface [is="rm-checkbox"] [ref="check"] div:first-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-light, 255, 255, 255)); } .rm-white-surface rm-checkbox [ref="check"] div:first-child,.rm-white-surface [is="rm-checkbox"] [ref="check"] div:first-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-white, 255, 255, 255)); } rm-checkbox [ref="check"] div:last-child,[is="rm-checkbox"] [ref="check"] div:last-child{ top: 0; background: rgb(255, 255, 255); background: rgb(var(--color-on-accent, 255, 255, 255)); position: absolute; width: 0.1875em; bottom: 0.15em; right: 0; transform: scaleY(0); transition: none; transform-origin: bottom center; } .rm-black-surface rm-checkbox [ref="check"] div:last-child,.rm-black-surface [is="rm-checkbox"] [ref="check"] div:last-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-black, 255, 255, 255)); } .rm-dark-surface rm-checkbox [ref="check"] div:last-child,.rm-dark-surface [is="rm-checkbox"] [ref="check"] div:last-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-dark, 255, 255, 255)); } .rm-light-surface rm-checkbox [ref="check"] div:last-child,.rm-light-surface [is="rm-checkbox"] [ref="check"] div:last-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-light, 255, 255, 255)); } .rm-white-surface rm-checkbox [ref="check"] div:last-child,.rm-white-surface [is="rm-checkbox"] [ref="check"] div:last-child{ background: rgb(255, 255, 255); background: rgb(var(--color-on-accent-on-white, 255, 255, 255)); } rm-checkbox.rm-checked [ref="check"] div:first-child,[is="rm-checkbox"].rm-checked [ref="check"] div:first-child{ transform: scaleX(1); transition: transform 100ms linear; } rm-checkbox.rm-checked [ref="check"] div:last-child,[is="rm-checkbox"].rm-checked [ref="check"] div:last-child{ transform: scaleY(1); transition: transform 100ms linear 100ms; } rm-checkbox.rm-checked [ref="check-box"],[is="rm-checkbox"].rm-checked [ref="check-box"]{ opacity: 1; } rm-checkbox input,[is="rm-checkbox"] input{ border: 0; position: absolute; overflow: hidden; clip: rect(0 0 0 0); height: 1px; width: 1px; margin: -1px; padding: 0; outline: 0; -webkit-appearance: none; -moz-appearance: none; }`,

	  'exports': {
	    _updateRipple() {
	        const box = this.root.querySelector("[ref=box]");
	        ripple(box, { disabled: this.isDisabled() || this.isReadonly() });
	    },

	    onMounted() {
	        const input = this.root.querySelector("input");
	        const box = this.root.querySelector("[ref=box]");
	        const boxRipple = ripple(
	            box,
	            {
	                centered: true,
	                unbounded: true,
	                radius: 16,
	                unboundedFocus: true,
	                focusTarget: input,
	                color: "currentColor"
	            }
	        );
	        let refresh = (event) => {
	            if (input.checked) {
	                this.root.classList.add("rm-checked");
	            } else {
	                this.root.classList.remove("rm-checked");
	            }
	        };
	        input.addEventListener("change", () => {
	            if (whatInput?.ask?.() === "keyboard") {
	                boxRipple.start().end();
	            }
	            refresh();
	        });
	        Object.defineProperty(this.root, "checked", {
	            get() {
	                return input.checked;
	            },
	            set(checked) {
	                input.checked = checked;
	                refresh();
	            }
	        });
	        refresh();
	        this._updateRipple();
	    },

	    onUpdated() {
	        this._updateRipple();
	    },

	    isChecked() {
	        return this.props.checked != null && this.props.checked !== false;
	    },

	    isDisabled() {
	        return this.props.disabled != null && this.props.disabled !== false;
	    },

	    isReadonly() {
	        return this.props.readonly != null && this.props.readonly !== false;
	    }
	  },

	  'template': function(
	    template,
	    expressionTypes,
	    bindingTypes,
	    getComponent
	  ) {
	    return template(
	      '<label><input expr2="expr2" type="checkbox" tabindex="0"/><div ref="box"><div ref="border"></div><div ref="check-box"><div ref="check"><div></div><div></div></div></div></div><div expr3="expr3" style="vertical-align: middle; display: table-cell;"> </div></label>',
	      [
	        {
	          'redundantAttribute': 'expr2',
	          'selector': '[expr2]',

	          'expressions': [
	            {
	              'type': expressionTypes.ATTRIBUTE,
	              'name': 'checked',

	              'evaluate': function(
	                _scope
	              ) {
	                return _scope.isChecked();
	              }
	            },
	            {
	              'type': expressionTypes.ATTRIBUTE,
	              'name': 'name',

	              'evaluate': function(
	                _scope
	              ) {
	                return _scope.props.name;
	              }
	            },
	            {
	              'type': expressionTypes.ATTRIBUTE,
	              'name': 'disabled',

	              'evaluate': function(
	                _scope
	              ) {
	                return _scope.isDisabled() || _scope.isReadonly();
	              }
	            }
	          ]
	        },
	        {
	          'redundantAttribute': 'expr3',
	          'selector': '[expr3]',

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
	    );
	  },

	  'name': 'rm-checkbox'
	};

	return RmCheckbox;

}));
