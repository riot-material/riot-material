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
                file: "dist/index.js",
                format: "cjs",
                exports: "auto"
            },
            {
                file: "dist/index.es.js",
                format: "es"
            },
            {
                file: "dist/index.amd.js",
                format: "amd",
                globals
            },
            {
                name: "riotMaterial.components.tabbedPages",
                file: "dist/index.umd.js",
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
                file: "dist/index.amd+libs.js",
                format: "amd",
                globals: {
                    "riot": "riot"
                }
            },
            {
                name: "riotMaterial.components.tabbedPages",
                file: "dist/index.umd+libs.js",
                format: "umd",
                globals: {
                    "riot": "riot"
                }
            },
            {
                name: "riotMaterial.components.tabbedPages",
                file: "test/rm-tabbed-pages.js",
                format: "umd",
                globals: {
                    "riot": "riot"
                }
            }
        ]
    }
];