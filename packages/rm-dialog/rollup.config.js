const riot = require("rollup-plugin-riot");
const nodeResolve = require("@rollup/plugin-node-resolve").default;

const globals = {
    "@riot-material/surfaces": "riotMaterial.surfaces"
};
const external = Object.keys(globals);

export default [
    {
        input: "src/index.riot",
        external,
        plugins: [
            nodeResolve(),
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