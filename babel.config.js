module.exports = {
    presets: ['@vue/cli-plugin-babel/preset'],
    plugins: [
        [
            'babel-plugin-component',
            {
                libraryName: 'mint-ui', // 针对mint-ui库实现按需打包
                style: true, // 自动打包对应css
            },
        ],
    ],
}
