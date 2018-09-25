# Webpack

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

## npm scripts
- `npx webpack --config webpack.config.js`
- `webpack`
- `webpack --watch`


## Resources
- [webpack-guides](https://webpack.js.org/guides/)
- [hot-module-replacement](https://webpack.js.org/guides/hot-module-replacement/)
    - [react-hot-loader](https://github.com/gaearon/react-hot-loader)
    - [vue-loader](https://github.com/vuejs/vue-loader)