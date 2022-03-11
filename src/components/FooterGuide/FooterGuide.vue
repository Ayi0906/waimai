<template>
    <div class="footer-guide">
        <span class="guide-item" :class="{on: $route.path==='/msite'}" @click="goto('/msite')">
            <span>
                <i class="iconfont icon-home"></i>
            </span>
            <span>首页</span>
        </span>
        <span class="guide-item" :class="{on: $route.path==='/search'}" @click="goto('/search')">
            <span>
                <i class="iconfont icon-search"></i>
            </span>
            <span>搜索</span>
        </span>
        <span class="guide-item" :class="{on: $route.path==='/order'}" @click="goto('/order')">
            <span>
                <i class="iconfont icon-order"></i>
            </span>
            <span>订单</span>
        </span>
        <span class="guide-item" :class="{on: $route.path==='/profile'}" @click="goto('/profile')">
            <span>
                <i class="iconfont icon-account"></i>
            </span>
            <span>我的</span>
        </span>
    </div>
</template>

<script type="text/ecmascrspanpt-6">
    export default {
        name: 'FooterGuide',
        data() {
            return {

            }
        },
        methods:{
            goto(path){
                this.$router.replace(path)
            }
        },
        components: {

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    // 没有路径提示, 包括老师写的都没有
    @import '../../assets/stylus/mixins.styl'
    .footer-guide
        top-border-1px(#cccccc)
        position  fixed
        height 50px
        left: 0
        bottom 0
        width 100%
        display flex
        align-items  center
        justify-content  space-between
        .guide-item
            display: flex
            flex-direction: column
            width: 25%
            text-align: center
            &.on
                color $green
            span
                margin-top: 3px
                font-size 12px
                i
                    font-size 22px

</style>
