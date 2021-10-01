const riot = require("rollup-plugin-riot");
const typescript = require("rollup-plugin-ts");

export default [
    {
        input: "src/index.ts",
        plugins: [
            typescript(),
            riot()
        ],
        output: [
            {
                file: "dist/index.es.js",
                format: "es"
            },
            {
                name: "riotMaterial.components.textfieldContainer",
                file: "dist/index.js",
                format: "umd"
            }
        ]
    }
];