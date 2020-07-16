var $ = jQuery;
function IframeUi() {
    this.defaultCss = "";//默认样式
    this.css = this.defaultCss;
    //默认脚本
    this.defaultJavascript = '//我在uuser/ui/miniui/3.9.3/iframe-ui,js 这里可以自定义默认js\n' +
        'new McECharts().render();\n';
    //布局器的脚本
    this.javascript = this.defaultJavascript;
    //是否开启javascript调试
    this.debug = false;
    /*脚本编辑器的数据functionName:html 方法名:脚本编辑器的可恢复数据*/
    this.magicalJsCodeData = {}
    /*工作区画布基础样式设置 key:样式名 value:样式值*/
    this.canvasStyle = {}
}

IframeUi.prototype.inject = function(SINGLETON){
    this.fastKey = SINGLETON.getFastKey();
    this.jsonFactory = SINGLETON.getJsonFactory();
    this.globalConstant = SINGLETON.getConstant();
    this.center = SINGLETON.getCenter();
}
IframeUi.prototype.setCss = function(css){
    if(css==null){
        css = this.defaultCss;
    }
    this.css = css;
    this.jsonFactory.setCss(css);//额外在主面板备份一份 出现错误刷新内部面板导致js丢失 所以存一份在主面板

}
IframeUi.prototype.getCss = function(){
    return this.css;
}
IframeUi.prototype.getJavascript = function(){
    return this.javascript;
}
IframeUi.prototype.setJavascript = function(javascript){
    if(javascript==null){//恢复一下默认脚本
        javascript = this.defaultJavascript;
    }
    this.javascript = javascript;
    this.jsonFactory.setJavascript(javascript);//额外在主面板备份一份
}
/**
 * 自动创建样式结构
 * @returns {HTMLElement}
 */
IframeUi.prototype.autoCreateMagicalCss = function(){
    var cssName = "magicalCoderCss";
    var magicalCoderCss = document.getElementById(cssName);//存储样式的结构
    if(typeof magicalCoderCss == 'undefined' || magicalCoderCss == null){
        var head = document.getElementsByTagName("head")[0];
        var _style = document.createElement("style");
        _style.id=cssName;
        head.appendChild(_style);
    }
    return document.getElementById(cssName);
}
IframeUi.prototype.autoCreateRootDom = function(){
/*    var magicalDragScene = document.getElementById("magicalDragScene");
    var workspace = this.globalConstant.getSettings()['workspace'];
    var extraClass = (typeof workspace !='undefined' && workspace.extraClass) ? workspace.extraClass+" " : "";
    if(this.jsonFactory){//
        var magicalCoderIdAttrName = this.jsonFactory.api().getMagicalCoderIdAttrName();
        if(typeof magicalDragScene == 'undefined' || magicalDragScene == null){
            document.body.innerHTML = '<div class="'+extraClass+'drag-mc-pane" id="magicalDragScene" '+magicalCoderIdAttrName+'="Root"></div>';
        }
    }else {
        if(typeof magicalDragScene == 'undefined' || magicalDragScene == null){
            document.body.innerHTML = '<div class="'+extraClass+'drag-mc-pane" id="magicalDragScene"></div>';
        }
    }*/
    return document.body;
}

/*此方法不要改名 初始化组件的方法 每次代码重绘 会调用此方法 来重新初始化组件*/
IframeUi.prototype.render=function (html,jsonFactory,globalConstant) {
    if(html==null){
        html = "";
    }
    var magicalCoderCss = this.autoCreateMagicalCss();
    magicalCoderCss.innerHTML = this.getCss();//设置样式内容

    var magicalDragScene = this.autoCreateRootDom();
    magicalDragScene.innerHTML = html;

    var javascript = this.getJavascript();
    try {
        if(this.debug){
            javascript = "debugger\n" + javascript;
        }
        //使用eval才行
        eval(javascript);
    }catch (e) {
        var msgHtml = '<div class="layui-row"><div class="layui-col-xs12" style="font-size: 17px; font-weight: bolder;">'+e.message+'</div><div class="layui-col-xs12" style="color: rgb(221, 32, 32);">'+e.stack+'</div></div>';
        parent.window.layui.layer.open({
            type:1,
            title:"您编写的脚本编译错误-非布局器报错",
            area: ['800px', '400px'],
            shadeClose:true,
            content:msgHtml,
        })
        console.log(e);
    }
    //当渲染完注意以下方式
    mini.parse();
    this.fixDynamicDomAfterRender();
}

//修复一下动态创建的结构跑偏问题 有些ui设计的比较差 动态没用的结构很多，我们设置简介标签上的属性样式无法继承 所以就需要我们修复一下
IframeUi.prototype.fixDynamicDomAfterRender = function(){
    var dragMcPane = this.jsonFactory.api().pubGetDragMcPaneName();
    $(".mini-panel-body").addClass(dragMcPane);
    $(".mini-panel").removeClass(dragMcPane);

    $(".mini-splitter-pane").addClass(dragMcPane)



    $(".mini-layout-region-body").addClass(dragMcPane)

    //这个就厉害了
    $(".mini-tabs-body").addClass(dragMcPane);
    $(".mini-outlookbar-groupBody").addClass(dragMcPane)


    //只能是手动对应了
    var magicalCoderIdAttrName = this.jsonFactory.api().getMagicalCoderIdAttrName();
    var tabsNodesCache = {};

    var jsonApi = this.jsonFactory.api();
    $(".mini-tabs-bodys").each(function (idx,item) {
        var tabs = $(this).parents(".mini-tabs");//最外层的孩子
         var id = tabs.attr(magicalCoderIdAttrName);
         var value = tabsNodesCache[''+id];
         if(!value){
             var list = jsonApi.pubSearchNodes(null,{id:id});
             if(list && list.length>0){
                 value = list[0];
                 tabsNodesCache[''+id] = value;
             }
         }
         if(value){
             //找孩子
             var children = value.magicalCoder.children;
             $(this).children().each(function (idx,item) {
                 $(this).attr(magicalCoderIdAttrName,children[idx].magicalCoder.id);
             });
         }
    })

    //mini-layout 本来期望的地方能加上drag-mc-pane 并且有data-magical_coder_id 无奈miniui未按照预期放置位置 咱们来修复一下
    var cacheData = {};
    //不应该在这些结构上添加dragMcPane
    $(".mini-layout-region-north").removeClass(dragMcPane);
    $(".mini-layout-region-west").removeClass(dragMcPane);
    $(".mini-layout-region-east").removeClass(dragMcPane);
    $(".mini-layout-region-south").removeClass(dragMcPane);
    $(".mini-layout-region-center").removeClass(dragMcPane);
    $(".mini-layout-border").each(function (idx,item) {
        var parent = $(this).parents(".mini-layout");//最外层父节点
        var id = parent.attr(magicalCoderIdAttrName);
        var value = cacheData[''+id];
        if(!value){
            var list = jsonApi.pubSearchNodes(null,{id:id});
            if(list && list.length>0){
                value = list[0];
                cacheData[''+id] = value;
            }
        }
        if(value){
            //找孩子
            var children = value.magicalCoder.children;
            var cache = {};
            for(var i=0;i<children.length;i++){
                var child = children[i];
                var key = child.attributes['region'];
                cache[key]=child.magicalCoder.id;
            }
            //追加magicalCoderId
            $(this).find(".mini-layout-region-north > .mini-layout-region-body:first").attr(magicalCoderIdAttrName,cache['north']);
            $(this).find(".mini-layout-region-south > .mini-layout-region-body:first").attr(magicalCoderIdAttrName,cache['south']);
            $(this).find(".mini-layout-region-east > .mini-layout-region-body:first").attr(magicalCoderIdAttrName,cache['east']);
            $(this).find(".mini-layout-region-west > .mini-layout-region-body:first").attr(magicalCoderIdAttrName,cache['west']);
            $(this).find(".mini-layout-region-center > .mini-layout-region-body:first").attr(magicalCoderIdAttrName,cache['center']);
        }
    })

    //outlookbar
    $(".mini-outlookbar-border").each(function (idx,item) {
        var parent = $(this).parents(".mini-outlookbar");//最外层父节点
        var id = parent.attr(magicalCoderIdAttrName);
        var value = null;
        if(!value){
            var list = jsonApi.pubSearchNodes(null,{id:id});
            if(list && list.length>0){
                value = list[0];
            }
        }
        if(value){
            //找孩子
            var children = value.magicalCoder.children;
            //追加magicalCoderId
            $(this).children().each(function(idx,item){
                var item = $(this).find(".mini-outlookbar-groupBody:first");
                item.attr(magicalCoderIdAttrName,children[idx].magicalCoder.id);
            })
        }
    })

    //splitter
    var spliterCache
    $(".mini-splitter-border").each(function (idx,item) {
        var bars = $(this).parents(".mini-splitter");//最外层的父亲
        var id = bars.attr(magicalCoderIdAttrName);
        var value = null;
        var list = jsonApi.pubSearchNodes(null,{id:id});
        if(list && list.length>0){
            value = list[0];
        }
        if(value){
            //找孩子
            var children = value.magicalCoder.children;
            $(this).children().each(function (idx,item) {
                if($(this).hasClass("mini-splitter-pane")){
                    $(this).attr(magicalCoderIdAttrName,children[idx].magicalCoder.id);
                }
            });
        }
    })


}

IframeUi.prototype.util = function(){
    var util = {
        removeClass:function (elem, str){
            var cName=elem.className;
            var arrClassName=cName.split(" ");
            var newArr=[ ];
            for(var i=0;i<arrClassName.length;i++){
                if(arrClassName[i]!=str){
                    newArr. push(arrClassName[i]);
                }
            }
            var str=newArr.join(" ");
            elem. className =str;
        }
    }
    return util;
}

IframeUi.prototype.iconList = function(){
    if(window.location.href.indexOf("from=icon_list")!=-1){
        var util = this.util();
        var iconArr = ["layui-icon-rate-half","layui-icon-rate","layui-icon-rate-solid","layui-icon-cellphone","layui-icon-vercode","layui-icon-login-wechat","layui-icon-login-qq","layui-icon-login-weibo","layui-icon-password","layui-icon-username","layui-icon-refresh-3","layui-icon-auz","layui-icon-spread-left","layui-icon-shrink-right","layui-icon-snowflake","layui-icon-tips","layui-icon-note","layui-icon-home","layui-icon-senior","layui-icon-refresh","layui-icon-refresh-1","layui-icon-flag","layui-icon-theme","layui-icon-notice","layui-icon-website","layui-icon-console","layui-icon-face-surprised","layui-icon-set","layui-icon-template-1","layui-icon-app","layui-icon-template","layui-icon-praise","layui-icon-tread","layui-icon-male","layui-icon-female","layui-icon-camera","layui-icon-camera-fill","layui-icon-more","layui-icon-more-vertical","layui-icon-rmb","layui-icon-dollar","layui-icon-diamond","layui-icon-fire","layui-icon-return","layui-icon-location","layui-icon-read","layui-icon-survey","layui-icon-face-smile","layui-icon-face-cry","layui-icon-cart-simple","layui-icon-cart","layui-icon-next","layui-icon-prev","layui-icon-upload-drag","layui-icon-upload","layui-icon-download-circle","layui-icon-component","layui-icon-file-b","layui-icon-user","layui-icon-find-fill","layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop","layui-icon-loading-1 layui-anim layui-anim-rotate layui-anim-loop","layui-icon-add-1","layui-icon-play","layui-icon-pause","layui-icon-headset","layui-icon-video","layui-icon-voice","layui-icon-speaker","layui-icon-fonts-del","layui-icon-fonts-code","layui-icon-fonts-html","layui-icon-fonts-strong","layui-icon-unlink","layui-icon-picture","layui-icon-link","layui-icon-face-smile-b","layui-icon-align-left","layui-icon-align-right","layui-icon-align-center","layui-icon-fonts-u","layui-icon-fonts-i","layui-icon-tabs","layui-icon-radio","layui-icon-circle","layui-icon-edit","layui-icon-share","layui-icon-delete","layui-icon-form","layui-icon-cellphone-fine","layui-icon-dialogue","layui-icon-fonts-clear","layui-icon-layer","layui-icon-date","layui-icon-water","layui-icon-code-circle","layui-icon-carousel","layui-icon-prev-circle","layui-icon-layouts","layui-icon-util","layui-icon-templeate-1","layui-icon-upload-circle","layui-icon-tree","layui-icon-table","layui-icon-chart","layui-icon-chart-screen","layui-icon-engine","layui-icon-triangle-d","layui-icon-triangle-r","layui-icon-file","layui-icon-set-sm","layui-icon-add-circle","layui-icon-404","layui-icon-about","layui-icon-up","layui-icon-down","layui-icon-left","layui-icon-right","layui-icon-circle-dot","layui-icon-search","layui-icon-set-fill","layui-icon-group","layui-icon-friends","layui-icon-reply-fill","layui-icon-menu-fill","layui-icon-log","layui-icon-picture-fine","layui-icon-face-smile-fine","layui-icon-list","layui-icon-release","layui-icon-ok","layui-icon-help","layui-icon-chat","layui-icon-top","layui-icon-star","layui-icon-star-fill","layui-icon-close-fill","layui-icon-close","layui-icon-ok-circle","layui-icon-add-circle-fine","layui-icon-table","layui-icon-upload","layui-icon-slider"]
        var html = [];
        html.push('<ul class="magicalcoder-extend-icons">')
        for(var i=0;i<iconArr.length;i++){
            html.push("<li><i class='layui-icon "+iconArr[i]+"'></i></li>")
        }
        html.push('</ul>')
        document.body.innerHTML = html.join('');

        var lis = document.getElementsByTagName("li");
        for(var i=0;i<lis.length;i++){
            lis[i].addEventListener('click',function () {
                var icon = this.childNodes[0]
                var active = true;
                if(icon.className.indexOf("active")==-1){
                    active = false;
                }
                var actives = document.getElementsByClassName("active");
                for(var j=0;j<actives.length;j++){
                    util.removeClass(actives[j],"active");
                }
                if(!active){
                    icon.className = icon.className +" active";
                }

            })
        }
        return true;
    }
    return false;
}
//下载按钮下载的内容
IframeUi.prototype.download = function(html){
    var source = [
        '<meta charset="UTF-8">','<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">',
        '<title>layui-由www.magicalcoder.com可视化布局器生成</title>',
        '<link href="http://www.miniui.com/scripts/miniui/themes/default/miniui.css" rel="stylesheet"/>',
        '<link href="http://www.miniui.com/scripts/miniui/themes/default/medium-mode.css" rel="stylesheet"/>',
        '<link href="http://www.miniui.com/scripts/miniui/themes/bootstrap/skin.css" rel="stylesheet"/>',
        '<link href="http://www.magicalcoder.com/magicaldrag/assets/drag/ui/magicalcoder/1.1.0/magicalcoder.css" rel="stylesheet"/>',

        '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>',
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/json3/3.3.3/json3.min.js"></script>',
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.6.0/echarts.min.js"></script>',
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.6.0/extension/dataTool.min.js"></script>',
        '<script src="http://www.miniui.com/scripts/miniui/miniui.js"></script>',
        '<script src="http://www.magicalcoder.com/assets/js/common.js"></script>',
        '<script src="http://www.magicalcoder.com/magicaldrag/assets/drag/ui/magicalcoder/1.1.0/magicalcoder.js"></script>',
    ]
    //设置样式
    var style = [];
    for(var key in this.canvasStyle){
        style.push(key+":"+this.canvasStyle[key]);
    }
    var css = '\n<style>\n'+this.getCss()+'\n</style>\n';
    var head = '<head>'+source.join('\n')+css+'\n</head>\n';
    var body = '<body style="'+style.join(";").replace(/\"/g,"'")+'">\n'+html+'\n<script>\n'+this.getJavascript()+'\n</script>\n</body>\n';
    return {
        htmlBefore:"<!DOCTYPE html>\n<!--代码由www.magicalcoder.com可视化布局器拖拽生成 资源请自行下载到本地-->\n",
        head:head,
        body:body,
        htmlEnd:"\n</html>",
    }
}

IframeUi.prototype.setMagicalJsCodeData = function(magicalJsCodeData){
    if(magicalJsCodeData==null){
        magicalJsCodeData = {};
    }
    if(typeof magicalJsCodeData == 'string'){
        magicalJsCodeData = JSON.parse(magicalJsCodeData);
    }
    this.magicalJsCodeData = magicalJsCodeData;
}
IframeUi.prototype.getMagicalJsCodeData = function(){
    return this.magicalJsCodeData;
}
IframeUi.prototype.setCanvasStyle = function (canvasStyle) {
    if(canvasStyle==null){
        canvasStyle = {};
    }
    if(typeof canvasStyle == 'string'){
        canvasStyle = JSON.parse(canvasStyle);
    }
    this.canvasStyle = canvasStyle;
    this.jsonFactory.setCanvasStyle(canvasStyle);
    //设置样式
    var style = [];
    for(var key in canvasStyle){
        style.push(key+":"+canvasStyle[key]);
    }
    document.body.setAttribute("style",style.join(";"));
}
IframeUi.prototype.getCanvasStyle = function () {
    return this.canvasStyle;
}
