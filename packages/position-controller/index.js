'use strict';

var POSITION_CONTROLLER = Symbol("position-controller");
function positionController(element) {
    var existingPositionController = element[POSITION_CONTROLLER];
    if (existingPositionController != null) {
        return existingPositionController;
    }
    var self;
    var eventTarget = new EventTarget();
    var length = 0;
    var getLength = function () {
        return length;
    };
    var setLength = function (l) {
        length = l;
        return self;
    };
    var index = 0;
    var getSelectedIndex = function () {
        return index;
    };
    var setSelectedIndex = function (i) {
        index = Math.min(Math.max(0, i), length - 1);
        return self;
    };
    var position = 0;
    var getPosition = function () {
        var m = parseFloat(position);
        if (isNaN(m)) {
            return 0;
        }
        m = Math.max(Math.min(1, m), -1);
        return (index === 0 && m < 0 || index === (length - 1) && m > 0) ? 0 : m;
    };
    {
        var _touchIdentifier_1 = null;
        var startX_1 = 0;
        var lastDirection_1 = null;
        var positioningStarted_1 = true;
        var startPositioning = function (event) {
            if (_touchIdentifier_1 != null) {
                return;
            }
            var touch = event.targetTouches[0];
            _touchIdentifier_1 = touch.identifier;
            startX_1 = touch.clientX;
            lastDirection_1 = null;
            positioningStarted_1 = true;
        };
        var updatePosition = function (event) {
            if (!positioningStarted_1) {
                return;
            }
            var index;
            if (!Array.prototype.some.call(event.changedTouches, function (touch, i) {
                index = i;
                return touch.identifier === _touchIdentifier_1;
            })) {
                return;
            }
            var lastPosition = getPosition();
            var touch = event.changedTouches[index];
            var endX = touch.clientX;
            var delta = endX - startX_1;
            position = -delta / element.getBoundingClientRect().width;
            var newPosition = getPosition();
            if (newPosition !== lastPosition) {
                lastDirection_1 = newPosition > lastPosition ? 1 : -1;
            }
            eventTarget.dispatchEvent(new CustomEvent("positionchanged", { detail: { position: newPosition } }));
        };
        var endPositioning = function (event) {
            if (!positioningStarted_1) {
                return;
            }
            if (!Array.prototype.some.call(event.changedTouches, function (touch) {
                return touch.identifier === _touchIdentifier_1;
            })) {
                return;
            }
            if (lastDirection_1 != null) {
                var m = getPosition();
                position = 0;
                var newM = void 0;
                if (m < 0) {
                    newM = lastDirection_1 < 0 ? -1 : 0;
                }
                else {
                    newM = lastDirection_1 > 0 ? 1 : 0;
                }
                lastDirection_1 = null;
                var roundedPosition = Math.round(newM);
                var previousIndex = getSelectedIndex();
                if (roundedPosition !== 0) {
                    setSelectedIndex(previousIndex + roundedPosition);
                }
                eventTarget.dispatchEvent(new CustomEvent("positionapplied", {
                    detail: {
                        previousIndex: previousIndex,
                        currentIndex: getSelectedIndex()
                    }
                }));
            }
            _touchIdentifier_1 = null;
            positioningStarted_1 = false;
        };
        element.addEventListener("touchstart", startPositioning);
        element.addEventListener("touchmove", updatePosition);
        element.addEventListener("touchcancel", endPositioning);
        element.addEventListener("touchend", endPositioning);
    }
    return element[POSITION_CONTROLLER] = self = {
        getPosition: getPosition,
        getSelectedIndex: getSelectedIndex,
        setSelectedIndex: setSelectedIndex,
        getLength: getLength,
        setLength: setLength,
        on: function (type, callback) {
            eventTarget.addEventListener(type, callback);
            return self;
        },
        off: function (type, callback) {
            eventTarget.removeEventListener(type, callback);
            return self;
        }
    };
}

module.exports = positionController;
