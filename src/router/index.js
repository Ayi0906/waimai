/* 
    向外暴露路由器模块
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由组件
import routes from './router'
// 声明使用vue插件
Vue.use(VueRouter)
export default new VueRouter({
    mode: 'history', // 路由路径没有#
    routes,
})
