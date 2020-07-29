'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var AppBarComponent = _interopDefault(require('./rm-app-bar'));
var BottomSheetComponent = _interopDefault(require('./rm-bottom-sheet'));
var ButtonComponent = _interopDefault(require('./rm-button'));
var CheckboxComponent = _interopDefault(require('./rm-checkbox'));
var DialogComponent = _interopDefault(require('./rm-dialog'));
var DividerComponent = _interopDefault(require('./rm-divider'));
var IconComponent = _interopDefault(require('./rm-icon'));
var MenuComponent = _interopDefault(require('./rm-menu'));
var MenuItemComponent = _interopDefault(require('./rm-menu-item'));
var RadioComponent = _interopDefault(require('./rm-radio'));
var RippleComponent = _interopDefault(require('./rm-ripple'));
var SelectComponent = _interopDefault(require('./rm-select'));
var TabbedPagesComponent = _interopDefault(require('./rm-tabbed-pages'));
var TabsComponent = _interopDefault(require('./rm-tabs'));
var TextareaComponent = _interopDefault(require('./rm-textarea'));
var TextfieldComponent = _interopDefault(require('./rm-textfield'));
var TextfieldContainer = _interopDefault(require('./rm-textfield-container'));
var elevation = require('./elevation');
var background = require('./background');
var surfaces = require('./surfaces');
var riot = require('riot');

riot.register("rm-app-bar", AppBarComponent);
riot.register("rm-bottom-sheet", BottomSheetComponent);
riot.register("rm-button", ButtonComponent);
riot.register("rm-checkbox", CheckboxComponent);
riot.register("rm-dialog", DialogComponent);
riot.register("rm-divider", DividerComponent);
riot.register("rm-icon", IconComponent);
riot.register("rm-menu", MenuComponent);
riot.register("rm-menu-item", MenuItemComponent);
riot.register("rm-radio", RadioComponent);
riot.register("rm-ripple", RippleComponent);
riot.register("rm-select", SelectComponent);
riot.register("rm-tabbed-pages", TabbedPagesComponent);
riot.register("rm-tabs", TabsComponent);
riot.register("rm-textarea", TextareaComponent);
riot.register("rm-textfield", TextfieldComponent);
riot.register("rm-textfield-container", TextfieldContainer);

exports.AppBarComponent = AppBarComponent;
exports.BottomSheetComponent = BottomSheetComponent;
exports.ButtonComponent = ButtonComponent;
exports.CheckboxComponent = CheckboxComponent;
exports.DialogComponent = DialogComponent;
exports.DividerComponent = DividerComponent;
exports.IconComponent = IconComponent;
exports.MenuComponent = MenuComponent;
exports.MenuItemComponent = MenuItemComponent;
exports.RadioComponent = RadioComponent;
exports.RippleComponent = RippleComponent;
exports.SelectComponent = SelectComponent;
exports.TabbedPagesComponent = TabbedPagesComponent;
exports.TabsComponent = TabsComponent;
exports.TextareaComponent = TextareaComponent;
exports.TextfieldComponent = TextfieldComponent;
exports.TextfieldContainerComponent = TextfieldContainer;
exports.elevation = elevation;
exports.background = background;
exports.surfaces = surfaces;
