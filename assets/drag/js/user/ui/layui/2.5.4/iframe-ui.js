var $ = layui.jquery,layer=layui.layer;
function IframeUi() {
    this.vueMethod = {};
    this.defaultCss = "";//默认样式
    this.css = this.defaultCss;
    //默认脚本
    this.defaultJavascript = '//以下脚本为标签属性转换成layui组件的还原过程\n' +
        '//调试:打开浏览器控制台(F12),在代码中某行增加 debugger 即可调试\n' +
        'var $ = layui.jquery, laytpl = layui.laytpl, laydate = layui.laydate, form = layui.form, layedit = layui.layedit, slider = layui.slider, element = layui.element, colorpicker = layui.colorpicker, upload = layui.upload, rate = layui.rate, carousel = layui.carousel, table = layui.table, flow = layui.flow;\n' +
        'var magicalDragLayuiUtil = {\n' +
        '    rebuildLayUiControls: function () {\n' +
        '        var _t = this;\n' +
        '        //日期\n' +
        '        $(".magicalcoder-laydate").each(function (idx, item) {\n' +
        '            laydate.render(_t.iteratorAttr({\n' +
        '                elem: item\n' +
        '            }, item));\n' +
        '        })\n' +
        '        //富文本\n' +
        '        $(".magicalcoder-layedit").each(function (idx, item) {\n' +
        '            var mcDataId = $(item).attr("id");\n' +
        '            if (mcDataId) {\n' +
        '                layedit.build(mcDataId, {\n' +
        '                    height: 300\n' +
        '                });\n' +
        '            }\n' +
        '        })\n' +
        '        //外键\n' +
        '        $(".magicalcoder-foreign-select2").each(function (idx, item) {\n' +
        '            var mcDataId = $(item).attr("id");\n' +
        '            if (mcDataId) {\n' +
        '                $("#" + mcDataId).select2({\n' +
        '                    allowClear: true,\n' +
        '                    width: "150px",\n' +
        '                    delay: 500,\n' +
        '                });\n' +
        '            }\n' +
        '        })\n' +
        '        //颜色选择器\n' +
        '        $(".magicalcoder-color-picker").each(function (idx, item) {\n' +
        '            colorpicker.render(_t.iteratorAttr({\n' +
        '                elem: $(item)}, item));\n' +
        '        })\n' +
        '        //上传组件\n' +
        '        $(".magicalcoder-layupload").each(function (idx, item) {\n' +
        '            upload.render(_t.iteratorAttr({\n' +
        '                elem: $(item)}, item));\n' +
        '        })\n' +
        '        //滑块\n' +
        '        $(".magicalcoder-slider").each(function (idx, item) {\n' +
        '            slider.render(_t.iteratorAttr({\n' +
        '                elem: $(item)}, item));\n' +
        '        })\n' +
        '        //评分\n' +
        '        $(".magicalcoder-rate").each(function (idx, item) {\n' +
        '            rate.render(_t.iteratorAttr({\n' +
        '                elem: $(item)}, item));\n' +
        '        })\n' +
        '        //轮播\n' +
        '        $(".layui-carousel").each(function (idx, item) {\n' +
        '            carousel.render(_t.iteratorAttr({\n' +
        '                elem: $(item)}, item));\n' +
        '        })\n' +
        '        //流加载\n' +
        '        $(".magicalcoder-flow").each(function (idx, item) {\n' +
        '            flow.load(_t.iteratorAttr({\n' +
        '                elem: $(item)}, item));\n' +
        '        })\n' +
        '        //代码\n' +
        '        $(".magicalcoder-code").each(function (idx, item) {\n' +
        '            layui.code(_t.iteratorAttr({\n' +
        '                elem: $(item)}, item));\n' +
        '        })\n' +
        '        //弹窗\n' +
        '        $(".magicalcoder-layer").each(function (idx, item) {\n' +
        '            //先隐藏起来\n' +
        '            $(this).next().hide();\n' +
        '            $(this).click(function () {\n' +
        '                var config = _t.iteratorAttr({\n' +
        '                    elem: $(item)}, item);\n' +
        '                var type = config.type;\n' +
        '                if (type + \'\' == 1) {\n' +
        '                    config.content = $(this).next();\n' +
        '                   if (!config.content.hasClass("magicalcoder-layer-content")) {\n' +
        '                        config.content = config.content.find(".magicalcoder-layer-content")\n' +
        '                    }' +
        '                }\n' +
        '                if (config.btn) {\n' +
        '                    config.btn = config.btn.split(",")\n' +
        '                }\n' +
        '                if (config.area) {\n' +
        '                    config.area = config.area.split(",")\n' +
        '                }\n' +
        '                layer.open(config)\n' +
        '            })\n' +
        '        })\n' +
        '        //动态表格 我们单独封装了layui-table的初始化方式 至于数据排序 返回格式 等操作请根据你的具体环境自行封装\n' +
        '        $(".magicalcoder-table").each(function (idx,\n' +
        '            item) {\n' +
        '            var cols = [];\n' +
        '            //读取列配置\n' +
        '            $(this).find(".magicalcoder-table-th").each(function (i, th) {\n' +
        '                cols.push(_t.iteratorAttr({\n' +
        '                    title: $(this).text()}, th));\n' +
        '            })\n' +
        '            var tableConfig = _t.iteratorAttr({\n' +
        '                elem: $(item),\n' +
        '                cols: [cols]},\n' +
        '                item);\n' +
        '            //初始化表格 至于返回的数据格式 您可以根据自己的系统自行改造 这里仅做一个示例 参考js\\\\data\\\\list.json\n' +
        '            table.render(tableConfig);\n' +
        '        })\n' +
        '        //部分组件初始化\n' +
        '        element.init();\n' +
        '        //表单初始化\n' +
        '        form.render();\n' +
        '    },\n' +
        '    //将标签上的属性 转换成layui函数初始化时的参数名:参数值\n' +
        '    iteratorAttr: function (renderConfig, dom) {\n' +
        '        var attrs = dom.attributes;\n' +
        '        for (var i = 0; i < attrs.length; i++) {\n' +
        '            var attr = attrs[i];\n' +
        '            var name = attr.name;\n' +
        '            var value = attr.value;\n' +
        '            if (name.indexOf("mc-") === 0) {\n' +
        '                name = name.replace("mc-attr-", \'\');\n' +
        '                name = name.replace("mc-event-", \'\');\n' +
        '                if (name.indexOf(\'str-\') === 0) {\n' +
        '                    name = name.replace(\'str-\', \'\');\n' +
        '                } else if (name.indexOf(\'bool-\') === 0) {\n' +
        '                    name = name.replace(\'bool-\', \'\');\n' +
        '                    value == \'true\' || value === \'\' ? value = true: value = value;\n' +
        '                    value == \'false\' ? value = false: value = value;\n' +
        '                } else if (name.indexOf(\'num-\') === 0) {\n' +
        '                    name = name.replace(\'num-\', \'\');\n' +
        '                    if (value !== \'\' && !isNaN(value)) {\n' +
        '                        value = parseFloat(value);\n' +
        '                    }\n' +
        '                } else if (name.indexOf(\'json-\') === 0) {\n' +
        '                    name = name.replace(\'json-\', \'\');\n' +
        '                    if (value !== \'\') {\n' +
        '                        value = JSON.parse(value);\n' +
        '                    }\n' +
        '                }\n' +
        '                renderConfig[this.htmlAttrNameToTuoFeng(name)] = value;\n' +
        '            }\n' +
        '        }\n' +
        '        return renderConfig;\n' +
        '    },\n' +
        '    //user-name -> userName html上的标签名转换成驼峰名称\n' +
        '    htmlAttrNameToTuoFeng: function (name) {\n' +
        '        var arr = name.split("-");\n' +
        '        var newArr = []\n' +
        '        for (var i = 0; i < arr.length; i++) {\n' +
        '            if (i != 0) {\n' +
        '                if (arr[i] != \'\') {\n' +
        '                    newArr.push(this.firstCharToUpLower(arr[i]));\n' +
        '                }\n' +
        '            } else {\n' +
        '                newArr.push(arr[i]);\n' +
        '            }\n' +
        '        }\n' +
        '        return newArr.join(\'\');\n' +
        '    },\n' +
        '    //首字母大写\n' +
        '    firstCharToUpLower: function (name) {\n' +
        '        var arr = name.split("");\n' +
        '        arr[0] = arr[0].toUpperCase();\n' +
        '        return arr.join(\'\');\n' +
        '    },\n' +
        '}\n' +
        'magicalDragLayuiUtil.rebuildLayUiControls();\n'+
        '//echarts自动初始化\n'+
        'new McECharts().render();\n' +
        '//functions-begin\n' +
        '//functions-end';
    //布局器的脚本
    this.javascript = this.defaultJavascript;
    //是否开启javascript调试
    this.debug = false;
    this.vueMethodReg = new RegExp("//functions-begin\n\\{([\\s\\S]*?)\\};\n?//functions-end","g");
    this.splitStr = ",/*别删我*/\n";
    //此正在匹配函数
    this.functionReg = new RegExp("function\\s+(\\w+)\\((\\w+)\\)\\s*\\{([\\s\\S]*)\\}","g");
    /*脚本编辑器的数据functionName:html 方法名:脚本编辑器的可恢复数据*/
    this.magicalJsCodeData = {}
    /*工作区画布基础样式设置 key:样式名 value:样式值*/
    this.canvasStyle = {}
}
//提供一系列动态操作脚本的接口 您可以调用API自由控制脚本内容
IframeUi.prototype.api = function(){
    var _t = this;
    var api = {
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
        resetAll:function(){
            _t.vueMethod = {};
        },
        /*脚本编辑器的数据统一跟page绑定 存一个地方*/
        setMagicalJsCodeDataValue:function (functionName,html,js) {
            _t.vueMethod[functionName]=js;//完美的结合一起
            _t.magicalJsCodeData[functionName] = html;
        },
        getMagicalJsCodeDataValue:function (functionName) {
            return _t.magicalJsCodeData[functionName];
        },
        removeMagicalJsCodeDataKey:function (functionName) {
           delete _t.magicalJsCodeData[functionName];
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
    this.javascript = this.javascript.replace(this.vueMethodReg,"var vueMethod = "+this.util().pribuildFunction(this.vueMethod)+";\nvar vueMounted");
    return this.javascript;
}
IframeUi.prototype.setJavascript = function(javascript){
    if(javascript==null){//恢复一下默认脚本
        javascript = this.defaultJavascript;
    }
    this.api().resetAll();
    //分离 脚本中的变量
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
 /*   var magicalDragScene = document.getElementById("magicalDragScene");
    var workspace = this.globalConstant.getSettings()['workspace'];
    var extraClass = (typeof workspace !='undefined' && workspace.extraClass) ? workspace.extraClass+" " : "";
    if(this.jsonFactory){//
        var magicalCoderIdAttrName = this.jsonFactory.api().getMagicalCoderIdAttrName();
        if(typeof magicalDragScene == 'undefined' || magicalDragScene == null){
            document.body.innerHTML = '<div class="'+extraClass+'drag-mc-pane layui-form" id="magicalDragScene" '+magicalCoderIdAttrName+'="Root"></div>';
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
        return;
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
    //做一些优化 比如删除一些不需要的结构
    this.fixDynamicDomAfterRender();
}

//修复一下动态创建的结构跑偏问题 有些ui设计的比较差 动态没用的结构很多，我们设置简介标签上的属性样式无法继承 所以就需要我们修复一下
IframeUi.prototype.fixDynamicDomAfterRender = function(){

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
        '<link href="https://cdn.jsdelivr.net/npm/layui-src@2.4.5/dist/css/layui.css" rel="stylesheet"/>',
        '<link href="http://www.magicalcoder.com/magicaldrag/assets/drag/ui/magicalcoder/1.1.0/magicalcoder.css" rel="stylesheet"/>',

        '<script src="https://cdnjs.cloudflare.com/ajax/libs/json3/3.3.3/json3.min.js"></script>',
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.6.0/echarts.min.js"></script>',
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.6.0/extension/dataTool.min.js"></script>',
        '<script src="https://cdn.jsdelivr.net/npm/layui-src@2.4.5/dist/layui.all.js"></script>',
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
    var body = '<body  class="layui-form" style="'+style.join(";").replace(/\"/g,"'")+'">\n'+html+'\n<script>\n'+this.getJavascript()+'\n</script>\n</body>\n';
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
