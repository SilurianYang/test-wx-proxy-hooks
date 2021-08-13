class Minxins {
	install(Vue) {
		Vue.mixin({
			created() {
				console.log(`mixin--created--${this.__route__}`)
			},
			onShow(){
				console.log(`mixin--onShow--${this.__route__}`)
			},
			onLoad() {
				console.log(`mixin--onLoad--${this.__route__}`)
			},
		});
	}
}

export default new Minxins();
