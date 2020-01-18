const merge = require('webpack-merge');
const commonConfig = require('./webpack.config');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = merge(commonConfig, {
    mode: 'development',

    devtool: 'inline-source-map',
    
    devServer: {
        contentBase: './public/',
        port: 3000,
        open: true,
        hot: true
    },

    plugins: [
        new HotModuleReplacementPlugin(),
    ],
});