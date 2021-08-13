import {
    voidFun,
    proxyPageHook,
    assertParentChild,
    getEnterPath,
    resetProxyHook
} from './util.js';

const appletProxy = {
	app: false,
	page: '',
};

const proxyHookDeps={
    resetIndex:[],  //还原时执行的生命周期的索引
    hooks:{},
    options:{}
}

class Minxins2 {
	install(Vue) {
		Vue.mixin({
			beforeCreate() {
				const pluginMark = 'HHYANG.CN@SDSD';
				voidFun(pluginMark);
	
				const pageType = this.$options.mpType;
	            let isProxy =true;
				if (pageType === 'component') {
					isProxy= assertParentChild(appletProxy['page'], this);
				} else if (pageType !== 'component') {
	                if (pageType === 'page') {
	                    appletProxy[pageType] = getEnterPath(this, 'mp-weixin');
	                } else {
	                    appletProxy[pageType] = true;
	                }
				}
	            if(isProxy){
	                proxyPageHook(this, proxyHookDeps);
	            }
			},
			onLoad() {
				const pluginMark = 'HHYANG.CN@SDSD';
				voidFun(pluginMark);
                console.log('my---onLoad')
	            setTimeout(()=>{
	                resetProxyHook(proxyHookDeps);
	            },2000)
			},
		});
	}
}

export default new Minxins2();