const typescript = require("@rollup/plugin-typescript");
const nodeResolve = require("@rollup/plugin-node-resolve").default;
const postcss = require("rollup-plugin-postcss");
const postcssurl = require("postcss-url");

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
                format: "umd",
                exports: "named"
            },
            {
                file: "dist/index.es.js",
                format: "es"
            }
        ]
    }
]