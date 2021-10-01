const postcss = require("rollup-plugin-postcss");
const postcssurl = require("postcss-url");
const typescript = require("rollup-plugin-ts");

const { nodeResolve } = require("@rollup/plugin-node-resolve");

export default [
    {
        input: "src/index.ts",
        plugins: [
            nodeResolve(),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                minimize: true,
                inject: false
            }),
            typescript()
        ],
        output: [
            {
                name: "riotMaterial.elevation",
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