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
            link:["assets/drag/ui/miniui/3.9.3/themes/default/miniui.css","assets/drag/ui/miniui/3.9.3/themes/default/medium-mode.css","assets/drag/ui/miniui/3.9.3/themes/bootstrap/skin.css","assets/drag/ui/magicalcoder/1.1.0/magicalcoder.css"],
            //预览页<head></head>内的脚本地址
            headJs:[],
            //预览页<body></body>内的脚本地址
            bodyJs:[
                "assets/drag/js/lib/jquery-2.0.0.min.js",
                "assets/drag/js/lib/echarts/4.6.0/echarts.min.js",
                "assets/drag/js/lib/echarts/datatool.min.js",
                "assets/drag/ui/magicalcoder/1.1.0/magicalcoder.js",
                "assets/drag/ui/miniui/3.9.3/miniui.js"
            ]
        },
        //搜索节点的规则 每个节点在布局器都有一个唯一的magicalcoderid,但是有些情况部分ui会生成各种新的结构 导致我们想要操作的结构不对
        searchMagicalCoderIdRule:{
            //true:则从里往外搜索 false则从外往里搜索
            searchParent:function (elem){//一般您要配合iframe-ui.js的fixDynamicDomAfterRender方法来同时工作
                if(elem.hasClass("mini-panel-body")){
                    return true;
                }
                return false;
            }
        }
    }

    this.UI_TYPE = 8;
    this.UI_NAME = "miniui";
    this.UI_FRAME = "jquery";
    /*响应式布局*/
    this.responsive = {
        XS:"xs",
        SM:"sm",
        MD:"md",
        LG:"lg",
    }
    this.responsiveList = [
        {id:this.responsive.XS,name:"手机",width:"588px",height:"100%",icon:"assets/drag/img/header/phone1.png"},
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
            name:"基础组件",
            children:[
                {
                    name:"按钮",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<a class='mini-button'>按钮</a>"
                },
				{
                    name:"下拉列表",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<input class='mini-combobox' style='width:100%;' textField='text' valueField='id' url='' value='' showNullItem='true' allowInput='true'/> "
                },
				{
                    name:"时间控件",
                    icon:"assets/drag/img/left/btn1.png",
                    html:" <input class='mini-datepicker' style='width:100%;' onvaluechanged='onValueChanged' nullValue='null'  showtodaybutton='false' showOkButton='true' showClearButton='false'/>"
                },
				{
                    name:"日历控件",
                    icon:"assets/drag/img/left/btn1.png",
                    html:" <div  class='mini-calendar' value='' ></div>"
                },
				{
                    name:"页码控件",
                    icon:"assets/drag/img/left/btn1.png",
                    html:" <div class='mini-pager' style='width:100%;background:#ccc;' totalCount='123' onpagechanged='onPageChanged' sizeList='[5,10,20,100]'></div> "
                },
				{
                    name:"工具栏",
                    icon:"assets/drag/img/left/btn1.png",
					html:"<div class='mini-toolbar'><a class='mini-button' iconcls='icon-add'>增加</a><a class='mini-button' iconcls='icon-edit'>修改</a><a class='mini-button' iconcls='icon-remove'>删除</a><span class='separator'></span><a class='mini-button' plain='true'>增加</a><a class='mini-button' plain='true'>修改</a><a class='mini-button' plain='true'>删除</a><span class='separator'></span><input class='mini-textbox'><a class='mini-button' plain='true'>查询</a></div>"
				},
				{
                    name:"单行文本框",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<input  class='mini-textbox' emptyText='请输入文本' maxLength='100'/>"
                },
                {
                    name:"多行文本框",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<textarea class='mini-textarea' emptyText='请输入备注'></textarea>"
                },
				{
                    name:"复选框",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<div class='mini-checkbox' readOnly='false' text='MiniUI CheckBox' onvaluechanged='onValueChanged'></div>"
                },
				{
                    name:"复选框组",
                    icon:"assets/drag/img/left/btn1.png",
					html:"<div class='mini-checkboxlist' repeatitems='2' repeatlayout='table' textfield='text' valuefield='id' value='cn,usa' onload='onLoad' url='assets/drag/js/data/miniui/countrys.txt'></div>"
				},
                {
                    name:"单选框组",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<div class='mini-radiobuttonlist' repeatitems='2' repeatlayout='table' repeatDirection='vertical' textfield='text' valuefield='id' value='cn' onload='onLoad' url='assets/drag/js/data/miniui/countrys.txt'></div>"
                },
                {
                    name:"菜单栏",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<ul id='menu2' class='mini-menu'><li><span>操作</span><ul><li iconcls='icon-new' onclick='onItemClick'>新建</li><li class='separator'></li><li iconcls='icon-add' onclick='onItemClick'>增加</li><li iconcls='icon-edit' onclick='onItemClick'>修改</li><li iconcls='icon-remove' onclick='onItemClick'>删除</li></ul></li><li class='separator'></li><li iconcls='icon-open' onclick='onItemClick'>打开</li><li iconcls='icon-remove' onclick='onItemClick'>关闭</li></ul>"
                },
                {
                    name:"按钮输入框",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<input  class='mini-buttonedit' onbuttonclick='onButtonEdit'>"
                },

            ]
        },
        {
            name:"布局组件",
            children:[
                {
                    name:"12布局",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<div class='row'><div class='mini-col-12'></div></div>"
                },
                {
                    name:"6,6布局",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<div class='row'><div class='mini-col-6'></div><div class='mini-col-6'></div></div>"
                },
                {
                    name:"8,4布局",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<div class='row'><div class='mini-col-8'></div><div class='mini-col-4'></div></div>"
                },
                {
                    name:"2,6,4布局",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<div class='row'><div class='mini-col-2'></div><div class='mini-col-6'></div><div class='mini-col-4'></div></div>"
                },
                {
                    name:"4,4,4布局",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<div class='row'><div class='mini-col-4'></div><div class='mini-col-4'></div><div class='mini-col-4'></div></div>"
                },
                {
                    name:"3,3,3,3布局",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<div class='row'><div class='mini-col-3'></div><div class='mini-col-3'></div><div class='mini-col-3'></div><div class='mini-col-3'></div></div>"
                },
                {
                    name:"标题面板",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<div  class='mini-panel' title='header' iconCls='icon-add' style='width:100%;' showToolbar='true' showCollapseButton='true' showFooter='true' allowResize='true' collapseOnTitleClick='true'><div property='toolbar' ></div><div property='footer'></div></div>"
                },
                {
                    name:"tabs",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<div class='mini-tabs' activeindex='0' style='width:100%;height:200px;'><div title='Tab1' class='magical-coder-tab'>1</div><div title='Tab2' class='magical-coder-tab'>2</div><div title='Tab3' class='magical-coder-tab'>3</div></div>"
                },
                {
                    name:"折叠面板组",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<div class='mini-outlookbar ' activeindex='0' style='width:180px;height:200px;' autocollapse='true'><div class='magical-coder-outlook'  title='Small Items'></div><div class='magical-coder-outlook'  title='Large Items'></div></div>"
                },
                {
                    name:"分隔容器",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<div class='mini-splitter' style='width:100%;height:200px;'><div class='magicalcoder-splitter-son' size='30%' showcollapsebutton='true'></div><div class='magicalcoder-splitter-son' showcollapsebutton='true'></div></div>"
                },
                {
                    name:"布局管理器",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<div class='mini-layout' style='width:100%;height:400px;'><div title='north' region='north' height='80'></div><div title='south' region='south' showsplit='false' showheader='true' height='80'></div><div title='west' region='west' width='200'></div><div title='east' region='east' showclosebutton='true'></div><div title='center' region='center'></div></div>"
                },
            ]
        },
        {
            name:"高级组件",
            children:[
                {
                    name:"表格",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<div  class='mini-datagrid' style='width:100%;height:250px;' url=''><div property='columns'><div type='indexcolumn'></div><div field='loginname' width='120' headeralign='center' allowsort='true'>员工帐号</div><div field='name' width='120' headeralign='center' allowsort='true'>姓名</div><div header='工作信息'><div property='columns'><div field='dept_name' width='120'>所属部门</div><div field='position_name' width='100'>职位</div><div field='salary' width='100' allowsort='true'>薪资</div></div></div></div></div>"
                },
                {
                    name:"静态表格",
                    icon:"assets/drag/img/left/form1.png",
                    html:"<table class='mc-table'><thead><tr><th>列1</th><th>列2</th><th>列3</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table>"
                },

                {
                    name:"树",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<ul class='mini-tree' url='assets/drag/js/data/miniui/tree.txt' style='width:300px;padding:5px;' showtreeicon='true' textfield='text' idfield='id'></ul>"
                },
                {
                    name:"树形表格",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<div  class='mini-treegrid' style='width:100%;height:280px;' url='assets/drag/js/data/miniui/tasks.txt' showtreeicon='true' treecolumn='taskname' idfield='UID' parentfield='ParentTaskUID' resultastree='false'><div property='columns'><div type='indexcolumn'></div><div name='taskname' field='Name' width='200'>任务名称</div><div field='Duration' width='100'>工期</div><div field='Start' width='100' dateformat='yyyy-MM-dd'>开始日期</div><div field='Finish' width='100' dateformat='yyyy-MM-dd'>完成日期</div></div></div>"
                },
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

        "mini-button":{name:"按钮",dragInto:false,duplicate:true,assistDuplicate:false,copy:true,paste:false,    canDelete:true,assistDelete:false,canDragResize:true},
        "mini-combobox":{name:"下拉列表",dragInto:false,duplicate:true,assistDuplicate:false,copy:true,paste:false,    canDelete:true,assistDelete:false,canDragResize:true},
		"mini-datepicker":{name:"时间控件",dragInto:false,duplicate:true,assistDuplicate:false,copy:true,paste:false,    canDelete:true,assistDelete:false,canDragResize:true},
		"mini-calendar":{name:"日历控件",dragInto:false,duplicate:true,assistDuplicate:false,copy:true,paste:false,    canDelete:true,assistDelete:false,canDragResize:true},
		"mini-pager":{name:"页码控件",dragInto:false,duplicate:true,assistDuplicate:false,copy:true,paste:false,    canDelete:true,assistDelete:false,canDragResize:true},
		"mini-toolbar":{name:"工具栏",dragInto:false,duplicate:true,assistDuplicate:false,copy:true,paste:false,    canDelete:true,assistDelete:false,canDragResize:true},

        "mini-textarea":{name:"单行文本框",dragInto:false,duplicate:true,assistDuplicate:false,copy:true,paste:false,    canDelete:true,assistDelete:false,canDragResize:true},
		"mini-textbox":{name:"单行文本框",dragInto:false,duplicate:true,assistDuplicate:false,copy:true,paste:false,    canDelete:true,assistDelete:false,canDragResize:true},
		"mini-checkbox":{name:"复选框",dragInto:false,duplicate:true,assistDuplicate:false,copy:true,paste:false,    canDelete:true,assistDelete:false,canDragResize:true},
		"mini-checkboxlist":{name:"复选框组",dragInto:false,duplicate:true,assistDuplicate:false,copy:true,paste:false,    canDelete:true,assistDelete:false,canDragResize:true},
        "mini-radiobuttonlist":{name:"单选框组",dragInto:false,duplicate:true,assistDuplicate:false,copy:true,paste:false,    canDelete:true,assistDelete:false,canDragResize:true},
        "mini-menu":{name:"菜单栏",dragInto:false,duplicate:true,assistDuplicate:false,copy:true,paste:false,    canDelete:true,assistDelete:false,canDragResize:true},
        "mini-buttonedit":{name:"按钮输入框",dragInto:false,duplicate:true,assistDuplicate:false,copy:true,paste:false,    canDelete:true,assistDelete:false,canDragResize:true},


        //根据样式名索引
        "mini-panel":{name:"标题面板",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],copy:true,paste:true,assistDelete:true, canDelete:true},
		//根据属性名=属性值来索引
        "property=toolbar":{primary:1,name:"工具栏",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,assistDuplicate:false,duplicateAttr:[],copy:false,paste:true,assistDelete:false, canDelete:false,onlyParents:['mini-panel']},
        "property=footer":{primary:1,name:"底部栏",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,assistDuplicate:false,duplicateAttr:[],copy:false,paste:true,assistDelete:false, canDelete:false,onlyParents:['mini-panel']},


		"mini-col-2":{name:"网格布局",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],copy:true,paste:true,assistDelete:true, canDelete:true},
        "mini-col-3":{name:"网格布局",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],copy:true,paste:true,assistDelete:true, canDelete:true},
        "mini-col-4":{name:"网格布局",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],copy:true,paste:true,assistDelete:true, canDelete:true},
        "mini-col-6":{name:"网格布局",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],copy:true,paste:true,assistDelete:true, canDelete:true},
        "mini-col-8":{name:"网格布局",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],copy:true,paste:true,assistDelete:true, canDelete:true},
        "mini-col-12":{name:"网格布局",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],copy:true,paste:true,assistDelete:true, canDelete:true},

        //tabs
        "mini-tabs":{name:"tabs",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],copy:true,paste:true,assistDelete:true, canDelete:true,onlyChildren:["magical-coder-tab"],assistAdd:true,addOneItems:[{"":[{html:"<div title='Tab5' class='magical-coder-tab'>1</div>",focus:false}]}]  },
        "magical-coder-tab":{name:"tab页",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],copy:true,paste:true,assistDelete:true, canDelete:true,onlyParents:['mini-tabs']},


        //outlookbar
        "mini-outlookbar":{name:"标题面板",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],copy:true,paste:true,assistDelete:true, canDelete:true},
        "magical-coder-outlook":{name:"标题面板tab页",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],copy:true,paste:true,assistDelete:true, canDelete:true,onlyParents:['mini-outlookbar']},



        "mini-splitter":{name:"分隔容器",dragInto:true,duplicate:true,assistDuplicate:false,copy:true,paste:false,    canDelete:true,assistDelete:false,canDragResize:true},
        "magicalcoder-splitter-son":{name:"分隔容器页",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,assistDuplicate:false,duplicateAttr:[],copy:true,paste:true,assistDelete:true, canDelete:true,onlyParents:['mini-splitter']},



        "mini-layout":{name:"布局管理器",dragInto:false,duplicate:true,assistDuplicate:true,canZoom:true,assistZoom:true,copy:true,paste:false,    canDelete:true,assistDelete:false,canDragResize:true},
        "region=east":{name:"东",dragInto:true,onlyParents:['mini-layout']},
        "region=west":{name:"西",dragInto:true,onlyParents:['mini-layout']},
        "region=south":{name:"南",dragInto:true,onlyParents:['mini-layout']},
        "region=north":{name:"北",dragInto:true,onlyParents:['mini-layout']},
        "region=center":{name:"中",dragInto:true,onlyParents:['mini-layout']},

        //根据属性名=属性值来索引


        //高级组件
        "mini-datagrid":{name:"表格",dragInto:false,duplicate:true,assistDuplicate:false,copy:true,paste:false,    canDelete:true,assistDelete:false,canDragResize:true},
        "mini-tree":{name:"树",dragInto:false,duplicate:true,assistDuplicate:false,copy:true,paste:false,    canDelete:true,assistDelete:false,canDragResize:true},
        "mini-treegrid":{name:"树形表格",dragInto:false,duplicate:true,assistDuplicate:false,copy:true,paste:false,    canDelete:true,assistDelete:false,canDragResize:true},

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
                    "mini-button":[
                            {
                                type:this.type.CHECKBOX,
                                clearAttr:true,
                                oneLine:true,
                                change:this.change.ATTR,
                                title:'状态' ,
                                options:[{n:"enabled",t:"可用",c:"true",u:"false",dv:"true"}]
                            },
                            {
                                type:this.type.TEXT ,
                                clearAttr:true ,
                                oneLine:true ,
                                change:this.change.TEXT ,
                                title:'文本'
                            }
                    ],
                    "mini-panel":[
                        {
                            type:this.type.TEXT,
                            clearAttr:true,
                            oneLine:true,
                            change:this.change.ATTR,
                            title:'标题',
                            attrName:'title'
                        },
                        {
                            type:this.type.CHECKBOX,
                            clearAttr:true,
                            oneLine:true,
                            change:this.change.ATTR,
                            title:'状态' ,
                            options:[{n:"showheader",t:"显示头",c:"true",u:"false",dv:"true"},{n:"showfooter",t:"显示底部",c:"true",u:"false",dv:"false"},{n:"showtoolbar",t:"显示工具栏",c:"true",u:"false",dv:"false"}]
                        }
                    ],
                    "mini-combobox":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'状态',options:[{"c":"true","n":"multiselect","t":"多选","u":"false"},{"c":"true","n":"shownullitem","t":"是否显示空项","u":"false"},{"c":"true","n":"valuefromselect","t":"从选择项录入","u":"false"},{"c":"true","n":"clearonload","t":"数据匹配","u":"false"}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'nullitemtext',title:'空项文本'},

                    ],
					 "mini-toolbar":[
                        {
                            type:this.type.TEXT,
                            clearAttr:true,
                            oneLine:true,
                            change:this.change.ATTR,
                            title:'标题',
                            attrName:'title'
                        },
                        {
                            type:this.type.CHECKBOX,
                            clearAttr:true,
                            oneLine:true,
                            change:this.change.ATTR,
                            title:'状态' ,
                            options:[]
                        }
                    ],


                    "mini-datepicker":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'状态',options:[{"c":"true","n":"showtodaybutton","t":"显示今天","u":"false"},{"c":"true","n":"showtime","t":"是否显示时间","u":"false"},{"c":"true","n":"showclearbutton","t":"是否显示清除","u":"false"}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'format',title:'日期类型',options:[{'yyyy':'年'},{'yyyy-MM':'年月'},{'yyyy-MM-dd':'年月日'},{'HH:mm:ss':'时分秒'},{'yyyy-MM-dd HH:mm:ss':'年月日时分秒'}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mindate',placeholder:'1900-1-1',title:'最小值'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'maxdate',placeholder:'2099-12-31',title:'最大值'},

                    ],
                    "mini-calendar":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'状态',options:[{"c":"true","n":"showtodaybutton","t":"显示今天","u":"false"},{"c":"true","n":"showtime","t":"是否显示时间","u":"false"},{"c":"true","n":"showclearbutton","t":"是否显示清除","u":"false"},{"c":"true","n":"showdaysheader","t":"是否显示周头部","u":"false"},{"c":"true","n":"showmonthbuttons","t":"是否显示月导航","u":"false"},{"c":"true","n":"showyearbuttons","t":"是否显示年导航","u":"false"}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'format',title:'日期类型',options:[{'yyyy':'年'},{'yyyy-MM':'年月'},{'yyyy-MM-dd':'年月日'},{'HH:mm:ss':'时分秒'},{'yyyy-MM-dd HH:mm:ss':'年月日时分秒'}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'mindate',placeholder:'1900-1-1',title:'最小值'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'maxdate',placeholder:'2099-12-31',title:'最大值'},

                    ],
					"mini-pager":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'状态',options:[{"c":"true","n":"showpageindex","t":"显示页码","u":"false"},{"c":"true","n":"showpagesize","t":"显示分页尺寸","u":"false"},{"c":"true","n":"showreloadbutton","t":"显示刷新","u":"false"},{"c":"true","n":"showpageinfo","t":"显示分页信息","u":"false"}]},
						{type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'totalcount',title:'总条数'},

				   ],
				   "mini-checkboxlist":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'状态',options:[{"c":"true","n":"multiselect","t":"多选","u":"false"}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'repeatlayout',title:'布局方式',options:[{'none':'无'},{'flow':'流'},{'table':'表格'}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'repeatdirection',title:'平铺方向',options:[{'vertical':'垂直'},{'horizontal':'水平'}]},
						{type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'repeatitems',title:'平铺显示项'},

                    ],
                    "mini-radiobuttonlist":[
                        // {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'状态',options:[{"c":"true","n":"multiselect","t":"多选","u":"false"}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'repeatlayout',title:'布局方式',options:[{'none':'无'},{'flow':'流'},{'table':'表格'}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'repeatdirection',title:'平铺方向',options:[{'vertical':'垂直'},{'horizontal':'水平'}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'repeatitems',title:'平铺显示项'},

                    ],
                    "mini-tabs":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'状态',options:[{"c":"true","n":"showbody","t":"显示内容区","u":"false"},{"c":"true","n":"maskonload","t":"是否加载时遮罩","u":"false"},{"c":"true","n":"plain","t":"是否隐藏头部","u":"false"},{"c":"true","n":"shownavmenu","t":"显示下拉列表","u":"false","dv":"false"}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'tabalign',title:'对齐方式',options:[{'left':'左'},{'center':'中'},{'right':'右'},{'fit':'适应'}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'tabposition',title:'定位方式',options:[{'left':'左'},{'top':'上'},{'right':'右'},{'bottom':'下'}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'arrowposition',title:'箭头显示方式',options:[{'right':'右'},{'side':'边'}]},
                    ],
                    "magical-coder-tab":[
                        {
                            type:this.type.TEXT,
                            clearAttr:true,
                            oneLine:true,
                            change:this.change.ATTR,
                            title:'标题',
                            attrName:'title'
                        },
                        {
                            type:this.type.CHECKBOX,
                            clearAttr:true,
                            oneLine:true,
                            change:this.change.ATTR,
                            title:'状态' ,
                            options:[]
                        }
                    ],

                    "mini-menu":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'状态',options:[{"c":"true","n":"vertical","t":"是否竖向","u":"false"},{"c":"true","n":"allowselectitem","t":"是否允许选择菜单项","u":"false"},{"c":"true","n":"resultastree","t":"是否显示树","u":"false"}]},
                    ],
                    "mini-outlookbar":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'状态',options:[{"c":"true","n":"autocollapse","t":"是否自动折叠","u":"false"},{"c":"true","n":"expandonload","t":"子面板折叠状态","u":"false"}]},
                    ],
                    "mini-outlookbar-groupBody":[
                        {
                            type:this.type.TEXT,
                            clearAttr:true,
                            oneLine:true,
                            change:this.change.ATTR,
                            title:'标题',
                            attrName:'title'
                        },
                        {
                            type:this.type.CHECKBOX,
                            clearAttr:true,
                            oneLine:true,
                            change:this.change.ATTR,
                            title:'状态' ,
                            options:[]
                        }
                    ],


                    "mini-splitter":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'状态',options:[{"c":"true","n":"vertical","t":"是否竖向","u":"false"},{"c":"true","n":"allowresize","t":"是否允许拖拽调整","u":"false"}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'handlersize',title:'分割条尺寸'},
                    ],
                    "magicalcoder-splitter-son":[
                        {
                            type:this.type.TEXT,
                            clearAttr:true,
                            oneLine:true,
                            change:this.change.ATTR,
                            title:'标题',
                            attrName:'title'
                        },
                        {
                            type:this.type.CHECKBOX,
                            clearAttr:true,
                            oneLine:true,
                            change:this.change.ATTR,
                            title:'状态' ,
                            options:[]
                        }
                    ],

                    "mini-layout":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'handlersize',title:'分割条尺寸'},
                    ],

                    "region=north":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'title',title:"标题"},
                    ],
                    "region=south":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'title',title:"标题"},
                    ],"region=east":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'title',title:"标题"},
                    ],"region=west":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'title',title:"标题"},
                    ],"region=center":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'title',title:"标题"},
                    ],


                    "mini-textbox":[
                        {
                            type:this.type.TEXT,
                            clearAttr:true,
                            oneLine:true,
                            change:this.change.ATTR,
                            title:'标题',
                            attrName:'title'
                        },
                        {
                            type:this.type.CHECKBOX,
                            clearAttr:true,
                            oneLine:true,
                            change:this.change.ATTR,
                            title:'状态' ,
                            options:[{n:"enabled",t:"可用",c:"true",u:"false",dv:"true"}]
                        }
                    ],
                    "mini-textarea":[
                        {
                            type:this.type.TEXT,
                            clearAttr:true,
                            oneLine:true,
                            change:this.change.ATTR,
                            title:'标题',
                            attrName:'title'
                        },
                        {
                            type:this.type.CHECKBOX,
                            clearAttr:true,
                            oneLine:true,
                            change:this.change.ATTR,
                            title:'状态' ,
                            options:[{n:"enabled",t:"可用",c:"true",u:"false",dv:"true"}]
                        }
                    ],
                    "mini-checkbox":[
                        {
                            type:this.type.TEXT,
                            clearAttr:true,
                            oneLine:true,
                            change:this.change.ATTR,
                            title:'标题',
                            attrName:'title'
                        },
                        {
                            type:this.type.CHECKBOX,
                            clearAttr:true,
                            oneLine:true,
                            change:this.change.ATTR,
                            title:'状态' ,
                            options:[{n:"enabled",t:"可用",c:"true",u:"false",dv:"true"}]
                        }
                    ],
                    "mini-buttonedit":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'状态',options:[{"c":"true","n":"selectonfocus","t":"获取焦点时选中文本","u":"false"},{"c":"true","n":"allowInput","t":"允许文本输入","u":"false"},{"c":"true","n":"required","t":"不允许为空","u":"false"},{"c":"true","n":"validateonchanged","t":"值改变时验证","u":"false"},{"c":"true","n":"showbutton","t":"显示弹出按钮","u":"false"},{"c":"true","n":"showclose","t":"显示关闭按钮","u":"false"},{"c":"true","n":"indentspace","t":"显示占位空白","u":"false"},{"c":"true","n":"labelfield","t":"显示label","u":"false"}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'maxlength',title:'最大文本字符数'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'minlength',title:'最小文本字符数'},

                    ],




                    //高级组件
                    "mini-datagrid":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'状态',options:[{"c":"true","n":"virtualscroll","t":"是否虚拟滚动","u":"false"},{"c":"true","n":"virtualcolumns","t":"是否虚拟滚动列","u":"false"},{"c":"true","n":"showpager","t":"显示分页","u":"false"},{"c":"true","n":"showhgridlines","t":"横向表格线条","u":"false"},{"c":"true","n":"showvgridlines","t":"竖向表格线条","u":"false"},{"c":"true","n":"multiSelect","t":"多选行","u":"false"}]},
                    ],

                    "mini-tree":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'状态',options:[{"c":"true","n":"autocheckparent","t":"自动选择父节点","u":"false"},{"c":"true","n":"expandonload","t":"是否展开","u":"false"},{"c":"true","n":"showtreeicon","t":"显示节点图标","u":"false"},{"c":"true","n":"showtreelines","t":"显示树形线条","u":"false"},{"c":"true","n":"allowselect","t":"允许选择节点","u":"false"},{"c":"true","n":"allowleafdropIn","t":"允许拖拽投放到子节点内","u":"false"},{"c":"true","n":"allowdrag","t":"拖拽节点","u":"false"},{"c":"true","n":"allowdrop","t":"投放节点","u":"false"}]},
                    ],
                    "mini-treegrid":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'状态',options:[{"c":"true","n":"allowmovecolumn","t":"允许移动列","u":"false"},{"c":"true","n":"allowresizecolumn","t":"允许拖拽调节列宽度","u":"false"},{"c":"true","n":"allowresize","t":"调节表格尺寸","u":"false"}]},
                    ],
                    "a":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'href',title:'跳转地址'},
                        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'target',title:'打开方式',tooltip:"target",options:[{"_blank":"新窗口"},{"_self":"当前窗口"},{"_parent":"父窗口"},{"_top":"顶部窗口"}]},
                    ],"p":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                    ]
                    ,"small":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                    ]
                    ,"mark":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                    ]
                    ,"del":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                    ]
                    ,"u":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                    ]
                    ,"em":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                    ]
                    ,"strong":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
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
                title:"编码",
                active:false,/*默认聚焦*/
                width:"33.3333333%",
                content:{

                }
            },{
                title:"动画",
                active:false,/*默认聚焦*/
                width:"33.3333333%",
                content:{

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

        this.rightPanel[1].content[key] = value;
    }
}

/*列是变动的 所以简单起见 全部遍历所有可能*/
Constant.prototype.rowColBuild = function(){
    var _t = this;
    return {
        rightColBuild:function(){
            var configArr = [
                {type:_t.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:_t.change.TEXT	,title:'文本'                },
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:_t.change.CLASS   ,title:'背景色'   ,options:[{'layui-bg-white':'白色'},{'layui-bg-red':'赤色'},{'layui-bg-orange':'橙色'},{'layui-bg-green':'墨绿'},{'layui-bg-cyan':'藏青'},{'layui-bg-blue':'蓝色'},{'layui-bg-black':'雅黑'},{'layui-bg-gray':'银灰'}]},
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
