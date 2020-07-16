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
            link:["assets/drag/ui/element/2.10.1/element.css","assets/drag/ui/magicalcoder/1.1.0/magicalcoder.css"],
            //预览页<head></head>内的脚本地址
            headJs:[],
            //预览页<body></body>内的脚本地址
            bodyJs:[
                "assets/drag/js/lib/echarts/4.6.0/echarts.min.js",
                "assets/drag/js/lib/echarts/datatool.min.js",
                "assets/drag/ui/magicalcoder/1.1.0/magicalcoder.js",
                "assets/drag/js/lib/vue/vue.js",
                "assets/drag/ui/element/2.10.1/element.js",
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
    this.UI_TYPE = 4;
    this.UI_NAME = "element";
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
            name:"常用",
            children:[
                {
                    name:"查询列表",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<el-row><el-col :xs='24'><el-card header='查询条件'><el-form label-width='100px'><el-form-item label='单行标题'></el-form-item><el-form-item><el-button>提交</el-button></el-form-item></el-form></el-card></el-col><el-col :xs='24'><el-card><el-table :data='tableList' :fit='true' :show-header='true'><el-table-column prop='id' label='列1' > </el-table-column><el-table-column prop='name' label='列2' > </el-table-column><el-table-column label='操作' fixed='right' width='200px'><template slot-scope='scope'><el-button mc-type='column-el-button' size='mini' type='primary'>编辑</el-button><el-button mc-type='column-el-button' size='mini' type='danger'>删除</el-button></template></el-table-column></el-table><el-pagination style='margin-left: -5px;' layout='prev,pager,next' :total='pageTotal' :current-page.sync='currentPage' :page-size='20' :pager-count='5'></el-card></el-col></el-row>",
                }

            ]
        },{
            name:"容器",
            children:[
                {
                    name:"窗体",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<div class='mc-window''></div>",
                },
                {
                    name:"后台框架",
                    icon:"assets/drag/img/left/five1.png",
                    html:"<el-container><el-header height='117px'></el-header><el-container><el-aside width='300px'></el-aside><el-container><el-main></el-main><el-footer></el-footer></el-container></el-container></el-container>"
                },
                {
                    name:"按钮组",
                    icon:"assets/drag/img/left/btngroup1.png",
                    html:"<el-button-group></el-button-group>"
                },{
                    name:"自适行列",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<el-row><el-col :xs='24' :md='12'></el-col><el-col :xs='24' :md='12'></el-col></el-row>",
                },{
                    name:"左右行列",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<el-row><el-col :xs='12' :sm='12'></el-col><el-col :xs='12' :sm='12'></el-col></el-row>",
                },{
                    name:"上下行列",
                    icon:"assets/drag/img/left/updown1.png",
                    html:"<el-row><el-col :xs='24'></el-col><el-col :xs='24'></el-col></el-row>",
                },{
                    name:"自由定位",
                    icon:"assets/drag/img/left/freedom1.png",
                    html:"<div class='mc-ui-absolute-pane'></div>",
                },

            ]
        },
        {
            name:"自定制化的【表单->表】-限制较多",
            children:[
                {
                    name:"表单容器",
                    icon:"assets/drag/img/left/clauses1.png",
                    html:"<el-form label-width='100px'><el-form-item label='单行标题'></el-form-item><el-row><el-col :xs='24' :md='12'><el-form-item label='左标题'></el-form-item></el-col><el-col :xs='24' :md='12'><el-form-item label='右标题'></el-form-item></el-col></el-row><el-form-item label='单选'><el-radio-group v-model='radioGroup'><el-radio label='1'>单选项1</el-radio><el-radio label='2'>单选项2</el-radio></el-radio-group></el-form-item><el-form-item label='多选'><el-checkbox-group v-model='checkboxGroup'><el-checkbox label='1'>多选项</el-checkbox></el-checkbox-group></el-form-item><el-form-item ><el-row><el-col :span='12'><el-button>提交</el-button></el-col><el-col :span='12'></el-col></el-row></el-form-item></el-form>"
                },
                {
                    name:"普通条目",
                    icon:"assets/drag/img/left/menu1.png",
                    html:"<el-form-item label='标题'></el-form-item>"
                },
                {
                    name:"单选条目",
                    icon:"assets/drag/img/left/menu1.png",
                    html:"<el-form-item label='单选'><el-radio-group v-model='radioGroup'><el-radio label='1'>单选项1</el-radio><el-radio label='2'>单选项2</el-radio></el-radio-group></el-form-item>"
                },
                {
                    name:"多选条目",
                    icon:"assets/drag/img/left/menu1.png",
                    html:"<el-form-item label='多选'><el-checkbox-group v-model='checkboxGroup'><el-checkbox label='1'>多选项</el-checkbox></el-checkbox-group></el-form-item>"
                },
                {
                    name:"提交条目",
                    icon:"assets/drag/img/left/menu1.png",
                    html:"<el-form-item ><el-button>提交</el-button></el-form-item>"
                },

            ]
        },{
            name:"表单控件",
            children:[
                {
                    name:"按钮",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<el-button>确定</el-button>",
                },{
                    name:"输入框",
                    icon:"assets/drag/img/left/import1.png",
                    html:"<el-input v-model='input' placeholder='请输入内容'></el-input>",
                },{
                    name:"下拉框",
                    icon:"assets/drag/img/left/pull1.png",
                    html:"<el-select v-model='select' @focus='focus'><el-option label='选择1' value='1'></el-option></el-select>"
                }
                ,
                {
                    name:"单选框",
                    icon:"assets/drag/img/left/choice1.png",
                    html:"<el-radio-group v-model='radioGroup'><el-radio label='1'>单选项1</el-radio><el-radio label='2'>单选项2</el-radio></el-radio-group>"
                },
                {
                    name:"多选框",
                    icon:"assets/drag/img/left/multiple1.png",
                    html:"<el-checkbox-group v-model='checkboxGroup'><el-checkbox label='1'>多选项1</el-checkbox></el-checkbox-group>"
                },{
                    name:"开关",
                    icon:"assets/drag/img/left/onoff1.png",
                    html:"<el-switch v-model='kaiGuan' ></el-switch>"
                },
            ]
        },
        {
            name:"高级组件",
            children:[
                {
                    name:"滑块",
                    icon:"assets/drag/img/left/sliding1.png",
                    html:"<el-slider v-model='slider'></el-slider>"
                },{
                    name:"日期",
                    icon:"assets/drag/img/left/day1.png",
                    html:"<el-date-picker v-model='datePicker'  :editable='true' :clearable='true' type='datetime' format='yyyy-MM-dd HH:mm:ss'></el-date-picker>"
                },{
                    name:"文件上传",
                    icon:"assets/drag/img/left/uploading1.png",
                    html:"<el-upload action='https://jsonplaceholder.typicode.com/posts/' :file-list='fileList' :show-file-list='true' :auto-upload='true'><el-button size='small' type='primary'>点击上传</el-button></el-upload>"
                },{
                    name:"评分",
                    icon:"assets/drag/img/left/grade1.png",
                    html:"<el-rate v-model='rate'></el-rate>"
                },{
                    name:"颜色",
                    icon:"assets/drag/img/left/color1.png",
                    html:"<el-color-picker v-model='colorPicker'></el-color-picker>"
                },{
                    name:"标签",
                    icon:"assets/drag/img/left/tag1.png",
                    html:"<el-tag>标签</el-tag>"
                },{
                    name:"进度条",
                    icon:"assets/drag/img/left/schedule1.png",
                    html:"<el-progress :percentage='progress' :show-text='true'></el-progress>"
                },{
                    name:"文字链接",
                    icon:"assets/drag/img/left/url1.png",
                    html:"<el-link>文字链接</el-link>",
                }
                ,{
                    name:"计数器",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<el-input-number v-model='inputNumber'></el-input-number>",
                },
                {
                    name:"动态表格",
                    icon:"assets/drag/img/left/form1.png",
                    html:"<el-table :data='tableList' :fit='true' :show-header='true'><el-table-column prop='id' label='列1' > </el-table-column><el-table-column prop='name' label='列2' > </el-table-column><el-table-column label='操作' fixed='right' width='200px'><template slot-scope='scope'><el-button mc-type='column-el-button' size='mini' type='primary'>编辑</el-button><el-button mc-type='column-el-button' size='mini' type='danger'>删除</el-button></template></el-table-column></el-table>"
                },{
                    name:"静态表格",
                    icon:"assets/drag/img/left/form1.png",
                    html:"<table class='mc-table'><thead><tr><th>列1</th><th>列2</th><th>列3</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table>"
                },
                {
                    name:"分页",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<el-pagination layout='prev,pager,next' :total='pageTotal' :page-size='20' :current-page.sync='currentPage' :pager-count='5'></el-pagination>"
                },
                {
                    name:"穿梭框",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<el-transfer></el-transfer>"
                },

                {
                    name:"标记",
                    icon:"assets/drag/img/left/photo1.png",
                    html:"<el-badge :value='badge'></el-badge>"
                },
                {
                    name:"头像",
                    icon:"assets/drag/img/left/photo1.png",
                    html:"<el-avatar shape='square' :size='100' fit='fit' src='img.jpg'></el-avatar>"
                },
                /*{
                没造结构 不显示
                    name:"文字提示",
                    icon:"assets/drag/img/left/photo1.png",
                    html:"<el-tooltip  effect='dark' content='Top Left 提示文字' placement='top-start'></el-tooltip>"
                },*/


            ]
        },{
            name:"导航",
            children:[
                {
                    name:"导航菜单",
                    icon:"assets/drag/img/left/navigation1.png",
                    html:"<el-menu mode='vertical'><el-submenu index='1'><span class='magical-drag-tmp-submenu-name' slot='title'>子菜单1</span><el-menu-item index='1-1'>菜单条目1-1</el-menu-item><el-submenu index='1-2'><span class='magical-drag-tmp-submenu-name' slot='title'>子菜单1-2</span><el-menu-item index='1-2-1'>菜单条目1-2-1</el-menu-item></el-submenu></el-submenu><el-submenu index='2'><span class='magical-drag-tmp-submenu-name' slot='title'>子菜单2</span><el-menu-item index='2-1'>菜单条目2-1</el-menu-item></el-submenu><el-menu-item index='3'>菜单条目3</el-menu-item></el-menu>"
                },
                {
                    name:"标签页",
                    icon:"assets/drag/img/left/tagpg1.png",
                    html:"<el-tabs value='first' @tab-click='_tabClick'><el-tab-pane label='选项1' name='first'></el-tab-pane><el-tab-pane label='选项2' name='second'></el-tab-pane></el-tabs>"
                },
                {
                    name:"面包屑",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<el-breadcrumb separator='/'><el-breadcrumb-item>首页</el-breadcrumb-item><el-breadcrumb-item>活动页</el-breadcrumb-item></el-breadcrumb>"
                },
                {
                    name:"页头",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<el-page-header content='详情页'></el-page-header>"
                },
                {
                    name:"步骤条",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<el-steps :active='stepActive' finish-status='success'><el-step title='步骤一'></el-step><el-step title='步骤二'></el-step></el-step><el-step title='步骤三'></el-step></el-steps>"
                },
            ]
        },{
            name:"其他",
            children:[
                {
                    name:"对话框",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<span><el-button class='mc-open-dialog-btn' @click='showDialog=true'>打开弹窗</el-button><el-dialog  title='提示' :visible.sync='showDialog'></el-dialog></div>"
                }/*,{
                    name:"弹出层",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<el-popover></el-popover>"
                }*/,{
                    name:"卡片",
                    icon:"assets/drag/img/left/card1.png",
                    html:"<el-card header='卡片'></el-card>"
                },
                {
                    name:"走马灯",
                    icon:"assets/drag/img/left/carousel1.png",
                    html:"<el-carousel :autoplay='true' :loop='true'><el-carousel-item></el-carousel-item><el-carousel-item></el-carousel-item></el-carousel>"
                },
                {
                    name:"折叠面板",
                    icon:"assets/drag/img/left/fold1.png",
                    html:"<el-collapse><el-collapse-item title='折叠条目1' name='1'></el-collapse-item><el-collapse-item title='折叠条目2' name='2'></el-collapse-item></el-collapse>"
                },
                {
                    name:"分割线",
                    icon:"assets/drag/img/left/line1.png",
                    html:"<el-divider></el-divider>"
                },
                {
                    name:"日历",
                    icon:"assets/drag/img/left/day1.png",
                    html:"<el-calendar v-model='calendar'></el-calendar>"
                },
                {
                    name:"图片",
                    icon:"assets/drag/img/left/photo1.png",
                    html:"<el-image src='img.jpg'></el-image>"
                },{
                    name:"图标",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<i class='el-icon-delete'></i>"
                },
                {
                    name:"警告",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<el-alert>警告</el-alert>",
                },
            ]
        },{
            name:"其他不常用",
            children:[
                {
                    name:"超链接",
                    icon:"assets/drag/img/left/url1.png",
                    html:"<a href='http://www.magicalcoder.com'>超链接</a>"
                },{
                    name:"标题",
                    icon:"assets/drag/img/left/url1.png",
                    html:"<h4>标题</h4>"
                },{
                    name:"文字",
                    icon:"assets/drag/img/left/url1.png",
                    html:"<span>行文本</span>"
                },{
                    name:"图标文字",
                    icon:"assets/drag/img/left/url1.png",
                    html:"<i>*</i>"
                },{
                    name:"段落",
                    icon:"assets/drag/img/left/p1.png",
                    html:"<p>段落</p>"
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
        },{
            name:"高级编程",
            children:[
                {
                    name:"模板",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<template slot-scope='scope'></template>"
                }
            ]
        },{
            name:"更多组件均可自行自由添加",
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
        "el-row":           {name:"行",canZoom:true,assistZoom:true,       dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],        copy:true,       paste:false, canDelete:true,assistDelete:true,onlyChildren:["el-col"],assistAdd:true,addOneItems:[{"":[{html:"<el-col></el-col>",focus:false}]}]          },
        "el-col":           {name:"列",canZoom:true,assistZoom:true,       dragInto:true,       duplicate:true,assistDuplicate:true,duplicateAttr:[],        copy:false,      paste:true,  canDelete:true,assistDelete:true,onlyParents:["el-row"] ,bind:{"v-text":'""',"v-html":'""',"v-for":"[]"}                                                              },
        "el-container":     {name:"容器",canZoom:true,assistZoom:true,     dragInto:false,       duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,   canDelete:true,assistDelete:true,                                                               },
        "el-header":        {name:"上",       dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,     paste:true,   canDelete:false,                                                              },
        "el-main":          {name:"中",canZoom:true,assistZoom:true,       dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,     paste:true,   canDelete:false,                                                              },
        "el-aside":         {name:"左",       dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,     paste:true,   canDelete:false,                                                              },
        "el-footer":        {name:"下",       dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,     paste:true,   canDelete:false,                                                              },
        "el-button-group":  {name:"按钮组",    dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,    canDelete:true,assistDelete:true,                                                              },
        "el-radio-group":   {name:"单选框组",treeExtraName:{attr:["v-model"]},    dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,    canDelete:true,assistDelete:true,     onlyChildren:["el-radio"],     bind:{"v-model":'""'} ,assistAdd:true,addOneItems:[{"":[{html:"<el-radio label='1'>单选项1</el-radio>",focus:false}]}]                          },
        "el-checkbox-group":{name:"多选框组",treeExtraName:{attr:["v-model"]},    dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,    canDelete:true,assistDelete:true,     onlyChildren:["el-checkbox"],  bind:{"v-model":"[]"}  ,assistAdd:true,addOneItems:[{"":[{html:"<el-checkbox label='1'>多选项1</el-checkbox>",focus:false}]}]                    },
        "el-form":          {name:"表单容器",canZoom:true,assistZoom:true,      dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,    canDelete:true,assistDelete:true,     onlyChildren:["el-row","el-form-item"], assistAdd:true,addOneItems:[{"":[{html:"<el-form-item label='标题'></el-form-item>",focus:false}]}]},
        "el-form-item":     {name:"表单条目",canZoom:true,assistZoom:true,treeExtraName:{attr:["label"]},   dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,    canDelete:true,assistDelete:true,     onlyParents:["el-form","el-col"]  },
        /*表单*/
        "mc-type=column-el-button":{primary:1,name:"操作按钮",treeExtraName:{attr:[],text:true},     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,      },
        "el-button":        {primary:0,name:"按钮",treeExtraName:{attr:[],text:true},     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true      },
        "el-radio":         {name:"单选框",treeExtraName:{attr:[],text:true},    dragInto:false,     duplicate:true,duplicateAttr:["label"], copy:true,      paste:false,   canDelete:true,      onlyParents:["el-radio-group"]  },
        "el-radio-button":  {name:"单选按钮",   dragInto:false,    duplicate:true,duplicateAttr:[],         copy:true,      paste:false,    canDelete:true     },
        "el-link":          {name:"链接",     dragInto:false,     duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,assistDelete:true,      },
        "el-checkbox":      {name:"多选框",treeExtraName:{attr:[],text:true},    dragInto:false,     duplicate:true,duplicateAttr:["label"],         copy:true,      paste:false,   canDelete:true,     onlyParents:["el-checkbox-group"], },
        "el-input":         {name:"输入框",treeExtraName:{attr:["v-model"]},    dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,   bind:{"v-model":'""'} /*,tmpWrapTag:'div'*/},
        "el-input-number":  {name:"计数器",treeExtraName:{attr:["v-model"]},    dragInto:false,     duplicate:false,duplicateAttr:[],         copy:false,      paste:false,   canDelete:true,assistDelete:true,     bind:{"v-model":"0"},tmpWrapTag:'span'},
        "el-select":        {name:"下拉框",treeExtraName:{attr:["v-model"]},    dragInto:false,     duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,assistDelete:true,    onlyChildren:["el-option"], bind:{"v-model":'""'}, assistAdd:true,addOneItems:[{"":[{html:"<el-option label='选择1' value='1'></el-option>",focus:true}]}]       },
        "el-option":        {name:"下拉框选项",treeExtraName:{attr:["label"]},dragInto:false,      duplicate:true,assistDuplicate:true,duplicateAttr:["value"],  copy:false,      paste:false,   canDelete:true,assistDelete:true,    onlyParents:["el-select"] ,bind:{"v-for":"[]"}        },
        "el-switch":        {name:"开关",treeExtraName:{attr:["v-model"]},     dragInto:false,     duplicate:true,duplicateAttr:[],          copy:true,      paste:false,  canDelete:true,      bind:{"v-model":"false"}},
        "el-slider":        {name:"滑块",treeExtraName:{attr:["v-model"]},     dragInto:false,     duplicate:true,assistDuplicate:true,duplicateAttr:[],          copy:true,      paste:false,  canDelete:true,assistDelete:true,      bind:{"v-model":"0"}},
        /*组件*/
        "el-tabs":          {name:"标签页",canZoom:true,assistZoom:true,treeExtraName:{attr:["v-model"]}, dragInto:false,     duplicate:true,assistDuplicate:true,duplicateAttr:[],          copy:true,      paste:false,  canDelete:true,assistDelete:true,    bind:{"v-model":'""'},assistAdd:true,addOneItems:[{"":[{html:"<el-tab-pane label='新标签' name='third'></el-tab-pane>",focus:true}]}]},
        "el-tab-pane":      {name:"标签子项",canZoom:true,assistZoom:true,treeExtraName:{attr:["label"]},  dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:["name"],    copy:false,     paste:true,   canDelete:true,assistDelete:true,    },
        "el-time-select":   {name:"时间选择器",treeExtraName:{attr:["v-model"]}, dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:false,     paste:true,   canDelete:true,assistDelete:true,    bind:{"v-model":'""'}},
        "el-date-picker":   {name:"日期选择器",treeExtraName:{attr:["v-model"]}, dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:false,     paste:true,   canDelete:true,assistDelete:true,    bind:{"v-model":'""'}},
        "el-upload":        {name:"文件上传",treeExtraName:{attr:[":file-list"]},   dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:false,  canDelete:true,assistDelete:true,    bind:{":file-list":"[]"}    },
        "el-rate":          {name:"评分",treeExtraName:{attr:["v-model"]},      dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:false,  canDelete:true,assistDelete:true,    bind:{"v-model":"0"}       },
        "el-color-picker":  {name:"颜色选择器",treeExtraName:{attr:["v-model"]}, dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:false,  canDelete:true,assistDelete:true,   bind:{"v-model":'""'} },
        "el-tag":           {name:"标签",      dragInto:false,    duplicate:true,                          copy:true,      paste:false,  canDelete:true,    },
        "el-progress":      {name:"进度条",     dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:false,  canDelete:true,assistDelete:true, bind:{':percentage':"50"}   },
        "el-table":         {name:"表格容器",treeExtraName:{attr:[":data"]},   dragInto:false,    duplicate:true,assistDuplicate:false,                           copy:true,      paste:false,  canDelete:true,assistDelete:false,  bind:{":data":"[{}]"},  onlyChildren:["el-table-column"],assistAdd:false,addOneItems:[{"":[{html:"<el-table-column label='列' width='180'></el-table-column>",focus:true}]}]             },
        "el-table-column":  {name:"表格列",treeExtraName:{attr:["label"]},    dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:false,      paste:true,  canDelete:true,assistDelete:true,  onlyParents:["el-table"],  onlyChildren:["template"],assistAdd:true,addOneItems:[{"":[{html:"<template slot-scope='scope'></template>",focus:false}]}]   },
        "el-transfer":      {name:"穿梭框",treeExtraName:{attr:["v-model"]},canZoom:true,assistZoom:true,   dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:false,  canDelete:true,assistDelete:true,    bind:{"v-model":'""',":data":"[]"}    },
        "el-card":          {name:"卡片",canZoom:true,assistZoom:true,treeExtraName:{attr:["header"]},   dragInto:true,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },
        "el-carousel":      {name:"走马灯",canZoom:true,assistZoom:true,                                  dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true,assistDelete:true,onlyChildren:["el-carousel-item"],assistAdd:true,addOneItems:[{"":[{html:"<el-carousel-item></el-carousel-item>",focus:false}]}]    },
        "el-carousel-item": {name:"走马灯条目",canZoom:true,assistZoom:true,treeExtraName:{attr:["label"]},                          dragInto:true,    duplicate:true,assistDuplicate:true,                           copy:false,      paste:true,  canDelete:true,assistDelete:true,onlyParents:["el-carousel"]    },
        "el-image":         {name:"图片",treeExtraName:{attr:[":src"]}, dragInto:false,    duplicate:true,copy:true,      paste:false,  canDelete:true ,bind:{":src":'""',':preview-src-list':'[""]'}    },
        "el-menu":          {name:"父菜单", dragInto:true,    duplicate:true, copy:true,      paste:true,  canDelete:true ,onlyChildren:["el-menu-item","el-submenu"],assistAdd:true,addOneItems:[{"":[{html:"<el-submenu index='2'><span class='magical-drag-tmp-submenu-name' slot='title'>新子菜单</span><el-menu-item index='2-1'>新菜单条目</el-menu-item></el-submenu>",focus:false}]}]     },
        "el-submenu":       {name:"子菜单", dragInto:false,    duplicate:true,duplicateAttr:["index"],   copy:true,      paste:true,  canDelete:true ,onlyParents:["el-menu","el-submenu"],onlyChildren:["el-menu","el-menu-item"],addOneItems:[{"":[{html:"<el-menu-item index='2-1'>新菜单条目</el-menu-item>",focus:false}]}]    },
        "el-menu-item":     {name:"菜单条目",dragInto:false,  duplicate:true,duplicateAttr:["index"],   copy:true,      paste:false,  canDelete:true ,onlyParents:["el-menu","el-submenu"]    },
        "el-breadcrumb":    {name:"面包屑",dragInto:false,  duplicate:true,assistDuplicate:true,   copy:true,      paste:false,  canDelete:true ,onlyChildren:["el-breadcrumb-item"],assistAdd:true,addOneItems:[{"":[{html:"<el-breadcrumb-item >新条目</el-breadcrumb-item>",focus:false}]}]    },
        "el-breadcrumb-item":{name:"面包屑条目",dragInto:false,  duplicate:true,assistDuplicate:true,   copy:true,      paste:false,  canDelete:true ,onlyParents:["el-breadcrumb"]    },
        "el-page-header":   {name:"页头",dragInto:false,  duplicate:true,assistDuplicate:true,   copy:true,      paste:false,  canDelete:true    },
        "el-steps":         {name:"步骤",dragInto:true,  duplicate:true,assistDuplicate:true,   copy:true,      paste:false,  canDelete:true,assistDelete:true,onlyChildren:["el-step"],assistAdd:true,addOneItems:[{"":[{html:"<el-step title='新步骤'></el-step>",focus:false}]}], bind:{":active":"0"},    },
        "el-step":          {name:"步骤条目",dragInto:false,  duplicate:true,assistDuplicate:true,   copy:true,      paste:false,  canDelete:true,assistDelete:true,onlyParents:["el-steps"]    },
        "el-collapse":      {name:"折叠面板",treeExtraName:{attr:["v-model"]},canZoom:true,assistZoom:true,dragInto:true,  duplicate:true,assistDuplicate:true,   copy:true,      paste:false,  canDelete:true,assistDelete:true,onlyChildren:["el-collapse-item"],assistAdd:true,addOneItems:[{"":[{html:"<el-collapse-item title='折叠条目' name='1'></el-collapse-item>",focus:false}]}], bind:{"v-model":"[]"},    },
        "el-collapse-item": {name:"折叠条目",treeExtraName:{attr:["title"]},canZoom:true,assistZoom:true,dragInto:true,  duplicate:true,assistDuplicate:true,duplicateAttr:["name"],   copy:true,      paste:false,  canDelete:true,assistDelete:true,onlyParents:["el-collapse"]   },
        "el-pagination":    {name:"分页",dragInto:false,   copy:true,      paste:false,  canDelete:true,assistDelete:true,bind:{':total':"100",':current-page.sync':"1"}},
        "el-badge":         {name:"标记",treeExtraName:{attr:[":value"]},dragInto:true,  duplicate:true,assistDuplicate:true,   copy:true,      paste:true,  canDelete:true,assistDelete:true,bind:{':value':'10'}},
        "el-avatar":        {name:"头像",treeExtraName:{attr:[":src"]},dragInto:false,  duplicate:true,assistDuplicate:true,   copy:true,      paste:true,  canDelete:true,assistDelete:true,bind:{':src':'""'}},
        "el-tooltip":       {name:"提示箱",dragInto:true,  duplicate:true,assistDuplicate:true,   copy:true,      paste:true,  canDelete:true},
        "el-calendar":      {name:"日历",treeExtraName:{attr:["v-model"]},canZoom:true,assistZoom:true,dragInto:false,  duplicate:true,assistDuplicate:true,   copy:true,      paste:true,  canDelete:true,assistDelete:true,bind:{'v-model':"null"}},
        "el-divider":       {name:"分割线",dragInto:false,  duplicate:true,assistDuplicate:true,   copy:true,      paste:false,  canDelete:true},

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
        "span":{primary:0,name:"行内",   dragInto:false, duplicate:true,duplicateAttr:[],         copy:true,      paste:false,    canDelete:true     },
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
        
        "el-alert":        {name:"警告",treeExtraName:{attr:[],text:true},     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,      },
        "el-dialog":        {name:"对话框",treeExtraName:{attr:[],text:true},     dragInto:true,     duplicate:true,duplicateAttr:[],         copy:true,      paste:true,   canDelete:true,bind:{":visible.sync":'false'}      },
        "el-popover":        {name:"弹出层",treeExtraName:{attr:[],text:true},     dragInto:true,     duplicate:true,duplicateAttr:[],         copy:true,      paste:true,   canDelete:true,      },

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
                width:"33.333%",
                content:{
                    "mc-ui-absolute-pane":[],
                    "mc-root":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'自由定位',options:[{"c":"mc-ui-absolute-pane","n":"","t":"是否开启","u":""}]}
                    ],
                    "el-row":[
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'栅格间隔'         ,attrName:':gutter'           ,extra:{min:0,max:2000}          , extend:true},
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'布局模式(现代浏览器下有效)'                                       ,options:[{n:"type",t:"FLEX",c:"flex",u:""}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'水平对齐(当FLEX模式选中时有效)'     ,attrName:'justify'          ,options:[{"start":"头部"},{"end":"尾部"},{"center":"居中"},{"space-around":"环绕"},{"space-between":"间隔"}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'垂直对齐(当FLEX模式选中时有效)'     ,attrName:'align'            ,options:[{"top":"顶部对齐"},{"middle":"居中对齐"},{"bottom":"底部对齐"}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'自定义元素标签'    ,attrName:'tag'              },
                    ],
                    "el-col":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'自由定位',options:[{"c":"mc-ui-absolute-pane","n":"","t":"是否开启","u":""}]},
                        
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'栅格占据的列数'     ,attrName:':span'          ,extra:{min:0,max:24}                                               },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'栅格左侧的间隔格数'   ,attrName:':offset'       ,extra:{min:0,max:24}                                                },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'栅格向右移动格数'     ,attrName:':push'        ,extra:{min:0,max:24}                                               },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'栅格向左移动格数'     ,attrName:':pull'        ,extra:{min:0,max:24}                                               },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'xs栅格数'       ,attrName:':xs'              ,extra:{min:0,max:24}  ,responsive:this.responsive.XS                    },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'sm栅格数'       ,attrName:':sm'              ,extra:{min:0,max:24}  ,responsive:this.responsive.SM                    },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'md栅格数'       ,attrName:':md'              ,extra:{min:0,max:24}  ,responsive:this.responsive.MD                    },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'lg栅格数'       ,attrName:':lg'              ,extra:{min:0,max:24}  ,responsive:this.responsive.LG                    },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'xl栅格数'       ,attrName:':xl'              ,extra:{min:0,max:24}  ,responsive:this.responsive.XL                    },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'自定义元素标签'      ,attrName:':tag'                                                         },
                    ],
                    "el-container":[
                        {type:this.type.SWITCH    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'子元素的排列方向'             ,options:[{n:"direction",t:"水平|垂直",c:"horizontal",u:"vertical"}]},
                    ],
                    "el-header":[
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'顶栏高度'     ,attrName:'height'          ,extra:{min:0,max:2000,suffix:"px"}                                               },
                    ],
                    "el-aside":[
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'顶栏高度'     ,attrName:'width'          ,extra:{min:0,max:2000,suffix:"px"}                                               },
                    ],
                    "el-main":[
                    ],
                    "el-footer":[
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'底栏高度'     ,attrName:'height'          ,extra:{min:0,max:2000,suffix:"px"}                                               },
                    ],
                    "el-form":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":"true","n":":inline","t":"行内模式","u":"false"},{"c":true,"n":"hide-required-asterisk","t":"隐藏必填红星","u":false}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'表单域标签位置'    ,tooltip:'表单域标签的位置，如果值为 left 或者 right 时，则需要设置表单域标签的宽度'    ,attrName:'label-position'    ,options:[{"right":"右"},{"left":"左"},{"top":"顶"}]},
                        {type:this.type.SLIDER          ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'表单域标签宽度'       ,attrName:'label-width'       ,extra:{min:0,max:1000,suffix:"px"}                                               },

                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'组件尺寸'    ,tooltip:'用于控制该表单内组件的尺寸'    ,attrName:'size'    ,options:[{"medium":"中型"},{"small":"小型"},{"mini":"迷你"}]},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'表单域标签的后缀'    ,tooltip:'表单域标签的后缀'    ,attrName:'label-suffix'},
                    ],
                    "el-form-item":[
                        {type:this.type.TEXT            ,clearAttr:true       ,oneLine:true      ,change:this.change.ATTR    ,title:'标题'     ,attrName:'label'                                                          },
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"required","t":"必填红星","u":false},{"c":"true","n":":show-message","t":"显示校验错误信息","u":"false"},{"c":true,"n":"inline-message","t":"行内形式展示校验信息","u":false}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'尺寸'    ,tooltip:'用于控制该表单域下组件的尺寸'    ,attrName:'size'    ,options:[{"medium":"中型"},{"small":"小型"},{"mini":"迷你"}]},
                        {type:this.type.SLIDER          ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'标签宽度'       ,attrName:'label-width'       ,extra:{min:0,max:1000,suffix:"px"}                                               },
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'验证错误信息'    ,tooltip:'表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息'    ,attrName:'error'},
                    ],
                    "el-button":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'测试动态编写脚本'       ,attrName:'testMethod'                       ,options:[{"m1":"弹窗您好","m2":"弹窗MagicalCoder","m3":"加载后弹窗"}],                                                            },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'尺寸'       ,attrName:'size'                       ,options:[{"medium":"中等","small":"小","mini":"迷你"}],                                                            },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'类型'       ,attrName:'type'                       ,options:[{"primary":"默认","success":"成功","warning":"警告","danger":"危险","info":"信息","text":"文本"}],                                                            },
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'状态'                       ,options:[{n:"plain",t:"朴素",c:true,u:false},{n:"round",t:"圆角",c:true,u:false},{n:"circle",t:"圆型",c:true,u:false},{n:"disabled",t:"禁用",c:true,u:false},{n:":loading",t:"加载中",c:"true",u:""},{n:":autofocus",t:"聚焦",c:"true",u:""}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'图标'       ,attrName:'icon',extendKey:"icon",extend:true                                                                                   },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'原生类型'     ,attrName:':native-type'              ,options:[{"button":"普通按钮","submit":"提交","reset":"重置"}],                                                            },
                    ],
                    "mc-type=column-el-button":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'尺寸'       ,attrName:'size'                       ,options:[{"medium":"中等","small":"小","mini":"迷你"}],                                                            },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'类型'       ,attrName:'type'                       ,options:[{"primary":"默认","success":"成功","warning":"警告","danger":"危险","info":"信息","text":"文本"}],                                                            },
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'状态'                       ,options:[{n:"plain",t:"朴素",c:true,u:false},{n:"round",t:"圆角",c:true,u:false},{n:"circle",t:"圆型",c:true,u:false},{n:"disabled",t:"禁用",c:true,u:false},{n:":loading",t:"加载中",c:"true",u:""},{n:":autofocus",t:"聚焦",c:"true",u:""}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'图标'       ,attrName:'icon',extendKey:"icon",extend:true                                                                                   },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'原生类型'     ,attrName:':native-type'              ,options:[{"button":"普通按钮","submit":"提交","reset":"重置"}],                                                            },
                    ],
                    "el-link":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'类型'        ,attrName:'type'                       ,options:[{"primary":"默认","success":"成功","warning":"警告","danger":"危险","info":"信息","text":"文本"}],                                                            },
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'状态'                       ,options:[{n:"disabled",t:"禁用",c:true,u:false},{n:":underline",t:"去下划线",c:"false",u:""},{n:":autofocus",t:"聚焦",c:"true",u:""}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'图标'        ,attrName:'icon',extendKey:"icon",extend:true                                                                                   },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'链接地址'        ,attrName:'href'                                                                                },
                    ],
                    "el-radio":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'值'       ,attrName:'label'                                                                                  },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'状态'                       ,options:[{n:"disabled",t:"禁用",c:true,u:false},{n:"border",t:"边框",c:true,u:false}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'尺寸'        ,attrName:'size'                       ,options:[{"medium":"中等","small":"小","mini":"迷你"}],                                                            },
                        // {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'name'        ,attrName:'name'                                                                                   },
                    ],
                    "el-radio-button":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'值'       ,attrName:'label'                                                                                },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'状态'                   ,options:[{n:"disabled",t:"禁用",c:true,u:false}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'name'        ,attrName:'name'                                                                                },
                    ],
                    "el-radio-group":[
                        {type:this.type.SELECT       ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'尺寸'        ,attrName:'size'                       ,options:[{"medium":"中等","small":"小","mini":"迷你"}],                                                            },
                        {type:this.type.CHECKBOX     ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'状态'                       ,options:[{n:"disabled",t:"禁用",c:true,u:false}]},
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'激活时的文本色'  ,attrName:'text-color'                                                                         },
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'激活时的填充色与边框色'        ,attrName:'fill'                                                                     },
                    ],
                    "el-checkbox-group":[
                        {type:this.type.SELECT       ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'尺寸'        ,attrName:'size'                       ,options:[{"medium":"中等","small":"小","mini":"迷你"}],                                                            },
                        {type:this.type.CHECKBOX     ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'状态'                       ,options:[{n:"disabled",t:"禁用",c:true,u:false}]},
                        {type:this.type.SLIDER       ,clearAttr:true    ,oneLine:false       ,change:this.change.ATTR    ,title:'最小选择个数'        ,attrName:':min'              ,extra:{min:0,max:100}                                               },
                        {type:this.type.SLIDER       ,clearAttr:true    ,oneLine:false       ,change:this.change.ATTR    ,title:'最大选择个数'        ,attrName:':max'              ,extra:{min:0,max:100}                                               },
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'激活时的文本色'  ,attrName:'text-color'                                                                         },
                        {type:this.type.COLOR_PICKER ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'激活时的填充色与边框色'        ,attrName:'fill'                                                                     },
                    ],
                    "el-checkbox":[
                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'默认的值'       ,attrName:'label'                                                              },
                        {type:this.type.TEXT         ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'选中时值'  ,attrName:'true-label'                                                              },
                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'没选中值' ,attrName:'false-label'                                                            },
                        {type:this.type.CHECKBOX     ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'状态'                       ,options:[{n:"disabled",t:"禁用",c:true,u:false},{n:"checked",t:"勾选",c:true,u:false}/*,{n:":indeterminate",t:"indeterminate",c:"isIndeterminate",u:false}*/,{n:"border",t:"显示边框",c:true,u:false}]},
                        {type:this.type.SELECT       ,clearAttr:true   ,oneLine:false        ,change:this.change.ATTR    ,title:'Checkbox的尺寸，仅在边框状态下有效'        ,attrName:'size'                      ,options:[{"medium":"中等","small":"小型","mini":"迷你"}],                                                            },
                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'name'        ,attrName:'name'                                                           },
                    ],
                    "el-input":[
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'类型'        ,attrName:'type'                              ,options:[{"text":"输入框","textarea":"文本框"}]                              },
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'尺寸 '        ,attrName:'size'                       ,options:[{"medium":"中等","small":"小型","mini":"迷你"}],                                                            },
                        {type:this.type.CHECKBOX   ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'状态'                      ,options:[{n:"show-word-limit",t:"字数统计",c:true,u:false},{n:"clearable",t:"可清空",c:true,u:false},{n:"show-password",t:"切换密码图标",c:true,u:false},{n:"disabled",t:"禁用",c:true,u:false},{n:"autosize",t:"自适应",c:true,u:false},{n:"readonly",t:"原生属性，是否只读",c:true,u:false}]},
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'提示' ,attrName:'placeholder'                                                              },
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'头部图标' ,attrName:'prefix-icon',extendKey:"icon",extend:true                                                             },
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'尾部图标' ,attrName:'suffix-icon',extendKey:"icon",extend:true                                                              },
                    ],
                    "el-input-number":[
                        // {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'变量名*'       ,attrName:'value'              ,extra:{min:0,max:2000}                                               },
                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'最小值'        ,attrName:':min'              ,extra:{min:0,max:20000}                                               },
                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'最大值'        ,attrName:':max'              ,extra:{min:0,max:20000}                                               },
                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'步长'       ,attrName:':step'              ,extra:{min:0,max:200}                                               },
                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'步长倍数'     ,attrName:'step-strictly'              ,extra:{min:0,max:2000}                                               },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true        ,change:this.change.ATTR    ,title:'精度小数'  ,attrName:':precision'                                                        },
                        {type:this.type.SELECT    ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'尺寸'        ,attrName:'size'                      ,options:[{"large":"大型","small":"小型","mini":"迷你"}],                                                            },
                        {type:this.type.CHECKBOX  ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'状态'                       ,options:[{n:"disabled",t:"禁用",c:true,u:false},{n:"controls",t:"控制按钮",c:true,u:false}]},
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'提示文本' ,attrName:'placeholder'                                                             },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'关联文字'       ,attrName:'label'                                                            },
                    ],
                    "el-select":[
                        {type:this.type.SELECT    ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'输入框尺寸'        ,attrName:'size'      ,options:[{"medium":"中等","small":"小型","mini":"迷你"}],                                                            },
                        // {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'作为 value 唯一标识的键名，变量名*为对象类型时必填'   ,attrName:'value-key'                                                      },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'提示文本' ,attrName:'placeholder'                                                      },
                        {type:this.type.CHECKBOX  ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'状态'      ,options:[{n:"disabled",t:"禁用",c:true,u:false},
                                                                                                                                                                                {n:"clearable",t:"清空选项",c:true,u:false},{n:"allow-create",t:"创建新条目 ",c:true,u:false},
                                                                                                                                                                                {n:"reserve-keyword",t:"保留关键词",c:true,u:false},{n:"default-first-option",t:"回车匹配第一个",c:true,u:false},{n:"popper-append-to-body",t:"弹框插入body",c:true,u:false},{n:"automatic-dropdown",t:"自动弹出菜单",c:true,u:false}]},
                        {type:this.type.CHECKBOX  ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'多选状态'      ,options:[{n:"multiple",t:"多选",c:true,u:false},{n:"collapse-tags",t:"多选时文字展示",c:true,u:false}]},
                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false         ,change:this.change.ATTR   ,title:'多选时最大项目数'     ,attrName:'multiple-limit'       ,extra:{min:0,max:100}                                               },

                        {type:this.type.CHECKBOX  ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'搜索状态'      ,options:[{n:"filterable",t:"可搜索",c:true,u:false},{n:":loading",t:"加载中",c:"select.loading",u:""},]},
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:false         ,change:this.change.ATTR    ,title:'自定义搜索方法'      ,attrName:':filter-method'                                                      },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:false         ,change:this.change.ATTR    ,title:'远程搜索方法'      ,attrName:':remote-method'                                                      },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:false         ,change:this.change.ATTR    ,title:'远程加载时显示的文字'        ,attrName:'loading-text'                                                      },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:false         ,change:this.change.ATTR    ,title:'搜索条件无匹配时显示的文字'       ,attrName:'no-match-text'                                                      },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:false         ,change:this.change.ATTR    ,title:'选项为空时显示的文字'        ,attrName:'no-data-text'                                                      },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:false         ,change:this.change.ATTR    ,title:'下拉框的类名'        ,attrName:'popper-class'                                                      },
                    ],
                    "el-option":[
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'值'      ,attrName:'value'                                                      },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'文本'      ,attrName:'label'                                                      },
                        {type:this.type.CHECKBOX  ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'状态'         ,options:[{n:"disabled",t:"禁用",c:true,u:false}]},
                    ],
                    "el-switch":[
                        // {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'打开时值'    ,attrName:'active-value'                                                      },
                        // {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'关闭时值'  ,attrName:'inactive-value'                                                      },
                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'宽度'       ,attrName:'width'       ,extra:{min:0,max:100}                                               },
                        {type:this.type.CHECKBOX  ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'状态'      ,options:[{n:"disabled",t:"是否禁用",c:true,u:false}]},
                        {type:this.type.COLOR_PICKER ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'打开时背景色'    ,attrName:'active-color'                                                                  },
                        {type:this.type.COLOR_PICKER ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'关闭时背景色'  ,attrName:'inactive-color'                                                                  },
                        // {type:this.type.TEXT      ,clearAttr:true      ,oneLine:false         ,change:this.change.ATTR    ,title:'打开时自定义类名 '      ,attrName:'active-icon-class' ,extendKey:"icon",extend:true                                                     },
                        // {type:this.type.TEXT      ,clearAttr:true      ,oneLine:false         ,change:this.change.ATTR    ,title:'关闭时自定义类名 '      ,attrName:'inactive-icon-class' ,extendKey:"icon",extend:true                                                     },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:false         ,change:this.change.ATTR    ,title:'打开时文字描述'     ,attrName:'active-text'                                                      },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:false         ,change:this.change.ATTR    ,title:'关闭时文字描述'   ,attrName:'inactive-text'                                                      },
                        // {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'name'      ,attrName:'name'                                                      },
                    ],
                    "el-slider":[
                        {type:this.type.SELECT    ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'尺寸'  ,attrName:'input-size'      ,options:[{"large":"大型","medium":"中等","small":"小型","mini":"迷你"}],                                                            },
                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'最小值'        ,attrName:':min'       ,extra:{min:0,max:20000}                                               },
                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'最大值'        ,attrName:':max'       ,extra:{min:0,max:20000}                                               },
                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'步长'       ,attrName:':step'         ,extra:{min:0,max:2000}                                               },
                        {type:this.type.CHECKBOX  ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'状态'         ,options:[{n:":disabled",t:"是否禁用",c:true,u:false},{n:"show-input",t:"显示输入框",c:true,u:false},{n:"show-input-controls",t:"显示输入框的控制按钮",c:true,u:false},{n:"show-stops",t:"显示间断点",c:true,u:false},{n:":show-tooltip",t:"tooltip",c:"true",u:"false"}]},
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'格式化Tooltip'      ,attrName:':format-tooltip'                                                      },
                        {type:this.type.CHECKBOX  ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'状态'         ,options:[{n:"range",t:"范围选择",c:true,u:false},{n:"vertical",t:"竖向模式",c:true,u:false}]},
                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'高度，竖向模式时必填'     ,attrName:'height'          ,extra:{min:0,max:2000,suffix:"px"}                                               },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'屏幕阅读器标签'      ,attrName:':label'                                                      },
                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'去抖动延迟'    ,attrName:'debounce'       ,extra:{min:0,max:1000}                                               },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'tooltip类名'      ,attrName:'tooltip-class'                                                      },
                        // {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'标记， key 的类型必须为 number 且取值在闭区间 '      ,attrName:':marks'                                                      },
                    ],
                    "el-upload":[
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'上传地址'      ,attrName:'action'                                                      },
                        {type:this.type.CHECKBOX  ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'状态'         ,options:[{n:"disabled",t:"禁用",c:true,u:false},{n:"multiple",t:"多选文件",c:true,u:false},{n:"drag",t:"拖拽上传",c:true,u:false},{n:":auto-upload",t:"自动上传",c:"true",u:"false"},{n:"with-credentials",t:"发送cookie",c:true,u:false},{n:":show-file-list",t:"显示已上传",c:"true",u:"false"}]},
                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'最大上传文件个数'        ,attrName:':limit'       ,extra:{min:0,max:500}                                               },
                        {type:this.type.SELECT    ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'文件列表类型'        ,attrName:'list-type'      ,options:[{"text":"文字","picture":"图片","picture-card":"图片卡片"}],                                                            },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'文件类型'      ,attrName:'accept'                                                      },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'name'      ,attrName:'name'                                                      },
                    ],
                    "el-rate":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"disabled","t":"只读","u":false},{"c":true,"n":"allow-half","t":"半选","u":false},{"c":true,"n":"show-text","t":"显示辅助文字","u":false},{"c":true,"n":"show-score","t":"显示当前分数","u":false}]},
                        {type:this.type.COLOR_PICKER    ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'未选中颜色'    ,tooltip:'未选中 icon 的颜色'    ,attrName:'void-color'},
                        {type:this.type.COLOR_PICKER    ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'只读未选颜色'    ,tooltip:'只读时未选中 icon 的颜色'    ,attrName:'disabled-void-color'},
                        {type:this.type.COLOR_PICKER    ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'辅助文字颜色'    ,tooltip:'辅助文字的颜色'    ,attrName:'text-color'},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'最大分值'    ,attrName:':max'    ,extra:{"min":0,"max":100}},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'低分和中等分数的界限值'    ,tooltip:'低分和中等分数的界限值，值本身被划分在低分中'    ,attrName:':low-threshold'    ,extra:{"min":0,"max":100}},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'高分和中等分数的界限值'    ,tooltip:'高分和中等分数的界限值，值本身被划分在高分中'    ,attrName:':high-threshold'    ,extra:{"min":0,"max":100}},
                        // {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:''    ,tooltip:'icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色'    ,attrName:':colors'},
                        // {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:''    ,tooltip:'icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名'    ,attrName:':icon-classes'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'未选中类名'    ,tooltip:'未选中 icon 的类名'    ,attrName:'void-icon-class',extendKey:"icon",extend:true},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'只读时未选中类名'    ,tooltip:'只读时未选中 icon 的类名'    ,attrName:'disabled-void-icon-class',extendKey:"icon",extend:true},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'辅助文字数组'    ,attrName:'texts'},
                        // {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'分数显示模板'    ,attrName:'score-template'},
                    ],
                    "el-color-picker":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"disabled","t":"禁用","u":false},{"c":true,"n":"show-alpha","t":"支持透明度","u":false}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR    ,title:'颜色格式' ,tooltip:'写入 v-model 的颜色的格式'    ,attrName:'color-format'    ,options:[{"hsl":"hsl"},{"hsv":"hsv"},{"hex":"十六进制"},{"rgb":"RGB"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR    ,title:'尺寸'      ,attrName:'size'    ,options:[{"medium":"中型"},{"small":"小"},{"mini":"迷你"}]},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR    ,title:'下拉类名'    ,tooltip:'ColorPicker 下拉框的类名'    ,attrName:'popper-class'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR    ,title:'预定义颜色'    ,attrName:':predefine'},
                    ],
                    "el-tag":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"closable","t":"是否可关闭","u":false},{"c":true,"n":"disable-transitions","t":"是否禁用渐变动画","u":false},{"c":true,"n":"hit","t":"是否有边框描边","u":false}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'类型'    ,attrName:'type'    ,options:[{"success":"成功"},{"info":"信息"},{"warning":"警告"},{"danger":"危险"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'尺寸'    ,attrName:'size'    ,options:[{"medium":"中型"},{"small":"小型"},{"mini":"迷你"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'主题'    ,attrName:'effect'    ,options:[{"dark":"暗黑"},{"light":"明亮"},{"plain":"浅白"}]},
                        {type:this.type.COLOR_PICKER    ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'背景色'  ,attrName:'color'},
                    ],
                    "el-progress":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":"true","n":":text-inside","t":"条内文字","u":"false"},{"c":"true","n":":show-text","t":"显示文字","u":"false"}]},
                        {type:this.type.COLOR_PICKER    ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'背景色'    ,attrName:'color'},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'类型'    ,attrName:'type'    ,options:[{"line":"条形"},{"circle":"圆形"},{"dashboard":"仪表盘"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'当前状态'    ,tooltip:'进度条当前状态'    ,attrName:'status'    ,options:[{"success":"成功"},{"exception":""},{"warning":"警告"}]},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'百分比'    ,attrName:':percentage'    ,extra:{"min":0,"max":100}},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'宽度'    ,attrName:':stroke-width'    ,extra:{"min":0,"max":1000}},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'环形进度条尺寸',tooltip:'环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）'    ,attrName:'width'    ,extra:{"min":0,"max":1000}},
                    ],
                    "el-table":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true      ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"stripe","t":"斑马纹","u":false},{"c":true,"n":"border","t":"纵向边框","u":false},{"c":"true","n":"fit","t":"列宽自撑开","u":"false"},{"c":"true","n":"show-header","t":"显示表头","u":"false"},{"c":true,"n":"highlight-current-row","t":"高亮当前行","u":false},{"c":true,"n":"default-expand-all","t":"展开所有行","u":false},{"c":true,"n":"show-summary","t":"表尾显示合计行","u":false},{"c":"true","n":"select-on-indeterminate","t":"多选表格全选","u":"false"},{"c":true,"n":"lazy","t":"懒加载子节点数据","u":false}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'尺寸'    ,tooltip:'Table 的尺寸'    ,attrName:'size'    ,options:[{"medium":"中型"},{"small":"小型"},{"mini":"迷你"}]},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'高度'     ,attrName:'height'          ,extra:{min:0,max:2000,suffix:"px"}                                               },
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'最大高度'  ,attrName:'max-height'          ,extra:{min:0,max:2000,suffix:"px"}                                               },
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'当前行的key'    ,tooltip:'当前行的 key，只写属性'    ,attrName:'current-row-key'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'空数据文本'    ,tooltip:'空数据时显示的文本内容'    ,attrName:'empty-text'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'排序数据'    ,tooltip:'{prop: \'date\', order: \'descending\'}'    ,attrName:':default-sort'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'tooltip'    ,tooltip:''    ,attrName:'tooltip-effect'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'合计文本'    ,tooltip:'合计行第一列的文本'    ,attrName:'sum-text'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'树节点的缩进'    ,tooltip:'展示树形数据时，树节点的缩进'    ,attrName:'indent'},
                    ],
                    "el-table-column":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'标题'    ,attrName:'label'},
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":"true","n":"resizable","t":"拖动改变宽度","u":"false"},{"c":true,"n":"sortable","t":"排序","u":false},{"c":true,"n":"show-overflow-tooltip","t":"显示隐藏文本","u":false},{"c":true,"n":"reserve-selection","t":"保留之前选中的数据","u":false},{"c":"true","n":"filter-multiple","t":"多选过滤","u":"false"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'列类型'    ,tooltip:'列类型'    ,attrName:':type'    ,options:[{"selection":"selection"},{"index":"index"},{"expand":"expand"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'固定位置'    ,tooltip:'固定位置'    ,attrName:'fixed'    ,options:[{"left":"左"},{"right":"右"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'对齐方式'    ,attrName:'align'    ,options:[{"left":"左"},{"center":"中"},{"right":"右"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'表头对齐方式'    ,tooltip:'表头对齐方式，若不设置该项，则使用表格的对齐方式'    ,attrName:'header-align'    ,options:[{"left":"左"},{"center":"中"},{"right":"右"}]},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'宽度'    ,tooltip:'列宽度'    ,attrName:'width'    ,extra:{"min":0,"max":20000,"suffix":"px"}},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'最小宽度'    ,tooltip:'列最小宽度'    ,attrName:'min-width'    ,extra:{"min":0,"max":20000,"suffix":"px"}},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'column的key'    ,tooltip:'column的key'    ,attrName:'column-key'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'样式名'    ,tooltip:'列的className'    ,attrName:'class-name'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'标题样式名'    ,tooltip:'当前列标题的自定义类名'    ,attrName:'label-class-name'},
                    ],
                    "el-time-select":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"readonly","t":"完全只读","u":false},{"c":true,"n":"disabled","t":"禁用","u":false},{"c":"true","n":":editable","t":"文本框可输入","u":"false"},{"c":"true","n":":clearable","t":"是否显示清除按钮","u":"false"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'尺寸'    ,attrName:'size'    ,options:[{"medium":"中型"},{"small":"小型"},{"mini":"迷你"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'对齐方式'    ,attrName:'align'    ,options:[{"left":"靠左"},{"center":"居中"},{"right":"靠右"}]},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'提示文本'    ,tooltip:'非范围选择时的占位内容'    ,attrName:'placeholder'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'时间格式'    ,tooltip:'当前时间日期选择器特有的选项参考下表'    ,attrName:':picker-options'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'默认时间'    ,tooltip:'可选，选择器打开时默认显示的时间'    ,attrName:'default-value'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'头部图标'    ,tooltip:'自定义头部图标的类名'    ,attrName:'prefix-icon',extendKey:"icon",extend:true},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'清空图标'    ,tooltip:'自定义清空图标的类名'    ,attrName:'clear-icon',extendKey:"icon",extend:true},
                    ],
                    "el-date-picker":[
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'显示类型'    ,attrName:'type'    ,options:[{"year":"年"},{"month":"年月"},{"date":"年月日"}/*,{"dates":"dates"},{"week":"周"}*/,{"datetime":"年月日时分秒"}/*,{"datetimerange":"日期时间范围"},{"daterange":"日期范围"},{"monthrange":"月范围"}*/]},
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"readonly","t":"完全只读","u":false},{"c":true,"n":"disabled","t":"禁用","u":false},{"c":"true","n":":editable","t":"文本框可输入","u":"false"},{"c":"true","n":":clearable","t":"是否显示清除按钮","u":"false"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'输入框尺寸'    ,attrName:'size'    ,options:[{"large":""},{"small":"小型"},{"mini":"迷你"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'对齐方式'    ,attrName:'align'    ,options:[{"left":"靠左"},{"center":"居中"},{"right":"靠右"}]},
                        // {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'日期格式'    ,tooltip:''    ,attrName:'format'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'提示文本'    ,tooltip:'非范围选择时的占位内容'    ,attrName:'placeholder'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'默认日期'    ,tooltip:'可选，选择器打开时默认显示的时间'    ,attrName:'default-value'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'头部图标'    ,tooltip:'自定义头部图标的类名'    ,attrName:'prefix-icon',extendKey:"icon",extend:true},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'清空图标'    ,tooltip:'自定义清空图标的类名'    ,attrName:'clear-icon',extendKey:"icon",extend:true},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'选择范围时的分隔符'    ,tooltip:'选择范围时的分隔符'    ,attrName:'range-separator'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'范围选择时开始日期的占位内容'    ,tooltip:'范围选择时开始日期的占位内容'    ,attrName:'start-placeholder'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'范围选择时结束日期的占位内容'    ,tooltip:'范围选择时结束日期的占位内容'    ,attrName:'end-placeholder'},
                    ],
                    "el-transfer":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"filterable","t":"是否可搜索","u":false}]},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'搜索框占位符'    ,attrName:'filter-placeholder'},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'排序策略'    ,tooltip:'右侧列表元素的排序策略',attrName:'target-order'    ,options:[{"original":"原始顺序"},{"push":"追加"},{"unshift":"头部插入"}]},
                        // {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'自定义列表标题'    ,tooltip:'自定义列表标题'    ,attrName:':titles'},
                        // {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'自定义按钮文案'    ,tooltip:'自定义按钮文案'    ,attrName:':button-texts'},
                        // {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'列表顶部勾选状态文案'    ,tooltip:'列表顶部勾选状态文案'    ,attrName:':format'},
                        // {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'数据源的字段别名'    ,tooltip:'数据源的字段别名'    ,attrName:'props'},
                        // {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'初始状态下左侧列表的已勾选项的 key 数组'    ,tooltip:'初始状态下左侧列表的已勾选项的 key 数组'    ,attrName:':left-default-checked'},
                        // {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'初始状态下右侧列表的已勾选项的 key 数组'    ,tooltip:'初始状态下右侧列表的已勾选项的 key 数组'    ,attrName:':right-default-checked'},
                    ],
                    "el-tabs":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"closable","t":"标签是否可关闭","u":false},{"c":true,"n":"addable","t":"标签是否可增加","u":false},{"c":true,"n":"editable","t":"标签是否同时可增加和关闭","u":false},{"c":true,"n":"stretch","t":"标签的宽度是否自撑开","u":false}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'风格类型'    ,attrName:'type'    ,options:[{"card":"卡片"},{"border-card":"盒装卡片"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'选项卡位置'    ,tooltip:'选项卡所在位置'    ,attrName:'tab-position'    ,options:[{"top":""},{"right":"靠右"},{"bottom":"底部"},{"left":"靠左"}]},
                    ],
                    "el-tab-pane":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"disabled","t":"是否禁用","u":false},{"c":true,"n":"closable","t":"标签是否可关闭","u":false},{"c":true,"n":"lazy","t":"标签是否延迟渲染","u":false}]},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'标题'    ,attrName:'label'},
                    ],
                    "el-card":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'头部'    ,tooltip:'设置 header'    ,attrName:'header'},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'阴影显示时机'    ,tooltip:'设置阴影显示时机'    ,attrName:'shadow'    ,options:[{"always":"一直"},{"hover":"鼠标悬停"},{"never":"从不"}]},
                    ],
                    "el-carousel":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":"true","n":":autoplay","t":"是否自动切换","u":"false"},{"c":"click","n":"trigger","t":"指示器的点击触发","u":""},{"c":"card","n":"type","t":"卡片类型","u":""},{"c":"true","n":":loop","t":"是否循环显示","u":"false"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'指示器的位置'    ,attrName:'indicator-position'    ,options:[{"outside":"外边"},{"none":"无"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'切换箭头的显示时机'    ,tooltip:'切换箭头的显示时机'    ,attrName:'arrow'    ,options:[{"always":"一直"},{"hover":"鼠标悬停"},{"never":"从不"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'走马灯展示的方向'    ,tooltip:'走马灯展示的方向'    ,attrName:'direction'    ,options:[{"horizontal":"水平"},{"vertical":"垂直"}]},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'走马灯的高度'    ,tooltip:'走马灯的高度'    ,attrName:'height'    ,extra:{"min":0,"max":2000,"suffix":"px"}},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'初始状态激活的幻灯片的索引，从 0 开始'    ,tooltip:'初始状态激活的幻灯片的索引，从 0 开始'    ,attrName:'initial-index'    ,extra:{"min":0,"max":100}},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'自动切换的时间间隔，单位为毫秒'    ,tooltip:'自动切换的时间间隔，单位为毫秒'    ,attrName:':interval'    ,extra:{"min":0,"max":20000}},
                    ],
                    "el-carousel-item":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'幻灯片的名字'    ,tooltip:'幻灯片的名字，可用作 setActiveItem 的参数'    ,attrName:'name'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'该幻灯片所对应指示器的文本'    ,attrName:'label'},
                    ],
                    "el-avatar":[
                        {type:this.type.FILEUPLOAD      ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'图片地址'   ,attrName:'src'     },
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'设置头像的形状'    ,tooltip:'设置头像的形状'    ,attrName:'shape'    ,options:[{"circle":"圆形"},{"square":"方形"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'自适应'    ,tooltip:'当展示类型为图片的时候，设置图片如何适应容器框'    ,attrName:'fit'    ,options:[{"fill":"填充"},{"contain":"包含"},{"cover":"覆盖"},{"none":"无"},{"scale-down":"比例缩减"}]},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'头像图标'    ,tooltip:'设置头像的图标类型，参考 Icon 组件'    ,attrName:'icon',extendKey:"icon",extend:true},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'头像大小'        ,attrName:':size'    ,extra:{"min":0,"max":2000}},
                        // {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像'    ,tooltip:'以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像'    ,attrName:'srcSet'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'描述图像的替换文本'    ,tooltip:'描述图像的替换文本'    ,attrName:'alt'},
                    ],
                    "el-image":[
                        {type:this.type.FILEUPLOAD      ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'图片地址'   ,attrName:'src'     },
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true      ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"lazy","t":"是否开启懒加载","u":false}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'适应容器框'    ,tooltip:'确定图片如何适应容器框，同原生object-fit'    ,attrName:'fit'    ,options:[{"fill":"填充"},{"contain":"包含"},{"cover":"覆盖"},{"none":"无"},{"scale-down":"缩减"}]},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'设置图片预览的 z-index'    ,tooltip:'设置图片预览的 z-index'    ,attrName:'z-index'    ,extra:{"min":0,"max":2000}},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true      ,change:this.change.ATTR     ,title:'原生alt'    ,attrName:'alt'},
                    ],
                    "el-menu":[
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'模式'    ,attrName:'mode'    ,options:[{"horizontal":"水平"},{"vertical":"垂直"}]},
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":"true","n":":collapse","t":"水平折叠收起菜单","u":"false"},{"c":true,"n":"unique-opened","t":"只展开一个子菜单","u":false},{"c":true,"n":"router","t":"路由模式激活地址","u":false},{"c":"true","n":":collapse-transition","t":"折叠动画","u":"false"}]},
                        {type:this.type.COLOR_PICKER    ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'背景色'    ,attrName:'background-color'},
                        {type:this.type.COLOR_PICKER    ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'文字颜色'    ,attrName:'text-color'},
                        {type:this.type.COLOR_PICKER    ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'激活菜单的文字颜色'    ,attrName:'active-text-color'},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'子菜单打开的触发方式'    ,tooltip:'子菜单打开的触发方式(只在 mode 为 horizontal 时有效)'    ,attrName:'menu-trigger'    ,options:[{"hover":"鼠标悬停"},{"click":"点击"}]},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'当前激活菜单的索引'    ,tooltip:'当前激活菜单的 index'    ,attrName:':default-active'},
                    ],
                    "el-submenu":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"disabled","t":"禁用","u":false}]},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'唯一索引或跳转地址'    ,tooltip:'菜单的index'    ,attrName:'index'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'菜单的自定义类名'    ,tooltip:'弹出菜单的自定义类名'    ,attrName:'popper-class'},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'展开延时'        ,attrName:'show-timeout'    ,extra:{"min":0,"max":5000}},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'收起延时'        ,attrName:'hide-timeout'    ,extra:{"min":0,"max":5000}},

                    ],
                    "el-menu-item":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"disabled","t":"禁用","u":false}]},
                        {type:this.type.TEXT      ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR    ,title:'唯一索引或跳转地址'    ,tooltip:'菜单的index'    ,attrName:'index'},

                    ],
                    "magical-drag-tmp-submenu-name":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                    ]
                    ,
                    "el-breadcrumb":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'分隔符'       ,attrName:'separator'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'图标分隔符'       ,attrName:'separator-class',extendKey:"icon",extend:true},
                    ],
                    "el-breadcrumb-item":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        // {type:this.type.TEXT      ,clearAttr:true       ,oneLine:false    ,change:this.change.ATTR     ,title:'跳转地址'       ,attrName:'to'},
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"replace","t":"禁用历史地址","u":false}]},

                    ],
                    "el-page-header":[
                        {type:this.type.TEXT      ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR    ,title:'标题'    ,attrName:'title'},
                        {type:this.type.TEXT      ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR    ,title:'内容'    ,attrName:'content'},
                    ],
                    "el-steps":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"align-center","t":"进行居中对齐","u":false},{"c":true,"n":"simple","t":"是否应用简洁风格","u":false}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'显示方向'    ,attrName:'direction'    ,options:[{"vertical":"垂直"},{"horizontal":"水平"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'设置当前步骤的状态'    ,tooltip:'设置当前步骤的状态'    ,attrName:'process-status'    ,options:[{"wait":"等待"},{"process":"处理中"},{"finish":"完成"},{"error":"错误"},{"success":"成功"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'设置结束步骤的状态'    ,tooltip:'设置结束步骤的状态'    ,attrName:'finish-status'    ,options:[{"wait":"等待"},{"process":"处理中"},{"finish":"完成"},{"error":"错误"},{"success":"成功"}]},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'步骤的间距'        ,attrName:':space'    ,extra:{"min":0,"max":2000}},
                    ],
                    "el-step":[
                        {type:this.type.TEXT      ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR    ,title:'标题'    ,attrName:'title'},
                        {type:this.type.TEXT      ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR    ,title:'描述性文字'    ,attrName:'description'},
                        {type:this.type.TEXT      ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR    ,title:'图标样式'    ,attrName:'icon',extendKey:"icon",extend:true},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'设置当前步骤的状态'    ,tooltip:'设置当前步骤的状态'    ,attrName:'status'    ,options:[{"wait":"等待"},{"process":"处理中"},{"finish":"完成"},{"error":"错误"},{"success":"成功"}]},
                    ],
                    "el-collapse":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"accordion","t":"手风琴","u":false}]},
                    ],
                    "el-collapse-item":[
                        {type:this.type.CHECKBOX  ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"disabled","t":"禁用","u":false}]},
                        {type:this.type.TEXT      ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR    ,title:'唯一标示' ,attrName:'name'},
                        {type:this.type.TEXT      ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR    ,title:'标题'    ,attrName:'title'},

                    ],
                    "el-pagination":[
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'每页显示条目个数'        ,attrName:':page-size'    ,extra:{"min":1,"max":200}},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'页码按钮的数量'        ,attrName:':pager-count'    ,extra:{"min":1,"max":19,"step":2}},
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true      ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"small","t":"小型分页样式","u":false},{"c":true,"n":"background","t":"分页按钮添加背景色","u":false},{"c":true,"n":"disabled","t":"禁用","u":false},{"c":"true","n":":hide-on-single-page","t":"只有一页时是否隐藏","u":"false"}]},

                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'替代图标显示的上一页文字'    ,tooltip:'替代图标显示的上一页文字'    ,attrName:'prev-text'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'替代图标显示的下一页文字'    ,tooltip:'替代图标显示的下一页文字'    ,attrName:'next-text'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'每页显示个数选择器的下拉框类名'    ,tooltip:'每页显示个数选择器的下拉框类名'    ,attrName:'popper-class'},

                    ],
                    "el-badge":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true      ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"is-dot","t":"小圆点","u":false},{"c":true,"n":"hidden","t":"隐藏badge","u":false}]},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'最大值显示+'        ,attrName:'max'    ,extra:{"min":0,"max":2000}},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'类型'        ,attrName:'type'    ,options:[{"primary":"默认","success":"成功","warning":"警告","danger":"危险","info":"信息"}]},
                    ],

                    "el-tooltip":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"disabled","t":"禁用","u":false},{"c":"true","n":"visible-arrow","t":"显示箭头","u":"false"},{"c":true,"n":"manual","t":"手动控制模式","u":false},{"c":"true","n":"enterable","t":"鼠标可进入","u":"false"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'默认提供的主题'    ,tooltip:'主题'    ,attrName:'effect'    ,options:[{"dark":"暗"},{"light":"亮"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'出现位置'    ,tooltip:'Tooltip 的出现位置'    ,attrName:'placement'    ,options:[{"top":"顶部"},{"top-start":"上左"},{"top-end":"上右"},{"bottom":"底部"},{"bottom-start":"下左"},{"bottom-end":"下右"},{"left":"左中"},{"left-start":"左上"},{"left-end":"左下"},{"right":"右中"},{"right-start":"右上"},{"right-end":"右下"}]},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'出现位置的偏移量'    ,tooltip:'出现位置的偏移量'    ,attrName:'offset'    ,extra:{"min":0,"max":20000}},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'延迟出现，单位毫秒'    ,tooltip:'延迟出现，单位毫秒'    ,attrName:'open-delay'    ,extra:{"min":0,"max":20000}},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'自动隐藏延时'    ,tooltip:'Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏'    ,attrName:'hide-after'    ,extra:{"min":0,"max":20000}},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'Tooltip 组件的索引'    ,attrName:'tabindex'    ,extra:{"min":0,"max":20000}},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'显示的内容'    ,attrName:'content'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'定义渐变动画'    ,attrName:'transition'},
                        // {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'为 Tooltip 的 popper 添加类名'    ,tooltip:'为 Tooltip 的 popper 添加类名'    ,attrName:'popper-class'},
                    ],
                    "el-calendar":[
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'起始周'    ,tooltip:'起始周'    ,attrName:':first-day-of-week'    ,extra:{"min":1,"max":7}},
                    ],
                    "el-divider":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'方向'        ,attrName:'direction'    ,options:[{"horizontal":"水平","vertical":"垂直"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'文案的位置'        ,attrName:'content-position'    ,options:[{"left":"左","center":"居中","right":"右"}]},
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
                width:"33.333%",
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
            },
            {
                title:"事件",
                active:false,/*默认聚焦*/
                width:"33.333%",
                content:{
                    "el-button":[
                        {type:this.type.TEXT         ,clearAttr:true    ,oneLine:false        ,change:this.change.ATTR    ,title:'点击触发事件'     ,attrName:'@click',extendKey:"method",extend:true,functionParams:[{name:"e",title:"event事件对象"}]},
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
/*为脚本编辑器准备参数*/
Constant.prototype.magicalJsCodeRebuildParams = function () {

}
