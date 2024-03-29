# Changelog
All notable changed to this project will be documented in this file

## [1.2.0] - 2021-10-01
- emit ts declarations
- update dependencies

## [1.1.4] - 2021-09-17
- check presence of `style.setProperty` when setting color

## [1.1.3] - 2021-09-17
- compute `scaleUpStyle` when needed
- avoid ripple animation when document is not visible
- redirect requestAnimationFrame to setTimeout when unavailable
- refactor a bit

## [1.1.2] - 2021-07-23
- fix duplicate setup

## [1.1.1] - 2021-07-23
- avoid setup on module import again

## [1.1.0] - 2021-07-23
- avoid setup on module import

## [1.0.6] - 2021-07-14
- check if `whatInput` is defined

## [1.0.5] - 2020-12-07
- make ripple does not vanish when the element they are attached to is currently not visibile

## [1.0.4] - 2020-12-05
- set default "usePointerFocus" and "stopRippling" to true
- change dist structure
- update "package.json" entry points
- add test
- add "files" in "package.json"

## [1.0.3] - 2020-12-01
- set "what-input" as external module in cjs export
- add es bundle export

## [1.0.2] - 2020-11-26
- fix package.json entry point

## [1.0.1] - 2020-11-26
- fix: update options does not override undeclared options with default value
- create CHANGELOG and README
- move source in `src` folder and bundled files in `dist`