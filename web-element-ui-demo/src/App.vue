<template>
    <div id="app">
        <app-head></app-head>
        <!-- 视图路由 -->
        <!-- <router-view name="head"></router-view> -->
        <router-view></router-view>
        <!-- <router-view name="foot"></router-view> -->
        <app-foot></app-foot>
    </div>
</template>
<script>
import AppHead from '@/components/layout/app-head'
import AppFoot from '@/components/layout/app-foot'

export default {
    components:{
        AppHead,
        AppFoot,
    }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
