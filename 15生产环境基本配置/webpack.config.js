const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin  = require("mini-css-extract-plugin")
const OptimizeCSSAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {loader: 'postcss-loader', options: {ident: 'postcss', plugins: () => [require("postcss-preset-env")()]}}]
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {loader: 'postcss-loader', options: {ident: 'postcss', plugins: () => [require("postcss-preset-env")()]}}, 'less-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, //排出第三方库的代码
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        }),
        new OptimizeCSSAssetsWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "production"
}