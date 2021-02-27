<template>
    <div class="app_wrapper">
        <div class="header">
            <app-head></app-head>
        </div>
        <div class="app_content">
            <div class="menu">
                <app-menu></app-menu>
            </div>
            <div class="content">
                <transition :name="transitionName">   
                    <router-view></router-view>
                </transition>
            </div>
        </div>
        <app-foot></app-foot>
    </div>
</template>

<script>
// @ is an alias to /src
import AppFoot from '@/components/layout/app-foot'
import AppHead from '@/components/layout/app-head'
import AppMenu from '@/components/layout/app-menu'

export default {
  name: "Home",
  components: {
      AppHead,
      AppFoot,
      AppMenu
  },
  data() {
    return {
        transitionName:""
    };
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
};
</script>
<style lang="scss">
@import url('./style.scss');
</style>
