const riot = require("rollup-plugin-riot");
const commonjs = require("@rollup/plugin-commonjs");
const nodeResolve = require("@rollup/plugin-node-resolve").default;

const basicGlobals = {
    "riot": "riot"
};
const basicExternal = Object.keys(basicGlobals);
const globals = {
    "@riot-material/ripple": "riotMaterial.ripple",
    "tabbable": "tabbable",
    ...basicGlobals
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
                name: "riotMaterial.components.list",
                file: "dist/index.js",
                format: "umd",
                globals
            }
        ]
    },
    {
        input: "src/index.riot",
        basicExternal,
        plugins: [
            nodeResolve(),
            commonjs(),
            riot()
        ],
        output: [
            {
                name: "riotMaterial.components.list",
                file: "dist/index+libs.js",
                format: "umd",
                globals: basicGlobals
            }
        ]
    }
];