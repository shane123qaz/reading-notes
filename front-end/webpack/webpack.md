# Webpack
## Using webpack4 to create react app
1. create a folder
2. `npm init -y`
3. `npm i webpack webpack-cli -D`
4. add `scr` folder
5. add following scripts to package.json
```json
{
    "scripts": {
        "start": "webpack --mode development",
        "build": "webpack --mode production"
    }
}
```
6. setting up react and babel
    1. `npm i react react-dom -S`
    2. `npm i babel-core babel-loader babel-preset-env babel-preset-react -D`
        1. `babel-core`: Transforms ES6 to ES5
        2. `babel-loader`: Using webpack helper to Transforms Javascript dependencies
        3. `babel-preset-env`: Determines which transformations/plugins to use and polyfills based on the browser matrix you want to support
        4. `babel-preset-react`: Babel preset for all React plugins, for example turning JSX into functions
7. create `webpack.config.js` file to state the rules for babel-loader.
```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}
```
8. add `.babelrc` to provide options for babel-loader
```json
{
    "presets": ["env", "react"]
}
```
9. using `html-webpack-plugin` to generate an HTML file with <script> injected, writes this to `dist/index.html` and minifies the file.
    1.  `npm i html-webpack-plugin -D`
    2.  update webpack.config.js
    ```js
    const HtmlWebpackPlugin = require("html-webpack-plugin");

    const htmlPlugin = new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    });

    module.exports = {
        plugins: [htmlPlugin]
    }
    ```
10. setting up webpack-dev-server
    1. `npm i webpack-dev-server`
    2. update package.json
    ```json
    {
        "scripts": {
            "start": "webpack-dev-server --mode development --open"
        }
    }
    ```

## Development
### Using source maps
- webpack.config.js
    ```js
    devtools: 'inline-source-map'
    ```
### The way to automatically compile code changes
- webpack's Watch Mode
    - package.json
        ```json
        {
            "scripts": {
                "watch": "webpack --watch"
            }
        }
        ```
- [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) - provides you with a simple web server and the ability to use live reloading
    - `npm i --save-dev webpack-dev-server`
    - webpack.config.js
        ```js
        module.exports = {
            devServer: {
                contentBase: path.join(__dirname, 'dist'),
                port: 9000
         }
        }
        ```
- webpack-dev-middleware
    - `npm i --save-dev express webpack-dev-middleware`
    - webpack.config.js
        ```js
        module.exports = {
            output: {
                publicPath: '/'
            }
        }
        ```
    - server.js
        ```js
        const app = express();
        const config = require('./webpack.config.js');
        const compiler = webpack(config);

        app.use(webpackDevMiddleware(compiler, {
            publicPath: config.output.publicPath
        }));
        ```
    - package.json
        ```json
        {
            "scripts": {
                "server": "node server.js"
            }
        }
        ```
## Hot Module Replacement
- If you took the route of using `webpack-dev-middleware` instead of `webpack-dev-server`, please use the `webpack-hot-middleware` package to enable HMR on your custom server or application.  
- using webpack-dev-server with hot load
    - webpack.config.js
        ```js
        const webpack = require('webpack');
        module.exports = {
            entry: {
                app: './src/index.js'
            },
            devServer: {
                hot: true
            },
            plugins: [
                new webpack.HotModuleReplacementPlugin()
            ]
        }
        ```
    - index.js
        ```js
        if (module.hot) {
            module.hot.accept('./print.js', function() {
                console.log('Accepting the updated printMe module!');
                print();
            })
        }
        ```
- using webpack-dev-server with hot load via the Node.js API
    - dev-server.js
        ```js
        const webpackDevServer = require('webpack-dev-server');
        const webpack = require('webpack');

        const config = require('./webpack.config.js');
        const options = {
            contentBase: './dist',
            hot: true,
            host: 'localhost'
        };

        webpackDevServer.addDevServerEntrypoints(config, options);
        const compiler = webpack(config);
        const server = new webpackDevServer(compiler, options);

        server.listen(5000, 'localhost', () => {
            console.log('dev server listening on port 5000');
        });
        ```
- HMR with stylesheets
    - `npm i --save-dev style-loader css-loader`
    - webpack.config.js
        ```js
        module.exports = {
            module: {
                rules: [
                    {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader']
                    }
                ]
            }
        }
        ```
    - index.js
        ```js
        import './styles.css';
        ```
- [Webpack split chunk with hash code](https://stackoverflow.com/questions/48985780/webpack-4-create-vendor-chunk)
  ```js
  module.exports = {
    entry: {
        index_bundle: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/development'),
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'all'
                }
            }
        }
    }
  }
  ```

## npm scripts
- `npx webpack --config webpack.config.js`

- `webpack`

- `webpack --watch`

- using local package

  - ```js
    file: ../react-native-mol-design-system.tgz
    ```

  - ```js
    file: [path]
    ```

    


## Resources
- [webpack-guides](https://webpack.js.org/guides/)
- [hot-module-replacement](https://webpack.js.org/guides/hot-module-replacement/)
    - [react-hot-loader](https://github.com/gaearon/react-hot-loader)
    - [vue-loader](https://github.com/vuejs/vue-loader)
- [using-webpack4-to-create-react-app](https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75)
- [Fixing the "cannot GET /URL" error on refresh with React Router ](https://tylermcginnis.com/react-router-cannot-get-url-refresh/)