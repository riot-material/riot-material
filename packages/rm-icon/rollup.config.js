const riot = require("rollup-plugin-riot");
const commonjs = require("@rollup/plugin-commonjs");
const nodeResolve = require("@rollup/plugin-node-resolve").default;
const postcss = require("rollup-plugin-postcss");
const postcssurl = require("postcss-url");

export default [
    {
        input: "src/index.riot",
        plugins: [
            nodeResolve(),
            commonjs(),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
            riot()
        ],
        output: {
            file: "dist/index.js",
            format: "cjs",
            exports: "auto"
        }
    },
    {
        input: "src/index.riot",
        plugins: [
            nodeResolve(),
            commonjs(),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
            riot()
        ],
        output: {
            file: "dist/index.es.js",
            format: "es"
        }
    },
    {
        input: "src/index.riot",
        plugins: [
            nodeResolve(),
            commonjs(),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
            riot()
        ],
        output: {
            file: "dist/index.amd.js",
            format: "amd"
        }
    },
    {
        input: "src/index.riot",
        plugins: [
            nodeResolve(),
            commonjs(),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
            riot()
        ],
        output: {
            name: "riotMaterial.components.icon",
            file: "dist/index.umd.js",
            format: "umd"
        }
    }
];