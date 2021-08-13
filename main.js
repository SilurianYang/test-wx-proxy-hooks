import Vue from 'vue'
import App from './App'
import minxins from './mixins.js'
// import {router,RouterMount} from './router.js'  //路径换成自己的
import Minxins2 from './module/index.js'

 Vue.use(Minxins2).use(minxins)
 
 
 
 // Vue.use(router).use(minxins)

App.mpType = 'app'
const app = new Vue({
    ...App
})


// // #ifdef H5
// 	RouterMount(app,router,'#app')
// // #endif

// // #ifndef H5
// 	app.$mount(); 
// // #endif


app.$mount(); 