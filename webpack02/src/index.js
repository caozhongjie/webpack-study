// index.js是入口起点文件
// 运行指令
// 开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
// webpack会以./src/index.js为入口文件开始打包， 打包后输出到./build/built.js
// 生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
// webpack会以./src/index.js为入口文件开始打包， 打包后输出到./build/built.js
function add(x, y) {
    return x + y
}
console.log(add(1, 2))