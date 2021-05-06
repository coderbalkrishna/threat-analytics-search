const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MinifyBundledWebpackPlugin = require('minify-bundled-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = {
    mode: "production",
    entry: './src/background.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "background.js"
    },
    plugins: [
        // Copy all files from src/ to dist/ folder.
        new CopyWebpackPlugin({
            patterns: [path.join(__dirname, 'src/')],
        }),

        // Minify copied files.
        new MinifyBundledWebpackPlugin({
            patterns: ['**/*.+(json|css|js)'],
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new HtmlMinimizerPlugin(),
        ],
    }
}