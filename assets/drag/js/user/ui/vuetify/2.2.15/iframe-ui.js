/*每一种Ui的个性处理 比如各种组件初始化 重绘*/
function IframeUi() {
    this.ieVersion = ieVersion();
    this.vueData = {};
    this.vueMethod = {"focus":"function (e) {try {_t.fastKey.focusElem(e);}catch(e) {}}"};
    this.vueMounted = 'function(){}';
    this.defaultCss = "";//默认样式
    this.css = this.defaultCss;
    this.defaultJavascript = '//ajax库采用axios\n' +
        '//调试:打开浏览器控制台(F12),在代码中某行增加 debugger 即可调试\n' +
        'var vueData = {};\n' +
        'var vueMethod = {};\n' +
        'var vueMounted = function(){}\n' +
        '/*注意以上代码由系统维护,非专业人士请勿修改*/\n' +
        'var myMethod = {}\n' +
        'for (var key in myMethod) {\n' +
        '    vueMethod[key] = myMethod[key];\n' +
        '}\n' +
        'var myMounted = null\n' +
        'if(myMounted!=null){vueMounted=myMounted;}\n' +
        'var myData = {}\n' +
        '/*把您定义的数据覆盖布局器自动识别的变量,考虑到兼容性，请下载查看head中重写的assign方法*/\n' +
        'Object.assign(vueData, myData);\n' +
        'var _t = this;\n' +
        'var Ctor = Vue.extend({\n' +
        '   vuetify: new Vuetify(),'+
        '    //提前绑定的变量\n' +
        '    data: function() {\n' +
        '        return vueData;\n' +
        '    },\n' +
        '    //页面加载完 会执行方法 可以做一些初始化操作\n' +
        '    mounted: vueMounted,\n' +
        '    /*当前页面绑定的方法集合 与布局器节点一一映射即可 参照element ui文档*/\n' +
        '    methods: vueMethod\n' +
        '});\n' +
        'new Ctor().$mount(\'#magicalDragScene\');\n'+
        '//echarts自动初始化\n'+
        'new McECharts().render();\n';
    this.javascript = this.defaultJavascript;
    //是否开启javascript调试
    this.debug = false;
    this.vueDataReg = new RegExp("var vueData = \\{([\\s\\S]*?)\\};\n*var vueMethod","g");
    this.vueMethodReg = new RegExp("var vueMethod = \\{([\\s\\S]*?)\\};\n*var vueMounted","g");
    this.vueMountedReg = new RegExp("var vueMounted = ([\\s\\S]*?)\n*\\/\\*注意以上代码由系统维护,非专业人士请勿修改\\*\\/","g");
    this.splitStr = ",/*别删我*/\n";
    //此正在匹配函数
    this.functionReg = new RegExp("\"?(\\w+)\"?\\s*:\\s*([\\s\\S]*)","g");
    /*脚本编辑器的数据functionName:html 方法名:脚本编辑器的可恢复数据*/
    this.magicalJsCodeData = {}
    /*工作区画布基础样式设置 key:样式名 value:样式值*/
    this.canvasStyle = {}
}
//提供一系列动态操作脚本的接口 您可以调用API自由控制脚本内容
IframeUi.prototype.api = function(){
    var _t = this;
    var api = {
        //设置vueData数据值
        setVueData:function(fieldName,filedValue){
            _t.vueData[fieldName]=filedValue;
        },
        removeVueData:function(fieldName){
            delete _t.vueData[fieldName];
        },
        getVueData:function(fieldName){
            return _t.vueData[fieldName];
        },
        //设置vueMethod数据值
        setVueMethod:function(functionName,functionContent){
            _t.vueMethod[functionName]=functionContent;
        },
        removeVueMethod:function(functionName){
            delete _t.vueMethod[functionName];
        },
        getVueMethod:function(functionName){
            return _t.vueMethod[functionName];
        },
        //设置vueMounted数据值
        /**
        * @param mountedFunctionContent  'function(){...}'
        */
        setVueMounted:function(mountedFunctionContent){
            _t.vueMounted = mountedFunctionContent;
        },
        resetVueMounted:function(){
            _t.vueMounted='function(){}';
        },
        getVueMounted:function(){
            return _t.vueMounted;
        },
        resetAll:function(){
            _t.vueData = {};
            _t.vueMethod = {"focus":"function (e) {try {_t.fastKey.focusElem(e);}catch(e) {}}"};
            _t.vueMounted = 'function(){}';
        }
    }
    return api;
}

IframeUi.prototype.util = function(){
    var _t  = this;
    var util = {
        pribuildFunction:function(data){
            var str = [];
            for(var key in data){
                str.push(key+" : "+data[key]);//就是拼接方法
            }
            return "{"+str.join(_t.splitStr)+"}";
        },
        searchRegChar:function (source,reg) {
            var result = []
            var exeChar
            while ((exeChar=reg.exec(source))!=null){
                result.push(exeChar)
            }
            return result;
        },
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
    /*自动获取当前结构的跟节点*/
    var root = this.jsonFactory.getRoot();
    this.dealVmodel(root);
    var mountedStr = (typeof this.vueMounted =='undefined') ? 'function(){}' : this.vueMounted;
    this.javascript = this.javascript.replace(this.vueDataReg,"var vueData = "+this.util().pribuildFunction(this.vueData)+";\nvar vueMethod");
    this.javascript = this.javascript.replace(this.vueMethodReg,"var vueMethod = "+this.util().pribuildFunction(this.vueMethod)+";\nvar vueMounted");
    this.javascript = this.javascript.replace(this.vueMountedReg,"var vueMounted = "+mountedStr+"\n/*注意以上代码由系统维护,非专业人士请勿修改*/");

    return this.javascript;
}
IframeUi.prototype.setJavascript = function(javascript){
    if(javascript==null){//恢复一下默认脚本
        javascript = this.defaultJavascript;
    }
    this.api().resetAll();
    //分离 脚本中的变量
    //1 查找vueData
    var dataArr = this.util().searchRegChar(javascript,this.vueDataReg);
    if(dataArr.length>0){
         var vueDataArr = dataArr[0][1].split(this.splitStr);
        for(var i=0;i<vueDataArr.length;i++){
            var findArr = this.util().searchRegChar(vueDataArr[i],this.functionReg);
            if(findArr.length>0){
                this.api().setVueData(findArr[0][1],findArr[0][2]);
            }
        }
    }

    //2 查找vueMethod
    var methodsArr = this.util().searchRegChar(javascript,this.vueMethodReg);
    if(methodsArr.length>0){
         var vueMethodArr = methodsArr[0][1].split(this.splitStr);
        for(var i=0;i<vueMethodArr.length;i++){
            var findArr = this.util().searchRegChar(vueMethodArr[i],this.functionReg);
            if(findArr.length>0){
                this.api().setVueMethod(findArr[0][1],findArr[0][2]);
            }
        }
    }
    //3 查找vueMounted
    var mountedArr = this.util().searchRegChar(javascript,this.vueMountedReg);
    if(mountedArr.length>0){
        this.api().setVueMounted(mountedArr[0][1]);
    }

    this.javascript = javascript;
    this.jsonFactory.setJavascript(javascript);//额外在主面板备份一份 出现错误刷新内部面板导致js丢失 所以存一份在主面板
}
//这样不管怎么样都会有默认值
IframeUi.prototype.dealVmodel = function(node){
    var bind = node.magicalCoder.bind;
    if(typeof bind!='undefined'){
        for(var variableName in bind){
            //默认的变量值 []
            var defaultVariableValue = bind[variableName];
            //用户配置的变量名 userName
            var userConfigVariableName = node.attributes[variableName];
            //自动放到vueData
            if(typeof userConfigVariableName !='undefined' && userConfigVariableName!=='' && isNaN(userConfigVariableName)){
                if(typeof this.vueData[userConfigVariableName]!='undefined'){//如果用户通过api设置过值 就不取默认值了
                    continue;
                }
                this.vueData[userConfigVariableName] = defaultVariableValue;
                //根据用户配置的字段属性 修正一下最终的取值类型
                var dbTypePrefix = "mc-db-type-";//此变量对应的数据类型前缀
                var dbTypeAttrName = dbTypePrefix+variableName;//mc-db-type-v-model
                var dbTypeAttrValue = node.attributes[dbTypeAttrName];//str int ...
                if(dbTypeAttrValue!==''){
                    //{"str":"字符串","int":"整数","long":"长整数","decimal":"小数","bool":"真假","date":"日期","array":"数组"}
                    if(typeof defaultVariableValue!='object'){//数组暂时不用改
                        switch (dbTypeAttrValue) {
                            case 'str':
                                if(typeof defaultVariableValue!='string'){//只有当默认值类型与用户所选类型不匹配 才考虑用新默认值
                                    this.vueData[userConfigVariableName] = '""';
                                }
                                break;
                            case 'int':
                            case 'long':
                            case 'decimal':
                                if(typeof defaultVariableValue!='number') {
                                    this.vueData[userConfigVariableName] = "0";
                                }
                                break;
                            case 'bool':
                                if(typeof defaultVariableValue!='boolean'){
                                    this.vueData[userConfigVariableName] = "false";
                                }
                                break;
                        }
                    }
                }
            }
        }
    }
    var children = node.magicalCoder.children;
    for(var i=0;i<children.length;i++){
        this.dealVmodel(children[i]);
    }
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
    return document.body;
}
IframeUi.prototype.realHtml=function(html){
    return html.replace(/(<div.*?>)([\s\S]*)<\/div>/,"$1<template>$2</template></div>");
}

/*此方法不要改名 初始化组件的方法 每次代码重绘 会调用此方法 来重新初始化组件*/
IframeUi.prototype.render=function (html,jsonFactory,globalConstant) {
    if(html==null){
        return;
    }
    var magicalCoderCss = this.autoCreateMagicalCss();
    magicalCoderCss.innerHTML = this.getCss();//设置样式内容

    var magicalDragScene = this.autoCreateRootDom();
    //由于vue框架不支持body做根 并且<template></template>标签在html里会自动变成虚无 所以我们正则替换一下 自动加上让vue渲染
    var html = this.realHtml(html);
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
        eval("var Ctor = Vue.extend({});new Ctor().$mount('#magicalDragScene');new McECharts().render();");//兼容一下js错误 给出渲染界面
    }
    //做一些优化 比如删除一些不需要的结构
    this.fixDynamicDomAfterRender();
}
//修复一下动态创建的结构跑偏问题 有些ui设计的比较差 动态没用的结构很多，我们设置简介标签上的属性样式无法继承 所以就需要我们修复一下
IframeUi.prototype.fixDynamicDomAfterRender = function(){

}


IframeUi.prototype.iconList = function(){
    if(window.location.href.indexOf("from=icon_list")!=-1){
        var util = this.util();
        var iconArr = ['el-icon-platform-eleme','el-icon-eleme','el-icon-delete-solid','el-icon-delete','el-icon-s-tools','el-icon-setting','el-icon-user-solid','el-icon-user','el-icon-phone','el-icon-phone-outline','el-icon-more','el-icon-more-outline','el-icon-star-on','el-icon-star-off','el-icon-s-goods','el-icon-goods','el-icon-warning','el-icon-warning-outline','el-icon-question','el-icon-info','el-icon-remove','el-icon-circle-plus','el-icon-success','el-icon-error','el-icon-zoom-in','el-icon-zoom-out','el-icon-remove-outline','el-icon-circle-plus-outline','el-icon-circle-check','el-icon-circle-close','el-icon-s-help','el-icon-help','el-icon-minus','el-icon-plus','el-icon-check','el-icon-close','el-icon-picture','el-icon-picture-outline','el-icon-picture-outline-round','el-icon-upload','el-icon-upload2','el-icon-download','el-icon-camera-solid','el-icon-camera','el-icon-video-camera-solid','el-icon-video-camera','el-icon-message-solid','el-icon-bell','el-icon-s-cooperation','el-icon-s-order','el-icon-s-platform','el-icon-s-fold','el-icon-s-unfold','el-icon-s-operation','el-icon-s-promotion','el-icon-s-home','el-icon-s-release','el-icon-s-ticket','el-icon-s-management','el-icon-s-open','el-icon-s-shop','el-icon-s-marketing','el-icon-s-flag','el-icon-s-comment','el-icon-s-finance','el-icon-s-claim','el-icon-s-custom','el-icon-s-opportunity','el-icon-s-data','el-icon-s-check','el-icon-s-grid','el-icon-menu','el-icon-share','el-icon-d-caret','el-icon-caret-left','el-icon-caret-right','el-icon-caret-bottom','el-icon-caret-top','el-icon-bottom-left','el-icon-bottom-right','el-icon-back','el-icon-right','el-icon-bottom','el-icon-top','el-icon-top-left','el-icon-top-right','el-icon-arrow-left','el-icon-arrow-right','el-icon-arrow-down','el-icon-arrow-up','el-icon-d-arrow-left','el-icon-d-arrow-right','el-icon-video-pause','el-icon-video-play','el-icon-refresh','el-icon-refresh-right','el-icon-refresh-left','el-icon-finished','el-icon-sort','el-icon-sort-up','el-icon-sort-down','el-icon-rank','el-icon-loading','el-icon-view','el-icon-c-scale-to-original','el-icon-date','el-icon-edit','el-icon-edit-outline','el-icon-folder','el-icon-folder-opened','el-icon-folder-add','el-icon-folder-remove','el-icon-folder-delete','el-icon-folder-checked','el-icon-tickets','el-icon-document-remove','el-icon-document-delete','el-icon-document-copy','el-icon-document-checked','el-icon-document','el-icon-document-add','el-icon-printer','el-icon-paperclip','el-icon-takeaway-box','el-icon-search','el-icon-monitor','el-icon-attract','el-icon-mobile','el-icon-scissors','el-icon-umbrella','el-icon-headset','el-icon-brush','el-icon-mouse','el-icon-coordinate','el-icon-magic-stick','el-icon-reading','el-icon-data-line','el-icon-data-board','el-icon-pie-chart','el-icon-data-analysis','el-icon-collection-tag','el-icon-film','el-icon-suitcase','el-icon-suitcase-1','el-icon-receiving','el-icon-collection','el-icon-files','el-icon-notebook-1','el-icon-notebook-2','el-icon-toilet-paper','el-icon-office-building','el-icon-school','el-icon-table-lamp','el-icon-house','el-icon-no-smoking','el-icon-smoking','el-icon-shopping-cart-full','el-icon-shopping-cart-1','el-icon-shopping-cart-2','el-icon-shopping-bag-1','el-icon-shopping-bag-2','el-icon-sold-out','el-icon-sell','el-icon-present','el-icon-box','el-icon-bank-card','el-icon-money','el-icon-coin','el-icon-wallet','el-icon-discount','el-icon-price-tag','el-icon-news','el-icon-guide','el-icon-male','el-icon-female','el-icon-thumb','el-icon-cpu','el-icon-link','el-icon-connection','el-icon-open','el-icon-turn-off','el-icon-set-up','el-icon-chat-round','el-icon-chat-line-round','el-icon-chat-square','el-icon-chat-dot-round','el-icon-chat-dot-square','el-icon-chat-line-square','el-icon-message','el-icon-postcard','el-icon-position','el-icon-turn-off-microphone','el-icon-microphone','el-icon-close-notification','el-icon-bangzhu','el-icon-time','el-icon-odometer','el-icon-crop','el-icon-aim','el-icon-switch-button','el-icon-full-screen','el-icon-copy-document','el-icon-mic','el-icon-stopwatch','el-icon-medal-1','el-icon-medal','el-icon-trophy','el-icon-trophy-1','el-icon-first-aid-kit','el-icon-discover','el-icon-place','el-icon-location','el-icon-location-outline','el-icon-location-information','el-icon-add-location','el-icon-delete-location','el-icon-map-location','el-icon-alarm-clock','el-icon-timer','el-icon-watch-1','el-icon-watch','el-icon-lock','el-icon-unlock','el-icon-key','el-icon-service','el-icon-mobile-phone','el-icon-bicycle','el-icon-truck','el-icon-ship','el-icon-basketball','el-icon-football','el-icon-soccer','el-icon-baseball','el-icon-wind-power','el-icon-light-rain','el-icon-lightning','el-icon-heavy-rain','el-icon-sunrise','el-icon-sunrise-1','el-icon-sunset','el-icon-sunny','el-icon-cloudy','el-icon-partly-cloudy','el-icon-cloudy-and-sunny','el-icon-moon','el-icon-moon-night','el-icon-dish','el-icon-dish-1','el-icon-food','el-icon-chicken','el-icon-fork-spoon','el-icon-knife-fork','el-icon-burger','el-icon-tableware','el-icon-sugar','el-icon-dessert','el-icon-ice-cream','el-icon-hot-water','el-icon-water-cup','el-icon-coffee-cup','el-icon-cold-drink','el-icon-goblet','el-icon-goblet-full','el-icon-goblet-square','el-icon-goblet-square-full','el-icon-refrigerator','el-icon-grape','el-icon-watermelon','el-icon-cherry','el-icon-apple','el-icon-pear','el-icon-orange','el-icon-coffee','el-icon-ice-tea','el-icon-ice-drink','el-icon-milk-tea','el-icon-potato-strips','el-icon-lollipop','el-icon-ice-cream-square','el-icon-ice-cream-round']
        var html = [];
        html.push('<ul class="magicalcoder-extend-icons">')
        for(var i=0;i<iconArr.length;i++){
            html.push("<li><i class='"+iconArr[i]+"'></i></li>")
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
        '<title>vuetify-由www.magicalcoder.com可视化布局器生成</title>',
        '<link href="https://cdnjs.cloudflare.com/ajax/libs/vuetify/2.2.15/vuetify.min.css" rel="stylesheet"/>',
        '<link href="http://www.magicalcoder.com/magicaldrag/assets/drag/ui/magicalcoder/1.1.0/magicalcoder.css" rel="stylesheet"/>',

        '<!-- 如果要兼容ie8及以前版本 请打开注释--> <!-- <script src="http://www.magicalcoder.com/assets/ui/element/2.10.1/browser.min.js"></script><script src="http://www.magicalcoder.com/assets/ui/element/2.10.1/browser-polyfill.min.js"></script>-->',
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/json3/3.3.3/json3.min.js"></script>',
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.6.0/echarts.min.js"></script>',
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.6.0/extension/dataTool.min.js"></script>',
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js"></script>',
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>',
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/vuetify/2.2.15/vuetify.min.js"></script>',
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
    var body = '<body style="'+style.join(";").replace(/\"/g,"'")+'">\n'+this.realHtml(html)+'\n<script>\n'+this.getJavascript()+'\n</script>\n</body>\n';
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
