const typescript = require("@rollup/plugin-typescript");

export default [
    {
        input: "src/index.ts",
        plugins: [
            typescript()
        ],
        output: {
            file: "dist/index.amd.js",
            format: "amd"
        }
    },
    {
        input: "src/index.ts",
        plugins: [
            typescript()
        ],
        output: {
            file: "dist/index.js",
            exports: "auto",
            format: "cjs"
        }
    },
    {
        input: "src/index.ts",
        plugins: [
            typescript()
        ],
        output: {
            name: "riotMaterial.appBarUtils",
            file: "dist/index.umd.js",
            format: "umd"
        }
    }
]