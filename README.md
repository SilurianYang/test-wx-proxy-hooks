# 测试小程序代理启动页生命周期及还原

代理前执行顺序  |   代理后执行顺序
--- |   ---
mixin--created--undefined   |   mixin--created--undefined
app----created  |   app----created
app----mounted  |   app----mounted
App Launch  |   App Launch
mixin--onShow--undefined    |   mixin--onShow--undefined
App Show  | App Show    
mixin--created--pages/index/index   |   mixin--created--pages/index/index
page----created |   page----created
page-----beforeMount    |   page-----beforeMount
mixin--created--undefined   |   mixin--created--undefined
comtest1----created |   comtest1----created 
comtest1-----beforeMount    |   comtest1-----beforeMount
mixin--created--undefined   |   mixin--created--undefined   
comtest1-child1----created  |   comtest1-child1----created
comtest1-child1-----beforeMount |   comtest1-child1-----beforeMount
mixin--created--undefined   |   mixin--created--undefined
comtest2----created |   comtest2----created 
comtest2-----beforeMount    |   comtest2-----beforeMount
mixin--onLoad--pages/index/index    |   mixin--onLoad--pages/index/index
page--onLoad    |   page--onLoad
mixin--onShow--pages/index/index    |   mixin--onShow--pages/index/index
page--onShow    |   page--onShow
comtest1-child1----mounted  |   comtest1-child1----mounted
comtest1-child1--onReady    |   comtest1-child1--onReady
comtest1----mounted |   comtest1----mounted
comtest1--onReady   |   comtest1--onReady
comtest2----mounted |   comtest2----mounted
comtest2--onReady   |   comtest2--onReady
page----mounted |   page----mounted
page--onReady   |   page--onReady
