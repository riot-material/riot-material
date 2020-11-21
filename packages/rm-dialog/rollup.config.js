const riot = require("rollup-plugin-riot");

export default [
    {
        input: "index.riot",
        plugins: [
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
        plugins: [
            riot()
        ],
        output: {
            file: "index.es.js",
            format: "es"
        }
    },
    {
        input: "index.riot",
        plugins: [
            riot()
        ],
        output: {
            file: "index.amd.js",
            format: "amd"
        }
    },
    {
        input: "index.riot",
        plugins: [
            riot()
        ],
        output: {
            name: "riotMaterial.components.dialog",
            file: "index.umd.js",
            format: "umd"
        }
    }
];