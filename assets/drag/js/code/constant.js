/*常量池*/
function Constant(){
    var env = APPLICATION_ENV.getEnv();
    var envConstantSettings = env.constant.settings;
    this.type = env.constant.type;
    this.change = env.constant.change;
    /*全局设置*/
    this.settings = {
        navigateTree:envConstantSettings.navigateTree,
        styleTool:{enable:false},
        javascript:envConstantSettings.javascript,
        html:envConstantSettings.html,
        css:envConstantSettings.css,
        debug:envConstantSettings.debug,
        cache:envConstantSettings.cache,
        workspace:envConstantSettings.workspace,
        file:envConstantSettings.file,
        other:envConstantSettings.other,
        //布局器右上角有个预览按钮 在弹窗打开 预览一下实际情况 因不同ui依赖资源不同 所以采用配置方式来加载资源
        view:{
            //预览地址
            url:envConstantSettings.view.url,
            //layui弹窗配置 area[0]宽如果不写则自动根据当前选中的设备模式宽 area[1]高
            layerExtra:envConstantSettings.view.layerExtra,
            //预览页<head></head>内的样式地址
            link:["assets/drag/ui/layui/2.5.4/css/layui.css","assets/drag/ui/magicalcoder/1.1.0/magicalcoder.css"],
            //预览页<head></head>内的脚本地址
            headJs:[],
            //预览页<body></body>内的脚本地址
            bodyJs:[
                "assets/drag/js/lib/echarts/4.6.0/echarts.min.js",
                "assets/drag/js/lib/echarts/datatool.min.js",
                "assets/drag/ui/magicalcoder/1.1.0/magicalcoder.js",
                "assets/drag/ui/layui/2.5.4/layui.all.js"
            ]
        },
        //搜索节点的规则 每个节点在布局器都有一个唯一的magicalcoderid,但是有些情况部分ui会生成各种新的结构 导致我们想要操作的结构不对
        searchMagicalCoderIdRule:{
            //true:则从里往外搜索 false则从外往里搜索
            searchParent:function (elem){//一般您要配合iframe-ui.js的fixDynamicDomAfterRender方法来同时工作
                return false;
            }
        }
    }

    var compareHtml = '<div class="layui-inline mc-compare"><div class="layui-inline mc-set-value"></div><strong class="mc-compare-operator">等于</strong><div class="layui-inline mc-set-value"></div></div>';
    var conditionHtml = '<div class="layui-inline mc-condition">'+compareHtml+'</div>'
    var conditionGroupHtml = '<div class="layui-inline mc-condition-group">'+conditionHtml+'</div>';
    this.html = {
        compare: compareHtml,
        condition:conditionHtml,
        conditionGroup:conditionGroupHtml,
    }
    this.UI_TYPE = 0;
    this.UI_NAME = "layui";
    this.UI_FRAME = "jquery";
    /*响应式布局*/
    this.responsive = {
        XS:"xs",
        SM:"sm",
        MD:"md",
        LG:"lg",
    }
    this.responsiveList = [
        {id:this.responsive.XS,name:"手机",width:"588px",icon:"assets/drag/img/header/phone1.png"},
        {id:this.responsive.SM,name:"平板",width:"768px",icon:"assets/drag/img/header/paid1.png"},
        {id:this.responsive.MD,name:"笔记本",width:"992px",icon:"assets/drag/img/header/notebook2.png"},
        {id:this.responsive.LG,name:"电脑",width:"100%",icon:"assets/drag/img/header/pc1.png",checked:true},
    ]

    var _t = this;
    /*自定义的组件*/
    this.components = [
        {
            name:"工具类",
            children:[
                {
                    name:"我的函数",
                    icon:"assets/drag/img/left/around1.png",
                    html:
                        '<div class="layui-row mc-function">'+
                            '<div class="layui-col-xs12 mc-function-head">'+
                                '<input class="layui-input mc-function-name" type="text" readonly placeholder="方法名"/>'+
                                '<div class="layui-col-xs12 mc-function-params">'+
                                    '<input class="layui-input mc-function-param" type="text" readonly placeholder="参数"/>'+
                                    '<input class="layui-input mc-function-param" type="text" readonly placeholder="参数"/>'+
                                '</div>'+
                            '</div>'+
                            '<div class="layui-col-xs12 mc-function-body"></div>'+
                        '</div>',
                },
                {
                    name:"弹窗提示",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<div class='layui-inline mc-util-alert'><div class='layui-inline mc-set-value'></div></div>",
                },
                {
                    name:"接口调用",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<div class='layui-row mc-ajax'><input class='layui-input mc-ajax-url' type='text' readonly placeholder='请求地址'/><input class='layui-input mc-ajax-method' type='text' readonly placeholder='请求方法'/><div class='layui-col-xs12 mc-ajax-params'><div class='layui-col-xs12 mc-ajax-param'><input class='layui-input mc-ajax-param-name' type='text' readonly placeholder='参数名'/><input class='layui-input mc-ajax-param-value' type='text' readonly placeholder='参数值'/></div></div><div class='layui-col-xs12 mc-ajax-thens'></div></div>",
                },
                {
                    name:"页面跳转",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<div class='layui-row mc-href'><input class='layui-input mc-href-url' type='text' readonly placeholder='跳转地址'/><div class='layui-col-xs12 mc-href-params'><div class='layui-col-xs12 mc-href-param'><input class='layui-input mc-href-param-name' type='text' readonly placeholder='参数名'/><input class='layui-input mc-href-param-value' type='text' mc-is-variable readonly placeholder='参数值'/></div></div></div>",
                },
                {
                    name:"页面刷新",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<div class='layui-inline mc-util-reload'></div>",
                }
            ]
        },{
            id:"hrefVariable",
            name:"地址参数",
            children:[

            ]
        },{
            id:"pageVariable",
            name:"页面参数",
            children:[

            ]
        },{
            id:"functionVariable",
            name:"事件参数",
            children:[

            ]
        },
        {
            name:"条件状态",
            children:[
                {
                    name:"如果",
                    icon:"assets/drag/img/left/menu1.png",
                    html:'<div class="layui-row mc-if-container">' +
                            '<div class="layui-col-xs12 mc-if">' +
                                '<div class="layui-col-xs12 mc-condition-groups">' +
                                    _t.html.conditionGroup+
                                '</div>' +
                                '<div class="layui-col-xs12 mc-if-execute"></div>' +
                            '</div>' +
                        '</div>'
                },{
                    name:"如果其他",
                    icon:"assets/drag/img/left/menu1.png",
                    html:'<div class="layui-row mc-if-container">' +
                            '<div class="layui-col-xs12 mc-if">' +
                                '<div class="layui-col-xs12 mc-condition-groups">' +
                                    _t.html.conditionGroup+
                                '</div>' +
                                '<div class="layui-col-xs12 mc-if-execute"></div>' +
                            '</div>' +
                            '<div class="layui-col-xs12 mc-else">' +
                                '<div class="layui-col-xs12 mc-if-execute"></div>' +
                            '</div>' +
                        '</div>'
                },{
                    name:"或者如果",
                    icon:"assets/drag/img/left/menu1.png",
                    html:'<div class="layui-row mc-if-container">' +
                            '<div class="layui-col-xs12 mc-if">' +
                                '<div class="layui-col-xs12 mc-condition-groups">' +
                                    _t.html.conditionGroup+
                                '</div>' +
                                '<div class="layui-col-xs12 mc-if-execute"></div>' +
                            '</div>' +
                            '<div class="layui-col-xs12 mc-else-if">' +
                                '<div class="layui-col-xs12 mc-condition-groups">' +
                                    _t.html.conditionGroup+
                                '</div>' +
                                '<div class="layui-col-xs12 mc-if-execute"></div>' +
                            '</div>' +
                            '<div class="layui-col-xs12 mc-else">' +
                                '<div class="layui-col-xs12 mc-if-execute"></div>' +
                            '</div>' +
                        '</div>'
                }

            ]
        },
        {
            name:"语句",
            children:[
                {
                    name:"终止执行",
                    icon:"assets/drag/img/left/menu1.png",
                    html:"<div class='layui-input-block mc-return'>return;</div>"
                },
            ]
        },
        {
            name:"逻辑运算",
            children:[
                {
                    name:"并且",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<strong class='mc-logic-and'>并且</strong>",
                },{
                    name:"或者",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<strong class='mc-logic-or'>或者</strong>",
                },{
                    name:"非",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<strong class='mc-logic-not'>非</strong>",
                }
            ]
        },
        {
            name:"高级",
            children:[
                {
                    name:"定义变量",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<div class='mc-defined'><div class='layui-inline mc-defined-variable'>def</div><strong class='mc-set-to'>=</strong><div class='layui-inline mc-set-value'></div></div>",
                },{
                    name:"赋值语句",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<div class='mc-set'><var class='mc-set-variable'>myVariable</var><strong class='mc-set-to'>=</strong><div class='layui-inline mc-set-value'></div></div>",
                },{
                    name:"公式",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<div class='layui-inline mc-math'><div class='layui-inline mc-set-value'></div><strong class='mc-math-operator'>+</strong><div class='layui-inline mc-set-value'></div></div>",
                }
            ]
        },{
            name:"辅助格式",
            children:[
                {
                    name:"回车换行",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<div class='mc-line'></div>",
                },{
                    name:"括号对",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<div class='layui-inline mc-kuo-pair'></div>",
                }
            ]
        },{
            name:"方法：返回数值",
            children:[
                {
                    name:"转成整数",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<div class='layui-inline mc-util-parse-int'><div class='layui-inline mc-set-value'></div></div>",
                },{
                    name:"转成小数",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<div class='layui-inline mc-util-parse-float'><div class='layui-inline mc-set-value'></div></div>",
                }
            ]
        }/*,{
            name:"方法：集合工具",
            children:[
                {
                    name:"过滤条目",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<div class='layui-inline mc-util-array-delete-item'><div class='layui-inline mc-set-value'></div><div class='layui-inline mc-set-value'></div><div class='layui-inline mc-set-value'></div></div>",
                }
            ]
        }*/

    ]
    /*根据标签名索引 dragInto:是否允许拖拽插入其他元素 duplicate:是否允许向下复制 不支持函数 onlyParents:[key]只能插入到哪些父结构下   onlyChildren:[key] =只接受哪些孩子结构插入进来 bind:用于vue的动态绑定参数名,针对一些控件必须绑定数据才行否则vue报错*/
    /*addOneItems：新增一个条目 ctrl+i array key:新增到哪个identifier下,空表示当前节点的children下 value:有时会新增多个自孩子，html:要添加进去的孩子结构 focus代表添加后是否聚焦孩子*/
    /*treeExtraName：额外追加到导航树的内容  attr:当前结构的属性名的值 text:是否追加第一个文本内容 primary：权限 当一个结构上出现了多种可能的tagClassMapping映射 如何确定用哪一个，此时可以使用primary,数值越大权限越高 高权限会覆盖低权限的节点成为默认首选
    * tmpWrapTag:'div'临时包裹标签 有些结构被layui写的是平级 放在了元素标签下面 这样拖拽插件就察觉不到 此时需要我们包裹一个临时标签 比如select layui-table这些*/
    //可执行的语句块场景    'root',''
    //可放入的变量 公式场景 mc-set-value
    var executeBlockParents=['root','mc-if-execute','mc-ajax-thens','mc-function-body'];//想执行的都放这里面
    var returnParents=['mc-set-value','mc-kuo-pair','mc-condition','root'];//带return的都可以放这个里面
    var supportQianTao = ['mc-set-value','mc-kuo-pair'];
    this.tagClassMapping = {
        "mc-defined":    {name:"自定义变量",canZoom:true,assistZoom:true,dragInto:true,duplicate:true,duplicateAttr:[],        copy:true,       paste:false, canDelete:true,assistDelete:true,onlyParents:executeBlockParents, onlyChildren:['mc-set-variable','mc-set-to'].push(supportQianTao)    },
        "mc-set":    {name:"赋值语句",dragInto:true,duplicate:true,duplicateAttr:[],        copy:true,       paste:false, canDelete:true,assistDelete:true,onlyParents:executeBlockParents, onlyChildren:['mc-defined-variable','mc-set-to'].push(supportQianTao)    },
            "mc-defined-variable":{name:"自定义的变量名",treeExtraName:{attr:[],text:true},canNotOperate:true,dragInto:true, copy:false,      paste:false,    canDelete:false,childrenLimit:0},
            "mc-set-variable":{name:"设置的变量名",treeExtraName:{attr:[],text:true},canNotOperate:true,dragInto:true, copy:false,      paste:false,    canDelete:false,childrenLimit:0},
            "mc-set-to":{name:"赋值为",treeExtraName:{attr:[],text:true},dragInto:false, canNotOperate:true,copy:false,      paste:false,    canDelete:false},
            "mc-set-value":{name:"值",canZoom:true,assistZoom:true,dragInto:true,canNotOperate:true,duplicate:false, copy:false,      paste:true,    canDelete:false,childrenLimit:1},


        /*样式名*/
        "root":{name:"根面板",dragInto:true,duplicate:false, copy:false,      paste:true,    canDelete:false},
        "mc-if-container":    {name:"条件分支语句",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,duplicateAttr:[],        copy:true,       paste:true, canDelete:true,assistDelete:true,onlyParents:executeBlockParents, onlyChildren:['mc-if','mc-else-if','mc-else'],assistAdd:true,addOneItems:[{"":[{html:"<div class='layui-col-xs12 mc-else-if'><div class='layui-col-xs12 mc-condition-groups'><div class='layui-inline mc-condition'><div class='layui-inline mc-set-value'></div><strong class='mc-compare-operator'>等于</strong><div class='layui-inline mc-set-value'></div></div></div><div class='layui-col-xs12 mc-if-execute'></div></div>",focus:false,after:{identifier:['mc-if-else','mc-if']}     }]}]     },
            "mc-if":    {name:"如果",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false,onlyParents:['mc-if-container'], onlyChildren:['mc-condition'],onlyNext: ['mc-else-if','mc-else']    },
            "mc-else-if":    {name:"或者如果",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,duplicateAttr:[],assistDuplicate:true,        copy:false,       paste:false, canDelete:true,assistDelete:true,onlyParents:['mc-if-container'], onlyChildren:['mc-condition'],onlyPrev:['mc-if'],onlyNext:['mc-else']    },
            "mc-else":    {name:"其他条件",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,duplicateAttr:[],        copy:true,       paste:false, canDelete:true,assistDelete:true,onlyParents:['mc-if-container'], onlyChildren:['mc-condition'],onlyPrev:['mc-if','mc-else-if']    },
            "mc-if-execute":{name:"则执行",canZoom:true,assistZoom:true,dragInto:true,duplicate:false, copy:false,      paste:true,    canDelete:false},


            "mc-condition-groups":{name:"满足条件组集合",canZoom:true,assistZoom:true,dragInto:true,duplicate:false, copy:false,      paste:true,    canDelete:false,onlyParents:['mc-if','mc-else-if'],onlyChildren:['mc-condition-group','mc-logic-and','mc-logic-or','mc-logic-not'],assistAdd:true,addOneItems:[{"":[{html:'<strong class="mc-logic-and">并且</strong>'+_t.html.conditionGroup,focus:false     }]}] },
            "mc-condition-group":{name:"一组条件",canZoom:true,assistZoom:true,dragInto:true,duplicate:true,assistDuplicate:true, copy:false,      paste:false,    canDelete:true,assistDelete:true,assistAdd:true,addOneItems:[{'':[{html:'<strong class="mc-logic-and">并且</strong>'+_t.html.condition,focus:false}]}],onlyParents:['mc-condition-groups','mc-condition'],onlyChildren:['mc-condition','mc-logic-and','mc-logic-or','mc-logic-not']},
            "mc-condition":{name:"一个条件",canZoom:true,assistZoom:true,dragInto:true,duplicate:false, copy:false,      paste:false,    canDelete:true,assistDelete:true,onlyParents:['mc-condition-group'],childrenLimit:1},
            "mc-logic-and":{name:"逻辑运算符",treeExtraName:{attr:[],text:true},dragInto:false, copy:true,      paste:false,    canDelete:true},
            "mc-logic-or":{name:"逻辑运算符",treeExtraName:{attr:[],text:true},dragInto:false, copy:true,      paste:false,    canDelete:true},
            "mc-logic-not":{name:"逻辑运算符",treeExtraName:{attr:[],text:true},dragInto:false, copy:true,      paste:false,    canDelete:true},

        "mc-ajax":    {name:"接口调用",canZoom:true,assistZoom:true,dragInto:true,duplicate:true,duplicateAttr:[],        copy:true,       paste:false, canDelete:true,assistDelete:true,onlyParents:executeBlockParents, onlyChildren:['mc-ajax-params','mc-ajax-return','mc-ajax-url','mc-ajax-params','mc-ajax-thens']    },
            "mc-ajax-url":{name:"后端地址",dragInto:false,canNotOperate:true,duplicate:true, copy:true,      paste:true,    canDelete:false},
            "mc-ajax-method":{name:"方法",dragInto:false,canNotOperate:true,duplicate:true, copy:true,      paste:true,    canDelete:false},
            "mc-ajax-params":{name:"入参集合",canZoom:true,assistZoom:true,dragInto:true,canNotOperate:true,duplicate:false, copy:false,      paste:true,    canDelete:false,onlyParents:['mc-ajax'],onlyChildren:['mc-ajax-param'],assistAdd:true,addOneItems:[{"":[{html:'<div class="layui-col-xs12 mc-ajax-param"><input class="layui-input mc-ajax-param-name" type="text" readonly placeholder="参数名" /><input class="layui-input mc-ajax-param-value" type="text" readonly placeholder="参数值" /></div>',focus:false     }]}]},

            "mc-ajax-param":{name:"入参",dragInto:true,duplicate:true,assistDuplicate:true, copy:true,      paste:true,    canDelete:true,assistDelete:true, onlyParents:['mc-ajax-params'],onlyChildren:['mc-ajax-param-name','mc-ajax-param-value']},
            "mc-ajax-param-name":{name:"参数名",dragInto:false,canNotOperate:true,duplicate:true, copy:true,      paste:true,    canDelete:false},
            "mc-ajax-param-value":{name:"参数值",dragInto:false,canNotOperate:true,duplicate:true, copy:true,      paste:true,    canDelete:false},

            "mc-find-page-num":{name:"当前页码",dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false   },
            "mc-find-page-limit":{name:"返回条数",dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false    },
            "mc-find-page-total-count":{name:"是否返回总条数",dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false    },

            "mc-ajax-thens":{name:"返回处理",canZoom:true,assistZoom:true,dragInto:true,canNotOperate:true,duplicate:true, copy:true,      paste:true,    canDelete:false,assistAdd:true,addOneItems:[{"":[{html:'<div class="layui-col-xs12 mc-ajax-then"><input class="layui-input mc-ajax-then-page-field-not-array" type="text" readonly placeholder="页面普通变量" /><strong class="mc-math-set">=</strong><input class="layui-input mc-ajax-then-return-name" type="text" value="" readonly placeholder="返回字段"/></div>',focus:false     }]}]},
            "mc-ajax-then-translates":{name:"预处理字段集",canZoom:true,assistZoom:true,dragInto:true,duplicate:false, copy:false,      paste:false,    canDelete:true,assistDelete:true,onlyParents:['mc-ajax-thens'],onlyChildren:['mc-ajax-then-translate']},
            "mc-ajax-then-translate":{name:"友好字段",dragInto:false,duplicate:false, copy:false,      paste:false,    canDelete:true,onlyParents:['mc-ajax-then-translates']},

            "mc-ajax-then":{name:"赋值",canZoom:true,assistZoom:true,dragInto:true,duplicate:true,assistDuplicate:true, copy:false,      paste:false,    canDelete:true,assistDelete:true},

            "mc-ajax-then-page-field-not-array":{name:"页面普通变量",dragInto:false,duplicate:false, copy:false,      paste:false,    canDelete:false},
            "mc-ajax-then-page-field-array":{name:"页面数组变量",dragInto:false,duplicate:false, copy:false,      paste:false,    canDelete:false},
            "mc-ajax-then-page-field-page-total":{name:"记录总条数",dragInto:false,duplicate:false, copy:false,      paste:false,    canDelete:false},
            "mc-ajax-then-return-name":{name:"返回字段",dragInto:false,duplicate:false, copy:false,      paste:false,    canDelete:false},

            "mc-method-base":{name:"方法基础信息",dragInto:true,duplicate:false, copy:false,      paste:false,    canDelete:false},
            "mc-method-base-method-name":{name:"方法英文名称",dragInto:false,duplicate:false, copy:false,      paste:false,    canDelete:false},
            "mc-method-base-method-description":{name:"方法描述",dragInto:false,duplicate:false, copy:false,      paste:false,    canDelete:false},



        "mc-href":    {name:"页面跳转",canZoom:true,assistZoom:true,dragInto:true,duplicate:true,duplicateAttr:[],        copy:true,       paste:false, canDelete:true,assistDelete:true,onlyParents:executeBlockParents, onlyChildren:['mc-href-params','mc-href-url']    },
            "mc-href-url":{name:"跳转地址",dragInto:false,duplicate:false, copy:false,      paste:false,    canDelete:false},
            "mc-href-params":{name:"入参集合",dragInto:true,duplicate:false, copy:false,      paste:false,    canDelete:false,assistAdd:true,addOneItems:[{"":[{html:'<div class="layui-col-xs12 mc-href-param"><input class="layui-input mc-href-param-name" type="text" readonly placeholder="参数名" /><input class="layui-input mc-href-param-value" type="text" mc-is-variable readonly placeholder="参数值" /></div>',focus:false     }]}]},
            "mc-href-param":{name:"入参",dragInto:true,duplicate:true, copy:true,      paste:true,    canDelete:true,assistDelete:true},
            "mc-href-param-name":{name:"参数名",dragInto:false,canNotOperate:true,duplicate:false, copy:false,      paste:false,    canDelete:false},
            "mc-href-param-value":{name:"参数值",dragInto:false,canNotOperate:true,duplicate:false, copy:false,      paste:false,    canDelete:false},

        "mc-line":{name:"美化代码",canZoom:true,assistZoom:true,dragInto:true,duplicate:true, copy:true,      paste:true,    canDelete:true},

        "mc-compare":    {name:"比较语句",canZoom:true,assistZoom:true,dragInto:false,duplicate:true,duplicateAttr:[],        copy:false,       paste:false, canDelete:true,assistDelete:true,onlyParents:returnParents, onlyChildren:['mc-math-operator'].push(supportQianTao)},
            "mc-compare-operator":{name:"比较符",treeExtraName:{attr:[],text:true},dragInto:false, copy:true,      paste:false,    canDelete:false,canNotOperate:true},
            "mc-math-operator":{name:"数学运算符",dragInto:false,duplicate:true,duplicateAttr:[],        copy:true,       paste:false, canDelete:true,onlyParents:['mc-math']},

        "mc-return":{name:"返回不再执行后面语句",dragInto:false,duplicate:true, copy:true,      paste:true,    assistDelete:true,canDelete:true,onlyParents:executeBlockParents},
        //无返回
        "mc-util-alert":{name:"弹窗提示",treeExtraName:{attr:[],text:false},dragInto:false, copy:true,      paste:false,    canDelete:true,onlyParents:executeBlockParents},
        "mc-util-reload":{name:"页面刷新",treeExtraName:{attr:[],text:false},dragInto:false, copy:true,      paste:false,    canDelete:true,onlyParents:executeBlockParents},

        "mc-util-parse-int":{name:"转成整数",treeExtraName:{attr:[],text:true},dragInto:false, copy:true,      paste:false,    canDelete:true,onlyParents:returnParents,onlyChildren:supportQianTao},
        "mc-util-parse-float":{name:"转成小数",treeExtraName:{attr:[],text:true},dragInto:false, copy:true,      paste:false,    canDelete:true,onlyParents:returnParents,onlyChildren:supportQianTao},


        "mc-function":    {name:"方法函数",canZoom:true,assistZoom:true,dragInto:true,duplicate:true,duplicateAttr:[],        copy:true,       paste:false, canDelete:true,assistDelete:true,onlyParents:['root'], onlyChildren:['mc-function-head','mc-function-body']},
            "mc-function-head":{name:"方法头",canZoom:true,assistZoom:true,dragInto:true,canNotOperate:true,duplicate:false, copy:false,      paste:false,    canDelete:false,onlyChildren:['mc-function-name','mc-function-params'] },
            "mc-function-name":{name:"方法名",dragInto:false,canNotOperate:true,duplicate:false, copy:false,      paste:false,    canDelete:false},
            "mc-function-params":{name:"入参集",dragInto:true,canNotOperate:true,duplicate:false,assistDuplicate:false, copy:false,      paste:true,    canDelete:false,assistDelete:false, onlyParents:['mc-function-head'],onlyChildren:['mc-function-param'],assistAdd:true,addOneItems:[{"":[{html:'<input class="layui-input mc-function-param" type="text" readonly placeholder="参数" />',focus:false}]}]  },
            "mc-function-param":{name:"参数",dragInto:false,duplicate:true, copy:true,      paste:true,    canDelete:true,assistDelete:true},
            "mc-function-body":{name:"方法体",canZoom:true,assistZoom:true,dragInto:true,canNotOperate:true,duplicate:false, copy:false,      paste:true,    canDelete:false,},

/*这些可以自由拖入一些运算场景*/
        "mc-href-field":{name:"地址变量",treeExtraName:{attr:[],text:true},dragInto:false, copy:true,      paste:false,    canDelete:true,onlyParents:returnParents},
        "mc-function-field":{name:"事件变量",treeExtraName:{attr:[],text:true},dragInto:false, copy:true,      paste:false,    canDelete:true,onlyParents:returnParents},
        "mc-page-field":{name:"页面变量",treeExtraName:{attr:[],text:true},dragInto:false, copy:true,      paste:false,    canDelete:true,onlyParents:returnParents},
        "mc-variable":{name:"自定义变量",treeExtraName:{attr:[],text:true},dragInto:false, copy:true,      paste:false,    canDelete:true,onlyParents:returnParents},
        "mc-math":    {name:"公式",canZoom:true,assistZoom:true,dragInto:false,duplicate:false,duplicateAttr:[],        copy:true,       paste:false, canDelete:true,assistDelete:true,onlyParents:returnParents, onlyChildren:['mc-math-operator'].push(supportQianTao),assistAdd:true,addOneItems:[{"":[{html:'<strong class="mc-math-operator">+</strong><div class="layui-inline mc-set-value"></div>',focus:false     }]}]    },
        "mc-kuo-pair":    {name:"括号对",canZoom:true,assistZoom:true,dragInto:true,duplicate:false,duplicateAttr:[],        copy:true,       paste:false, canDelete:true,assistDelete:true,onlyParents:returnParents  },

    }


    /*右侧面板绘制*/
    this.rightPanel =
        [
            {
                title:"属性",
                active:true,/*默认聚焦*/
                width:"100%",
                content:{
                    "mc-compare-operator":[
                        {type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.TEXT    ,title:'比较符'  ,options:[{"大于":"大于"},{"大于等于":"大于等于"},{"等于":"等于"},{"不等于":"不等于"},{"小于":"小于"},{"小于等于":"小于等于"},],                                                            },
                    ],
                    "mc-logic-and":[
                        {type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.TEXT    ,title:'逻辑运算符'  ,options:[{"并且":"并且"},{"或者":"或者"}],                                                            },
                    ],
                    "mc-logic-or":[
                        {type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.TEXT    ,title:'逻辑运算符'  ,options:[{"并且":"并且"},{"或者":"或者"}],                                                            },
                    ],
                    "mc-ajax-url":[
                        {type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.ATTR    ,title:'接口地址' ,attrName:'value' ,options:[{"":"您还未配置任何接口"}],                                                            },
                        {type:this.type.TEXT         ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR	,title:'接口地址:自定义', attrName:'value'                },
                    ],
                    "mc-ajax-method":[
                        {type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.ATTR    ,title:'请求方法' ,attrName:'value' ,options:[{"get":"GET"},{"post":"POST"}],                                                            },
                    ],
                    "mc-method-base-method-name":[
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:false,change:this.change.ATTR  ,attrName:'value',title:'英文方法名称',tooltip:"",placeholder:""},
                    ],
                    "mc-method-base-method-description":[
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:false,change:this.change.ATTR  ,attrName:'value',title:'方法描述',tooltip:"",placeholder:""},
                    ],
                    "mc-ajax-param-name":[
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:false,change:this.change.ATTR  ,attrName:'value',title:'参数名',tooltip:"",placeholder:""},
                    ],
                    "mc-ajax-param-value":[
                        {type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.ATTR    ,title:'参数值' ,attrName:'value' ,options:[{"":"您还未配置任何接口"}],                                                            },
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:false,change:this.change.ATTR  ,attrName:'value',title:'参数值：自定义',tooltip:"",placeholder:""},
                        {type:this.type.SWITCH,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'是否变量',tooltip:"表示这个值会自动根据当前变量赋值"    ,options:[{"c":true,"n":"mc-is-variable","t":"变量|常量","u":false}]},
                    ],
                    "mc-find-page-num":[
                        {type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.ATTR    ,title:'当前多少页' ,attrName:'value' ,options:[{"":"您还未配置任何接口"}],                                                            },
                        {type:this.type.SLIDER,clearAttr:true       ,oneLine:false,change:this.change.ATTR ,attrName:'value'    ,title:'当前多少页',tooltip:""            ,extra:{min:0,max:2000}  },
                    ],
                    "mc-find-page-limit":[
                        {type:this.type.SLIDER,clearAttr:true       ,oneLine:false,change:this.change.ATTR ,attrName:'value'    ,title:'返回多少条',tooltip:"此处配置可能被动态传参替换，注意系统保护最大只能返回2000条"            ,extra:{min:1,max:2000}  },
                    ],
                    "mc-find-page-total-count":[
                        {type:this.type.SWITCH,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'是否返回总条数'    ,options:[{"c":'true',"n":"value","t":"是|否","u":'false'}]},
                    ],
                    "mc-ajax-then-page-field-not-array":[
                        {type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.ATTR    ,title:'页面普通变量' ,attrName:'value' ,options:[{"":"您还未配置任何接口"}],                                                            },
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:false,change:this.change.ATTR  ,attrName:'value',title:'页面普通变量：自定义',tooltip:"",placeholder:""},
                    ],
                    "mc-ajax-then-page-field-array":[
                        {type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.ATTR    ,title:'页面数组变量' ,attrName:'value' ,options:[{"":"您还未配置任何接口"}],                                                            },
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:false,change:this.change.ATTR  ,attrName:'value',title:'页面数组变量：自定义',tooltip:"",placeholder:""},
                    ],
                    "mc-ajax-then-return-name":[
                        {type:this.type.TEXT  ,clearAttr:false       ,oneLine:false,change:this.change.ATTR  ,attrName:'mc-comment',title:'注释',tooltip:"",placeholder:"",htmlAttrs:[{"readonly":"true"}]},
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:false,change:this.change.ATTR  ,attrName:'value',title:'返回数据：自定义',tooltip:"",placeholder:""},
                    ],
                    "mc-ajax-then-page-field-page-total":[
                        {type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.ATTR    ,title:'记录总条数' ,attrName:'value' ,options:[{"":"您还未配置任何接口"}],                                                            },
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:false,change:this.change.ATTR  ,attrName:'value',title:'记录总条数：自定义',tooltip:"",placeholder:""},
                    ],

                    "mc-util-alert":[
                        // {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.TEXT	,title:'提示文本'                },
                    ],
                    "mc-href-url":[
                        {type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.ATTR    ,title:'跳转地址' ,attrName:'value' ,options:[{"":"您还未配置任何接口"}],                                                            },
                        {type:this.type.TEXT         ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR	,title:'跳转地址:自定义', attrName:'value'                },
                    ],
                    "mc-href-param-name":[
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:false,change:this.change.ATTR  ,attrName:'value',title:'参数名',tooltip:"",placeholder:""},
                    ],
                    "mc-href-param-value":[
                        {type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.ATTR    ,title:'参数值' ,attrName:'value' ,options:[{"":"您还未配置任何接口"}],                                                            },
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:false,change:this.change.ATTR  ,attrName:'value',title:'参数值：自定义',tooltip:"",placeholder:""},
                        {type:this.type.SWITCH,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'是否变量',tooltip:"表示这个值会自动根据当前变量赋值"    ,options:[{"c":true,"n":"mc-is-variable","t":"变量|常量","u":false}]},
                    ],
                    "mc-math-operator":[
                        {type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.TEXT    ,title:'数学公式运算符'  ,options:[{"+":"加"},{"-":"减"},{"*":"乘"},{"/":"除"},{"%":"求余数"}],                                                            },
                    ],
                    "mc-set-value":[
                        {identifier:"variable",type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.TEXT    ,title:'变量值'  ,options:[],                                                            },
                        {type:this.type.TEXT         ,clearAttr:true       ,oneLine:false     ,change:this.change.TEXT	,title:'自定义字符串值',tooltip:'普通字符串务必使用\"\"包裹，例如\"中国\";如果是变量则不要使用\"\"包裹例如vueDate.id;数字如123',placeholder:'普通字符串务必使用&quot;&quot;包裹如:&quot;中国&quot;'                },
                        {type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.TEXT    ,title:'真假值'  ,options:[{"true":"true"},{"false":"false"}],                                                            },
                    ],
                    "mc-function-field":[
                        {identifier:"variable",type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.TEXT    ,title:'变量值'  ,options:[],                                                            },
                        {type:this.type.TEXT         ,clearAttr:true       ,oneLine:false     ,change:this.change.TEXT	,title:'自定义值'},

                    ],
                    "mc-page-field":[
                        {identifier:"variable",type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.TEXT    ,title:'变量值'  ,options:[],                                                            },
                        {type:this.type.TEXT         ,clearAttr:true       ,oneLine:false     ,change:this.change.TEXT	,title:'自定义值'},
                    ],
                    "mc-href-field":[
                        {identifier:"variable",type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.TEXT    ,title:'变量值'  ,options:[],                                                            },
                        {type:this.type.TEXT         ,clearAttr:true       ,oneLine:false     ,change:this.change.TEXT	,title:'自定义值'},
                    ],
                    "mc-defined-variable":[
                        {type:this.type.TEXT         ,clearAttr:true       ,oneLine:false     ,change:this.change.TEXT	,title:'自定义变量名：英文字符',placeholder:'请使用英文字符'},
                    ],
                    "mc-set-variable":[
                        {type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.TEXT    ,title:'可用变量'  ,options:[],                                                            },
                    ],
                     "mc-function-name":[
                        {type:this.type.TEXT         ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR  ,title:'方法名', attrName:'value'},
                    ],
                     "mc-function-param":[
                        {type:this.type.TEXT         ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR  ,title:'参数名', attrName:'value'},
                    ]
                }
            }
        ]
}

Constant.prototype.refresh = function(){
    this._autoSetComponentId();
    this.componentMap = this.setComponentMap();
}
Constant.prototype.getComponents = function(){
    return this.components;
}
/**
 * 自动设置id 避免再手动配置
 * @private
 */
Constant.prototype._autoSetComponentId = function(){
    var idx = 1;
    for(var i=0;i<this.components.length;i++){
        var item = this.components[i];
        var children = item.children;
        if(children!=null && children.length>0){
            for(var j=0;j<children.length;j++){
                var child = children[j];
                child.id = (idx++)+"";
            }
        }
    }
}


Constant.prototype.getRightPanel = function(){
    return this.rightPanel;
}
Constant.prototype.getSettings = function(){
    return this.settings;
}

Constant.prototype.setComponentMap = function(){
    var mapping = {}
    for(var i=0;i<this.components.length;i++){
        var item = this.components[i];
        var children = item.children;
        if(children!=null && children.length>0){
            for(var j=0;j<children.length;j++){
                var child = children[j];
                mapping[child.id] = child;
            }
        }
    }
    return mapping;
}
Constant.prototype.getComponentMap = function(){
    return this.componentMap;
}

Constant.prototype.getRightPanel = function(){
    return this.rightPanel;
}

Constant.prototype.getTagClassMapping = function(){
    return this.tagClassMapping;
}
Constant.prototype.getChange = function () {
    return this.change;
}
Constant.prototype.getType = function () {
    return this.type;
}
Constant.prototype.getResponsiveList = function () {
    return this.responsiveList;
}
Constant.prototype.getResponsive = function () {
    return this.responsive;
}
Constant.prototype.getUiType = function () {
    return this.UI_TYPE;
}
Constant.prototype.getRightConfig = function (identifier, attrName) {
    var configs = [];
    for(var i=0;i<this.rightPanel.length;i++){
        var content = this.rightPanel[i].content;
        var arr = content[identifier];
        if(arr){
            for(var j=0;j<arr.length;j++){
                if(arr[j].attrName==attrName){
                    configs.push(arr[j]);
                }
            }
        }
    }
    return configs;
}
