<template>
    <!-- 分类模块路由输出地址 -->
    <div class="category">
        <transition :name="transitionName">   
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    name:"Category",
    data() {
        return {
            transitionName: ''
        }
    },
    watch: {//使用watch 监听$router的变化
        $route(to, from) {
            //如果to索引大于from索引,判断为前进状态,反之则为后退状态
            if(to.meta.index > from.meta.index){
                //设置动画名称
                this.transitionName = 'slide-left';
            }else{
                this.transitionName = 'slide-right';
            }
        }
    }
}
</script>
<style lang="scss">
@import url('./style.scss');  
</style>