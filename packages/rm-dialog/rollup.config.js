const riot = require("rollup-plugin-riot");
const typescript = require("rollup-plugin-ts");

const { nodeResolve } = require("@rollup/plugin-node-resolve");

const globals = {
    "@riot-material/surfaces": "riotMaterial.surfaces"
};
const external = Object.keys(globals);

export default [
    {
        input: "src/index.ts",
        external,
        plugins: [
            nodeResolve(),
            typescript(),
            riot()
        ],
        output: [
            {
                file: "dist/index.es.js",
                format: "es"
            },
            {
                name: "riotMaterial.components.dialog",
                file: "dist/index.js",
                format: "umd",
                globals
            }
        ]
    // },
    // {
    //     input: "src/index.riot",
    //     plugins: [
    //         nodeResolve(),
    //         riot()
    //     ],
    //     output: [
    //         {
    //             name: "riotMaterial.components.dialog",
    //             file: "dist/index+libs.js",
    //             format: "umd"
    //         }
    //     ]
    }
];