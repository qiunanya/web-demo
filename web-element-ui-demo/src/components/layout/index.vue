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
                <router-view></router-view>
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
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
@import url('./style.scss');
</style>
