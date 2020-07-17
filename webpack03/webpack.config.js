// 指示webapck做什么
const { resolve }  = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    // loader的配置
    module: {
        rules: [ // 不同文件配置不同loader
            {
                test: /\.css$/, // 匹配哪些文件
                // 使用哪些Loader
                // use的执行顺序是从右到左，从下到上
                // style-loader创建style标签，将js中的样式资源插入进行，添加到head中生效
                // css-loader将css文件变成common.js模块加载js中，里面内同时样式字符串
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/, // 匹配哪些文件
                use: ['style-loader','css-loader', 'less-loader']
            }
        ]

    },
    plugins: [],
    mode: 'development' // production
}