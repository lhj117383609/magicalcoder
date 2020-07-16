/*授权Key*/
function Key(){
    var env = APPLICATION_ENV.getEnv();
    /*全局设置*/
        this.security = {
            /*软件运行允许的域名对：防破解 具体配置在application-env.js*/
            keys:env.keys,
            /*是否允许调试：false 加强破解难度*/
            debug:true,
            /*是否允许控制台输出：false 加强破解难度*/
            console:true,
            /*防别人下载后直接运行客户端 此地址是解析加密算法的地址 */
            activeUrl:env.serverPath+"drag_rest/active",
            /*请随机给36位长度的纯字母数字组合*/
            random:"923456789012345678901234567890123459",
            //ip不校验 直接通过 不配置则不通过
            ipPass:true,
            /*过期时间 如果不设置则永久不过期 跟您申请的key是绑定的:配置示例2020/06/01*/
            expireDate:env.expireDate
        }
 }
 Key.prototype.getSecurity = function () {
     return this.security;
 }
