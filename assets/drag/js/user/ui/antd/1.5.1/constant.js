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
            link:["assets/drag/ui/antd/1.5.1/antd.min.css","assets/drag/ui/magicalcoder/1.1.0/magicalcoder.css"],
            //预览页<head></head>内的脚本地址
            headJs:[],
            //预览页<body></body>内的脚本地址
            bodyJs:[
                "assets/drag/ui/antd/moment.min.js",
                "assets/drag/js/lib/echarts/4.6.0/echarts.min.js",
                "assets/drag/js/lib/echarts/datatool.min.js",
                "assets/drag/ui/magicalcoder/1.1.0/magicalcoder.js",
                "assets/drag/js/lib/vue/vue.js",
                "assets/drag/ui/antd/1.5.1/antd.min.js",
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

    this.UI_TYPE = 5;
    this.UI_NAME = "antdesign";
    this.UI_FRAME = "vue";
    /*响应式布局*/
    this.responsive = {
        XS:"xs",
        SM:"sm",
        MD:"md",
        LG:"lg",
        XL:"xl",
        XXL:"xxl"
    }
    this.responsiveList = [
        {id:this.responsive.XS,name:"<576px",width:"500px",height:"100%",icon:"assets/drag/img/header/phone1.png"},
        {id:this.responsive.SM,name:"≥576px",width:"576px",height:"100%",icon:"assets/drag/img/header/paid1.png"},
        {id:this.responsive.MD,name:"≥768px",width:"768px",height:"100%",icon:"assets/drag/img/header/paid1.png"},
        {id:this.responsive.LG,name:"≥992px",width:"992px",height:"100%",icon:"assets/drag/img/header/pc1.png"},
        {id:this.responsive.XL,name:"≥1200px",width:"1200px",height:"100%",icon:"assets/drag/img/header/pc1.png"},
        {id:this.responsive.XXL,name:"≥1600px",width:"100%",height:"100%",icon:"assets/drag/img/header/pc1.png",checked:true}
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
                    name:"后台框架",
                    icon:"assets/drag/img/left/five1.png",
                    html:"<a-layout><a-layout-sider></a-layout-sider><a-layout><a-layout-header></a-layout-header><a-layout-content></a-layout-content><a-layout-footer></a-layout-footer></a-layout></a-layout>"
                },
                {
                    name:"按钮组",
                    icon:"assets/drag/img/left/btngroup1.png",
                    html:"<a-button-group></a-button-group>"
                },{
                    name:"自适行列",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<a-row><a-col :xs='24' :md='12'></a-col><a-col :xs='24' :md='12'></a-col></a-row>",
                },{
                    name:"左右行列",
                    icon:"assets/drag/img/left/around1.png",
                    html:"<a-row><a-col :xs='12' :sm='12'></a-col><a-col :xs='12' :sm='12'></a-col></a-row>",
                },{
                    name:"上下行列",
                    icon:"assets/drag/img/left/updown1.png",
                    html:"<a-row><a-col :xs='24'></a-col><a-col :xs='24'></a-col></a-row>",
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
                    html:"<a-form label-width='100px'><a-form-item label='单行标题'></a-form-item><a-row><a-col :xs='24' :md='12'><a-form-item label='左标题'></a-form-item></a-col><a-col :xs='24' :md='12'><a-form-item label='右标题'></a-form-item></a-col></a-row><a-form-item label='单选'><a-radio-group v-model='radioGroup'><a-radio value='1'>单选项1</a-radio><a-radio value='2'>单选项2</a-radio></a-radio-group></a-form-item><a-form-item label='多选'><a-checkbox-group v-model='checkboxGroup'><a-checkbox value='1'>多选项</a-checkbox></a-checkbox-group></a-form-item><a-form-item ><a-row><a-col :span='12'><a-button>提交</a-button></a-col><a-col :span='12'></a-col></a-row></a-form-item></a-form>"
                },
                {
                    name:"普通条目",
                    icon:"assets/drag/img/left/menu1.png",
                    html:"<a-form-item label='标题'></a-form-item>"
                },
                {
                    name:"单选条目",
                    icon:"assets/drag/img/left/menu1.png",
                    html:"<a-form-item label='单选'><a-radio-group v-model='radioGroup'><a-radio value='1'>单选项1</a-radio><a-radio value='2'>单选项2</a-radio></a-radio-group></a-form-item>"
                },
                {
                    name:"多选条目",
                    icon:"assets/drag/img/left/menu1.png",
                    html:"<a-form-item label='多选'><a-checkbox-group v-model='checkboxGroup'><a-checkbox value='1'>多选项</a-checkbox></a-checkbox-group></a-form-item>"
                },
                {
                    name:"提交条目",
                    icon:"assets/drag/img/left/menu1.png",
                    html:"<a-form-item ><a-button>提交</a-button></a-form-item>"
                },

            ]
        },
        {
            name:"表单控件",
            children:[
                {
                    name:"按钮",
                    icon:"assets/drag/img/left/btn1.png",
                    html:"<a-button>确定</a-button>",
                },{
                    name:"输入框",
                    icon:"assets/drag/img/left/import1.png",
                    html:"<a-input v-model='input' placeholder='请输入内容'></a-input>",
                },{
                    name:"文本框",
                    icon:"assets/drag/img/left/import1.png",
                    html:"<a-textarea v-model='input' placeholder='请输入内容'></a-textarea>",
                },{
                    name:"搜索框",
                    icon:"assets/drag/img/left/import1.png",
                    html:"<a-input-search v-model='search' placeholder='请输入内容'></a-input-search>",
                },{
                    name:"下拉框",
                    icon:"assets/drag/img/left/pull1.png",
                    html:"<a-select v-model='select' style='min-width: 120px'><a-select-option value='1'>选择1</a-select-option></a-select>"
                }
                ,
                {
                    name:"单选框",
                    icon:"assets/drag/img/left/choice1.png",
                    html:"<a-radio-group v-model='radioGroup'><a-radio value='1'>单选项1</a-radio><a-radio value='2'>单选项2</a-radio></a-radio-group>"
                },
                {
                    name:"多选框",
                    icon:"assets/drag/img/left/multiple1.png",
                    html:"<a-checkbox-group v-model='checkboxGroup'><a-checkbox value='1'>多选项1</a-checkbox></a-checkbox-group>"
                },{
                    name:"开关",
                    icon:"assets/drag/img/left/onoff1.png",
                    html:"<a-switch v-model='kaiGuan' ></a-switch>"
                },
                {
                    name:"滑块",
                    icon:"assets/drag/img/left/sliding1.png",
                    html:"<a-slider v-model='slider'></a-slider>"
                },{
                    name:"日期",
                    icon:"assets/drag/img/left/day1.png",
                    html:"<a-date-picker v-model='datePicker' placeholder='请选择日期'></a-date-picker>"
                },{
                    name:"月",
                    icon:"assets/drag/img/left/day1.png",
                    html:"<a-month-picker v-model='datePickerMonth' placeholder='请选择月'></a-month-picker>"
                },{
                    name:"周",
                    icon:"assets/drag/img/left/day1.png",
                    html:"<a-week-picker v-model='datePickerWeek' placeholder='请选择日期'></a-week-picker>"
                },{
                    name:"日期范围",
                    icon:"assets/drag/img/left/day1.png",
                    html:"<a-range-picker v-model='datePickerRange' placeholder='请选择日期范围'></a-range-picker>"
                },
                {
                    name:"文件上传",
                    icon:"assets/drag/img/left/uploading1.png",
                    html:"<a-upload name='file' :multiple='true' action='https://www.mocky.io/v2/5cc8019d300000980a055e76' :headers='headers'><a-button><a-icon type='upload'></a-icon>点击上传</a-button></a-upload>"},
                {
                    name:"评分",
                    icon:"assets/drag/img/left/grade1.png",
                    html:"<a-rate v-model='rate'></a-rate>"
                },{
                    name:"可点标签",
                    icon:"assets/drag/img/left/tag1.png",
                    html:"<a-checkable-tag>标签</a-checkable-tag>"
                }
                ,{
                    name:"计数器",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<a-input-number v-model='inputNumber'></a-input-number>",
                },
                {name:"自动完成",icon:"",html:"<a-auto-complete :datasource='dataSource' style='width: 200px' @select='onSelect' @search='onSearch' placeholder='input here'></a-auto-complete>"},
                {name:"提及",icon:"",html:"<a-mentions v-model='mentions'><a-mentions-option value='afc163'>afc163</a-mentions-option><a-mentions-option value='zombieJ'>zombieJ</a-mentions-option><a-mentions-option value='yesmeck'>yesmeck</a-mentions-option></a-mentions>"},
                {name:"级联选择",icon:"",html:"<a-cascader :options='options'  placeholder='请选择省市'></a-cascader>"},
                {name:"树型选择控件",icon:"",html:"<a-tree-select  style='width: 100%' v-model='value'   placeholder='Please select'><a-tree-select-node value='parent 1' title='parent 1' key='0-1'><a-tree-select-node value='parent 1-0' title='parent 1-0' key='0-1-1'><a-tree-select-node :selectable='false' value='leaf1' title='my leaf' key='random'></a-tree-select-node><a-tree-select-node value='leaf2' title='your leaf' key='random1'></a-tree-select-node></a-tree-select-node><a-tree-select-node value='parent 1-1' title='parent 1-1' key='random2'><a-tree-select-node value='sss' key='random3'>sss</a-tree-select-node></a-tree-select-node></a-tree-select-node></a-tree-select>"},

            ]
        },
        {
            name:"导航",
            children:[
                {name:"固钉",icon:"",html:"<a-affix :offsettop='this.top'><a-button type='primary' >Affix top</a-button></a-affix>"},
                {name:"面包屑",icon:"",html:"<a-breadcrumb><a-breadcrumb-item>Home</a-breadcrumb-item><a-breadcrumb-item><a href=''>Application Center</a></a-breadcrumb-item><a-breadcrumb-item><a href=''>Application List</a></a-breadcrumb-item><a-breadcrumb-item>An Application</a-breadcrumb-item></a-breadcrumb>"},
                {
                    name:"下拉菜单",
                    icon:"",
                    html:"<a-dropdown><a class='ant-dropdown-link'> Hover me <a-icon type='down'></a-icon></a><a-menu slot='overlay'><a-menu-item><a href='javascript:;'>1st menu item</a></a-menu-item><a-menu-item><a href='javascript:;'>2nd menu item</a></a-menu-item><a-menu-item><a href='javascript:;'>3rd menu item</a></a-menu-item></a-menu></a-dropdown>"
                },
                {
                    name:"导航菜单",
                    icon:"",
                    html:"<a-menu v-model='menuValue' mode='horizontal'><a-menu-item key='mail'><a-icon type='mail'></a-icon>Navigation One </a-menu-item><a-menu-item key='app' disabled=''><a-icon type='appstore'></a-icon>Navigation Two </a-menu-item><a-sub-menu><span slot='title' class='submenu-title-wrapper'><a-icon type='setting'></a-icon>Navigation Three - Submenu</span><a-menu-item-group title='Item 1'><a-menu-item key='setting:1'>Option 1</a-menu-item><a-menu-item key='setting:2'>Option 2</a-menu-item></a-menu-item-group><a-menu-item-group title='Item 2'><a-menu-item key='setting:3'>Option 3</a-menu-item><a-menu-item key='setting:4'>Option 4</a-menu-item></a-menu-item-group></a-sub-menu><a-menu-item key='alipay'><a href='https://antdv.com' target='_blank' rel='noopener noreferrer'>Navigation Four - Link</a></a-menu-item></a-menu>"
                },
                {
                    name:"页头",
                    icon:"",
                    html:"<a-page-header style='border: 1px solid rgb(235, 237, 240)' @back='() => null' title='Title' subtitle='This is a subtitle'></a-page-header>"
                },
                {name:"分页",icon:"",html:"<a-pagination v-model='current' :total='50' showlessitems=''></a-pagination>"},
                {name:"步骤条",icon:"",html:"<a-steps :current='1'><a-step></a-step><a-step title='In Progress' subtitle='Left 00:00:08' description='This is a description.'></a-step><a-step title='Waiting' description='This is a description.'></a-step></a-steps>"},
            ]
        },
        {
            name:"数据展示",
            children:[
                {
                    name:"头像",
                    icon:"assets/drag/img/left/photo1.png",
                    html:"<a-avatar shape='square' :size='100' fit='fit' src='img.jpg'></a-avatar>"
                },
                {
                    name:"标记",
                    icon:"assets/drag/img/left/photo1.png",
                    html:"<a-badge :count='badge'></a-badge>"
                },
                {
                    name:"日历",
                    icon:"assets/drag/img/left/day1.png",
                    html:"<a-calendar v-model='calendar' :fullscreen='false'></a-calendar>"
                },
                {
                    name:"卡片",
                    icon:"assets/drag/img/left/card1.png",
                    html:"<a-card title='卡片'></a-card>"
                },{
                    name:"卡片格",
                    icon:"assets/drag/img/left/card1.png",
                    html:"<a-card title='卡片格'><a-card-grid></a-card-grid><a-card-grid></a-card-grid><a-card-grid></a-card-grid></a-card>"
                },
                {
                    name:"走马灯",
                    icon:"assets/drag/img/left/carousel1.png",
                    html:"<a-carousel></a-carousel>"
                },
                {
                    name:"折叠面板",
                    icon:"assets/drag/img/left/fold1.png",
                    html:"<a-collapse><a-collapse-panel header='折叠条目1' key='1'></a-collapse-panel><a-collapse-panel header='折叠条目2' key='2'></a-collapse-panel></a-collapse>"
                },
                {name:"描述列表",icon:"",html:"<a-descriptions bordered title='User Info'><a-descriptions-item label='UserName'>Zhou Maomao</a-descriptions-item><a-descriptions-item label='Telephone'>1810000000</a-descriptions-item><a-descriptions-item label='Live'>Hangzhou, Zhejiang</a-descriptions-item><a-descriptions-item label='Remark'>empty</a-descriptions-item><a-descriptions-item label='Address'>      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China    </a-descriptions-item></a-descriptions>"},
                {name:"空状态",icon:"",html:"<a-empty></a-empty>"},
                {name:"列表",icon:"",html:"<a-list item-layout='horizontal'><a-list-item></a-list-item><a-list-item></a-list-item><a-list-item></a-list-item></a-list>"},
                {name:"气泡卡片",icon:"",html:"<a-popover title='Title'><template slot='content'><p>Content</p><p>Content</p></template><a-button type='primary'>Hover me</a-button></a-popover>"},
                {name:"统计数值",icon:"",html:"<a-statistic title='Active Users' :value='112893' style='margin-right: 50px'></a-statistic>"},
                {name:"倒计时",icon:"",html:"<a-statistic-countdown title='Countdown' :value='deadline'  style='margin-right: 50px'></a-statistic-countdown>"},
                {
                    name:"标签页",
                    icon:"assets/drag/img/left/tagpg1.png",
                    html:"<a-tabs default-active-key='first'><a-tab-pane tab='选项1' key='first'></a-tab-pane><a-tab-pane tab='选项2' key='second'></a-tab-pane></a-tabs>"
                },
                {
                    name:"标签",
                    icon:"assets/drag/img/left/tag1.png",
                    html:"<a-tag>标签</a-tag>"
                },
                {name:"时间轴",icon:"",html:"<a-timeline><a-timeline-item>Create a services site 2015-09-01</a-timeline-item><a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item><a-timeline-item>Technical testing 2015-09-01</a-timeline-item><a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item></a-timeline>"},
                {
                    name:"工具提示",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<a-tooltip title='帮助提示'></a-tooltip>"
                },
                {name:"树形控件",icon:"",html:"<a-tree ><a-icon slot='switcherIcon' type='down'></a-icon><a-tree-node title='parent 1' key='0-0'><a-tree-node title='parent 1-0' key='0-0-0'><a-tree-node title='leaf' key='0-0-0-0'></a-tree-node><a-tree-node title='leaf' key='0-0-0-1'></a-tree-node><a-tree-node title='leaf' key='0-0-0-2'></a-tree-node></a-tree-node><a-tree-node title='parent 1-1' key='0-0-1'><a-tree-node title='leaf' key='0-0-1-0'></a-tree-node></a-tree-node><a-tree-node title='parent 1-2' key='0-0-2'><a-tree-node title='leaf' key='0-0-2-0'></a-tree-node><a-tree-node title='leaf' key='0-0-2-1'></a-tree-node></a-tree-node></a-tree-node></a-tree>"},
                {name:"目录树",icon:"",html:"<a-directory-tree ><a-tree-node title='parent 0' key='0-0'><a-tree-node title='leaf 0-0' key='0-0-0' isleaf=''></a-tree-node><a-tree-node title='leaf 0-1' key='0-0-1' isleaf=''></a-tree-node></a-tree-node><a-tree-node title='parent 1' key='0-1'><a-tree-node title='leaf 1-0' key='0-1-0' isleaf=''></a-tree-node><a-tree-node title='leaf 1-1' key='0-1-1' isleaf=''></a-tree-node></a-tree-node></a-directory-tree>"},

                {
                    name:"图标",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<a-icon type='plus-circle'></a-icon>"
                },
                {
                    name:"静态表格",
                    icon:"assets/drag/img/left/form1.png",
                    html:"<table class='mc-table'><thead><tr><th>列1</th><th>列2</th><th>列3</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table>"
                },
            ]
        },
        {
            name:"反馈",
            children:[
                {name:"抽屉",icon:"",html:"<div><a-button type='primary' @click='showDrawer=true'>打开抽屉</a-button><a-drawer title='Basic Drawer' placement='right'   @close='showDrawer=false'  :visible='showDrawer' ></div>"},
                {name:"对话框",icon:"",html:"<div><a-button type='primary' @click='showModal=true'>打开弹窗</a-button><a-modal title='Basic Modal' v-model='showModal' @ok='showModal=false'></a-modal></div>"},
                {name:"进度条",icon:"",html:"<a-progress :percent='30'></a-progress>"},
                {name:"结果",icon:"",html:"<a-result status='success' title='标题' sub-title='子标题'></a-result>"},
                {name:"加载中",icon:"",html:"<a-spin></a-spin>"},

            ]
        },{
            name:"其他",
            children:[
                {name:"锚点",icon:"",html:"<a-anchor><a-anchor-link href='#components-anchor-demo-basic' title='Basic demo'></a-anchor-link><a-anchor-link href='#components-anchor-demo-static' title='Static demo'></a-anchor-link><a-anchor-link href='#components-anchor-demo-basic' title='Basic demo with Target' target='_blank'></a-anchor-link><a-anchor-link href='#API' title='API'><a-anchor-link href='#Anchor-Props' title='Anchor Props'></a-anchor-link><a-anchor-link href='#Link-Props' title='Link Props'></a-anchor-link></a-anchor-link></a-anchor>"},
                {name:"回到顶部",icon:"",html:"<a-back-top visibility-height='10'></a-back-top>"},
                {name:"全局配置",icon:"",html:"<a-config-provider></a-config-provider>"},
                {name:"分割线",icon:"",html:"<a-divider></a-divider>"},
                {name:"国际化",icon:"",html:"<a-locale-provider :locale='locale'></a-locale-provider>"},
            ]
        },
        {
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
        },
        {
            name:"高级编程",
            children:[
                {
                    name:"模板",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<template slot-scope='scope'></template>"
                }
            ]
        },
        {
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
        "a-row":           {name:"行",canZoom:true,assistZoom:true,       dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],        copy:true,       paste:false, canDelete:true,assistDelete:true,onlyChildren:["a-col"],assistAdd:true,addOneItems:[{"":[{html:"<a-col></a-col>",focus:false}]}]          },
        "a-col":           {name:"列",canZoom:true,assistZoom:true,       dragInto:true,       duplicate:true,assistDuplicate:true,duplicateAttr:[],        copy:false,      paste:true,  canDelete:true,assistDelete:true,onlyParents:["a-row"] ,bind:{"v-text":'""',"v-html":'""',"v-for":"[]"}                                                              },
        "a-layout":     {name:"容器",canZoom:true,assistZoom:true,     dragInto:false,       duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,   canDelete:true,assistDelete:true,                                                               },
        "a-layout-header":        {name:"上",       dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,     paste:true,   canDelete:false,                                                              },
        "a-layout-content":          {name:"中",canZoom:true,assistZoom:true,       dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,     paste:true,   canDelete:false,                                                              },
        "a-layout-sider":         {name:"左",       dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,     paste:true,   canDelete:false,                                                              },
        "a-layout-footer":        {name:"下",       dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,     paste:true,   canDelete:false,                                                              },
        "a-button-group":  {name:"按钮组",    dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,    canDelete:true,assistDelete:true,                                                              },
        "a-radio-group":   {name:"单选框组",treeExtraName:{attr:["v-model"]},    dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,    canDelete:true,assistDelete:true,     onlyChildren:["a-radio"],     bind:{"v-model":'""'} ,assistAdd:true,addOneItems:[{"":[{html:"<a-radio value='1'>单选项1</a-radio>",focus:false}]}]                          },
        "a-checkbox-group":{name:"多选框组",treeExtraName:{attr:["v-model"]},    dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,    canDelete:true,assistDelete:true,     onlyChildren:["a-checkbox"],  bind:{"v-model":"[]"}  ,assistAdd:true,addOneItems:[{"":[{html:"<a-checkbox value='1'>多选项1</a-checkbox>",focus:false}]}]                    },
        "a-form":          {name:"表单容器",canZoom:true,assistZoom:true,      dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,    canDelete:true,assistDelete:true,     onlyChildren:["a-row","a-form-item"], assistAdd:true,addOneItems:[{"":[{html:"<a-form-item label='标题'></a-form-item>",focus:false}]}]},
        "a-form-item":     {name:"表单条目",canZoom:true,assistZoom:true,treeExtraName:{attr:["label"]},   dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,    canDelete:true,assistDelete:true,     onlyParents:["a-form","a-col"]  },
        /*表单*/
        "mc-type=column-el-button":{primary:1,name:"操作按钮",treeExtraName:{attr:[],text:true},     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,      },
        "a-button":        {primary:0,name:"按钮",treeExtraName:{attr:[],text:true},     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true      },
        "a-radio":         {name:"单选框",treeExtraName:{attr:[],text:true},    dragInto:false,     duplicate:true,duplicateAttr:["value"], copy:true,      paste:false,   canDelete:true,      onlyParents:["a-radio-group"]  },
        "a-radio-button":  {name:"单选按钮",   dragInto:false,    duplicate:true,duplicateAttr:[],         copy:true,      paste:false,    canDelete:true     },
        "a-checkbox":      {name:"多选框",treeExtraName:{attr:[],text:true},    dragInto:false,     duplicate:true,duplicateAttr:["value"],         copy:true,      paste:false,   canDelete:true,     onlyParents:["a-checkbox-group"], },
        "a-input":         {name:"输入框",treeExtraName:{attr:["v-model"]},    dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,   bind:{"v-model":'""'} /*,tmpWrapTag:'div'*/},
        "a-textarea":         {name:"文本框",treeExtraName:{attr:["v-model"]},    dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,   bind:{"v-model":'""'} /*,tmpWrapTag:'div'*/},
        "a-input-password":         {name:"密码框",treeExtraName:{attr:["v-model"]},    dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,   bind:{"v-model":'""'} ,tmpWrapTag:'div'},
        "a-input-search":         {name:"搜索框",treeExtraName:{attr:["v-model"]},    dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,   bind:{"v-model":'""'} /*,tmpWrapTag:'div'*/},
        "a-input-number":  {name:"计数器",treeExtraName:{attr:["v-model"]},    dragInto:false,     duplicate:false,duplicateAttr:[],         copy:false,      paste:false,   canDelete:true,assistDelete:true,     bind:{"v-model":"0"}},
        "a-select":        {name:"下拉框",treeExtraName:{attr:["v-model"]},    dragInto:false,     duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,assistDelete:true,    onlyChildren:["a-select-option"], bind:{"v-model":'""'}, assistAdd:true,addOneItems:[{"":[{html:"<a-select-option value='1'>选择1</a-select-option>",focus:true}]}]       },
        "a-select-option":        {name:"下拉框选项",treeExtraName:{attr:["value"]},dragInto:false,      duplicate:true,assistDuplicate:true,duplicateAttr:["value"],  copy:false,      paste:false,   canDelete:true,assistDelete:true,    onlyParents:["a-select"] ,bind:{"v-for":"[]"}        },
        "a-switch":        {name:"开关",treeExtraName:{attr:["v-model"]},     dragInto:false,     duplicate:true,duplicateAttr:[],          copy:true,      paste:false,  canDelete:true,      bind:{"v-model":"false"}},
        "a-slider":        {name:"滑块",treeExtraName:{attr:["v-model"]},     dragInto:false,     duplicate:true,assistDuplicate:false,duplicateAttr:[],          copy:true,      paste:false,  canDelete:true,assistDelete:false,      bind:{"v-model":"0"},tmpWrapTag:'div'},
        /*组件*/
        "a-tabs":          {name:"标签页",canZoom:true,assistZoom:true,treeExtraName:{attr:["v-model"]}, dragInto:false,     duplicate:true,assistDuplicate:true,duplicateAttr:[],          copy:true,      paste:false,  canDelete:true,assistDelete:true,    bind:{"v-model":'""'},assistAdd:true,addOneItems:[{"":[{html:"<a-tab-pane tab='新标签' key='third'></a-tab-pane>",focus:true}]}]},
        "a-tab-pane":      {name:"标签子项",canZoom:true,assistZoom:true,treeExtraName:{attr:["tab"]},  dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:["key"],    copy:false,     paste:true,   canDelete:true,assistDelete:true,    },
        "a-date-picker":   {name:"日期选择器",treeExtraName:{attr:["v-model"]}, dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:false,     paste:true,   canDelete:true,assistDelete:true,    bind:{"v-model":'moment("2020-01-01", "YYYY-MM-DD")'}},
        "a-month-picker":   {name:"月选择器",treeExtraName:{attr:["v-model"]}, dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:false,     paste:true,   canDelete:true,assistDelete:true,    bind:{"v-model":'moment("2020-01-01", "YYYY-MM-DD")'}},
        "a-week-picker":   {name:"周选择器",treeExtraName:{attr:["v-model"]}, dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:false,     paste:true,   canDelete:true,assistDelete:true,    bind:{"v-model":'moment("2020-01-01", "YYYY-MM-DD")'}},
        "a-range-picker":   {name:"日期范围选择器",treeExtraName:{attr:["v-model"]}, dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:false,     paste:true,   canDelete:true,assistDelete:true,    bind:{"v-model":'""'}},
        "a-upload":{"name":"文件上传","treeExtraName":{"attr":[":file-list"]},"dragInto":false,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":false,"canDelete":true,"assistDelete":true,"bind":{":before-upload":"false","custom-request":"null",":default-file-list":"null",":disabled":"false",":file-list":"null",":headers":"null",":preview-file":"无",":show-upload-list":"true",":remove":"false",":transform-file":"无"},tmpWrapTag:'span'},

        "a-rate":          {name:"评分",treeExtraName:{attr:["v-model"]},      dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:false,  canDelete:true,assistDelete:true,    bind:{"v-model":"0"}       },
        "a-tag":           {name:"标签",      dragInto:false,    duplicate:true,                          copy:true,      paste:false,  canDelete:true   },
        "a-checkable-tag":           {name:"可点标签",      dragInto:false,    duplicate:true,                          copy:true,      paste:false,  canDelete:true, bind:{"v-model":"true"}   },
        "a-card":           {name:"卡片",canZoom:true,assistZoom:true,treeExtraName:{attr:["title"]},   dragInto:true,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },
        "a-card-grid":      {name:"卡片格",canZoom:true,assistZoom:true,treeExtraName:{attr:["title"]},   dragInto:true,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },
        "a-carousel":      {name:"走马灯",canZoom:true,assistZoom:true,                                  dragInto:true,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true,assistDelete:true    },
        "a-collapse":      {name:"折叠面板",treeExtraName:{attr:["v-model"]},canZoom:true,assistZoom:true,dragInto:true,  duplicate:true,assistDuplicate:true,   copy:true,      paste:false,  canDelete:true,assistDelete:true,onlyChildren:["a-collapse-panel"],assistAdd:true,addOneItems:[{"":[{html:"<a-collapse-panel header='折叠条目' key='1'></a-collapse-panel>",focus:false}]}], bind:{"v-model":"[]"},    },
        "a-collapse-panel": {name:"折叠条目",treeExtraName:{attr:["header"]},canZoom:true,assistZoom:true,dragInto:true,  duplicate:true,assistDuplicate:true,duplicateAttr:["key"],   copy:true,      paste:false,  canDelete:true,assistDelete:true,onlyParents:["a-collapse"]   },
        "a-badge":         {name:"标记",treeExtraName:{attr:[":count"]},dragInto:true,  duplicate:true,assistDuplicate:true,   copy:true,      paste:true,  canDelete:true,assistDelete:true,bind:{':count':"10"}},
        "a-avatar":        {name:"头像",treeExtraName:{attr:[":src"]},dragInto:false,  duplicate:true,assistDuplicate:true,   copy:true,      paste:true,  canDelete:true,assistDelete:true,bind:{':src':'""'}},
        "a-calendar":      {name:"日历",treeExtraName:{attr:["v-model"]},canZoom:true,assistZoom:true,dragInto:false,  duplicate:true,assistDuplicate:true,   copy:true,      paste:true,  canDelete:true,assistDelete:true,bind:{'v-model':"null"}},
        "a-tooltip":          {name:"工具提示箱",canZoom:true,assistZoom:true,      dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,    canDelete:true,assistDelete:true    },

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

        "a-icon":{primary:0,name:"图标",   dragInto:false, duplicate:true,duplicateAttr:[],         copy:true,      paste:false,    canDelete:true     },
        "a-anchor":{"name":"锚点","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":false,"canDelete":true,"assistDelete":true,"bind":{":affix":"true",":get-current-anchor":'""',":target-offset":"0"},"onlyChildren":["a-anchor-link"],"assistAdd":true,"addOneItems":[{"":[{"html":"<a-anchor-link href='#components-anchor-demo-basic' title='Basic demo'></a-anchor-link>","focus":false}]}]},
        "a-anchor-link":{"name":"锚点链接","dragInto":false,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":false,"canDelete":true,"assistDelete":true,"onlyParents":'["a-anchor"]'},
        "a-back-top":{"name":"回到顶部","dragInto":false,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":false,"canDelete":true,"assistDelete":true},
        "a-config-provider":{"name":"全局配置","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"bind":{":csp":'""',"render-empty":'""',":get-popup-container":"null",":locale":"null"}},
        "a-divider":{"name":"分割线","dragInto":false,"duplicate":true,"assistDuplicate":false,"copy":true,"paste":false,"canDelete":true,"assistDelete":false,"assistZoom":false,"canZoom":false},
        "a-locale-provider":{"name":"国际化","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"bind":{":locale":"null"}},

        /*dj*/
        "a-affix":{"name":"固钉","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"bind":{":offset-bottom":"null",":offset-top":"null",":target":"null"}},
        "a-breadcrumb":{"name":"面包屑","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":false,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"onlyChildren":["a-breadcrumb-item"],"assistAdd":true,"addOneItems":[{"":[{"html":"<a-breadcrumb-item>Home</a-breadcrumb-item>","focus":false}]}],"bind":{":routes":"null"}},
        "a-breadcrumb-item":{"name":"子面包屑","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":false,"paste":true,"canDelete":true,"assistDelete":true,"onlyParents":["a-breadcrumb"]},
        "a-statistic":{"name":"统计数值","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"bind":{":precision":"0",":prefix":'""',":suffix":'""',":value":"0",":value-style":"null"}},
        "a-statistic-countdown":{"name":"倒计时","dragInto":false,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":false,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":false,"bind":{":value":"Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30"}},
        "a-timeline":{"name":"时间轴","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":false,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"onlyChildren":["a-timeline-item"],"assistAdd":true,"addOneItems":[{"":[{"html":"<a-timeline-item>Create a services site 2015-09-01</a-timeline-item>","focus":false}]}],"bind":{":reverse":"false"}},
        "a-timeline-item":{"name":"子时间轴","dragInto":true,"duplicate":false,"assistDuplicate":false,"copy":false,"paste":true,"canDelete":true,"assistDelete":true,"onlyParents":["a-timeline"]},
        "a-popover":{"name":"气泡卡片","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true},
        "a-modal":{"name":"对话框","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"bind":{"v-model":"false","after-close":null,":confirm-loading":false,":ok-button-props":null,":cancel-button-props":null}},
        "a-drawer":{"name":"抽屉","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"bind":{":closable":true,":get-container":null,":visible":false,":body-style":null,":width":256,":placement":"right",":after-visible-change":null}},
        "a-tree":{"name":"树形控件","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":false,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"onlyChildren":["a-tree-node"],"assistAdd":true,"addOneItems":[{"":[{"html":"<a-tree-node title='parent 1' key='0-0'></a-tree-node>","focus":false}]}],"bind":{":tree-data":'[{title:"根",key:"root",children:[{title:"子节点",key:"key1",children:[]},{title:"子节点",key:"key2",children:[]}]}]',":replace-fields":"null",":auto-expand-parent":"true",":default-checked-keys":"0",":default-expanded-keys":"0",":default-selected-keys":"0","filter-tree-node":"null",":load-data":"null",":show-icon":"false",":show-line":"false"}},
        "a-tree-node":{"name":"节点","dragInto":true,"duplicate":true,"assistDuplicate":true,duplicateAttr:['key'],"copy":false,"paste":true,"canDelete":true,"assistDelete":true,"onlyParents":["a-tree","a-directory-tree","a-tree-node"],onlyChildren:['a-tree-node'],assistAdd:true,addOneItems:[{"":[{html:"<a-tree-node title='子节点' key='key'>",focus:false}]}]},
        "a-directory-tree":{"name":"目录树","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,onlyChildren:['a-tree-node'],assistAdd:true,addOneItems:[{"":[{html:"<a-tree-node title='子节点' key='key'>",focus:false}]}]},
        /*wp*/
        "a-dropdown":{"name":"下拉菜单","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"bind":{"get-popup-container":"null",":placement":'"bottomLeft"',":trigger":"null"}},
        "a-menu":{"name":"导航菜单","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":false,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"onlyChildren":["a-menu-item","a-sub-menu","a-menu-item-group"],"bind":{"v-model":'[]',":default-open-keys":"null",":default-selected-keys":'""',":inline-collapsed":"false",":mode":'"vertical"',":theme":'"light"'},assistAdd:true,"addOneItems":[{"":[{html:"<a-menu-item key='setting:1'>Option 1</a-menu-item>",focus:false}]}]},
        "a-sub-menu":{"name":"子菜单","dragInto":true,"duplicate":false,"assistDuplicate":true,"copy":false,"paste":true,"canDelete":true,"assistDelete":true,"onlyParents":["a-menu"],"bind":{":key":'""'},assistAdd:true,"addOneItems":[{"":[{html:"<a-menu-item key='setting:1'>Option 1</a-menu-item>",focus:false}]}]},
        "a-menu-item-group":{"name":"菜单选项组","dragInto":true,"duplicate":false,"assistDuplicate":false,"copy":false,"paste":true,"canDelete":true,"assistDelete":true,"onlyParents":["a-menu"]},
        "a-menu-item":{"name":"菜单选项","dragInto":true,"duplicate":false,"assistDuplicate":true,"copy":false,"paste":true,"canDelete":true,"assistDelete":true,"onlyParents":["a-menu"],"bind":{":key":'""'}},
        "a-page-header":{"name":"页头","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"bind":{":ghost":"true",":breadcrumb":"null"}},

        "a-pagination":{"name":"分页","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"bind":{"v-model":"1",":default-current":"1",":item-render":"null",":page-size-options":'["10", "20", "30", "40"]',":show-total":"null",":total":"50"}},
        "a-steps":{"name":"步骤条","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":false,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"onlyChildren":["a-step"],bind:{"v-model":"0"},"assistAdd":true,"addOneItems":[{"":[{"html":"<a-step title='In Progress' subtitle='Left 00:00:08' description='This is a description.'></a-step>","focus":false}]}]},
        "a-step":{"name":"步骤","dragInto":true,"duplicate":false,"assistDuplicate":true,"copy":false,"paste":true,"canDelete":true,"assistDelete":true,"onlyParents":["a-steps"]},
        "a-auto-complete":{"name":"自动完成","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"bind":{":data-source":"null",":filter-option":"true"}},
        /*lxb*/
        "a-result":{"name":"结果","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"bind":{":icon":"null",":extra":"null"}},
        "a-progress":{"name":"进度条","dragInto":false,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"bind":{":format":"null",":percent":"0",":show-info":"true",":success-percent":"0"}},
        "a-spin":{"name":"加载中","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"bind":{":delay":"0",":indicator":"null",":spinning":"true"}},

        "a-mentions":{"name":"提及","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"bind":{"v-model":'""',":prefix":'"@"'},onlyChildren:["a-mentions-option"],assistAdd:true,"addOneItems":[{"":[{"html":"<a-mentions-option value='magicalcoder'>magicalcoder</a-mentions-option>","focus":false}]}]},
        "a-mentions-option":{"name":"提及条目","dragInto":false,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,assistAdd:true,onlyParents:["a-mentions"]},
        "a-cascader":{"name":"级联选择","dragInto":false,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":false,"canDelete":true,"assistDelete":true,"assistZoom":false,"canZoom":false,"bind":{"v-model":"null",":default-value":"0",":display-render":"null",":field-names":"null","get-popup-container":"null",":load-data":"null",":options":'[{value:"ah",label:"安徽",children:[{value:"hf",label:"合肥",children:[]}]},{value:"zj",label:"浙江",children:[{value:"hz",label:"杭州",children:[]}]}]',":show-search":"false"}},

        "a-descriptions":{"name":"描述列表","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":false,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"onlyChildren":["a-descriptions-item"],"assistAdd":true,"addOneItems":[{"":[{"html":"<a-descriptions-item label='UserName'>Zhou Maomao</a-descriptions-item>","focus":false}]}],"bind":{":column":"3",":size":"null"}},
        "a-descriptions-item":{"name":"子描述列表","dragInto":true,"duplicate":false,"assistDuplicate":false,"copy":false,"paste":true,"canDelete":true,"assistDelete":true,"onlyParents":["a-descriptions"],"bind":{":span":"1"}},
        "a-empty":{"name":"空状态","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"bind":{":description":'""',":image-style":"null",":image":'"false"'}},
        "a-list":{"name":"列表","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":false,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"onlyChildren":["a-list-item"],"assistAdd":true,"addOneItems":[{"":[{"html":"<a-list-item></a-list-item>","focus":false}]}],"bind":{":grid":"null",":loading":"false",":pagination":"false",":data-source":"null"}},
        "a-list-item":{"name":"子列表","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":false,"paste":true,"canDelete":true,"assistDelete":true,"onlyParents":["a-list"]},
        "a-list-item-meta":{"name":"列表元","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":true,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"bind":{":description":'""'}},


        "a-tree-select":{"name":"树选择","dragInto":true,"duplicate":true,"assistDuplicate":true,"copy":true,"paste":false,"canDelete":true,"assistDelete":true,"assistZoom":true,"canZoom":true,"onlyChildren":["a-tree-select-node"],"assistAdd":true,"addOneItems":[{"":[{"html":"<a-tree-select-node value='parent 1' title='parent 1' key='0-1'></a-tree-select-node>","focus":false}]}],"bind":{"v-model":'""',":dropdown-style":"null","filter-tree-node":"false","get-popup-container":"null",":load-data":"null","max-tag-placeholder":"null",":show-checked-strategy":"null",":tree-data":"[]"}},
        "a-tree-select-node":{"name":"树选择节点","dragInto":true,"duplicate":false,"assistDuplicate":false,duplicateAttr:["key","value"],"copy":false,"paste":true,"canDelete":true,"assistDelete":true,"onlyParents":["a-tree-select"]},


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
                    "a-row":[
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'栅格间隔'         ,attrName:':gutter'           ,extra:{min:0,max:2000}          , extend:true},
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'布局模式(现代浏览器下有效)'                                       ,options:[{n:"type",t:"FLEX",c:"flex",u:""}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'水平对齐(当FLEX模式选中时有效)'     ,attrName:'justify'          ,options:[{"start":"头部"},{"end":"尾部"},{"center":"居中"},{"space-around":"环绕"},{"space-between":"间隔"}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:false     ,change:this.change.ATTR    ,title:'垂直对齐(当FLEX模式选中时有效)'     ,attrName:'align'            ,options:[{"top":"顶部对齐"},{"middle":"居中对齐"},{"bottom":"底部对齐"}]},
                    ],
                    "a-col":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'自由定位',options:[{"c":"mc-ui-absolute-pane","n":"","t":"是否开启","u":""}]},
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'栅格占据的列数'     ,attrName:':span'          ,extra:{min:0,max:24}                                               },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'栅格左侧的间隔格数'   ,attrName:':offset'       ,extra:{min:0,max:24}                                                },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'栅格向右移动格数'     ,attrName:':push'        ,extra:{min:0,max:24}                                               },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'栅格向左移动格数'     ,attrName:':pull'        ,extra:{min:0,max:24}                                               },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'xs栅格数'       ,attrName:':xs'              ,extra:{min:0,max:24}  ,responsive:this.responsive.XS                    },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'sm栅格数'       ,attrName:':sm'              ,extra:{min:0,max:24}  ,responsive:this.responsive.SM                    },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'md栅格数'       ,attrName:':md'              ,extra:{min:0,max:24}  ,responsive:this.responsive.MD                    },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'lg栅格数'       ,attrName:':lg'              ,extra:{min:0,max:24}  ,responsive:this.responsive.LG                    },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'xl栅格数'       ,attrName:':xl'              ,extra:{min:0,max:24}  ,responsive:this.responsive.XL                    },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'xxl栅格数'       ,attrName:':xxl'              ,extra:{min:0,max:24}  ,responsive:this.responsive.XXL                    },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'自定义元素标签'      ,attrName:':tag'                                                         },
                    ],
                    "a-layout-sider":[
                        {type:this.type.SWITCH    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'是否可收起'             ,options:[{n:"collapsible",t:"是|否",c:true,u:false}]},
                        {type:this.type.SWITCH    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'默认收起'             ,options:[{n:"default-collapsed",t:"是|否",c:"true",u:false}]},
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'收缩宽度'     ,attrName:'collapsed-width'          ,extra:{min:0,max:2000,suffix:"px"}                                               },
                        {type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'宽度'     ,attrName:'width'          ,extra:{min:0,max:2000,suffix:"px"}                                               },

                    ],
                    "a-form":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"hide-required-mark","t":"隐藏必填红星","u":false},{"c":true,"n":"self-update","t":"自定义字段更新","u":false}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'排列方式'    ,tooltip:''    ,attrName:'layout'    ,options:[{"horizontal":"水平"},{"vertical":"垂直"},{"inline":"内联"}]},
                    ],
                    "a-form-item":[
                        {type:this.type.TEXT            ,clearAttr:true       ,oneLine:true      ,change:this.change.ATTR    ,title:'标签'     ,attrName:'label'                                                          },
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"required","t":"必填","u":false},{"c":"true","n":":colon","t":"标签冒号","u":"false","dv":"true"},{"c":"true","n":":has-feedback","t":"展示校验状态图标","u":"false"},{"c":true,"n":"self-update","t":"自定义字段更新","u":false}]},
                        {type:this.type.TEXT            ,clearAttr:true       ,oneLine:true      ,change:this.change.ATTR    ,title:'额外提示'     ,attrName:'extra'                                                          },
                        {type:this.type.TEXT            ,clearAttr:true       ,oneLine:true      ,change:this.change.ATTR    ,title:'提示信息'     ,attrName:'help'                                                          },
                        {type:this.type.TEXT            ,clearAttr:true       ,oneLine:true      ,change:this.change.ATTR    ,title:'标签布局'     ,attrName:':label-col',placeholder:"{span: 3, offset: 12}"                                                          },
                        {type:this.type.TEXT            ,clearAttr:true       ,oneLine:true      ,change:this.change.ATTR    ,title:'控件布局'     ,attrName:':wrapper-col',placeholder:"{span: 3, offset: 12}"                                                           },
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'校验状态'    ,tooltip:'用于控制该表单域下组件的尺寸'    ,attrName:'validate-status'    ,options:[{"success":"成功"},{"warning":"警告"},{"error":"错误"},{"validating":"校验"}]},
                    ],
                    "a-button":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'测试动态编写脚本'       ,attrName:'testMethod'                       ,options:[{"m1":"弹窗您好","m2":"弹窗MagicalCoder","m3":"加载后弹窗"}],                                                            },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'尺寸'       ,attrName:'size'                       ,options:[{"large":"大","small":"小"}],                                                            },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'类型'       ,attrName:'type'                       ,options:[{"primary":"默认","dashed":"虚边框","danger":"危险","link":"文本"}],                                                            },
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'状态'                       ,options:[{n:"ghost",t:"透明",c:true,u:false},{n:"disabled",t:"禁用",c:true,u:false},{n:"block",t:"自适应",c:true,u:false},{n:":loading",t:"加载中",c:"true",u:""}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'图标'       ,attrName:'icon',extendKey:"icon",extend:true                                                                                   },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'原生类型'     ,attrName:':native-type'              ,options:[{"button":"普通按钮","submit":"提交","reset":"重置"}],                                                            },
                    ],
                    "mc-type=column-el-button":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'尺寸'       ,attrName:'size'                       ,options:[{"medium":"中等","small":"小","mini":"迷你"}],                                                            },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'类型'       ,attrName:'type'                       ,options:[{"primary":"默认","success":"成功","warning":"警告","danger":"危险","info":"信息","text":"文本"}],                                                            },
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'状态'                       ,options:[{n:"plain",t:"朴素",c:true,u:false},{n:"round",t:"圆角",c:true,u:false},{n:"circle",t:"圆型",c:true,u:false},{n:"disabled",t:"禁用",c:true,u:false},{n:":loading",t:"加载中",c:"true",u:""},{n:":autofocus",t:"聚焦",c:"true",u:""}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'图标'       ,attrName:'icon',extendKey:"icon",extend:true                                                                                   },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'原生类型'     ,attrName:':html-type'              ,options:[{"button":"普通按钮","submit":"提交","reset":"重置"}],                                                            },
                    ],
                    "a-radio":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'值'       ,attrName:'value'                                                                                  },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'状态'                       ,options:[{n:"disabled",t:"禁用",c:true,u:false}/*,{n:"checked",t:"当前是否选中",c:true,u:false},{n:":default-checked",t:"默认选中",c:"true",u:false}*/,{n:"auto-focus",t:"聚焦",c:"true",u:false}]},
                    ],
                    "a-radio-button":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'值'       ,attrName:'label'                                                                                },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'状态'                   ,options:[{n:"disabled",t:"禁用",c:true,u:false}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'name'        ,attrName:'name'                                                                                },
                    ],
                    "a-radio-group":[
                        {type:this.type.CHECKBOX     ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'状态'                       ,options:[{n:"disabled",t:"禁用",c:true,u:false}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'默认值'       ,attrName:'default-value'                                                                                },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'name属性'       ,attrName:'name'                                                                                },
                        {type:this.type.SELECT       ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'尺寸'        ,attrName:'size'                       ,options:[{"large":"大","small":"小"}],                                                            },
                        {type:this.type.SELECT       ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'风格样式'        ,attrName:'button-style'                       ,options:[{"outline":"描边","solid":"填色"}],                                                            },
                    ],
                    "a-checkbox-group":[
                        {type:this.type.CHECKBOX     ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'状态'                       ,options:[{n:"disabled",t:"禁用",c:true,u:false}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'默认值'       ,attrName:'default-value'                                                                                },
                    ],
                    "a-checkbox":[
                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'默认的值'       ,attrName:'value'                                                              },
                        {type:this.type.TEXT         ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.CHECKBOX     ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'状态'                       ,options:[{n:"disabled",t:"禁用",c:true,u:false},{n:"checked",t:"勾选",c:true,u:false},{n:"auto-focus",t:"聚焦",c:"true",u:false}]},
                    ],
                    "a-input":[
                        {type:this.type.CHECKBOX   ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'状态'                      ,options:[{n:"disabled",t:"禁用",c:true,u:false},{n:"allow-clear",t:"可清空",c:"true",u:false},{n:"readonly",t:"原生属性，是否只读",c:true,u:false}]},
                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'ID'       ,attrName:'id'                                                              },
                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'前置标签'       ,attrName:'addon-before'                                                              },
                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'后置标签'       ,attrName:'addon-after'                                                              },

                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'默认值'       ,attrName:'default-value'                                                              },
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'类型'        ,attrName:'type'                              ,options:[{"text":"输入框","textarea":"文本框"}]                              },
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'尺寸 '        ,attrName:'size'                       ,options:[{"large":"大","small":"小"}],                                                            },
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'提示' ,attrName:'placeholder'                                                              },
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'头部图标' ,attrName:'prefix',                                                             },
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'尾部图标' ,attrName:'suffix',                                                           },
                    ],
                    "a-input-password":[
                        {type:this.type.CHECKBOX   ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'状态'                      ,options:[{n:"disabled",t:"禁用",c:true,u:false},{n:"allow-clear",t:"可清空",c:"true",u:false},{n:"readonly",t:"原生属性，是否只读",c:true,u:false}]},
                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'ID'       ,attrName:'id'                                                              },
                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'前置标签'       ,attrName:'addon-before'                                                              },
                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'后置标签'       ,attrName:'addon-after'                                                              },

                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'默认值'       ,attrName:'default-value'                                                              },
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'类型'        ,attrName:'type'                              ,options:[{"text":"输入框","textarea":"文本框"}]                              },
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'尺寸 '        ,attrName:'size'                       ,options:[{"large":"大","small":"小"}],                                                            },
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'提示' ,attrName:'placeholder'                                                              },
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'头部图标' ,attrName:'prefix',                                                             },
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'尾部图标' ,attrName:'suffix',                                                           },
                    ],
                    "a-input-search":[
                        {type:this.type.CHECKBOX   ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'状态'                      ,options:[{n:"disabled",t:"禁用",c:true,u:false},{n:"allow-clear",t:"可清空",c:"true",u:false},{n:"readonly",t:"原生属性，是否只读",c:true,u:false}]},
                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'ID'       ,attrName:'id'                                                              },
                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'前置标签'       ,attrName:'addon-before'                                                              },
                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'后置标签'       ,attrName:'addon-after'                                                              },

                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'默认值'       ,attrName:'default-value'                                                              },
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'类型'        ,attrName:'type'                              ,options:[{"text":"输入框","textarea":"文本框"}]                              },
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'尺寸 '        ,attrName:'size'                       ,options:[{"large":"大","small":"小"}],                                                            },
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'提示' ,attrName:'placeholder'                                                              },
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'头部图标' ,attrName:'prefix',                                                             },
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'尾部图标' ,attrName:'suffix',                                                           },
                    ],
                    "a-textarea":[
                        {type:this.type.CHECKBOX   ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'状态'                      ,options:[{n:"disabled",t:"禁用",c:true,u:false},{n:"allow-clear",t:"可清空",c:"true",u:false},{n:"autosize",t:"自适应",c:true,u:false},{n:"readonly",t:"原生属性，是否只读",c:true,u:false}]},
                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'ID'       ,attrName:'id'                                                              },
                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'前置标签'       ,attrName:'addon-before'                                                              },
                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'后置标签'       ,attrName:'addon-after'                                                              },

                        {type:this.type.TEXT         ,clearAttr:true   ,oneLine:true         ,change:this.change.ATTR    ,title:'默认值'       ,attrName:'default-value'                                                              },
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'类型'        ,attrName:'type'                              ,options:[{"text":"输入框","textarea":"文本框"}]                              },
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'尺寸 '        ,attrName:'size'                       ,options:[{"large":"大","small":"小"}],                                                            },
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'提示' ,attrName:'placeholder'                                                              },
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'头部图标' ,attrName:'prefix',                                                             },
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'尾部图标' ,attrName:'suffix',                                                           },
                    ],
                    "a-input-number":[
                        {type:this.type.CHECKBOX  ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'状态'                       ,options:[{n:"disabled",t:"禁用",c:true,u:false},{n:"auto-focus",t:"聚焦",c:"true",u:false}]},
                        {type:this.type.SELECT    ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'尺寸'        ,attrName:'size'                      ,options:[{"large":"大型","small":"小型"}],                       },
                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'最小值'        ,attrName:':min'              ,extra:{min:0,max:20000}                                               },
                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'最大值'        ,attrName:':max'              ,extra:{min:0,max:20000}                                               },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'步长' ,attrName:':step'                                                             },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'数值精度' ,attrName:':precision'                                                             },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'小数点' ,attrName:'decimal-separator'                                                             },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'默认值' ,attrName:':default-value'                                                             },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'formatter' ,attrName:':formatter',placeholder:"value => `$ ${value}`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')"                                                            },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'parser' ,attrName:':parser',placeholder:"value => value.replace(/\\$\\s?|(,*)/g, '')"                                                             },
                    ],
                    "a-select":[
                        {type:this.type.SELECT    ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'模式'  ,attrName:'mode'      ,options:[{"default":"默认","multiple":"多选","tags":"标签","combobox":"组合框"}],                                                            },
                        {type:this.type.CHECKBOX  ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'状态'      ,options:[{n:"allow-clear",t:"支持清除",c:true,u:false},{n:"disabled",t:"禁用",c:true,u:false},{n:"auto-focus",t:"自动聚焦",c:"true",u:false},{n:"default-active-first-option",t:"高亮第一个选项",c:"true",u:false},{n:"dropdown-match-select-width",t:"下拉菜单和选择器同宽",c:"true",u:false},{n:"label-in-value",t:"label包装到value",c:"true",u:false}]},
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'默认值' ,attrName:'default-value'                                                      },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'提示文本' ,attrName:'placeholder'                                                      },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'下拉框的类名'        ,attrName:'dropdown-class-name'                                                      },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'默认高亮的选项' ,attrName:'first-active-Value'                                                      },

                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'最大标签数'       ,attrName:'max-tag-count'              ,extra:{min:0,max:200}                                               },

                    ],
                    "a-select-option":[
                        {type:this.type.CHECKBOX  ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'状态'         ,options:[{n:"disabled",t:"禁用",c:true,u:false}]},
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'值'      ,attrName:'value'                                                      },
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'Key'      ,attrName:'key'                                                      },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'标题'      ,attrName:'title'                                                      },
                    ],
                    "a-switch":[
                        {type:this.type.CHECKBOX  ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'状态'      ,options:[{n:"disabled",t:"是否禁用",c:true,u:false},{n:"default-checked",t:"初始选中",c:"true",u:false},{n:"auto-focus",t:"聚焦",c:"true",u:false},{n:"loading",t:"加载中",c:true,u:false}]},
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'选中时的内容'      ,attrName:'checked-children'                                                      },
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'非选中时的内容'      ,attrName:'un-checked-children'                                                      },
                        {type:this.type.SELECT    ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'尺寸'        ,attrName:'size'                      ,options:[{"default":"默认","small":"小型"}],                                                            },

                    ],
                    "a-slider":[
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'状态' ,options:[
                            {n:"vertical",t:"垂直",c:true,u:false},{n:":tooltip-visible",t:"提示窗",c:"true",u:"false"}/*,{n:":range",t:"双滑模式",c:true,u:false}*/,{n:"disabled",t:"禁用",c:true,u:false},{n:"dots",t:"刻度拖拽",c:true,u:false},{n:":included",t:"包含",c:true,u:false},{n:"auto-focus",t:"聚焦",c:"true",u:false}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'默认值'       ,attrName:':default-value'},
                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'最小值'       ,attrName:':min'              ,extra:{min:0,max:20000}},
                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'最大值'       ,attrName:':max'              ,extra:{min:0,max:20000}},
                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'步长'       ,attrName:':step'              ,extra:{min:0,max:20000}},
                    ],
                    "a-upload":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:":multiple",t:"多文件",c:true,u:false,dv:false},{n:"directory",t:"支持上传文件夹",c:true,u:false,dv:false},{n:"support-server-render",t:"服务端渲染时打开",c:true,u:false,dv:false},{n:"with-credentials",t:"上传携带cookie",c:true,u:false,dv:false},{n:"open-file-dialog-on-click",t:"点击打开文件对话框",c:true,u:false,dv:true}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'上传的地址',tooltip:'属性名:action<br>说明:上传的地址<br>类型:string|(file) => Promise<br>默认值:无',attrName:'action'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'上传请求的 http method',tooltip:'属性名:method<br>说明:上传请求的 http method<br>类型:string<br>默认值:post',attrName:'method'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'参数方法',tooltip:'属性名:data<br>说明:上传所需参数或返回上传参数的方法<br>类型:object|(file) => object<br>默认值:无',attrName:'data'},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'上传列表的内建样式',tooltip:'属性名:list-type<br>说明:上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card<br>类型:string<br>默认值:text',attrName:'list-type',options:[{"text":"文本"},{"picture":"图片"},{"picture-card":"图卡"}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'接受上传的文件类型',tooltip:'属性名:accept<br>说明:接受上传的文件类型, 详见 input accept Attribute<br>类型:string<br>默认值:无',attrName:'accept'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'发到后台的文件参数名',tooltip:'属性名:name<br>说明:发到后台的文件参数名<br>类型:string<br>默认值:file',attrName:'name'}
                    ],
                    "a-rate":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":"true","n":"allow-half","t":"半选","u":false},{"c":true,"n":"disabled","t":"只读","u":false},{"c":"true","n":":allow-clear","t":"清除","u":"false",dv:"true"},{n:"auto-focus",t:"聚焦",c:"true",u:false}]},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'其他字符'    ,tooltip:'其他字符'    ,attrName:'character'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'默认值'    ,tooltip:'默认值'    ,attrName:':default-value'},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'最大分值'    ,attrName:'count'    ,extra:{"min":0,"max":100}},
                    ],

                    "a-tag":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"closable","t":"是否可关闭","u":false}]},
                        {type:this.type.COLOR_PICKER    ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'背景色'  ,attrName:'color'},
                    ],
                    "a-date-picker":[
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'日期类型'        ,attrName:'mode'                       ,options:[{"time":"年月日时分秒","date":"年月日","month":"月","year":"年"}]},
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'状态' ,options:[/*{n:"open",t:"弹层展开",c:true,u:false},*/{n:"disabled",t:"禁用",c:true,u:false},{n:"show-time",t:"可选时间",c:"true",u:false},{n:"show-today",t:"可选今天",c:"true",u:false},{n:"allow-clear",t:"可清空",c:"true",u:false},{n:"auto-focus",t:"自动聚焦",c:"true",u:false}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'提示'       ,attrName:'placeholder'},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'弹出日历样式名'       ,attrName:'dropdown-class-name'},
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'尺寸 '        ,attrName:'size'                       ,options:[{"large":"大","small":"小"}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'格式化'       ,attrName:'format' ,placeholder:"yyyy-MM-dd HH:mm:ss"},

                    ],
                    "a-month-picker":[
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'状态' ,options:[/*{n:"open",t:"弹层展开",c:true,u:false},*/{n:"disabled",t:"禁用",c:true,u:false},{n:"allow-clear",t:"可清空",c:"true",u:false},{n:"auto-focus",t:"自动聚焦",c:"true",u:false}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'提示'       ,attrName:'placeholder'},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'弹出日历样式名'       ,attrName:'dropdown-class-name'},
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'尺寸 '        ,attrName:'size'                       ,options:[{"large":"大","small":"小"}]},
                    ],
                    "a-range-picker":[
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'状态' ,options:[/*{n:"open",t:"弹层展开",c:true,u:false},*/{n:"disabled",t:"禁用",c:true,u:false},{n:"allow-clear",t:"可清空",c:"true",u:false},{n:"auto-focus",t:"自动聚焦",c:"true",u:false}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'提示'       ,attrName:'placeholder'},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'弹出日历样式名'       ,attrName:'dropdown-class-name'},
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'尺寸 '        ,attrName:'size'                       ,options:[{"large":"大","small":"小"}]},
                    ],
                    "a-week-picker":[
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'状态' ,options:[/*{n:"open",t:"弹层展开",c:true,u:false},*/{n:"disabled",t:"禁用",c:true,u:false},{n:"allow-clear",t:"可清空",c:"true",u:false},{n:"auto-focus",t:"自动聚焦",c:"true",u:false}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'提示'       ,attrName:'placeholder'},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true        ,change:this.change.ATTR    ,title:'弹出日历样式名'       ,attrName:'dropdown-class-name'},
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'尺寸 '        ,attrName:'size'                       ,options:[{"large":"大","small":"小"}]},
                    ],
                    "a-tabs":[
                        {type:this.type.TEXT      ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR    ,title:'默认选择值' ,attrName:'default-active-key'},
                        {type:this.type.CHECKBOX  ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":"true","n":"hide-add","t":"隐藏加号","u":false}]},
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'尺寸 '        ,attrName:'size'                       ,options:[{"large":"大","default":"中","small":"小"}]},
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'页签位置 '        ,attrName:'tab-position'                       ,options:[{"top":"上","bottom":"下","left":"左","right":"右"}]},
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'页签样式 '        ,attrName:'type'                       ,options:[{"line":"线","card":"卡片","editable-card":"可编辑卡片"}]},
                        {type:this.type.SLIDER    ,clearAttr:true      ,oneLine:false        ,change:this.change.ATTR    ,title:'页签间隙'       ,attrName:':tab-bar-gutter'              ,extra:{min:0,max:2000}},
                    ],
                    "a-tab-pane":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"disabled","t":"是否禁用","u":false},{"c":"true","n":"force-render","t":"渲染dom","u":false}]},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'标题'    ,attrName:'tab'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'值'    ,attrName:'key'},
                    ],
                    "a-card":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":"true","n":":bordered","t":"边框","u":"false",dv:"true"},{"c":"true","n":":loading","t":"加载中","u":"false",dv:"true"},{"c":"true","n":":hoverable","t":"鼠标手势","u":"false"}]},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'卡片标题'    ,tooltip:'设置头标题'    ,attrName:'title'},
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'尺寸 '        ,attrName:'size'                       ,options:[{"default":"默认","small":"小"}]},
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'类型 '        ,attrName:'type'                       ,options:[{"inner":"盒装"}]},

                    ],
                    "a-carousel":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"vertical","t":"垂直","u":false},{"c":true,"n":"autoplay","t":"自动播放","u":false},{"c":true,"n":"dots","t":"指示点","u":false}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'切换方式'    ,attrName:'effect'    ,options:[{"scrollx":"滑动"},{"fade":"渐隐"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'动画效果'    ,attrName:'easing'    ,options:[{"linear":"线性"}]},
                    ],
                    "a-avatar":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'图标'       ,attrName:'icon',extendKey:"icon",extend:true                                                                                   },
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'设置头像的形状'    ,tooltip:'设置头像的形状'    ,attrName:'shape'    ,options:[{"circle":"圆形"},{"square":"方形"}]},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'头像大小'        ,attrName:':size'    ,extra:{"min":0,"max":2000}},
                        {type:this.type.FILEUPLOAD      ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'图片地址'   ,attrName:'src'     },
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'描述图像的替换文本'    ,tooltip:'描述图像的替换文本'    ,attrName:'alt'},
                    ],
                    "magical-drag-tmp-submenu-name":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                    ],
                    "a-collapse":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"accordion","t":"手风琴","u":false},{"c":"true","n":":bordered","t":"边框","u":"false",dv:"true"},]},
                        {type:this.type.TEXT      ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR    ,title:'默认选择值' ,attrName:'default-active-key'},

                    ],
                    "a-collapse-panel":[
                        {type:this.type.CHECKBOX  ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":"true","n":":disabled","t":"禁用","u":"false"},{"c":"true","n":":show-arrow","t":"箭头","u":"false",dv:"true"}]},
                        {type:this.type.TEXT      ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR    ,title:'唯一值' ,attrName:'key'},
                        {type:this.type.TEXT      ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR    ,title:'标题'    ,attrName:'header'},
                    ],
                    "a-badge":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true      ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":"true","n":"show-zero","t":"值为零显示","u":false},{"c":true,"n":"dot","t":"红点","u":false}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'类型'        ,attrName:'status'    ,options:[{"processing":"处理中","success":"成功","warning":"警告","error":"错误","default":"信息"}]},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'封顶数值'        ,attrName:':overflow-count'    ,extra:{"min":0,"max":2000}},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'值样式'    ,tooltip:'值样式'    ,attrName:':number-style'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'悬停标题'    ,tooltip:'设置鼠标放在状态点上时显示的文字'    ,attrName:'title'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'位置偏移'    ,tooltip:'设置状态点的位置偏移，格式为 [x, y]'    ,attrName:'offset',placeholder:"[x,y]"},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'文本'    ,tooltip:'在设置了 status 的前提下有效，设置状态点的文本'    ,attrName:'text',placeholder:""},
                    ],

                    "a-calendar":[
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":"true","n":":fullscreen","t":"全屏显示","u":"false"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'初始模式'        ,attrName:'mode'    ,options:[{"month":"月","year":"年"}]},

                    ],
                    "a-icon":[

                        {type:this.type.TEXT      ,clearAttr:false       ,oneLine:true     ,change:this.change.ATTR,attrName:'type'   ,title:'图标',extendKey:"icon",extend:true    },
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'主题'        ,attrName:'theme'    ,options:[{"filled":"实心","outlined":"描线","twoTone":"双色"}]},
                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true      ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"spin","t":"旋转","u":false}]},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'旋转角度'        ,attrName:':rotate'    ,extra:{"min":0,"max":360}},
                        {type:this.type.COLOR_PICKER    ,clearAttr:true         ,oneLine:true ,change:this.change.ATTR     ,title:'双色图标颜色'  ,attrName:'two-tone-color' },
                    ],
                    "a-tooltip":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'提示文字'    ,attrName:'title'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'卡片类名'    ,tooltip:'overlayClassName'    ,attrName:'overlay-class-name'},
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'卡片样式'    ,tooltip:'overlayStyle'    ,attrName:'overlay-style'},

                        {type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true      ,change:this.change.ATTR     ,title:'状态'    ,options:[{"c":true,"n":"arrow-point-at-center","t":"箭头指向目标中心","u":false},{"c":true,"n":"auto-adjust-overflow","t":"被遮挡自动调整位置","u":false},{"c":true,"n":"default-visible","t":"显隐","u":false},{"c":true,"n":"destroy-tooltip-on-hide","t":"隐藏后是否销毁","u":false}]},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'鼠标移入延时显示(秒)'        ,attrName:'mouse-enter-delay'    ,extra:{"min":0,"max":20}},
                        {type:this.type.SLIDER          ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'鼠标移出延时隐藏(秒)'        ,attrName:'mouse-leave-delay'    ,extra:{"min":0,"max":20}},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'触发行为'        ,attrName:'trigger'    ,options:[{"hover":"鼠标悬停"},{"focus":"聚焦"},{"click":"点击"},{"contextmenu":"右键菜单"}]},
                        {type:this.type.SELECT          ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'气泡框位置'        ,attrName:'placement'    ,options:[{"top":"上"},{"left":"左"},{"right":"右"},{"bottom":"下"},{"topLeft":"上左"},{"topRight":"上右"},{"bottomLeft":"下左"},{"bottomRight":"下右"},{"leftTop":"左上"},{"leftBottom":"左下"},{"rightTop":"右上"},{"rightBottom":"右下"}]},
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
                    "a-anchor":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"show-ink-in-fixed",t:"固定模式是否显示小圆点",c:true,u:false,dv:false}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'指定滚动的容器',tooltip:'属性名:get-container<br>说明:指定滚动的容器<br>类型:() => HTMLElement<br>默认值:() => window',attrName:'get-container'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'容器的类名',tooltip:'属性名:wrapper-class<br>说明:容器的类名<br>类型:string',attrName:'wrapper-class'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'容器样式',tooltip:'属性名:wrapper-style<br>说明:容器样式<br>类型:object',attrName:'wrapper-style'},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'锚点区域边界',tooltip:'属性名:bounds<br>说明:锚点区域边界<br>类型:number<br>默认值:5(px)',attrName:'bounds',extra:{min:0,max:20000}},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'距离窗口底部达到指定偏移量后触发',tooltip:'属性名:offset-bottom<br>说明:距离窗口底部达到指定偏移量后触发<br>类型:number',attrName:'offset-bottom',extra:{min:0,max:20000}},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'距离窗口顶部达到指定偏移量后触发',tooltip:'属性名:offset-top<br>说明:距离窗口顶部达到指定偏移量后触发<br>类型:number',attrName:'offset-top',extra:{min:0,max:20000}}
                    ],
                    "a-anchor-link":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'锚点链接',tooltip:'属性名:href<br>说明:锚点链接<br>类型:string',attrName:'href'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'文字内容',tooltip:'属性名:title<br>说明:文字内容<br>类型:string|slot',attrName:'title'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'该属性指定在何处显示链接的资源。',tooltip:'属性名:target<br>说明:该属性指定在何处显示链接的资源。<br>类型:string',attrName:'target'}
                    ],
                    "a-back-top":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数',tooltip:'属性名:target<br>说明:设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数<br>类型:Function<br>默认值:() => window',attrName:'target'},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'滚动高度达到此参数值才出现 BackTop',tooltip:'属性名::visibility-height<br>说明:滚动高度达到此参数值才出现 BackTop<br>类型:number<br>默认值:400',attrName:':visibility-height',extra:{min:0,max:20000}}
                    ],
                    "a-config-provider":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"auto-insert-space-in-button",t:"设置为 false 时，移除按钮中 2 个汉字之间的空格",c:true,u:false,dv:true},{n:"page-header",t:"统一设置 pageHeader 的 ghost，参考 pageHeader",c:true,u:false,dv:false}]}
                    ],
                    "a-divider":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"dashed",t:"是否虚线",c:true,u:false,dv:false}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'水平还是垂直类型',tooltip:'属性名:type<br>说明:水平还是垂直类型<br>类型:enum: horizontal vertical<br>默认值:horizontal',attrName:'type',options:[{"horizontal":"水平","vertical":"垂直"}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'分割线标题的位置',tooltip:'属性名:orientation<br>说明:分割线标题的位置<br>类型:enum: left right<br>默认值:center',attrName:'orientation',options:[{"left":"左","right":"右"}]}
                    ],


                    "a-affix":[
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'距离窗口底部达到指定偏移量',tooltip:'属性名::offset-bottom<br>说明:距离窗口底部达到指定偏移量后触发<br>类型:number',attrName:':offset-bottom',extra:{min:1,max:2000}},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'距离窗口顶部达到指定偏移量',tooltip:'属性名::offset-top<br>说明:距离窗口顶部达到指定偏移量后触发<br>类型:number',attrName:':offset-top',extra:{min:1,max:2000}},

                    ],
                    "a-breadcrumb":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义链接函数',tooltip:'属性名:item-render<br>说明:自定义链接函数，和 vue-router 配置使用，也可使用 slot=itemRender 和 slot-scope=props<br>类型:({route, params, routes, paths, h}) => vNode',attrName:'item-render'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'路由的参数',tooltip:'属性名:params<br>说明:路由的参数<br>类型:object',attrName:'params'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'分隔符自定义',tooltip:'属性名:separator<br>说明:分隔符自定义<br>类型:string|slot',attrName:'separator'}
                    ],
                    "a-breadcrumb-item":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.TEXT,title:'文本'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'链接的目的地',tooltip:'属性名:href<br>说明:链接的目的地<br>类型:string',attrName:'href'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'下拉菜单的内容',tooltip:'属性名:overlay<br>说明:下拉菜单的内容<br>类型:Menu | () => Menu',attrName:'overlay'}
                    ],
                    "a-statistic":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置小数点',tooltip:'属性名:decimal-separator<br>说明:设置小数点<br>类型:string<br>默认值:.',attrName:'decimal-separator'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义数值展示',tooltip:'属性名:formatter<br>说明:自定义数值展示<br>类型:v-slot | ({h, value}) => VNode',attrName:'formatter'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置千分位标识符',tooltip:'属性名:group-separator<br>说明:设置千分位标识符<br>类型:string<br>默认值:,',attrName:'group-separator'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'数值的标题',tooltip:'属性名:title<br>说明:数值的标题<br>类型:string | v-slot',attrName:'title'}
                    ],
                    "a-statistic-countdown":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'格式化倒计时展示',tooltip:'属性名:format<br>说明:格式化倒计时展示，参考 moment<br>类型:string<br>默认值:HH:mm:ss',attrName:'format'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置数值的前缀',tooltip:'属性名:prefix<br>说明:设置数值的前缀<br>类型:string | v-slot',attrName:'prefix'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置数值的后缀',tooltip:'属性名:suffix<br>说明:设置数值的后缀<br>类型:string | v-slot',attrName:'suffix'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'数值的标题',tooltip:'属性名:title<br>说明:数值的标题<br>类型:string | v-slot',attrName:'title'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置数值的样式',tooltip:'属性名:value-style<br>说明:设置数值的样式<br>类型:style',attrName:'value-style'}
                    ],
                    "a-timeline":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"pending",t:"最后一个幽灵节点存在",c:true,u:false,dv:false}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'当最后一个幽灵节点存在時,指定其时间图点',tooltip:'属性名:pending-dot<br>说明:当最后一个幽灵节点存在時，指定其时间图点<br>类型:string|slot<br>默认值:<Icon type=loading />',attrName:'pending-dot'},
                        {type:this.type.SELECT,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'通过设置mode可以改变时间轴和内容的相对位置',attrName:'mode',options:[{"left":"左边","alternate":"交替","right":"右边"}]},
                    ],
                    "a-timeline-item":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.TEXT,title:'文本'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义时间轴点',tooltip:'属性名:dot<br>说明:自定义时间轴点<br>类型:string|slot',attrName:'dot'},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义节点位置',attrName:'position',options:[{"left":"左边","right":"右边"}]},
                        {type:this.type.COLOR_PICKER,clearAttr:true,oneLine:true,change:this.change.ATTR,tooltip:'属性名:color<br>说明:指定圆圈颜色 blue, red, green，或自定义的色值<br>类型:string<br>默认值:blue',title:'指定圆圈颜色 blue, red, green，或自定义的色值',attrName:'color'}
                    ],
                    "a-popover":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'卡片内容',tooltip:'属性名:content<br>说明:卡片内容<br>类型:string|slot|VNode<br>默认值:无',attrName:'content'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'卡片标题',tooltip:'属性名:title<br>说明:卡片标题<br>类型:string|slot|VNode<br>默认值:无',attrName:'title'}
                    ],
                    "a-modal":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态',options:[{n:"centered",t:"垂直居中展示Modal",c:true,u:false,dv:false},{n:"closable",t:"显示右上角的关闭按钮",c:true,u:false,dv:true},{n:"destroy-on-close",t:"关闭时销毁Modal里的子元素",c:true,u:false,dv:false},{n:"force-render",t:"强制渲染Modal",c:true,u:false,dv:false},{n:"keyboard",t:"支持键盘esc关闭",c:true,u:false,dv:true},{n:"mask",t:"展示遮罩",c:true,u:false,dv:true},{n:"mask-closable",t:"点击蒙层允许关闭",c:true,u:false,dv:true}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'Modal body样式',tooltip:'属性名:body-style<br>说明:Modal body 样式<br>类型:object<br>默认值:{}',attrName:'body-style'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'取消按钮文字',tooltip:'属性名:cancel-text<br>说明:取消按钮文字<br>类型:string| slot<br>默认值:取消',attrName:'cancel-text'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义关闭图标',tooltip:'属性名:close-icon<br>说明:自定义关闭图标<br>类型:VNode | slot',attrName:'close-icon'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'底部内容，当不需要默认底部按钮时，可以设为:footer="null"',tooltip:'属性名:footer<br>说明:底部内容，当不需要默认底部按钮时，可以设为 :footer=null<br>类型:string|slot<br>默认值:确定取消按钮',attrName:'footer'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'指定Modal挂载的HTML节点',tooltip:'属性名:get-container<br>说明:指定 Modal 挂载的 HTML 节点<br>类型:(instance): HTMLElement<br>默认值:() => document.body',attrName:'get-container'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'遮罩样式',tooltip:'属性名:mask-style<br>说明:遮罩样式<br>类型:object<br>默认值:{}',attrName:'mask-style'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'确认按钮文字',tooltip:'属性名:ok-text<br>说明:确认按钮文字<br>类型:string|slot<br>默认值:确定',attrName:'ok-text'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'确认按钮类型',tooltip:'属性名:ok-type<br>说明:确认按钮类型<br>类型:string<br>默认值:primary',attrName:'ok-type'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'标题',tooltip:'属性名:title<br>说明:标题<br>类型:string|slot<br>默认值:无',attrName:'title'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'对话框外层容器的类名',tooltip:'属性名:wrap-class-name<br>说明:对话框外层容器的类名<br>类型:string',attrName:'wrap-class-name'},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'宽度',tooltip:'属性名:width<br>说明:宽度<br>类型:string|number<br>默认值:520',attrName:'width',extra:{min:0,max:20000}},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'设置Modal的z-index',tooltip:'属性名:z-index<br>说明:设置 Modal 的 z-index<br>类型:Number<br>默认值:1000',attrName:'z-index',extra:{min:0,max:20000}}
                    ],
                    "a-drawer":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"destroy-on-close",t:"关闭时销毁Drawer里的子元素",c:true,u:false,dv:false},{n:"mask-closable",t:"点击蒙层允许关闭",c:true,u:false,dv:true},{n:"mask",t:"展示遮罩",c:true,u:false,dv:true},{n:"keyboard",t:"支持键盘esc关闭",c:true,u:false,dv:true}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'遮罩样式',tooltip:'属性名:mask-style<br>说明:遮罩样式<br>类型:object<br>默认值:{}',attrName:'mask-style'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'标题',tooltip:'属性名:title<br>说明:标题<br>类型:string | slot',attrName:'title'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'对话框外层容器的类名',tooltip:'属性名:wrap-class-name<br>说明:对话框外层容器的类名<br>类型:string',attrName:'wrap-class-name'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'可用于设置Drawer最外层容器的样式',tooltip:'属性名:wrap-style<br>说明:可用于设置Drawer最外层容器的样式，和drawerStyle 的区别是作用节点包括 mask<br>类型:object',attrName:'wrap-style'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'用于设置Drawer弹出层的样式',tooltip:'属性名:drawer-style<br>说明:用于设置Drawer弹出层的样式<br>类型:object',attrName:'drawer-style'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'用于设置Drawer头部的样式',tooltip:'属性名:header-style<br>说明:用于设置 Drawer 头部的样式<br>类型:object',attrName:'header-style'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置后抽屉直接挂载到DOM上',tooltip:'属性名:handle<br>说明:设置后抽屉直接挂载到 DOM 上，你可以通过该 handle 控制抽屉打开关闭<br>类型:VNode | slot',attrName:'handle'},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'高度',tooltip:'属性名:height<br>说明:高度,在placement为top或bottom 时使用<br>类型:string | number<br>默认值:256',attrName:'height',extra:{min:0,max:20000}},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'设置Drawer的z-index',tooltip:'属性名:z-index<br>说明:设置 Drawer 的 z-index<br>类型:Number<br>默认值:1000',attrName:'z-index',extra:{min:0,max:20000}}
                    ],
                    "a-tree":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"block-node",t:"节点占据一行",c:true,u:false,dv:false},{n:"checkable",t:"节点前添加复选框",c:true,u:false,dv:false},{n:"check-strictly",t:"checkable状态下节点选择完全受控",c:true,u:false,dv:false},{n:"default-expand-all",t:"展开所有树节点",c:true,u:false,dv:false},{n:"draggable",t:"设置节点可拖拽",c:true,u:false,dv:false},{n:"multiple",t:"支持点选多个节点",c:true,u:false,dv:false},{n:"selectable",t:"可选中",c:true,u:false,dv:true}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'默认展开父节点',tooltip:'属性名:default-expand-parent<br>说明:默认展开父节点<br>类型:bool<br>默认值:true',attrName:'default-expand-parent'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'将树禁用',tooltip:'属性名:disabled<br>说明:将树禁用<br>类型:bool<br>默认值:false',attrName:'disabled'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义树节点的展开/折叠图标',tooltip:'属性名:switcher-icon<br>说明:自定义树节点的展开/折叠图标<br>类型:slot',attrName:'switcher-icon'},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'选中复选框的树节点',tooltip:'属性名:checked-keys(v-model)<br>说明:（受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置checkable和checkStrictly，它是一个有checked和halfChecked属性的对象，并且父子节点的选中与否不再关联<br>类型:string[] | number[] | {checked: string[] | number[], halfChecked: string[] | number[]}<br>默认值:[]',attrName:'v-model',extra:{min:0,max:20000}},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'展开指定的树节点',tooltip:'属性名:expanded-keys(.sync)<br>说明:（受控）展开指定的树节点<br>类型:string[] | number[]<br>默认值:[]',attrName:'expanded-keys(.sync)',extra:{min:0,max:20000}},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'已经加载的节点',tooltip:'属性名:loaded-keys<br>说明:（受控）已经加载的节点，需要配合 loadData 使用<br>类型:string[] | number[]<br>默认值:[]',attrName:'loaded-keys',extra:{min:0,max:20000}},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'设置选中的树节点',tooltip:'属性名:selected-keys(.sync)<br>说明:（受控）设置选中的树节点<br>类型:string[] | number[]',attrName:'selected-keys(.sync)',extra:{min:0,max:20000}}
                    ],
                    "a-tree-node":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'标题',tooltip:'属性名:title<br>说明:标题<br>类型:string|slot|slot-scope<br>默认值:---',attrName:'title'},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态',options:[{n:"checkable",t:"当树为checkable时，设置独立节点是否展示Checkbox",c:true,u:false,dv:false},{n:"disable-checkbox",t:"禁掉 checkbox",c:true,u:false,dv:false},{n:"disabled",t:"禁掉响应",c:true,u:false,dv:false},{n:"is-leaf",t:"设置为叶子节点(设置了loadData时有效)",c:true,u:false,dv:false},{n:"selectable",t:"设置节点可被选中",c:true,u:false,dv:true}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'节点的class',tooltip:'属性名:class<br>说明:节点的 class<br>类型:string',attrName:'class'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'节点的style',tooltip:'属性名:style<br>说明:节点的 style<br>类型:string|object',attrName:'style'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义图标',tooltip:'属性名:icon<br>说明:自定义图标。可接收组件，props 为当前节点 props<br>类型:slot|slot-scope',attrName:'icon'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'使用treeNodes时，可以通过该属性配置支持slot的属性',tooltip:'属性名:slots<br>说明:使用 treeNodes 时，可以通过该属性配置支持 slot 的属性，如 slots: { title: XXX}<br>类型:object',attrName:'slots'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'使用columns时，可以通过该属性配置支持slot-scope的属性',tooltip:'属性名:scoped-slots<br>说明:使用 columns 时，可以通过该属性配置支持 slot-scope 的属性，如 scopedSlots: { title: XXX}<br>类型:object',attrName:'scoped-slots'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'事件对象',tooltip:'属性名:on<br>说明:事件对象，仅在 treeNodes 使用方式中生效，如{click: () => {}}<br>类型:object<br>默认值:---',attrName:'on'},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'被树的属性所用',tooltip:'属性名:key<br>说明:被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！<br>类型:string | number<br>默认值:内部计算出的节点位置',attrName:'key',extra:{min:0,max:20000}}
                    ],
                    "a-directory-tree":[
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'目录展开逻辑',tooltip:'属性名:expand-action<br>说明:目录展开逻辑，可选 false click dblclick<br>类型:string<br>默认值:click',attrName:'expand-action',options:[{"false":"无","'click'":"单击","'dblclick'":"双击"}]}
                    ],
                    "a-dropdown":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"disabled",t:"菜单是否禁用",c:true,u:false,dv:false},{n:"v-model",t:"菜单是否显示",c:true,u:false,dv:false}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'菜单',tooltip:'属性名:overlay(slot-scope)<br>说明:菜单<br>类型:Menu',attrName:'overlay(slot-scope)'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'下拉根元素的类名称',tooltip:'属性名:overlay-class-name<br>说明:下拉根元素的类名称<br>类型:string',attrName:'overlay-class-name'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'下拉根元素的样式',tooltip:'属性名:overlay-style<br>说明:下拉根元素的样式<br>类型:object',attrName:'overlay-style'},

                    ],
                    "a-menu":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"force-sub-menu-render",t:"在子菜单展示之前就渲染进 DOM",c:true,u:false,dv:false},{n:"multiple",t:"是否允许多选",c:true,u:false,dv:false},{n:"selectable",t:"是否允许选中",c:true,u:false,dv:true}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'当前展开的 SubMenu 菜单项 key 数组',tooltip:'属性名:open-keys(.sync)<br>说明:当前展开的 SubMenu 菜单项 key 数组<br>类型:string[]',attrName:'open-keys(.sync)'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'当前选中的菜单项 key 数组',tooltip:'属性名:selected-keys(v-model)<br>说明:当前选中的菜单项 key 数组<br>类型:string[]',attrName:'v-model'},
                        {type:this.type.TEXT ,clearAttr:true ,oneLine:true ,change:this.change.ATTR ,title:'自定义 Menu 折叠时的图标' ,attrName:'overflowedIndicator',extendKey:"icon",extend:true},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'inline 模式的菜单缩进宽度',tooltip:'属性名:inline-indent<br>说明:inline 模式的菜单缩进宽度<br>类型:number<br>默认值:24',attrName:'inline-indent',extra:{min:0,max:20000}},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'用户鼠标离开子菜单后关闭延时，单位：秒',tooltip:'属性名:sub-menu-close-delay<br>说明:用户鼠标离开子菜单后关闭延时，单位：秒<br>类型:number<br>默认值:0.1',attrName:'sub-menu-close-delay',extra:{min:0,max:20000}},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'用户鼠标进入子菜单后开启延时，单位：秒',tooltip:'属性名:sub-menu-open-delay<br>说明:用户鼠标进入子菜单后开启延时，单位：秒<br>类型:number<br>默认值:0',attrName:'sub-menu-open-delay',extra:{min:0,max:20000}},

                    ],
                    "a-menu-item":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.TEXT,title:'文本'},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"disabled",t:"是否禁用",c:true,u:false,dv:false}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'子菜单样式',tooltip:'属性名:popup-class-name<br>说明:子菜单样式<br>类型:string',attrName:'popup-class-name'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'子菜单项值',tooltip:'属性名:title<br>说明:子菜单项值<br>类型:string|slot',attrName:'title'},

                    ],
                    "a-sub-menu":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.TEXT,title:'文本'},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"disabled",t:"是否禁用",c:true,u:false,dv:false}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'子菜单样式',tooltip:'属性名:popup-class-name<br>说明:子菜单样式<br>类型:string',attrName:'popup-class-name'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'子菜单项值',tooltip:'属性名:title<br>说明:子菜单项值<br>类型:string|slot',attrName:'title'},

                    ],
                    "a-menu-item-group":[

                    ],

                    "a-page-header":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义标题文字',tooltip:'属性名:title<br>说明:自定义标题文字<br>类型:string|slot',attrName:'title'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义的二级标题文字',tooltip:'属性名:sub-title<br>说明:自定义的二级标题文字<br>类型:string|slot',attrName:'sub-title'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'标题栏旁的头像',tooltip:'属性名:avatar<br>说明:标题栏旁的头像<br>类型:avatar props',attrName:'avatar'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义 back icon ，如果为 false 不渲染 back icon',tooltip:'属性名:back-icon<br>说明:自定义 back icon ，如果为 false 不渲染 back icon<br>类型:string|slot<br>默认值:<Icon type=arrow-left />',attrName:'back-icon'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'title 旁的 tag 列表',tooltip:'属性名:tags<br>说明:title 旁的 tag 列表<br>类型:Tag[] | Tag',attrName:'tags'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'操作区，位于 title 行的行尾',tooltip:'属性名:extra<br>说明:操作区，位于 title 行的行尾<br>类型:string|slot',attrName:'extra'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'PageHeader 的页脚，一般用于渲染 TabBar',tooltip:'属性名:footer<br>说明:PageHeader 的页脚，一般用于渲染 TabBar<br>类型:string|slot',attrName:'footer'}
                    ]

                ,
                "a-pagination":[
                    {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"disabled",t:"禁用分页",c:true,u:false,dv:false},{n:"hide-on-single-page",t:"只有一页时是否隐藏分页器",c:true,u:false,dv:false},{n:"show-less-items",t:"show less page items",c:true,u:false,dv:false},{n:"show-quick-jumper",t:"是否可以快速跳转至某页",c:true,u:false,dv:false},{n:"show-size-changer",t:"是否可以改变 pageSize",c:true,u:false,dv:false},{n:"simple",t:"当添加该属性时，显示为简单分页",c:true,u:false,dv:false}]},
                    {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'当为「small」时，是小尺寸分页',tooltip:'属性名:size<br>说明:当为「small」时，是小尺寸分页<br>类型:string<br>默认值:',attrName:'size'},
                    {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'默认的每页条数',tooltip:'属性名:default-page-size<br>说明:默认的每页条数<br>类型:number<br>默认值:10',attrName:'default-page-size',extra:{min:0,max:20000}},
                    {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'每页条数',tooltip:'属性名:page-size(.sync)<br>说明:每页条数<br>类型:number',attrName:'page-size(.sync)',extra:{min:0,max:20000}}
                ],
                "a-auto-complete":[
                    {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"allow-clear",t:"支持清除, 单选模式有效",c:true,u:false,dv:false},{n:"auto-focus",t:"自动获取焦点",c:true,u:false,dv:false},{n:"backfill",t:"使用键盘选择选项的时候把选中项回填到输入框中",c:true,u:false,dv:false},{n:"default-active-first-option",t:"是否默认高亮第一个选项。",c:true,u:false,dv:true},{n:"disabled",t:"是否禁用",c:true,u:false,dv:false},{n:"default-open",t:"是否默认展开下拉菜单",c:true,u:false,dv:false},{n:"open",t:"是否展开下拉菜单",c:true,u:false,dv:false}]},
                    {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义输入框',tooltip:'属性名:slot=default (自定义输入框)<br>说明:自定义输入框<br>类型:HTMLInputElement / HTMLTextAreaElement<br>默认值:<Input />',attrName:'slot="default" (自定义输入框)'},
                    {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'dropdown 菜单自定义样式',tooltip:'属性名:dropdown-menu-style<br>说明:dropdown 菜单自定义样式<br>类型:object',attrName:'dropdown-menu-style'},
                    {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'指定默认选中的条目',tooltip:'属性名:default-value<br>说明:指定默认选中的条目<br>类型:string|string[]| 无',attrName:'default-value'},
                    {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。',tooltip:'属性名:option-label-prop<br>说明:回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。<br>类型:string<br>默认值:children',attrName:'option-label-prop'},
                    {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'输入框提示',tooltip:'属性名:placeholder<br>说明:输入框提示<br>类型:string | slot',attrName:'placeholder'},
                    {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'指定当前选中的条目',tooltip:'属性名:value(v-model)<br>说明:指定当前选中的条目<br>类型:string|string[]|{ key: string, label: string|vNodes }|Array<{ key: string, label: string|vNodes }><br>默认值:无',attrName:'v-model'}
                ],
                "a-steps":[
                    {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"progress-dot",t:"点状步骤条，可以设置为一个 作用域插槽,labelPlacement 将强制为vertical",c:true,u:false,dv:false}]},
                    {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'指定标签放置位置，默认水平放图标右侧，可选vertical放图标下方',tooltip:'属性名:label-placement<br>说明:指定标签放置位置，默认水平放图标右侧，可选vertical放图标下方<br>类型:string<br>默认值:horizontal',attrName:'label-placement',options:[{"vertical":"垂直"},{"horizontal":"水平"}]},
                    {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'指定当前步骤的状态，可选 wait process finish error',tooltip:'属性名:status<br>说明:指定当前步骤的状态，可选 wait process finish error<br>类型:string<br>默认值:process',attrName:'status',options:[{"wait":"等待","process":"进行","finish":"完成","error":"错误"}]},
                    {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'步骤条类型，有 default 和 navigation 两种',tooltip:'属性名:type<br>说明:步骤条类型，有 default 和 navigation 两种<br>类型:string<br>默认值:default',attrName:'type',options:[{"default":"默认","navigation":"导航"}]},
                    {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向',tooltip:'属性名:direction<br>说明:指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向<br>类型:string<br>默认值:horizontal',attrName:'direction',options:[{"horizontal":"水平","vertical":"垂直"}]},
                    {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'指定大小，目前支持普通（default）和迷你（small）',tooltip:'属性名:size<br>说明:指定大小，目前支持普通（default）和迷你（small）<br>类型:string<br>默认值:default',attrName:'size',options:[{"default":"普通","small":"迷你"}]},
                    {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'起始序号，从 0 开始记数',tooltip:'属性名:initial<br>说明:起始序号，从 0 开始记数<br>类型:number<br>默认值:0',attrName:'initial',extra:{min:0,max:20000}}
                ],
                "a-step":[
                    {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'标题',tooltip:'属性名::title<br>说明:标题<br>类型:string | slot',attrName:'title'},
                    {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'子标题',tooltip:'属性名:sub-title<br>说明:子标题<br>类型:string | slot',attrName:'sub-title'},
                    {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"disabled",t:"禁用点击",c:true,u:false,dv:false}]},
                    {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'步骤的详情描述，可选',tooltip:'属性名:description<br>说明:步骤的详情描述，可选<br>类型:string | slot',attrName:'description'},
                    {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'步骤图标的类型，可选',tooltip:'属性名:icon<br>说明:步骤图标的类型，可选<br>类型:string | slot',attrName:'icon',extend:true,extendKey:'icon'},
                    {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'指定当前步骤的状态，可选 wait process finish error',tooltip:'属性名:status<br>说明:指定当前步骤的状态，可选 wait process finish error<br>类型:string<br>默认值:process',attrName:'status',options:[{"wait":"等待","process":"进行","finish":"完成","error":"错误"}]}
                ],
                "a-result":[
                    {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'title 文字',tooltip:'属性名:title<br>说明:title 文字<br>类型:string | VNode | v-slot:title',attrName:'title'},
                    {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'subTitle 文字',tooltip:'属性名:sub-title<br>说明:subTitle 文字<br>类型:string | VNode | v-slot:subTitle',attrName:'sub-title'},
                    {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'结果的状态,决定图标和颜色',tooltip:'属性名:status<br>说明:结果的状态,决定图标和颜色<br>类型:success | error | info | warning| 404 | 403 | 500<br>默认值:info',attrName:'status',options:[{"success":"成功"},{"error":"错误"},{"warning":"警告"},{"info":"信息"},{"404":"找不到页面"},{"403":"403"},{"500":"服务器异常"}]}
                ],
                "a-progress":[
                    {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'类型',tooltip:'属性名:type<br>说明:类型，可选 line circle dashboard<br>类型:string<br>默认值:line',attrName:'type',options:[{"line":"线状","circle":"圆形","dashboard":"仪表盘"}]},
                    {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态',tooltip:'属性名:status<br>说明:状态，可选：success exception normal active(仅限 line)<br>类型:string',attrName:'status',options:[{"success":"成功","exception":"特殊情况","normal":"正常","active":"进行中"}]},
                    {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'边缘形状',tooltip:'属性名:stroke-linecap<br>说明:<br>类型:Enum{ round, square }<br>默认值:round',attrName:'stroke-linecap',options:[{"round":"圆形"},{"square":"方形"}]},
                    {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'仪表盘进度条缺口位置',tooltip:'属性名:gap-position<br>说明:仪表盘进度条缺口位置<br>类型:Enum{ top, bottom, left, right }<br>默认值:top',attrName:'gap-position',options:[{"top":"顶"},{"bottom":"底"},{"left":"左"},{"right":"右"}]},
                    {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'仪表盘进度条线的宽度，单位是进度条画布宽度的百分比',tooltip:'属性名:stroke-width<br>说明:仪表盘进度条线的宽度，单位是进度条画布宽度的百分比<br>类型:number<br>默认值:6',attrName:'stroke-width',extra:{min:0,max:100}},
                    {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'仪表盘进度条缺口角度，可取值 0 ~ 360',tooltip:'属性名:gap-degree<br>说明:仪表盘进度条缺口角度，可取值 0 ~ 360<br>类型:number<br>默认值:0',attrName:'gap-degree',extra:{min:0,max:360}},
                    {type:this.type.COLOR_PICKER,clearAttr:true,oneLine:true,change:this.change.ATTR,tooltip:'属性名:stroke-color<br>说明:进度条的色彩<br>类型:string',title:'进度条的色彩',attrName:'stroke-color'}

                ],

                "a-spin":[
                    {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.TEXT,title:'文本'},
                    {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'组件大小，可选值为 small default large',tooltip:'属性名:size<br>说明:组件大小，可选值为 small default large<br>类型:string<br>默认值:default',attrName:'size',options:[{"small":"小","default":"中等","large":"大"}]},
                    {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'当作为包裹元素时，可以自定义描述文案',tooltip:'属性名:tip<br>说明:当作为包裹元素时，可以自定义描述文案<br>类型:string',attrName:'tip'},
                    {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'包装器的类属性',tooltip:'属性名:wrapper-class-name<br>说明:包装器的类属性<br>类型:string',attrName:'wrapper-class-name'}
                ],

                    "a-mentions":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"auto-focus",t:"自动获得焦点",c:true,u:false,dv:false},{n:"filter-option",t:"自定义过滤逻辑",c:true,u:false,dv:false}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'弹出层展示位置',tooltip:'属性名:placement<br>说明:弹出层展示位置<br>类型:top | bottom<br>默认值:bottom',attrName:'placement',options:[{"top":"顶"},{"bottom":"底"}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'默认值',tooltip:'属性名:default-value<br>说明:默认值<br>类型:string',attrName:'default-value'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置选中项前后分隔符',tooltip:'属性名:split<br>说明:设置选中项前后分隔符<br>类型:string<br>默认值: ',attrName:'split'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'当下拉列表为空时显示的内容',tooltip:'属性名:not-found-content<br>说明:当下拉列表为空时显示的内容<br>类型:ReactNode<br>默认值:Not Found',attrName:'not-found-content'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义触发验证逻辑',tooltip:'属性名:validate-search<br>说明:自定义触发验证逻辑<br>类型:(text: string, props: MentionsProps) => void',attrName:'validate-search'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'指定建议框挂载的 HTML 节点',tooltip:'属性名:get-popup-container<br>说明:指定建议框挂载的 HTML 节点<br>类型:() => HTMLElement',attrName:'get-popup-container'}
                    ],
                    "a-mentions-option":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.TEXT,title:'文本'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'值',tooltip:'属性名:value<br>说明:选择时填充的值<br>类型:string',attrName:'value'},

                    ],
                    "a-cascader":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"allow-clear",t:"是否支持清除",c:true,u:false,dv:true},{n:"auto-focus",t:"自动获取焦点",c:true,u:false,dv:false},{n:"change-on-select",t:"当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示",c:true,u:false,dv:false},{n:"disabled",t:"禁用",c:true,u:false,dv:false},{n:"popup-visible",t:"控制浮层显隐",c:true,u:false,dv:false}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'次级菜单的展开方式，可选click 和 hover',tooltip:'属性名:expand-trigger<br>说明:次级菜单的展开方式，可选 click 和 hover<br>类型:string<br>默认值:click',attrName:'expand-trigger',options:[{"click":"点击"},{"hover":"鼠标经过"}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'输入框大小，可选 large default small',tooltip:'属性名:size<br>说明:输入框大小，可选 large default small<br>类型:string<br>默认值:default',attrName:'size',options:[{"large":"大"},{"default":"默认"},{"small":"小"}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'浮层预设位置：bottomLeft bottomRight topLeft topRight',tooltip:'属性名:popup-placement<br>说明:浮层预设位置：bottomLeft bottomRight topLeft topRight<br>类型:Enum<br>默认值:bottomLeft',attrName:'popup-placement',options:[{"bottomLeft":"下左"},{"bottomRight":"下右"},{"topLeft":"上左"},{"topRight":"上右"}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'当下拉列表为空时显示的内容',tooltip:'属性名:not-found-content<br>说明:当下拉列表为空时显示的内容<br>类型:string<br>默认值:Not Found',attrName:'not-found-content'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'输入框占位文本',tooltip:'属性名:placeholder<br>说明:输入框占位文本<br>类型:string<br>默认值:请选择',attrName:'placeholder'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义浮层类名',tooltip:'属性名:popup-class-name<br>说明:自定义浮层类名<br>类型:string',attrName:'popup-class-name'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义浮层样式',tooltip:'属性名:popup-style<br>说明:自定义浮层样式<br>类型:object<br>默认值:{}',attrName:'popup-style'},
                        {type:this.type.TEXT ,clearAttr:true ,oneLine:true ,change:this.change.ATTR ,title:'图标' ,attrName:'icon',tooltip:'属性名:suffix-icon<br>说明:自定义的选择框后缀图标<br>类型:string | VNode | slot',extendKey:"icon",extend:true}
                    ],
                    "a-tree-select":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"allow-clear",t:"显示清除按钮",c:true,u:false,dv:false},{n:"disabled",t:"是否禁用",c:true,u:false,dv:false},{n:"dropdown-match-select-width",t:"下拉菜单和选择器同宽",c:true,u:false,dv:true},{n:"label-in-value",t:"是否把每个选项的 label 包装到 value 中，会把 value 类型从 string 变为 {value: string, label: VNode, halfChecked(treeCheckStrictly 时有效): string[] } 的格式",c:true,u:false,dv:false},{n:"multiple",t:"支持多选（当设置 treeCheckable 时自动变为 true）",c:true,u:false,dv:false},{n:"tree-icon",t:"是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式",c:true,u:false,dv:false},{n:"show-search",t:"在下拉中显示搜索框(仅在单选模式下生效)",c:true,u:false,dv:false},{n:"tree-checkable",t:"显示 checkbox",c:true,u:false,dv:false},{n:"tree-check-strictly",t:"checkable 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 labelInValue 强制为 true",c:true,u:false,dv:false},{n:"tree-default-expand-all",t:"默认展开所有树节点",c:true,u:false,dv:false}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'选择框大小，可选 large small',tooltip:'属性名:size<br>说明:选择框大小，可选 large small<br>类型:string<br>默认值:default',attrName:'size',options:[{"large":"大"},{"small":"小"}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'指定默认选中的条目',tooltip:'属性名:default-value<br>说明:指定默认选中的条目<br>类型:string/string[]',attrName:'default-value'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'下拉菜单的className 属性',tooltip:'属性名:dropdown-class-name<br>说明:下拉菜单的 className 属性<br>类型:string',attrName:'dropdown-class-name'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'选择框默认文字',tooltip:'属性名:placeholder<br>说明:选择框默认文字<br>类型:string|slot',attrName:'placeholder'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'搜索框默认文字',tooltip:'属性名:search-placeholder<br>说明:搜索框默认文字<br>类型:string|slot',attrName:'search-placeholder'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'搜索框的值',tooltip:'属性名:search-value(.sync)<br>说明:搜索框的值，可以通过 search 事件获取用户输入<br>类型:string',attrName:'search-value(.sync)'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义的选择框后缀图标',tooltip:'属性名:suffix-icon<br>说明:自定义的选择框后缀图标<br>类型:VNode | slot',attrName:'suffix-icon'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'使用简单格式的',tooltip:'属性名:tree-data-simple-mode<br>说明:使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: [{id:1, pId:0, value:1, label:test1,...},...], pId 是父节点的 id)<br>类型:false|Array<{ id: string, pId: string, rootPId: null }><br>默认值:false',attrName:'tree-data-simple-mode'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'输入项过滤对应的 treeNode 属性',tooltip:'属性名:tree-node-filter-prop<br>说明:输入项过滤对应的 treeNode 属性<br>类型:string<br>默认值:value',attrName:'tree-node-filter-prop'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'作为显示的prop设置',tooltip:'属性名:tree-node-label-prop<br>说明:作为显示的 prop 设置<br>类型:string<br>默认值:title',attrName:'tree-node-label-prop'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'指定当前选中的条目',tooltip:'属性名:value(v-model)<br>说明:指定当前选中的条目<br>类型:string/string[]',attrName:'value(v-model)'},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'最多显示多少个 tag',tooltip:'属性名:max-tag-count<br>说明:最多显示多少个 tag<br>类型:number',attrName:'max-tag-count',extra:{min:0,max:20000}},
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'默认展开的树节点',tooltip:'属性名:tree-default-expanded-keys<br>说明:默认展开的树节点<br>类型:string[] | number[]',attrName:'tree-default-expanded-keys'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'设置展开的树节点',tooltip:'属性名:tree-expanded-keys(.sync)<br>说明:设置展开的树节点<br>类型:string[] | number[]',attrName:'tree-expanded-keys'}
                    ],
                    "a-tree-select-node":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:":selectable",t:"可选",c:'true',u:'false',dv:'false'},{n:"checkable",t:"当树为 checkable 时，设置独立节点是否展示 Checkbox",c:true,u:false,dv:false},{n:"disable-checkbox",t:"禁掉 checkbox",c:true,u:false,dv:false},{n:"disabled",t:"是否禁用",c:true,u:false,dv:false},{n:"is-leaf",t:"是否是叶子节点",c:true,u:false,dv:false}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'默认根据此属性值进行筛选',tooltip:'属性名::value<br>说明:默认根据此属性值进行筛选（其值在整个树范围内唯一）<br>类型:string',attrName:'value'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'树节点显示的内容',tooltip:'属性名:title<br>说明:树节点显示的内容<br>类型:string|slot<br>默认值:---',attrName:'title'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'可以通过该属性配置支持 slot 的属性',tooltip:'属性名:scoped-slots<br>说明:使用 treeData 时，可以通过该属性配置支持 slot 的属性，如 scopedSlots: { title: XXX}<br>类型:object',attrName:'scoped-slots'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'此项必须设置KEY',tooltip:'属性名:key<br>说明:此项必须设置（其值在整个树范围内唯一）<br>类型:string | number',attrName:'key'}
                    ],
                    "a-descriptions":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"bordered",t:"是否展示边框",c:true,u:false,dv:false},{n:"colon",t:"配置Descriptions.Item的colon",c:true,u:false,dv:true}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'描述列表的标题，显示在最顶部',tooltip:'属性名:title<br>说明:描述列表的标题，显示在最顶部<br>类型:string | VNode | v-slot:title',attrName:'title'},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'描述布局',tooltip:'属性名:layout<br>说明:描述布局<br>类型:horizontal | vertical<br>默认值:horizontal',attrName:'layout',options:[{"horizontal":"水平"},{"vertical":"垂直"}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'一行的 DescriptionItems 数量',tooltip:'属性名::column<br>说明:一行的 DescriptionItems 数量，可以写成像素值或支持响应式的对象写法 { xs: 8, sm: 16, md: 24}<br>类型:number<br>默认值:3',attrName:':column'},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置列表的大小',tooltip:'属性名:size<br>说明:设置列表的大小。可以设置为 middle 、small, 或不填（只有设置 bordered={true} 生效）<br>类型:default | middle | small<br>默认值:default',attrName:'size',options:[{"middle":"中等"},{"small":"小"}]}

                    ],

                    "a-descriptions-item":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.TEXT,title:'文本'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'内容的描述',tooltip:'属性名:label<br>说明:内容的描述<br>类型:string | VNode | v-slot:label',attrName:'label'},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'包含列的数量',tooltip:'属性名::span<br>说明:包含列的数量<br>类型:number<br>默认值:1',attrName:':span',extra:{min:1,max:3}}

                    ],
                    "a-empty":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义描述内容',tooltip:'属性名::description<br>说明:自定义描述内容<br>类型:string | v-slot',attrName:'description'},
                    ],
                    "a-list":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"bordered",t:"展示边框",c:true,u:false,dv:false},{n:"split",t:"展示分割线",c:true,u:false,dv:true}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'列表底部',tooltip:'属性名:footer<br>说明:列表底部<br>类型:string|slot',attrName:'footer'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'列表头部',tooltip:'属性名:header<br>说明:列表头部<br>类型:string|slot',attrName:'header'},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置List.Item 布局',tooltip:'属性名:item-layout<br>说明:设置 List.Item 布局, 设置成 vertical 则竖直样式显示, 默认横排<br>类型:string',attrName:'item-layout',options:[{"horizontal":"水平"},{"vertical":"垂直"}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'加载更多',tooltip:'属性名:load-more<br>说明:加载更多<br>类型:string|slot',attrName:'load-more'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'默认文案设置',tooltip:'属性名:locale<br>说明:默认文案设置，目前包括空数据文案<br>类型:object<br>默认值:emptyText: 暂无数据',attrName:'locale'},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'list的尺寸',attrName:'size',options:[{"middle":"中等","small":"小","default":"默认值"}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义Item函数"',tooltip:'属性名:render-item<br>说明:自定义Item函数，也可使用 slot=renderItem 和 slot-scope=item, index<br>类型:(item, index) => vNode',attrName:'render-item'},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'各项key的取值',tooltip:'属性名:row-key<br>说明:各项 key 的取值，可以是字符串或一个函数<br>类型:item => string|number',attrName:'row-key',extra:{min:0,max:20000}}
                    ],
                    "a-list-item":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'列表操作组',tooltip:'属性名:actions<br>说明:列表操作组，根据 itemLayout 的不同, 位置在卡片底部或者最右侧<br>类型:Array<vNode>/<br>默认值:slot',attrName:'actions'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'额外内容',tooltip:'属性名:extra<br>说明:额外内容, 通常用在 itemLayout 为 vertical 的情况下, 展示右侧内容; horizontal 展示在列表元素最右侧<br>类型:string|slot',attrName:'extra'}
                    ],
                    "a-list-item-meta":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'列表元素的图标',tooltip:'属性名:avatar<br>说明:列表元素的图标<br>类型:slot',attrName:'avatar'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'列表元素的标题',tooltip:'属性名:title<br>说明:列表元素的标题<br>类型:string|slot',attrName:'title'}
                    ],
                }
            },
            {
                title:"变量",
                active:false,/*默认聚焦*/
                width:"50%",
                content:{
                    "a-empty":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'图片样式',tooltip:'属性名::image-style<br>说明:图片样式<br>类型:CSSProperties',attrName:':image-style'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置显示图片，为 string 时表示自定义图片地址',tooltip:'属性名::image<br>说明:设置显示图片，为 string 时表示自定义图片地址<br>类型:string | v-slot<br>默认值:false',attrName:':image'}
                    ],
                    "a-list":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'列表栅格配置',tooltip:'属性名::grid<br>说明:列表栅格配置<br>类型:object',attrName:':grid'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'当卡片内容还在加载中时，可以用loading展示一个占位',tooltip:'属性名::loading<br>说明:当卡片内容还在加载中时，可以用 loading 展示一个占位<br>类型:boolean|object<br>默认值:false',attrName:':loading'},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态',options:[{n:":pagination",t:"不显示对应的pagination配置",c:true,u:false,dv:false},]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'列表数据源',tooltip:'属性名::data-source<br>说明:列表数据源<br>类型:any[]',attrName:':data-source'}
                    ],
                    "a-list-item-meta":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'列表元素的描述内容',tooltip:'属性名::description<br>说明:列表元素的描述内容<br>类型:string|slot',attrName:':description'}
                    ],
                    "a-mentions":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置值',tooltip:'属性名:v-model<br>说明:设置值<br>类型:string',attrName:'v-model'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置触发关键字',tooltip:'属性名::prefix<br>说明:设置触发关键字<br>类型:string | string[]<br>默认值:@',attrName:':prefix'}
                    ],
                    "a-cascader":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'指定选中项',tooltip:'属性名:v-model<br>说明:指定选中项<br>类型:string[] | number[]',attrName:'v-model'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'默认的选中项',tooltip:'属性名::default-value<br>说明:默认的选中项<br>类型:string[] | number[]<br>默认值:[]',attrName:':default-value'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'选择后展示的渲染函数,可使用 slot="displayRender" 和 slot-scope="{labels, selectedOptions}"',tooltip:'属性名::display-render<br>说明:选择后展示的渲染函数,可使用 slot=displayRender 和 slot-scope={labels, selectedOptions}<br>类型:({labels, selectedOptions}) => vNode<br>默认值:labels => labels.join( / )',attrName:':display-render'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义 options 中 label name children 的字段',tooltip:'属性名::field-names<br>说明:自定义 options 中 label name children 的字段<br>类型:object<br>默认值:{ label: label, value: value, children: children }',attrName:':field-names'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。',tooltip:'属性名:get-popup-container<br>说明:菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。<br>类型:Function(triggerNode)<br>默认值:() => document.body',attrName:'get-popup-container'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'用于动态加载选项，无法与 showSearch 一起使用',tooltip:'属性名::load-data<br>说明:用于动态加载选项，无法与 showSearch 一起使用<br>类型:(selectedOptions) => void',attrName:':load-data'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'可选项数据源',tooltip:'属性名::options<br>说明:可选项数据源<br>类型:object',attrName:':options'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'在选择框中显示搜索框',tooltip:'属性名::show-search<br>说明:在选择框中显示搜索框<br>类型:boolean<br>默认值:false',attrName:':show-search'}
                    ],
                    "a-tree-select":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'下拉菜单的样式',tooltip:'属性名::dropdown-style<br>说明:下拉菜单的样式<br>类型:object',attrName:':dropdown-style'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'根据输入项进行筛选',tooltip:'属性名:filter-tree-node<br>说明:是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值<br>类型:boolean|Function(inputValue: string, treeNode: TreeNode) (函数需要返回 bool 值)<br>默认值:Function',attrName:'filter-tree-node'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'菜单渲染父节点。。',tooltip:'属性名:get-popup-container<br>说明:菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。<br>类型:Function(triggerNode)<br>默认值:() => document.body',attrName:'get-popup-container'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'异步加载数据',tooltip:'属性名::load-data<br>说明:异步加载数据<br>类型:function(node)',attrName:':load-data'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'隐藏 tag 时显示的内容',tooltip:'属性名:max-tag-placeholder<br>说明:隐藏 tag 时显示的内容<br>类型:slot/function(omittedValues)',attrName:'max-tag-placeholder'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'定义选中项回填的方式。',tooltip:'属性名::show-checked-strategy<br>说明:定义选中项回填的方式。TreeSelect.SHOW_ALL: 显示所有选中节点(包括父节点). TreeSelect.SHOW_PARENT: 只显示父节点(当父节点下所有子节点都选中时). 默认只显示子节点.<br>类型:enum{TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }<br>默认值:TreeSelect.SHOW_CHILD',attrName:':show-checked-strategy'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'treeNodes 数据（value 在整个树范围内唯一）',tooltip:'属性名::tree-data<br>说明:treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一）<br>类型:array<{value, label, children, [disabled, disableCheckbox, selectable]}><br>默认值:[]',attrName:':tree-data'}
                    ],

                    "a-progress":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'百分比',tooltip:'属性名::percent<br>说明:百分比<br>类型:number<br>默认值:0',attrName:':percent'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'显示进度数值',tooltip:'属性名::show-info<br>',attrName:':show-info'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'已完成的分段百分比',tooltip:'属性名::success-percent<br>说明:已完成的分段百分比<br>类型:number<br>默认值:0',attrName:':success-percent'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'内容的模板函数',tooltip:'属性名::format<br>说明:内容的模板函数<br>类型:function(percent, successPercent) | v-slot:format=percent, successPercent<br>默认值:percent => percent + %',attrName:':format'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'仪表盘进度条画布宽度，单位 px',tooltip:'属性名::width<br>说明:仪表盘进度条画布宽度，单位 px<br>类型:number<br>默认值:132',attrName:':width'}
                    ],
                    "a-spin":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'延迟显示加载效果的时间（防止闪烁）',tooltip:'属性名::delay<br>说明:延迟显示加载效果的时间（防止闪烁）<br>类型:number (毫秒)',attrName:':delay'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'加载指示符',tooltip:'属性名::indicator<br>说明:加载指示符<br>类型:vNode | slot',attrName:':indicator'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'是否为加载中状态',tooltip:'属性名::spinning<br>说明:是否为加载中状态<br>类型:boolean<br>默认值:true',attrName:':spinning'}
                    ],

                    "a-pagination":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'当前页数',tooltip:'属性名:current(v-model)<br>说明:当前页数<br>类型:number',attrName:'v-model'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'默认的当前页数',tooltip:'属性名::default-current<br>说明:默认的当前页数<br>类型:number<br>默认值:1',attrName:':default-current'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'用于自定义页码的结构，可用于优化 SEO',tooltip:'属性名::item-render<br>说明:用于自定义页码的结构，可用于优化 SEO<br>类型:(page, type: page | prev | next, originalElement) => vNode',attrName:':item-render'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'指定每页可以显示多少条',tooltip:'属性名::page-size-options<br>说明:指定每页可以显示多少条<br>类型:string[]<br>默认值:[10, 20, 30, 40]',attrName:':page-size-options'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'用于显示数据总量和当前数据顺序',tooltip:'属性名::show-total<br>说明:用于显示数据总量和当前数据顺序<br>类型:Function(total, range)',attrName:':show-total'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'数据总数',tooltip:'属性名::total<br>说明:数据总数<br>类型:number<br>默认值:0',attrName:':total'}
                    ],
                    "a-steps":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态, 1.5.0 后支持 v-model',tooltip:'属性名:current (v-model)<br>说明:指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态, 1.5.0 后支持 v-model<br>类型:number<br>默认值:0',attrName:'v-model'},
                    ],
                    "a-step":[
                    ],
                    "a-auto-complete":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自动完成的数据源',tooltip:'属性名::data-source<br>说明:自动完成的数据源<br>类型:slot | DataSourceItemType[]',attrName:':data-source'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。',tooltip:'属性名::filter-option<br>说明:是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。<br>类型:boolean or function(inputValue, option)<br>默认值:true',attrName:':filter-option'}
                    ],
                    "a-dropdown":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'菜单渲染父节点',tooltip:'属性名:get-popup-container<br>说明:菜单渲染父节点<br>类型:Function(triggerNode)<br>默认值:() => document.body',attrName:'get-popup-container'},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'菜单弹出位置',attrName:'placement',options:[{"bottomLeft":"按钮左侧","bottomCenter":"按钮中央","bottomRight":"按钮右侧","topLeft":"顶部左侧","topCenter":"顶部中央","topRight	":"顶部右侧"}]},
                        {type:this.type.CHECKBOX_ARRAY,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'trigger',title:'触发下拉的行为',tooltip:"触发下拉的行为, 移动端不支持 hover",options:[{"c":"click","n":"","t":"点击","u":""},{"c":"hover","n":"","t":"悬浮","u":""},{"c":"contextmenu","n":"","t":"右键菜单","u":""}]},
                    ],
                    "a-menu":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'初始展开的 SubMenu 菜单项 key 数组',tooltip:'属性名::default-open-keys<br>说明:初始展开的 SubMenu 菜单项 key 数组<br>类型:',attrName:':default-open-keys'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'初始选中的菜单项 key 数组',tooltip:'属性名::default-selected-keys<br>说明:初始选中的菜单项 key 数组<br>类型:string[]',attrName:':default-selected-keys'},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"inline-collapsed",t:"inline 时菜单是否收起状态",c:true,u:false}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'菜单类型',attrName:'mode',options:[{"vertical":"垂直模式","horizontal":"水平模式","inline":"内嵌模式"}]},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'主题颜色',attrName:'theme',options:[{"dark":"黑色模式","light":"白色模式"}]},
                    ],
                    "a-menu-item":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'唯一标志',tooltip:'属性名::key<br>说明:唯一标志<br>类型:string',attrName:':key'}
                    ],
                    "a-sub-menu":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'唯一标志',tooltip:'属性名::key<br>说明:唯一标志<br>类型:string',attrName:':key'}
                    ],
                    "a-menu-item-group":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'分组标题',tooltip:'属性名:title<br>说明:分组标题<br>类型:string||function|slot',attrName:'title'}
                    ],
                    "a-page-header":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"ghost",t:"pageHeader 的类型，将会改变背景颜色",c:true,u:false,dv:true}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'面包屑的配置',tooltip:'属性名::breadcrumb<br>说明:面包屑的配置<br>类型:breadcrumb',attrName:':breadcrumb'},
                    ],

                    "a-anchor":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'固定模式',tooltip:'属性名::affix<br>说明:固定模式<br>类型:boolean<br>默认值:true',attrName:':affix'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义高亮的锚点',tooltip:'属性名::get-current-anchor<br>说明:自定义高亮的锚点<br>类型:() => string',attrName:':get-current-anchor'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'锚点滚动偏移量，默认与 offsetTop 相同，例子',tooltip:'属性名::target-offset<br>说明:锚点滚动偏移量，默认与 offsetTop 相同，例子<br>类型:number<br>默认值:offsetTop',attrName:':target-offset'}
                    ],
                    "a-config-provider":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置 Content Security Policy 配置',tooltip:'属性名::csp<br>说明:设置 Content Security Policy 配置<br>类型:{ nonce: string }',attrName:':csp'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义组件空状态。参考 空状态',tooltip:'属性名:render-empty<br>说明:自定义组件空状态。参考 空状态<br>类型:slot-scope | Function(componentName: string): VNode',attrName:'render-empty'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。',tooltip:'属性名::get-popup-container<br>说明:弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。<br>类型:Function(triggerNode, dialogContext)<br>默认值:() => document.body',attrName:':get-popup-container'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'语言包配置，语言包可到 ant-design-vue/es/locale 目录下寻找',tooltip:'属性名::locale<br>说明:语言包配置，语言包可到 ant-design-vue/es/locale 目录下寻找<br>类型:object',attrName:':locale'}
                    ],


                    "a-radio-group":[
                        {type:this.type.TEXT         ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'变量名*'     ,attrName:'v-model'                                                                               },
                    ],
                    "a-checkbox-group":[
                        {type:this.type.TEXT         ,clearAttr:true    ,oneLine:true        ,change:this.change.ATTR    ,title:'变量名*'     ,attrName:'v-model'                                                                               },
                    ],
                    "a-input":[
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'变量名*'     ,attrName:'v-model' ,validate:{"^[a-zA-Z][a-zA-Z0-9_]*$":"请输入字母数字或者下划线"}                                                              },
                        {type:this.type.SELECT     ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'数据类型*'    ,attrName:'mc-db-type-v-model'                      ,options:[{"str":"字符串","int":"整数","long":"长整数","decimal":"小数","bool":"真假","date":"日期"}]                              },
                    ],
                    "a-input-number":[
                        {type:this.type.TEXT       ,clearAttr:true     ,oneLine:true         ,change:this.change.ATTR    ,title:'变量名*'     ,attrName:'v-model'                                                             },
                    ],
                    "a-select":[
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'变量名'       ,attrName:'v-model'                                                      },
                    ],
                    "a-switch":[
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'变量名*'     ,attrName:'v-model'                                                      },
                    ],
                    "a-slider":[
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'变量名*'     ,attrName:'v-model'                                                      },
                    ],
                    "a-upload":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'上传文件之前的钩子',tooltip:'属性名::before-upload<br>说明:上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 File 或 Blob 对象则上传 resolve 传入对象）。注意：IE9 不支持该方法。<br>类型:(file, fileList) => boolean | Promise<br>默认值:无',attrName:':before-upload'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'通过覆盖默认的上传行为',tooltip:'属性名:custom-request<br>说明:通过覆盖默认的上传行为，可以自定义自己的上传实现<br>类型:Function<br>默认值:无',attrName:'custom-request'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'默认已经上传的文件列表',tooltip:'属性名::default-file-list<br>说明:默认已经上传的文件列表<br>类型:object[]<br>默认值:无',attrName:':default-file-list'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'是否禁用',tooltip:'属性名::disabled<br>说明:是否禁用<br>类型:boolean<br>默认值:false',attrName:':disabled'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'已经上传的文件列表',tooltip:'属性名::file-list<br>说明:已经上传的文件列表（受控）<br>类型:object[]<br>默认值:无',attrName:':file-list'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置上传的请求头部',tooltip:'属性名::headers<br>说明:设置上传的请求头部，IE10 以上有效<br>类型:object<br>默认值:无',attrName:':headers'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'是否支持多选文件',tooltip:'属性名::multiple<br>说明:是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。<br>类型:boolean<br>默认值:false',attrName:':multiple'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义文件预览逻辑',tooltip:'属性名::preview-file<br>说明:自定义文件预览逻辑<br>类型:(file: File | Blob) => Promise<dataURL: string><br>默认值:无',attrName:':preview-file'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'是否展示 uploadList',tooltip:'属性名::show-upload-list<br>说明:是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon 和 showRemoveIcon<br>类型:Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean }<br>默认值:true',attrName:':show-upload-list'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'点击移除文件时的回调',tooltip:'属性名::remove<br>说明:点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。<br>类型:Function(file): boolean | Promise<br>默认值:无',attrName:':remove'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'在上传之前转换文件',tooltip:'属性名::transform-file<br>说明:在上传之前转换文件。支持返回一个 Promise 对象<br>类型:Function(file): string | Blob | File | Promise<string | Blob | File><br>默认值:无',attrName:':transform-file'}
                    ],
                    "a-rate":[
                        {type:this.type.TEXT      ,clearAttr:true      ,oneLine:true         ,change:this.change.ATTR    ,title:'变量名*'     ,attrName:'v-model'                                                      },
                    ],
                    "a-date-picker":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'变量名*'    ,attrName:'v-model'},
                    ],
                    "a-tabs":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'选中选项卡变量名*'    ,attrName:'v-model'},
                    ],
                    "a-tab-pane":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'选项卡别名'    ,tooltip:'与选项卡绑定值 value 对应的标识符，表示选项卡别名'    ,attrName:'name'},
                    ]
                    ,"a-collapse":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'当前激活的面板'   ,attrName:'v-model'},
                    ]
                    ,"a-badge":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'变量名'   ,attrName:':count'},
                    ]
                    ,"a-avatar":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'地址变量名'   ,attrName:':src'},
                    ],
                    "a-calendar":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'变量名'   ,attrName:'v-model'},
                    ],
                    "a-tag":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'变量名'   ,attrName:'v-model'},
                    ],
                    "a-checkable-tag":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'变量名'   ,attrName:'v-model'},
                    ],
                    "a-locale-provider":[
                        {type:this.type.TEXT            ,clearAttr:true     ,oneLine:false     ,change:this.change.ATTR     ,title:'语言'   ,attrName:':locale'},
                    ],
                    "a-affix":[
                                                {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置Affix需要监听其滚动事件的元素',tooltip:'属性名::target<br>说明:设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数<br>类型:() => HTMLElement<br>默认值:() => window',attrName:':target'}
                    ],
                    "a-breadcrumb":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'router的路由栈信息',tooltip:'属性名::routes<br>说明:router 的路由栈信息<br>类型:routes[]',attrName:':routes'}
                    ],
                    "a-statistic":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'数值精度',tooltip:'属性名::precision<br>说明:数值精度<br>类型:number',attrName:':precision'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置数值的前缀',tooltip:'属性名::prefix<br>说明:设置数值的前缀<br>类型:string | v-slot',attrName:':prefix'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置数值的后缀',tooltip:'属性名::suffix<br>说明:设置数值的后缀<br>类型:string | v-slot',attrName:':suffix'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'数值内容',tooltip:'属性名::value<br>说明:数值内容<br>类型:string | number',attrName:':value'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'设置数值的样式',tooltip:'属性名::value-style<br>说明:设置数值的样式<br>类型:style',attrName:':value-style'}
                    ],
                    "a-statistic-countdown":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'数值内容',tooltip:'属性名::value<br>说明:数值内容<br>类型:number | moment',attrName:':value'}
                    ],
                    "a-timeline":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'节点排序',tooltip:'属性名::reverse<br>说明:节点排序<br>类型:boolean<br>默认值:false',attrName:':reverse'}
                    ],
                    "a-modal":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'是否显示',tooltip:'是否显示：v-model true|false',attrName:'v-model'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'Modal完全关闭后的回调',tooltip:'属性名:after-close<br>说明:Modal 完全关闭后的回调<br>类型:function<br>默认值:无',attrName:'after-close'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'确定按钮loading',tooltip:'属性名::confirm-loading<br>说明:确定按钮 loading<br>类型:boolean<br>默认值:无',attrName:':confirm-loading'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'ok按钮props',tooltip:'属性名::ok-button-props<br>说明:ok 按钮 props, 遵循 jsx规范<br>类型:{props: ButtonProps, on: {}}',attrName:':ok-button-props'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'cancel按钮props',tooltip:'属性名::cancel-button-props<br>说明:cancel 按钮 props, 遵循 jsx规范<br>类型:{props: ButtonProps, on: {}}',attrName:':cancel-button-props'}
                    ],
                    "a-drawer":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'显示右上角的关闭按钮',tooltip:'属性名::closable<br>说明:是否显示右上角的关闭按钮<br>类型:boolean<br>默认值:true',attrName:':closable'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'指定Drawer挂载的HTML节点',tooltip:'属性名::get-container<br>说明:指定 Drawer 挂载的 HTML 节点<br>类型:HTMLElement | () => HTMLElement | Selectors<br>默认值:body',attrName:':get-container'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'Drawer可见',tooltip:'属性名::visible<br>说明:Drawer 是否可见<br>类型:boolean',attrName:':visible'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'可用于设置Drawer内容部分的样式',tooltip:'属性名::body-style<br>说明:可用于设置 Drawer 内容部分的样式<br>类型:object',attrName:':body-style'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'宽度',tooltip:'属性名::width<br>说明:宽度<br>类型:string | number<br>默认值:256',attrName:':width'},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'抽屉的方向',attrName:':placement',options:[{"left":"左边","top":"顶部","right":"右边","bottom":"底部"}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'切换抽屉时动画结束后的回调',tooltip:'属性名::after-visible-change<br>说明:切换抽屉时动画结束后的回调<br>类型:function(visible)<br>默认值:无',attrName:':after-visible-change'}
                    ],
                    "a-tree":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'treeNodes数据',tooltip:'属性名::tree-data<br>说明:treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一）<br>类型:array<{key, title, children, [disabled, selectable]}><br>默认值:--',attrName:':tree-data'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'替换treeNode中title,key,children字段为treeData中对应的字段',tooltip:'属性名::replace-fields<br>说明:替换 treeNode 中 title,key,children 字段为 treeData 中对应的字段<br>类型:object<br>默认值:{children:children, title:title, key:key }',attrName:':replace-fields'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自动展开父节点',tooltip:'属性名::auto-expand-parent<br>说明:是否自动展开父节点<br>类型:boolean<br>默认值:true',attrName:':auto-expand-parent'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'默认选中复选框的树节点',tooltip:'属性名::default-checked-keys<br>说明:默认选中复选框的树节点<br>类型:string[] | number[]<br>默认值:[]',attrName:':default-checked-keys'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'默认展开指定的树节点',tooltip:'属性名::default-expanded-keys<br>说明:默认展开指定的树节点<br>类型:string[] | number[]<br>默认值:[]',attrName:':default-expanded-keys'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'默认选中的树节点',tooltip:'属性名::default-selected-keys<br>说明:默认选中的树节点<br>类型:string[] | number[]<br>默认值:[]',attrName:':default-selected-keys'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'按需筛选树节点（高亮）',tooltip:'属性名:filter-tree-node<br>说明:按需筛选树节点（高亮），返回 true<br>类型:function(node)',attrName:'filter-tree-node'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'异步加载数据',tooltip:'属性名::load-data<br>说明:异步加载数据<br>类型:function(node)',attrName:':load-data'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'展示TreeNode title前的图标',tooltip:'属性名::show-icon<br>说明:是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式<br>类型:boolean<br>默认值:false',attrName:':show-icon'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'展示连接线',tooltip:'属性名::show-line<br>说明:是否展示连接线<br>类型:boolean<br>默认值:false',attrName:':show-line'}
                    ],

                }
            }
        ]
    //一些通用配置
    var firstRightPanel = this.rightPanel[0];
    var content = firstRightPanel.content;
    for(var key in content){
        var config = content[key];
        config.push({type:this.type.CHECKBOX        ,clearAttr:true     ,oneLine:true     ,change:this.change.ATTR     ,title:'显隐'    ,options:[{"c":"false","n":"v-if","t":"隐藏","u":"true"}]});
        config.push({type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.STYLE,attrName:'z-index',title:'层级',tooltip:'当重叠时可以用数值决定哪个控件置于上层',validate:{"^[0-9]*$":"请使用数字"}});
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
