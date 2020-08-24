const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development', //production
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map', //using source maps
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), //cleaning up the /dist folder before each build
        new HtmlWebpackPlugin({
            title: 'Output management'
        }), //used to generate index.html with entry bundle files
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, { //loading images
            test: /\.(png|svg|jpg|gif)$/i,
            use: [
                'url-loader'
            ]
        }, { //loading fonts
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }, { //loading data
            test: /\.(csv|tsv)$/,
            use: [
                'csv-loader'
            ]
        }, {
            test: /\.(xml)$/,
            use: [
                'xml-loader'
            ]
        }]
    }
};