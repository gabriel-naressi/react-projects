/**
 * Created by gabriel on 07/07/16.
 */
var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');
var path = require('path');

var ENV = process.env.NODE_ENV || 'development';

module.exports = env => {
    console.log('|*********************************** NODE_ENV: ' + ENV.toUpperCase() + ' ***********************************|');

    const addPlugin = (add, plugin) => add ? plugin : undefined;
    const ifProd = plugin => addPlugin(ENV.prod, plugin);
    const removeEmpty = array => array.filter(i => !!i);

    return {
        entry: {
            app: './js/main.js'
        },
        output: {
            path: './dist',
            filename: '[name].web.js',
            publicPath: '/'
        },
        resolve: {
            alias: {
                config: path.join(__dirname, './js/config', ENV),
            },
        },
        module: {
            loaders: [
                { test: /\.json$/, loader: 'json-loader' },
                { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['es2015', 'react']} },
                { test: /\.css$/,  loader: 'style!css' },
            ],
        },
        plugins: removeEmpty([
            ifProd(new webpack.optimize.DedupePlugin()),
            ifProd(new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
                quiet: true,
            })),
            ifProd(new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"',
                },
            })),
            ifProd(new webpack.optimize.UglifyJsPlugin({
                compress: {
                    screw_ie8: true, // eslint-disable-line
                    warnings: false,
                },
            })),
            ifProd(new CompressionPlugin({
                asset: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.js$|\.css$/,
                threshold: 10240,
                minRatio: 0.8,
            })),
        ]),
    }
};

