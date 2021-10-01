(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.menu = factory()));
})(this, (function () { 'use strict';

    var css_248z = ".mdc-elevation--z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-elevation--z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mdc-elevation--z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mdc-elevation--z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mdc-elevation--z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-elevation--z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mdc-elevation--z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mdc-elevation--z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mdc-elevation--z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-elevation--z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mdc-elevation--z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mdc-elevation--z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mdc-elevation--z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mdc-elevation--z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mdc-elevation--z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mdc-elevation--z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mdc-elevation--z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mdc-elevation--z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mdc-elevation--z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mdc-elevation--z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mdc-elevation--z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mdc-elevation--z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mdc-elevation--z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mdc-elevation--z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mdc-elevation--z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mdc-elevation-transition{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow}";
    var css = css_248z;

    let destroyer$1 = null;
    function init$1() {
        if (destroyer$1 !== null) {
            return destroyer$1;
        }
        const style = document.head.appendChild(document.createElement("style"));
        style.innerHTML = css;
        return destroyer$1 = () => {
            document.head.removeChild(style);
            destroyer$1 = null;
        };
    }
    function elevation(element, elevation) {
        init$1();
        for (let i = 0; i <= 24; i++) {
            if (i === elevation) {
                continue;
            }
            element.classList.remove("mdc-elevation--z" + i);
        }
        if (elevation != null) {
            element.classList.add("mdc-elevation-transition");
            element.classList.add("mdc-elevation--z" + elevation);
        }
        else {
            element.classList.remove("mdc-elevation-transition");
        }
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
    function isRipple(element) {
        return element[RIPPLE] != null;
    }

    let currentOptions = {};
    let container = null;
    let actual = null;
    let keydownListeners = [];
    let keyupListeners = [];
    function getElements() {
        if (container !== null) {
            return {
                container,
                actual: actual
            };
        }
        container = document.createElement("div");
        const previous = container.appendChild(document.createElement("span"));
        actual = container.appendChild(document.createElement("span"));
        const next = container.appendChild(document.createElement("span"));
        container.style.position = "fixed";
        container.style.top =
            container.style.left =
                container.style.width =
                    container.style.height = "0";
        previous.tabIndex =
            actual.tabIndex =
                next.tabIndex = 0;
        previous.style.outline =
            actual.style.outline =
                next.style.outline = "none";
        actual.addEventListener("blur", function onActualBlur(event) {
            setTimeout(() => {
                const element = document.activeElement;
                switch (element) {
                    case previous: {
                        if (currentOptions.onPrevious) {
                            currentOptions.onPrevious();
                        }
                        break;
                    }
                    case next: {
                        if (currentOptions.onNext) {
                            currentOptions.onNext();
                        }
                        break;
                    }
                    default: {
                        const mainElement = currentOptions.element;
                        let parent = element;
                        if (mainElement != null) {
                            while (parent && parent !== mainElement) {
                                parent = parent.parentElement;
                            }
                        }
                        if (parent != null) {
                            if (currentOptions.onFocusInside && currentOptions.onFocusInside(element)) {
                                container.removeChild(previous);
                                element.insertAdjacentElement("beforebegin", previous);
                                container.removeChild(next);
                                element.insertAdjacentElement("afterend", next);
                                element.addEventListener("blur", function onElementBlur(event) {
                                    previous.parentElement.removeChild(previous);
                                    actual.insertAdjacentElement("beforebegin", previous);
                                    next.parentElement.removeChild(next);
                                    actual.insertAdjacentElement("afterend", next);
                                    element.removeEventListener("blur", onElementBlur);
                                    onActualBlur.call(actual, event);
                                });
                                return;
                            }
                        }
                        else {
                            if (currentOptions.onFocusOutside && currentOptions.onFocusOutside(element)) {
                                release();
                                return;
                            }
                        }
                    }
                }
                actual.focus();
            });
        });
        actual.addEventListener("keydown", function onActualKeydown(event) {
            keydownListeners.forEach(listener => listener.call(this, event));
        });
        actual.addEventListener("keyup", function onActualKeyup(event) {
            keyupListeners.forEach(listener => listener.call(this, event));
        });
        return {
            container,
            actual
        };
    }
    function hold(options) {
        currentOptions = {
            element: document.body,
            ...options
        };
        const { container, actual } = getElements();
        document.body.appendChild(container);
        actual.focus();
    }
    function release() {
        const { container } = getElements();
        if (!container.isConnected) {
            return;
        }
        keydownListeners = [];
        keyupListeners = [];
        currentOptions = {};
        document.body.removeChild(container);
    }
    function on(type, listener) {
        if (!getElements().container.isConnected) {
            return;
        }
        switch (type) {
            case "keydown": {
                keydownListeners.push(listener);
                break;
            }
            case "keyup": {
                keyupListeners.push(listener);
                break;
            }
        }
    }

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
            if (isRipple(element)) {
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
                ripple(this._lastHighlighted).start(null, null).end();
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
                ripple(element, { highlight: true });
            });
            this._canHighlight.clear();
        },
        _setup() {
            this._getOptions().forEach(option => {
                const rippleElement = getRippleElement(option, this.root.firstElementChild.firstElementChild);
                if (ripple(rippleElement).getOption("highlight") && !this._canHighlight.has(rippleElement)) {
                    this._canHighlight.set(rippleElement, option);
                    const rippleObject = ripple(rippleElement, { highlight: false });
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
                    this._currentHighlighted = ripple(this._lastHighlighted = rippleElement).highlight();
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
                this._currentHighlighted = ripple(this._lastHighlighted = Array.from(this._canHighlight.keys())[0]).highlight();
            }
            else {
                this._currentHighlighted = ripple(this._lastHighlighted = Array.from(this._canHighlight.keys())[(index + 1) % this._canHighlight.size]).highlight();
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
                this._currentHighlighted = ripple(this._lastHighlighted = Array.from(this._canHighlight.keys())[this._canHighlight.size - 1]).highlight();
            }
            else {
                this._currentHighlighted = ripple(this._lastHighlighted = Array.from(this._canHighlight.keys())[(index - 1 + this._canHighlight.size) % this._canHighlight.size]).highlight();
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
            elevation(this.root.firstElementChild, 4);
            this._direction = 1;
            this.root.dispatchEvent(new Event("opening"));
        },
        close() {
            if (this._time < 1 && this._direction !== 1) {
                return;
            }
            release();
            this._clean();
            elevation(this.root.firstElementChild, 0);
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
                        hold({
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
                        on("keydown", this._onkeydown);
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
          '<div expr3="expr3" tabindex="0" style="outline: none;"><div expr4="expr4" style="overflow-y: auto; position: relative;"><slot expr5="expr5"></slot><div style="position: absolute;" ref="item-highlight"></div></div></div>',
          [
            {
              'redundantAttribute': 'expr3',
              'selector': '[expr3]',

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
              'redundantAttribute': 'expr4',
              'selector': '[expr4]',

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
              'redundantAttribute': 'expr5',
              'selector': '[expr5]'
            }
          ]
        );
      },

      'name': 'rm-menu'
    };

    return RmMenu;

}));
