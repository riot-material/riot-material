export const cssName: string = "rm-background";
export function init() {
    let style: HTMLStyleElement = document.createElement("style");
    
    style.innerHTML = `` +
        `.${cssName} {` +
            `background: rgb(245, 245, 245);` +
            `background: rgb(var(--color-background, 245, 245, 245));` +
            `color: rgb(0, 0, 0);` +
            `color: rgb(var(--color-on-background, 0, 0, 0));` +
        `}`
    ;

    document.head.appendChild(style);
};