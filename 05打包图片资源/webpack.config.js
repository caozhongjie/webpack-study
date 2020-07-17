const {resolve}  = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './index.js',
    output: {
        filename: "built.js",
        path:resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    // 图片小于8kb，就会被base64处理不用发起http请求，但是会使图片体积增大
                    limit: 8 * 1024,
                },
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        // 默认自动船舰一个空的html，自动引入打包输出的所有资源(js/css)
        new HtmlWebpackPlugin({
            // 自动创建的html文件会复制./index.html文件的结构
            template: "./index.html"
        })
    ],
    mode: "development",
    devServer: { // 启动指令为webpack-dev-server  热编译  自动编译   自动打开浏览器  自动刷新浏览器  打包的只会放在内存中
        contentBase: resolve(__dirname, 'build'),
        //启动gzip压缩
        compress: true,
        port: 3000,
        open: true
    }
}