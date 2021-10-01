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

export { hold, on, release };
