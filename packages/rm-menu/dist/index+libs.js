(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.menu = factory()));
}(this, (function () { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".mdc-elevation--z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-elevation--z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mdc-elevation--z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mdc-elevation--z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mdc-elevation--z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-elevation--z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mdc-elevation--z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mdc-elevation--z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mdc-elevation--z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-elevation--z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mdc-elevation--z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mdc-elevation--z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mdc-elevation--z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mdc-elevation--z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mdc-elevation--z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mdc-elevation--z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mdc-elevation--z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mdc-elevation--z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mdc-elevation--z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mdc-elevation--z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mdc-elevation--z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mdc-elevation--z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mdc-elevation--z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mdc-elevation--z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mdc-elevation--z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mdc-elevation-transition{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow}";
  styleInject(css_248z);

  if (css_248z._______) {
      css_248z.justForCorrectlyInjectStyle();
  }
  function elevation(element, elevation) {
      for (var i = 0; i <= 24; i++) {
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

  var dist = elevation;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  /**
   * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
   * @version v5.2.10
   * @link https://github.com/ten1seven/what-input
   * @license MIT
   */

  var whatInput = createCommonjsModule(function (module, exports) {
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
  });

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  var RIPPLE = Symbol("ripple");
  var RIPPLE_COUNT = Symbol("ripple-count");
  var RIPPLE_OPTIONS = Symbol("ripple_options");
  var TYPE;
  (function (TYPE) {
      TYPE[TYPE["NORMAL"] = 0] = "NORMAL";
      TYPE[TYPE["QUICK"] = 1] = "QUICK";
      TYPE[TYPE["INSTANT"] = 2] = "INSTANT";
  })(TYPE || (TYPE = {}));
  document.head.appendChild(document.createElement("style")).innerHTML = "\n.rm-ripple-container { overflow: hidden; position: relative; }\n.rm-ripple-container--unbounded { overflow: visible; }\n.rm-ripple-container--highlighto.rm-ripple-container--highlighted:not([disabled])::after,\n.rm-ripple-container--highlighto:not([disabled]):hover::after {\n    content: ''; position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    background: black; background: var(--ripple-color, black); pointer-events: none;\n    border-radius: inherit; opacity: .1;\n}\n.rm-ripple {\n    position: absolute; border-radius: 50%; background: black; background: var(--ripple-color, black); pointer-events: none;\n    /*transition: opacity cubic-bezier(.22,.61,.36,1) 450ms, transform cubic-bezier(.22,.61,.36,1) 400ms;*/\n    transition: opacity cubic-bezier(0.4,0,0.2,1) 450ms, transform cubic-bezier(0.4,0,0.2,1) 450ms;\n}";
  var scaleUpStyle;
  {
      var div = document.createElement("div");
      div.style.transform = "scale(1)";
      document.body.appendChild(div);
      scaleUpStyle = window.getComputedStyle(div).transform;
      document.body.removeChild(div);
  }
  var Ripple = (function () {
      function Ripple(x, y, r, type) {
          if (type === void 0) { type = TYPE.NORMAL; }
          this._ended = false;
          this._onEnd = null;
          var div = this._div = document.createElement("div");
          if (r == null) {
              div.setAttribute("style", "left:0;top:0;bottom:0;right:0;" +
                  "border-radius:inherit;transform:scale(0);" +
                  "opacity:.12;opacity:var(--color-opacity-tertiary, .12);");
          }
          else {
              var cx = x - r;
              var cy = y - r;
              div.setAttribute("style", "left:" + cx +
                  "px;top:" + cy +
                  "px;width:" + (r * 2) +
                  "px;height:" + (r * 2) +
                  "px;transform:scale(0);opacity:.12;opacity:var(--color-opacity-tertiary, .12);");
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
      Ripple.prototype._frame = function () {
          var element = this._div.parentElement;
          if (!element) {
              return;
          }
          var rect = this._div.getBoundingClientRect();
          if (rect.width !== 0 || rect.height !== 0) {
              if (this._computedStyle.transform === scaleUpStyle) {
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
      };
      Ripple.prototype._scaleUp = function () {
          var _this = this;
          requestAnimationFrame(function () {
              _this._div.style.transform = "scale(1)";
              requestAnimationFrame(_this._frame.bind(_this));
          });
      };
      Ripple.prototype.attachTo = function (element, onEnd) {
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
      };
      Ripple.prototype.end = function () {
          this._ended = true;
          if (this._onEnd) {
              this._onEnd();
          }
          return this;
      };
      return Ripple;
  }());
  var canEventStartRipple = true;
  window.addEventListener("pointerdown", function () { canEventStartRipple = true; });
  function ripple(element, options) {
      var _a;
      var ripple = element[RIPPLE];
      if (options == null && ripple != null) {
          return ripple;
      }
      options = __assign(__assign({ radius: undefined, unbounded: false, centered: false, disabled: false, highlight: false, instantHighlight: false, unboundedFocus: false, color: "currentColor", focusTarget: undefined, detectLabel: true, usePointerFocus: true, stopRippling: true }, (ripple != null ? ripple[RIPPLE_OPTIONS] : {})), options);
      if (options.detectLabel != null && !options.detectLabel) {
          options.usePointerFocus = false;
      }
      else {
          options.detectLabel = true;
      }
      if (ripple) {
          return ripple.set(options);
      }
      var lastX = null;
      var lastY = null;
      var pointerElement = element;
      var lastFocusTarget = undefined;
      var onFocus = function (event) {
          if (whatInput.ask() !== "keyboard" && !ripple[RIPPLE_OPTIONS].usePointerFocus) {
              return;
          }
          ripple.start(null, null, event);
      };
      var onMouseEnter = function (event) {
          if (!ripple[RIPPLE_OPTIONS].highlight || ripple[RIPPLE_OPTIONS].disabled) {
              return;
          }
          ripple.start(null, null, event);
      };
      ripple = (_a = {
              highlight: function () {
                  var _this = this;
                  var currentRipple = new Ripple(0, 0, null, TYPE.INSTANT).attachTo(element, function () {
                      _this[RIPPLE_COUNT]--;
                  });
                  this[RIPPLE_COUNT]++;
                  return currentRipple;
              },
              start: function (x, y, event, type) {
                  var _this = this;
                  if (type === void 0) { type = TYPE.NORMAL; }
                  var isFocus = !!(event && event.type === "focus");
                  var isMouseEnter = !!(event && event.type === "mouseenter");
                  var options = this[RIPPLE_OPTIONS];
                  if (isFocus) {
                      type = options.instantHighlight ? TYPE.INSTANT : TYPE.QUICK;
                  }
                  else if (isMouseEnter) {
                      type = this[RIPPLE_COUNT] > 0 || options.instantHighlight ? TYPE.INSTANT : TYPE.QUICK;
                  }
                  var r = null;
                  var rect = null;
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
                  var currentRipple = new Ripple(x, y, r, type).attachTo(element, function () {
                      _this[RIPPLE_COUNT]--;
                  });
                  this[RIPPLE_COUNT]++;
                  if (event && event.isTrusted) {
                      var once_1 = function (up_event) {
                          if (isFocus) {
                              (lastFocusTarget || element).removeEventListener("blur", once_1);
                          }
                          else if (isMouseEnter) {
                              pointerElement.removeEventListener("mouseleave", once_1);
                          }
                          else {
                              window.removeEventListener("pointerup", once_1);
                              window.removeEventListener("pointercancel", once_1);
                              if (up_event.pointerId !== event.pointerId) {
                                  return;
                              }
                          }
                          currentRipple.end();
                      };
                      if (isFocus) {
                          (lastFocusTarget || element).addEventListener("blur", once_1);
                      }
                      else if (isMouseEnter) {
                          pointerElement.addEventListener("mouseleave", once_1);
                      }
                      else {
                          window.addEventListener("pointerup", once_1);
                          window.addEventListener("pointercancel", once_1);
                      }
                  }
                  return currentRipple;
              },
              set: function (options) {
                  var prevOptions = this[RIPPLE_OPTIONS];
                  options = this[RIPPLE_OPTIONS] = __assign(__assign(__assign({}, prevOptions), options), { detectLabel: prevOptions.detectLabel });
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
                  if (options.color) {
                      element.style.setProperty("--ripple-color", options.color);
                  }
                  else {
                      element.style.setProperty("--ripple-color", "black");
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
              getOption: function (option) {
                  return this[RIPPLE_OPTIONS][option];
              }
          },
          _a[RIPPLE_OPTIONS] = options,
          _a[RIPPLE_COUNT] = 0,
          _a);
      if (options.detectLabel) {
          var parent_1 = element.parentElement;
          while (parent_1) {
              if (parent_1.tagName === "LABEL") {
                  pointerElement = parent_1;
                  break;
              }
              parent_1 = parent_1.parentElement;
          }
      }
      pointerElement.addEventListener("pointerdown", function (event) {
          if (!canEventStartRipple || ripple[RIPPLE_OPTIONS].disabled) {
              return;
          }
          var rect = element.getBoundingClientRect();
          ripple.start(lastX = event.clientX - rect.x, lastY = event.clientY - rect.y, event);
          if (ripple[RIPPLE_OPTIONS].stopRippling) {
              canEventStartRipple = false;
          }
          setTimeout(function () {
              lastX = lastY = null;
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

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  var __assign$1 = function() {
      __assign$1 = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign$1.apply(this, arguments);
  };

  var container = document.createElement("div");
  var previous = container.appendChild(document.createElement("span"));
  var actual = container.appendChild(document.createElement("span"));
  var next = container.appendChild(document.createElement("span"));
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
  var currentOptions = {};
  actual.addEventListener("blur", function onActualBlur(event) {
      setTimeout(function () {
          var element = document.activeElement;
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
                  var mainElement = currentOptions.element;
                  var parent_1 = element;
                  if (mainElement != null) {
                      while (parent_1 && parent_1 !== mainElement) {
                          parent_1 = parent_1.parentElement;
                      }
                  }
                  if (parent_1 != null) {
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
                              onActualBlur.call(null, event);
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
  var keydownListeners = [];
  actual.addEventListener("keydown", function onActualKeydown(event) {
      var _this = this;
      keydownListeners.forEach(function (listener) { return listener.call(_this, event); });
  });
  var keyupListeners = [];
  actual.addEventListener("keyup", function onActualKeyup(event) {
      var _this = this;
      keyupListeners.forEach(function (listener) { return listener.call(_this, event); });
  });
  function hold(options) {
      currentOptions = __assign$1({ element: document.body }, options);
      document.body.appendChild(container);
      actual.focus();
  }
  function release() {
      if (!container.isConnected) {
          return;
      }
      keydownListeners = [];
      keyupListeners = [];
      currentOptions = {};
      document.body.removeChild(container);
  }
  function on(type, listener) {
      if (!container.isConnected) {
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

  var hold_1 = hold;
  var on_1 = on;
  var release_1 = release;

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
          if (isRipple(element)) {
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
              ripple(this._lastHighlighted).start().end();
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
              ripple(element, { highlight: true });
          });
          this._canHighlight.clear();
      },
      _setup: function () {
          var _this = this;
          this._getOptions().forEach(function (option) {
              var rippleElement = getRippleElement(option, _this.root.firstElementChild.firstElementChild);
              if (ripple(rippleElement).getOption("highlight") && !_this._canHighlight.has(rippleElement)) {
                  _this._canHighlight.set(rippleElement, option);
                  var rippleObject = ripple(rippleElement, { highlight: false });
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
                  _this._currentHighlighted = ripple(_this._lastHighlighted = rippleElement).highlight();
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
              this._currentHighlighted = ripple(this._lastHighlighted = Array.from(this._canHighlight.keys())[0]).highlight();
          }
          else {
              this._currentHighlighted = ripple(this._lastHighlighted = Array.from(this._canHighlight.keys())[(index + 1) % this._canHighlight.size]).highlight();
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
              this._currentHighlighted = ripple(this._lastHighlighted = Array.from(this._canHighlight.keys())[this._canHighlight.size - 1]).highlight();
          }
          else {
              this._currentHighlighted = ripple(this._lastHighlighted = Array.from(this._canHighlight.keys())[(index - 1 + this._canHighlight.size) % this._canHighlight.size]).highlight();
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
          dist(this.root.firstElementChild, 4);
          this._direction = 1;
          this.root.dispatchEvent(new Event("opening"));
      },
      close: function () {
          if (this._time < 1 && this._direction !== 1) {
              return;
          }
          release_1();
          this._clean();
          dist(this.root.firstElementChild, 0);
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
                      hold_1({
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
                      on_1("keydown", _this._onkeydown);
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
                  scope
                ) {
                  return scope._onmousedown;
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
            'redundantAttribute': 'expr5',
            'selector': '[expr5]'
          }
        ]
      );
    },

    'name': 'rm-menu'
  };

  return index;

})));
