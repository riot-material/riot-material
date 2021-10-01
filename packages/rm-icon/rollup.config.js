const commonjs = require("@rollup/plugin-commonjs");
const postcss = require("rollup-plugin-postcss");
const postcssurl = require("postcss-url");
const riot = require("rollup-plugin-riot");
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
                extract: false,
                minimize: true
            }),
            commonjs(),
            typescript(),
            riot()
        ],
        output: [
            {
                file: "dist/index.es.js",
                format: "es"
            },
            {
                name: "riotMaterial.components.icon",
                file: "dist/index.js",
                format: "umd"
            }
        ]
    }
];