const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require('path')

const extractSass = new ExtractTextPlugin({
    filename: "styles.css",
});

module.exports = {
    devtool: 'source-map',
    entry: [
        './client/src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader'],
                include: path.join(__dirname, './client/src')
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.png$/,
                use: [ "url-loader" ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
                include: path.join(__dirname, './client/src'),
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            Popper: ['popper.js', 'default']
        }),
        extractSass
    ]
}