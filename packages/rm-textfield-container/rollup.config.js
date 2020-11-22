const riot = require("rollup-plugin-riot");

export default [
    {
        input: "src/index.riot",
        plugins: [
            riot()
        ],
        output: {
            file: "dist/index.js",
            format: "cjs",
            exports: "auto"
        }
    },
    {
        input: "src/index.riot",
        plugins: [
            riot()
        ],
        output: {
            file: "dist/index.es.js",
            format: "es"
        }
    },
    {
        input: "src/index.riot",
        plugins: [
            riot()
        ],
        output: {
            file: "dist/index.amd.js",
            format: "amd"
        }
    },
    {
        input: "src/index.riot",
        plugins: [
            riot()
        ],
        output: {
            name: "riotMaterial.components.textfieldContainer",
            file: "dist/index.umd.js",
            format: "umd"
        }
    }
];