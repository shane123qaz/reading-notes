const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//This plugin generates an HTML file with <script> injected, writes this to dist/index.html, and minifies the file.
const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    plugins: [htmlPlugin]
}