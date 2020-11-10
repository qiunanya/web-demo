<template>
  <div class="wrapper">
    <div class="home_wap">
      <img src="@/assets/logo.png" alt srcset />
      <h2>WEB 前端 CSS3.0 JS HTML5 技术</h2>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss" src="./style.scss">
</style>
