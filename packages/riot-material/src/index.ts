import AppBarComponent from "@riot-material/rm-app-bar";
// import BottomSheetComponent from "@riot-material/rm-bottom-sheet";
import ButtonComponent from "@riot-material/rm-button";
import CheckboxComponent from "@riot-material/rm-checkbox";
// import CircularAvatarComponent from "@riot-material/rm-circular-avatar";
import DialogComponent from "@riot-material/rm-dialog";
import DividerComponent from "@riot-material/rm-divider";
import IconComponent from "@riot-material/rm-icon";
import ListAvatarComponent from "@riot-material/rm-list-avatar";
import ListGroupComponent from "@riot-material/rm-list-group";
import ListImageComponent from "@riot-material/rm-list-image";
import ListItemComponent from "@riot-material/rm-list-item";
import MenuComponent from "@riot-material/rm-menu";
import MenuItemComponent from "@riot-material/rm-menu-item";
import RadioComponent from "@riot-material/rm-radio";
// import RippleComponent from "@riot-material/rm-ripple";
import SelectComponent from "@riot-material/rm-select";
import TabbedPagesComponent from "@riot-material/rm-tabbed-pages";
// import TabsComponent from "@riot-material/rm-tabs";
// import TextareaComponent from "@riot-material/rm-textarea";
import TextfieldComponent from "@riot-material/rm-textfield";
import TextfieldContainerComponent from "@riot-material/rm-textfield-container";
import VisibilityTriggerComponent from "@riot-material/rm-visibility-trigger";


import * as appBarUtils from "@riot-material/app-bar-utils";
import * as background from "@riot-material/background";
import * as beforeFocusListener from "@riot-material/before-focus-listener";
import * as elevation from "@riot-material/elevation";
import * as newPropsWrapper from "@riot-material/new-props-wrapper";
import * as ripple from "@riot-material/ripple";
import * as surfaces from "@riot-material/surfaces";

import { register } from "riot";

register("rm-app-bar", AppBarComponent);
// register("rm-bottom-sheet", BottomSheetComponent);
register("rm-button", ButtonComponent);
register("rm-checkbox", CheckboxComponent);
// register("rm-circular-avatar", CircularAvatarComponent);
register("rm-dialog", DialogComponent);
register("rm-divider", DividerComponent);
register("rm-icon", IconComponent);
register("rm-list-avatar", ListAvatarComponent);
register("rm-list-group", ListGroupComponent);
register("rm-list-image", ListImageComponent);
register("rm-list-item", ListItemComponent);
register("rm-menu", MenuComponent);
register("rm-menu-item", MenuItemComponent);
register("rm-radio", RadioComponent);
// register("rm-ripple", RippleComponent);
register("rm-select", SelectComponent);
register("rm-tabbed-pages", TabbedPagesComponent);
// register("rm-tabs", TabsComponent);
// register("rm-textarea", TextareaComponent);
register("rm-textfield", TextfieldComponent);
register("rm-textfield-container", TextfieldContainerComponent);
register("rm-visibility-trigger", VisibilityTriggerComponent);

// tslint:disable-next-line:typedef
const components = {
    appBar: AppBarComponent,
    // bottomSheet: BottomSheetComponent,
    button: ButtonComponent,
    checkbox: CheckboxComponent,
    // circularAvatar: CircularAvatarComponent,
    dialog: DialogComponent,
    divider: DividerComponent,
    icon: IconComponent,
    listAvatar: ListAvatarComponent,
    listGroup: ListGroupComponent,
    listImage: ListImageComponent,
    listItem: ListItemComponent,
    menu: MenuComponent,
    menuItem: MenuItemComponent,
    radio: RadioComponent,
    // ripple: RippleComponent,
    select: SelectComponent,
    tabbedPages: TabbedPagesComponent,
    // tabs: TabsComponent,
    // textarea: TextareaComponent,
    textfield: TextfieldComponent,
    textfieldContainer: TextfieldContainerComponent,
    visibilityTrigger: VisibilityTriggerComponent
};

export {
    appBarUtils,
    background,
    beforeFocusListener,
    components,
    elevation,
    newPropsWrapper,
    ripple,
    surfaces
};