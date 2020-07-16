/*做一个可视化编码工具*/
function MagicalJsCode() {
    //父页面传递子页面的参数 {api:MagicalApi,attrItem:当前事件的属性配置比如onclick} MagicalCallback.prototype.extend_config内查看
    var pageParams = window.parent.pageParams;
    //父页面的api
    this.pageApi = pageParams.api;
    this.pageChangeAttr = pageParams.changeAttr;
    //获取方法名 也可能用户没配置
    this.focusNode = pageParams.api.findFocusNodes()[0]
    this.changeAttrName = pageParams.changeAttr.attrName;
    //暂存回调一下
    this.pageCallback = pageParams.pageCallback;
    //框架 vue jquery
    this.uiFrame = this.pageApi.getConstant().UI_FRAME;
}
MagicalJsCode.prototype.getPageApi=function () {
    return this.pageApi;
}
MagicalJsCode.prototype.getPageChangeAttr=function () {
    return this.pageChangeAttr;
}
MagicalJsCode.prototype.getFunctionName=function () {
    return this.focusNode.attributes[this.changeAttrName];
}
MagicalJsCode.prototype.setFunctionName = function(functionName){
    this.focusNode.attributes[this.changeAttrName] = functionName;
}

MagicalJsCode.prototype.save = function(){
    var api = new MagicalApi();
    return this.setMagicalJsCodeData(api.getHtml(),api.getRootNode());
}

MagicalJsCode.prototype.setMagicalJsCodeData=function(html,rootNode){
    if(html.trim()==''){//清除了方法
        var functionName = this.getFunctionName();
        if(functionName){
            this.pageApi.getIframeUi().api().removeMagicalJsCodeDataKey(functionName);
            this.setFunctionName("");
        }
        return;
    }
    var codeTranslate = new CodeTranslate(rootNode,this.uiFrame);
    var translateObj = codeTranslate.translate();
    var functionName = translateObj.functionName;
    if(functionName){
        this.setFunctionName(functionName);
        console.log(translateObj.js)
        this.pageApi.getIframeUi().api().setMagicalJsCodeDataValue(functionName,html,translateObj.js);
        this.pageCallback();
        layer.msg("暂存成功")
        return true;
    }else{
        layer.alert("请给方法取一个英文名[英文开头，由数字字母下划线组成]");
        return false;
    }
}
MagicalJsCode.prototype.getMagicalJsCodeDataHtml=function(functionName){
    return this.pageApi.getIframeUi().api().getMagicalJsCodeDataValue(functionName);
}
var MAGICAL_JS_CODE = new MagicalJsCode();
parent.window.MAGICAL_JS_CODE = MAGICAL_JS_CODE;//回传给父窗口 便于关闭页面时调用保存方法
