const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const OptimizeCSSAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            // 配置eslint语法检查  eslint-loader eslint
            // 只检查源代码第三方库不检查
            // 设置检查规则 airbnb ->> eslint-config-airbnb-base eslint eslint-plugin-import
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
    mode: "development"
}