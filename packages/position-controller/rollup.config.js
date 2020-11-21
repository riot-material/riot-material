const typescript = require("@rollup/plugin-typescript");

export default [
    {
        input: "index.ts",
        plugins: [
            typescript()
        ],
        output: {
            file: "index.amd.js",
            format: "amd"
        }
    },
    {
        input: "index.ts",
        plugins: [
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
            typescript()
        ],
        output: {
            name: "positionController",
            file: "index.umd.js",
            format: "umd"
        }
    }
]