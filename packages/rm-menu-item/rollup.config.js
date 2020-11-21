const riot = require("rollup-plugin-riot");
const commonjs = require("@rollup/plugin-commonjs");
const nodeResolve = require("@rollup/plugin-node-resolve").default;

const globals = {
    "@riot-material/ripple": "riotMaterial.ripple",
    "riot": "riot"
};
const external = Object.keys(globals);

export default [
    {
        input: "index.riot",
        external,
        plugins: [
            nodeResolve(),
            commonjs(),
            riot()
        ],
        output: {
            file: "index.js",
            format: "cjs",
            exports: "auto"
        }
    },
    {
        input: "index.riot",
        external,
        plugins: [
            nodeResolve(),
            commonjs(),
            riot()
        ],
        output: {
            file: "index.es.js",
            format: "es"
        }
    },
    {
        input: "index.riot",
        external,
        plugins: [
            nodeResolve(),
            commonjs(),
            riot()
        ],
        output: {
            file: "index.amd.js",
            format: "amd",
            globals
        }
    },
    {
        input: "index.riot",
        plugins: [
            nodeResolve(),
            commonjs(),
            riot()
        ],
        output: {
            file: "index.amd+libs.js",
            format: "amd"
        }
    },
    {
        input: "index.riot",
        external,
        plugins: [
            nodeResolve(),
            commonjs(),
            riot()
        ],
        output: {
            name: "riotMaterial.components.menuItem",
            file: "index.umd.js",
            format: "umd",
            globals
        }
    },
    {
        input: "index.riot",
        plugins: [
            nodeResolve(),
            commonjs(),
            riot()
        ],
        output: {
            name: "riotMaterial.components.menuItem",
            file: "index.umd+libs.js",
            format: "umd"
        }
    }
];