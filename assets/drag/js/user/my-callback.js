/*
* 开放了源码随之而来的就是升级合并的问题 一旦您修改了我们开放的源码 下次升级 势必要合并
* 因此为了更方便的升级 我们特新增了此js 内容是空的  需要您来补充
* 1  改写callback.js
* 例如
 MagicalCallback.prototype.after_start = function (api) {
    //alert("实际执行的地方在这里")
 }
*
*
*
*
* 2 改变 application-env.js
* 是您的个性化配置的地方 如果我们要个性化定制里面的配置如何做呢
* var env = APPLICATION_ENV.getEnv();
* env.log.debug = false;
* env.keys=[]
* ...
* 这样就改写了配置 因为系统中采用APPLICATION_ENV对象下的配置 所以在还为使用之前我们就改写它
*
*
* 以上写法可以轻松覆盖callback.js application-env.js
* */

