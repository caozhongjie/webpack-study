// 开发环境
/*
* HRM：hot module replacement 热模块替换 / 模块热替换
* 作用：一个模块发生变化，只会重新打包这一个（而不是打包所有）
*   极大提升构建速度
*
* */
const { resolve } = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "built.js",
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                // 处理其他资源
                exclude: /\.(html|js|css|less|jpg|png|gif)/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'media'
                }
            }
        ]
    },
    mode: "development",
    plugins: [
        // 默认自动船舰一个空的html，自动引入打包输出的所有资源(js/css)
        new HtmlWebpackPlugin({
            // 自动创建的html文件会复制./index.html文件的结构
            template: "./src/index.html"
        })
    ],
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        compress: true,
        port: 3000,
        open: true,
        // 开启HRM功能
        hot: true
    }
}