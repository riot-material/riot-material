const riot = require("rollup-plugin-riot");
const commonjs = require("@rollup/plugin-commonjs");
const nodeResolve = require("@rollup/plugin-node-resolve").default;

const globals = {
    "@riot-material/ripple": "riotMaterial.ripple",
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
                name: "riotMaterial.components.listItem",
                file: "dist/index.umd.js",
                format: "umd",
                globals
            }
        ]
    },
    {
        input: "src/index.riot",
        plugins: [
            nodeResolve(),
            commonjs(),
            riot()
        ],
        output: [
            {
                file: "dist/index.amd+libs.js",
                format: "amd"
            },
            {
                name: "riotMaterial.components.listItem",
                file: "dist/index.umd+libs.js",
                format: "umd"
            }
        ]
    }
];