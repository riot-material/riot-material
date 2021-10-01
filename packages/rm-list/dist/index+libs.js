(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('riot')) :
  typeof define === 'function' && define.amd ? define(['riot'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.riotMaterial = global.riotMaterial || {}, global.riotMaterial.components = global.riotMaterial.components || {}, global.riotMaterial.components.list = factory(global.riot)));
})(this, (function (riot) { 'use strict';

  /*!
  * tabbable 5.2.1
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  */
  var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
  var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
  var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

  var getCandidates = function getCandidates(el, includeContainer, filter) {
    var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));

    if (includeContainer && matches.call(el, candidateSelector)) {
      candidates.unshift(el);
    }

    candidates = candidates.filter(filter);
    return candidates;
  };

  var isContentEditable = function isContentEditable(node) {
    return node.contentEditable === 'true';
  };

  var getTabindex = function getTabindex(node) {
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
  };

  var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
    return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
  };

  var isInput = function isInput(node) {
    return node.tagName === 'INPUT';
  };

  var isHiddenInput = function isHiddenInput(node) {
    return isInput(node) && node.type === 'hidden';
  };

  var isDetailsWithSummary = function isDetailsWithSummary(node) {
    var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
      return child.tagName === 'SUMMARY';
    });
    return r;
  };

  var getCheckedRadio = function getCheckedRadio(nodes, form) {
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].checked && nodes[i].form === form) {
        return nodes[i];
      }
    }
  };

  var isTabbableRadio = function isTabbableRadio(node) {
    if (!node.name) {
      return true;
    }

    var radioScope = node.form || node.ownerDocument;

    var queryRadios = function queryRadios(name) {
      return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
    };

    var radioSet;

    if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
      radioSet = queryRadios(window.CSS.escape(node.name));
    } else {
      try {
        radioSet = queryRadios(node.name);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
        return false;
      }
    }

    var checked = getCheckedRadio(radioSet, node.form);
    return !checked || checked === node;
  };

  var isRadio = function isRadio(node) {
    return isInput(node) && node.type === 'radio';
  };

  var isNonTabbableRadio = function isNonTabbableRadio(node) {
    return isRadio(node) && !isTabbableRadio(node);
  };

  var isHidden = function isHidden(node, displayCheck) {
    if (getComputedStyle(node).visibility === 'hidden') {
      return true;
    }

    var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
    var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

    if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
      return true;
    }

    if (!displayCheck || displayCheck === 'full') {
      while (node) {
        if (getComputedStyle(node).display === 'none') {
          return true;
        }

        node = node.parentElement;
      }
    } else if (displayCheck === 'non-zero-area') {
      var _node$getBoundingClie = node.getBoundingClientRect(),
          width = _node$getBoundingClie.width,
          height = _node$getBoundingClie.height;

      return width === 0 && height === 0;
    }

    return false;
  }; // form fields (nested) inside a disabled fieldset are not focusable/tabbable
  //  unless they are in the _first_ <legend> element of the top-most disabled
  //  fieldset


  var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
    if (isInput(node) || node.tagName === 'SELECT' || node.tagName === 'TEXTAREA' || node.tagName === 'BUTTON') {
      var parentNode = node.parentElement;

      while (parentNode) {
        if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
          // look for the first <legend> as an immediate child of the disabled
          //  <fieldset>: if the node is in that legend, it'll be enabled even
          //  though the fieldset is disabled; otherwise, the node is in a
          //  secondary/subsequent legend, or somewhere else within the fieldset
          //  (however deep nested) and it'll be disabled
          for (var i = 0; i < parentNode.children.length; i++) {
            var child = parentNode.children.item(i);

            if (child.tagName === 'LEGEND') {
              if (child.contains(node)) {
                return false;
              } // the node isn't in the first legend (in doc order), so no matter
              //  where it is now, it'll be disabled


              return true;
            }
          } // the node isn't in a legend, so no matter where it is now, it'll be disabled


          return true;
        }

        parentNode = parentNode.parentElement;
      }
    } // else, node's tabbable/focusable state should not be affected by a fieldset's
    //  enabled/disabled state


    return false;
  };

  var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
    if (node.disabled || isHiddenInput(node) || isHidden(node, options.displayCheck) || // For a details element with a summary, the summary element gets the focus
    isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
      return false;
    }

    return true;
  };

  var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
    if (!isNodeMatchingSelectorFocusable(options, node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
      return false;
    }

    return true;
  };

  var tabbable = function tabbable(el, options) {
    options = options || {};
    var regularTabbables = [];
    var orderedTabbables = [];
    var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
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
  };

  var focusable = function focusable(el, options) {
    options = options || {};
    var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
    return candidates;
  };

  var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');

  var isFocusable = function isFocusable(node, options) {
    options = options || {};

    if (!node) {
      throw new Error('No node provided');
    }

    if (matches.call(node, focusableCandidateSelector) === false) {
      return false;
    }

    return isNodeMatchingSelectorFocusable(options, node);
  };

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

  var RmList = {
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
              return item[TABINDEX] !== undefined || isFocusable(item);
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
              if (this.getSingleHighlight() && isRipple(item)) {
                  const obj = ripple(item);
                  item[RIPPLE_HIGHLIGHT] = obj.getOption("highlight") || null;
                  obj.set({ highlight: false });
              }
              if (index === 0 && !preventFocus) {
                  return;
              }
              tabbable(item).forEach(disableTabbable);
              disableTabbable(item, preventFocus);
          });
      },

      onBeforeUpdate() {
          this.getItems().forEach((item, index) => {
              focusable(item, { includeContainer: true }).forEach(restoreTabbable);
              if (isRipple(item) && item[RIPPLE_HIGHLIGHT] !== undefined) {
                  ripple(item, { highlight: item[RIPPLE_HIGHLIGHT] });
                  delete item[RIPPLE_HIGHLIGHT];
              }
          });
      },

      onUpdated() {
          const preventFocus = this.getPreventFocus();
          const items = this.getItems();
          items.forEach((item, index) => {
              if (this.getSingleHighlight() && isRipple(item)) {
                  const obj = ripple(item);
                  item[RIPPLE_HIGHLIGHT] = obj.getOption("highlight") || null;
                  obj.set({ highlight: false });
              }
              if (index === this._index && !preventFocus) {
                  return;
              }
              tabbable(item).forEach(disableTabbable);
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
                      tabbable(lastItem).forEach(disableTabbable);
                      disableTabbable(lastItem, preventFocus);
                  }
                  this._index = index;
                  focusable(item, { includeContainer: true }).forEach(enableTabbable);
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
              this._lastHighlight = isRipple(item) ? ripple(item).highlight() : null;
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
        '<slot expr1="expr1"></slot>',
        [
          {
            'expressions': [
              {
                'type': expressionTypes.EVENT,
                'name': 'onkeydown',

                'evaluate': function(
                  _scope
                ) {
                  return _scope._onkeydown;
                }
              },
              {
                'type': expressionTypes.EVENT,
                'name': 'onmousedown',

                'evaluate': function(
                  _scope
                ) {
                  return _scope._updateCurrent;
                }
              },
              {
                'type': expressionTypes.EVENT,
                'name': 'onmousemove',

                'evaluate': function(
                  _scope
                ) {
                  return _scope._updateCurrent;
                }
              },
              {
                'type': expressionTypes.EVENT,
                'name': 'onmouseleave',

                'evaluate': function(
                  _scope
                ) {
                  return _scope._onmouseleave;
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

    'name': 'rm-list'
  };

  return RmList;

}));
