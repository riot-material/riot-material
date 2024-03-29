# Changelog
All notable changed to this project will be documented in this file

## [2.1.0] - 2021-10-16
- add `menu` property
- fix input sizing

## [2.0.0] - 2021-10-01
- emit ts declarations
- update dependencies

## [1.6.0] - 2021-07-23
- update dependencies

## [1.5.2] - 2021-02-07
- fix bug

## [1.5.1] - 2021-02-02
- dispatch "change" event with `bubbles: true`
- update dependencies

## [1.5.0] - 2021-01-31
- implement `readonly` property
- update dependencies

## [1.4.0] - 2021-01-07
- expose "selectedIndex", "options" and "selectedOptions"
- update dependencies

## [1.3.3] - 2021-01-04
- fix .select(option) bug

## [1.3.2] - 2021-01-04
- fix set value programmatically

## [1.3.1] - 2021-01-03
- fix refresh label when updating from parent
- remove "\<option>" manipulation

## [1.3.0] - 2021-01-03
- add "menuselected" event

## [1.2.0] - 2021-01-03
- add "menuopen" and "menuclose" events

## [1.1.0] - 2021-01-03
- update text on change when filtering
- add "filter" property
- add tests for \[filterable] `rm-select`

## [1.0.14] - 2020-12-27
- fix onUnmounted

## [1.0.13] - 2020-12-27
- fix full-width and disabled props
- filter invalid variant prop

## [1.0.12] - 2020-12-24
- update dependencies

## [1.0.11] - 2020-12-07
- fix _lastSelectedOption bug

## [1.0.10] - 2020-12-07
- delegate "selected" property to options and compute value on the fly
- add "_lastSelectedOption" property

## [any] - Unreleased
- refactor

## [1.0.9] - 2020-12-06
- fix label on selection
- change dist structure
- update "package.json" entry point

## [1.0.8] - 2020-12-01
- select last option with "selected" attribute set
- `getOptions()` returns options from menu component

## [any] - Unreleased
- store value by storing the last selected option and not the value itself
- make this.value select first available option with the specified value

## [1.0.7] - 2020-11-30
- fix rollup.config.js external modules

## [1.0.6] - 2020-11-30
- fix "package.json" entry point

## [1.0.5] - 2020-11-30
- move source to "src" and bundled files to "dist"
- update rm-menu library
- update rollup.config.js
- add test file
