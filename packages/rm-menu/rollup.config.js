const commonjs = require("@rollup/plugin-commonjs");
const riot = require("rollup-plugin-riot");
const typescript = require("rollup-plugin-ts");

const { nodeResolve } = require("@rollup/plugin-node-resolve");
const { terser } = require("rollup-plugin-terser");

const globals = {
    "@riot-material/elevation": "riotMaterial.elevation",
    "@riot-material/focus-manager": "riotMaterial.focusManager",
    "@riot-material/ripple": "riotMaterial.ripple"
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
            riot(),
            // terser()
        ],
        output: [
            {
                file: "dist/index.es.js",
                format: "es"
            },
            {
                name: "riotMaterial.components.menu",
                file: "dist/index.js",
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
            typescript(),
            riot(),
            // terser()
        ],
        output: [
            {
                name: "riotMaterial.components.menu",
                file: "dist/index+libs.js",
                format: "umd"
            }
        ]
    }
];