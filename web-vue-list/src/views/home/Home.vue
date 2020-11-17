<template>
  <div class="wrapper">
    <div class="home_wap">
      <img src="@/assets/logo.png" alt srcset />
      <h2>WEB 前端 CSS3.0 JS HTML5 技术</h2>
      <p class="author">制作人：邱南亚  (人无信不立)</p>
    </div>
    <div class="content">
        <div class="item_left">
            <Menu accordion @on-select="getItem">
                <Submenu :name="item.path" v-for="(item, index) in menuList" :key="index">
                    <template slot="title">
                        <Icon :type="item.meta.icon" />
                        {{item.meta.title}}
                    </template>
                    <MenuItem :name="e.path" v-for="(e,i) in item.children" :key="i">{{e.meta.title}}</MenuItem>
                </Submenu>
            </Menu>
        </div>
      <div class="item_right">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      menuList: [],
      flag: 'ligth'
    }
  },
  methods: {
    /**
       * @description 路由选择
       * @param path 路由地址
       */
    getItem (path) {
      this.$router.push(path)
      console.log(path)
    }
  },
  mounted () {
    this.menuList = this.$router.options.routes
  }
}
</script>
<style lang="scss" src="./style.scss">
</style>
