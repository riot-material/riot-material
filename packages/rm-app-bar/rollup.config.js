const riot = require("rollup-plugin-riot");
const commonjs = require("@rollup/plugin-commonjs");
const nodeResolve = require("@rollup/plugin-node-resolve").default;

const globals = {
    "@riot-material/elevation": "riotMaterial.elevation",
    "@riot-material/app-bar-utils": "riotMaterial.appBarUtils"
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
                name: "riotMaterial.components.appBar",
                file: "dist/index.js",
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
                name: "riotMaterial.components.appBar",
                file: "dist/index+libs.js",
                format: "umd"
            }
        ]
    }
];