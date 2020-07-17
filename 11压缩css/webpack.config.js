const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
// 设置nodejs的环境变量
process.env.NODE_ENV = 'development';
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // style-loader创建style标签，将样式放上去  css-loader将css文件整合到js文件中
                use: [
                    // 'style-loader',
                    // 这个loader取代style-loader，作用：提取css成单独文件
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    // css兼容性处理:postcss ->> postcss-loader  post-preset-env
                    // 使用loader的默认配置的写法：'postcss-loader'
                    // 修改loader配置时的写法
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugins: () => [require('postcss-preset-env')()]
                        }
                    }
                ]
            }
        ]
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            // 对输出css文件重命名
            filename: 'css/built.css'
        }),
        // 压缩css
        new OptimizeCSSAssetsWebpackPlugin()
    ]
}