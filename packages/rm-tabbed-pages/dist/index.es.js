import * as riot from 'riot';
import positionController from '@riot-material/position-controller';
import { ripple } from '@riot-material/ripple';

const PAGE_INDEX = Symbol("page-index");

var index = {
  'css': `rm-tabbed-pages,[is="rm-tabbed-pages"]{ white-space: nowrap; overflow: hidden; width: 100%; display: block; font-size: 0; transform: scaleY(1); } rm-tabbed-pages > div:first-child,[is="rm-tabbed-pages"] > div:first-child{ overflow: hidden; display: block; width: 100%; } rm-tabbed-pages > div:first-child > div:first-child,[is="rm-tabbed-pages"] > div:first-child > div:first-child{ display: block; width: 100%; overflow: auto visible; position: relative; user-select: none; text-align: center; } rm-tabbed-pages > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:first-child{ display: inline-table; font-size: initial; text-align: center; } rm-tabbed-pages:not([centered]) > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"]:not([centered]) > div:first-child > div:first-child > div:first-child,rm-tabbed-pages[centered="false" i] > div:first-child > div:first-child > div:first-child,[is="rm-tabbed-pages"][centered="false" i] > div:first-child > div:first-child > div:first-child{ width: 100%; } rm-tabbed-pages > div:first-child > div:first-child > div:first-child > div,[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:first-child > div{ display: table-cell; overflow: hidden; position: relative; width: 1px; height: 100%; } rm-tabbed-pages > div:first-child > div:first-child > div:first-child > div > button,[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:first-child > div > button{ background-color: transparent; border: 0; padding: 12px 16px; font-size: 16px; line-height: 20px; height: 100%; width: 100%; cursor: pointer; outline: none; color: rgb(0, 0, 0); color: rgb(var(--color-on-background, 0, 0, 0)); } rm-tabbed-pages > div:first-child > div:first-child > div:nth-child(2),[is="rm-tabbed-pages"] > div:first-child > div:first-child > div:nth-child(2){ position: absolute; bottom: 0; left: 0; height: 2px; width: 1px; transition: transform ease-in-out 200ms; transform-origin: left; background: rgb(139, 0, 139); background: rgb(var(--color-primary, 139, 0, 139)); } rm-tabbed-pages > div:nth-child(2),[is="rm-tabbed-pages"] > div:nth-child(2){ overflow: hidden; max-height: 21474836px; transition: transform ease-in-out 200ms; } rm-tabbed-pages > div:nth-child(2) > *,[is="rm-tabbed-pages"] > div:nth-child(2) > *{ display: inline-block; width: 100%; vertical-align: top; transition: transform ease-in-out 200ms; font-size: initial; white-space: initial; }`,

  'exports': {
    onMounted() {
        this._manipulate();
        let width = this.root.getBoundingClientRect().width;
        const frame = () => {
            if (!this.root.isConnected) {
                return;
            }
            const newWidth = this.root.getBoundingClientRect().width;
            if (newWidth !== width) {
                this._updateIndicator(true);
                width = newWidth;
            }
            window.requestAnimationFrame(frame);
        };
        window.requestAnimationFrame(frame);
        positionController(this.root.children[1])
        .setSelectedIndex(this.getSelectedIndex())
        .on("positionchanged", event => this.update({ instant: true }))
        .on("positionapplied", event => {
            if (event.detail.currentIndex === event.detail.previousIndex) {
                this.update({ skipUpdate: true });
            } else {
                this.setSelectedIndex(event.detail.currentIndex);
            }
        });
    },

    onBeforeUpdate() {
        if (this.state.selectedIndex != null) {
            this.state.selectedIndex = Math.round(this.state.selectedIndex);
        }
        if (isNaN(this.state.selectedIndex)) {
            delete this.state.selectedIndex;
        }
    },

    onUpdated() {
        this._manipulate(true);
    },

    _lastHiddenTabsPropValue: undefined,
    _hiddenTabs: [],

    _manipulate(update = false) {
        const tabContainer = this.root
            .firstElementChild // SCROLLBAR HIDER
            .firstElementChild // HEADER
            .firstElementChild // TAB CONTAINER
        ;
        const pageContainer = this.root.children[1];

        // restore hidden tabs and set correct view
        const currentlySelectedIndex = this.getSelectedIndex();
        const currentlyRawSelectedIndex = this._getRawIndexOf(this.getSelectedIndex());
        this._hiddenTabs = [];
        this.slots.forEach((slot, index) => {
            if (slot.bindings.some(binding => {
                const parent = this[riot.__.globals.PARENT_KEY_SYMBOL] || null;
                if (binding.type !== 1 || binding.evaluate(Object.create(parent))) {
                    return false;
                }

                const updatedIndex = this._getUpdatedIndexOf(index);
                const page = pageContainer.children[updatedIndex];
                if (page && page[PAGE_INDEX] === index) {
                    tabContainer.removeChild(tabContainer.children[updatedIndex]);
                    // unmount page at hidden index
                    const instance = page[riot.__.globals.DOM_COMPONENT_INSTANCE_PROPERTY];
                    if (instance != null) {
                        instance.unmount(Object.create(parent), parent);
                    }
                    pageContainer.removeChild(page);
                }

                this._hiddenTabs.push(index);
                return true;
            })) {
                return;
            }

            let tabButton = null;
            let page;
            const updatedIndex = this._getUpdatedIndexOf(index);
            pageContainer.children[updatedIndex];
            if (updatedIndex >= pageContainer.children.length) {
                page = pageContainer.appendChild(document.createElement("div"));
                page[PAGE_INDEX] = index;
                tabButton = tabContainer.appendChild(document.createElement("div"));
            } else if (index !== (page = pageContainer.children[updatedIndex])[PAGE_INDEX]) {
                page = pageContainer.insertBefore(document.createElement("div"), pageContainer.children[index]);
                page[PAGE_INDEX] = index;
                tabButton = tabContainer.insertBefore(document.createElement("div"), tabContainer.children[index]);
            }
            // scroll to selected index
            const updatedSelectedIndex = this._getUpdatedIndexOf(currentlyRawSelectedIndex);
            page.style.transition = this.state.instant || updatedSelectedIndex !== currentlySelectedIndex ? "none" : "";
            page.style.transform = "translateX(-" + ((updatedSelectedIndex + this.getPosition()) * 100) + "%)";
            page.style.visibility = updatedSelectedIndex === updatedIndex ? "visible" : "hidden";
            page.style.maxHeight = updatedSelectedIndex === updatedIndex ? "" : "0px";

            if (tabButton != null) {
                const button = tabButton.appendChild(document.createElement("button"));
                button.addEventListener("click", event => {
                    this.setSelectedIndex(this._getUpdatedIndexOf(index));
                });
                button.innerText = slot.id;
                ripple(button, { detectLabel: false, color: "currentColor", instantHighlight: true });
            }
        });
        const newlySelectedIndex = this._getUpdatedIndexOf(currentlyRawSelectedIndex);
        if (currentlySelectedIndex !== newlySelectedIndex) {
            this.state.selectedIndex = newlySelectedIndex;
            positionController(this.root.children[1]).setSelectedIndex(this.getSelectedIndex());
            this._updateIndicator(true);
        }

        // update positionController length
        positionController(this.root.children[1]).setLength(this.getLength());

        // set indicator to correct position and size
        this._updateIndicator(!update || this.state.instant);

        // hide scrollbar, if visible
        const header = this.root
            .firstElementChild // SCROLLBAR HIDER
            .firstElementChild // HEADER
        ;
        const rect = header.getBoundingClientRect();
        header.style.marginBottom = header.clientHeight - rect.height + "px";

        if (!this.state.instant) {
            const selectedIndex = this.getSelectedIndex();
            const slot = this._getSlotAt(selectedIndex);
            const el = pageContainer.children[selectedIndex];
            let instance = el[riot.__.globals.DOM_COMPONENT_INSTANCE_PROPERTY];
            if (instance == null) {
                instance = el[riot.__.globals.DOM_COMPONENT_INSTANCE_PROPERTY] = riot.__.DOMBindings.template(slot.html, slot.bindings);
                instance.mount(
                    el, Object.create(this[riot.__.globals.PARENT_KEY_SYMBOL]),
                    this[riot.__.globals.PARENT_KEY_SYMBOL]
                );
            } else if (update && !this.state.skipUpdate) {
                instance.update(
                    Object.create(this[riot.__.globals.PARENT_KEY_SYMBOL]),
                    this[riot.__.globals.PARENT_KEY_SYMBOL]
                );
            }
        }
        delete this.state.instant;
        delete this.state.skipUpdate;
    },

    _updateIndicator(instant = false) {
        const indicator = this.root
            .firstElementChild // SCROLLBAR HIDER
            .firstElementChild // HEADER
            .children[1]       // INDICATOR
        ;
        indicator.style.transition = instant ? "none" : "";
        indicator.style.transform = `translateX(${ this._getIndicatorLeft() }px) scaleX(${ this._getIndicatorWidth() })`;
    },

    _getUpdatedIndexOf(index) {
        return index - this._hiddenTabs.filter(a => a < index).length;
    },

    _getRawIndexOf(index) {
        this._hiddenTabs.some(hidden => {
            if (hidden > index) {
                return true;
            }
            index++;
            return false;
        });
        return index;
    },

    _getSlotAt(index) {
        return this.slots[this._getRawIndexOf(index)];
    },

    getLength() {
        return this.slots.length - this._hiddenTabs.filter(a => a < this.slots.length).length;
    },

    _lastSelectedIndexPropValue: undefined,

    getSelectedIndex() {
        if (this.props.selectedIndex !== this._lastSelectedIndexPropValue) {
            this._lastSelectedIndexPropValue = this.props.selectedIndex;
            const selectedIndex = parseInt(this.props.selectedIndex, 10);
            if (!isNaN(selectedIndex)) {
                this.state.selectedIndex = selectedIndex;
            }
        }
        const length = this.getLength();
        if (this.state.selectedIndex === undefined) {
            this.state.selectedIndex = length > 0 ? 0 : null;
        } else {
            this.state.selectedIndex = length > 0 ?
                Math.max(0, Math.min(this.state.selectedIndex, length - 1)) : null
            ;
        }
        return this.state.selectedIndex;
    },

    setSelectedIndex(index) {
        if (index === this.getSelectedIndex()) {
            return;
        }
        this.update({ selectedIndex: index });
        positionController(this.root.children[1]).setSelectedIndex(this.getSelectedIndex());
    },

    _getIndicatorLeft() {
        const selectedIndex = this.getSelectedIndex();
        if (selectedIndex == null) {
            return 0;
        }
        const rect = this.root
            .firstElementChild // SCROLLBAR HIDER
            .firstElementChild // HEADER
            .firstElementChild // TAB CONTAINER
            .children[selectedIndex] // TAB BUTTON
            .getBoundingClientRect()
        ;
        const delta = this.root
            .firstElementChild // SCROLLBAR HIDER
            .firstElementChild // HEADER
            .scrollLeft -
            this.root.getBoundingClientRect().left
        ;
        let left = rect.left + delta;
        const position = this.getPosition();
        if (position !== 0) {
            const index = selectedIndex + (position > 0 ? 1 : -1);
            const rect = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .firstElementChild // TAB CONTAINER
                .children[index] // TAB BUTTON
                .getBoundingClientRect()
            ;
            left += ((rect.left + delta - left) * Math.abs(position));
        }
        return left;
    },

    _getIndicatorWidth() {
        const selectedIndex = this.getSelectedIndex();
        if (selectedIndex == null) {
            return 0;
        }
        let width = this.root
            .firstElementChild // SCROLLBAR HIDER
            .firstElementChild // HEADER
            .firstElementChild // TAB CONTAINER
            .children[selectedIndex] // TAB BUTTON
            .getBoundingClientRect().width
        ;
        const position = this.getPosition();
        if (position !== 0) {
            const index = selectedIndex + (position > 0 ? 1 : -1);
            const rect = this.root
                .firstElementChild // SCROLLBAR HIDER
                .firstElementChild // HEADER
                .firstElementChild // TAB CONTAINER
                .children[index] // TAB BUTTON
                .getBoundingClientRect()
            ;
            width += ((rect.width - width) * Math.abs(position));
        }
        return width;
    },

    getPosition() {
        return positionController(this.root.children[1]).getPosition();
    }
  },

  'template': function(
    template,
    expressionTypes,
    bindingTypes,
    getComponent
  ) {
    return template(
      '<div style="transform: scaleY(1);"><div><div></div><div></div></div></div><div></div>',
      []
    );
  },

  'name': 'rm-tabbed-pages'
};

export default index;
