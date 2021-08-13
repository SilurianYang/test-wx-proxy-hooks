<script>
	export default {
		created(){
			console.log('app----created')
		},
		beforeMount(){
			console.log('app-----beforeMount')
		},
		mounted(){
			console.log('app----mounted')
		},
		beforeDestroy(){
			console.log('app----beforeDestroy')
		},
		destroyed(){
			console.log('app----destroyed')
		},
		onReady(){
			console.log('app-----onReady')
		},
		onError(){
			console.log('app-----onError')
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
