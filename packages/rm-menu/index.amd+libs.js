define(function () { 'use strict';

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

  var elevation_1 = elevation;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  		path: basedir,
  		exports: {},
  		require: function (path, base) {
  			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  		}
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var ripple_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, '__esModule', { value: true });

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

  var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  		path: basedir,
  		exports: {},
  		require: function (path, base) {
  			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  		}
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var whatInput = createCommonjsModule(function (module, exports) {
  /**
   * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
   * @version v5.2.10
   * @link https://github.com/ten1seven/what-input
   * @license MIT
   */
  (function webpackUniversalModuleDefinition(root, factory) {
  	module.exports = factory();
  })(commonjsGlobal$1, function() {
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

  var RIPPLE = Symbol("ripple");
  var RIPPLE_COUNT = Symbol("ripple-count");
  var RIPPLE_OPTIONS = Symbol("ripple_options");
  (function (TYPE) {
      TYPE[TYPE["NORMAL"] = 0] = "NORMAL";
      TYPE[TYPE["QUICK"] = 1] = "QUICK";
      TYPE[TYPE["INSTANT"] = 2] = "INSTANT";
  })(exports.TYPE || (exports.TYPE = {}));
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
          if (type === void 0) { type = exports.TYPE.NORMAL; }
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
      Ripple.prototype._frame = function () {
          var element = this._div.parentElement;
          if (!element) {
              return;
          }
          var rect = this._div.getBoundingClientRect();
          if (rect.width === 0 && rect.height === 0) {
              element.removeChild(this._div);
              return;
          }
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
      options = __assign({ radius: undefined, unbounded: false, centered: false, disabled: false, highlight: false, instantHighlight: false, unboundedFocus: false, color: "currentColor", focusTarget: undefined, detectLabel: true, usePointerFocus: false, stopRippling: false }, options);
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
                  var currentRipple = new Ripple(0, 0, null, exports.TYPE.INSTANT).attachTo(element, function () {
                      _this[RIPPLE_COUNT]--;
                  });
                  this[RIPPLE_COUNT]++;
                  return currentRipple;
              },
              start: function (x, y, event, type) {
                  var _this = this;
                  if (type === void 0) { type = exports.TYPE.NORMAL; }
                  var isFocus = !!(event && event.type === "focus");
                  var isMouseEnter = !!(event && event.type === "mouseenter");
                  var options = this[RIPPLE_OPTIONS];
                  if (isFocus) {
                      type = options.instantHighlight ? exports.TYPE.INSTANT : exports.TYPE.QUICK;
                  }
                  else if (isMouseEnter) {
                      type = this[RIPPLE_COUNT] > 0 || options.instantHighlight ? exports.TYPE.INSTANT : exports.TYPE.QUICK;
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

  exports.isRipple = isRipple;
  exports.ripple = ripple;
  });

  /*!
  * tabbable 5.1.3
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  */
  var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
  var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
  var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

  function tabbable(el, options) {
    options = options || {};
    var regularTabbables = [];
    var orderedTabbables = [];
    var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable);
    candidates.forEach(function (candidate, i) {
      var candidateTabindex = getTabindex(candidate);

      if (candidateTabindex === 0) {
        regularTabbables.push(candidate);
      } else {
        orderedTabbables.push({
          documentOrder: i,
          tabIndex: candidateTabindex,
          node: candidate
        });
      }
    });
    var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
      return a.node;
    }).concat(regularTabbables);
    return tabbableNodes;
  }

  function getCandidates(el, includeContainer, filter) {
    var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));

    if (includeContainer && matches.call(el, candidateSelector)) {
      candidates.unshift(el);
    }

    candidates = candidates.filter(filter);
    return candidates;
  }

  function isNodeMatchingSelectorTabbable(node) {
    if (!isNodeMatchingSelectorFocusable(node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
      return false;
    }

    return true;
  }

  function isNodeMatchingSelectorFocusable(node) {
    if (node.disabled || isHiddenInput(node) || isHidden(node) ||
    /* For a details element with a summary, the summary element gets the focused  */
    isDetailsWithSummary(node)) {
      return false;
    }

    return true;
  }

  var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');

  function isFocusable(node) {
    if (!node) {
      throw new Error('No node provided');
    }

    if (matches.call(node, focusableCandidateSelector) === false) {
      return false;
    }

    return isNodeMatchingSelectorFocusable(node);
  }

  function getTabindex(node) {
    var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

    if (!isNaN(tabindexAttr)) {
      return tabindexAttr;
    } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.


    if (isContentEditable(node)) {
      return 0;
    } // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    //  yet they are still part of the regular tab order; in FF, they get a default
    //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    //  order, consider their tab index to be 0.


    if ((node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
      return 0;
    }

    return node.tabIndex;
  }

  function sortOrderedTabbables(a, b) {
    return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
  }

  function isContentEditable(node) {
    return node.contentEditable === 'true';
  }

  function isInput(node) {
    return node.tagName === 'INPUT';
  }

  function isHiddenInput(node) {
    return isInput(node) && node.type === 'hidden';
  }

  function isDetailsWithSummary(node) {
    var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
      return child.tagName === 'SUMMARY';
    });
    return r;
  }

  function isRadio(node) {
    return isInput(node) && node.type === 'radio';
  }

  function isNonTabbableRadio(node) {
    return isRadio(node) && !isTabbableRadio(node);
  }

  function getCheckedRadio(nodes, form) {
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].checked && nodes[i].form === form) {
        return nodes[i];
      }
    }
  }

  function isTabbableRadio(node) {
    if (!node.name) {
      return true;
    }

    var radioScope = node.form || node.ownerDocument;
    var radioSet = radioScope.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
    var checked = getCheckedRadio(radioSet, node.form);
    return !checked || checked === node;
  }

  function isHidden(node) {
    if (getComputedStyle(node).visibility === 'hidden') return true;
    var isDirectSummary = node.matches('details>summary:first-of-type');
    var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

    if (nodeUnderDetails.matches('details:not([open]) *')) {
      return true;
    }

    while (node) {
      if (getComputedStyle(node).display === 'none') return true;
      node = node.parentElement;
    }

    return false;
  }

  /*!
  * focus-trap 6.2.0
  * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
  */

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var activeFocusDelay;

  var activeFocusTraps = function () {
    var trapQueue = [];
    return {
      activateTrap: function activateTrap(trap) {
        if (trapQueue.length > 0) {
          var activeTrap = trapQueue[trapQueue.length - 1];

          if (activeTrap !== trap) {
            activeTrap.pause();
          }
        }

        var trapIndex = trapQueue.indexOf(trap);

        if (trapIndex === -1) {
          trapQueue.push(trap);
        } else {
          // move this existing trap to the front of the queue
          trapQueue.splice(trapIndex, 1);
          trapQueue.push(trap);
        }
      },
      deactivateTrap: function deactivateTrap(trap) {
        var trapIndex = trapQueue.indexOf(trap);

        if (trapIndex !== -1) {
          trapQueue.splice(trapIndex, 1);
        }

        if (trapQueue.length > 0) {
          trapQueue[trapQueue.length - 1].unpause();
        }
      }
    };
  }();

  function createFocusTrap(elements, userOptions) {
    var doc = document;

    var config = _objectSpread2({
      returnFocusOnDeactivate: true,
      escapeDeactivates: true,
      delayInitialFocus: true
    }, userOptions);

    var state = {
      // @type {Array<HTMLElement>}
      containers: [],
      // @type {{ firstTabbableNode: HTMLElement, lastTabbableNode: HTMLElement }}
      tabbableGroups: [],
      nodeFocusedBeforeActivation: null,
      mostRecentlyFocusedNode: null,
      active: false,
      paused: false
    };
    var trap = {
      activate: activate,
      deactivate: deactivate,
      pause: pause,
      unpause: unpause,
      updateContainerElements: updateContainerElements
    };
    updateContainerElements(elements);
    return trap;

    function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });

      if (state.active) {
        updateTabbableNodes();
      }

      return trap;
    }

    function activate(activateOptions) {
      if (state.active) return;
      updateTabbableNodes();
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;
      var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;

      if (onActivate) {
        onActivate();
      }

      addListeners();
      return trap;
    }

    function deactivate(deactivateOptions) {
      if (!state.active) return;
      clearTimeout(activeFocusDelay);
      removeListeners();
      state.active = false;
      state.paused = false;
      activeFocusTraps.deactivateTrap(trap);
      var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;

      if (onDeactivate) {
        onDeactivate();
      }

      var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;

      if (returnFocus) {
        delay(function () {
          tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
        });
      }

      return trap;
    }

    function pause() {
      if (state.paused || !state.active) return trap;
      state.paused = true;
      removeListeners();
      return trap;
    }

    function unpause() {
      if (!state.paused || !state.active) return trap;
      state.paused = false;
      updateTabbableNodes();
      addListeners();
      return trap;
    }

    function addListeners() {
      if (!state.active) return; // There can be only one listening focus trap at a time

      activeFocusTraps.activateTrap(trap); // Delay ensures that the focused element doesn't capture the event
      // that caused the focus trap activation.

      activeFocusDelay = config.delayInitialFocus ? delay(function () {
        tryFocus(getInitialFocusNode());
      }) : tryFocus(getInitialFocusNode());
      doc.addEventListener('focusin', checkFocusIn, true);
      doc.addEventListener('mousedown', checkPointerDown, {
        capture: true,
        passive: false
      });
      doc.addEventListener('touchstart', checkPointerDown, {
        capture: true,
        passive: false
      });
      doc.addEventListener('click', checkClick, {
        capture: true,
        passive: false
      });
      doc.addEventListener('keydown', checkKey, {
        capture: true,
        passive: false
      });
      return trap;
    }

    function removeListeners() {
      if (!state.active) return;
      doc.removeEventListener('focusin', checkFocusIn, true);
      doc.removeEventListener('mousedown', checkPointerDown, true);
      doc.removeEventListener('touchstart', checkPointerDown, true);
      doc.removeEventListener('click', checkClick, true);
      doc.removeEventListener('keydown', checkKey, true);
      return trap;
    }

    function getNodeForOption(optionName) {
      var optionValue = config[optionName];
      var node = optionValue;

      if (!optionValue) {
        return null;
      }

      if (typeof optionValue === 'string') {
        node = doc.querySelector(optionValue);

        if (!node) {
          throw new Error('`' + optionName + '` refers to no known node');
        }
      }

      if (typeof optionValue === 'function') {
        node = optionValue();

        if (!node) {
          throw new Error('`' + optionName + '` did not return a node');
        }
      }

      return node;
    }

    function getInitialFocusNode() {
      var node;

      if (getNodeForOption('initialFocus') !== null) {
        node = getNodeForOption('initialFocus');
      } else if (containersContain(doc.activeElement)) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
        node = firstTabbableNode || getNodeForOption('fallbackFocus');
      }

      if (!node) {
        throw new Error('Your focus-trap needs to have at least one focusable element');
      }

      return node;
    }

    function getReturnFocusNode(previousActiveElement) {
      var node = getNodeForOption('setReturnFocus');
      return node ? node : previousActiveElement;
    } // This needs to be done on mousedown and touchstart instead of click
    // so that it precedes the focus event.


    function checkPointerDown(e) {
      if (containersContain(e.target)) {
        // allow the click since it ocurred inside the trap
        return;
      }

      if (config.clickOutsideDeactivates) {
        // immediately deactivate the trap
        deactivate({
          // if, on deactivation, we should return focus to the node originally-focused
          //  when the trap was activated (or the configured `setReturnFocus` node),
          //  then assume it's also OK to return focus to the outside node that was
          //  just clicked, causing deactivation, as long as that node is focusable;
          //  if it isn't focusable, then return focus to the original node focused
          //  on activation (or the configured `setReturnFocus` node)
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked, whether it's focusable or not; by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node)
          returnFocus: config.returnFocusOnDeactivate && !isFocusable(e.target)
        });
        return;
      } // This is needed for mobile devices.
      // (If we'll only let `click` events through,
      // then on mobile they will be blocked anyways if `touchstart` is blocked.)


      if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
        // allow the click outside the trap to take place
        return;
      } // otherwise, prevent the click


      e.preventDefault();
    } // In case focus escapes the trap for some strange reason, pull it back in.


    function checkFocusIn(e) {
      // In Firefox when you Tab out of an iframe the Document is briefly focused.
      if (containersContain(e.target) || e.target instanceof Document) {
        return;
      }

      e.stopImmediatePropagation();
      tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
    }

    function checkKey(e) {
      if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
        e.preventDefault();
        deactivate();
        return;
      }

      if (isTabEvent(e)) {
        checkTab(e);
        return;
      }
    } // Hijack Tab events on the first and last focusable nodes of the trap,
    // in order to prevent focus from escaping. If it escapes for even a
    // moment it can end up scrolling the page and causing confusion so we
    // kind of need to capture the action at the keydown phase.


    function checkTab(e) {
      updateTabbableNodes();
      var destinationNode = null;

      if (e.shiftKey) {
        var startOfGroupIndex = state.tabbableGroups.findIndex(function (_ref) {
          var firstTabbableNode = _ref.firstTabbableNode;
          return e.target === firstTabbableNode;
        });

        if (startOfGroupIndex >= 0) {
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = destinationGroup.lastTabbableNode;
        }
      } else {
        var lastOfGroupIndex = state.tabbableGroups.findIndex(function (_ref2) {
          var lastTabbableNode = _ref2.lastTabbableNode;
          return e.target === lastTabbableNode;
        });

        if (lastOfGroupIndex >= 0) {
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;

          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = _destinationGroup.firstTabbableNode;
        }
      }

      if (destinationNode) {
        e.preventDefault();
        tryFocus(destinationNode);
      }
    }

    function checkClick(e) {
      if (config.clickOutsideDeactivates) return;
      if (containersContain(e.target)) return;

      if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
        return;
      }

      e.preventDefault();
      e.stopImmediatePropagation();
    }

    function updateTabbableNodes() {
      state.tabbableGroups = state.containers.map(function (container) {
        var tabbableNodes = tabbable(container);
        return {
          firstTabbableNode: tabbableNodes[0],
          lastTabbableNode: tabbableNodes[tabbableNodes.length - 1]
        };
      });
    }

    function tryFocus(node) {
      if (node === doc.activeElement) return;

      if (!node || !node.focus) {
        tryFocus(getInitialFocusNode());
        return;
      }

      node.focus({
        preventScroll: !!config.preventScroll
      });
      state.mostRecentlyFocusedNode = node;

      if (isSelectableInput(node)) {
        node.select();
      }
    }

    function containersContain(element) {
      return state.containers.some(function (container) {
        return container.contains(element);
      });
    }
  }

  function isSelectableInput(node) {
    return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
  }

  function isEscapeEvent(e) {
    return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
  }

  function isTabEvent(e) {
    return e.key === 'Tab' || e.keyCode === 9;
  }

  function delay(fn) {
    return setTimeout(fn, 0);
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

  var index = {
    'css': `rm-menu,[is="rm-menu"]{ display: block; font-size: 16px; overflow: hidden; padding: 40px; margin: -40px; pointer-events: none; } rm-menu:not([anchor]),[is="rm-menu"]:not([anchor]){ border-radius: 0.25em; } rm-menu[anchor=top],[is="rm-menu"][anchor=top]{ padding-top: 0; margin-top: 0; border-radius: 0 0 0.25em 0.25em; } rm-menu:not([variant])[anchor=top],[is="rm-menu"]:not([variant])[anchor=top],rm-menu[variant=outlined][anchor=top],[is="rm-menu"][variant=outlined][anchor=top],rm-menu[variant=outlined]:not([anchor]),[is="rm-menu"][variant=outlined]:not([anchor]){ border-radius: 0.25em; } rm-menu[anchor=bottom],[is="rm-menu"][anchor=bottom]{ padding-bottom: 0; margin-bottom: 0; border-radius: 0.25em 0.25em 0 0; } rm-menu[anchor=bottom],[is="rm-menu"][anchor=bottom],rm-menu[variant=filled][anchor=bottom],[is="rm-menu"][variant=filled][anchor=bottom],rm-menu[variant=outlined][anchor=bottom],[is="rm-menu"][variant=outlined][anchor=bottom]{ border-radius: 0.25em; } rm-menu > div,[is="rm-menu"] > div{ background: white; padding: .5em 0; z-index: 99; pointer-events: all; border-radius: inherit; transform-origin: top center; } rm-menu > div,[is="rm-menu"] > div{ background: white; padding: .5em 0; transform: }`,

    'exports': {
      _lastOpened: null,
      _time: 0,
      _direction: 0,
      _highlightedFromKeyboard: false,
      _closeThis: null,
      _focusTrap: null,
      _mounted: false,

      onBeforeMount() {
          this._closeThis = this.close.bind(this);
      },

      onMounted() {
          this.root._bindTo = this._bindTo.bind(this);
          const child = this.root.firstElementChild;
          if (this._lastOpened = this.getOpened()) {
              this._time = 1;
              elevation_1(child, 4);
          } else {
              elevation_1(child, 0);
          }
          let _lastTime = null;
          let _lastNow = Date.now();
          this._mounted = true;
          let frame = () => {
              if (!this.root.isConnected) {
                  if (this._mounted) {
                      window.requestAnimationFrame(frame);
                  }
                  return;
              }
              const last = _lastNow;
              _lastNow = Date.now();
              if (this._direction !== 0 || _lastTime == null) {
                  const delta = (_lastNow - last) / 150;
                  if (this._direction > 0) {
                      this._time = Math.min(this._time + delta, 1);
                  } else if (this._direction < 0) {
                      this._time = Math.max(this._time - delta, 0);
                  }
                  if (this._time >= 1 && !this.getPreventFocus()) {
                      (this._focusTrap = createFocusTrap(this.root, {
                          setReturnFocus: this._anchorElement,
                          clickOutsideDeactivates: true,
                          onDeactivate: () => {
                              this._focusTrap = null;
                              this.close();
                          }
                      })).activate();
                  }
                  if (this._time >= 1 || this._time <= 0) {
                      this._direction = 0;
                  }
              }
              if (this._time === 0) {
                  this.root.style.display = "none";
              } else {
                  this.root.style.display = "";
                  let anchor = "top";
                  if (this._anchorElement) {
                      const height = window.innerHeight;
                      const rect = this._anchorElement.getBoundingClientRect();
                      if (rect.bottom < 0) {
                          this.root.style.top = "0px";
                          this.root.style.bottom = "";
                          child.firstElementChild.style.maxHeight = height -
                              (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px"
                          ;
                      } else if (rect.top > height) {
                          this.root.style.top = "";
                          this.root.style.bottom = "0px";
                          child.firstElementChild.style.maxHeight = height -
                              (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px"
                          ;
                          anchor = "bottom";
                      } else {
                          const heightTop = rect.top;
                          const heightBottom = height - rect.bottom;
                          if (heightTop < heightBottom) {
                              this.root.style.top = rect.bottom + "px";
                              this.root.style.bottom = "";
                              child.firstElementChild.style.maxHeight = height - rect.bottom -
                                  (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px"
                              ;
                          } else {
                              this.root.style.bottom = (height - rect.top) + "px";
                              this.root.style.top = "";
                              anchor = "bottom";
                              child.firstElementChild.style.maxHeight = rect.top -
                                  (parseFloat(window.getComputedStyle(child).fontSize) * 3) + "px"
                              ;
                          }
                      }
                      if (this.props.inheritWidth == null) {
                          const right = window.innerWidth - rect.right;
                          if (rect.left >= right) {
                              this.root.style.left = "";
                              this.root.style.right = right + "px";
                          } else {
                              this.root.style.left = rect.left + "px";
                              this.root.style.right = "";
                          }
                      } else {
                          this.root.style.left = rect.left + "px";
                          this.root.style.width = rect.width + "px";
                      }
                      this.root.setAttribute("anchor", anchor);
                  }
                  const styleAt = getMenuStyleAt(_lastTime = this._time, anchor);
                  child.style.transform = styleAt.transform;
                  child.style.opacity = styleAt.opacity;

                  if (this._toHighlight && this._time >= 1) {
                      this._currentHighlighted = ripple_1.ripple(this._lastHighlighted = this._toHighlight).highlight();
                      this._toHighlight = null;

                      const container = this.root.firstElementChild.firstElementChild;
                      const containerRect = container.getBoundingClientRect();
                      const highlightRect = this._lastHighlighted.getBoundingClientRect();
                      
                      const highlightTop = highlightRect.top - containerRect.top;
                      const highlightBottom = highlightRect.bottom - containerRect.top;
                      if (highlightTop < 0) {
                          container.scrollBy(0, highlightTop);
                      } else if (highlightBottom > containerRect.height) {
                          container.scrollBy(0, highlightBottom - containerRect.height);
                      }
                  }
              }
              window.requestAnimationFrame(frame);
          };
          frame();

          Object.defineProperty(this.root, "parentElement", {
              get: () => {
                  return this._realParent || HTMLElement.prototype.__lookupGetter__("parentElement").call(this.root);
              }
          });
          Object.defineProperty(this.root, "options", {
              get: () => this.getOptions()
          });

          this.root.open = this.open.bind(this);
          this.root.close = this.close.bind(this);

          this.root.addEventListener("keydown", this._onkeydown = event => {
              switch (event.keyCode) {
                  case 40: {
                      const options = this.root.querySelectorAll("rm-menu-item:not([disabled]):not([hidden])");
                      const lastHighlighted = this._lastHighlighted;
                      let next;
                      Array.prototype.some.call(options, option => {
                          if (option.tagName.toUpperCase() === "RM-MENU-ITEM") {
                              option = option.firstElementChild;
                          }
                          if (!this._lastHighlighted) {
                              next = option;
                              return true;
                          }
                          if (option === this._lastHighlighted) {
                              next = this._lastHighlighted;
                              this._lastHighlighted = null;
                          }
                          return false;
                      });
                      if (next !== lastHighlighted) {
                          if (this._currentHighlighted) {
                              this._currentHighlighted.end();
                              this._currentHighlighted = null;
                          } else if (lastHighlighted) {
                              lastHighlighted.dispatchEvent(new Event("mouseleave"));
                          }
                          this._toHighlight = next;
                          this._highlightedFromKeyboard = true;
                      } else {
                          this._lastHighlighted = next;
                      }
                      event.preventDefault();
                      break;
                  }
                  case 38: {
                      const options = this.getOptions();
                      const lastHighlighted = this._lastHighlighted;
                      let previous;
                      for (let i = options.length - 1; i >= 0; i--) {
                          let option = options[i];
                          if (option.tagName.toUpperCase() === "RM-MENU-ITEM") {
                              option = option.firstElementChild;
                          }
                          if (!this._lastHighlighted) {
                              previous = option;
                              break;
                          }
                          if (option === this._lastHighlighted) {
                              previous = this._lastHighlighted;
                              this._lastHighlighted = null;
                          }
                      }
                      if (previous !== lastHighlighted) {
                          if (this._currentHighlighted) {
                              this._currentHighlighted.end();
                              this._currentHighlighted = null;
                          } else if (lastHighlighted) {
                              lastHighlighted.dispatchEvent(new Event("mouseleave"));
                          }
                          this._toHighlight = previous;
                          this._highlightedFromKeyboard = true;
                      } else {
                          this._lastHighlighted = previous;
                      }
                      event.preventDefault();
                      break;
                  }
                  case 13: {
                      if (this.getOpened()) {
                          if (this._lastHighlighted) {
                              this._lastHighlighted.click();
                          }
                          event.preventDefault();
                      }
                      break;
                  }
              }
          });
      },

      onUnmounted() {
          this._mounted = false;
      },

      _onkeydown: null,
      _realParent: null,
      _anchorElement: null,

      setAnchorElement(element) {
          const previousAnchorElement = this._anchorElement;
          if (element == null) {
              this._anchorElement = null;
          } else if (element instanceof HTMLElement) {
              if (this.root.contains(element)) {
                  throw new Error("element is in menu tree");
              } else {
                  this._anchorElement = element;
              }
          } else {
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
          } else {
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
          } else {
              this.setAnchorElement(null);
          }
      },

      _lastHighlighted: null,
      _toHighlight: null,
      _currentHighlighted: null,

      onUpdated() {
          const opened = this.getOpened();
          if (opened !== this._lastOpened) {
              const child = this.root.firstElementChild;
              if (this._lastOpened = opened) {
                  this.root.open();
              } else {
                  this.root.close();
              }
          }
      },

      getOptions() {
          return this.root.querySelectorAll("rm-menu-item:not([disabled]):not([hidden])");
      },

      getPreventFocus() {
          return this.props.preventFocus != null && this.props.preventFocus !== false;
      },

      getOpened() {
          return this.props.opened != null && this.props.opened !== false;
      },

      open() {
          if (this._time > 0 && this._direction !== -1) {
              return;
          }
          if (this.props.keepHighlight != null) {
              let toHighlight = null;
              const selected = this.props.selected || [];
              Array.prototype.some.call(this.getOptions(), opt => {
                  if (selected.some(value => opt.value === value)) {
                      if (opt.tagName.toUpperCase() === "RM-MENU-ITEM") {
                          opt = opt.firstElementChild;
                      }
                      toHighlight = opt;
                      return true;
                  }
                  return false;
              });
              if (this._currentHighlighted) {
                  this._currentHighlighted.end();
                  this._currentHighlighted = null;
              }
              this._toHighlight = toHighlight;
          }
          elevation_1(this.root.firstElementChild, 4);
          this._direction = 1;
          if (this.props.preventCloseOnClickOut == null) ;
      },

      close() {
          if (this._time < 1 && this._direction !== 1) {
              return;
          }
          if (this._focusTrap) {
              return this._focusTrap.deactivate();
          }
          this._toHighlight = null;
          if (this._currentHighlighted) {
              this._currentHighlighted.end();
              this._currentHighlighted = null;
          }
          elevation_1(this.root.firstElementChild, 0);
          this._direction = -1;
          // pointerController(document, null);
      },

      _onmousedown(event) {
          if (this.getPreventFocus()) {
              event.preventDefault();
          }
      },

      _clearhighlight(event) {
          this._toHighlight = null;
          if (this._currentHighlighted) {
              this._currentHighlighted.end();
              this._currentHighlighted = null;
          }
      },

      _setHighlighted(event) {
          if (this.props.keepHighlight == null) {
              return;
          }
          let parent = event.target;
          let rippleElement = null;
          const container = this.root.firstElementChild.firstElementChild;
          while (parent && parent !== container) {
              if (ripple_1.isRipple(parent)) {
                  rippleElement = parent;
                  break;
              }
              parent = parent.parentElement;
          }
          if (rippleElement && !ripple_1.ripple(rippleElement).getOption("disabled")) {
              this._clearhighlight();
              if (this._lastHighlighted !== rippleElement) {
                  this._lastHighlighted = rippleElement;
                  if (this._highlightedFromKeyboard) {
                      this._highlightedFromKeyboard = false;
                      this._toHighlight = rippleElement;
                  }
              }
          } else if (!this._currentHighlighted) {
              this._toHighlight = this._lastHighlighted;
          }
      },

      _resetHighlighted() {
          if (this.props.keepHighlight != null && !this._currentHighlighted) {
              this._toHighlight = this._lastHighlighted;
          }
      }
    },

    'template': function(template, expressionTypes, bindingTypes, getComponent) {
      return template(
        '<div expr9="expr9"><div expr10="expr10" style="overflow-y: auto;"><slot expr11="expr11"></slot></div></div>',
        [{
          'redundantAttribute': 'expr9',
          'selector': '[expr9]',

          'expressions': [{
            'type': expressionTypes.EVENT,
            'name': 'onmousedown',

            'evaluate': function(scope) {
              return scope._onmousedown;
            }
          }]
        }, {
          'redundantAttribute': 'expr10',
          'selector': '[expr10]',

          'expressions': [{
            'type': expressionTypes.EVENT,
            'name': 'onmouseenter',

            'evaluate': function(scope) {
              return scope._setHighlighted;
            }
          }, {
            'type': expressionTypes.EVENT,
            'name': 'onmousemove',

            'evaluate': function(scope) {
              return scope._setHighlighted;
            }
          }, {
            'type': expressionTypes.EVENT,
            'name': 'onmouseleave',

            'evaluate': function(scope) {
              return scope._resetHighlighted;
            }
          }]
        }, {
          'type': bindingTypes.SLOT,

          'attributes': [{
            'type': expressionTypes.ATTRIBUTE,
            'name': 'close-menu',

            'evaluate': function(scope) {
              return scope._closeThis;
            }
          }],

          'name': 'default',
          'redundantAttribute': 'expr11',
          'selector': '[expr11]'
        }]
      );
    },

    'name': 'rm-menu'
  };

  return index;

});
