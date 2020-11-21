import style from "@material/elevation/dist/mdc.elevation.css";
if ((style as any)._______) { (style as any).justForCorrectlyInjectStyle(); }

export default function elevation(element: HTMLElement, elevation: number | null): void {
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