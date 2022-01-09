const typescript = require("rollup-plugin-ts");

export default [
    {
        input: "src/index.ts",
        plugins: [
            typescript()
        ],
        output: [
            {
                file: "dist/index.es.js",
                format: "es"
            },
            {
                name: "riotMaterial.newPropsWrapper",
                file: "dist/index.js",
                format: "umd"
            }
        ]
    }
];