<template>
	<view>
		<h1>comtest2</h1>
	</view>
</template>

<script>
	export default {
		name:"comtest2",
		data() {
			return {
				
			};
		},
		created(){
			console.log('comtest2----created')
		},
		beforeMount(){
			console.log('comtest2-----beforeMount')
		},
		mounted(){
			console.log('comtest2----mounted')
		},
		beforeDestroy(){
			console.log('comtest2----beforeDestroy')
		},
		destroyed(){
			console.log('comtest2----destroyed')
		},
		onInit(){
			console.log(`comtest2--onInit`)
		},
		onShow(){
			console.log(`comtest2--onShow`)
		},
		onLoad() {
			console.log(`comtest2--onLoad`)
		},
		onReady(){
			console.log(`comtest2--onReady`)
		},
		onHide(){
			console.log(`comtest2--onHide`)
		},
		onUnload(){
			console.log(`comtest2--onUnload`)
		},
	}
</script>

<style lang="stylus">

</style>
