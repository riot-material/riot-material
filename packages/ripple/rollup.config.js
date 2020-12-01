const typescript = require("@rollup/plugin-typescript");
const commonjs = require("@rollup/plugin-commonjs");
const nodeResolve = require("@rollup/plugin-node-resolve").default;

const globals = {
    "what-input": "whatInput"
};
const external = Object.keys(globals);

export default [
    {
        input: "src/index.ts",
        external,
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript()
        ],
        output: [
            {
                file: "dist/index.amd.js",
                format: "amd",
                globals
            },
            {
                file: "dist/index.js",
                exports: "auto",
                format: "cjs"
            },
            {
                file: "dist/index.es.js",
                format: "es"
            },
            {
                name: "riotMaterial.ripple",
                file: "dist/index.umd.js",
                format: "umd",
                globals
            }
        ]
    },
    {
        input: "src/index.ts",
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript()
        ],
        output: [
        {
                file: "dist/index.amd+libs.js",
                format: "amd"
            },
            {
                name: "riotMaterial.ripple",
                file: "dist/index.umd+libs.js",
                format: "umd"
            }
        ]
    }
]