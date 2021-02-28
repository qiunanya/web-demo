<template>
	<div class="head_wrapper">
        <div class="info_item" @click="handleToHome">
            <img src="@/assets/logo.png">
            <h2>糖果博客</h2>
        </div>
        <div class="menu_item">    
            <app-menu></app-menu>  
        </div>
	</div>
</template>

<script>
// @ is an alias to /src
import AppMenu from '@/components/layout/app-menu'
export default {    
	name: "Home",
	components: {
        AppMenu
    },
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
        handleToHome: function(){
            this.$router.push('/')
        }
	},
    mounted() {
        this.menuList = this.$router.options.routes[0].children
    },
};
</script>
<style lang="scss" src="./style.scss">
</style>
