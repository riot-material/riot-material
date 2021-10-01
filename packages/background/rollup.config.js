const typescript = require("rollup-plugin-ts");

export default [
    {
        input: "src/index.ts",
        plugins: [
            typescript()
        ],
        output: [
            {
                file: "dist/index.js",
                format: "umd",
                name: "riotMaterial.background"
            },
            {
                file: "dist/index.es.js",
                format: "es"
            }
        ]
    }
]