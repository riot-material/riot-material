const commonjs = require("@rollup/plugin-commonjs");
const riot = require("rollup-plugin-riot");
const typescript = require("rollup-plugin-ts");

const { nodeResolve } = require("@rollup/plugin-node-resolve");

const globals = {
    "@riot-material/position-controller": "riotMaterial.positionController",
    "@riot-material/ripple": "riotMaterial.ripple",
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
                name: "riotMaterial.components.tabbedPages",
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
                name: "riotMaterial.components.tabbedPages",
                file: "dist/index+libs.js",
                format: "umd",
                globals: {
                    "riot": "riot"
                }
            }
        ]
    }
];