import css from "@material/elevation/dist/mdc.elevation.css";

let destroyer: (() => void) | null = null;
export function init() {
    if (destroyer !== null) {
        return destroyer;
    }

    const style = document.head.appendChild(document.createElement("style"));
    style.innerHTML = css;

    return destroyer = () => {
        document.head.removeChild(style);
        destroyer = null;
    };
}
export function restore() {
    if (destroyer === null) {
        return;
    }
    destroyer();
}

export function elevation(element: HTMLElement, elevation: number | null): void {
    init();
    for (let i: number = 0; i <= 24; i++) {
        if (i === elevation) {
            continue;
        }
        element.classList.remove("mdc-elevation--z" + i);
    }
    if (elevation != null) {
        element.classList.add("mdc-elevation-transition");
        element.classList.add("mdc-elevation--z" + elevation);
    } else {
        element.classList.remove("mdc-elevation-transition");
    }
}