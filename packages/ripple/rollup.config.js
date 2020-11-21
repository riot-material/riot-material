const typescript = require("@rollup/plugin-typescript");
const commonjs = require("@rollup/plugin-commonjs");
const nodeResolve = require("@rollup/plugin-node-resolve").default;

const globals = {
    "what-input": "whatInput"
};
const external = Object.keys(globals);

export default [
    {
        input: "index.ts",
        external,
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript()
        ],
        output: {
            file: "index.amd.js",
            format: "amd",
            globals
        }
    },
    {
        input: "index.ts",
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript()
        ],
        output: {
            file: "index.amd+libs.js",
            format: "amd"
        }
    },
    {
        input: "index.ts",
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript()
        ],
        output: {
            file: "index.js",
            exports: "auto",
            format: "cjs"
        }
    },
    {
        input: "index.ts",
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript()
        ],
        output: {
            name: "riotMaterial.ripple",
            file: "index.umd.js",
            format: "umd"
        }
    },
    {
        input: "index.ts",
        external,
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript()
        ],
        output: {
            name: "riotMaterial.ripple",
            file: "index.umd+libs.js",
            format: "umd",
            globals
        }
    }
]