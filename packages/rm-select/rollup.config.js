const commonjs = require("@rollup/plugin-commonjs");
const riot = require("rollup-plugin-riot");
const typescript = require("rollup-plugin-ts");

const { nodeResolve } = require("@rollup/plugin-node-resolve");

const globals = {
    "@riot-material/before-focus-listener": "riotMaterial.beforeFocusListener",
    "@riot-material/new-props-wrapper": "riotMaterial.newPropsWrapper",
    "@riot-material/ripple": "riotMaterial.ripple",
    "@riot-material/rm-button": "riotMaterial.components.button",
    "@riot-material/rm-menu": "riotMaterial.components.menu",
    "@riot-material/rm-textfield-container": "riotMaterial.components.textfieldContainer",
    "@riot-material/rm-list-item": "riotMaterial.components.listItem",
    "riot": "riot"
};
const external = Object.keys(globals);

export default [
    {
        input: "src/index.ts",
        external,
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript(),
            riot()
        ],
        output: [
            {
                file: "dist/index.es.js",
                format: "es"
            },
            {
                name: "riotMaterial.components.select",
                file: "dist/index.js",
                format: "umd",
                globals
            }
        ]
    },
    {
        input: "src/index.ts",
        external: [ "riot" ],
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript(),
            riot()
        ],
        output: [
            {
                name: "riotMaterial.components.select",
                file: "dist/index+libs.js",
                format: "umd",
                globals: {
                    "riot": "riot"
                }
            }
        ]
    }
];