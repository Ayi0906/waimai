const { resolve } = require('path')
const px2rem = require('postcss-px2rem')
const postcss = px2rem({
    // 基准大小, baseSize需要和rem.js中单位rem值占比一样
    remUnit: 37.5, // 设计稿等分之后的值, 等分的比例同页面rem的比例是一致的, 如果设计稿750, 写75
})
module.exports = {
    // 内部写webpack原生配置
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
            alias: {
                // 路径别名
                // vue$: 'vue/dist/vue.esm.js', // 表示精准匹配 带vue编辑器
                '@': resolve(__dirname, './src'), // 路径别名
                '@components': resolve(__dirname, './src/components'),
                '@pages':resolve(__dirname, './src/pages'),
                '@assets':resolve(__dirname, './src/assets')
            },
        },
    },
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://localhost:4000', // 转发的目标地址 http://127.0.0.1:4000/api/search/users
    //             pathRewrite: {
    //                 '^/api': '', // 转发请求时去除路径前面的api
    //             },
    //             changeOrigin: true, // 如果主机也不相同,必须加上
    //         },
    //     },
    //     historyApiFallback: true,
    // },
    css: {
        // 添加postcss配置
        loaderOptions: {
            postcss: {
                plugins: [postcss],
            },
        },
    },
}
