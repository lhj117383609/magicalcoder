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
        {id:this.responsive.XS,name:"手机",width:"588px",height:"200px",icon:"assets/drag/img/header/phone1.png"},
        {id:this.responsive.SM,name:"平板",width:"768px",height:"100%",icon:"assets/drag/img/header/paid1.png"},
        {id:this.responsive.MD,name:"笔记本",width:"992px",height:"100%",icon:"assets/drag/img/header/notebook2.png"},
        {id:this.responsive.LG,name:"电脑",width:"100%",height:"100%",icon:"assets/drag/img/header/pc1.png",checked:true},
    ]
    /*自定义的组件*/
    this.components = [
        {
            name:"统计图表",
            children:[
                {
                    name:"线性图",
                    // icon:"assets/drag/img/left/line.png",
                    icon:"ri-align-bottom",
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
            name:"示例",
            children:[
                {
                    name:"居中技巧",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<div class='layui-container' style='width: 30%'></div>"
                }
            ]
        },{
            name:"容器",
            children:[
                {
                    name:"左右行列",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<div class='layui-row'><div class='layui-col-md6'></div><div class='layui-col-md6'></div></div>",
                },{
                    name:"上下行列",
                    icon:"assets/drag/img/left/updown1.png",
                    html:"<div class='layui-row'><div class='layui-col-xs12'></div><div class='layui-col-xs12'></div></div>",
                },{
                    name:"居中容器",
                    icon:"assets/drag/img/left/wide1.png",
                    html:"<div class='layui-container'></div>",
                },{
                    name:"屏幕自适应",
                    icon:"assets/drag/img/left/wide1.png",
                    html:"<div class='layui-fluid'></div>",
                },{
                    name:"自由定位",
                    icon:"assets/drag/img/left/freedom1.png",
                    html:"<div class='mc-ui-absolute-pane'></div>",
                },
            ]
        },{
            name:"定制化的表单",
            children:[
                {
                    name:"表单容器",
                    icon:"assets/drag/img/left/menu1.png",
                    html:"<form class='layui-form'><div class='layui-form-item'><label class='layui-form-label'>标题</label><div class='layui-input-block'></div></div><div class='layui-form-item'><div class='layui-inline'><label class='layui-form-label'>标题</label><div class='layui-input-inline'></div></div><div class='layui-inline'><label class='layui-form-label'>标题</label><div class='layui-input-inline'></div></div></div><div class='layui-form-item'><div class='layui-input-block'><a class='layui-btn'>确定</a></div></div></form>"
                },{
                    name:"单列条目",
                    icon:"assets/drag/img/left/clauses1.png",
                    html:"<div class='layui-form-item'><label class='layui-form-label'>标题</label><div class='layui-input-block'></div></div>"
                },{
                    name:"多列条目",
                    icon:"assets/drag/img/left/clauses1.png",
                    html:"<div class='layui-form-item'><div class='layui-inline'><label class='layui-form-label'>标题</label><div class='layui-input-inline'></div></div><div class='layui-inline'><label class='layui-form-label'>标题</label><div class='layui-input-inline'></div></div></div>"
                },{
                    name:"按钮条目",
                    icon:"assets/drag/img/left/clauses1.png",
                    html:"<div class='layui-form-item'><div class='layui-input-block'><a class='layui-btn'>确定</a></div></div>"
                },{
                    name:"块级区域",
                    icon:"assets/drag/img/left/chunk1.png",
                    html:"<div class='layui-input-block'></div>"
                },{
                    name:"行内区域",
                    icon:"assets/drag/img/left/row1.png",
                    html:"<div class='layui-inline'></div>"
                },{
                    name:"输入行内",
                    icon:"assets/drag/img/left/import1.png",
                    html:"<div class='layui-input-inline'></div>"
                },{
                    name:"极小区域",
                    icon:"assets/drag/img/left/mini1.png",
                    html:"<div class='layui-form-mid'>-</div>"
                },{
                    name:"按钮组",
                    icon:"assets/drag/img/left/btngroup1.png",
                    html:"<div class='layui-btn-group'><a class='layui-btn'>按钮</a></div>"
                },{
                    name:"标题",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<label class='layui-form-label'>标题</label>"
                },

            ]
        },{
            name:"表单控件",
            children:[
                {
                    name:"输入框",
                    icon:"assets/drag/img/left/import1.png",
                    html:"<input type='text' autocomplete='off' class='layui-input'/>"
                }/*,{
                    name:"密码框",
                    icon:"assets/drag/img/left/password1.png",
                    html:"<input type='password' autocomplete='off' class='layui-input'/>"
                }*/,{
                    name:"文本框",
                    icon:"assets/drag/img/left/text1.png",
                    html:"<textarea placeholder='请输入内容' class='layui-textarea'></textarea>"
                },{
                    name:"下拉框",
                    icon:"assets/drag/img/left/pull1.png",
                    html:"<select><option value='0'>选项A</option><option value='1'>选项B</option>"
                },{
                    name:"开关",
                    icon:"assets/drag/img/left/onoff1.png",
                    html:"<input type='checkbox' name='switch' lay-skin='switch'>"
                },{
                    name:"单选",
                    icon:"assets/drag/img/left/choice1.png",
                    html:"<input type='radio' name='sex' value='1' title='男'>"
                },{
                    name:"复选框",
                    icon:"assets/drag/img/left/multiple1.png",
                    html:"<input type='checkbox' name='checkbox' title='复选框'>"
                },{
                    name:"图片",
                    icon:"assets/drag/img/left/photo1.png",
                    html:"<img style='width:100%;' src='img.jpg'/>"
                },{
                    name:"按钮",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<a class='layui-btn'>按钮</a>"
                }
            ]
        },
        {
            name:"高级组件",
            children:[
                {
                    name:"文件上传",
                    icon:"assets/drag/img/left/uploading1.png",
                    html:"<button type='button' class='magicalcoder-layupload layui-btn'>上传图片</button>"
                },
                {
                    name:"颜色选择器",
                    icon:"assets/drag/img/left/color1.png",
                    html:"<div class='magicalcoder-color-picker'></div>"
                },
                {
                    name:"滑块",
                    icon:"assets/drag/img/left/sliding1.png",
                    html:"<div class='magicalcoder-slider' mc-attr-bool-tips='true'></div>"
                },
                {
                    name:"评分",
                    icon:"assets/drag/img/left/grade1.png",
                    html:"<div class='magicalcoder-rate'></div>"
                },
                {
                    name:"动态表格",
                    icon:"assets/drag/img/left/form1.png",
                    html:"<div mc-attr-bool-loading='false' class='magicalcoder-table'  mc-attr-str-url='assets/drag/js/data/layui/list.json' mc-attr-str-toolbar='#tableToolbar' mc-attr-json-default-toolbar='[&quot;filter&quot;,&quot;exports&quot;,&quot;print&quot;]'><div id='tableToolbar' class='magicalcoder-table-tool-bar layui-hide'><div class='layui-inline' lay-event='add'><i class='layui-icon layui-icon-add-1'></i></div><div class='layui-inline' lay-event='update'><i class='layui-icon layui-icon-edit'></i></div><div class='layui-inline' lay-event='delete'><i class='layui-icon layui-icon-delete'></i></div></div><span class='magicalcoder-table-th layui-hide' mc-attr-str-field='id'>ID</span><span class='magicalcoder-table-th layui-hide' mc-attr-str-field='name'>名称</span><span class='magicalcoder-table-th layui-hide' mc-attr-str-field='description'>简介</span><span class='magicalcoder-table-th layui-hide' mc-attr-str-toolbar='#tableColToolbar'>操作</span><div id='tableColToolbar' class='magicalcoder-table-col-tool-bar layui-hide'><a class='layui-btn layui-btn-xs' lay-event='detail'>查看</a><a class='layui-btn layui-btn-xs' lay-event='edit'>编辑</a><a class='layui-btn layui-btn-danger layui-btn-xs' lay-event='del'>删除</a></div></div>"
                },{
                    name:"静态表格",
                    icon:"assets/drag/img/left/form1.png",
                    html:"<table class='layui-table'><thead><tr><th>列1</th><th>列2</th><th>列3</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table>"
                },
                {
                    name:"代码",
                    icon:"assets/drag/img/left/code1.png",
                    html:"<div class='magicalcoder-code' mc-attr-bool-about='false'></div>"
                },{
                    name:"轮播",
                    icon:"assets/drag/img/left/carousel1.png",
                    html:"<div class='layui-carousel' mc-attr-bool-autoplay='true' mc-attr-num-interval='3000' mc-attr-str-width='100%'><div class='magicalcoder-carousel-items' carousel-item><div class='magicalcoder-carousel-item'></div><div class='magicalcoder-carousel-item'></div></div></div>"
                },{
                    name:"日期",
                    icon:"assets/drag/img/left/day1.png",
                    html:"<input type='text' name='createTime' placeholder='' autocomplete='off' class='magicalcoder-laydate layui-input' lay-verify='magicalCoderVerify' magicalcoder-verify='' value='' />"
                },{
                    name:"弹窗",
                    icon:"assets/drag/img/left/t1.png",
                    html:"<span class='magical-coder-layer-contaner'><button class='magicalcoder-layer layui-btn' mc-attr-num-type='1' mc-attr-bool-shade='false' mc-attr-bool-shade-close='true'  mc-attr-str-btn='保存,取消' mc-attr-str-area='800px,600px'>弹窗</button><div class='magicalcoder-layer-content'></div></span>"
                },{
                    name:"标签页",
                    icon:"assets/drag/img/left/tagpg1.png",
                    html:"<div class='layui-tab'><ul class='layui-tab-title'><li class='magicalcoder-tab-title layui-this'>MagicalCoder</li><li class='magicalcoder-tab-title'>MagicalDrag</li></ul><div class='layui-tab-content'><div class='layui-tab-item layui-show'></div><div class='layui-tab-item'></div></div></div>"
                },{
                    name:"卡片",
                    icon:"assets/drag/img/left/card1.png",
                    html:"<div class='layui-card'><div class='layui-card-header'>卡片</div><div class='layui-card-body'></div></div>"
                },{
                    name:"折叠",
                    icon:"assets/drag/img/left/fold1.png",
                    html:"<div class='layui-collapse'><div class='layui-colla-item'><h2 class='layui-colla-title'>Youyaboot</h2><div class='layui-colla-content layui-show'></div></div><div class='layui-colla-item'><h2 class='layui-colla-title'>优雅web框架</h2><div class='layui-colla-content'></div></div></div>"
                },{
                    name:"引用",
                    icon:"assets/drag/img/left/quoteone1.png",
                    html:"<blockquote class='layui-elem-quote'></blockquote>"
                },{
                    name:"字段区",
                    icon:"assets/drag/img/left/fieldone1.png",
                    html:"<fieldset class='layui-elem-field'><legend>字段集区块 - 默认风格</legend><div class='layui-field-box'></div></fieldset>"
                },{
                    name:"分割线",
                    icon:"assets/drag/img/left/line1.png",
                    html:"<hr>"
                },{
                    name:"导航",
                    icon:"assets/drag/img/left/navigation1.png",
                    html:"<ul class='layui-nav'><li class='layui-nav-item'><a>产品</a></li><li class='layui-nav-item'><a href='javascript:;'>解决方案</a><dl class='layui-nav-child'><dd><a>移动模块</a></dd><dd><a>后台模版</a></dd></dl></li></ul>"
                },
                {
                    name:"面包屑",
                    icon:"assets/drag/img/left/line1.png",
                    html:"<span class='layui-breadcrumb'><a>首页</a><a>列表</a></span>"
                },
                {
                    name:"图标",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<i class='layui-icon layui-icon-face-smile'></i>"
                }

                /*时间线的图标有bug非常奇怪*/
            ]
        },{
            name:"其他不常用",
            children:[
                {
                    name:"徽章",
                    icon:"assets/drag/img/left/dot1.png",
                    html:"<span class='layui-badge-dot'></span>"
                },{
                    name:"超链接",
                    icon:"assets/drag/img/left/url1.png",
                    html:"<a href='http://www.magicalcoder.com'>超链接</a>"
                },{
                    name:"图标文字",
                    icon:"assets/drag/img/left/url1.png",
                    html:"<i>*</i>"
                },{
                    name:"段落",
                    icon:"assets/drag/img/left/p1.png",
                    html:"<p>这是一段落</p>"
                },{
                    name:"小字",
                    icon:"assets/drag/img/left/smallline1.png",
                    html:"<small>小字</small>"
                },{
                    name:"高亮",
                    icon:"assets/drag/img/left/lightchar1.png",
                    html:"<mark>高亮</mark>"
                },{
                    name:"中划线",
                    icon:"assets/drag/img/left/centerline1.png",
                    html:"<del>中划线</del>"
                },{
                    name:"下划线",
                    icon:"assets/drag/img/left/underline1.png",
                    html:"<u>下划线</u>"
                },{
                    name:"斜体",
                    icon:"assets/drag/img/left/italic1.png",
                    html:"<em>斜体</em>"
                },{
                    name:"加粗",
                    icon:"assets/drag/img/left/bold1.png",
                    html:"<strong>加粗</strong>"
                }
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
    */    var formItemOnlyParents = this.rowColBuild().cols();
    formItemOnlyParents.push('form')
    this.tagClassMapping = {
        /*样式名*/
        "mc-root":{name:"根面板",dragInto:true,duplicate:false, copy:false,      paste:true,    canDelete:false},
        "magical-coder-tmp":{name:"临时包裹",dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true},
        "magical-drag-tmp-submenu-name":{name:"子菜单名称",dragInto:false,duplicate:false, copy:false,      paste:false,    canDelete:false},

        "mc-ui-absolute-pane":{name:"自由定位",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,assistDuplicate:false,duplicateAttr:[],        copy:true,       paste:true,assistDelete:true, canDelete:true          },
        "layui-row":    {name:"行",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],        copy:true,       paste:false,assistDelete:true, canDelete:true, onlyChildren:this.rowColBuild().cols(),   assistAdd:true,addOneItems:[{"":[{html:"<div class='layui-col-md6 layui-col-lg6'></div>",focus:false}]}]          },
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

        "magicalcoder-layupload":{primary:2,name:"文件上传",treeExtraName:{attr:['id','name'],text:false},dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true},
        "magicalcoder-color-picker":{name:"颜色选择器",treeExtraName:{attr:['id','name'],text:false},dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true},
        "magicalcoder-slider":{name:"滑块",treeExtraName:{attr:['id','name'],text:false},dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true},
        "magicalcoder-rate":{name:"评分",treeExtraName:{attr:['id','name'],text:false},dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true},
        "magicalcoder-code":{name:"代码",treeExtraName:{attr:['id','name'],text:false},dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true},

        "layui-carousel":            {name:"轮播",treeExtraName:{attr:['id','name'],text:false},      dragInto:false,    duplicate:true,                           copy:true,      paste:true,  canDelete:true,assistAdd:true,addOneItems:[{"magicalcoder-carousel-items":[{html:"<div class='magicalcoder-carousel-item'></div>",focus:false}]}]    },
        "magicalcoder-carousel-items": {name:"轮播条目容器",canZoom:true,assistZoom:true,  dragInto:false,    duplicate:false,                     copy:false,      paste:true,  canDelete:false,onlyChildren:["magicalcoder-carousel-item"],assistAdd:true,addOneItems:[{"":[{html:"<div class='magicalcoder-carousel-item'></div>",focus:false}]}]    },
        "magicalcoder-carousel-item": {name:"轮播条目",  dragInto:true,    duplicate:true,                           copy:false,      paste:true,  canDelete:true,onlyParents:["magicalcoder-carousel-items"]    },

        "magicalcoder-laydate": {name:"日期",treeExtraName:{attr:['id','name'],text:false},  dragInto:false,    duplicate:true,                           copy:false,      paste:false,  canDelete:true    },
        "magical-coder-layer-contaner": {primary:1,name:"弹窗",  dragInto:false,    duplicate:true,                           copy:false,      paste:false,  canDelete:true,onlyChildren:["magicalcoder-layer","magicalcoder-layer-content"]    },
        "magicalcoder-layer": {primary:1,name:"弹窗触发按钮",treeExtraName:{attr:['id','name'],text:false},  dragInto:false,    duplicate:false,                           copy:false,      paste:false,  canDelete:true    },
        "magicalcoder-layer-content": {name:"弹窗面板",  dragInto:true,    duplicate:false,                           copy:false,      paste:true,  canDelete:false    },
        "layui-btn":{primary:1,name:"按钮",treeExtraName:{attr:['id','name'],text:true},dragInto:false,duplicate:true, copy:true,      paste:true,    canDelete:true},
        /*属性名=属性值 如果出现重用的 考虑把标签优先级移动到后面*/
        "type=text":{name:"输入框",treeExtraName:{attr:['id','name'],text:false},dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true},
        "type=radio":{name:"单选框",treeExtraName:{attr:['id','name','title'],text:false},dragInto:false,duplicate:true,duplicateAttr:["value"], copy:true,      paste:false,    canDelete:true,tmpWrapTag:'span',tmpWrapType:1},
        "type=checkbox":{primary:0,name:"复选框",treeExtraName:{attr:['id','name','title'],text:false},dragInto:false,duplicate:true,duplicateAttr:["value"], copy:true,      paste:false,    canDelete:true,tmpWrapTag:'span',tmpWrapType:1},
        "lay-skin=switch":{primary:1,name:"开关",treeExtraName:{attr:['id','name'],text:false},dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true,tmpWrapTag:'span',tmpWrapType:1},
        "textarea":{name:"文本框",treeExtraName:{attr:['id','name'],text:false},dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true},
        "img":{name:"图片",treeExtraName:{attr:['id','name'],text:false},dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true,tmpWrapTag:'span',tmpWrapType:0},

        "select":{name:"下拉框",treeExtraName:{attr:['id','name'],text:false},dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true,onlyChildren:["option"],assistAdd:true,addOneItems:[{"":[{html:"<option value='1'>新选项</option>",focus:true}]}],tmpWrapTag:'div',tmpWrapType:1},
        "option":{name:"下拉框条目",treeExtraName:{attr:['value'],text:true},dragInto:false,duplicate:true,duplicateAttr:["value"],  copy:true,      paste:false,    canDelete:true,onlyParents:["select"]},

        "form":           {name:"表单容器",canZoom:true,assistZoom:true,   dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true, assistDelete:true,   canDelete:true,     onlyChildren:["layui-row","layui-form-item"], assistAdd:true,addOneItems:[{"":[{html:'<div class="layui-form-item"><label class="layui-form-label">标题</label><div class="layui-input-block"></div></div>',focus:false}]}]},
        "layui-form-item":{name:"表单条目",canZoom:true,assistZoom:true,   dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true, assistDelete:true,   canDelete:true,     onlyParents:formItemOnlyParents  },
        "layui-form-label":{name:"标题",treeExtraName:{attr:[],text:true},   dragInto:false, duplicate:true,duplicateAttr:[],         copy:true,      paste:true,    canDelete:true,     onlyParents:['layui-form-item']  },
        "layui-input-block":{name:"块级区域",canZoom:true,assistZoom:true,   dragInto:true, duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,   assistDelete:true, canDelete:true,       },
        "layui-inline":{name:"行内区域",canZoom:true,assistZoom:true,   dragInto:true, duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,  assistDelete:true,  canDelete:true,      },
        "layui-input-inline":{name:"输入行内",canZoom:true,assistZoom:true,   dragInto:true, duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,assistDelete:true,    canDelete:true,       },
        "layui-form-mid":{name:"极小区域",   dragInto:true, duplicate:true,duplicateAttr:[],         copy:true,      paste:true,    canDelete:true,      },
        "layui-btn-group":{name:"按钮组",   dragInto:true, duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true, assistDelete:true,   canDelete:true,      },
        "layui-container":{name:"屏幕居中",canZoom:true,assistZoom:true,   dragInto:true, duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,  assistDelete:true,  canDelete:true,      },
        "layui-fluid":{name:"屏幕自适应",canZoom:true,assistZoom:true,   dragInto:true, duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,  assistDelete:true,  canDelete:true,      },
        "layui-tab":{name:"标签页",canZoom:true,assistZoom:true,   dragInto:false, duplicate:true,duplicateAttr:[],         copy:true,      paste:false, assistDelete:true,   canDelete:true, onlyChildren:['layui-tab-title','layui-tab-content'],assistAdd:true,addOneItems:[{"layui-tab-title":[{html:"<li class='magicalcoder-tab-title'>新标签</li>",focus:false}]},{"layui-tab-content":[{html:"<div class='layui-tab-item'></div>",focus:false}]}]      },
        "layui-tab-title":{name:"标题集合",   dragInto:false, duplicate:false,duplicateAttr:[],         copy:false,      paste:false,    canDelete:false,onlyParents:["layui-tab"],assistAdd:true,addOneItems:[{"layui-tab-title":[{html:"<li class='magicalcoder-tab-title'>新标签</li>",focus:false}]}]       },
        "magicalcoder-tab-title":{name:"标签标题",treeExtraName:{attr:[],text:true},   dragInto:false, duplicate:false,duplicateAttr:[],         copy:false,      paste:false,    canDelete:true     },
        "layui-tab-content":{name:"面板集合",canZoom:true,assistZoom:true,   dragInto:false, duplicate:false,duplicateAttr:[],         copy:false,      paste:false,    canDelete:false,onlyParents:["layui-tab"],assistAdd:true,addOneItems:[{"layui-tab-content":[{html:"<div class='layui-tab-item'></div>",focus:false}]}]      },
        "layui-tab-item":{name:"标签面板",canZoom:true,assistZoom:true,   dragInto:true, duplicate:false,duplicateAttr:[],         copy:false,      paste:true,    canDelete:true      },

        "layui-collapse":{name:"折叠",   dragInto:false, duplicate:true,duplicateAttr:[],         copy:true,      paste:false,    canDelete:true, onlyChildren:['layui-colla-item'],assistAdd:true,addOneItems:[{"":[{html:"<div class='layui-colla-item'><h2 class='layui-colla-title'>新条目</h2><div class='layui-colla-content'></div></div>",focus:false}]}]      },
        "layui-colla-item":{name:"折叠条目",   dragInto:false, duplicate:true,duplicateAttr:[],         copy:false,      paste:false,    canDelete:true,onlyParents:["layui-collapse"]       },
        "layui-colla-title":{name:"折叠标题",treeExtraName:{attr:[],text:true},   dragInto:false, duplicate:false,duplicateAttr:[],         copy:false,      paste:false,    canDelete:false,onlyParents:["layui-colla-item"]     },
        "layui-colla-content":{name:"折叠面板",   dragInto:true, duplicate:false,duplicateAttr:[],         copy:false,      paste:true,    canDelete:false,onlyParents:["layui-colla-item"]      },

        "layui-elem-quote":{name:"段落引用",   dragInto:true, duplicate:true,duplicateAttr:[],         copy:true,      paste:true,    canDelete:true      },
        "layui-elem-field":{name:"字段集",canZoom:true,assistZoom:true,   dragInto:false, duplicate:true,duplicateAttr:[],         copy:true,      paste:false,    canDelete:true,onlyChildren:["legend","layui-field-box"]      },
        "legend":{name:"字段集标题",   dragInto:false, duplicate:false,duplicateAttr:[],         copy:false,      paste:false,    canDelete:false,onlyParents:["layui-elem-field"]     },
        "layui-field-box":{name:"字段集面板",   dragInto:true, duplicate:false,duplicateAttr:[],         copy:false,      paste:true,    canDelete:false,onlyParents:["layui-elem-field"]      },
        "hr":{name:"分隔线",   dragInto:false, duplicate:true,duplicateAttr:[],         copy:true,      paste:false,    canDelete:true      },
        "layui-nav":          {name:"父菜单", dragInto:true,    duplicate:true,                           copy:true,      paste:false,  canDelete:true ,onlyChildren:["layui-nav-item"],assistAdd:true,addOneItems:[{"":[{html:"<li class='layui-nav-item'><a href='javascript:;'>新菜单</a><dl class='layui-nav-child'><dd><a>地址1</a></dd><dd><a>地址2</a></dd></dl></li>",focus:false}]}]     },
        "layui-nav-item":     {name:"一级菜单", dragInto:false,  duplicate:true,duplicateAttr:[],   copy:false,      paste:false,  canDelete:true ,onlyParents:["layui-nav"]    },
        "layui-nav-child":     {name:"二级菜单",dragInto:false,  duplicate:false,duplicateAttr:[],   copy:false,      paste:false,  canDelete:true ,onlyParents:["layui-nav-item"],assistAdd:true,addOneItems:[{"":[{html:"<dd><a>地址</a></dd>",focus:false}]}]    },
        "a":     {primary:0,name:"超链接",treeExtraName:{attr:['id','name'],text:true},dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:false,  canDelete:true    },
        "dd":     {name:"dd",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:false,  canDelete:true    },

        "layui-breadcrumb":{name:"面包屑",   dragInto:true, duplicate:true,duplicateAttr:[],         copy:true,      paste:false,    canDelete:true, onlyChildren:['a'],assistAdd:true,addOneItems:[{"":[{html:"<a>新条目</a>",focus:false}]}]      },

        "layui-badge-dot":{name:"圆点徽章",dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true},
        "layui-badge":{name:"椭圆徽章",dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true},
        "layui-badge-rim":{name:"边框徽章",dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true},
        "layui-card":{name:"卡片",   dragInto:false, duplicate:true,duplicateAttr:[],         copy:true,      paste:false,    canDelete:true, onlyChildren:['layui-card-header','layui-card-body']    },
        "layui-card-header":{name:"卡片头",   dragInto:false, duplicate:false,duplicateAttr:[],         copy:false,      paste:false,    canDelete:false,onlyParents:["layui-card"]     },
        "layui-card-body":{name:"卡片体",canZoom:true,assistZoom:true,   dragInto:true, duplicate:false,duplicateAttr:[],         copy:false,      paste:true,    canDelete:false,onlyParents:["layui-card"]      },
        "layui-icon":{primary:1,name:"图标",   dragInto:false, duplicate:true,duplicateAttr:[],         copy:true,      paste:false,    canDelete:true     },
        "magicalcoder-table":{name:"动态表格",   dragInto:false, duplicate:true,duplicateAttr:[],         copy:true,      paste:false,    canDelete:true, onlyChildren:['magicalcoder-table-th'],tmpWrapTag:'div',tmpWrapType:1 ,assistAdd:true,addOneItems:[{"":[{html:"<div class='magicalcoder-table-th'>新列</div>",focus:false}]}]    },
        "magicalcoder-table-th":{name:"表格列",treeExtraName:{attr:['mc-attr-str-field'],text:true},   dragInto:false, duplicate:true,duplicateAttr:[],         copy:true,      paste:false,    canDelete:true,onlyParents:["magicalcoder-table"]     },
        "magicalcoder-table-tool-bar":{name:"表格工具条",     dragInto:true, duplicate:false,duplicateAttr:[],         copy:false,      paste:true,    canDelete:true,onlyParents:["magicalcoder-table"]     },
        "magicalcoder-table-col-tool-bar":{name:"表格列操作",dragInto:true, duplicate:false,duplicateAttr:[],         copy:false,      paste:true,    canDelete:true,onlyParents:["magicalcoder-table"]     },
        "layui-table":{name:"动态表格",   dragInto:false, duplicate:true,duplicateAttr:[],         copy:true,      paste:false,    canDelete:true,tmpWrapTag:'div',tmpWrapType:1     },

        "label":    {primary:0,name:"标签",dragInto:false,  duplicate:true,duplicateAttr:[],       copy:true,      paste:false,  canDelete:true    },
        "i":    {primary:0,name:"图标文字",dragInto:false,  duplicate:true,duplicateAttr:[],       copy:true,      paste:false,  canDelete:true    },
        "p":    {name:"段落1",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,       paste:true,  canDelete:true    },
        "small":  {name:"小字",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:true,  canDelete:true    },
        "mark":   {name:"高亮",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:true,  canDelete:true    },
        "del":    {name:"中划线",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,    paste:true,  canDelete:true    },
        "u":      {name:"下划线",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,    paste:true,  canDelete:true    },
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

    var tagCol = this.rowColBuild().tagColBuild();
    for(var key in tagCol){
        this.tagClassMapping[key] = tagCol[key];
    }
    /*右侧面板绘制*/
    /*clearAttr:删除按钮 extend:扩展配置按 extra:layui组件对应的扩展配置  attrName:属性名 oneLine:是否在一行 options: [n:name(属性名|样式名) t:title（标题） c:checked时候的值(string|boolean) u:unchecked时候的值(string|boolean)]  extend:true是否启用扩展配置 ,extendKey:"icon",如果是扩展配置icon；htmlAttrs:[{"readonly":"false"}] ,validate:{"^[a-zA-Z][a-zA-Z0-9_]*$":"请输入字母数字或者下划线"}校验*/
    this.rightPanel =
        [
            {
                title:"属性",
                active:true,/*默认聚焦*/
                width:"33.3333333%",
                content:{
                    "mc-ui-absolute-pane":[],
                    "mc-root":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'自由定位',options:[{"c":"mc-ui-absolute-pane","n":"","t":"是否开启","u":""}]}
                    ],
                    "layui-row":[
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'列间距',options:[{"layui-col-space1":"1px"},{"layui-col-space3":"3px"},{"layui-col-space5":"5px"},{"layui-col-space8":"8px"},{"layui-col-space10":"10px"},{"layui-col-space12":"12px"},{"layui-col-space15":"15px"},{"layui-col-space18":"18px"},{"layui-col-space20":"20px"},{"layui-col-space22":"22px"},{"layui-col-space28":"28px"},{"layui-col-space30":"30px"},]                                          },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "magicalcoder-layupload":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":"true","n":"mc-attr-bool-drag","t":"接受拖拽上传","u":"false"},{"c":"true","n":"mc-attr-bool-auto","t":"选完文件自动上传","u":"false"},{"c":"true","n":"mc-attr-bool-multiple","t":"允许多文件上传","u":"false"}]},
                        {type:this.type.SELECT,clearAttr:true       ,oneLine:false,attrName:'mc-attr-str-accept',change:this.change.ATTR,title:'校验的文件类型',tooltip:"accept:指定允许上传时校验的文件类型，可选值有：images（图片）、file（所有文件）、video（视频）、audio（音频）",options:[{"file":"所有文件"},{"images":"图片"},{"video":"视频"},{"audio":"音频"}]},
                        {type:this.type.SLIDER,clearAttr:true       ,oneLine:false ,attrName:'mc-attr-num-size'       ,change:this.change.ATTR    ,title:'最大允许上传的KB',tooltip:"size:设置文件最大可允许上传的大小，单位 KB。不支持ie8/9"              ,extra:{min:0,max:10000000}                                               },
                        {type:this.type.SLIDER,clearAttr:true       ,oneLine:false ,attrName:'mc-attr-num-number'     ,change:this.change.ATTR    ,title:'设置同时可上传的文件数量'             ,extra:{min:0,max:1000}                                               },
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:false,attrName:'mc-attr-str-exts',change:this.change.ATTR,title:'允许文件后缀',placeholder:"jpg|png|gif|bmp|jpeg",title:"exts"},
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:false,attrName:'mc-attr-str-accept-mime',change:this.change.ATTR,title:'筛选文件类型',placeholder:'如：image/*  image/jpg,image/png',title:"acceptMime" },
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:false,attrName:'mc-attr-str-bind-action',change:this.change.ATTR,title:'指向一个按钮触发上传',placeholder:'如：#btn',title:"bindAction"},
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:false,attrName:'mc-attr-str-field',change:this.change.ATTR,title:'设定文件域的字段名',title:"field"},
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:false,attrName:'mc-attr-str-url',change:this.change.ATTR,title:'服务端上传接口',tooltip:'url'},
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:false,attrName:'mc-attr-str-headers',change:this.change.ATTR,title:'接口的请求头',placeholder:"如：{token: 'sasasas'}",tooltip:"headers"},
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:false,attrName:'mc-attr-str-data',change:this.change.ATTR,title:'上传接口的额外参数',placeholder:"如：{id: 'xxx'} ",tooltip:"data"},
                    ],
                    "magicalcoder-color-picker":[
                        {type:this.type.CHECKBOX        ,clearAttr:true         ,oneLine:true ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":"true","n":"mc-attr-bool-alpha","t":"开启透明度","u":"false"},{"c":"true","n":"mc-attr-bool-predefine","t":"开启预定义颜色","u":"false"}]},
                        {type:this.type.COLOR_PICKER    ,clearAttr:true         ,oneLine:true ,change:this.change.ATTR     ,title:'默认颜色'  ,attrName:'mc-attr-str-color'                                                                         },
                        {type:this.type.SELECT          ,clearAttr:true         ,oneLine:false,change:this.change.ATTR ,attrName:'mc-attr-str-format',title:'颜色显示/输入格式',options:[{"hex":"hex"},{"rgb":"rgb"}]},
                        {type:this.type.SELECT          ,clearAttr:true         ,oneLine:false,change:this.change.ATTR ,attrName:'mc-attr-str-size',title:'下拉框尺寸',options:[{"lg":"大"},{"sm":"中"},{"xs":"小"}]},
                    ],
                    "magicalcoder-slider":[
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-type',title:'滑块类型',options:[{'default':'水平滑块'},{'vertical':'垂直滑块'}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'范围拖拽',options:[{"c":"true","n":"mc-attr-bool-range","t":"范围拖拽","u":"false"}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'是否显示间断点',options:[{"c":"true","n":"mc-attr-bool-showstep","t":"是否显示间断点","u":"false"}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'是否显示文字提示',options:[{"c":"true","n":"mc-attr-bool-tips","t":"是否显示文字提示","u":"false"}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'是否显示输入框',options:[{"c":"true","n":"mc-attr-bool-input","t":"是否显示输入框","u":"false"}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'是否将滑块禁用拖拽',options:[{"c":"true","n":"mc-attr-bool-disabled","t":"是否将滑块禁用拖拽","u":"false"}]},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-num-height',title:'滑动条高度',extra:{min:0,max:2000} },
                        {type:this.type.SLIDER,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-num-min',title:'最小值',extra:{min:0,max:2000} },
                        {type:this.type.SLIDER,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-num-max',title:'最大值',extra:{min:0,max:2000} },
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-num-value',title:'滑块初始值',extra:{min:0,max:2000} },
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-num-step',title:'拖动的步长',extra:{min:0,max:2000} },
                        {type:this.type.COLOR_PICKER,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-theme',title:'主题颜色'}
                    ],
                    "magicalcoder-rate":[
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-num-length',title:'星星的个数(个)',extra:{min:0,max:100} },
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-num-value',title:'评分的初始值',extra:{min:0,max:100} },
                        {type:this.type.COLOR_PICKER,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-theme',title:'主题颜色'},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'是否启用半星',options:[{"c":"true","n":"mc-attr-bool-half","t":"是否启用半星","u":"false"}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'是否显示评分对应的内容',options:[{"c":"true","n":"mc-attr-bool-text","t":"是否显示评分对应的内容","u":"false"}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'是否只读',options:[{"c":"true","n":"mc-attr-bool-readonly","t":"是否只读","u":"false"}]}
                    ],
                    "magicalcoder-code":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-skin',title:'风格',options:[{'notepad':'NotePad++的风格'}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-title',title:'设定标题'},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'是否剔除右上关于',options:[{"c":"false","n":"mc-attr-bool-about","t":"剔除右上关于","u":"true"}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'是否转义html标签',options:[{"c":"true","n":"mc-attr-bool-encode","t":"转义html标签","u":"false"}]},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-str-height',title:'设置最大高度',extra:{min:0,max:2000,suffix:'px'} }
                    ],
                    "magicalcoder-laydate":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'状态',options:[{"c":"true","n":"mc-attr-bool-is-init-value","t":"自动填充初始值","u":"false"},{"c":"true","n":"mc-attr-bool-show","t":"默认显示","u":"false"},{"c":"true","n":"mc-attr-bool-show-bottom","t":"是否显示底部栏","u":"false"},{"c":"true","n":"mc-attr-bool-calendar","t":"是否显示公历节日","u":"false"}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-type',title:'日期类型',options:[{'year':'年'},{'month':'年月'},{'date':'年月日'},{'time':'时分秒'},{'datetime':'年月日时分秒'}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-trigger',title:'触发方式',options:[{'focus':'聚焦'},{'click':'点击'}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-position',title:'定位方式',options:[{'abolute':'绝对定位'},{'fixed':'固定定位'},{'static':'静态定位'}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-lang',title:'语言',options:[{'cn':'中文版'},{'en':'英文版'}]},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-num-z-index',title:'层叠顺序',extra:{min:0,max:99999} },
                        {type:this.type.COLOR_PICKER,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-theme',title:'主题颜色'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-format',placeholder:'yyyy-MM-dd HH:mm:ss',title:'日期格式'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-value',placeholder:'new Date()',title:'初始值'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-min',placeholder:'1900-1-1',title:'最小值'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-max',placeholder:'2099-12-31',title:'最大值'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-str-range',placeholder:'~',title:'范围选择分隔符'}
                    ],
                    "layui-carousel":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'是否全屏轮播',options:[{"c":"true","n":"mc-attr-bool-full","t":"是否全屏轮播","u":"false"}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'是否自动切换',options:[{"c":"true","n":"mc-attr-bool-autoplay","t":"是否自动切换","u":"false"}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-str-anim',title:'轮播切换动画方式',options:[{'default':'左右切换'},{'updown':'上下切换'},{'fade':'渐隐渐显切换'}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-str-arrow',title:'切换箭头默认显示状态',options:[{'hover':'悬停显示'},{'always':'始终显示'},{'none':'始终不显示'}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-str-indicator',title:'指示器位置 ',options:[{'inside':'容器内部'},{'outside':'容器外部'},{'none':'不显示'}]},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-str-width',title:'轮播容器宽度',extra:{min:0,max:2000,suffix:'%'} },
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-num-height',title:'轮播容器高度',extra:{min:0,max:2000,suffix:'px'} },
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-num-interval',title:'自动切换的时间间隔(毫秒)',extra:{min:0,max:20000} },
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-num-index',title:'初始开始的条目索引',extra:{min:0,max:100} }
                    ],
                    "magicalcoder-carousel-items":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'是否开启轮播',options:[{"c":true,"n":"carousel-item","t":"是否启用轮播","u":false}]},
                    ],
                    "magicalcoder-carousel-item":[
                    ],
                    "magicalcoder-layer":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-title',placeholder:'标题',title:'弹窗标题'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-area',placeholder:'您可以填写:500px,300px',title:'宽,高'},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态',options:[{"c":"true","n":"mc-attr-bool-maxmin","t":"最大最小化","u":"false"},{"c":"true","n":"mc-attr-bool-resize","t":"允许拉伸","u":"false"},{"c":"true","n":"mc-attr-bool-scrollbar","t":"允许滚动条","u":"false"},{"c":"true","n":"mc-attr-bool-fixed","t":"固定在可视区域","u":"false"}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-type',title:'弹窗类型',options:[{'1':'默认'},{'2':'iframe'}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-content',placeholder:'可填写网址,只有当弹窗类型为iframe时生效',title:'iframe地址'},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-offset',title:'弹出位置',options:[{'auto':'auto'},{'t':'顶部'},{'r':'右'},{'b':'底部'},{'l':'左'},{'lt':'左上角'},{'lb':'左下角'},{'rt':'右上角'},{'rb':'右下角'}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-btn-align',title:'按钮排列',options:[{'l':'左对齐'},{'c':'居中'},{'r':'右对齐'}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-shade',title:'遮罩',options:[{'0':'关闭遮罩'},{'0.3':'默认遮罩'},{'0.1':'10%'},{'0.2':'20%'},{'0.4':'40%'},{'0.5':'50%'},{'0.6':'60%'},{'0.7':'70%'},{'0.8':'80%'},{'0.9':'90%'},{'1':'100%'}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-btn',placeholder:'多个按钮逗号分隔:保存,取消',title:'按钮'},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-anim',title:'弹出动画',options:[{'0':'平滑放大'},{'1':'从上掉落'},{'2':'底部往上'},{'3':'左入'},{'4':'从左翻滚'},{'5':'渐显'},{'6':'抖动'}]},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-num-time',title:'延时关闭时间毫秒',extra:{min:0,max:20000} },
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-num-z-index',title:'层叠顺序',extra:{min:0,max:2000} }
                    ],
                    "layui-btn":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"layui-btn-radius","n":"","t":"圆角","u":""},{"c":"layui-btn-fluid","n":"","t":"最大化适应","u":""}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'主题',options:[{'layui-btn-primary':'原始'},{'layui-btn-normal':'百搭'},{'layui-btn-warm':'暖色'},{'layui-btn-danger':'警告'},{'layui-btn-disabled':'禁用'}]                                           },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'尺寸',options:[{'layui-btn-lg':'大型'},{'layui-btn-sm':'小型'},{'layui-btn-xs':'迷你'}]                                           },
                    ],
                    "type=checkbox":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'title',title:'标题'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'value',title:'值'},
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'选中'                       ,options:[{n:"checked",t:"选中",c:true,u:false}]},
                    ],
                    "type=radio":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'title',title:'标题'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'value',title:'值'},
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'选中'                       ,options:[{n:"checked",t:"选中",c:true,u:false}]},
                    ],
                    "lay-skin=switch":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'lay-text',placeholder:'是|否',title:'选择文本'},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'选中',options:[{"c":true,"n":"checked","t":"选中","u":false}]}
                    ],
                    "select":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'选中',options:[{"c":true,"n":"lay-search","t":"开启搜索","u":false},{"c":true,"n":"disabled","t":"禁用","u":false}]}
                    ],
                    "option":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'value',title:'值'},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'选中',options:[{"c":true,"n":"selected","t":"选中","u":false}]}
                    ],
                    "textarea":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'placeholder',title:'帮助提示文本'},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'rows',title:'行数',extra:{min:0,max:500} },
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'cols',title:'列数',extra:{min:0,max:500} },
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'maxlength',title:'可输入最大长度',extra:{min:0,max:2000} },
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'placeholder',title:'提示文本'},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'是否只读',options:[{"c":true,"n":"readonly","t":"只读","u":false}]},
                    ],
                    "img":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"layui-circle","n":"","t":"圆角","u":""}]},
                        {type:this.type.FILEUPLOAD,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'src',title:'图片地址'},
                    ],
                    "type=text":[
                        {type:this.type.TEXTAREA,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'value',title:'值'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'placeholder',title:'提示文本'},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'禁用',options:[{"c":true,"n":"disabled","t":"禁用","u":false}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'只读',options:[{"c":true,"n":"readonly","t":"只读","u":false}]}
                    ],
                    "form":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'方框风格',options:[{"c":"layui-form-pane","n":"","t":"是否开启","u":""}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ]
                    ,
                    "layui-form-label":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "layui-form-mid":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "layui-input-block":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "layui-inline":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "layui-input-inline":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "layui-field-box":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],"layui-container":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "layui-fluid":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "layui-tab":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'可删除标签',options:[{"c":"true","n":"lay-allowclose","t":"是否开启","u":"false"}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'卡片风格',options:[{"c":"layui-tab-card","n":"","t":"是否开启","u":""}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'简洁风格',options:[{"c":"layui-tab-brief","n":"","t":"是否开启","u":""}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "magicalcoder-tab-title":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'默认显示',options:[{"c":"layui-this","n":"","t":"是否开启","u":""}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "layui-tab-item":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'默认显示',options:[{"c":"layui-show","n":"","t":"是否开启","u":""}]},
                    ],
                    "layui-collapse":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'手风琴模式',options:[{"c":true,"n":"lay-accordion","t":"是否开启","u":false}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "layui-colla-title":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "layui-colla-content":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'默认显示',options:[{"c":"layui-show","n":"","t":"是否开启","u":""}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "layui-elem-quote":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.CHECKBOX      ,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'灰色风格',options:[{"c":"layui-quote-nm","n":"","t":"是否开启","u":""}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "layui-elem-field":[
                        {type:this.type.CHECKBOX      ,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'新风格',options:[{"c":"layui-field-title","n":"","t":"是否开启","u":""}]},
                    ],
                    "legend":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "hr":[
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'颜色',options:[{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'青色'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'黑色'},{'layui-bg-gray':'灰色'},]                                           },
                    ],
                    "a":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'href',title:'跳转地址'},
                        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'target',title:'打开方式',tooltip:"target",options:[{"_blank":"新窗口"},{"_self":"当前窗口"},{"_parent":"父窗口"},{"_top":"顶部窗口"}]},
                    ],
                    "layui-nav":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'垂直导航',options:[{"c":"layui-nav-tree","n":"","t":"是否开启","u":""}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'侧边导航',options:[{"c":"layui-nav-side","n":"","t":"是否开启","u":""}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'互斥收缩',options:[{"c":"all","n":"lay-shrink","t":"是否开启","u":""}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "layui-nav-item":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'默认选中',options:[{"c":"layui-this","n":"","t":"是否开启","u":""}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'默认展开',options:[{"c":"layui-nav-itemed","n":"","t":"是否开启","u":""}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'选中效果',options:[{"c":true,"n":"lay-unselect","t":"是否开启","u":false}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "layui-breadcrumb":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'lay-separator',title:'分隔符'},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "layui-badge-dot":[
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'类型'   ,options:[{'layui-badge-dot':'圆点'},{'layui-badge':'椭圆'},{'layui-badge-rim':'边框'}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "layui-badge":[
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'类型'   ,options:[{'layui-badge-dot':'圆点'},{'layui-badge':'椭圆'},{'layui-badge-rim':'边框'}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "layui-badge-rim":[
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'类型'   ,options:[{'layui-badge-dot':'圆点'},{'layui-badge':'椭圆'},{'layui-badge-rim':'边框'}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                    ],
                    "layui-card-header":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                    ],
                    "layui-icon":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	  ,title:'文本'                },
                        {type:this.type.TEXT      ,clearAttr:false       ,oneLine:true     ,change:this.change.ATTR,attrName:'class'   ,title:'图标',extendKey:"icon",extend:true    }

                    ],
                    "layui-table":[
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'lay-filter',title:'lay-filter',tooltip:"lay-filter",placeholder:"排序过滤事件名"},
                    ],
                    "magicalcoder-table":[
                        {type:this.type.CHECKBOX,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":"true","n":"mc-attr-bool-page","t":"分页","u":"false"},{"c":"true","n":"mc-attr-bool-total-row","t":"合计行","u":"false"},{"c":"true","n":"mc-attr-bool-loading","t":"加载条","u":"false"},{"c":"true","n":"mc-attr-bool-even","t":"斑马纹","u":"false"}]},
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:false,change:this.change.ATTR  ,attrName:'mc-attr-str-url',title:'数据地址',tooltip:"url",placeholder:"表格数据后端地址"},
                        /*考虑做成开关 不然用户清空无法复原*/
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-toolbar',title:'左工具栏',tooltip:"自定义工具栏",placeholder:""},
                        {type:this.type.CHECKBOX_ARRAY,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-json-default-toolbar',title:'右工具栏',tooltip:"自定义工具栏",options:[{"c":"filter","n":"","t":"筛选","u":""},{"c":"exports","n":"","t":"导出","u":""},{"c":"print","n":"","t":"打印","u":""}]},//,callback:{coverAttrValueToArray:function(attrValue,focusNode){return ['print'];},parseArrayToAttrValue:function(attrValueArr){return JSON.stringify(attrValueArr)}}
                        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-method',title:'HTTP方法',tooltip:"get post",options:[{"get":"GET"},{"post":"POST"}]},
                        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-skin',title:'边框风格',tooltip:"用于设定表格风格，若使用默认风格不设置该属性即可",options:[{"line":"行边框风格"},{"row":"列边框风格"},{"nob":"无边框风格"}]},
                        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-size',title:'表格尺寸',tooltip:"size",options:[{"sm":"小尺寸"},{"lg":"大尺寸"}]},
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-title',title:'大标题',tooltip:"title",placeholder:"定义 table 的大标题"},
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'lay-filter',title:'lay-filter',tooltip:"lay-filter",placeholder:"排序过滤事件名"},
                        {type:this.type.SLIDER,clearAttr:true       ,oneLine:false,change:this.change.ATTR ,attrName:'mc-attr-num-width'    ,title:'宽度',tooltip:"width"            ,extra:{min:0,max:2000}  },
                        {type:this.type.SLIDER,clearAttr:true       ,oneLine:false,change:this.change.ATTR ,attrName:'mc-attr-num-height'     ,title:'高度',tooltip:"height"            ,extra:{min:0,max:2000}  },
                        {type:this.type.SLIDER,clearAttr:true       ,oneLine:false,change:this.change.ATTR ,attrName:'mc-attr-num-cell-min-width'  ,title:'单元格最小宽度',tooltip:"cellMinWidth"            ,extra:{min:0,max:2000}  },
                        {type:this.type.SLIDER,clearAttr:true       ,oneLine:false,change:this.change.ATTR ,attrName:'mc-attr-num-limit'      ,title:'每页条数',tooltip:"limit"            ,extra:{min:0,max:2000}  },
                    ],

                    "magicalcoder-table-th":[
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	  ,title:'标题'                },
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-field',title:'字段变量名',tooltip:"field",placeholder:"JSON字段名称：field"},

                        {type:this.type.CHECKBOX,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":"true","n":"mc-attr-bool-sort","t":"可排序","u":"false"},{"c":"true","n":"mc-attr-bool-hide","t":"隐藏此列","u":"false"},{"c":"true","n":"mc-attr-bool-total-row","t":"自动合计","u":"false"},{"c":"true","n":"mc-attr-bool-unresize","t":"拖拽列宽","u":"false"}]},
                        {type:this.type.SLIDER,clearAttr:true       ,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-num-width',title:'宽度',extra:{min:0,max:2000} },
                        {type:this.type.SLIDER,clearAttr:true       ,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-num-min-width',title:'最小宽度',extra:{min:0,max:2000} },
                        {type:this.type.SLIDER,clearAttr:true       ,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-num-colspan',title:'所占列数',extra:{min:0,max:10} },
                        {type:this.type.SLIDER,clearAttr:true       ,oneLine:false,change:this.change.ATTR,attrName:'mc-attr-num-rowspan',title:'所占行数',extra:{min:0,max:10} },
                        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-type',title:'列类型',tooltip:"",options:[{"normal":"常规列"},{"checkbox":"复选框列"},{"radio":"单选框列"},{"numbers":"序号列"},{"space":"空列"}]},
                        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-fixed',title:'固定列',tooltip:"一旦设定，对应的列将会被固定在左或右，不随滚动条而滚动",options:[{"left":"左侧"},{"right":"右侧"}]},

                        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-edit',title:'编辑类型',tooltip:"edit",options:[{"text":"输入框"}]},
                        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-align',title:'排列方式',tooltip:"align",options:[{"left":"靠左"},{"center":"居中"},{"right":"靠右"}]},

                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-total-row-text',title:'合计文本',tooltip:"totalRowText",placeholder:"用于显示自定义的合计文本"},
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-event',title:'点击事件名',tooltip:"自定义单元格点击事件名，以便在 tool 事件中完成对该单元格的业务处理",placeholder:"请输入英文字符"},
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-style',title:'样式',tooltip:"自定义单元格点击事件名，以便在 tool 事件中完成对该单元格的业务处理",placeholder:"style样式"},
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-templet',title:'模板',tooltip:"自定义列模板",placeholder:"自定义模板"},
                        {type:this.type.TEXT  ,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'mc-attr-str-toolbar',title:'工具栏',tooltip:"自定义工具栏",placeholder:""},
                    ]
                    ,"i":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                    ]
                    ,"label":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                    ],
                    "p":[
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
                title:"通用属性",
                active:false,/*默认聚焦*/
                width:"33.3333333%",
                content:{

                }
            },{
                title:"其他",
                active:false,/*默认聚焦*/
                width:"33.3333333%",
                content:{
                    "layui-btn":[
                        {type:this.type.TEXT         ,clearAttr:true    ,oneLine:false        ,change:this.change.ATTR    ,title:'点击触发事件'     ,attrName:'onclick',extendKey:"method",extend:true,functionParams:[{name:"e",title:"event事件对象"}]},
                    ]
                }
            },
        ]

    /*追加列*/
    var colConfig = this.rowColBuild().rightColBuild();
    for(var key in colConfig){
        this.rightPanel[0].content[key] = colConfig[key];
    }
    /*编码*/
    this.addCode();
}

Constant.prototype.refresh = function(){
    this._autoSetComponentId();
    this.componentMap = this.setComponentMap();
}

Constant.prototype.addCode = function(){
    var content = this.rightPanel[0].content;
    for(var key in content){
        var value = [];
        value.push({type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'id',title:'id'});
        value.push({type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'name',title:'name'});
        value.push({type:this.type.TEXTAREA,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'style',title:'style'});
        value.push({type:this.type.TEXTAREA,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'class',title:'class'});
        value.push({type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.STYLE,attrName:'z-index',title:'层级',tooltip:'当重叠时可以用数值决定哪个控件置于上层',validate:{"^[0-9]*$":"请使用数字"}});
        value.push({type:this.type.FILEUPLOAD,clearAttr:true,oneLine:true,change:this.change.STYLE,attrName:'background-image',title:'背景图',tooltip:'背景图片',callback:{coverValueToAttr:function(value,focusNode){return "url(\""+value+"\")"}}});
        value.push({type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.STYLE,attrName:'background-size',title:'背景图尺寸',tooltip:"背景图尺寸:配置规则 宽 高<br>100px 200px<br>20% 30%",placeholder:"例如:10px 10px"});
        value.push({type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.STYLE,attrName:'background-repeat',title:'背景图重复',tooltip:'背景图重复',options:[{"repeat":"默认"},{"repeat-x":"水平铺满"},{"repeat-y":"垂直铺满"},{"no-repeat":"仅显示一次"},{"inherit":"继承外层"}]});
        value.push({type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.STYLE,attrName:'background-position',title:'背景图重复',tooltip:'背景图定位',options:[{"center center":"居中"},{"left top":"靠上靠左"},{"center top":"靠上居中"},{"right top":"靠下靠右"},{"left center":"靠左居中"},{"right center":"靠右居中"},{"left bottom":"靠下靠左"},{"center bottom":"靠下居中"},{"right bottom":"靠下靠右"}]});
        value.push({type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.STYLE,attrName:'background-attachment',title:'滚动关联',tooltip:'滚动关联',options:[{"scroll":"跟随滚动"},{"fixed":"固定"}]});
        value.push({type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'开启动画',options:[{"c":"layui-anim","n":"","t":"是否开启","u":""}]});
        value.push({type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'循环播放',options:[{"c":"layui-anim-loop","n":"","t":"是否开启","u":""}]});
        value.push({type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'动画效果',options:[{'layui-anim-up':'底部向上'},{'layui-anim-upbit':'微微向上滑入'},{'layui-anim-scale':'平滑放大'},{'layui-anim-scaleSpring':'弹簧式放大'},{'layui-anim-fadein':'渐显'},{'layui-anim-fadeout':'渐隐'},{'layui-anim-rotate':'360度旋转'}]});
        this.rightPanel[1].content[key] = value;
    }
}
/*列是变动的 所以简单起见 全部遍历所有可能*/
Constant.prototype.rowColBuild = function(){
    var _t = this;
    return {
        rightColBuild:function(){
            var configArr = [
                {type:_t.type.TEXT      ,clearAttr:true       ,oneLine:true      ,change:_t.change.TEXT	    ,title:'文本'                },
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'背景色'  ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
                {type:_t.type.CHECKBOX  ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'自由定位',options:[{"c":"mc-ui-absolute-pane","n":"","t":"是否开启","u":""}]},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'xs栅格数',options:[{"layui-col-xs1":"1/12"},{"layui-col-xs2":"2/12"},{"layui-col-xs3":"3/12"},{"layui-col-xs4":"4/12"},{"layui-col-xs5":"5/12"},{"layui-col-xs6":"6/12"},{"layui-col-xs7":"7/12"},{"layui-col-xs8":"8/12"},{"layui-col-xs9":"9/12"},{"layui-col-xs10":"10/12"},{"layui-col-xs11":"11/12"},{"layui-col-xs12":"12/12"}]                       ,responsive:_t.responsive.XS                    },
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'sm栅格数',options:[{"layui-col-sm1":"1/12"},{"layui-col-sm2":"2/12"},{"layui-col-sm3":"3/12"},{"layui-col-sm4":"4/12"},{"layui-col-sm5":"5/12"},{"layui-col-sm6":"6/12"},{"layui-col-sm7":"7/12"},{"layui-col-sm8":"8/12"},{"layui-col-sm9":"9/12"},{"layui-col-sm10":"10/12"},{"layui-col-sm11":"11/12"},{"layui-col-sm12":"12/12"}]                       ,responsive:_t.responsive.SM                    },
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'md栅格数',options:[{"layui-col-md1":"1/12"},{"layui-col-md2":"2/12"},{"layui-col-md3":"3/12"},{"layui-col-md4":"4/12"},{"layui-col-md5":"5/12"},{"layui-col-md6":"6/12"},{"layui-col-md7":"7/12"},{"layui-col-md8":"8/12"},{"layui-col-md9":"9/12"},{"layui-col-md10":"10/12"},{"layui-col-md11":"11/12"},{"layui-col-md12":"12/12"}]                       ,responsive:_t.responsive.MD                    },
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'lg栅格数',options:[{"layui-col-lg1":"1/12"},{"layui-col-lg2":"2/12"},{"layui-col-lg3":"3/12"},{"layui-col-lg4":"4/12"},{"layui-col-lg5":"5/12"},{"layui-col-lg6":"6/12"},{"layui-col-lg7":"7/12"},{"layui-col-lg8":"8/12"},{"layui-col-lg9":"9/12"},{"layui-col-lg10":"10/12"},{"layui-col-lg11":"11/12"},{"layui-col-lg12":"12/12"}] ,responsive:_t.responsive.LG                    },
            ]
            var config = [];
            for(var key in _t.responsive){
                var value = _t.responsive[key];
                for(var i=1;i<=12;i++){
                    config['layui-col-'+value+i] = JSON.parse(JSON.stringify(configArr));
                }
            }
            return config;
        },
        tagColBuild:function(){
            var col = {name:"列",canZoom:true,assistZoom:true,dragInto:true,assistDuplicate:true,duplicate:true, copy:true,      paste:true, assistDelete:true,   canDelete:true,onlyParents:["layui-row"]};
            var map = {};
            for(var key in _t.responsive){
                var value = _t.responsive[key];
                for(var i=1;i<=12;i++){
                    map['layui-col-'+value+i] = JSON.parse(JSON.stringify(col));
                }
            }
            return map;
        },
        cols:function () {
            var arr = [];
            for(var key in _t.responsive){
                var value = _t.responsive[key];
                for(var i=1;i<=12;i++){
                    arr.push('layui-col-'+value+i);
                }
            }
            return arr;
        }
    }
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
