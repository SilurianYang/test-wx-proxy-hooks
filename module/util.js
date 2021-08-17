const proxyHookName= [
    'onLaunch',
    'onShow',
    'onHide',
    'onError',
    'onInit',
    'onLoad',
    'onReady',
    'onUnload',
    'onResize',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed'
]

export function voidFun(){}


export function proxyPageHook(vueVim,hookDeps){
    const pageHook = vueVim.$options;
    for(let i=0;i<proxyHookName.length;i++){
        const hookName= proxyHookName[i];
        const hookList= pageHook[hookName];
        if(hookList){
            for(let k=0;k<hookList.length;k++){
                const originHook=hookList[k];
                if(originHook.toString().includes('HHYANG.CN@SDSD')){
                    continue
                }
                const resetIndex=Object.keys(hookDeps.hooks).length+1
                const proxyHook=(...args)=>{
                    hookDeps.resetIndex.push(resetIndex);
                    hookDeps.options[resetIndex]=args;
                }
                const [resetHook] =hookList.splice(k,1,proxyHook);
                hookDeps.hooks[resetIndex]={
                    proxyHook,
                    callHook:()=>{
                       const options= hookDeps.options[resetIndex];
                       resetHook.apply(vueVim,options);
                    },
                    resetHook:()=>{
                        hookList.splice(k,1,resetHook)
                    },
                };

            }
        }
    }
}

export function resetProxyHook(proxyHookDeps){
    const resetHooksArray=proxyHookDeps.resetIndex
    for(let i=0;i<resetHooksArray.length;i++){
        const index=resetHooksArray[i];
        const {callHook}=proxyHookDeps.hooks[index];
        callHook();
    }
    for(let [,{resetHook}] of Object.entries(proxyHookDeps.hooks)){
        resetHook();
    }
}


export function getEnterPath(vueVim,platform) {
    switch (platform) {
    case 'mp-alipay':
    case 'mp-weixin':
    case 'mp-toutiao':
    case 'mp-qq':
        return vueVim.$options.mpInstance.route;
    case 'mp-baidu':
        // 【Fixe】 https://github.com/SilurianYang/uni-simple-router/issues/251
        return vueVim.$options.mpInstance.is || vueVim.$options.mpInstance.pageinstance.route;
    }
    return vueVim.$options.mpInstance.route; // 这是暂时的 因为除了以上的小程序 其他没测试 先这样写
}

export function assertParentChild(parentPath,vueVim) {
    while (vueVim.$parent != null) {
        const mpPage = vueVim.$parent.$mp;
        if (mpPage.page && mpPage.page.is === parentPath) {
            return true;
        }
        vueVim = vueVim.$parent;
    }
    try {
        if (vueVim.$mp.page.is === parentPath || vueVim.$mp.page.route === parentPath) {
            return true
        }
    } catch (error) {
        return false
    }
    return false
}