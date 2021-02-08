<template>
    <div id="app">
        <app-head></app-head>
        <!-- <app-menu></app-menu> -->
        <router-view></router-view>
        <app-foot></app-foot>
    </div>
</template>
<script>
import AppHead from '@/components/layout/app-head'
import AppFoot from '@/components/layout/app-foot'
import AppMenu from '@/components/layout/app-menu'

export default {
    components:{
        AppHead,
        AppFoot,
        AppMenu
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
