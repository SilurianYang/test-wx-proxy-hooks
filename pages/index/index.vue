<template>
	<view class="content">
		<comtest1></comtest1>
		<comtest2></comtest2>
	</view>
</template>

<script>
	import comtest1 from '@/components/comtest1/comtest1.vue'
	import comtest2 from '@/components/comtest2/comtest2.vue'
	export default {
		components:{
			comtest1,
			comtest2
		},
		data() {
			return {
				title: 'Hello',
			}
		},
		created(){
			console.log('page----created')
		},
		beforeMount(){
			console.log('page-----beforeMount')
		},
		mounted(){
			console.log('page----mounted')
		},
		beforeDestroy(){
			console.log('page----beforeDestroy')
		},
		destroyed(){
			console.log('page----destroyed')
		},
		onInit(){
			console.log(`page--onInit`)
		},
		onShow(){
			console.log(`page--onShow`)
		},
		onLoad() {
			console.log(`page--onLoad`)
		},
		onReady(){
			console.log(`page--onReady`)
		},
		onHide(){
			console.log(`page--onHide`)
		},
		onUnload(){
			console.log(`page--onUnload`)
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
