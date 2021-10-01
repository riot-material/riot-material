const POSITION_CONTROLLER = Symbol("position-controller");
function positionController(element) {
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
        let lastDirection = null;
        let positioningStarted = true;
        const startPositioning = event => {
            if (_touchIdentifier != null) {
                return;
            }
            const touch = event.targetTouches[0];
            _touchIdentifier = touch.identifier;
            startX = touch.clientX;
            lastDirection = null;
            positioningStarted = true;
        };
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
            const delta = endX - startX;
            position = -delta / element.getBoundingClientRect().width;
            const newPosition = getPosition();
            if (newPosition !== lastPosition) {
                lastDirection = newPosition > lastPosition ? 1 : -1;
            }
            eventTarget.dispatchEvent(new CustomEvent("positionchanged", { detail: { position: newPosition } }));
        };
        const endPositioning = event => {
            if (!positioningStarted) {
                return;
            }
            if (!Array.prototype.some.call(event.changedTouches, touch => {
                return touch.identifier === _touchIdentifier;
            })) {
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
            _touchIdentifier = null;
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

export { positionController as default };
