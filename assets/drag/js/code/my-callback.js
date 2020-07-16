/*初始化完成操作*/
function MyCallback(){

}
MyCallback.prototype.insertDefaultFunction=function(api){
    var functionHtml = '<div class="layui-row mc-function">'+
                            '<div class="layui-col-xs12 mc-function-head">'+
                                '<input class="layui-input mc-function-name" type="text" readonly placeholder="方法名"/>'+
                                '<div class="layui-col-xs12 mc-function-params">'+
                                    '<input class="layui-input mc-function-param" type="text" readonly placeholder="参数"/>'+
                                    '<input class="layui-input mc-function-param" type="text" readonly placeholder="参数"/>'+
                                '</div>'+
                            '</div>'+
                            '<div class="layui-col-xs12 mc-function-body"></div>'+
                        '</div>';
        api.insert(functionHtml,null,null,null);     
}

var _myCallback = new MyCallback();
MagicalCallback.prototype.after_start = function (api) {
    var functionName = MAGICAL_JS_CODE.getFunctionName();
    if(functionName){
        var codeDataHtml = MAGICAL_JS_CODE.getMagicalJsCodeDataHtml(functionName);
        if(codeDataHtml){
            api.insert(codeDataHtml,null,null,null);
        }else{
            _myCallback.insertDefaultFunction(api);
        }
    }else{
        //插入一个基础的函数体
        _myCallback.insertDefaultFunction(api);
    }
}
/*暂存按钮*/
MagicalCallback.prototype.save_html = function (html,rootNode,javascript,css) {
    MAGICAL_JS_CODE.setMagicalJsCodeData(html,rootNode);
}
/**
* 当工作区有变更 就检测语法
*/
MagicalCallback.prototype.after_workspace_change = function () {
    new CodeSyntaxCheck().check();
}