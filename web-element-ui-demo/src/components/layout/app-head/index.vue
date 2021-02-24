<template>
	<div class="head_wrapper">
        <img src="@/assets/logo.png">
		<h2>JavaScript For Function</h2>
	</div>
</template>

<script>
// @ is an alias to /src
export default {
	name: "Home",
	components: {},
	data() {
		return {
            menuList:[],
			activeIndex2: "1-1",
		};
	},
	methods: {
		handleSelect(item, index) {
            this.$router.push({ name: item.name, params: { id: index }})
			console.log(item, index);
		},
	},
    mounted() {
        this.menuList = this.$router.options.routes[0].children
    },
};
</script>
<style lang="scss" src="./style.scss">
</style>
