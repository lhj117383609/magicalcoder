/*常量池*/
function Constant(){
    var env = APPLICATION_ENV.getEnv();
    var envConstantSettings = env.constant.settings;
    this.type = env.constant.type;
    this.change = env.constant.change;
    /*全局设置*/
    this.settings = {
        navigateTree:envConstantSettings.navigateTree,
        styleTool:envConstantSettings.styleTool,
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
            link:["assets/drag/ui/vuetify/2.2.15/googlerobotfont.min.css","assets/drag/ui/vuetify/2.2.15/materialdesignicons.min.css","assets/drag/ui/vuetify/2.2.15/vuetify.min.css","assets/drag/ui/magicalcoder/1.1.0/magicalcoder.css"],
            //预览页<head></head>内的脚本地址
            headJs:[],
            //预览页<body></body>内的脚本地址
            bodyJs:[
                "assets/drag/js/lib/echarts/4.6.0/echarts.min.js",
                "assets/drag/js/lib/echarts/datatool.min.js",
                "assets/drag/ui/magicalcoder/1.1.0/magicalcoder.js",
                "assets/drag/js/lib/vue/vue.js",
                "assets/drag/ui/vuetify/2.2.15/vuetify.js",
                "assets/drag/js/lib/vue/axios.js"
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

    this.UI_TYPE = 7;
    this.UI_NAME = "vuetify";
    this.UI_FRAME = "vue";
    /*响应式布局*/
    this.responsive = {
        XS:"xs",
        SM:"sm",
        MD:"md",
        LG:"lg",
        XL:"xl",
    }
    this.responsiveList = [
        {id:this.responsive.XS,name:"手机",width:"588px",height:"100%",icon:"assets/drag/img/header/phone1.png"},
        {id:this.responsive.SM,name:"手机到平板",width:"768px",height:"100%",icon:"assets/drag/img/header/paid1.png"},
        {id:this.responsive.MD,name:"平板",width:"992px",height:"100%",icon:"assets/drag/img/header/notebook2.png"},
        {id:this.responsive.LG,name:"笔记本",width:"1200px",height:"100%",icon:"assets/drag/img/header/pc1.png"},
        {id:this.responsive.XL,name:"电脑",width:"100%",height:"100%",icon:"assets/drag/img/header/pc1.png",checked:true}
    ]

    /*自定义的组件*/
    this.components = [
        {
            name:"统计图表",
            children:[
                {
                    name:"线性图",
                    icon:"assets/drag/img/left/line.png",
                    html:"<div class='mc-echarts-line' style='height:400px;'></div>"
                },{
                    name:"条形图",
                    icon:"assets/drag/img/left/bar.png",
                    html:"<div class='mc-echarts-bar' style='height:400px;'></div>"
                },{
                    name:"饼图",
                    icon:"assets/drag/img/left/pie.png",
                    html:"<div class='mc-echarts-pie' style='height:400px;'></div>"
                },{
                    name:"散点图",
                    icon:"assets/drag/img/left/scatter.png",
                    html:"<div class='mc-echarts-scatter' style='height:400px;'></div>"
                },{
                    name:"雷达图",
                    icon:"assets/drag/img/left/radar.png",
                    html:"<div class='mc-echarts-radar' style='height:400px;'></div>"
                },{
                    name:"K线图",
                    icon:"assets/drag/img/left/candlestick.png",
                    html:"<div class='mc-echarts-k' style='height:400px;'></div>"
                },{
                    name:"树图",
                    icon:"assets/drag/img/left/tree.png",
                    html:"<div class='mc-echarts-tree' style='height:400px;'></div>"
                },{
                    name:"漏斗图",
                    icon:"assets/drag/img/left/funnel.png",
                    html:"<div class='mc-echarts-funnel' style='height:400px;'></div>"
                },{
                    name:"仪表盘",
                    icon:"assets/drag/img/left/gauge.png",
                    html:"<div class='mc-echarts-gauge' style='height:400px;'></div>"
                },{
                    name:"盒须图",
                    icon:"assets/drag/img/left/boxplot.png",
                    html:"<div class='mc-echarts-boxplot' style='height:400px;'></div>"
                },{
                    name:"旭日图",
                    icon:"assets/drag/img/left/sunburst.png",
                    html:"<div class='mc-echarts-sunburst' style='height:400px;'></div>"
                },{
                    name:"矩形树图",
                    icon:"assets/drag/img/left/treemap.png",
                    html:"<div class='mc-echarts-treemap' style='height:400px;'></div>"
                },{
                    name:"象形柱图",
                    icon:"assets/drag/img/left/pictorialbar.png",
                    html:"<div class='mc-echarts-pictorialbar' style='height:400px;'></div>"
                },{
                    name:"桑基图",
                    icon:"assets/drag/img/left/sankey.png",
                    html:"<div class='mc-echarts-sankey' style='height:400px;'></div>"
                },{
                    name:"平行坐标",
                    icon:"assets/drag/img/left/parallel.png",
                    html:"<div class='mc-echarts-parallel' style='height:400px;'></div>"
                },{
                    name:"主题河流",
                    icon:"assets/drag/img/left/themeriver.png",
                    html:"<div class='mc-echarts-themeriver' style='height:400px;'></div>"
                },{
                    name:"数据集图",
                    icon:"assets/drag/img/left/dataset.png",
                    html:"<div class='mc-echarts-dataset' style='height:400px;'></div>"
                },
            ]
        },
        {
            name:"容器",
            children:[
                {
                    name:"窗体",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<div class='mc-window''></div>",
                },
                {
                    name:"自由定位",
                    icon:"assets/drag/img/left/freedom1.png",
                    html:"<div class='mc-ui-absolute-pane'></div>",
                },
            ]
        },
        {
            name:"常用",
            children:[
                //卡片
                {
                    name:"卡片",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<v-card>vuetify卡片</v-card>",
                },
                {
                    name:"卡片2",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<v-card><v-card-title>标题</v-card-title><v-card-subtitle>子标题</v-card-subtitle><v-card-text>文本</v-card-text><v-card-actions></v-card-actions></v-card>",
                },
                //提示框
                {
                    name:"提示框",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<v-alert>vuetify提示框</v-alert>",
                },
                //自动补全
                {
                    name:"自动补全",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<v-autocomplete>vuetify自动补全</v-autocomplete>",
                },
                //自动完成
                {
                    name:"组合框",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<v-combobox>vuetify组合框</v-combobox>",
                },
                //文件上传
                {
                    name:"文件上传",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<v-file-input>vuetify文件上传</v-file-input>",
                },
                //表单
                {
                    name:"表单",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<v-form>vuetify表单</v-form>",
                },
                //输入 TODO 输入存在问题
                {
                    name:"输入",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<v-input>vuetify输入</v-input>",
                },
                //溢出按钮
                {
                    name:"溢出按钮",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<v-overflow-btn>vuetify输入</v-overflow-btn>",
                },


                {
                    name:"按钮",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<v-btn>vuetify按钮</v-btn>",
                },
                {
                    name:"静态表格",
                    icon:"assets/drag/img/left/form1.png",
                    html:"<table class='mc-table'><thead><tr><th>列1</th><th>列2</th><th>列3</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table>"
                },

            ]
        },
        {
            name:"更多组件均持续添加中",
            children:[
                {
                    name:"音频",
                    icon:"",
                    html:"<audio controls='controls'></audio>"
                },
                {
                    name:"视频",
                    icon:"",
                    html:"<video controls='controls'></video>"
                },{
                    name:"网页",
                    icon:"",
                    html:"<iframe src='http://www.magicalcoder.com' frameborder='0'></iframe>"
                },
            ]
        }
    ]
    /*
    更多细节 参考文档
    根据标签名索引 dragInto:是否允许拖拽插入其他元素 duplicate:是否允许向下复制 不支持函数 onlyParents:[key]只能插入到哪些父结构下   onlyChildren:[key] =只接受哪些孩子结构插入进来 bind:用于vue的动态绑定参数名,针对一些控件必须绑定数据才行否则vue报错*/
    /*addOneItems：新增一个条目 ctrl+i array key:新增到哪个identifier下,空表示当前节点的children下 value:有时会新增多个自孩子，html:要添加进去的孩子结构 focus代表添加后是否聚焦孩子 after:{identifier:''} 插入遇到的identifier后 before:{identifier:''} 插入遇到的identifier前*/
    /*treeExtraName：额外追加到导航树的内容  attr:当前结构的属性名的值 text:是否追加第一个文本内容
    * assistAdd:true|false 辅助新增孩子按钮 assistDuplicate:true|false 辅助向下复制按钮 assistDelete:true|false 辅助删除按钮
    * canNotOperate:true|false 设置当前机构是否允许拖拽 默认false
    */
    this.tagClassMapping = {
        /*标签名:行为*/
        /*容器*/
        "mc-ui-absolute-pane":{name:"自由定位",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,assistDuplicate:false,duplicateAttr:[],        copy:true,       paste:true,assistDelete:true, canDelete:true          },
        /*标签名:行为*/
        // 卡片
        "v-card":          {name:"卡片",canZoom:true,/*快速移动*/assistZoom:true,treeExtraName:{attr:["header"]},   dragInto:true,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,assistDelete:true,  canDelete:true /* ,onlyChildren:["v-card-title","v-card-subtitle","v-card-text","v-card-actions"] */ },

        //TODO 下边四个 跟card 这个地方存在问题：父子之间 关系如何 配置
        "v-card-title":           {name:"名片标题字体大小和填充",canZoom:true,assistZoom:true,      dragInto:true,       duplicate:true,duplicateAttr:[],        copy:false,      paste:true,  canDelete:true,assistDelete:true,onlyParents:["v-card"]                                                               },
        "v-card-subtitle":           {name:"卡片字幕字体大小和填充",canZoom:true,assistZoom:true,      dragInto:true,       duplicate:true,duplicateAttr:[],        copy:false,      paste:true,  canDelete:true,assistDelete:true,onlyParents:["v-card"]                                                               },
        "v-card-text":           {name:"卡中的文本内容",canZoom:true,assistZoom:true,      dragInto:true,       duplicate:true,duplicateAttr:[],        copy:false,      paste:true,  canDelete:true,assistDelete:true,onlyParents:["v-card"]                                                               },
        "v-card-actions":           {name:"放置卡片操作的容器",canZoom:true,assistZoom:true,      dragInto:true,       duplicate:true,duplicateAttr:[],        copy:false,      paste:true,  canDelete:true,assistDelete:true,onlyParents:["v-card"]                                                               },
        //提示框
        "v-alert":      {name:"提示框",treeExtraName:{attr:[],text:true},     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,      },
        //自动补全
        "v-autocomplete":         {name:"自动补全",treeExtraName:{attr:["v-model"]},    dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,    bind:{"v-model":'""'} },
        "v-combobox":         {name:"组合框",treeExtraName:{attr:["v-model"]},    dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,    bind:{"v-model":'""'} },
        //文件上传
        "v-file-input":        {name:"文件上传",treeExtraName:{attr:[],text:true},     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,      },
        //form表单
        "v-form":          {name:"表单",canZoom:true,assistZoom:true,      dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,    canDelete:true,     },
        //输入
        "v-input":         {name:"输入", assistZoom:true,     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true },
        //溢出按钮
        "v-overflow-btn":{name:"溢出按钮",treeExtraName:{attr:[],text:true},     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,      },

        // <v-combobox>

        "v-btn":        {name:"按钮",treeExtraName:{attr:[],text:true},     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,      },

        /*样式*/
        "mc-root":{name:"根面板",dragInto:true,duplicate:false, copy:false,      paste:true,    canDelete:false},
        "template":{name:"Template模板",dragInto:true,duplicate:false, copy:true,      paste:true,    canDelete:true},
        "mc-window":{name:"窗体",dragInto:true,duplicate:false, copy:false,      paste:true,    canDelete:true,assistDelete:true},
        "magical-coder-tmp":{name:"临时包裹",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "magical-drag-tmp-submenu-name":{name:"子菜单名称",dragInto:false,duplicate:false, copy:false,      paste:false,    canDelete:false,assistDelete:true},
        /*echarts*/
        "mc-echarts-bar":{name:"条形图",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "mc-echarts-line":{name:"线性图",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "mc-echarts-pie":{name:"饼图",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "mc-echarts-scatter":{name:"散点图",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "mc-echarts-radar":{name:"雷达图",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "mc-echarts-k":{name:"K线图",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "mc-echarts-tree":{name:"树图",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "mc-echarts-funnel":{name:"漏斗图",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "mc-echarts-gauge":{name:"仪表盘",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "mc-echarts-boxplot":{name:"盒须图",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "mc-echarts-sunburst":{name:"旭日图",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "mc-echarts-treemap":{name:"矩阵树图",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "mc-echarts-pictorialbar":{name:"象形柱图",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "mc-echarts-sankey":{name:"桑基图",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "mc-echarts-parallel":{name:"平行坐标",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "mc-echarts-themeriver":{name:"主题河流",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "mc-echarts-dataset":{name:"数据集图",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},

        "i":{primary:0,name:"图标",   dragInto:false, duplicate:true,duplicateAttr:[],         copy:true,      paste:false,    canDelete:true     },
        "span":{primary:0,name:"文字",   dragInto:false, duplicate:true,duplicateAttr:[],         copy:true,      paste:false,    canDelete:true     },
        "p":    {name:"段落",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:true,  canDelete:true    },
        "small":  {name:"小字",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:true,  canDelete:true    },
        "mark":   {name:"高亮",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:true,  canDelete:true    },
        "del":    {name:"中划线",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:true,  canDelete:true    },
        "u":      {name:"下划线",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:true,  canDelete:true    },
        "em":     {name:"斜体",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:true,  canDelete:true    },
        "strong": {name:"加粗",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:true,  canDelete:true    },
        "table": {name:"静态表格",dragInto:false,canZoom:true,assistZoom:true,assistDelete:true,  duplicate:true,duplicateAttr:[],   copy:true,      paste:false,  canDelete:true    },
        "thead": {name:"表格头部",dragInto:false,assistDelete:true,  duplicate:false,duplicateAttr:[],   copy:true,      paste:true,  canDelete:true,onlyChildren:['tr']    },
        "tbody": {name:"表格体",dragInto:false,assistDelete:true,assistAdd:true,  duplicate:false,duplicateAttr:[],   copy:true,      paste:true,  canDelete:true,onlyChildren:['tr']    },
        "tfoot": {name:"表格脚",dragInto:false,assistDelete:true,assistAdd:true, duplicate:false,duplicateAttr:[],   copy:true,      paste:true,  canDelete:true,onlyChildren:['tr']    },
        "tr": {name:"表格行",dragInto:false,assistDelete:true,assistAdd:true,assistDuplicate:true,  duplicate:true,duplicateAttr:[],   copy:true,      paste:false,  canDelete:true,onlyChildren:['th','td']    },
        "th": {name:"表格标题",dragInto:true,assistDelete:false,assistAdd:false,assistDuplicate:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:false,  canDelete:true,onlyParents:['tr']    },
        "td": {name:"单元格",dragInto:true,assistDelete:false,assistAdd:false,assistDuplicate:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:false,  canDelete:true,onlyParents:['tr']    },
        "audio": {name:"音频",dragInto:false,assistDelete:false,assistAdd:false,assistDuplicate:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:false,  canDelete:true ,tmpWrapTag:'div',tmpWrapType:0,tmpWrapShade:true  },
        "video": {name:"视频",dragInto:false,assistDelete:false,assistAdd:false,assistDuplicate:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:false,  canDelete:true ,tmpWrapTag:'div',tmpWrapType:0,tmpWrapShade:true  },
        "iframe": {name:"网页",dragInto:false,assistDelete:false,assistAdd:false,assistDuplicate:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:false,  canDelete:true ,tmpWrapTag:'div',tmpWrapType:0,tmpWrapShade:true  },
    }
    //绑定通用v-for
    for(var key in this.tagClassMapping){
        var mapping = this.tagClassMapping[key];
        var bind = mapping.bind;
        if(!bind){
            bind = {'v-for':"[]"}
        }else {
            bind['v-for']="[]";
        }
        mapping.bind = bind;
    }
    /*右侧面板绘制*/
    /*clearAttr:删除按钮 extend:扩展配置按 extra:layui组件对应的扩展配置  attrName:属性名 oneLine:是否在一行 options: [n:name(属性名|样式名) t:title（标题） c:checked时候的值(string|boolean) u:unchecked时候的值(string|boolean)]  extend:true是否启用扩展配置 ,extendKey:"icon",如果是扩展配置icon；htmlAttrs:[{"readonly":"false"}] ,validate:{"^[a-zA-Z][a-zA-Z0-9_]*$":"请输入字母数字或者下划线"}校验*/
    this.rightPanel =
        [
            {
                title:"属性",
                active:true,/*默认聚焦*/
                width:"50%",
                content:{
                    "mc-ui-absolute-pane":[],
                    "mc-root":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'自由定位',options:[{"c":"mc-ui-absolute-pane","n":"","t":"是否开启","u":""}]}
                    ],
                    "v-card":[
                        {type:this.type.CHECKBOX          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'主题'    ,tooltip:'设置主题'      ,options:[{n:"dark",t:"暗色",c:true,u:false,dv:false},{n:"light",t:"浅色",c:true,u:false,dv:false}]},
                        {type:this.type.CHECKBOX          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'状态'    ,tooltip:'设置状态'      ,options:[{n:"flat",t:"移除卡片海拔",c:true,u:false,dv:false},{n:"hover",t:"悬停时将应用 4dp的海拔",c:true,u:false,dv:false},{n:"link",t:"组件为链接",c:true,u:false,dv:false},{n:"outlined",t:"去除卡片的海拔阴影并添加细边框",c:true,u:false},{n:"raised",t:"指定较高的默认海拔（8dp）",c:true,u:false},{n:"shaped",t:"在卡片的左上角和右下角应用较大的边框半径",c:true,u:false},{n:"tile",t:"删除组件的 border-radius",c:true,u:false}]},
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'控件颜色'  ,attrName:'color'                                                                         },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'组件海拔'     ,attrName:':elevation'          ,extra:{min:0,max:20000}                                               },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'组件高度'     ,attrName:'height'          ,extra:{min:0,max:20000}                                              },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'加载器高度'     ,attrName:'loader-height'                                                        },
                        {type:this.type.FILEUPLOAD,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,attrName:'img'     ,title:'背景图片地址'},
                        {type:this.type.CHECKBOX          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'开启进度条'    ,tooltip:'设置开启进度条'      ,options:[{n:"loading",t:"开启进度条",c:true,u:false,dv:false}]},
                        //TODO 进度条颜色选择还存在问题
                        {type:this.type.SELECT    ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR    ,attrName:':loading' ,title:'进度条'    ,tooltip:'设置进度条'      ,options:[{"primary":"主要"},{"secondary":"次要"},{"success":"成功"},{"info":"信息"},{"warning":"警告"},{"error":"错误"}]},
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'组件最大高度'     ,attrName:'max-height' ,extra:{min:0,max:20000}                                                       },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'组件最小高度'     ,attrName:'min-height' ,extra:{min:0,max:20000}                                                       },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'组件最大宽度'     ,attrName:'max-width'  ,extra:{min:0,max:20000}                                                      },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'组件最小宽度'     ,attrName:'min-width'  ,extra:{min:0,max:20000}                                                      },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'自定义元素标签'    ,attrName:'tag'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'指定 target 属性,只在使用 href 属性时应用'    ,attrName:'target'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'表示链接的目标路由'    ,attrName:'to'              },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'组件的宽度'     ,attrName:'width' ,extra:{min:0,max:20000}                                                       },
                    ],
                    "v-card-title":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.TEXT	,title:'文本'                },
                    ],
                    "v-card-subtitle":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.TEXT	,title:'文本'                },
                    ],
                    "v-card-text":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.TEXT	,title:'文本'                },
                    ],

                    "v-alert":[
                        //TODO  选择框 三个基本都有问题 边框 上下 正常  但是 左边 没有显示最左边  右边（right） 还是显示左边   |  |  |
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'边界'     ,attrName:'border'          ,options:[{"top ":"上"},{"right":"右"},{"bottom":"下"},{"left":"左"}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'类型'     ,attrName:'type'          ,options:[{"info ":"信息"},{"success":"成功"},{"warning":"警告"},{"error":"错误"}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'图标'     ,attrName:'icon'          ,options:[{"mdi-firework ":"mdi-firework"},{"mdi-material-design":"mdi-material-design"},{"mdi-vuetify":"mdi-vuetify"}]},
                        {type:this.type.CHECKBOX    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR     ,title:'主题'    ,tooltip:'设置主题'      ,options:[{n:"dark",t:"暗色",c:true,u:false,dv:false},{n:"light",t:"浅色",c:true,u:false,dv:false}]},
                        {type:this.type.CHECKBOX    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR     ,title:'状态'    ,tooltip:'设置状态'      ,options:[{n:"colored-border",t:"将定义的颜色应用于警报的边框",c:true,u:false,dv:false},{n:"dense",t:"隐藏警报图标并降低组件的高度",c:true,u:false,dv:false}//
                                ,{n:"dismissible",t:"添加可隐藏警报的关闭图标",c:true,u:false,dv:false},{n:"outlined",t:"使背景透明并应用薄边框",c:true,u:false,dv:false},{n:"prominent",t:"显示更大的垂直居中图标",c:true,u:false,dv:false},{n:"text",t:"将定义的颜色应用于文本和相同的低不透明度背景",c:true,u:false,dv:false}//
                                ,{n:"tile",t:"删除组件的边框半径",c:true,u:false,dv:false},{n:"value",t:"控制组件是可见的还是隐藏的",c:true,u:false,dv:true}]},
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'组件海拔'     ,attrName:':elevation'      ,extra:{min:0,max:20000}                                               },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'组件高度'     ,attrName:'height'          ,extra:{min:0,max:20000}                                              },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'组件的宽度'     ,attrName:'width'         ,extra:{min:0,max:20000}                                                       },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'组件最大高度'     ,attrName:'max-height' ,extra:{min:0,max:20000}                                                       },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'组件最小高度'     ,attrName:'min-height' ,extra:{min:0,max:20000}                                                       },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'组件最大宽度'     ,attrName:'max-width'  ,extra:{min:0,max:20000}                                                      },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'组件最小宽度'     ,attrName:'min-width'  ,extra:{min:0,max:20000}                                                      },
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'控件颜色'  ,attrName:'color'                                                                         },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'用于可忽略警报上的aria标签的文本'    ,attrName:'close-label'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置转换模式（不适用于转换组）'    ,attrName:'mode'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置元素的转换原点'    ,attrName:'origin'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'自定义元素标签'    ,attrName:'tag'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置组件转换'    ,attrName:'transition'              },
                    ],
                    //TODO 页面没有显示输入框 官网例子 https://vuetifyjs.com/zh-Hans/components/autocompletes/
                    "v-autocomplete":[
                        {type:this.type.CHECKBOX    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR     ,title:'主题'    ,tooltip:'设置主题'      ,options:[{n:"dark",t:"暗色",c:true,u:false,dv:false},{n:"light",t:"浅色",c:true,u:false,dv:false}]},
                        {type:this.type.CHECKBOX    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR     ,title:'状态'    ,tooltip:'设置状态'      ,options:[{n:"allow-overflow",t:"允许菜单溢出屏幕",c:true,u:false,dv:true},{n:"auto-select-first",t:"选中第一个选项",c:true,u:false,dv:false},{n:"autofocus",t:"启用自动聚焦",c:true,u:false,dv:false},{n:"cache-items",t:"保留items属性的项在本地的唯一副本",c:true,u:false,dv:false}
                                ,{n:"chips",t:"改变一个已选择项为小纸片（chips）的显示方式",c:true,u:false,dv:false},{n:"deletable-chips",t:"添加一个去除图标的到选定的小纸片（chips）",c:true,u:false,dv:false},{n:"clearable",t:"添加输入框清除功能",c:true,u:false,dv:false},{n:"dense",t:"降低输入高度",c:true,u:false,dv:false},{n:"disable-lookup",t:"禁用键盘查找",c:true,u:false,dv:false},{n:"disabled",t:"禁用输入",c:true,u:false,dv:false}
                                ,{n:"eager",t:"将强制组件内容在加载时呈现",c:true,u:false,dv:false},{n:"error",t:"将输入框设置为手动错误状态",c:true,u:false,dv:false},{n:"filled",t:"应用替代填充输入样式",c:true,u:false,dv:false},{n:"flat",t:"当使用solo或者solo-inverted属性时，移除添加到元素的标高（阴影）",c:true,u:false,dv:false},{n:"full-width",t:"指定输入类型为全宽度",c:true,u:false,dv:false},{n:"hide-details",t:"隐藏提示和验证错误",c:true,u:false,dv:false}
                                ,{n:"hide-no-data",t:"当没有要显示的选项时，隐藏菜单",c:true,u:false,dv:false},{n:"hide-selected",t:"不要在选择菜单中显示已选择的项",c:true,u:false,dv:false},{n:"multiple",t:"多选，接受数组作为值",c:true,u:false,dv:false},{n:"no-filter",t:"搜索时不要应用过滤",c:true,u:false,dv:false},{n:"open-on-clear",t:"一旦清除，选择菜单将打开或保持打开",c:true,u:false,dv:false},{n:"outlined",t:"将轮廓样式应用于输入",c:true,u:false,dv:false}
                                ,{n:"persistent-hint",t:"强制提示总是可见的",c:true,u:false,dv:false},{n:"readonly",t:"将输入设置为只读状态",c:true,u:false,dv:false},{n:"return-object",t:"将选择器的行为更改为直接返回对象",c:true,u:false,dv:true},{n:"reverse",t:"反转输入方向",c:true,u:false,dv:false},{n:"rounded",t:"向输入添加边框半径",c:true,u:false,dv:false},{n:"shaped",t:"如果 outlined 则为圆形，如果 filled 则增加 border-radius",c:true,u:false,dv:false}
                                ,{n:"single-line",t:"标签在 focus/dirty 上不移动",c:true,u:false,dv:false},{n:"small-chips",t:"使用 small 属性将选择的显示更改为纸片",c:true,u:false,dv:false},{n:"solo",t:"改变输入框的样式",c:true,u:false,dv:false},{n:"solo-inverted",t:"减少元素的不透明度",c:true,u:false,dv:false},{n:"success",t:"将输入设置为手动成功状态",c:true,u:false,dv:false},{n:"validate-on-blur",t:"延迟验证直到失去焦点的事件被触发",c:true,u:false,dv:false}]},
                        // TODO
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 显示线性进度条'     ,attrName:':loading'          ,options:[{"primary ":"主要"},{"secondary":"次要"},{"success":"成功"},{"info ":"信息"},{"warning":"警告"},{"error":"错误"}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 在组件上附加一个图标'    ,attrName:'append-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 在组件的外部添加一个图标'    ,attrName:'append-outer-icon'              },
                        // {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 更改输入的背景颜色'    ,attrName:'background-color'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 当使用 clearable 且有输入值时应用'    ,attrName:'clear-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 将输入框置于错误状态，并传入自定义的错误信息'    ,attrName:'error-messages'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 提示文本'    ,attrName:'hint'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 组件上的 DOM id'    ,attrName:'id'              },
                        // {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 选中项目的颜色'    ,attrName:'item-color'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 禁用 items 的属性值'    ,attrName:'item-disabled'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 items属性的文本值'    ,attrName:'item-text'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 items 值的属性'    ,attrName:'item-value'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 输入标签'    ,attrName:'label'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 将属性传递到 v-menu 组件'    ,attrName:'menu-props'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 显示消息列表或消息（如果使用字符串）'    ,attrName:'messages'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 当没有数据时显示的文本'    ,attrName:'no-data-text'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 输入的占位符文本'    ,attrName:'placeholder'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 显示前缀'    ,attrName:'prefix'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 在组件前添加一个图标'    ,attrName:'prepend-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 在组件的输入中添加一个图标'    ,attrName:'prepend-inner-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 搜索值'    ,attrName:'search-input'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 将输入设置为成功状态，并传递自定义成功消息'    ,attrName:'success-messages'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 显示后缀'    ,attrName:'suffix'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 输入类型'    ,attrName:'type'          ,dv:'text'    },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'为输入长度创建一个计数器'     ,attrName:'counter'      ,extra:{min:0,max:20000} ,dv:25                                              },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'一次性显示的错误总数'     ,attrName:'error-count'      ,extra:{min:0,max:20000}                                            },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'设置输入的高度'     ,attrName:'height'      ,extra:{min:0,max:20000}                                            },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'指定加载器的高度'     ,attrName:'loader-height'      ,extra:{min:0,max:20000}                                            },
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'设置 更改输入的背景颜色'  ,attrName:'background-color'                                                                         },
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'控件颜色'  ,attrName:'color'                                                                         },
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'设置 选中项目的颜色'  ,attrName:'item-color'                                                                         },

                    ],
                    "v-combobox":[
                        {type:this.type.CHECKBOX    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR     ,title:'主题'    ,tooltip:'设置主题'      ,options:[{n:"dark",t:"暗色",c:true,u:false,dv:false},{n:"light",t:"浅色",c:true,u:false,dv:false}]},
                        {type:this.type.CHECKBOX    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR     ,title:'状态'    ,tooltip:'设置状态'      ,options:[{n:"allow-overflow",t:"允许菜单溢出屏幕",c:true,u:false,dv:true},{n:"auto-select-first",t:"选中第一个选项",c:true,u:false,dv:false},{n:"autofocus",t:"启用自动聚焦",c:true,u:false,dv:false},{n:"cache-items",t:"保留items属性的项在本地的唯一副本",c:true,u:false,dv:false}
                                ,{n:"chips",t:"改变一个已选择项为小纸片（chips）的显示方式",c:true,u:false,dv:false},{n:"deletable-chips",t:"添加一个去除图标的到选定的小纸片（chips）",c:true,u:false,dv:false},{n:"clearable",t:"添加输入框清除功能",c:true,u:false,dv:false},{n:"dense",t:"降低输入高度",c:true,u:false,dv:false},{n:"disable-lookup",t:"禁用键盘查找",c:true,u:false,dv:false},{n:"disabled",t:"禁用输入",c:true,u:false,dv:false}
                                ,{n:"eager",t:"将强制组件内容在加载时呈现",c:true,u:false,dv:false},{n:"error",t:"将输入框设置为手动错误状态",c:true,u:false,dv:false},{n:"filled",t:"应用替代填充输入样式",c:true,u:false,dv:false},{n:"flat",t:"当使用solo或者solo-inverted属性时，移除添加到元素的标高（阴影）",c:true,u:false,dv:false},{n:"full-width",t:"指定输入类型为全宽度",c:true,u:false,dv:false},{n:"hide-details",t:"隐藏提示和验证错误",c:true,u:false}
                                ,{n:"hide-no-data",t:"当没有要显示的选项时，隐藏菜单",c:true,u:false,dv:false},{n:"hide-selected",t:"不要在选择菜单中显示已选择的项",c:true,u:false,dv:false},{n:"multiple",t:"多选，接受数组作为值",c:true,u:false,dv:false},{n:"no-filter",t:"搜索时不要应用过滤",c:true,u:false,dv:false},{n:"open-on-clear",t:"一旦清除，选择菜单将打开或保持打开",c:true,u:false,dv:false},{n:"outlined",t:"将轮廓样式应用于输入",c:true,u:false,dv:false}
                                ,{n:"persistent-hint",t:"强制提示总是可见的",c:true,u:false,dv:false},{n:"readonly",t:"将输入设置为只读状态",c:true,u:false,dv:false},{n:"return-object",t:"将选择器的行为更改为直接返回对象",c:true,u:false,dv:true},{n:"reverse",t:"反转输入方向",c:true,u:false,dv:false},{n:"rounded",t:"向输入添加边框半径",c:true,u:false,dv:false},{n:"shaped",t:"如果 outlined 则为圆形，如果 filled 则增加 border-radius",c:true,u:false,dv:false}
                                ,{n:"single-line",t:"标签在 focus/dirty 上不移动",c:true,u:false,dv:false},{n:"small-chips",t:"使用 small 属性将选择的显示更改为纸片",c:true,u:false,dv:false},{n:"solo",t:"改变输入框的样式",c:true,u:false,dv:false},{n:"solo-inverted",t:"减少元素的不透明度",c:true,u:false,dv:false},{n:"success",t:"将输入设置为手动成功状态",c:true,u:false,dv:false},{n:"validate-on-blur",t:"延迟验证直到失去焦点的事件被触发",c:true,u:false,dv:false}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 显示线性进度条'     ,attrName:':loading'          ,options:[{"primary ":"主要"},{"secondary":"次要"},{"success":"成功"},{"info ":"信息"},{"warning":"警告"},{"error":"错误"}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 在组件上附加一个图标'    ,attrName:'append-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 在组件的外部添加一个图标'    ,attrName:'append-outer-icon'              },
                        // {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 更改输入的背景颜色'    ,attrName:'background-color'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 当使用 clearable 且有输入值时应用'    ,attrName:'clear-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 将输入框置于错误状态，并传入自定义的错误信息'    ,attrName:'error-messages'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 提示文本'    ,attrName:'hint'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 组件上的 DOM id'    ,attrName:'id'              },
                        // {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 选中项目的颜色'    ,attrName:'item-color'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 禁用 items 的属性值'    ,attrName:'item-disabled'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 items属性的文本值'    ,attrName:'item-text'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 items 值的属性'    ,attrName:'item-value'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 输入标签'    ,attrName:'label'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 将属性传递到 v-menu 组件'    ,attrName:'menu-props'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 显示消息列表或消息（如果使用字符串）'    ,attrName:'messages'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 当没有数据时显示的文本'    ,attrName:'no-data-text'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 输入的占位符文本'    ,attrName:'placeholder'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 显示前缀'    ,attrName:'prefix'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 在组件前添加一个图标'    ,attrName:'prepend-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 在组件的输入中添加一个图标'    ,attrName:'prepend-inner-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 搜索值'    ,attrName:'search-input'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 将输入设置为成功状态，并传递自定义成功消息'    ,attrName:'success-messages'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 显示后缀'    ,attrName:'suffix'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 输入类型'    ,attrName:'type'          ,dv:'text'    },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'为输入长度创建一个计数器'     ,attrName:'counter'      ,extra:{min:0,max:20000} ,dv:25                                              },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'一次性显示的错误总数'     ,attrName:'error-count'      ,extra:{min:0,max:20000}                                            },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'设置输入的高度'     ,attrName:'height'      ,extra:{min:0,max:20000}                                            },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'指定加载器的高度'     ,attrName:'loader-height'      ,extra:{min:0,max:20000}                                            },
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'设置 更改输入的背景颜色'  ,attrName:'background-color'                                                                         },
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'控件颜色'  ,attrName:'color'                                                                         },
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'设置 选中项目的颜色'  ,attrName:'item-color'                                                                         },
                    ],
                    "v-file-input":[
                        {type:this.type.CHECKBOX    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR     ,title:'主题'    ,tooltip:'设置主题'      ,options:[{n:"dark",t:"暗色",c:true,u:false,dv:false},{n:"light",t:"浅色",c:true,u:false,dv:false}]},
                        {type:this.type.CHECKBOX    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR     ,title:'状态'    ,tooltip:'设置状态'      ,options:[{n:"autofocus",t:"启用自动聚焦",c:true,u:false,dv:false},{n:"chips",t:"改变一个已选择项为小纸片（chips）的显示方式",c:true,u:false,dv:false},{n:"clearable",t:"添加输入框清除功能",c:true,u:false,dv:false}
                                ,{n:"dense",t:"降低输入高度",c:true,u:false,dv:false}
                                ,{n:"disabled",t:"禁用输入",c:true,u:false,dv:false}
                                ,{n:"error",t:"将输入框设置为手动错误状态",c:true,u:false,dv:false}
                                ,{n:"filled",t:"应用替代填充输入样式",c:true,u:false,dv:false}
                                ,{n:"flat",t:"当使用solo或者solo-inverted属性时，移除添加到元素的标高（阴影）",c:true,u:false,dv:false}
                                ,{n:"full-width",t:"指定输入类型为全宽度",c:true,u:false,dv:false}
                                ,{n:"hide-details",t:"隐藏提示和验证错误",c:true,u:false}
                                ,{n:"multiple",t:"允许选择多个文件",c:true,u:false,dv:false}
                                ,{n:"outlined",t:"将轮廓样式应用于输入",c:true,u:false,dv:false}
                                ,{n:"persistent-hint",t:"强制提示总是可见的",c:true,u:false,dv:false}
                                ,{n:"reverse",t:"反转输入方向",c:true,u:false,dv:false}
                                ,{n:"rounded",t:"向输入添加边框半径",c:true,u:false,dv:false}
                                ,{n:"shaped",t:"如果 outlined 则为圆形，如果 filled 则增加 border-radius",c:true,u:false,dv:false}
                                ,{n:"show-size",t:"设置所选文件的显示大小",c:true,u:false,dv:false}
                                ,{n:"single-line",t:"标签在 focus/dirty 上不移动",c:true,u:false,dv:false}
                                ,{n:"small-chips",t:"使用 small 属性将选择的显示更改为纸片",c:true,u:false,dv:false}
                                ,{n:"solo",t:"改变输入框的样式",c:true,u:false,dv:false}
                                ,{n:"solo-inverted",t:"减少元素的不透明度",c:true,u:false,dv:false}
                                ,{n:"success",t:"将输入设置为手动成功状态",c:true,u:false,dv:false}
                                ,{n:"validate-on-blur",t:"延迟验证直到失去焦点的事件被触发",c:true,u:false,dv:false}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 显示线性进度条'     ,attrName:':loading'          ,options:[{"primary ":"主要"},{"secondary":"次要"},{"success":"成功"},{"info ":"信息"},{"warning":"警告"},{"error":"错误"}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 在组件上附加一个图标'    ,attrName:'append-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 在组件的外部添加一个图标'    ,attrName:'append-outer-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 当使用 clearable 且有输入值时应用'    ,attrName:'clear-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 使用 counter 和 show-size 属性时显示的文本'    ,attrName:'counter-size-string'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 使用 counter 属性时显示的文字'    ,attrName:'counter-string'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 将输入框置于错误状态，并传入自定义的错误信息'    ,attrName:'error-messages'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 提示文本'    ,attrName:'hint'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 组件上的 DOM id'    ,attrName:'id'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 输入标签'    ,attrName:'label'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 显示消息列表或消息（如果使用字符串）'    ,attrName:'messages'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 输入的占位符文本'    ,attrName:'placeholder'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 显示前缀'    ,attrName:'prefix'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 在组件前添加一个图标'    ,attrName:'prepend-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 在组件的输入中添加一个图标'    ,attrName:'prepend-inner-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 将输入设置为成功状态，并传递自定义成功消息'    ,attrName:'success-messages'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 显示后缀'    ,attrName:'suffix'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 输入类型'    ,attrName:'type'          ,dv:'file'    },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'为输入长度创建一个计数器'     ,attrName:'counter'      ,extra:{min:0,max:20000} ,dv:25                                              },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'一次性显示的错误总数'     ,attrName:'error-count'      ,extra:{min:0,max:20000}                                            },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'设置输入的高度'     ,attrName:'height'      ,extra:{min:0,max:20000}                                            },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'指定加载器的高度'     ,attrName:'loader-height'      ,extra:{min:0,max:20000}                                            },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'在用省略号截断之前的文件名的长度'     ,attrName:'truncate-length'      ,extra:{min:0,max:20000}                                            },
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'控件颜色'  ,attrName:'color'                                                                         },
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'设置 更改输入的背景颜色'  ,attrName:'background-color'                                                                         },
                    ],
                    "v-form":[
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置状态'                                       ,options:[{n:"lazy-validation",t:"如果启用，value将永远是 true ，除非有可见的验证错误",c:"true",u:"false"},{n:"value ",t:"表示表单有效性的布尔值",c:"true",u:"false"}]},
                    ],
                    "v-input":[
                        {type:this.type.CHECKBOX    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR     ,title:'主题'    ,tooltip:'设置主题'      ,options:[{n:"dark",t:"暗色",c:true,u:false,dv:false},{n:"light",t:"浅色",c:true,u:false,dv:false}]},
                        {type:this.type.CHECKBOX    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR     ,title:'状态'    ,tooltip:'设置状态'      ,options:[
                                {n:"dense",t:"降低输入高度",c:true,u:false,dv:false}
                                ,{n:"disabled",t:"禁用输入",c:true,u:false,dv:false}
                                ,{n:"error",t:"将输入框设置为手动错误状态",c:true,u:false,dv:false}
                                ,{n:"hide-details",t:"隐藏提示和验证错误",c:true,u:false}
                                ,{n:"persistent-hint",t:"强制提示总是可见的",c:true,u:false,dv:false}
                                ,{n:"readonly",t:"将输入设置为只读状态",c:true,u:false,dv:false}
                                ,{n:"success",t:"将输入设置为手动成功状态",c:true,u:false,dv:false}
                                ,{n:"validate-on-blur",t:"延迟验证直到失去焦点的事件被触发",c:true,u:false,dv:false}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 显示线性进度条'     ,attrName:':loading'          ,options:[{"primary ":"主要"},{"secondary":"次要"},{"success":"成功"},{"info ":"信息"},{"warning":"警告"},{"error":"错误"}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 在组件上附加一个图标'    ,attrName:'append-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 将输入框置于错误状态，并传入自定义的错误信息'    ,attrName:'error-messages'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 提示文本'    ,attrName:'hint'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 组件上的 DOM id'    ,attrName:'id'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 输入标签'    ,attrName:'label'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 显示消息列表或消息（如果使用字符串）'    ,attrName:'messages'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 在组件前添加一个图标'    ,attrName:'prepend-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 将输入设置为成功状态，并传递自定义成功消息'    ,attrName:'success-messages'              },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'一次性显示的错误总数'     ,attrName:'error-count'      ,extra:{min:0,max:20000}                                            },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'设置输入的高度'     ,attrName:'height'      ,extra:{min:0,max:20000}                                            },
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'设置 更改输入的背景颜色'  ,attrName:'background-color'                                                                         },
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'控件颜色'  ,attrName:'color'                                                                         },
                    ],
                    //溢出控件
                    "v-overflow-btn":[
                        {type:this.type.CHECKBOX    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR     ,title:'主题'    ,tooltip:'设置主题'      ,options:[{n:"dark",t:"暗色",c:true,u:false,dv:false},{n:"light",t:"浅色",c:true,u:false,dv:false}]},
                        {type:this.type.CHECKBOX    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR     ,title:'状态'    ,tooltip:'设置状态'      ,options:[
                                {n:"allow-overflow",t:"允许菜单溢出屏幕",c:true,u:false,dv:true}
                                ,{n:"auto-select-first",t:"搜索时，总是选中第一个选项",c:true,u:false,dv:false}
                                ,{n:"autofocus",t:"启用自动聚焦",c:true,u:false,dv:false}
                                ,{n:"cache-items",t:"保留已经通过 items 属性的项在本地的唯一副本",c:true,u:false}
                                ,{n:"chips",t:"改变一个已选择项为小纸片（chips）的显示方式",c:true,u:false,dv:false}
                                ,{n:"clearable",t:"添加输入框清除功能",c:true,u:false,dv:false}
                                ,{n:"deletable-chips",t:"添加一个去除图标的到选定的小纸片（chips）",c:true,u:false,dv:false}
                                ,{n:"dense",t:"降低输入高度",c:true,u:false,dv:false}
                                ,{n:"disable-lookup",t:"禁用键盘查找",c:true,u:false,dv:false}
                                ,{n:"disabled",t:"禁用输入",c:true,u:false,dv:false}
                                ,{n:"eager",t:"将强制组件内容在加载时呈现",c:true,u:false,dv:false}
                                ,{n:"editable",t:"创建一个可编辑按钮",c:true,u:false,dv:false}
                                ,{n:"error",t:"将输入框设置为手动错误状态",c:true,u:false,dv:false}
                                ,{n:"filled",t:"应用替代填充输入样式",c:true,u:false,dv:false}
                                ,{n:"flat",t:"当使用solo或者solo-inverted属性时，移除添加到元素的标高（阴影）",c:true,u:false,dv:false}
                                ,{n:"full-width",t:"指定输入类型为全宽度",c:true,u:false,dv:false}
                                ,{n:"hide-details",t:"隐藏提示和验证错误",c:true,u:false,dv:undefined}
                                ,{n:"hide-no-data",t:"当没有要显示的选项时，隐藏菜单",c:true,u:false,dv:false}
                                ,{n:"hide-selected",t:"不要在选择菜单中显示已选择的项",c:true,u:false,dv:false}
                                ,{n:"multiple",t:"多选，接受数组作为值",c:true,u:false,dv:false}
                                ,{n:"no-filter",t:"搜索时不要应用过滤",c:true,u:false,dv:false}
                                ,{n:"open-on-clear",t:"当使用 clearable 属性, 一旦清除，选择菜单将打开或保持打开",c:true,u:false,dv:false}
                                ,{n:"outlined",t:"将轮廓样式应用于输入",c:true,u:false,dv:false}
                                ,{n:"persistent-hint",t:"强制提示总是可见的",c:true,u:false,dv:false}
                                ,{n:"readonly",t:"将输入设置为只读状态",c:true,u:false,dv:false}
                                ,{n:"return-object",t:"将选择器的行为更改为直接返回对象",c:true,u:false,dv:false}
                                ,{n:"reverse",t:"反转输入方向",c:true,u:false,dv:false}
                                ,{n:"rounded",t:"向输入添加边框半径",c:true,u:false,dv:false}
                                ,{n:"segmented",t:"创建一个分段按钮",c:true,u:false,dv:false}
                                ,{n:"shaped",t:"如果 outlined 则为圆形，如果 filled 则增加 border-radius。必须与 outlined 或 filled 一起使用",c:true,u:false,dv:false}
                                ,{n:"single-line",t:"标签在 focus/dirty 上不移动",c:true,u:false,dv:false}
                                ,{n:"small-chips",t:"使用 small 属性将选择的显示更改为纸片",c:true,u:false,dv:false}
                                ,{n:"solo",t:"改变输入框的样式",c:true,u:false,dv:false}
                                ,{n:"solo-inverted",t:"减少元素的不透明度，知道获得焦点",c:true,u:false,dv:false}
                                ,{n:"success",t:"将输入设置为手动成功状态",c:true,u:false,dv:false}
                                ,{n:"validate-on-blur",t:"延迟验证直到失去焦点的事件被触发",c:true,u:false,dv:false}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 显示线性进度条'     ,attrName:':loading'          ,options:[{"primary ":"主要"},{"secondary":"次要"},{"success":"成功"},{"info ":"信息"},{"warning":"警告"},{"error":"错误"}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 在组件上附加一个图标'    ,attrName:'append-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 在组件的外部添加一个图标'    ,attrName:'append-outer-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 当使用 clearable 且有输入值时应用'    ,attrName:'clear-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 将输入框置于错误状态，并传入自定义的错误信息'    ,attrName:'error-messages'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 提示文本'    ,attrName:'hint'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 组件上的 DOM id'    ,attrName:'id'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 禁用 items 的属性值'    ,attrName:'item-disabled'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 items属性的文本值'    ,attrName:'item-text'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 items 值的属性'    ,attrName:'item-value'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 可以是对象数组或字符串数组。当使用对象时，将寻找文本和值字段'    ,attrName:'item'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 输入标签'    ,attrName:'label'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 将属性传递到 v-menu 组件'    ,attrName:'menu-props'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 显示消息列表或消息'    ,attrName:'messages'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 当没有数据时显示的文本'    ,attrName:'no-data-text'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 输入的占位符文本'    ,attrName:'placeholder'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 显示前缀'    ,attrName:'prefix'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 在组件前添加一个图标'    ,attrName:'prepend-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 在组件的输入中添加一个图标'    ,attrName:'prepend-inner-icon'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 接受一个函数数组（array of functions），该数组接受一个输入值作为参数，并返回 true / false 或 a string 和一个错误消息'    ,attrName:'rules'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 搜索值'    ,attrName:'search-input'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 将输入设置为成功状态，并传递自定义成功消息'    ,attrName:'success-messages'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 显示后缀'    ,attrName:'suffix'              },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'设置 设置输入类型'    ,attrName:'type'         ,dv:'text'     },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'为输入长度创建一个计数器'     ,attrName:'counter'      ,extra:{min:0,max:20000}                                            },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'一次性显示的错误总数'     ,attrName:'error-count'      ,extra:{min:0,max:20000}                                            },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'设置输入的高度'     ,attrName:'height'      ,extra:{min:0,max:20000}                                            },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'指定加载器的高度'     ,attrName:'loader-height'      ,extra:{min:0,max:20000}                                            },
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'背景颜色'  ,attrName:'background-color'                                                                         },
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'控件颜色'  ,attrName:'color'                                                                         },
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'选中项目的颜色'  ,attrName:'item-color'                                                                         },
                    ],






                    "v-btn":[
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'控件颜色'  ,attrName:'color'                                                                         },

                    ]
                    ,
                    "i":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	  ,title:'文本'                },
                        {type:this.type.TEXT      ,clearAttr:false       ,oneLine:true     ,change:this.change.ATTR,attrName:'class'   ,title:'图标',extendKey:"icon",extend:true    }

                    ]
                    ,"a":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'href',title:'跳转地址'},
                        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'target',title:'打开方式',tooltip:"target",options:[{"_blank":"新窗口"},{"_self":"当前窗口"},{"_parent":"父窗口"},{"_top":"顶部窗口"}]},
                    ],"p":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                    ]
                    ,"small":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                    ]
                    ,"mark":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                    ]
                    ,"del":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                    ]
                    ,"u":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                    ]
                    ,"em":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                    ]
                    ,"strong":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                    ],
                    "th":[
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT    ,title:'标题'                },
                    ],
                     "td":[
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT    ,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'自由定位',options:[{"c":"mc-ui-absolute-pane","n":"","t":"是否开启","u":""}]}
                        
                    ],
                    "audio":[
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'src',title:'播放资源',tooltip:"",placeholder:""},
                        {type:this.type.CHECKBOX,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":"autoplay","n":"autoplay","t":"自动播放","u":false,dv:false},{"c":"loop","n":"loop","t":"循环播放","u":false,dv:false},{"c":"muted","n":"muted","t":"静音","u":false,dv:false}]},
                        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'preload',title:'预加载',tooltip:"属性规定是否在页面加载后载入音频。",options:[{"auto":"自动"},{"meta":"元数据"},{"none":"否"}]},
                    ],
                    "video":[
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'src',title:'播放资源',tooltip:"",placeholder:""},
                        {type:this.type.CHECKBOX,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":"autoplay","n":"autoplay","t":"自动播放","u":false,dv:false},{"c":"loop","n":"loop","t":"循环播放","u":false,dv:false},{"c":"muted","n":"muted","t":"静音","u":false,dv:false}]},
                        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'preload',title:'预加载',tooltip:"属性规定是否在页面加载后载入音频。",options:[{"auto":"自动"},{"meta":"元数据"},{"none":"否"}]},
                        {type:this.type.FILEUPLOAD,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'poster',title:'加载时等待图片'},
                    ],
                    "iframe":[
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'src',title:'网址',tooltip:"",placeholder:""},
                        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'scrolling',title:'滚动条',tooltip:"",options:[{"yes":"是"},{"no":"否"},{"auto":"自动"}]},
                        {type:this.type.CHECKBOX,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":"1","n":"frameborder","t":"边框","u":"0",dv:"1"}]},
                    ],
                    "el-alert":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR	,title:'标题'       ,attrName:'title' ,         },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR	,title:'辅助性文字'       ,attrName:'description' ,         },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'主题'       ,attrName:'type'                       ,options:[{"success":"成功","warning":"警告","info":"默认","error":"错误"}],                                                            },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR	,title:'关闭按钮自定义文本'       ,attrName:'close-text' ,         },
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'状态'       ,options:[{n:":closable",t:"是否可关闭",c:"true",u:"false",dv:"true"},{n:"center",t:"文字是否居中	",c:true,u:false},{n:"show-icon",t:"是否显示图标",c:true,u:false}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'选择提供的主题'       ,attrName:'effect'                       ,options:[{"light":"光亮","dark":"黑暗"}],                                                            },

                    ],
                    "mc-echarts-bar":
                        this.combineArray(
                            [
                                {type:this.type.HTML,html:'<fieldset class="layui-elem-field layui-elem-title"><legend>数据(series)</legend></fieldset>'},
                                {type:this.type.COLOR_PICKER    ,clearAttr:true         ,oneLine:true ,change:this.change.ATTR     ,title:'区域填充颜色'  ,attrName:'mc-attr-str-series-area_style-color' },
                                {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'线段状态',options:[{"c":"true","n":"mc-attr-bool-series-smooth","t":"平滑曲线","u":"false","dv":"false"}]},
                            ],this.echartsCommonConfig()),
                    "mc-echarts-line":
                        this.combineArray(
                            [
                                {type:this.type.HTML,html:'<fieldset class="layui-elem-field layui-elem-title"><legend>数据(series)</legend></fieldset>'},
                                {type:this.type.COLOR_PICKER    ,clearAttr:true         ,oneLine:true ,change:this.change.ATTR     ,title:'区域填充颜色'  ,attrName:'mc-attr-str-series-area_style-color' },
                                {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'线段状态',options:[{"c":"true","n":"mc-attr-bool-series-smooth","t":"平滑曲线","u":"false","dv":"false"}]},
                            ],this.echartsCommonConfig()),
                    "mc-echarts-pie":
                        this.combineArray(
                            [
                            ],this.echartsCommonConfig()),
                    "mc-echarts-scatter":
                        this.combineArray(
                            [
                            ],this.echartsCommonConfig()),
                    "mc-echarts-radar":
                        this.combineArray(
                            [
                            ],this.echartsCommonConfig()),
                    "mc-echarts-k":
                        this.combineArray(
                            [
                            ],this.echartsCommonConfig()),
                    "mc-echarts-tree":
                        this.combineArray(
                            [
                                {type:this.type.HTML,html:'<fieldset class="layui-elem-field layui-elem-title"><legend>数据(series)</legend></fieldset>'},
                                {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-series-layout',title:'排列方式',tooltip:"layout",options:[{"orthogonal":"正交"},{"radial":"径向"}]},
                                {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-series-orient',title:'正交方式',tooltip:"orient",options:[{"LR":"从左至右"},{"RL":"从右至左"},{"TB":"从上至下"},{"BT":"从下至上"}]},
                            ],this.echartsCommonConfig()),
                    "mc-echarts-funnel":
                        this.combineArray(
                            [
                                {type:this.type.HTML,html:'<fieldset class="layui-elem-field layui-elem-title"><legend>数据(series)</legend></fieldset>'},
                                {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-series-funnel_align ',title:'水平对齐',tooltip:"layout",options:[{"left":"左"},{"center":"居中"},{"right":"右"}]},

                            ],this.echartsCommonConfig()),
                    "mc-echarts-gauge":
                        this.combineArray(
                            [
                            ],this.echartsCommonConfig()),
                    "mc-echarts-boxplot":
                        this.combineArray(
                            [
                            ],this.echartsCommonConfig()),
                    "mc-echarts-sunburst":
                        this.combineArray(
                            [
                            ],this.echartsCommonConfig()),
                    "mc-echarts-treemap":
                        this.combineArray(
                            [
                            ],this.echartsCommonConfig()),
                    "mc-echarts-pictorialbar":
                        this.combineArray(
                            [
                            ],this.echartsCommonConfig()),
                    "mc-echarts-sankey":
                        this.combineArray(
                            [
                            ],this.echartsCommonConfig()),
                    "mc-echarts-parallel":
                        this.combineArray(
                            [
                            ],this.echartsCommonConfig()),
                    "mc-echarts-themeriver":
                        this.combineArray(
                            [
                            ],this.echartsCommonConfig()),
                    "mc-echarts-dataset":
                        this.combineArray(
                            [
                            ],this.echartsCommonConfig()),
                }
            },
            {
                title:"变量",
                active:false,/*默认聚焦*/
                width:"50%",
                content:{
                    "el-radio-group":[
                        {type:this.type.TEXT         ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'变量名*'     ,attrName:'v-model'                                                                               },
                    ],
                    "el-checkbox-group":[
                        {type:this.type.TEXT         ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'变量名*'     ,attrName:'v-model'                                                                               },
                    ],
                    "el-input":[
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'变量名*'     ,attrName:'v-model' ,validate:{"^[a-zA-Z][a-zA-Z0-9_]*$":"请输入字母数字或者下划线"}                                                              },
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'数据类型*'    ,attrName:'mc-db-type-v-model'                      ,options:[{"str":"字符串","int":"整数","long":"长整数","decimal":"小数","bool":"真假","date":"日期"}]                              },
                    ],
                    "el-input-number":[
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'变量名*'     ,attrName:'v-model'                                                             },
                    ],
                    "el-select":[
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'变量名'       ,attrName:'v-model'                                                      },
                    ],
                    "el-switch":[
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'变量名*'     ,attrName:'v-model'                                                      },
                    ],
                    "el-slider":[
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'变量名*'     ,attrName:'v-model'                                                      },
                    ],
                    "el-time-picker":[
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'变量名*'     ,attrName:'v-model'                                                      },
                    ],
                    "el-upload":[
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'变量名*'      ,attrName:':file-list'                                                      },
                    ],
                    "el-rate":[
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'变量名*'     ,attrName:'v-model'                                                      },
                    ],
                    "el-color-picker":[
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'变量名*'     ,attrName:'v-model'                                                      },
                    ],
                    "el-table":[
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'变量名*'     ,attrName:':data'                                                      },
                    ],
                    "el-table-column":[
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'变量名*'     ,attrName:'prop'                                                      },
                    ],
                    "el-time-select":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'变量名*'    ,attrName:'v-model'},
                    ],
                    "el-date-picker":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'变量名*'    ,attrName:'v-model'},
                    ],
                    "el-transfer":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'变量名*'    ,attrName:'v-model'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'数据源'    ,attrName:':data'},
                    ],
                    "el-tabs":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'选中选项卡变量名*'    ,attrName:'v-model'},
                    ],
                    "el-tab-pane":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'选项卡别名'    ,tooltip:'与选项卡绑定值 value 对应的标识符，表示选项卡别名'    ,attrName:'name'},
                    ],
                    "el-image":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'图片源'    ,tooltip:'图片源，同原生'    ,attrName:':src'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'开启图片预览功能'    ,tooltip:'开启图片预览功能'    ,attrName:':preview-src-list'},
                    ]
                    ,"el-steps":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'当前激活步骤'   ,attrName:':active'},
                    ]
                    ,"el-collapse":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'当前激活的面板'   ,attrName:'v-model'},
                    ]
                    ,"el-pagination":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'每页显示条目个数'   ,attrName:':page-size'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'总条目数'   ,attrName:':total'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'页码按钮的数量',   tooltip:'页码按钮的数量，当总页数超过该值时会折叠',attrName:':pager-count'},
                    ]
                    ,"el-badge":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'变量名'   ,attrName:':value'},
                    ]
                    ,"el-avatar":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'地址变量名'   ,attrName:':src'},
                    ],
                    "el-calendar":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'变量名'   ,attrName:'v-model'},
                    ]

                }
            }
        ]
    //一些通用配置
    var firstRightPanel = this.rightPanel[0];
    var content = firstRightPanel.content;
    for(var key in content){
        var config = content[key];
        config.push({type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'显隐'    ,options:[{"c":"false","n":"v-if","t":"隐藏","u":"true"}]});
        config.push({type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.STYLE,attrName:'z-index',title:'层级',tooltip:'当重叠时可以用数值决定哪个控件置于上层',validate:{"^[0-9]*$":"请使用数字"}})
        config.push({type:this.type.FILEUPLOAD,clearAttr:true,oneLine:true,change:this.change.STYLE,attrName:'background-image',title:'背景图',tooltip:'背景图片',callback:{coverValueToAttr:function(value,focusNode){return "url(\""+value+"\")"}}});
        config.push({type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.STYLE,attrName:'background-size',title:'背景图尺寸',tooltip:"背景图尺寸:配置规则 宽 高<br>100px 200px<br>20% 30%",placeholder:"例如:10px 10px"});
        config.push({type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.STYLE,attrName:'background-repeat',title:'背景图重复',tooltip:'背景图重复',options:[{"repeat":"默认"},{"repeat-x":"水平铺满"},{"repeat-y":"垂直铺满"},{"no-repeat":"仅显示一次"},{"inherit":"继承外层"}]});
        config.push({type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.STYLE,attrName:'background-position',title:'背景图重复',tooltip:'背景图定位',options:[{"center center":"居中"},{"left top":"靠上靠左"},{"center top":"靠上居中"},{"right top":"靠下靠右"},{"left center":"靠左居中"},{"right center":"靠右居中"},{"left bottom":"靠下靠左"},{"center bottom":"靠下居中"},{"right bottom":"靠下靠右"}]});
        config.push({type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.STYLE,attrName:'background-attachment',title:'滚动关联',tooltip:'滚动关联',options:[{"scroll":"跟随滚动"},{"fixed":"固定"}]});
    }
}
/*如果您改动了上述配置 记得调用此方法 刷新一下*/
Constant.prototype.refresh = function(){
    this._autoSetComponentId();
    this.componentMap = this.setComponentMap();
}
Constant.prototype.echartsCommonConfig = function(){
    var arr = [
        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-unknown-api',title:'数据源',tooltip:"",options:[{"api1":"数据源自己定义"},{"api2":"这只是个示例"},{"api3":"数据源可以来自后端"}]},
        {type:this.type.COLOR_PICKER    ,clearAttr:true         ,oneLine:true ,change:this.change.ATTR     ,title:'背景色'  ,attrName:'mc-attr-background_color' },
        {type:this.type.HTML,html:'<fieldset class="layui-elem-field layui-elem-title"><legend>标题(title)</legend></fieldset>'},
        // {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.ATTR	,title:'组件ID',attrName:'mc-attr-str-title-id',placeholder:"组件ID"               },
        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'标题状态',options:[{"c":"true","n":"mc-attr-bool-title-show","t":"显示标题","u":"false","dv":"true"}]},
        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.ATTR	,title:'主标题文本',attrName:'mc-attr-str-title-text',placeholder:"主标题文本"               },
        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.ATTR	,title:'主标题文本超链接',attrName:'mc-attr-str-title-link',placeholder:"主标题文本超链接"               },
        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-title-target',title:'超链接打开方式',tooltip:"",options:[{"self":"当前窗口打开"},{"blank":"新窗口打开"}]},
        {type:this.type.COLOR_PICKER    ,clearAttr:true         ,oneLine:true ,change:this.change.ATTR     ,title:'主标题文字颜色'  ,attrName:'mc-attr-title-text_style-color' },
        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-title-text_style-font_style',title:'主标题字体风格',tooltip:"",options:[{"normal":"普通"},{"italic":"斜体1"},{"oblique":"斜体2"}]},
        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-title-text_style-font_weight',title:'字体粗细',tooltip:"",options:[{"normal":"普通"},{"bold":"粗体"},{"bolder":"加粗"},{"lighter":"细"}]},

        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.ATTR	,title:'副标题文本',attrName:'mc-attr-str-title-subtext',placeholder:"副标题文本"               },
        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.ATTR	,title:'副标题文本超链接',attrName:'mc-attr-str-title-sublink',placeholder:"副标题文本超链接"               },
        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-title-subtarget',title:'超链接打开方式',tooltip:"",options:[{"self":"当前窗口打开"},{"blank":"新窗口打开"}]},
        {type:this.type.COLOR_PICKER    ,clearAttr:true         ,oneLine:true ,change:this.change.ATTR     ,title:'副标题文字颜色'  ,attrName:'mc-attr-title-subtext_style-color' },

        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-title-left',title:'左间距',tooltip:"",options:[{"left":"左对齐"},{"center":"居中"},{"right":"右对齐"}]},
        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-title-left',title:'上间距',tooltip:"",options:[{"top":"顶对齐"},{"middle":"居中"},{"bottom":"底对齐"}]},
        {type:this.type.HTML,html:'<fieldset class="layui-elem-field layui-elem-title"><legend>图例(legend)</legend></fieldset>'},
        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-legend-left',title:'左间距',tooltip:"",options:[{"left":"左对齐"},{"center":"居中"},{"right":"右对齐"}]},
        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-legend-left',title:'上间距',tooltip:"",options:[{"top":"顶对齐"},{"middle":"居中"},{"bottom":"底对齐"}]},
    ];
    return JSON.parse(JSON.stringify(arr));
}

Constant.prototype.combineArray = function(arr1,arr2){
    for(var i=0;i<arr1.length;i++){
        arr2.push(arr1[i]);
    }
    return arr2;
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
