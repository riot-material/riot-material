const commonjs = require("@rollup/plugin-commonjs");
const riot = require("rollup-plugin-riot");
const typescript = require("rollup-plugin-ts");

const { nodeResolve } = require("@rollup/plugin-node-resolve");

// const { registerPreprocessor } = require("@riotjs/compiler").registerPreprocessor;
// const sass = require("sass");

// registerPreprocessor('css', 'sass', function(code, { options }) {
//   const { css } = sass.renderSync({
//     data: code
//   })

//   return {
//     code: css.toString(),
//     map: null
//   }
// })

const globals = {
    "@riot-material/before-focus-listener": "riotMaterial.beforeFocusListener",
    "@riot-material/ripple": "riotMaterial.ripple",
    "@riot-material/rm-icon": "riotMaterial.components.icon",
    "riot": "riot"
};
const external = Object.keys(globals);

export default [
    {
        input: "src/index.ts",
        external,
        plugins: [
            nodeResolve(),
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
                name: "riotMaterial.components.button",
                file: "dist/index.js",
                format: "umd",
                globals
            }
        ]
    },
    {
        input: "src/index.ts",
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript(),
            riot()
        ],
        output: [
            {
                name: "riotMaterial.components.button",
                file: "dist/index+libs.js",
                format: "umd"
            }
        ]
    }
];