//建议您使用继承方式 扩展开发 而不是直接修改magicalcoder_open_api的文件
//做法 新建一个my.js 引入紧跟demo.js下面
//比如 我们要重写回调方法实现：这么写 下次升级 你就不用因为变更引起的合并问题了
//MagicalCallback.prototype.save_html = function (html,rootNode,javascript) {
    //加入你自己的逻辑
// }

/*调用API实例*/
setTimeout(function () {
    var api = new MagicalApi();
    // api.insertNode(json)
    // var html = api.getHtml();
    // var node = api.getRootNode();
    // var tables = api.getFormItemNodes();
    // var javascript = api.getJavascript();
    // console.log(html)
    // console.log(javascript)
    /*var html = '<div class="layui-col-xs12 mc-ajax-param"><input class="layui-input mc-ajax-param-name" type="text" value="studentName" readonly placeholder="参数名" /><input class="layui-input mc-ajax-param-value" type="text" value="" readonly placeholder="参数值" />\n' +
        '</div><div class="layui-col-xs12 mc-ajax-param"><input class="layui-input mc-ajax-param-name" type="text" value="createTime" readonly placeholder="参数名" /><input class="layui-input mc-ajax-param-value" type="text" value="" readonly placeholder="参数值" />\n' +
        '</div><div class="layui-col-xs12 mc-ajax-param"><input class="layui-input mc-ajax-param-name" type="text" value="age" readonly placeholder="参数名" /><input class="layui-input mc-ajax-param-value" type="text" value="" readonly placeholder="参数值" />\n' +
        '</div><div class="layui-col-xs12 mc-ajax-param"><input class="layui-input mc-ajax-param-name" type="text" value="sex" readonly placeholder="参数名" /><input class="layui-input mc-ajax-param-value" type="text" value="" readonly placeholder="参数值" />\n' +
        '</div><div class="layui-col-xs12 mc-ajax-param"><input class="layui-input mc-ajax-param-name" type="text" value="classId" readonly placeholder="参数名" /><input class="layui-input mc-ajax-param-value" type="text" value="1" readonly placeholder="参数值" />\n' +
        '</div>';
    html = '<input class="layui-input mc-ajax-param-value" type="text" value="" readonly placeholder="参数值" />';
    var node = api.htmlToRootNode(html);
    console.log(node);*/

},5000)

setTimeout(function () {
    var api = new MagicalApi();
    // api.insertHtml("<el-radio>测试</el-radio>")
    // api.insertJavascript("alert(1)")
    // api.reset();
    // alert("清空")

},5000)
