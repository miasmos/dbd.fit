var webpack = require('webpack'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
        .BundleAnalyzerPlugin,
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    precss = require('precss'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
        template: './app/index.html',
        filename: 'index.html',
        inject: 'body'
    });

module.exports = {
    entry: ['./app/index.jsx'],
    output: {
        path: __dirname + '/dist',
        filename: 'index.compiled.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        strictExportPresence: true,
        loaders: [
            {
                test: /\.js|.jsx$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'app')],
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: [
                        require('babel-plugin-transform-decorators-legacy')
                            .default
                    ]
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.jpg|.jpeg|.png|.gif|.svg$/,
                loader: 'file-loader?name=images/[name].[ext]'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader?name=audio/[name].[ext]'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        HTMLWebpackPluginConfig,
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static'
        }),
        new ExtractTextPlugin({
            // define where to save the file
            filename: 'index.css',
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                sassLoader: {
                    includePaths: [path.resolve(__dirname, './app/index.scss')]
                },
                resolveLoader: {
                    root: path.join(__dirname, 'node_modules')
                }
            }
        })
    ]
};
