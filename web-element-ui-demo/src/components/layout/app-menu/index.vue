<template>
	<div class="app_menu">
        <el-menu
			:default-active="activeIndex2"
			class="el-menu-demo"
			mode="horizontal"
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b"
		>
            <template v-for="(item, index) in menuList">
			    <el-menu-item :index="String(index+1)" :key="index" v-if="!item.children" @click="handleSelect(item, index)">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{ item.meta.title }}</span>
                </el-menu-item>
                <el-submenu v-else :key="index" :index="String(index+1)">
                    <template slot="title">{{ item.meta.title }}</template>
                    <el-menu-item :index="`${index+1}-${subIndex+1}`" v-for="(subItem, subIndex) in item.children" :key="subIndex" @click="handleSelect(subItem, subIndex)">{{ subItem.meta.title }}</el-menu-item>
                    <!-- <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item> -->
                    <!-- <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu> -->
                </el-submenu>
            </template>
		</el-menu>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: "Menu",
    data() {
        return {
            menuList:[],
            activeIndex2: "1-1",
        };
    },
    methods: {
        handleSelect(item, index) {
            this.$router.push({ name: item.name, params: { id: index }})
        },
        handleOpen(key, keyPath) {
        },
        handleClose(key, keyPath) {
        }
    },
    mounted() {
        this.menuList = this.$router.options.routes[0].children
    },
};
</script>
<style lang="scss" src="./style.scss">
</style>
