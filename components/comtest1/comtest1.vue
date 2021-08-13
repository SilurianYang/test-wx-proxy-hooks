<template>
	<view>
		<h1>comtest1</h1>
		<comtest1Child1></comtest1Child1>
	</view>
</template>

<script>
	import comtest1Child1 from '@/components/comtest1-child1/comtest1-child1.vue'
	export default {
		name:"comtest1",
		components:{
			comtest1Child1
		},
		data() {
			return {
				
			};
		},
		created(){
			console.log('comtest1----created')
		},
		beforeMount(){
			console.log('comtest1-----beforeMount')
		},
		mounted(){
			console.log('comtest1----mounted')
		},
		beforeDestroy(){
			console.log('comtest1----beforeDestroy')
		},
		destroyed(){
			console.log('comtest1----destroyed')
		},
		onInit(){
			console.log(`comtest1--onInit`)
		},
		onShow(){
			console.log(`comtest1--onShow`)
		},
		onLoad() {
			console.log(`comtest1--onLoad`)
		},
		onReady(){
			console.log(`comtest1--onReady`)
		},
		onHide(){
			console.log(`comtest1--onHide`)
		},
		onUnload(){
			console.log(`comtest1--onUnload`)
		},
	}
</script>

<style lang="stylus">

</style>
