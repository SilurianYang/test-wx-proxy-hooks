<template>
	<view>
		<h1>comtest1-child1</h1>
	</view>
</template>

<script>
	export default {
		name:"comtest1-child1",
		data() {
			return {
				
			};
		},
		created(){
			console.log('comtest1-child1----created')
		},
		beforeMount(){
			console.log('comtest1-child1-----beforeMount')
		},
		mounted(){
			console.log('comtest1-child1----mounted')
		},
		beforeDestroy(){
			console.log('comtest1-child1----beforeDestroy')
		},
		destroyed(){
			console.log('comtest1-child1----destroyed')
		},
		onInit(){
			console.log(`comtest1-child1--onInit`)
		},
		onShow(){
			console.log(`comtest1-child1--onShow`)
		},
		onLoad() {
			console.log(`comtest1-child1--onLoad`)
		},
		onReady(){
			console.log(`comtest1-child1--onReady`)
		},
		onHide(){
			console.log(`comtest1-child1--onHide`)
		},
		onUnload(){
			console.log(`comtest1-child1--onUnload`)
		},
	}
</script>

<style>

</style>
