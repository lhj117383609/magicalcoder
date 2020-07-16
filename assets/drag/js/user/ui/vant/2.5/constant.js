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
            link:["assets/drag/ui/vant/2.5/vant.min.css","assets/drag/ui/magicalcoder/1.1.0/magicalcoder.css"],
            //预览页<head></head>内的脚本地址
            headJs:[],
            //预览页<body></body>内的脚本地址
            bodyJs:[
                "assets/drag/js/lib/echarts/4.6.0/echarts.min.js",
                "assets/drag/js/lib/echarts/datatool.min.js",
                "assets/drag/ui/magicalcoder/1.1.0/magicalcoder.js",
                "assets/drag/js/lib/vue/vue.js",
                "assets/drag/ui/vant/2.5/vant.min.js",
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

    this.UI_TYPE = 6;
    this.UI_NAME = "vant";
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
                    name:"一行三列",
                    icon:"",
                    html:"<van-row><van-col span='8'></van-col><van-col span='8'></van-col><van-col span='8'></van-col></van-row>"
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
                    icon:"assets/drag/img/left/other1.png",
                    html:"<van-button >默认按钮</van-button>"
                },
                 {
                    name:"单元格",
                    icon:"",
                    html:"<van-cell-group><van-cell title='单元格' value='内容' /> <van-cell title='单元格' value='内容' label='描述信息' /></van-cell-group>"
                },
                {
                    name:"图标",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<van-icon name='chat-o'></van-icon>"
                },
                {
                    name:"图片",
                    icon:"assets/drag/img/left/other1.png",
                    html:"<van-image width='100' height='100'src='https://img.yzcdn.cn/vant/cat.jpeg'/></van-icon>"
                },

                {
                    name:"弹出层",
                    icon:"",
                    html:"<div><van-button @click='showPopup=true'>打开弹窗</van-button><van-popup v-model='showPopup'></van-popup></div>"
                }
            ]
        },
        {
            name:"表单组件",
            children:[
                {
                    name:"日历",
                    icon:"",
                    html:"<div><van-button @click='showCalendar=true'>打开日历</van-button><van-calendar v-model='showCalendar'></van-calendar></div>"
                },
                {
                    name:"复选框",
                    icon:"",
                    html:"<van-checkbox-group v-model='checkbox'><van-checkbox name='1'>复选框1</van-checkbox><van-checkbox name='2'>复选框2</van-checkbox></van-checkbox-group>"
                },
                {
                    name:"时间选择",
                    icon:"",
                    html:"<van-datetime-picker  v-model='currentDate'  type='datetime'></van-datetime-picker>"
                },
                {
                    name:"输入框",
                    icon:"",
                    html:"<van-field v-model='field' placeholder='请输入用户名'></van-field>"
                },
                {
                    name:"表单",
                    icon:"",
                    html:"<van-form><van-field v-model='username' name='用户名' label='用户名' placeholder='用户名' :rules='[{ required: true, message: \"请填写用户名\"}]'></van-field><div style='margin: 16px;'><van-button round block type='info' native-type='submit'>提交</van-button></div></van-form>"
                },
                {
                    name:"数字键盘",
                    icon:"",
                    html:"<div><van-button @click='showNumberKeyboard=true'>打开数字键盘</van-button><van-number-keyboard  :show='showNumberKeyboard'  extra-key='.'  close-button-text='完成'  @blur='showNumberKeyboard = false'></van-number-keyboard></div>"
                },
                {
                    name:"密码输入框",
                    icon:"",
                    html:"<van-password-input  :value='passwordInput'  info='密码为 6 位数字'></van-password-input>"
                },
                {
                    name:"选择器",
                    icon:"",
                    html:"<van-picker :columns='columns' @change='onChange'></van-picker>"
                },
                {
                    name:"单选框",
                    icon:"",
                    html:"<van-radio-group v-model='radio' direction='horizontal'><van-radio name='1'>单选框 1</van-radio><van-radio name='2'>单选框 2</van-radio></van-radio-group>"
                },
                {
                    name:"评分",
                    icon:"",
                    html:"<van-rate v-model='rate'></van-rate>"
                },
                {
                    name:"搜索",
                    icon:"",
                    html:"<van-search v-model='search' placeholder='请输入搜索关键词'></van-search>"
                },
                {
                    name:"滑块",
                    icon:"",
                    html:"<van-slider v-model='slider'></van-slider>"
                },
                {
                    name:"步进器",
                    icon:"",
                    html:"<van-stepper v-model='stepper'></van-stepper>"
                },
                {
                    name:"开关",
                    icon:"",
                    html:"<van-switch v-model='switchValue'></van-switch>"
                },
                {
                    name:"文件上传",
                    icon:"",
                    html:"<van-uploader v-model='fileList'></van-uploader>"
                }
            ]
        },
        {
            name:"反馈组件",
            children:[
                {
                    name:"上拉菜单",
                    icon:"",
                    html:"<van-action-sheet v-model='showActionSheet' :actions='actions' ></van-action-sheet>"
                },
                {
                    name:"遮罩层",
                    icon:"",
                    html:"<div><van-button type='primary' text='显示遮罩层' @click='showOverlay = true'></van-button><van-overlay :show='showOverlay' @click='showOverlay = false' /></van-overlay></div>"
                },
                {
                    name:"下拉刷新",
                    icon:"",
                    html:"<van-pull-refresh v-model='isLoading'></van-pull-refresh>"
                },
                {
                    name:"弹出框",
                    icon:"",
                    html:"<div><van-button type='primary' text='显示弹窗' @click='showDialog = true'></van-button><van-dialog title='标题' v-model='showDialog'><img height='100px' src='https://img.yzcdn.cn/vant/apple-3.jpg'/> </van-dialog> </div>"
                },
                {
                    name:"下拉菜单",
                    icon:"",
                    html:"<van-dropdown-menu><van-dropdown-item v-model='value1' :options='option1'/></van-dropdown-menu>"
                },
                {
                    name:"加载",
                    icon:"",
                    html:"<van-loading></van-loading>"
                },
            ]
        },
        {
            name:"展示组件",
            children:[
                {
                    name:"折叠面板",
                    icon:"",
                    html:"<van-collapse v-model='activeNames'><van-collapse-item title='标题1' name='1'></van-collapse-item><van-collapse-item title='标题2' name='2'></van-collapse-item><van-collapse-item title='标题3' name='3' disabled>内容</van-collapse-item></van-collapse>",
                },
                {
                    name:"倒计时",
                    icon:"",
                    html:"<van-count-down :time='countDownTime'></van-count-down>",

                },
                {
                    name:"切割线",
                    icon:"",
                    html:"<van-divider></van-divider>",
                },
                {
                    name:"图片预览",
                    icon:"",
                    html:"<van-image-preview v-model='show' :images='images'></van-image-preview>"
                },
                {
                    name:"列表",
                    icon:"",
                    html:"<van-list v-model='loading':finished='finished'finished-text='没有更多了'>",
                },
                {
                    name:"静态表格",
                    icon:"assets/drag/img/left/form1.png",
                    html:"<table class='mc-table'><thead><tr><th>列1</th><th>列2</th><th>列3</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table>"
                },

                {
                    name:"通知栏",
                    icon:"",
                    html:"<van-notice-bar text='通知内容' left-icon='volume-o' /></van-notice-bar>",
                },
                {
                    name:"面板",
                    icon:"",
                    html:"<van-panel title='标题' desc='描述信息' status='状态'></van-panel>",
                },
                {
                    name:"进度条",
                    icon:"",
                    html:"<van-progress :percentage='50' />",

                },
                {
                    name:"骨架屏",
                    icon:"",
                    html:"<van-skeleton title :row='3' />",

                },
                {
                    name:"步骤条",
                    icon:"",
                    html:"<van-steps :active='active'><van-step>买家下单</van-step><van-step>商家接单</van-step><van-step>买家提货</van-step><van-step>交易完成</van-step></van-steps>",

                },
                {
                    name:"粘性布局",
                    icon:"",
                    html:"<van-sticky><van-button type='primary'>基础用法</van-button></van-sticky>",

                },
                {
                    name:"轮播",
                    icon:"",
                    html:"<van-swipe class='my-swipe' :autoplay='3000' indicator-color='white'><van-swipe-item>1</van-swipe-item><van-swipe-item>2</van-swipe-item><van-swipe-item>3</van-swipe-item><van-swipe-item>4</van-swipe-item></van-swipe>",
                },
                {
                    name:"标记",
                    icon:"",
                    html:"<van-tag>标签</van-tag><van-tag type='primary'>标签</van-tag><van-tag type='success'>标签</van-tag><van-tag type='danger'>标签</van-tag><van-tag type='warning'>标签</van-tag>",

                },
            ]
        },
        {
            name:"导航组件",
            children:[
                {
                    name:"宫格",
                    icon:"",
                    html:"<van-grid><van-grid-item icon='photo-o' text='文字' /><van-grid-item icon='photo-o' text='文字' /><van-grid-item icon='photo-o' text='文字' /><van-grid-item icon='photo-o' text='文字' /></van-grid>",

                },
                {
                    name:"索引栏",
                    icon:"",
                    html:"<van-index-bar><van-index-anchor index='A' /><van-cell title='文本' /><van-cell title='文本'/><van-cell title='文本' /><van-index-anchor index='B' /><van-cell title='文本' /><van-cell title='文本' /><van-cell title='文本' />...</van-index-bar>",

                },
                {
                    name:"导航栏",
                    icon:"",
                    html:"<van-nav-bar title='标题' left-text='返回' right-text='按钮' left-arrow></van-nav-bar>"
                },
                {
                    name:"分页",
                    icon:"",
                    html:"<van-pagination v-model='currentPage' :total-items='24' :items-per-page='5'></van-pagination>"
                },
                {
                    name:"开关单元格",
                    icon:"",
                    html:"<van-cell-group><van-switch-cell v-model='checked' title='标题'></van-switch-cell></van-cell-group>"
                },
                {
                    name:"侧边导航",
                    icon:"",
                    html:"<van-sidebar><van-sidebar-item title='标签名称'></van-sidebar-item></van-sidebar>"
                },
                {
                    name:"标签页",
                    icon:"",
                    html:"<van-tabs><van-tab title='标签 1'></van-tab></van-tabs>"
                },
                {
                    name:"标签栏",
                    icon:"",
                    html:"<van-tabbar><van-tabbar-item icon='home-o'></van-tabbar-item></van-tabbar>"
                },
                {
                    name:"分类选择",
                    icon:"",
                    html:"<van-tree-select :items='items' :active-id.sync='activeId' :main-active-index.sync='activeIndex'></van-tree-select>"
                }
            ]
        },
        {
            name:"业务组件",
            children:[
                {
                    name:"地址编辑",
                    icon:"",
                    html:"<van-address-edit :area-list='areaList' show-postal show-delete show-set-default show-search-result :search-result='searchResult' :area-columns-placeholder='[]'></van-address-edit>"
                },
                {
                    name:"地址列表",
                    icon:"",
                    html:"<van-address-list v-model='chosenAddressId' :list='list' :disabled-list='disabledList' disabled-text='以下地址超出配送范围' default-tag-text='默认'></van-address-list>"
                },
                {
                    name:"省市区选择",
                    icon:"",
                    html:"<van-area :area-list='areaList'></van-area>"
                },
                {
                    name:"商品卡片",
                    icon:"",
                    html:"<van-card num='2' price='2.00' desc='描述信息' title='商品标题' thumb='https://img.yzcdn.cn/vant/ipad.jpeg'></van-card>"
                },
                {
                    name:"提交订单栏",
                    icon:"",
                    html:"<van-submit-bar :price='3050' button-text='提交订单'></van-submit-bar>"
                },
                {
                    name:"联系人卡片",
                    icon:"",
                    html:"<van-contact-card :type='cardType' :name='contactName' :tel='contactTel'></van-contact-card>"
                },
                {
                    name:"联系人列表",
                    icon:"",
                    html:"<van-contact-list v-model='chosenContactId' :list='list'></van-contact-list>"
                },
                {
                    name:"联系人编辑",
                    icon:"",
                    html:"<van-contact-edit :contact-info='editingContact'></van-contact-edit>"
                },
                {
                    name:"优惠券单元格",
                    icon:"",
                    html:"<van-coupon-cell :coupons='coupons'></van-coupon-cell>"
                },
                {
                    name:"优惠券列表",
                    icon:"",
                    html:"<van-coupon-list :coupons='coupons'></van-coupon-list>"
                },
                {
                    name:"商品规格",
                    icon:"",
                    html:"<van-sku v-model='show' :sku='sku' :goods='goods' :hide-stock='sku.hide_stock' :message-config='messageConfig'></van-sku>"
                },
                {
                    name:"商品导航",
                    icon:"",
                    html:"<van-goods-action><van-goods-action-icon icon='chat-o' text='客服'></van-goods-action-icon><van-goods-action-icon icon='cart-o' text='购物车'></van-goods-action-icon><van-goods-action-button type='warning' text='加入购物车'></van-goods-action-button><van-goods-action-button type='danger' text='立即购买'></van-goods-action-button></van-goods-action>"
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
    */
    this.tagClassMapping = {
        /*标签名:行为*/
        /*容器*/
        "mc-ui-absolute-pane":{name:"自由定位",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,assistDuplicate:false,duplicateAttr:[],        copy:true,       paste:true,assistDelete:true, canDelete:true          },

        /*样式*/
        "mc-root":{name:"根面板",dragInto:true,duplicate:false, copy:false,      paste:true,    canDelete:false},
        "template":{name:"Template模板",dragInto:true,duplicate:false, copy:true,      paste:true,    canDelete:true},
        "mc-window":{name:"窗体",dragInto:true,duplicate:false, copy:false,      paste:true,    canDelete:true,assistDelete:true},
        "magical-coder-tmp":{name:"临时包裹",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},

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
        "van-button":        {name:"按钮",treeExtraName:{attr:[],text:true},     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,      },
        "van-cell-group":{name:"单元组",canZoom:true,assistZoom:true,assistDelete:true,assistAdd:true,assistDuplicate:true,dragInto:true,duplicate:true,duplicateAttr:[],copy:true,paste:false, canDelete:true,onlyChildren:["van-cell","van-switch-cell"],addOneItems:[{"":[{html:"<van-cell title='单元格' value='内容'></van-cell>",focus:false}]}]     },
        "van-cell":        {name:"单元格",treeExtraName:{attr:[],text:true},     dragInto:true,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,bind:{"title-style":'[]',"title-class":'[]',"value-class":'[]',"label-class":'[]',}},
        "van-image":        {name:"图片",treeExtraName:{attr:[],text:true},     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,      },

        "van-row":           {name:"行",canZoom:true,assistZoom:true,       dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],        copy:true,       paste:false, canDelete:true,assistDelete:true,onlyChildren:["van-col"],assistAdd:true,addOneItems:[{"":[{html:"<van-col></van-col>",focus:false}]}]          },
        "van-col":           {name:"列",canZoom:true,assistZoom:true,       dragInto:true,       duplicate:true,assistDuplicate:true,duplicateAttr:[],        copy:false,      paste:true,  canDelete:true,assistDelete:true,onlyParents:["van-row"] ,bind:{"v-text":'""',"v-html":'""',"v-for":"[]"}                                                              },


        "van-popup":        {name:"弹出层",treeExtraName:{attr:[],text:true},     dragInto:true,     duplicate:false,duplicateAttr:[],         copy:true,      paste:true,   canDelete:true,   bind:{"overlay-style":'""',"v-model":'false'}},
        "van-calendar":        {name:"日历",treeExtraName:{attr:[],text:true},     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true, bind:{"v-model":'false'}     },
        "van-checkbox-group":{name:"复选框组",treeExtraName:{attr:["v-model"]},    dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true,    canDelete:true,assistDelete:true,     onlyChildren:["van-checkbox"],  bind:{"v-model":'[]'}  ,assistAdd:true,addOneItems:[{"":[{html:"<van-checkbox name='1'>选项1</van-checkbox>",focus:false}]}]                    },
        "van-checkbox":      {name:"复选框",treeExtraName:{attr:[],text:true},    dragInto:false,     duplicate:true,duplicateAttr:["name"],         copy:true,      paste:false,   canDelete:true,     onlyParents:["van-checkbox-group"], },
        "van-datetime-picker":        {name:"时间选择",treeExtraName:{attr:[],text:true},     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,bind:{"v-model":'new Date()'}      },
        "van-field":        {name:"输入框",treeExtraName:{attr:[],text:true},     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,bind:{"v-model":'""'}      },
        "van-form":        {name:"表单",treeExtraName:{attr:[],text:true},     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,      },
        "van-number-keyboard":        {name:"数字键盘",treeExtraName:{attr:[],text:true},     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,bind:{":show":'false'}      },
        "van-password-input":        {name:"密码输入框",treeExtraName:{attr:[],text:true},     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,bind:{":value":'""'}      },
        "van-picker":        {name:"选择器",treeExtraName:{attr:[],text:true},     dragInto:false,     duplicate:true,duplicateAttr:[],         copy:true,      paste:false,   canDelete:true,      },

        "van-address-edit":{name:"地址编辑",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{":area-list":'{}',"address-info":"[{id:'1',name:'张三',tel:'13000000000',province:1000,city:10001,county:100,areaCode:'230000',postalCode:'230000',isDefault:true,addressDetail:'浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'}]",":search-result":"[{name:'张三',address:'浙江省杭州市滨江区江南大道 15 号'}]"}},
        "van-address-list":{name:"地址列表",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{"v-model":'""',":list":"[{id:'1',name:'张三',tel:'13000000000',address:'浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'},{id:'2',name:'李四',tel:'1310000000',address:'浙江省杭州市拱墅区莫干山路 50 号'}]",":disabled-list":"[{id:'3',name:'王五',tel:'1320000000',address:'浙江省杭州市滨江区江南大道 15 号'}]"}},
        "van-area":{name:"省市区选择",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{":area-list":"{province_list:{110000:'北京市',120000:'天津市'},city_list:{110100:'北京市',110200:'县',120100:'天津市',120200:'县'},county_list:{110101:'东城区',110102:'西城区',110105:'朝阳区',110106:'丰台区',120101:'和平区',120102:'河东区',120103:'河西区',120104:'南开区',120105:'河北区',}}"}},
        "van-card":{name:"商品卡片",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,},
        "van-submit-bar":{name:"提交订单栏",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,},
        "van-contact-card":{name:"联系人卡片",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{":name":'"优雅的代码"',":tel":'"799374340@qq.com"'}},
        "van-contact-list":{name:"联系人列表",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind: {":list":"[{name:'张三',tel:'13000000000',id:0}]"}},
        "van-contact-edit":{name:"联系人编辑",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{":contact-info":"{id:'1',name:'张三',tel:'13000000000',isDefault:true}"}},
        "van-coupon-cell":{name:"优惠券单元格",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{":coupons":"[{id:'1',name:'张三',tel:'13000000000',condition:'帅',startAt:10001,endAt:100,reason:'230000',value:'230000',valueDesc:'1000',unitDesc:'aaaa'}]"}},
        "van-coupon-list":{name:"优惠券列表",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{":coupons":"[{id:'1',name:'李四',tel:'13000000000',condition:'帅',startAt:10001,endAt:100,reason:'230000',value:'230000',valueDesc:'1000',unitDesc:'aaaa'}]",":disabled-coupons":"[{id:'1',name:'黄五',tel:'13000000000',condition:'帅',startAt:10001,endAt:100,reason:'230000',value:'230000',valueDesc:'1000',unitDesc:'aaaa'}]"}},
        "van-sku":{name:"商品规格",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{":sku":"{}",":goods":"{}",":custom-stepper-config":"{}",":message-config":"{}",":initial-sku":"{}","v-model":"true"}},
        "van-tree-select":{name:"分类选择",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{":items":"[]"}},
        "van-nav-bar":{name:"导航栏",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,},
        "van-pagination":{name:"分页",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{"v-model":'""'}},
        "van-rate":{name:"评分",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{"v-model":"0"}},
        "van-search":{name:"搜索",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{"v-model":'""'}},
        "van-slider":{name:"滑块",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{"v-model":"0"}},
        "van-stepper":{name:"步进器",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{"v-model":"0"}},
        "van-switch":{name:"开关",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{"v-model":"false","active-value":"true","inactive-value":"false"}},
        "van-uploader":{name:"文件上传",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{":after-read":'""',"before-read":'""',"before-delete":'""',"v-model":"[]"}},
        "van-action-sheet":{name:"上拉菜单",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{":actions":"[{name:'选项'},{name:'选项'},{name:'选项',subname:'描述信息'}]","v-model":"true"}},
        "van-overlay":{name:"遮罩层",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{":show":"false"}},
        "van-pull-refresh":{name:"下拉刷新",dragInto:true,duplicate:true,duplicateAttr:[],copy:true,paste:true,canDelete:true,bind:{"v-model":"false"}},
        "van-dialog":{name:"弹出框",dragInto:true,duplicate:true,paste:true,duplicateAttr:[],copy:true,canDelete:true,bind:{"v-model":"false"}},
        "van-loading":{name:"加载",dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true},
//父子组件
//商品导航
        "van-goods-action":{name:"图标",canZoom:true,assistZoom:true,assistDelete:true,assistAdd:true,assistDuplicate:true,dragInto:true,duplicate:true,duplicateAttr:[],copy:true,paste:false, canDelete:true,onlyChildren:["van-goods-action-icon","van-goods-action-button"],bind:{"v-model":"0","icon-class":'""'}    },
        "van-goods-action-icon":{name:"图标",canZoom:true,assistZoom:true,dragInto:true,duplicate:true,duplicateAttr:[],copy:false,paste:true, canDelete:true,assistDelete:true,onlyParents:["van-goods-action"]  },
        "van-goods-action-button":{name:"按钮",canZoom:true,assistZoom:true,dragInto:true,duplicate:true,duplicateAttr:[],copy:false,paste:true, canDelete:true,assistDelete:true,onlyParents:["van-goods-action"]  },
//开关单元格
        "van-switch-cell":{name:"开关单元",canZoom:true,assistZoom:true,dragInto:true,assistDuplicate:true,duplicate:true,duplicateAttr:[],copy:false,paste:true, canDelete:true,assistDelete:true,onlyParents:["van-cell-group"],bind:{"v-model":"false","active-value":"true","inactive-value":"true"}},
//侧边导航
        "van-sidebar":{name:"边注栏",canZoom:true,assistZoom:true,assistDelete:true,assistAdd:true,assistDuplicate:true,dragInto:true,duplicate:true,duplicateAttr:[],copy:true,paste:false, canDelete:true,onlyChildren:["van-sidebar-item"],addOneItems:[{"":[{html:"<van-sidebar-item></van-sidebar-item>",focus:false}]}]     },
        "van-sidebar-item":{name:"项目",canZoom:true,assistZoom:true,dragInto:true,duplicate:true,duplicateAttr:[],copy:false,paste:true, canDelete:true,assistDelete:true,onlyParents:["van-sidebar"],bind:{"v-model":"0",}  },
//标签页
        "van-tabs":{name:"标签页",canZoom:true,assistZoom:true,assistDelete:true,assistAdd:true,assistDuplicate:true,dragInto:true,duplicate:true,duplicateAttr:[],copy:true,paste:false, canDelete:true,onlyChildren:["van-tab"],addOneItems:[{"":[{html:"<van-tab></van-tab>",focus:false}]}],bind:{"v-model":"0",}     },
        "van-tab":{name:"标签",canZoom:true,assistZoom:true,dragInto:true,duplicate:true,duplicateAttr:[],copy:false,paste:true, canDelete:true,assistDelete:true,onlyParents:["van-tabs"]},
//标签栏
        "van-tabbar":{name:"标签栏",canZoom:true,assistZoom:true,assistDelete:true,assistAdd:true,assistDuplicate:true,dragInto:true,duplicate:true,duplicateAttr:[],copy:true,paste:false, canDelete:true,onlyChildren:["van-tabbar-item"],addOneItems:[{"":[{html:"<van-tabbar-item></van-tabbar-item>",focus:false}]}],bind:{"v-model":"0",}     },
        "van-tabbar-item":{name:"标签",canZoom:true,assistZoom:true,dragInto:true,duplicate:true,duplicateAttr:[],copy:false,paste:true, canDelete:true,assistDelete:true,onlyParents:["van-tabbar"]},
//单选框
        "van-radio-group":{name:"单选组",canZoom:true,assistZoom:true,assistDelete:true,assistAdd:true,assistDuplicate:true,dragInto:true,duplicate:true,duplicateAttr:[],copy:true,paste:false, canDelete:true,onlyChildren:["van-radio"],addOneItems:[{"":[{html:"<van-radio name='1'>单选</van-radio>",focus:false}]}],bind:{"v-model":'""',}     },
        "van-radio":{name:"单选",canZoom:true,assistZoom:true,dragInto:false,duplicate:true,duplicateAttr:["name"],copy:false,paste:true, canDelete:true,assistDelete:true,onlyParents:["van-radio-group"]},
//下拉菜单
        "van-dropdown-menu":{name:"菜单",canZoom:true,assistZoom:true,assistDelete:true,assistAdd:true,assistDuplicate:true,dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false, canDelete:true,onlyChildren:["van-dropdown-item"],addOneItems:[{"":[{html:"<van-dropdown-item></van-dropdown-item>",focus:false}]}] },
        "van-dropdown-item":{name:"项目",canZoom:true,assistZoom:true,dragInto:false,duplicate:true,duplicateAttr:[],copy:false,paste:true, canDelete:true,assistDelete:true,onlyParents:["van-dropdown-menu"],bind:{"v-model":'""',":options":"[{text:'全部商品',value:0},{text:'新款商品',value:1},{text:'活动商品',value:2}]"}},


        "van-collapse":     {name:"折叠面板",canZoom:true,assistZoom:true,assistDelete:true,assistAdd:true,assistDuplicate:true,dragInto:true,duplicate:true,duplicateAttr:[],copy:true,paste:false, canDelete:true,bind:{"v-model":"['1']"},onlyChildren:["van-collapse-item"],addOneItems:[{"":[{html:"<van-collapse-item title='标题1' name='1'></van-collapse-item>",focus:false}]}]     },
        "van-collapse-item":{name:"折叠子面板",canZoom:true,assistZoom:true,dragInto:true,duplicate:true,duplicateAttr:['name'],copy:false,paste:true, canDelete:true,assistDelete:true,onlyParents:["van-collapse"]},
        "van-count-down":{name:"倒计时",dragInto:false,duplicate:true,assistDuplicate:true, copy:true, paste:false, canDelete:true,assistDelete:true,bind:{":time": '30 * 60 * 60 * 1000'}},
        "van-divider":{name:"切割线",dragInto:false,duplicate:true,assistDuplicate:true, copy:true, paste:false, canDelete:true,assistDelete:true},
        "van-list":{name:"列表",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true,bind:{"v-model":'false',":finished":'false'}  },
        "van-notice-bar":{name:"通知栏",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "van-panel":{name:"面板",dragInto:true,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "van-progress":{name:"进度条",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "van-skeleton":{name:"骨架屏",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "van-steps":     {name:"步骤条",canZoom:true,assistZoom:true,assistDelete:true,assistAdd:true,assistDuplicate:true,dragInto:true,duplicate:true,duplicateAttr:[],copy:true,paste:false, canDelete:true,bind:{":active":'1'},onlyChildren:["van-step"],addOneItems:[{"":[{html:"<van-step>买家下单</van-step>",focus:false}]}]     },
        "van-step":{name:"子步骤条",canZoom:true,assistZoom:true,dragInto:false,duplicate:true,duplicateAttr:[],copy:false,paste:true, canDelete:true,assistDelete:true,onlyParents:["van-steps"]},
        "van-sticky":{name:"粘性布局",dragInto:true,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "van-swipe":     {name:"轮播",canZoom:true,assistZoom:true,assistDelete:true,assistAdd:true,assistDuplicate:true,dragInto:true,duplicate:true,duplicateAttr:[],copy:true,paste:false, canDelete:true,onlyChildren:["van-swipe-item"],addOneItems:[{"":[{html:"<van-swipe-item>1</van-swipe-item>",focus:false}]}]     },
        "van-swipe-item":{name:"轮播条目",canZoom:true,assistZoom:true,dragInto:true,duplicate:true,duplicateAttr:[],copy:false,paste:true, canDelete:true,assistDelete:true,onlyParents:["van-swipe"]},
        "van-tag":{name:"标记",dragInto:false,duplicate:true,assistDuplicate:true, copy:true,      paste:false,    canDelete:true,assistDelete:true},
        "van-grid":     {name:"宫格",canZoom:true,assistZoom:true,assistDelete:true,assistAdd:true,assistDuplicate:true,dragInto:true,duplicate:true,duplicateAttr:[],copy:true,paste:false, canDelete:true,onlyChildren:["van-grid-item"],addOneItems:[{"":[{html:"<van-grid-item text='文字'></van-grid-item>",focus:false}]}]     },
        "van-grid-item":{name:"宫格条目",canZoom:true,assistZoom:true,dragInto:true,duplicate:true,duplicateAttr:[],copy:false,paste:true, canDelete:true,assistDelete:true,onlyParents:["van-grid"]},
        "van-index-bar":     {name:"索引栏",canZoom:true,assistZoom:true,assistDelete:true,assistAdd:true,assistDuplicate:true,dragInto:true,duplicate:true,duplicateAttr:[],copy:true,paste:false, canDelete:true,onlyChildren:["van-index-anchor"],addOneItems:[{"":[{html:"<van-index-anchor index='A' /><van-cell title='文本' /><van-cell title='文本' /><van-cell title='文本' />",focus:false}]}]     },
        "van-index-anchor":{name:"标题",canZoom:true,assistZoom:true,dragInto:false,duplicate:true,duplicateAttr:[],copy:false,paste:true, canDelete:true,assistDelete:true,onlyParents:["van-index-bar"]},

        "van-image-preview":{name:"图片预览",treeExtraName:{attr:[],text:true},dragInto:false,duplicate:true,duplicateAttr:[],copy:true,paste:false,canDelete:true,bind:{"v-model":'true',":images":'["img.jpg","img.jpg"]',"class-name":'""'}},
        "van-icon":{name:"图标",dragInto:false,duplicate:true,assistDuplicate:false, copy:true,      paste:false,    canDelete:true,assistDelete:false},
    }
    //绑定通用v-for
    for(var key in this.tagClassMapping){
        var mapping = this.tagClassMapping[key];
        var bind = mapping.bind;
        if(!bind){
            bind = {'v-for':'[]'}
        }else {
            bind['v-for']='[]';
        }
        mapping.bind = bind;
    }
    /*右侧面板绘制*/
    /*clearAttr:删除按钮 extend:扩展配置按 extra:layui组件对应的扩展配置  attrName:属性名 oneLine:是否在一行 options: [n:name(属性名|样式名) t:title（标题） c:checked时候的值(string|boolean) u:unchecked时候的值(string|boolean)]  extend:true是否启用扩展配置 ,extendKey:"icon",如果是扩展配置icon；htmlAttrs:[{"readonly":"false"}] ,validate:{"^[a-zA-Z][a-zA-Z0-9_]*$":"请输入字母数字或者下划线"}校验*/
    this.rightPanel =
        [
            {
                title: "属性",
                active: true,/*默认聚焦*/
                width: "50%",
                content: {
                    "mc-ui-absolute-pane":[],
                    "mc-root":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'自由定位',options:[{"c":"mc-ui-absolute-pane","n":"","t":"是否开启","u":""}]}
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

                    "i":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT    ,title:'文本'                },
                        {type:this.type.TEXT      ,clearAttr:false       ,oneLine:true     ,change:this.change.ATTR,attrName:'class'   ,title:'图标',extendKey:"icon",extend:true    }

                    ],
                    "a":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'href',title:'跳转地址'},
                        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'target',title:'打开方式',tooltip:"target",options:[{"_blank":"新窗口"},{"_self":"当前窗口"},{"_parent":"父窗口"},{"_top":"顶部窗口"}]},
                    ],
                    "p":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                    ],
                    "small":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                    ],
                    "mark":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                    ],
                    "del":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                    ],
                    "u":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                    ],
                    "em":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                    ],
                    "strong":[
                        {type:this.type.TEXTAREA      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                    ],
                    //按钮
                   "van-button":[
                       {type:this.type.TEXT      ,    clearAttr:true       ,    oneLine:true       ,    change:this.change.TEXT    ,    title:'文本'                },
                       {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'测试动态编写脚本'       ,attrName:'testMethod'                       ,options:[{"m1":"弹窗您好","m2":"弹窗MagicalCoder","m3":"加载后弹窗"}],                                                            },
                       {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR    ,title:'类型' ,attrName:'type' ,options:[{"primary":"主要","info":"信息","warning":"警告","danger":"危险"}],                                                            },
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'尺寸',    attrName:'size',    options:[{"large":"大","small":"小","mini":"迷你"}]},
                       {type:this.type.COLOR_PICKER,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'颜色',    tooltip:'颜色',    attrName:'color'},
                       {type:this.type.TEXT      ,     clearAttr:true       ,     oneLine:true       ,     change:this.change.ATTR    ,     title:'图标类名'       ,     attrName:'icon',     extendKey:"icon",     extend:true},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'图标类名前缀',    attrName:'icon-prefix'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'根节点的 HTML 标签',    attrName:'tag'},/*tag  根节点的 HTML 标签 */
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'原生 button 标签的 type 属性',    attrName:'native-type'},/*native-type 原生 button 标签的 type 属性 */
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"block",t:"块级元素",c:true,u:false},{n:"plain",t:"朴素按钮",c:true,u:false},{n:"square",t:"方形按钮",c:true,u:false},{n:"round",t:"圆形按钮",c:true,u:false},{n:"disabled",t:"禁用按钮",c:true,u:false},{n:"hairline",t:"使用 0.5px 边框",c:true,u:false},{n:"loading",t:"显示为加载状态",c:true,u:false},{n:"replace",t:"在跳转时替换当前页面历史",c:true,u:false}]},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'加载状态提示文字',    attrName:'loading-text'},
                       {type:this.type.SELECT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'加载图标类型',    attrName:'loading-type',    options:[{"spinner":"加载图标"}]},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'加载状态提示文字',    attrName:'loading-size'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'点击后跳转的链接地址',    attrName:'url'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'点击后跳转的目标路由对象',    attrName:'to'},
                   ],
                   "van-cell-group":[
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'分组标题',    attrName:'title'},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'显示外边框'     ,  options:[{n:"border",t:"显示外边框",c:true,u:false,dv:true}]},

                   ],
 //单元格
                   "van-cell":[
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'左侧标题',attrName:':title',extra:{min:0,max:20000}},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'右侧标题',attrName:':value',extra:{min:0,max:20000}},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'标题下方的描述信息',    attrName:'label'},
                       {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'单元格大小',attrName:'size',options:[{"large":"大"}]},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'左侧图标名称或图片链接',    attrName:'icon',     extendKey:"icon",     extend:true},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'图标类名前缀，同 Icon 组件的 class-prefix 属性',    attrName:'icon-prefix'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'点击后跳转的链接地址',    attrName:'url'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'点击后跳转的目标路由对象，同 vue-router 的 to 属性',    attrName:'to'},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"block",t:"显示内边框",c:true,u:false,dv:true}]},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"replace",t:"在跳转时替换当前页面历史",c:true,u:false}]},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"clickable",t:"开启点击反馈",c:true,u:false}]},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"is-link",t:"展示右侧箭头并开启点击反馈",c:true,u:false}]},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"required",t:"显示表单必填星号",c:true,u:false}]},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"center",t:"使内容垂直居中",c:true,u:false}]},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'箭头方向',    attrName:'arrow-direction',    options:[{"left":"左","up":"上","down":"下"}]},
                   ],
//图片
                    "van-image":[
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'图片链接',    attrName:'src'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'图片填充模式',    attrName:'fit'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'替代文本',    attrName:'alt'},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'宽度，默认单位为px',attrName:':width',extra:{min:0,max:20000}},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'高度，默认单位为px',attrName:':height',extra:{min:0,max:20000}},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'圆角大小，默认单位为px',attrName:':radius',extra:{min:0,max:20000}},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"round",t:"显示为圆形",c:true,u:false}]},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'开启图片懒加载，须配合 Lazyload 组件使用'     ,  options:[{n:"lazy-load",t:"开启图片懒加载，须配合 Lazyload 组件使用",c:true,u:false}]},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"show-error",t:"展示图片加载失败提示",c:true,u:false,dv:true}]},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"show-loading ",t:"展示图片加载中提示",c:true,u:false,dv:true}]},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'失败时提示的图标名称或图片链接',    attrName:'error-icon',     extendKey:"icon",     extend:true},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'加载时提示的图标名称或图片链接',    attrName:'loading-icon ',     extendKey:"icon",     extend:true},
                    ],
//布局
                   "van-row":[
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'布局方式',    attrName:'type',    options:[{"flex":"伸缩"}]},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'Flex 主轴对齐方式',    attrName:'justify',    options:[{"end":"尾部对齐","center":"居中","space-around":"两侧的间隔","space-between":"两端对齐"}]},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'列元素之间的间距（单位为px）',attrName:':gutter',extra:{min:0,max:20000}},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'自定义元素标签',    attrName:'tag'},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'对齐方式',    attrName:'align',    options:[{"center":"居中","bottom":"底部对齐"}]},
                   ],
                   //布局
                   "van-col":[
                        {type:this.type.CHECKBOX  ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'自由定位',options:[{"c":"mc-ui-absolute-pane","n":"","t":"是否开启","u":""}]},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'列元素宽度',attrName:'span',extra:{min:0,max:24}},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'列元素偏移距离',attrName:':offset',extra:{min:0,max:2000}},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'自定义元素标签',    attrName:'tag'},
                   ],
//弹出层
                   "van-popup":[
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"v-model",t:"当前组件显示",c:true,u:false}]},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"overlay",t:"显示遮罩层",c:true,u:false,dv:true}]},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'弹出位置',    attrName:'position',    options:[{"top":"顶部","bottom":"底部","right":"右侧","left":"左侧"}]},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'自定义遮罩层类名',    attrName:'overlay-class'},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'动画时长，单位秒',attrName:':duration',extra:{min:0,max:20000}},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"round",t:"显示圆角",c:true,u:false}]},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"lock-scroll",t:"锁定背景滚动",c:true,u:false,dv:true}]},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"lazy-render",t:"显示弹层时才渲染节点",c:true,u:false,dv:true}]},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"close-on-popstate",t:"在页面回退时自动关闭",c:true,u:false}]},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"close-on-click-overlay",t:"在点击遮罩层后关闭",c:true,u:false,dv:true}]},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"closeable",t:"显示关闭图标",c:true,u:false}]},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'关闭图标名称或图片链接',    attrName:'close-icon',     extendKey:"icon",     extend:true},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'关闭图标位置',    attrName:'position',    options:[{"top-left":"左上方","bottom-left":"左下方","bottom-right":"右下方"}]},
                       {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'动画类名，等价于 transtion 的name属性',attrName:'transition'},
                       {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'指定挂载的节点',attrName:'get-container'},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"safe-area-inset-bottom",t:"开启底部安全区适配",c:true,u:false}]},
                   ],
//日历
                    "van-calendar":[
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'选择类型',    attrName:'type',    options:[{"single":"选择单个日期","multiple":"选择多个日期","range":"选择日期区间"}]},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'日历标题',    attrName:'title'},
                       {type:this.type.COLOR_PICKER,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'主题色，对底部按钮和选中日期生效',tooltip:'颜色',attrName:'color'},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'日期行高',attrName:':row-height',extra:{min:0,max:20000}},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'日期格式化函数',    attrName:'formatter'},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"poppable",t:"以弹层的形式展示日历",c:true,u:false,dv:true},{n:"show-mark",t:"显示月份背景水印",c:true,u:false,dv:true},{n:"show-title",t:"展示日历标题",c:true,u:false,dv:true},{n:"show-subtitle",t:"展示日历副标题（年月）",c:true,u:false,dv:true},{n:"show-confirm",t:"展示确认按钮",c:true,u:false,dv:true}]},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'确认按钮的文字',    attrName:'confirm-text'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'确认按钮处于禁用状态时的文字',    attrName:'confirm-disabled-text'},
    //Poppable Props
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"v-model",t:"显示日历弹窗",c:true,u:false},{n:"round",t:"显示圆角弹窗",c:true,u:false,dv:true},{n:"close-on-popstate",t:"在页面回退时自动关闭",c:true,u:false},{n:"close-on-click-overlay",t:"在点击遮罩层后关闭",c:true,u:false,dv:true},{n:"safe-area-inset-bottom",t:"开启底部安全区适配",c:true,u:false,dv:true}]},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'弹出位置',    attrName:'position',    options:[{"top":"顶部","left":"左侧","right":"右侧"}]},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'指定挂载的节点，用法示例',    attrName:'get-container'},

    //Range Props
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'日期区间最多可选天数，默认无限制',attrName:':max-range',extra:{min:0,max:20000}},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'范围选择超过最多可选天数时的提示文案',    attrName:'range-prompt '},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"allow-same-day",t:"允许日期范围的起止时间为同一天",c:true,u:false}]},
    //Day 数据结构
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'日期类型',    attrName:'type',    options:[{"selected":"选择日期","start":"开始日期","middle":"中间日期","end":"结束日期","disabled":"禁止日期"}]},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'中间显示的文字',    attrName:'text'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'上方的提示信息',    attrName:'topInfo'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'下方的提示信息',    attrName:'bottomInfo'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'额外类名',    attrName:'className'},

                    ],
//复选框
                    "van-checkbox-group":[
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"disabled",t:"禁用复选框",c:true,u:false}]},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'最大可选数，0为无限制',attrName:':max',extra:{min:0,max:20000}},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'所有复选框的图标大小，默认单位为px',attrName:':icon-size',extra:{min:0,max:20000}},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'排列方向',    attrName:'direction',    options:[{"horizontal":"横向"}]},
                       {type:this.type.COLOR_PICKER,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'所有复选框的选中状态颜色',tooltip:'颜色',attrName:'checked-color'},
                    ],
                    "van-checkbox":[
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"label-disabled",t:"禁用复选框文本点击",c:true,u:false},{n:"disabled",t:"禁用所有复选框",c:true,u:false},{n:"bind-group",t:"与复选框组绑定",c:true,u:false,dv:true}]},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'形状',    attrName:'shape',    options:[{"square":"方形"}]},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'文本位置',    attrName:'label-position',    options:[{"left":"左侧"}]},
                       {type:this.type.COLOR_PICKER,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'选中状态颜色',tooltip:'颜色',attrName:'checked-color'},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'图标大小，默认单位为px',attrName:':icon-size',extra:{min:0,max:20000}},
                    ],
//时间选择
                    "van-datetime-picker":[
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'类型',    attrName:'type',    options:[{"data":"日期","time":"时间","year-month":"年月"}]},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'顶部栏标题',    attrName:'title'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'确认按钮文字',    attrName:'confirm-button-text'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'取消按钮文字',    attrName:'cancel-button-text'},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"show-toolbar",t:"显示顶部栏",c:true,u:false,dv:true},{n:"loading",t:"显示加载状态",c:true,u:false}]},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'选项过滤函数',    attrName:'filter'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'选项格式化函数',    attrName:'formatter'},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'选项高度',attrName:':item-height',extra:{min:0,max:20000}},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'可见的选项个数',attrName:':visible-item-count',extra:{min:0,max:20000}},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'快速滑动时惯性滚动的时长，单位ms',attrName:':swipe-duration',extra:{min:0,max:20000}},
                    ],
    //输入框

                    "van-field":[
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'输入框左侧文本',    attrName:'label'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'名称，提交表单的标识符',    attrName:'name'},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'输入框类型',    attrName:'type',    options:[{"tel":"手机号","digit":"整数","number":"数字","textarea":"文本","password":"密码"}]},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'大小',    attrName:'size',    options:[{"large":"大"}]},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'输入的最大字符数',attrName:':maxlength',extra:{min:0,max:20000}},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'占位提示文字',    attrName:'placeholder'},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"border",t:"显示内边框",c:true,u:false,dv:true},{n:"disabled",t:"禁用输入框",c:true,u:false},{n:"readonly",t:"只读",c:true,u:false},{n:"required",t:"显示表单必填星号",c:true,u:false},{n:"clearable",t:"启用清除控件",c:true,u:false}]},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"clickable",t:"开启点击反馈",c:true,u:false},{n:"is-link",t:"展示右侧箭头并开启点击反馈",c:true,u:false},{n:"autofocus",t:"自动聚焦，iOS 系统不支持该属性",c:true,u:false},{n:"show-word-limit",t:"显示字数统计，需要设置maxlength属性",c:true,u:false},{n:"error",t:"将输入内容标红",c:true,u:false}]},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'底部错误提示文案，为空时不展示',    attrName:'error-message'},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'箭头方向',    attrName:'arrow-direction',    options:[{"left":"向左","up":"向上","down":"向下"}]},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'左侧文本宽度，默认单位为px',attrName:':label-width',extra:{min:0,max:20000}},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'左侧文本对齐方式',    attrName:'label-align',    options:[{"center":"居中","right":"右对齐"}]},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'输入框对齐方式',    attrName:'input-align',    options:[{"center":"居中","right":"右对齐"}]},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'错误提示文案对齐方式',    attrName:'error-message-align',    options:[{"center":"居中","right":"右对齐"}]},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"autosize",t:"自适应内容高度，只对 textarea 有效，可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为px",c:true,u:false}]},

                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'左侧图标名称或图片链接',    attrName:'left-icon',extend:true,extendKey:'icon'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'右侧图标名称或图片链接',    attrName:'right-icon',extend:true,extendKey:'icon'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'图标类名前缀，同 Icon 组件的 class-prefix 属性',    attrName:'icon-prefix'},
                    ],
//表单
                     "van-form":[
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'表单项 label 宽度，默认单位为px',attrName:':label-width',extra:{min:0,max:20000}},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'表单项 label 对齐方式',    attrName:'label-align',    options:[{"center":"居中","right":"右对齐"}]},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'输入框对齐方式',    attrName:'input-align',    options:[{"center":"居中","right":"右对齐"}]},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'错误提示文案对齐方式',    attrName:'error-message-align',    options:[{"center":"居中","right":"右对齐"}]},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'表单校验触发时机',    attrName:'validate-trigger',    options:[{"onChange":"随时"}]},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"show-error-message",t:"在校验不通过时在输入框下方展示错误提示",c:true,u:false,dv:true},{n:"scroll-to-error",t:"在提交表单且校验不通过时滚动至错误的表单项",c:true,u:false},{n:"validate-first",t:"在某一项校验不通过时停止校验",c:true,u:false},{n:"colon",t:"在 label 后面添加冒号",c:true,u:false}]},
    //Rule 数据结构
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"required",t:"必选字段",c:true,u:false}]},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'错误提示文案',    attrName:'message'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'通过函数进行校验',    attrName:'validator'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'格式化函数，将表单项的值转换后进行校验',    attrName:'formatter'},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'本项规则的触发时机',    attrName:'trigger',    options:[{"onChange":"随时","onBlur":"定时"}]},
                     ],
    //数字键盘
                     "van-number-keyboard":[
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'当前输入值',    attrName:'v-model'},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"show",t:"显示键盘",c:true,u:false},{n:"transition",t:"开启过场动画",c:true,u:false,dv:true},{n:"show-delete-key",t:"展示删除按钮",c:true,u:false,dv:true},{n:"hide-on-click-outside",t:"点击外部时收起键盘",c:true,u:false,dv:true},{n:"safe-area-inset-bottom",t:"开启底部安全区适配",c:true,u:false,dv:true},]},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'样式风格',    attrName:'theme',    options:[{"default":"固定","custom":"传统"}]},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'键盘标题',    attrName:'title'},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'输入值最大长度',attrName:':maxlength',extra:{min:0,max:20000}},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'键盘 z-index',attrName:':z-index',extra:{min:0,max:20000}},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'左下角按键内容',    attrName:'extra-key'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'关闭按钮文字，空则不展示',    attrName:'close-button-text'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'删除按钮文字',    attrName:'delete-button-text'},
                     ],
//密码输入框
                    "van-password-input":[
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'输入框下方文字提示',    attrName:'info'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'输入框下方错误提示',    attrName:'error-info'},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'密码最大长度',attrName:':lenth',extra:{min:0,max:20000}},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'输入框格子之间的间距，如 20px 2em，默认单位为px',attrName:':gutter',extra:{min:0,max:20000}},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"focused",t:"已聚焦，聚焦时会显示光标",c:true,u:false},{n:"mask",t:"隐藏密码内容",c:true,u:false,dv:true}]},
                    ],
    //选择器
                    "van-picker":[
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'顶部栏标题',    attrName:'title'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'确认按钮文字   ',    attrName:'confirm-button-text'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'取消按钮文字',    attrName:'cancel-button-text'},
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'选项对象中，选项文字对应的键名',    attrName:'value-key'},
                       {type:this.type.SELECT,   clearAttr:true,    oneLine:true,    change:this.change.ATTR,   title:'顶部栏位置',    attrName:'toolbar-position',    options:[{"bottom":"底部"}]},
                       {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态'     ,  options:[{n:"loading",t:"显示加载状态",c:true,u:false},{n:"show-toolbar",t:"显示顶部栏",c:true,u:false},{n:"allow-html",t:"允许选项内容中渲染 HTML",c:true,u:false,dv:true}]},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'单列选择时，默认选中项的索引',attrName:':default-index',extra:{min:0,max:20000}},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'选项高度',attrName:':item-height',extra:{min:0,max:20000}},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'可见的选项个数',attrName:':visible-item-count',extra:{min:0,max:20000}},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'快速滑动时惯性滚动的时长，单位ms',attrName:':swipe-duration',extra:{min:0,max:20000}},

                    ],
                    "van-image-preview":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'需要预览的图片 URL 数组',attrName:':images'},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'图片预览起始位置索引',attrName:'start-position',extra:{min:0,max:20000}},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'动画时长，单位为ms',attrName:'swipeDuration',extra:{min:0,max:20000}},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态',options:[{n:"show-index",t:"显示页码",c:true,u:false,dv:true},{n:"show-indicators",t:"显示轮播指示器",c:true,u:false},{n:"loop",t:"开启循环播放",c:true,u:false,dv:true},{n:"async-close",t:"开启异步关闭",c:true,u:false},{n:"close-on-popstate",t:"在页面回退时自动关闭",c:true,u:false},{n:"lazy-load",t:"开启图片懒加载，须配合 Lazyload 组件使用",c:true,u:false},{n:"closeable ",t:"显示关闭图标",c:true,u:false}]},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'手势缩放时，最大缩放比例',attrName:'max-zoom',extra:{min:0,max:20000}},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'手势缩放时，最小缩放比例',attrName:'min-zoom',extra:{min:0,max:20000}},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'关闭图标名称或图片链接',attrName:'close-icon',extend:true,extendKey:'icon'},
                        {type:this.type.SELECT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'关闭图标位置',attrName:'close-icon-position',options:[{"top-left":"左下方的","bottom-left":"左下方的","bottom-right":"右下方的"}]}
                    ],
                    "van-icon":[
                        {type:this.type.TEXT,  clearAttr:true,  oneLine:true,  title:'图标名称或图片链接',  attrName:'name',change:this.change.ATTR},
                        {type:this.type.CHECKBOX,  clearAttr:true,  oneLine:true,  change:this.change.ATTR,  title:'状态' ,  options:[{n:"dot",t:"显示小红点",c:true,u:false}]},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'图标右上角徽标的内容',attrName:'badge',extra:{min:0,max:20000}},
                        {type:this.type.COLOR_PICKER,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'颜色',tooltip:'',attrName:'color'},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'图标大小（单位为px）',attrName:'size',extra:{min:0,max:20000}},
                        {type:this.type.TEXT ,clearAttr:true ,oneLine:true ,change:this.change.ATTR ,title:'类名前缀，用于使用自定义图标' ,attrName:'class-prefix',extendKey:"icon",extend:true},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'HTML 标签',attrName:'tag'},
                    ],
                    "van-address-edit": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '地区选择列占位提示文字',attrName: ':area-columns-placeholder'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '保存按钮文字',attrName: 'save-button-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '删除按钮文字',attrName: 'delete-button-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '手机号格式校验函数',attrName: 'tel-validator'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '邮政编码格式校验函数',attrName: 'postal-validator'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '自定义校验函数',attrName: 'validator'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'收货人姓名',attrName:':name'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'收货人手机号',attrName:':tel'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'省份',attrName:':province'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'城市',attrName:':city'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'区县',attrName:':country'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'详细地址',attrName:':addressDetail'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'地区编码，通过省市区选择获取（必填）',attrName:':areaCode'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'邮政编码',attrName:':postalCode'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'地名',attrName:':name'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'详细地址',attrName:':address'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "show-postal", t: "邮政编码", c: true, u: false}, {
                                n: "show-delete",t: "删除按钮",c: true,u: false}, {n: "show-area", t: "显示地区", c: true, u: false, dv: true}, {
                                n: "show-set-default",t: "显示默认地址栏",c: true,u: false}, {n: "show-search-result", t: "显示搜索结果", c: true, u: false}, {
                                n: "show-detail",t: "显示详细地址",c: true,u: false,dv: true}, {n: "disable-area", t: "禁用地区选择", c: true, u: false}, {
                                n: "is-saving",t: "显示保存按钮加载动画",c: true,u: false}, {n: "is-deleting", t: "显示删除按钮加载动画", c: true, u: false}]},  {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态',options:[{n:"isDefault",t:"默认地址",c:true,u:false}]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '详细地址输入框行数',attrName: 'detail-rows',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '详细地址最大长度',attrName: 'detail-maxlength',extra: {min: 0, max: 20000}},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'每条地址的唯一标识',attrName:':id',extra:{min:0,max:20000}}
                    ],
//地址列表
                    "van-address-list": [{type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '不可配送提示文案',attrName: 'disabled-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '底部按钮文字',attrName: 'add-button-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '默认地址标签文字',attrName: 'default-tag-text'},//string型
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'收货人姓名',attrName:':name'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'收货地址',attrName:':address'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "switchable", t: "允许切换地址", c: true, u: false}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态',options:[{n:"isDefault",t:"默认地址",c:true,u:false}]},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'每条地址的唯一标识',attrName:':id',extra:{min:0,max:20000}},
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'收货人手机号',attrName:':tel',extra:{min:0,max:20000}},],"van-area": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '当前选中的省市区',attrName: 'value'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '顶部栏标题',attrName: 'title'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '确认按钮文字',attrName: 'confirm-button-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '取消按钮文字',attrName: 'cancel-button-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '列占位提示文字',attrName: ':columns-placeholder'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '根据code校验海外地址，海外地址会划分至单独的分类',attrName: 'is-oversea-code'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "loading", t: "显示加载状态", c: true, u: false}]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '选项高度',attrName: 'item-height',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '显示列数，3-省市区，2-省市，1-省',attrName: ':columns-num',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '可见的选项个数',attrName: 'visible-item-count',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '快速滑动时惯性滚动的时长，单位ms',attrName: 'swipe-duration',extra: {min: 0, max: 20000}},],
//Card卡片
                    "van-card": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '左侧图片 URL',attrName: 'thumb'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '标题',attrName: 'title'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '描述',attrName: 'desc'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '图片角标',attrName: 'tag'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '货币符号',attrName: 'currency'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '点击左侧图片后跳转的链接地址',attrName: 'thumb-link'},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '商品数量',attrName: 'num',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '商品价格',attrName: 'price',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '商品划线原价',attrName: ':origin-price',extra: {min: 0, max: 20000}},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "centered", t: "内容垂直居中", c: true, u: false}]},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "lazy-load", t: "开启图片懒加载", c: true, u: false}]},],
//提交订单栏
                    "van-submit-bar": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '价格左侧文案',attrName: 'label'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '价格右侧文案',attrName: 'suffix-label'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '按钮文字',attrName: 'button-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '按钮类型',attrName: 'button-type'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '提示文案',attrName: 'tip'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '左侧图标名称或图片链接',attrName: 'tip-icon',extend:true,extendKey:'icon'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '货币符号',attrName: 'currency'},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '价格文案对齐方向',attrName: 'text-align',options: [{"right": "右边", "left": "左边"}]},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "disabled", t: "禁用按钮", c: true, u: false}, {
                                n: "loading",t: "显示加载中的按钮",c: true,u: false}, {n: "safe-area-inset-bottom", t: "开启底部安全区适配", c: true, u: false},]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '价格（单位分）',attrName: ':price',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '价格小数点后位数',attrName: 'decimal-length',extra: {min: 0, max: 20000}
                        }
                    ],
//Contact联系人{
                    "van-contact-card": [
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '类型',attrName: ':type',options: [{"add": "补充", "edit": "编辑"}]},                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '联系人姓名',attrName: ':name'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '联系人手机号',attrName: ':tel'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '添加时的文案提示',attrName: 'add-text'},
                    ],
                    "van-contact-list": [
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '当前选中联系人的 id',attrName: 'v-model',extra: {min: 0, max: 20000}},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '新建按钮文案',attrName: 'add-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '默认联系人标签文案',attrName: 'default-tag-text'},
                    ],
                    "van-contact-edit": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '手机号格式校验函数',attrName: 'tel-validator'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '默认联系人栏文案',attrName: 'set-default-label'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: ":is-edit", t: "编辑联系人", c: true, u: false}, {n: "is-saving",t: "显示保存按钮加载动画",c: true,u: false}, {n: "is-deleting", t: "显示删除按钮加载动画", c: true, u: false}, {n: "show-set-default",t: "显示默认联系人栏",c: true,u: false}]},
                    ],
                    "van-coupon-cell": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '单元格标题',attrName: 'title'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '货币符号',attrName: 'currency'},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '当前选中优惠券的索引',attrName: ':chosen-coupon',extra: {min: 0, max: 20000}},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "editable", t: "切换优惠券", c: true, u: false, dv: true}, {n: "border",t: "显示内边框",c: true,u: false,dv: true},]},
                    ],
                    "van-coupon-list": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '当前输入的兑换码',attrName: 'v-model'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '可用优惠券列表标题',attrName: 'enabled-title'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '不可用优惠券列表标题',attrName: 'disabled-title'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '兑换按钮文字',attrName: 'exchange-button-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '列表底部按钮文字',attrName: 'close-button-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '输入框文字提示',attrName: 'input-placeholder'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '货币符号',attrName: 'currency'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '列表为空时的占位图',attrName: 'empty-image'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "exchange-button-loading",t: "显示兑换按钮加载动画",c: true,u: false}, {n: "exchange-button-disabled", t: "禁用兑换按钮", c: true, u: false}, {n: "show-close-button",t: "显示列表底部按钮",c: true,u: false,dv: true}, {n: "show-exchange-bar", t: "展示兑换栏", c: true, u: false, dv: true}, {n: "show-count",t: "展示可用 / 不可用数量",c: true,u: false,dv: true}]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '当前选中优惠券的索引',attrName: ':chosen-coupon',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '兑换码最小长度',attrName: 'exchange-min-length',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '滚动至特定优惠券位置',attrName: 'displayed-coupon-index',extra: {min: 0, max: 20000}},
                    ],//商品规格
                    "van-sku": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '显示在价格后面的标签',attrName: 'price-tag'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '购买按钮文字',attrName: 'buy-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '加入购物车按钮文字',attrName: 'add-cart-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '数量选择组件左侧文案',attrName: 'stepper-title'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '指定挂载的节点，用法示例',attrName: 'get-container'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '默认选中的 sku，具体参考高级用法',attrName: ':initial-sku'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: ":hide-stock", t: "显示商品剩余库存", c: true, u: false}, {n: "hide-quota-text",t: "显示限购提示",c: true,u: false}, {n: "hide-selected-text", t: "隐藏已选提示", c: true, u: false}, {n: "stock-threshold",t: "库存阈值。低于这个值会把库存数高亮显示",c: true,u: false}, {n: "show-add-cart-btn",t: "显示加入购物车按钮",c: true,u: false,dv: true}, {n: "reset-stepper-on-hide",t: "隐藏时重置选择的商品数量",c: true,u: false}, {n: "reset-selected-sku-on-hide",t: "隐藏时重置已选择的 sku",c: true,u: false}, {n: "disable-stepper-input", t: "禁用步进器输入", c: true, u: false},]},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "close-on-click-overlay",t: "在点击遮罩层后关闭",c: true,u: false}, {n: "show-soldout-sku",t: "展示售罄的 sku，默认展示并置灰",c: true,u: false}, {n: "safe-area-inset-bottom",t: "开启底部安全区适配",c: true,u: false}, {n: "preview-on-click-image", t: "在点击商品图片时自动预览", c: true, u: false, dv: true}]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '商品 id',attrName: ':goods-id',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '限购数，0 表示不限购',attrName: ':quota',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '已经购买过的数量',attrName: ':quota-used',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '起售数量',attrName: 'start-sale-num',extra: {min: 0, max: 20000}},
                    ],
                    "van-goods-action": [
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "safe-area-inset-bottom", t: "开启底部安全区适配", c: true, u: false}]},
                    ],
                    "van-goods-action-icon": [{type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '按钮文字',attrName: 'text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '图标',attrName: 'icon',extend:true,extendKey:'icon'},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '图标颜色',tooltip: '颜色',attrName: 'color'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '点击后跳转的链接地址',attrName: 'url'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '点击后跳转的目标路由对象，同 vue-router 的 to 属性',attrName: 'to'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "dot", t: "显示图标右上角小红点", c: true, u: false}]},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "replace", t: "在跳转时替换当前页面历史", c: true, u: false}]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '图标右上角徽标的内容',attrName: 'info',extra: {min: 0, max: 20000}},
                    ],
                    "van-goods-action-button": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '按钮文字',attrName: 'text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '左侧图标名称或图片链接',attrName: 'icon',extend:true,extendKey:'icon'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '点击后跳转的链接地址',attrName: 'url'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '点击后跳转的目标路由对象，同 vue-router 的 to 属性',attrName: 'to'},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '按钮类型',attrName: 'type',options: [{"primary": "主要", "info": "信息", "warning": "警告", "danger": "危险"}],},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '颜色',tooltip: '颜色',attrName: 'color'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "disabled", t: "禁用按钮", c: true, u: false}, {n: "loading",t: "显示为加载状态",c: true,u: false}, {n: "replace", t: "在跳转时替换当前页面历史", c: true, u: false}]}
                    ],
                    "van-nav-bar": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '标题',attrName: 'title'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '左侧文案',attrName: 'left-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '右侧文案',attrName: 'right-text'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "left-arrow", t: "显示左侧箭头", c: true, u: false}, {n: "fixed",t: "固定在顶部",c: true,u: false}, {n: "border", t: "显示下边框", c: true, u: false, dv: true}]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '元素 z-index',attrName: 'z-index',extra: {min: 0, max: 20000}},
                    ],
                    "van-pagination": [
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '显示模式',attrName: 'mode',options: [{"simple": "单一", "multi": "多数"}]},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '上一页按钮文字',attrName: 'prev-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '下一页按钮文字',attrName: 'next-text'},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '总页数',attrName: ':page-count',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '总记录数',attrName: ':total-items',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '每页记录数',attrName: ':items-per-page',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '显示的页码个数',attrName: ':show-page-size',extra: {min: 0, max: 20000}},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "force-ellipses", t: "显示省略号", c: true, u: false}]}
                    ],
                    "van-switch-cell": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '左侧标题',attrName: 'title'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "border", t: "展示单元格内边框", c: true, u: false},]},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '单元格大小',attrName: 'cell-size',options: [{"large": "大"}]},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "loading", t: "加载状态", c: true, u: false},]},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "disabled", t: "禁用状态", c: true, u: false},]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '开关尺寸',attrName: ':size',extra: {min: 0, max: 20000}},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '开关时的背景色',tooltip: '颜色',attrName: 'active-color'},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '开关时的背景色',tooltip: '颜色',attrName: 'inactive-color'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '打开时的值',attrName: 'active-value'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '关闭时的值',attrName: 'inactive-value'},
                    ],
                    "van-sidebar-item": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '内容',attrName: 'title'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '点击后跳转的链接地址',attrName: 'url'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '点击后跳转的目标路由对象，同 vue-router 的 to 属性',attrName: 'to'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "dot", t: "显示右上角小红点", c: true, u: false}, {n: "disabled",t: "禁用该项",c: true,u: false}, {n: "replace", t: "在跳转时替换当前页面历史", c: true, u: false}]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '右上角徽标的内容',attrName: 'info',extra: {min: 0, max: 20000}},
                    ],
                    "van-tabs": [
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '样式风格类型',attrName: 'type',options: [{"card": "卡片", "line": "线"}]},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '标签主题色',tooltip: '颜色',attrName: 'color'},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '标签背景色',tooltip: '颜色',attrName: 'background'},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '标题选中态颜色',tooltip: '颜色',attrName: 'title-active-color'},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '标题默认态颜色',tooltip: '颜色',attrName: 'title-inactive-color'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "animated", t: "开启切换标签内容时的转场动画", c: true, u: false}, {n: "border",t: "显示标签栏外边框",c: true,u: false,dv: true}, {n: "ellipsis", t: "省略过长的标题文字", c: true, u: false, dv: true}, {n: "sticky",t: "使用粘性定位布局",c: true,u: false}, {n: "swipeable", t: "开启手势滑动切换", c: true, u: false}, {n: "lazy-render",t: "开启延迟渲染（首次切换到标签时才触发内容渲染）",c: true,u: false,dv: true}, {n: "scrollspy", t: "开启滚动导航", c: true, u: false},]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '动画时间，单位秒',attrName: 'duration',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '底部条宽度，默认单位px',attrName: 'line-width',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '底部条高度，默认单位px',attrName: 'line-height',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '粘性定位布局下与顶部的最小距离，单位px',attrName: 'offset-top',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '滚动阈值，标签数量超过阈值时开始横向滚动',attrName: 'swipe-threshold',extra: {min: 0, max: 20000}},
                    ],
                    "van-tab": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '标题',attrName: ':title'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '点击后跳转的链接地址',attrName: 'url'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '点击后跳转的目标路由对象，同 vue-router 的 to 属性',attrName: 'to'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "disabled", t: "禁用标签", c: true, u: false}, {n: "dot",t: "在标题右上角显示小红点",c: true,u: false}, {n: "replace", t: "在跳转时替换当前页面历史", c: true, u: false},]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '标题右上角徽标的内容',attrName: 'info',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '标签名称，作为匹配的标识符',attrName: 'name',extra: {min: 0, max: 20000}},
                    ],
                    "van-tabbar": [
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '选中标签的颜色',tooltip: '颜色',attrName: 'active-color'},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '未选中标签的颜色',tooltip: '颜色',attrName: 'inactive-color'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "fixed", t: "固定在底部", c: true, u: false, dv: true}, {n: "border",t: "显示外边框",c: true,u: false,dv: true}, {n: "route", t: "开启路由模式", c: true, u: false}, {n: "safe-area-inset-bottom",t: "开启底部安全区适配",c: true,u: false}]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '元素 z-index',attrName: 'z-index',extra: {min: 0, max: 20000}},
                    ],
                    "van-tabbar-item": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '图标名称或图片链接',attrName: 'icon',extend:true,extendKey:'icon'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '图标类名前缀，同 Icon 组件的 class-prefix 属性',attrName: 'icon-prefix'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '点击后跳转的链接地址',attrName: 'url'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '点击后跳转的目标路由对象，同 vue-router 的 to 属性',attrName: 'to'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "dot", t: "显示图标右上角小红点", c: true, u: false}, {n: "replace",t: "在跳转时替换当前页面历史",c: true,u: false}]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '标签名称，作为匹配的标识符',attrName: 'name',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '图标右上角徽标的内容',attrName: 'info',extra: {min: 0, max: 20000}}
                    ],
                    "van-tree-select": [
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '高度，默认单位为px',attrName: 'height',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '左侧选中项的索引',attrName: ':main-active-index',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '右侧选中项的 id，支持传入数组',attrName: ':active-id',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '右侧项最大选中个数',attrName: 'max',extra: {min: 0, max: 20000}},
                    ],
                    "van-radio-group": [
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "disabled", t: "禁用所有单选框", c: true, u: false},]},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '排列方向',attrName: 'direction',options: [{"horizontal": "水平", "vertical": "垂直"}]},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '所有单选框的选中状态颜色',tooltip: '颜色',attrName: 'checked-color'},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: ' 所有单选框的图标大小，默认单位为px',attrName: 'icon-size',extra: {min: 0, max: 20000}},
                    ],
                    "van-radio": [
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'标识符',attrName:'name'},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '形状',attrName: 'shape',options: [{"square": "方形", "round": "圆形"}]},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '文本位置',attrName: 'label-position',options: [{"right": "右边", "left": "左边"}]},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "disabled", t: "禁用状态", c: true, u: false}, {n: "label-disabled",t: "禁用文本内容点击",c: true,u: false}]},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '所有单选框的选中状态颜色',tooltip: '颜色',attrName: 'checked-color'},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: ' 图标大小，默认单位为px',attrName: 'icon-size',extra: {min: 0, max: 20000}},
                    ],
                    "van-rate": [
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: ' 图标总数',attrName: ':count',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '图标大小，默认单位为px',attrName: ':size',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '图标间距，默认单位为px',attrName: 'gutter',extra: {min: 0, max: 20000}},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '选中时的颜色',tooltip: '颜色',attrName: 'color'},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '未选中时的颜色',tooltip: '颜色',attrName: 'void-color'},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '禁用时的颜色',tooltip: '颜色',attrName: 'disabled-color'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '选中时的图标名称或图片链接',attrName: 'icon',extend:true,extendKey:'icon'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '未选中时的图标名称或图片链接',attrName: 'void-icon',extend:true,extendKey:'icon'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '图标类名前缀，同 Icon 组件的 class-prefix 属性',attrName: 'icon-prefix'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "allow-half", t: "允许半选", c: true, u: false}, {n: "readonly",t: "只读状态",c: true,u: false}, {n: "disabled", t: "禁用评分", c: true, u: false}, {n: "touchable",t: "可以通过滑动手势选择评分",c: true,u: false,dv: true}]},
                    ],
                    "van-search": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '搜索框左侧文本',attrName: 'label'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '占位提示文字',attrName: 'placeholder'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '输入框左侧图标名称或图片链接',attrName: 'left-icon',extend:true,extendKey:'icon'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '输入框右侧图标名称或图片链接',attrName: 'right-icon',extend:true,extendKey:'icon'},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '搜索框形状',attrName: 'shape',options: [{"square": "方形", "round": "圆形"}]},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '输入框内容对齐方式',attrName: 'input-align',options: [{"center": "中心对齐", "right": "右边对齐", "left": "左边对齐"}]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '输入的最大字符数',attrName: 'maxlength',extra: {min: 0, max: 20000}},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "clearable", t: "启用清除控件", c: true, u: false, dv: true}, {n: "autofocus",t: "自动聚焦，iOS 系统不支持该属性",c: true,u: false}, {n: "show-action", t: "在搜索框右侧显示取消按钮", c: true, u: false}, {n: "action-text",t: "取消按钮文字",c: true,u: false,dv: true},]},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "disabled", t: "禁用输入框", c: true, u: false}, {n: "readonly",t: "将输入框设为只读",c: true,u: false}, {n: "error", t: "将输入内容标红", c: true, u: false}]},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '搜索框外部背景色',tooltip: '颜色',attrName: 'background'},
                    ],
                    "van-slider": [
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '当前进度百分比',attrName: 'value',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '最大值',attrName: ':max',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '最小值',attrName: ':min',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '步长',attrName: ':step',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '进度条高度，默认单位为px',attrName: 'bar-height',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '滑块按钮大小，默认单位为px',attrName: 'button-size',extra: {min: 0, max: 20000}},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '进度条激活态颜色',tooltip: '颜色',attrName: 'active-color'},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '进度条非激活态颜色',tooltip: '颜色',attrName: 'inactive-color'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "disabled", t: "禁用滑块", c: true, u: false}, {n: "vertical",t: "垂直展示",c: true,u: false},]},
                    ],
                    "van-stepper": [
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '最小值',attrName: 'min',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '最大值',attrName: 'max',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '初始值，当 v-model 为空时生效',attrName: 'default-value',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '步长，每次点击时改变的值',attrName: 'step',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '标识符，可以在change事件回调参数中获取',attrName: 'name',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '输入框宽度，默认单位为px',attrName: 'input-width',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '按钮大小以及输入框高度，默认单位为px',attrName: 'button-size',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '固定显示的小数位数',attrName: ':decimal-length',extra: {min: 0, max: 20000}},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "integer", t: "只允许输入整数", c: true, u: false}, {n: "disabled",t: "禁用步进器",c: true,u: false}, {n: "disabled-plus", t: "禁用增加按钮", c: true, u: false}, {n: "disabled-minus",t: "禁用减少按钮",c: true,u: false}, {n: "disabled-input", t: "禁用输入框", c: true, u: false},]},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "async-change", t: "开启异步变更，开启后需要手动控制输入值", c: true, u: false}, {n: "show-plus",t: "显示增加按钮",c: true,u: false,dv: true}, {n: "show-minus", t: "显示减少按钮", c: true, u: false, dv: true}, {n: "long-press",t: "开启长按手势",c: true,u: false,dv: true}]}
                    ],
                    "van-switch": [
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'打开时对应的值',attrName:'active-value'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'关闭时对应的值',attrName:'inactive-value'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "loading", t: "加载状态", c: true, u: false}, {n: "disabled",t: "禁用状态",c: true,u: false}]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '开关尺寸，默认单位为px',attrName: 'size',extra: {min: 0, max: 20000}},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '打开时的背景色',tooltip: '颜色',attrName: 'active-color'},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '关闭时的背景色',tooltip: '颜色',attrName: 'inactive-color'},
                    ],
                    "van-uploader": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '允许上传的文件类型',attrName: 'accept'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '上传区域文字提示',attrName: 'upload-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '预览图裁剪模式，可选值见 Image 组件',attrName: 'image-fit'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '上传区域图标名称或图片链接',attrName: 'upload-icon',extend:true,extendKey:'icon'},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '图片选取模式',attrName: 'capture',options: [{"camera": "照相机"}]},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '文件读取结果类型',attrName: 'result-type',options: [{"file": "文件", "text": "文本", "dataUrl": "数据库"}]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: ' 标识符，可以在回调函数的第二项参数中获取',attrName: 'name',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '预览图和上传区域的尺寸，默认单位为px',attrName: 'preview-size',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '文件大小限制，单位为byte',attrName: 'max-size',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '文件上传数量限制',attrName: ':max-count',extra: {min: 0, max: 20000}},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "preview-image",t: "在上传完成后展示预览图",c: true,u: false,dv: true}, {n: "preview-full-image",t: "在点击预览图后展示全屏图片预览",c: true,u: false,dv: true}, {n: "multiple", t: "开启图片多选，部分安卓机型不支持", c: true, u: false}, {n: "disabled",t: "禁用文件上传",c: true,u: false}, {n: "deletable", t: "展示删除按钮", c: true, u: false, dv: true},]},
                    ],
                    "van-action-sheet": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '顶部标题',attrName: 'title'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '取消按钮文字',attrName: 'cancel-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '选项上方的描述信息',attrName: 'description'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '关闭图标名称或图片链接',attrName: 'close-icon',extend:true,extendKey:'icon'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '指定挂载的节点',attrName: 'get-container'},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '动画时长，单位秒',attrName: 'duration',extra: {min: 0, max: 20000}},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "round", t: "显示圆角", c: true, u: false, dv: true}, {n: "overlay",t: "显示遮罩层",c: true,u: false,dv: true}, {n: "lock-scroll", t: "锁定背景滚动", c: true, u: false, dv: true}, {n: "lazy-render",t: "在显示弹层时才渲染节点",c: true,u: false,dv: true},]},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "close-on-popstate",t: "在页面回退时自动关闭",c: true,u: false}, {n: "close-on-click-action",t: "在点击选项后关闭",c: true,u: false}, {n: "close-on-click-overlay",t: "在点击遮罩层后关闭",c: true,u: false,dv: true}, {n: "safe-area-inset-bottom", t: "开启底部安全区适配", c: true, u: false, dv: true},]},
                    ],
                    "van-overlay": [
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: 'z-index 层级',attrName: 'z-index',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '动画时长，单位秒',attrName: 'duration',extra: {min: 0, max: 20000}},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '自定义类名',attrName: 'class-name'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '自定义样式',attrName: 'custom-style'},
                    ],
                    "van-pull-refresh": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '下拉过程提示文案',attrName: 'pulling-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '释放过程提示文案',attrName: 'loosing-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '加载过程提示文案',attrName: 'loading-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '刷新成功提示文案',attrName: 'success-text'},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '刷新成功提示展示时长(ms)',attrName: 'success-duration',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '动画时长',attrName: 'animation-duration',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '顶部内容高度',attrName: ':head-height',extra: {min: 0, max: 20000}},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "disabled", t: "禁用下拉刷新", c: true, u: false, dv: true},]},
                    ],
                    "van-dialog": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '标题',attrName: 'title'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '文本内容，支持通过\n换行',attrName: 'message'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '确认按钮文案',attrName: 'confirm-button-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '取消按钮文案',attrName: 'cancel-button-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '自定义遮罩层类名',attrName: 'overlay-class'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '关闭前的回调函数',attrName: 'before-close'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '动画类名，等价于 transtion 的name属性',attrName: 'transition'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '指定挂载的节点',attrName: 'get-container'},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '弹窗宽度，默认单位为px',attrName: 'width',extra: {min: 0, max: 20000}},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "show-confirm-button",t: "展示确认按钮",c: true,u: false,dv: true}, {n: "show-cancel-button", t: "展示取消按钮", c: true, u: false}, {n: "overlay",t: "展示遮罩层",c: true,u: false,dv: true},]},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "close-on-popstate",t: "在页面回退时自动关闭",c: true,u: false}, {n: "close-on-click-overlay", t: "在点击遮罩层后关闭弹窗", c: true, u: false}, {n: "lazy-render",t: "在显示弹层时才渲染节点",c: true,u: false,dv: true}, {n: "lock-scroll", t: "锁定背景滚动", c: true, u: false, dv: true},]},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '确认按钮颜色',tooltip: '颜色',attrName: 'confirm-button-color'},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '取消按钮颜色',tooltip: '颜色',attrName: 'cancel-button-color'},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '内容对齐方式',attrName: 'message-align',options: [{"center": "中心对齐", "right": "右边对齐", "left": "左边对齐"}]},
                    ],
                    "van-dropdown-menu": [
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '菜单标题和选项的选中态颜色',tooltip: '颜色',attrName: 'active-color'},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '菜单展开方向',attrName: 'direction',options: [{"up": "向上", "down": "向下"}]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '菜单栏 z-index 层级',attrName: 'z-index',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '动画时长，单位秒',attrName: 'duration',extra: {min: 0, max: 20000}},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "overlay",t: "显示遮罩层",c: true,u: false,dv: true}, {n: "close-on-click-overlay",t: "在点击遮罩层后关闭菜单",c: true,u: false,dv: true}, {n: "close-on-click-outside", t: "在点击外部元素后关闭菜单", c: true, u: false, dv: true},]},
                    ],
                    "van-dropdown-item": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '菜单项标题',attrName: 'title'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '标题额外类名',attrName: 'title-class'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '指定挂载的节点',attrName: 'get-container'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "disabled", t: "禁用菜单", c: true, u: false, dv: true},]},
                    ],
                    "van-loading": [
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '颜色',tooltip: '颜色',attrName: 'color'},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '类型',attrName: 'type',options: [{"spinner": "旋转", "circular": "圆形"}]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '加载图标大小，默认单位为px',attrName: 'size',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '文字大小，默认单位为px',attrName: 'text-size',extra: {min: 0, max: 20000}},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "vertical", t: "垂直排列图标和文字内容", c: true, u: false},]},
                    ],
                    /*weipeng*/
                    "van-collapse": [
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "accordion", t: "开启手风琴模式", c: true, u: false}, {n: "border",t: "显示外边框",c: true,u: false,dv: true}]},
                    ],
                    "van-collapse-item": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '唯一标识符，默认为索引值',attrName: 'name'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '标题栏左侧图标名称或图片链接',attrName: 'icon',extend:true,extendKey:'icon'},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '标题栏大小',attrName: 'size',options: [{"large": "大的"}]},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '标题栏左侧内容',attrName: 'title'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '标题栏右侧内容',attrName: 'value'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '标题栏描述信息',attrName: 'label'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "border", t: "显示内边框", c: true, u: false, dv: true}, {n: "is-link ",t: "展示标题栏右侧箭头并开启点击反馈",c: true,u: false,dv: true}, {n: "disabled", t: "禁用面板", c: true, u: false}]},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '左侧标题额外类名',attrName: 'title-class'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '右侧内容额外类名',attrName: 'value-class'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '描述信息额外类名',attrName: 'label-class'},
                    ],
                    "van-count-down": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '时间格式',attrName: 'format'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "auto-start", t: "自动倒计时", c: true, u: false, dv: true}, {n: "millisecond",t: "开启毫秒级渲染",c: true,u: false,dv: false}]},
                    ],
                    "van-divider": [
                        {type: this.type.TEXT, clearAttr: true, oneLine: true, change: this.change.TEXT, title: '文本'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "dashed", t: "使用虚线", c: true, u: false, dv: false}, {n: "hairline",t: "使用 0.5px 线",c: true,u: false,dv: true}]},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '内容位置',attrName: 'content-position',options: [{"left": "左边", "center": "中间", "right": "右边",}]},
                    ],
                    "van-list": [
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "error", t: "加载失败", c: true, u: false}]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '滚动条与底部距离小于 offset 时触发load事件',attrName: ':offset',extra: {min: 0, max: 20000}},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '加载过程中的提示文案',attrName: 'loading-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '加载完成后的提示文案',attrName: 'finished-text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '加载失败后的提示文案',attrName: 'error-text'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "immediate-check", t: "在初始化时立即执行滚动位置检查", c: true, u: false, dv: true}]},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '滚动触发加载的方向',attrName: 'direction',options: [{"up": "上", "down": "下"}]},
                    ],
                    "van-notice-bar": [
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '通知栏模式',attrName: 'mode',options: [{"closeable": "关闭", "link": "连接"}]},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '通知文本内容',attrName: 'text'},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '文本颜色',tooltip: 'color:文本颜色',attrName: 'color'},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '滑动条背景',tooltip: 'background：滑动条背景',attrName: 'background'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '左侧图标名称或图片链接',attrName: 'left-icon',extend:true,extendKey:'icon'},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '动画延迟时间 (s)',attrName: ':delay',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '滚动速率 (px/s)',attrName: ':speed',extra: {min: 0, max: 20000}},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "scrollable", t: "在长度溢出时滚动播放", c: true, u: false, dv: true}, {n: "wrapable",t: "开启文本换行，只在禁用滚动时生效",c: true,u: false,dv: false}]},
                    ],
                    "van-panel": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '标题',attrName: 'title'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '描述',attrName: 'desc'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',attrName: 'status'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '标题左侧图标名称或图片链接',attrName: 'icon',extend:true,extendKey:'icon'},
                    ],
                    "van-progress": [
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '进度百分比',attrName: ':percentage',extra: {min: 0, max: 100}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '进度条粗细，默认单位为px',attrName: ':stroke-width',extra: {min: 0, max: 20000}},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '进度条颜色',tooltip: 'color:进度条颜色',attrName: 'color'},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '轨道颜色',tooltip: 'track-color:轨道颜色',attrName: 'track-color'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '进度文字内容',attrName: 'pivot-text'},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '进度文字背景色',tooltip: 'pivot-color:进度文字背景色',attrName: 'pivot-color'},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '进度文字颜色',tooltip: 'text-color:进度文字颜色',attrName: 'text-color'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "inactive", t: "置灰", c: true, u: false}, {n: "millisecondshow-pivot",t: "显示进度文字",c: true,u: false,dv: true}]},
                    ],
                    "van-skeleton": [
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '段落占位图行数',attrName: ':row',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '段落占位图宽度，可传数组来设置每一行的宽度',attrName: ':row-width',extra: {min: 0, max: 100}},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "title", t: "显示标题占位图", c: true, u: false}, {n: "avatar",t: "显示头像占位图",c: true,u: false}, {n: "loading", t: "显示骨架屏", c: true, u: false, dv: true}, {n: "animate",t: "开启动画",c: true,u: false,dv: true}]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '标题占位图宽度',attrName: ':title-width',extra: {min: 0, max: 100}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '头像占位图大小',attrName: ':avatar-size',extra: {min: 0, max: 100}},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '头像占位图形状',attrName: 'avatar-shape',options: [{"square": "方形", "round": "圆形"}]},
                    ],
                    "van-steps": [
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '显示方向',attrName: 'direction',options: [{"horizontal": "水平", "vertical": "竖直"}]},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '激活状态颜色',tooltip: 'active-color:激活状态颜色',attrName: 'active-color'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '激活状态底部图标',attrName: 'active-icon',extendKey: "icon",extend: true},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '未激活状态底部图标',attrName: 'inactive-icon',extendKey: "icon",extend: true},
                    ],
                    "van-step": [
                        {type: this.type.TEXT, clearAttr: true, oneLine: true, change: this.change.TEXT, title: '文本'},
                    ],
                    "van-sticky": [
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '吸顶时与顶部的距离',attrName: ':offset-top',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '吸顶时的 z-index',attrName: ':z-index',extra: {min: 0, max: 20000}},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '容器对应的 HTML 节点',attrName: ':container'},
                    ],
                    "van-swipe": [
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '自动轮播间隔',attrName: ':autoplay',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '动画时长',attrName: ':duration',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '初始位置索引值',attrName: ':initial-swipe',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '滑块宽度',attrName: ':width',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '滑块高度',attrName: ':height',extra: {min: 0, max: 20000}},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "loop", t: "开启循环播放", c: true, u: false, dv: true}, {n: "show-indicators",t: "显示指示器",c: true,u: false,dv: true}, {n: "vertical", t: "纵向滚动", c: true, u: false}, {n: "touchable",t: "可以通过手势滑动",c: true,u: false,dv: true}, {n: "stop-propagation", t: "阻止滑动事件冒泡", c: true, u: false, dv: true}]},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '指示器颜色',tooltip: 'indicator-color:指示器颜色',attrName: 'indicator-color'},
                    ],
                    "van-tag": [
                        {type: this.type.TEXT, clearAttr: true, oneLine: true, change: this.change.TEXT, title: '文本'},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '类型',attrName: 'type',options: [{"primary": "主要标签","success": "成功标签","danger": "危险标签","warning": "警告标签","default": "默认标签"}]},
                        {type: this.type.SELECT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '大小',attrName: 'size',options: [{"large": "大的", "medium": "中等的"}]},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '标签颜色',tooltip: 'color:标签颜色',attrName: 'color'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "plain", t: "空心样式", c: true, u: false}, {n: "round",t: "圆角样式",c: true,u: false}, {n: "mark", t: "标记样式", c: true, u: false}]},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '文本颜色',tooltip: 'text-color:文本颜色',attrName: 'text-color'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "closeable", t: "可关闭标签", c: true, u: false}]},
                    ],
                    "van-grid": [
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '列数',attrName: ':column-num',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '图标大小，默认单位为px',attrName: ':icon-size',extra: {min: 0, max: 20000}},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '格子之间的间距，默认单位为px',attrName: ':gutter',extra: {min: 0, max: 20000}},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "border", t: "显示边框", c: true, u: false, dv: true}, {n: "center",t: "将格子内容居中显示",c: true,u: false,dv: true}, {n: "square", t: "将格子固定为正方形", c: true, u: false}, {n: "clickable",t: "开启格子点击反馈",c: true,u: false}]},
                    ],
                    "van-grid-item": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '文字',attrName: 'text'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '图标名称或图片链接',attrName: 'icon',extend:true,extendKey:'icon'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '图标类名前缀',attrName: 'icon-prefix'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "dot", t: "显示图标右上角小红点", c: true, u: false}]},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '图标右上角徽标的内容',attrName: 'badge'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '图标右上角徽标的内容（已废弃，请使用 badge 属性',attrName: 'info'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '点击后跳转的链接地址',attrName: 'url'},
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '点击后跳转的目标路由对象',attrName: 'to'},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "replace", t: "在跳转时替换当前页面历史", c: true, u: false}]},
                    ],
                    "van-index-bar": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '索引字符列表',attrName: 'index-list'},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: 'z-index 层级',attrName: ':z-index',extra: {min: 0, max: 20000}},
                        {type: this.type.CHECKBOX,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '状态',options: [{n: "sticky", t: "开启锚点自动吸顶", c: true, u: false, dv: true}]},
                        {type: this.type.SLIDER,clearAttr: true,oneLine: false,change: this.change.ATTR,title: '锚点自动吸顶时与顶部的距离',attrName: ':sticky-offset-top',extra: {min: 0, max: 20000}},
                        {type: this.type.COLOR_PICKER,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '索引字符高亮颜色',tooltip: 'highlight-color:索引字符高亮颜色',attrName: 'highlight-color'},
                    ],
                    "van-index-anchor": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '索引字符',attrName: 'index'},
                    ]
                    ,"a":[
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
                }},
            {
                title:"变量",
                active:false,/*默认聚焦*/
                width:"50%",
                content:{
                    "van-password-input":[
                       {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'密码值',    attrName:'value'},
                    ],
                     "van-field":[
                       {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'当前输入的值',attrName:'v-model'},
                    ],
                    "van-datetime-picker":[
                       {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'当前日期',attrName:'v-model'},
                       {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'最小日期',attrName:':min-date'},
                       {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'最大日期',attrName:':min-date'},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'可选的最小小时',attrName:':min-hour',extra:{min:0,max:23}},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'可选的最大小时',attrName:':max-hour',extra:{min:0,max:23}},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'可选的最小分钟',attrName:':min-minute',extra:{min:0,max:59}},
                       {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'可选的最大分钟',attrName:':max-minute',extra:{min:0,max:59}},
                    ],
                    //单元格 "van-cell"
                    "van-cell":[
                        {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'左侧标题额外样式',    attrName:'title-style'},
                        {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'左侧标题额外类名',    attrName:'title-class'},
                        {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'右侧内容额外类名',    attrName:'value-class'},
                        {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'描述信息额外类名',    attrName:'label-class'},
                    ],
//弹出层
                    "van-popup":[
                        {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'自定义遮罩层样式',    attrName:'overlay-style'},
                    ],
//日历
                    "van-calendar":[
                        {type:this.type.TEXT,    clearAttr:true,    oneLine:true,    change:this.change.ATTR,    title:'日历标题',    attrName:'close-icon',extend:true,extendKey:'icon'},
                    ],
                    //地址列表
                    "van-address-list":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'当前选中地址的 id',attrName:'v-model'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'地址列表',attrName:':list'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'不可配送地址列表',attrName:':disabled-list'},
                    ],
//地址编辑
                    "van-address-edit":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'地区列表',attrName:':area-list'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'收货人信息初始值',attrName:'address-info'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'详细地址搜索结果',attrName:':search-result'},
                    ],
//联系人列表
                    "van-contact-list":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'联系人列表',attrName:':list'}
                    ],
//联系人编辑
                    "van-contact-edit":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'联系人信息',attrName:':contact-info'},
                    ],
//Coupon 优惠券选择器   单元格
                    "van-coupon-cell":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'可用优惠券列表',attrName:':coupons'},
                    ],
//Coupon 优惠券选择器  列表
                    "van-coupon-list":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'可用优惠券列表',attrName:':coupons'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'不可用优惠券列表',attrName:':disabled-coupons'},
                    ],
//Pagination分页
                    "van-pagination":[
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'当前页码',attrName:'v-model',extra:{min:0,max:20000}},
                    ],
//Sku 商品规格
                    "van-sku":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态',options:[{n:"v-model",t:"显示sku",c:true,u:false}]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'商品sku数据',attrName:':sku'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'商品信息',attrName:':goods'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'步进器相关自定义配置',attrName:':custom-stepper-config'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'留言相关配置',attrName:':message-config'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'商品属性',attrName:'properties'},
                    ],
//SwitchCell 开关单元格
                    "van-switch-cell":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'开关状态',attrName:'v-model'},
                    ],
                    //GoodsAction 商品导航
                    "van-goods-action-icon":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'图标额外类名',attrName:'icon-class'},
                    ],
//TreeSelect 分类选择
                    "van-tree-select":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'分类显示所需的数据',attrName:':items'},
                    ],
                    //Tabbar 标签栏
                    "van-tabbar":[
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'当前选中标签的名称或索引值',attrName:'v-model',extra:{min:0,max:20000}},
                    ],
//Tab 标签页
                    "van-tabs":[
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'绑定当前选中标签的标识符',attrName:'v-model',extra:{min:0,max:20000}},
                    ],
                    "van-tab":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义标题样式',attrName:'title-style'},
                    ],
//Sidebar 侧边导航
                    "van-sidebar":[
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'当前导航项的索引',attrName:'v-model',extra:{min:0,max:20000}},
                    ],
//省市区选择
                    "van-area":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'省市区数据，格式见下方',attrName:':area-list'},
                    ],
//Radio 单选框
                    "van-radio-group":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'当前选中项的标识符',attrName:'v-model'},
                    ],

//Rate 评分
                    "van-rate":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'当前分值',attrName:'v-model'},
                    ],
                    "van-search":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'当前值',attrName:'v-model'},
                    ],
                    "van-slider":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'当前值',attrName:'v-model'},
                    ],
//Stepper 步进器
                    "van-stepper":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'当前输入的值',attrName:'v-model'},
                    ],
//Switch 开关
                    "van-switch":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'开关选中状态',attrName:'v-model'},

                    ],
//Uploader 文件上传
                    "van-uploader":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'文件列表',attrName:'v-model'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'文件读取完成后的回调函数',attrName:':after-read'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'文件读取前的回调函数',tooltip:"返回false可终止文件读取,支持返回Promise",attrName:':before-read'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'文件删除前的回调函数',tooltip:"返回false可终止文件读取，支持返回Promise",attrName:':before-delete'},
                    ],
//ActionSheet 上拉菜单
                    "van-action-sheet":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'是否显示',attrName:'v-model'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'菜单选项',attrName:':actions'},
                    ],
                    "van-overlay":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'是否显示',attrName:':show'},
                    ],
//Overlay 遮罩层
                    "van-button":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义样式',attrName:'custom-style'},
                    ],
//PullRefresh 下拉刷新
                    "van-pull-refresh":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态',options:[{n:"v-model",t:"处于加载中状态",c:true,u:false,dv:true},]},
                    ],
// Dialog 弹出框
                    "van-dialog":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态',options:[{n:"v-model",t:"显示弹窗",c:true,u:false},]},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义遮罩层样式',attrName:'overlay-style'},
                    ],
                    "van-count-down": [
                        {type: this.type.TEXT,clearAttr: true,oneLine: true,change: this.change.ATTR,title: '倒计时时长，单位毫秒',attrName: ':time'},
                    ],
////DropdownMenu 下拉菜单
                    "van-dropdown-item":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'值',attrName:'v-model'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'选项数组',attrName:':options'},
                    ],
                    /*weipeng*/
                    "van-collapse":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'当前展开面板的 name',attrName:'v-model'},
                    ],
                    "van-list":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'状态' ,options:[{n:"v-model",t:"处于加载状态",c:true,u:false},{n:"finished",t:"已加载完成",c:true,u:false}]},
                    ],
                    "van-steps":[
                        {type:this.type.SLIDER,clearAttr:true,oneLine:false,change:this.change.ATTR,title:'当前步骤',attrName:':active',extra:{min:0,max:20000}},
                    ],
                    "van-image-preview":[ {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'自定义类名',attrName:'class-name'},
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
