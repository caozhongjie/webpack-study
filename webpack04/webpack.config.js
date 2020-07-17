const {resolve}  = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './index.js',
    output: {
        filename: "built.js",
        path:resolve(__dirname, 'build')
    },
    module: {
        rules: []
    },
    plugins: [
        // 默认自动船舰一个空的html，自动引入打包输出的所有资源(js/css)
        new HtmlWebpackPlugin({
            // 自动创建的html文件会复制./index.html文件的结构
            template: "./index.html"
        })
    ],
    mode: "development"
}