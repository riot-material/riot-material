const typescript = require("@rollup/plugin-typescript");
const nodeResolve = require("@rollup/plugin-node-resolve").default;
const postcss = require("rollup-plugin-postcss");
const postcssurl = require("postcss-url");

export default [
    {
        input: "index.ts",
        plugins: [
            nodeResolve(),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
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
            nodeResolve(),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
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
            nodeResolve(),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
            typescript()
        ],
        output: {
            name: "riotMaterial.elevation",
            file: "index.umd.js",
            format: "umd"
        }
    }
]