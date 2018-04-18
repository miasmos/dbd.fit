var webpack = require('webpack'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
        .BundleAnalyzerPlugin,
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    WebpackStripLoader = require('strip-loader');

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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        }),
        new ExtractTextPlugin({
            // define where to save the file
            filename: 'index.css',
            allChunks: true
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                sassLoader: {
                    includePaths: [path.resolve(__dirname, './app/index.scss')]
                },
                resolveLoader: {
                    modules: ['node_modules']
                }
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            output: {
                space_colon: false,
                comments: function(node, comment) {
                    var text = comment.value;
                    var type = comment.type;
                    if (type == 'comment2') {
                        // multiline comment
                        return /@copyright/i.test(text);
                    }
                }
            }
        })
    ]
};
