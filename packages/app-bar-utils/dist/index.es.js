/**
 * Giuliano Collacchioni: 2020
 */
// i punti di interruzione dell'altezza delle barre sono struttati nel seguente modo:
// {
//     min-width-1: {
//         min-height-1: height,
//         min-height-2: height,
//         ...,
//         min-height-n: height
//     },
//     ...,
//     min-width-n: {
//         min-height-1: height,
//         min-height-2: height,
//         ...,
//         min-height-n: height
//     }
// }
let breakpoints = {
    0: {
        0: 48,
        560: 56
    },
    600: {
        0: 48,
        560: 56,
        640: 64
    }
};
let height;
function get_height() {
    let documentHeight = document.documentElement.clientHeight;
    let documentWidth = document.documentElement.clientWidth;
    let barHeight = 48;
    let heightBreakpoints;
    // iterazione su tutti i punti di interruzione della larghezza,
    // per recuperare i punti di interruzzione dell'altezza
    Object.entries(breakpoints).some(entry => {
        let [minWidth, heightBreakpoints_] = entry;
        // se il punto d'interruzione supera la larghezza attuale della finestra
        // usare i punti di interruzione dell'altezza precedentemente salvati
        if (documentWidth < parseFloat(minWidth)) {
            return true;
        }
        // salvataggio dei punti di interruzione dell'altezza
        // dell'attuale punto di interruzione della larghezza
        heightBreakpoints = heightBreakpoints_;
        return false;
    });
    // iterazione su tutti i punti di interruzione dell'altezza,
    // per impostare l'altezza delle barre
    Object.entries(heightBreakpoints).some(entry => {
        let [minHeight, height] = entry;
        // se il punto di interruzione supera l'altezza attuale della finestra
        // uscire dalle iterazioni e usare l'ultima altezza delle barre salvata
        if (documentHeight < parseFloat(minHeight)) {
            return true;
        }
        // salvataggio dell'altezza delle barre dell'attuale punto di interruzione
        barHeight = height;
        return false;
    });
    return barHeight;
}
function getHeight() {
    setup();
    return height;
}
// funzione di setup delle utilità del modulo
let done = false;
let listeners = [];
function setup() {
    if (done) {
        return;
    }
    // associare il calcolo dell'altezza delle barre al ridimensionamento della finestra
    window.addEventListener("resize", function () {
        height = get_height();
        for (let i = 0; i < listeners.length;) {
            let actual = listeners[i];
            actual.listener.call(actual.thisArg);
            if (actual.once) {
                listeners.splice(i, 1);
            }
            else {
                i++;
            }
        }
    });
    height = get_height();
    done = true;
}
function onChange(listener, thisArg) {
    listeners.push({
        listener,
        thisArg,
        once: false
    });
}
function onceChange(listener, thisArg) {
    listeners.push({
        listener,
        thisArg,
        once: true
    });
}
function offChange(listener, thisArg) {
    let index = -1;
    if (listeners.some((l, i) => {
        if (listener === l.listener &&
            thisArg === l.thisArg) {
            index = i;
            return true;
        }
        return false;
    })) {
        listeners.splice(index, 1);
    }
}

export { getHeight, offChange, onChange, onceChange, setup };
