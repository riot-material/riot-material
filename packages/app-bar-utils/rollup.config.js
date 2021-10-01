const typescript = require("rollup-plugin-ts");

export default [
    {
        input: "src/index.ts",
        plugins: [
            typescript()
        ],
        output: [
            {
                name: "riotMaterial.appBarUtils",
                file: "dist/index.js",
                format: "umd"
            },
            {
                file: "dist/index.es.js",
                format: "es"
            }
        ]
    }
]