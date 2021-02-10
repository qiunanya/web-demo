<template>
	<div class="wrapper">
		<el-menu
			:default-active="activeIndex2"
			class="el-menu-demo"
			mode="horizontal"
			@select="handleSelect"
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b"
		>
			<el-menu-item index="1">处理中心</el-menu-item>
			<el-submenu index="2">
				<template slot="title">我的工作台</template>
				<el-menu-item index="2-1">选项1</el-menu-item>
				<el-menu-item index="2-2">选项2</el-menu-item>
				<el-menu-item index="2-3">选项3</el-menu-item>
				<el-submenu index="2-4">
					<template slot="title">选项4</template>
					<el-menu-item index="2-4-1">选项1</el-menu-item>
					<el-menu-item index="2-4-2">选项2</el-menu-item>
					<el-menu-item index="2-4-3">选项3</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-menu-item index="3" disabled>消息中心</el-menu-item>
		</el-menu>
		<!-- <div class="home_wap">
        <img src="@/assets/logo.png" alt srcset />
        <h2>WEB 前端 CSS3.0 JS HTML5 技术</h2>
        <router-link to="/home/main"> 首頁 </router-link>
      </div> -->
	</div>
</template>

<script>
// @ is an alias to /src
export default {
	name: "Home",
	components: {},
	data() {
		return {
			activeIndex2: "1",
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
	},
    mounted() {
        console.log(this.$router,5555)
    },
};
</script>
<style lang="scss" src="./style.scss">
</style>
