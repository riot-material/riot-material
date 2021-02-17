const riot = require("rollup-plugin-riot");
const commonjs = require("@rollup/plugin-commonjs");
const nodeResolve = require("@rollup/plugin-node-resolve").default;

const globals = {
    "@riot-material/position-controller": "riotMaterial.positionController",
    "@riot-material/ripple": "riotMaterial.ripple",
    "riot": "riot"
};
const external = Object.keys(globals);

export default [
    {
        input: "src/index.riot",
        external,
        plugins: [
            nodeResolve(),
            commonjs(),
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
        input: "src/index.riot",
        external: [ "riot" ],
        plugins: [
            nodeResolve(),
            commonjs(),
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