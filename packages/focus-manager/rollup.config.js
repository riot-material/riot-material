const typescript = require("@rollup/plugin-typescript");

export default [
    {
        input: "src/index.ts",
        plugins: [
            typescript()
        ],
        output: [
            {
                file: "dist/index.amd.js",
                format: "amd"
            },
            {
                file: "dist/index.js",
                exports: "auto",
                format: "cjs"
            },
            {
                name: "riotMaterial.focusManager",
                file: "dist/index.umd.js",
                format: "umd"
            }
        ]
    }
]