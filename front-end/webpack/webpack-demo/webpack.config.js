const path = require('path');

module.exports = {
    mode: 'development', //production
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
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