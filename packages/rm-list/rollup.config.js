const commonjs = require("@rollup/plugin-commonjs");
const riot = require("rollup-plugin-riot");
const typescript = require("rollup-plugin-ts");

const { nodeResolve } = require("@rollup/plugin-node-resolve");

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
                name: "riotMaterial.components.list",
                file: "dist/index.js",
                format: "umd",
                globals
            }
        ]
    },
    {
        input: "src/index.ts",
        external: basicExternal,
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript(),
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