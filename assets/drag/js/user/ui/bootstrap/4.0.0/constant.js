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
            link:["assets/drag/ui/bootstrap/4.0.0/css/bootstrap.min.css","assets/drag/ui/magicalcoder/1.1.0/magicalcoder.css"],
            //预览页<head></head>内的脚本地址
            headJs:[],
            //预览页<body></body>内的脚本地址
            bodyJs:[
                "assets/drag/js/lib/jquery-2.0.0.min.js",
                "assets/drag/js/lib/echarts/4.6.0/echarts.min.js",
                "assets/drag/js/lib/echarts/datatool.min.js",
                "assets/drag/ui/magicalcoder/1.1.0/magicalcoder.js",
                "assets/drag/ui/bootstrap/4.0.0/js/popper.min.js",
                "assets/drag/ui/bootstrap/4.0.0/js/bootstrap.min.js"
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

    this.UI_TYPE = 9;
    this.UI_NAME = "bootstrap4";
    this.UI_FRAME = "jquery";
    /*响应式布局*/
    this.responsive = {
        SM:"sm",
        MD:"md",
        LG:"lg",
        XL:"xl",
    }
    this.responsiveList = [
        {id:this.responsive.SM,name:"手机",width:"576px",height:"100%",icon:"assets/drag/img/header/phone1.png"},
        {id:this.responsive.MD,name:"平板",width:"973px",height:"100%",icon:"assets/drag/img/header/paid1.png"},
        {id:this.responsive.LG,name:"笔记本",width:"1140px",height:"100%",icon:"assets/drag/img/header/notebook2.png"},
        {id:this.responsive.XL,name:"电脑",width:"100%",height:"100%",icon:"assets/drag/img/header/pc1.png",checked:true},
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
            name:"示例",
            children:[
                {"name":"搜索","icon":"assets/drag/img/left/search1.png","html":"<div class='input-group mb-3'><input type='text' class='form-control' aria-label='' placeholder='请输入关键词'><div class='input-group-append'><button type='button' class='btn btn-primary'>搜索</button></div></div>"},
                {"name":"更多搜索","icon":"assets/drag/img/left/search1.png","html":"<div class='input-group'><input type='text' class='form-control' aria-label='Text input with segmented dropdown button' placeholder='请输入关键词'><div class='input-group-append'><button type='button' class='btn btn-outline-primary'>更多搜索</button><button type='button' class='btn btn-outline-primary dropdown-toggle dropdown-toggle-split' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><span class='sr-only'>下拉</span></button><div class='dropdown-menu'><a class='dropdown-item' href='#'>链接1</a><a class='dropdown-item' href='#'>链接2</a><div role='separator' class='dropdown-divider'></div><a class='dropdown-item' href='#'>链接3</a></div></div></div>"},
                {"name":"表单示例","icon":"assets/drag/img/left/menu1.png","html":"<form class=''><div class='row'><div class='col-md-1 col-lg-1 col-xl-1 col-sm-12 text-left align-self-md-center'>                                                输入框<i class='magical-coder-layui-tmp-pane' style='color: rgb(231, 24, 24);'>*</i></div><div class='col-md-11 col-lg-11 col-xl-11 col-sm-12'><input type='text' class='form-control' aria-describedby='emailHelp' placeholder='请输入'><small class='form-text text-muted'>请使用英文字符，不超过20个字符长度</small></div></div><div class='row mt-sm-2'><div class='col-md-1 col-lg-1 col-xl-1 col-sm-12 text-left align-self-md-center'>                                                密码框                                            </div><div class='col-md-11 col-lg-11 col-xl-11 col-sm-12'><input type='text' class='form-control' aria-describedby='passwordHelp' placeholder='请输入密码' origin-type='password'></div></div><div class='row mt-sm-2'><div class='col-md-1 col-lg-1 col-xl-1 col-sm-12 text-left align-self-md-center'>                                                下拉框                                            </div><div class='col-md-11 col-lg-11 col-xl-11 col-sm-12'><select class='form-control'><option value=''>请选择</option><option value='2'>2</option><option selected='' value='1'>1</option></select></div></div><div class='row mt-sm-2'><div class='col-md-1 col-lg-1 col-xl-1 col-sm-12 text-left align-self-md-center'>                                                单选                                            </div><div class='col-md-11 col-sm-12 col-lg-5 col-xl-5'><span class='form-check form-check-inline'><input type='radio' class='form-check-input' value='1' name='danxuan'><label class='form-check-label'>选我</label></span><span class='form-check form-check-inline'><input type='radio' class='form-check-input' value='1' name='danxuan'><label class='form-check-label'>选我</label></span><span class='form-check form-check-inline'><input type='radio' class='form-check-input' value='1' name='danxuan'><label class='form-check-label'>选我</label></span></div><div class='col-md-1 col-lg-1 col-xl-1 col-sm-12 text-left align-self-md-center'>                                                复选                                            </div><div class='col-md-11 col-sm-12 col-lg-5 col-xl-5'><div class='form-check form-check-inline'><input type='checkbox' class='form-check-input' value='1'><label class='form-check-label'>选我</label></div><div class='form-check form-check-inline'><input type='checkbox' class='form-check-input' value='1'><label class='form-check-label'>选我</label></div><div class='form-check form-check-inline'><input type='checkbox' class='form-check-input' value='1'><label class='form-check-label'>选我</label></div></div></div><div class='row mt-sm-2'><div class='col-md-1 col-lg-1 col-xl-1 col-sm-12 text-left align-self-md-center'>                                                文件上传                                            </div><div class='col-md-11 col-lg-11 col-xl-11 col-sm-12'><input type='file' class='form-control-file'></div></div><div class='row mt-sm-2'><div class='col-md-1 col-lg-1 col-xl-1 col-sm-12 text-left align-self-md-center'>                                                文本                                            </div><div class='col-md-11 col-lg-11 col-xl-11 col-sm-12'><textarea class='form-control' rows='3'></textarea></div></div><div class='row mt-sm-2'><div class='col-md-1 col-lg-1 col-xl-1 col-sm-12 text-left align-self-md-center'><br></div><div class='col-md-11 col-lg-11 col-xl-11 col-sm-12 text-left'><button type='button' class='btn btn-primary'>提交</button><button type='reset' class='btn btn-primary btn-outline-primary ml-sm-2'>重置</button></div></div></form>"},
                {"name":"商品展示","icon":"assets/drag/img/left/demogoods1.png","html":"<div class='card mb-4 box-shadow'><img class='card-img-top' src='img.jpg'><div class='card-body'><p class='card-text'>                                                走过路过不要错过，这是一个商品的简单展示                                            </p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'><button type='button' class='btn btn-sm btn-outline-secondary'>查看</button><button type='button' class='btn btn-sm btn-outline-secondary'>编辑</button></div><small class='text-muted'>0.00</small></div></div></div>"},
                {"name":"列表展示","icon":"assets/drag/img/left/demolist1.png","html":"<ul class='list-group mb-3'><li class='list-group-item d-flex justify-content-between'><div class=''><h6 class='my-0'>苹果</h6><small class='text-muted'>这是一个苹果</small></div><span class='text-muted'>¥:1</span></li><li class='list-group-item d-flex justify-content-between bg-light'><div class='text-success'><h6 class='my-0'>菠萝</h6><small class=''>这是一个菠萝</small></div><span class='text-success'>¥:1</span></li><li class='list-group-item d-flex justify-content-between'><span>总价</span><strong class=''>¥:2</strong></li></ul>"},
                {"name":"登录框","icon":"assets/drag/img/left/demologin1.png","html":"<form class=''><h1 class='h3 mb-3 font-weight-normal'>请登录</h1><input type='email' class='form-control' placeholder='请输入您的用户名' required='' autofocus=''><input type='text' class='form-control' placeholder='请输入您的密码' required='' origin-type='password'><div class='form-check form-check-inline'><label class='form-check-label'><input type='checkbox' class='form-check-input' value='1'>记住我</label></div><a href='#' class='float-sm-right text-info' draggable='false'>忘记密码</a><button class='btn btn-lg btn-primary btn-block' type='submit'>登录</button><p class='mt-5 mb-3 text-muted text-sm-right'>                                            还没有账号，<a href='#' class='text-info' draggable='false'>立即注册</a></p></form>"},
            ]
        },
        {
            name:"固定容器",
            children:[
                {"name":"固定居中","icon":"assets/drag/img/left/wide1.png","html":"<div class='container'></div>"},
                {"name":"左右行列","icon":"assets/drag/img/left/around1.png","html":"<div class='row'><div class='col-sm-6'></div><div class='col-sm-6'></div></div>"},
                {"name":"上下行列","icon":"assets/drag/img/left/updown1.png","html":"<div class='row'><div class='col-sm-12'></div><div class='col-sm-12'></div><div class='col-sm-12'></div></div>"},
                {"name":"等比左右","icon":"assets/drag/img/left/around1.png","html":"<div class='row'><div class='col'></div><div class='col'></div><div class='col'></div></div>"},
                {"name":"五大方位","icon":"assets/drag/img/left/five1.png","html":"<div class='row'><div class='col-sm-12'></div><div class='col-sm-4'></div><div class='col-sm-4'></div><div class='col-sm-4'></div><div class='col-sm-12'></div></div>"},
                {"name":"自由定位","icon":"assets/drag/img/left/freedom1.png","html":"<div class='mc-ui-absolute-pane'></div>"},

            ]
        },
        {
            name:"自适应容器",
            children:[
                {"name":"自适应","icon":"assets/drag/img/left/self1.png","html":"<div class='container-fluid'></div>"},
                {"name":"左右行列","icon":"assets/drag/img/left/around1.png","html":"<div class='row'><div class='col-sm-12 col-lg-6'></div><div class='col-sm-12 col-lg-6'></div></div>"},
                {"name":"五大方位","icon":"assets/drag/img/left/five1.png","html":"<div class='row'><div class='col-lg-12'></div><div class='col-lg-4'></div><div class='col-lg-4'></div><div class='col-lg-4'></div><div class='col-lg-12'></div></div>"},

            ]
        },
        {
            name:"表单容器",
            children:[
                {"name":"表单","icon":"assets/drag/img/left/menu1.png","html":"<form class=''></form>"},
                {"name":"表单条目","icon":"assets/drag/img/left/clauses1.png","html":"<div class='form-group'></div>"},
                {"name":"标签","icon":"assets/drag/img/left/tag1.png","html":"<label>标签</label>"},
                {"name":"按钮组","icon":"assets/drag/img/left/btngroup1.png","html":"<div class='btn-group' role='group'></div>"},
                {"name":"输入框组","icon":"assets/drag/img/left/inputgroup1.png","html":"<div class='input-group mb-3'><div class='input-group-prepend'><span class='input-group-text'>$</span></div><input type='text' class='form-control' aria-label='' placeholder='请输入金额'><div class='input-group-append'><span class='input-group-text'>.00</span></div></div>"},

            ]
        },
        {
            name:"基础组件",
            children:[
                {"name":"输入框","icon":"assets/drag/img/left/import1.png","html":"<input type='text' class='form-control' aria-describedby='emailHelp'>"},
                {"name":"密码框","icon":"assets/drag/img/left/password1.png","html":"<input type='password' class='form-control' aria-describedby='passwordHelp'>"},
                {"name":"文本框","icon":"assets/drag/img/left/text1.png","html":"<textarea class='form-control' rows='3'></textarea>"},
                {"name":"单选框","icon":"assets/drag/img/left/choice1.png","html":"<span class='form-check form-check-inline'><label class='form-check-label'><input type='radio' name='_radioExample' class='form-check-input' value='1'>选我</label></span>"},
                {"name":"复选框","icon":"assets/drag/img/left/multiple1.png","html":"<div class='form-check form-check-inline'><label class='form-check-label'><input type='checkbox' class='form-check-input' value='1'>记住我</label></div>"},
                {"name":"下拉框","icon":"assets/drag/img/left/pull1.png","html":"<select class='form-control'><option value='1'>1</option><option value='2'>2</option></select>"},
                {"name":"多选下拉","icon":"assets/drag/img/left/pull1.png","html":"<select multiple='' class='form-control'><option value='1'>1</option><option value='2'>2</option></select>"},
                {"name":"超链接","icon":"assets/drag/img/left/url1.png","html":"<a href='/'>超链接</a>"},
                {"name":"文件上传","icon":"assets/drag/img/left/uploading1.png","html":"<input type='file' class='form-control-file'>"},
                {"name":"图片","icon":"assets/drag/img/left/photo1.png","html":"<img src='img.jpg' class='img-fluid'>"},
                {"name":"按钮","icon":"assets/drag/img/left/btn1.png","html":"<button type='button' class='btn btn-primary'>按钮</button>"},

            ]
        },
        {
            name:"高级组件",
            children:[
                {"name":"临时块","icon":"assets/drag/img/left/chunk1.png","html":"<div class='mc-tmp-pane'></div>"},
                {"name":"临时行","icon":"assets/drag/img/left/row1.png","html":"<span class='mc-tmp-pane'></span>"},
                {"name":"临时文字","icon":"assets/drag/img/left/fieldone1.png","html":"<i class='mc-tmp-pane'>*</i>"},
                {"name":"有序列表","icon":"assets/drag/img/left/aligned1.png","html":"<ul class='list-group list-group-flush'><li class='list-group-item'></li><li class='list-group-item'></li><li class='list-group-item'></li></ul>"},
                {"name":"链接列表","icon":"assets/drag/img/left/aligned1.png","html":"<div class='list-group'><a href='#' class='list-group-item list-group-item-action'>链接1</a><a href='#' class='list-group-item list-group-item-action'>链接2</a></div>"},
                {"name":"卡片","icon":"assets/drag/img/left/card1.png","html":"<div class='card'><div class='card-header'></div><div class='card-body'></div><div class='card-footer'></div></div>"},
                {"name":"表格","icon":"assets/drag/img/left/form1.png","html":"<table class='table'><thead><tr class=''><th class=''>网站</th><th class=''>主营</th><th class=''>说明</th></tr></thead><tbody><tr><td class=''></td><td class=''></td><td class=''></td></tr></tbody></table>"},
                {"name":"标题","icon":"assets/drag/img/left/title1.png","html":"<h2 class=''>标题</h2>"},
                {"name":"分隔线","icon":"assets/drag/img/left/line1.png","html":"<hr>"},
                {"name":"关闭按钮","icon":"assets/drag/img/left/btn1.png","html":"<button type='button' class='close' aria-label='Close'><span aria-hidden='true' class=''>×</span></button>"},
                {"name":"下拉按钮","icon":"assets/drag/img/left/btn1.png","html":"<span class='dropdown magicalcoder-tmp-wrap'><button class='btn btn-secondary dropdown-toggle' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>                                        更多                                    </button><div class='dropdown-menu'><a class='dropdown-item' href='#'>链接A</a><a class='dropdown-item' href='#'>链接B</a></div></span>"},
                {"name":"分页","icon":"assets/drag/img/left/paging1.png","html":"<nav aria-label='...'><ul class='pagination'><li class='page-item disabled'><span class='page-link'>上一页</span></li><li class='page-item'><a class='page-link' href='#'>1</a></li><li class='page-item active'><span class='page-link'>                                            2                                          </span></li><li class='page-item'><a class='page-link' href='#'>3</a></li><li class='page-item'><a class='page-link' href='#'>4</a></li><li class='page-item'><a class='page-link' href='#'>下一页</a></li></ul></nav>"},
                {"name":"进度条1","icon":"assets/drag/img/left/schedule1.png","html":"<div class='progress'><div class='progress-bar progress-bar-striped progress-bar-animated' role='progressbar' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100' style='width: 75%'></div></div>"},
                {"name":"进度条2","icon":"assets/drag/img/left/schedule1.png","html":"<div class='progress'><div class='progress-bar' role='progressbar' style='width: 25%;' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>25%</div></div>"},
                {"name":"警告","icon":"assets/drag/img/left/wide1.png","html":"<div class='alert alert-primary' role='alert'>                                        这是一段提示，欢迎访问 <a href='#' class='alert-link'>magicalcoder</a>,请用文字模式剪切连接                                    </div>"},
                {"name":"面包屑","icon":"assets/drag/img/left/accordion1.png","html":"<ol class='breadcrumb'><li class='breadcrumb-item'><a href='#'>列表页</a></li><li class='breadcrumb-item'><a href='#'>商品页</a></li><li class='breadcrumb-item active' aria-current='page'>鞋子</li></ol>"},
                {"name":"轮播","icon":"assets/drag/img/left/carousel1.png","html":"<div class='carousel slide' data-ride='carousel'><div class='carousel-inner'><div class='carousel-item active'></div><div class='carousel-item'></div><div class='carousel-item'></div></div><a class='carousel-control-prev' role='button' data-slide='prev'><span class='carousel-control-prev-icon' aria-hidden='true'></span><span class='sr-only'>上一个</span></a><a class='carousel-control-next' role='button' data-slide='next'><span class='carousel-control-next-icon' aria-hidden='true'></span><span class='sr-only'>下一个</span></a></div>"},

            ]
        },
        {
            name:"辅助",
            children:[
                {"name":"方形辅助","icon":"assets/drag/img/left/frame1.png","html":"<span class='badge badge-light'>8</span>"},
                {"name":"方形链接","icon":"assets/drag/img/left/frame1.png","html":"<a href='#' class='badge badge-light'>magicalcoder</a>"},
                {"name":"一段文字","icon":"assets/drag/img/left/p1.png","html":"<p class='form-text text-muted'>我是一段文字</p>"},
                {"name":"一行小字","icon":"assets/drag/img/left/smallline1.png","html":"<small class='form-text text-muted'>我是一行小字</small>"},
                {"name":"高亮文字","icon":"assets/drag/img/left/lightchar1.png","html":"<mark class=''>高亮文字</mark>"},
                {"name":"中划线","icon":"assets/drag/img/left/centerline1.png","html":"<del class=''>中划线</del>"},
                {"name":"下划线","icon":"assets/drag/img/left/underline1.png","html":"<u class=''>下划线</u>"},
                {"name":"小字","icon":"assets/drag/img/left/small1.png","html":"<small class=''>小字</small>"},
                {"name":"加粗","icon":"assets/drag/img/left/bold1.png","html":"<strong class=''>加粗字体</strong>"},
                {"name":"斜体","icon":"assets/drag/img/left/italic1.png","html":"<em class=''>斜体字体</em>"},
                {"name":"变量","icon":"assets/drag/img/left/variable1.png","html":"<var class=''>x</var>"}
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
        "mc-ui-absolute-pane":{name:"自由定位",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,assistDuplicate:false,duplicateAttr:[],        copy:true,       paste:true,assistDelete:true, canDelete:true          },
        "row":    {name:"行",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],        copy:true,       paste:false,assistDelete:true, canDelete:true, onlyChildren:this.rowColBuild().cols(),   assistAdd:true,addOneItems:[{"":[{html:"<div class='col-sm-6'></div>",focus:false}]}]          },
        "col":    {name:"等比列",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],        copy:true,       paste:false,assistDelete:true, canDelete:true, onlyChildren:['row']         },
        "mc-tmp-pane":{name:"临时区域",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],        copy:true,       paste:false,assistDelete:true, canDelete:true         },

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


        "div":    {primary:-1,name:"块",dragInto:true,  duplicate:true,duplicateAttr:["id"],assistDuplicate:true,       copy:true,      paste:true,  canDelete:true    },
        "span":    {primary:-1,name:"行内",dragInto:true,  duplicate:true,duplicateAttr:["id"],assistDuplicate:true,       copy:true,      paste:true,  canDelete:true    },
        "a":    {primary:0,name:"超链接",dragInto:false,  duplicate:true,duplicateAttr:[],       copy:true,      paste:false,  canDelete:true    },
        "i":    {primary:0,name:"图标文字",dragInto:false,  duplicate:true,duplicateAttr:[],       copy:true,      paste:false,  canDelete:true    },
        "p":    {name:"段落1",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,       paste:true,  canDelete:true    },
        "small":  {name:"小字",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:true,  canDelete:true    },
        "mark":   {name:"高亮",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:true,  canDelete:true    },
        "del":    {name:"中划线",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,    paste:true,  canDelete:true    },
        "u":      {name:"下划线",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,    paste:true,  canDelete:true    },
        "em":     {name:"斜体",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:true,  canDelete:true    },
        "var":     {name:"变量",dragInto:false,  duplicate:true,duplicateAttr:[],   copy:true,      paste:true,  canDelete:true    },
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
        
        "select":{name:"下拉框",treeExtraName:{attr:['id','name'],text:false},dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true,onlyChildren:["option"]},
        "option":{name:"下拉框条目",treeExtraName:{attr:['value'],text:true},dragInto:false,duplicate:true,duplicateAttr:["value"],  copy:true,      paste:false,    canDelete:true,onlyParents:["select"]},
        "form": {name:"表单容器",canZoom:true,assistZoom:true,   dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],         copy:true,      paste:true, assistDelete:true,   canDelete:true, assistAdd:true,addOneItems:[{"":[{html:"<div class='form-group'></div>",focus:false}]}]},
        "form-group":{name:"表单条目",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:true,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },
        "textarea":{name:"文本框",treeExtraName:{attr:['id','name'],text:false},dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true},
        "img":{name:"图片",treeExtraName:{attr:['id','name'],text:false},dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true},

        "type=text":{name:"输入框",treeExtraName:{attr:['id','name'],text:false},dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true},
        "type=radio":{name:"单选框",treeExtraName:{attr:['id','name','title'],text:false},dragInto:false,duplicate:true,duplicateAttr:["value"], copy:true,      paste:false,    canDelete:true,tmpWrapTag:'span'},
        "type=checkbox":{primary:0,name:"复选框",treeExtraName:{attr:['id','name','title'],text:false},dragInto:false,duplicate:true,duplicateAttr:["value"], copy:true,      paste:false,    canDelete:true,tmpWrapTag:'span'},
        "type=button":{primary:0,name:"按钮",treeExtraName:{attr:['id','name','title'],text:false},dragInto:false,duplicate:true,duplicateAttr:["id"], copy:true,      paste:false,    canDelete:true},
        "button":{primary:0,name:"按钮",treeExtraName:{attr:['id','name','title'],text:false},dragInto:false,duplicate:true,duplicateAttr:["id"], copy:true,      paste:false,    canDelete:true},
        "btn":{primary:0,name:"按钮",treeExtraName:{attr:['id','name','title'],text:false},dragInto:false,duplicate:true,duplicateAttr:["id"], copy:true,      paste:false,    canDelete:true},
        "type=file":{primary:0,name:"文件上传",treeExtraName:{attr:['id','name','title'],text:false},dragInto:false,duplicate:true,duplicateAttr:["id"], copy:true,      paste:false,    canDelete:true},

        "alert":    {name:"警告",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],        copy:true,       paste:false,assistDelete:true, canDelete:true},
        "badge":{name:"徽章",dragInto:false,duplicate:true, copy:true,      paste:false,    canDelete:true},
        "list-group-item":    {name:"列条目",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],        copy:true,       paste:false,assistDelete:true, canDelete:true},
        "btn-group":    {name:"按钮组",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],        copy:true,       paste:false,assistDelete:true, canDelete:true},
        "btn-group-vertical":    {name:"按钮组",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],        copy:true,       paste:false,assistDelete:true, canDelete:true},
        "input-group":    {name:"输入框组",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],        copy:true,       paste:false,assistDelete:true, canDelete:true},
        "input-group-prepend":    {name:"输入框组前置",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],        copy:true,       paste:false,assistDelete:true, canDelete:true},
        "input-group-append":    {name:"输入框组后置",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,assistDuplicate:true,duplicateAttr:[],        copy:true,       paste:false,assistDelete:true, canDelete:true},
        "input-group-text":    {name:"输入框组文字",canZoom:false,assistZoom:false,dragInto:false,      duplicate:true,assistDuplicate:true,duplicateAttr:[],        copy:true,       paste:false,assistDelete:true, canDelete:true},
        "card":          {name:"卡片",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },
        "card-header":          {name:"卡片头",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:true,    duplicate:false,assistDuplicate:false,                           copy:true,      paste:true,  canDelete:true    },
        "card-img-top":          {name:"卡片头图",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:false,    duplicate:false,assistDuplicate:false,                           copy:true,      paste:true,  canDelete:true    },
        "card-body":          {name:"卡片体",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:true,    duplicate:false,assistDuplicate:false,                           copy:true,      paste:true,  canDelete:true    },
        "card-text":          {name:"卡片文字",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },
        "card-footer":          {name:"卡片底部",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },

        "pagination":     {name:"分页",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:true,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },
        "page-item":     {name:"分页条目",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },
        "page-link":     {name:"页码链接",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },

        "progress":     {name:"进度",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },
        "progress-bar":     {name:"进度条",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },

        "alert":     {name:"警示",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:true,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },
        "alert-link":     {name:"警示链接",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },

        "breadcrumb":     {name:"面包屑",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:true,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true ,assistAdd:true,addOneItems:[{"":[{html:"<li class='breadcrumb-item'><a href='#'>面包屑</a></li>"}]}]},
        "breadcrumb-item":     {name:"面包屑条目",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:true,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },

        "carousel":     {name:"轮播",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:true,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },
        "carousel-item":     {name:"轮播条目",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:true,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },


        "nav":     {name:"导航",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },

        "list-group":     {name:"列表",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:true,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },
        "list-group-item":{name:"列表条目",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:true,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },
        "h2":{name:"二级标题",canZoom:true,assistZoom:true,treeExtraName:{attr:["id"]},   dragInto:true,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:true,  canDelete:true    },
        "hr":{name:"分隔符",canZoom:false,assistZoom:false,treeExtraName:{attr:["id"]},   dragInto:false,    duplicate:false,assistDuplicate:false,                           copy:true,      paste:false,  canDelete:true    },
        "label":{name:"标签",canZoom:false,assistZoom:false,treeExtraName:{attr:["id"]},   dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:false,  canDelete:true    },
        "badge":{name:"徽章",canZoom:false,assistZoom:false,treeExtraName:{attr:["id"]},   dragInto:false,    duplicate:true,assistDuplicate:true,                           copy:true,      paste:false,  canDelete:true    },
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
                width:"50%",
                content:{
                    "mc-ui-absolute-pane":[],
                    "mc-root":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'自由定位',options:[{"c":"mc-ui-absolute-pane","n":"","t":"是否开启","u":""}]}
                    ],
                    "row":this.rowColBuild().rightCommonConfig(),
                    "alert":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'主题',options:[{'alert-primary':'主要-蓝'},{'alert-secondary':'次要-灰'},{'alert-success':'成功-绿'},{'alert-danger':'危险-红'},{'alert-warning':'警告-橘黄'},{'alert-info':'信息-淡绿'},{'alert-light':'高亮-淡白'},{'alert-dark':'暗黑'},{'alert-white':'白色'}]},
                    ],
                    "badge":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"badge-pill","n":"","t":"圆角","u":""}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'主题',options:[{'badge-primary':'主要-蓝'},{'badge-secondary':'次要-灰'},{'badge-success':'成功-绿'},{'badge-danger':'危险-红'},{'badge-warning':'警告-橘黄'},{'badge-info':'信息-淡绿'},{'badge-light':'高亮-淡白'},{'badge-dark':'暗黑'},{'badge-white':'白色'}]},
                    ],
                    "list-group-item":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"active","n":"","t":"激活","u":""}]},
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'主题',options:[{'list-group-item-primary':'主要-蓝'},{'list-group-item-secondary':'次要-灰'},{'list-group-item-success':'成功-绿'},{'list-group-item-danger':'危险-红'},{'list-group-item-warning':'警告-橘黄'},{'list-group-item-info':'信息-淡绿'},{'list-group-item-light':'高亮-淡白'},{'list-group-item-dark':'暗黑'},{'list-group-item-white':'白色'}]},
                    ],
                    "btn-group":[
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'尺寸',options:[{'btn-group-lg':'大'},{'btn-group-sm':'小'}]},
                    ],
                    "btn-group-vertical":[
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'尺寸',options:[{'btn-group-lg':'大'},{'btn-group-sm':'小'}]},
                    ],
                    "dropdown-item":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"active","n":"","t":"激活","u":""}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"disabled","n":"","t":"禁用","u":""}]},
                    ],
                    "nav-link":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"active","n":"","t":"激活","u":""}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"disabled","n":"","t":"禁用","u":""}]},

                    ],
                    "breadcrumb-item":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"active","n":"","t":"激活","u":""}]},
                    ],
                    "page-item":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"active","n":"","t":"激活","u":""}]},
                    ],
                    "carousel-item":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"active","n":"","t":"激活","u":""}]},
                    ],
                    "carousel-item-right":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"active","n":"","t":"激活","u":""}]},
                    ],
                    "carousel-item-left":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"active","n":"","t":"激活","u":""}]},
                    ],
                    "custom-control-input":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"active","n":"","t":"激活","u":""}]},
                    ],
                    "sr-only-focusable":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"active","n":"","t":"激活","u":""}]},
                    ],
                    "fieldset":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"disabled","n":"","t":"禁用","u":""}]},
                    ],
                    "btn-link":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"disabled","n":"","t":"禁用","u":""}]},
                    ],
                    "custom-control-input":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"disabled","n":"","t":"禁用","u":""}]},
                    ],
                    "custom-select":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"disabled","n":"","t":"禁用","u":""}]},
                    ],
                    "navbar-toggler":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"disabled","n":"","t":"禁用","u":""}]},
                    ],
                    "page-link":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"disabled","n":"","t":"禁用","u":""}]},
                    ],
                    "age-item":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },

                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"disabled","n":"","t":"禁用","u":""}]},
                    ],
                    "close":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"disabled","n":"","t":"禁用","u":""}]},
                    ],
                    "form-control":[
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'尺寸',options:[{'form-control-lg':'大'},{'form-control-sm':'小'}]},
                    ],
                    "form-group":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"form-inline","n":"","t":"内联","u":""}]},
                    ],
                    "form-check":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"form-inline","n":"","t":"内联","u":""},{"c":"form-check-inline","n":"","t":"内联","u":""},]},
                    ],
                    "input-group":[
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'尺寸',options:[{'input-group-lg':'大'},{'input-group-sm':'小'}]},
                    ],

                    "table":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"table-bordered","n":"","t":"边框","u":""}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'主题',options:[{'table-primary':'主要-蓝'},{'table-secondary':'次要-灰'},{'table-success':'成功-绿'},{'table-danger':'危险-红'},{'table-warning':'警告-橘黄'},{'table-info':'信息-淡绿'},{'table-light':'高亮-淡白'},{'table-dark':'暗黑'},{'table-white':'白色'}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'尺寸',options:[{'table-lg':'大'},{'table-sm':'小'}]},
                    ],

                    "select":[
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'选中',options:[{"c":true,"n":"disabled","t":"禁用","u":false}]}
                    ],
                    "option":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'value',title:'值'},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'选中',options:[{"c":true,"n":"selected","t":"选中","u":false}]}
                    ],
                    "form":[
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'action',title:'表单提交地址'},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"form-inline","n":"","t":"内联","u":""}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR   ,attrName:"method",title:'请求方法'   ,options:[{'get':'GET'},{'post':'POST'}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:this.change.ATTR   ,attrName:"target",title:'打开方式'   ,options:[{'_blank':'空白页'},{'_self':'当前页'},{'_parent':'父页面'},{'_top':'顶部'}]},
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
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"img-fluid","n":"","t":"宽自适应","u":""},{"c":"img-thumbnail","n":"","t":"微缩外边","u":""}]},
                        {type:this.type.FILEUPLOAD,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'src',title:'图片地址'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'height',title:'高度'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'width',title:'宽度'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'alt',title:'替代文本'},
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
                    "type=text":[
                        {type:this.type.TEXTAREA,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'value',title:'值'},
                        {type:this.type.TEXT,clearAttr:true,oneLine:true,change:this.change.ATTR,attrName:'placeholder',title:'提示文本'},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'禁用',options:[{"c":true,"n":"disabled","t":"禁用","u":false}]},
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.ATTR,title:'只读',options:[{"c":true,"n":"readonly","t":"只读","u":false}]}
                    ],
                    "type=button":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"badge-pill","n":"","t":"圆角","u":""},{"c":"active","n":"","t":"激活","u":""},{"c":"disabled","n":"","t":"禁用","u":""}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'主题',options:[{'btn-primary':'主要-蓝'},{'btn-secondary':'次要-灰'},{'btn-success':'成功-绿'},{'btn-danger':'危险-红'},{'btn-warning':'警告-橘黄'},{'btn-info':'信息-淡绿'},{'btn-light':'高亮-淡白'},{'btn-dark':'暗黑'},{'btn-white':'白色'}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'边框主题',options:[{'btn-outline-primary':'主要-蓝'},{'btn-outline-secondary':'次要-灰'},{'btn-outline-success':'成功-绿'},{'btn-outline-danger':'危险-红'},{'btn-outline-warning':'警告-橘黄'},{'btn-outline-info':'信息-淡绿'},{'btn-outline-light':'高亮-淡白'},{'btn-outline-dark':'暗黑'},{'btn-outline-white':'白色'}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'尺寸',options:[{'btn-lg':'大'},{'btn-sm':'小'},{'btn-block':'占满'}]},
                    ],
                    "btn":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"badge-pill","n":"","t":"圆角","u":""},{"c":"active","n":"","t":"激活","u":""},{"c":"disabled","n":"","t":"禁用","u":""}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'主题',options:[{'btn-primary':'主要-蓝'},{'btn-secondary':'次要-灰'},{'btn-success':'成功-绿'},{'btn-danger':'危险-红'},{'btn-warning':'警告-橘黄'},{'btn-info':'信息-淡绿'},{'btn-light':'高亮-淡白'},{'btn-dark':'暗黑'},{'btn-white':'白色'}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'边框主题',options:[{'btn-outline-primary':'主要-蓝'},{'btn-outline-secondary':'次要-灰'},{'btn-outline-success':'成功-绿'},{'btn-outline-danger':'危险-红'},{'btn-outline-warning':'警告-橘黄'},{'btn-outline-info':'信息-淡绿'},{'btn-outline-light':'高亮-淡白'},{'btn-outline-dark':'暗黑'},{'btn-outline-white':'白色'}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'尺寸',options:[{'btn-lg':'大'},{'btn-sm':'小'},{'btn-block':'占满'}]},
                    ],
                    "button":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT  ,title:'文本'                },
                        {type:this.type.CHECKBOX,clearAttr:true,oneLine:true,change:this.change.CLASS,title:'状态',options:[{"c":"badge-pill","n":"","t":"圆角","u":""},{"c":"active","n":"","t":"激活","u":""},{"c":"disabled","n":"","t":"禁用","u":""}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'主题',options:[{'btn-primary':'主要-蓝'},{'btn-secondary':'次要-灰'},{'btn-success':'成功-绿'},{'btn-danger':'危险-红'},{'btn-warning':'警告-橘黄'},{'btn-info':'信息-淡绿'},{'btn-light':'高亮-淡白'},{'btn-dark':'暗黑'},{'btn-white':'白色'}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'边框主题',options:[{'btn-outline-primary':'主要-蓝'},{'btn-outline-secondary':'次要-灰'},{'btn-outline-success':'成功-绿'},{'btn-outline-danger':'危险-红'},{'btn-outline-warning':'警告-橘黄'},{'btn-outline-info':'信息-淡绿'},{'btn-outline-light':'高亮-淡白'},{'btn-outline-dark':'暗黑'},{'btn-outline-white':'白色'}]},
                        {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'尺寸',options:[{'btn-lg':'大'},{'btn-sm':'小'},{'btn-block':'占满'}]},
                    ],

                    "a":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
                        {type:this.type.TEXT,clearAttr:true,oneLine:false,change:this.change.ATTR,attrName:'href',title:'跳转地址'},
                        {type:this.type.SELECT,clearAttr:true       ,oneLine:true,change:this.change.ATTR,attrName:'target',title:'打开方式',tooltip:"target",options:[{"_blank":"新窗口"},{"_self":"当前窗口"},{"_parent":"父窗口"},{"_top":"顶部窗口"}]},
                    ]
                    ,"i":[
                        {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.TEXT	,title:'文本'                },
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
                title:"编码",
                active:false,/*默认聚焦*/
                width:"50%",
                content:{

                }
            }
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

        value.push( {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'文本颜色',options:[{'text-primary':'主要-蓝'},{'text-secondary':'次要-灰'},{'text-success':'成功-绿'},{'text-danger':'危险-红'},{'text-warning':'警告-橘黄'},{'text-info':'信息-淡绿'},{'text-light':'高亮-淡白'},{'text-dark':'暗黑'},{'text-white':'白色'}]});
        value.push( {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'背景色',options:[{'bg-primary':'主要-蓝'},{'bg-secondary':'次要-灰'},{'bg-success':'成功-绿'},{'bg-danger':'危险-红'},{'bg-warning':'警告-橘黄'},{'bg-info':'信息-淡绿'},{'bg-light':'高亮-淡白'},{'bg-dark':'暗黑'},{'bg-white':'白色'}]});
        value.push( {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'边框颜色',options:[{'border-primary':'主要-蓝'},{'border-secondary':'次要-灰'},{'border-success':'成功-绿'},{'border-danger':'危险-红'},{'border-warning':'警告-橘黄'},{'border-info':'信息-淡绿'},{'border-light':'高亮-淡白'},{'border-dark':'暗黑'},{'border-white':'白色'}]});
        value.push( {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'加边框',options:[{'border':'四边框'},{'border-top':'仅上边框'},{'border-bottom':'仅下边框'},{'border-left':'仅左边框'},{'border-right':'仅右边框'}]});
        value.push( {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'减边框',options:[{'border-0':'无边框'},{'border-top-0':'无上边框'},{'border-bottom-0':'无下边框'},{'border-left-0':'无左边框'},{'border-right-0':'无右边框'}]});
        value.push( {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'边框弧度',options:[{'rounded':'四角'},{'rounded-top':'上'},{'rounded-bottom':'下'},{'rounded-left':'左'},{'rounded-right':'右'},{'rounded-circle':'圆形'}]});
        value.push( {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'宽',options:[{'w-25':'25%'},{'w-50':'50%'},{'w-75':'75%'},{'w-100':'100%'}]});
        value.push( {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'高',options:[{'h-25':'25%'},{'h-50':'50%'},{'h-75':'75%'},{'h-100':'100%'}]});
        value.push( {type:this.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:this.change.CLASS    ,title:'与父元素文字垂直对齐方式',options:[{'align-baseline':'基准线'},{'align-top':'顶部'},{'align-middle':'居中'},{'align-bottom':'底部'},{'align-text-top':'字体顶部对齐'},{'align-bottom':'字体底部对齐'}]});
        this.rightPanel[1].content[key] = value;
    }
}

/*列是变动的 所以简单起见 全部遍历所有可能*/
Constant.prototype.rowColBuild = function(){
    var _t = this;
    return {
        rightCommonConfig:function(){
            var configArr = [
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'sm对齐方式',options:[{"d-sm-flex":"块方式"},{"d-sm-inline-flex":"内联方式"}] ,responsive:_t.responsive.SM},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'md对齐方式',options:[{"d-md-flex":"块方式"},{"d-md-inline-flex":"内联方式"}] ,responsive:_t.responsive.MD},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'lg对齐方式',options:[{"d-lg-flex":"块方式"},{"d-lg-inline-flex":"内联方式"}] ,responsive:_t.responsive.LG},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'xl对齐方式',options:[{"d-xl-flex":"块方式"},{"d-xl-inline-flex":"内联方式"}] ,responsive:_t.responsive.XL},

                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'sm内部结构垂直对齐',options:[{"align-items-sm-start":"起始"},{"align-items-sm-center":"居中"},{"align-items-sm-end":"结束"},{"align-items-sm-baseline":"基准线"},{"align-items-sm-stretch":"stretch"}] ,responsive:_t.responsive.SM},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'md内部结构垂直对齐',options:[{"align-items-md-start":"起始"},{"align-items-md-center":"居中"},{"align-items-md-end":"结束"},{"align-items-md-baseline":"基准线"},{"align-items-md-stretch":"stretch"}] ,responsive:_t.responsive.MD},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'lg内部结构垂直对齐',options:[{"align-items-lg-start":"起始"},{"align-items-lg-center":"居中"},{"align-items-lg-end":"结束"},{"align-items-lg-baseline":"基准线"},{"align-items-lg-stretch":"stretch"}] ,responsive:_t.responsive.LG},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'xl内部结构垂直对齐',options:[{"align-items-xl-start":"起始"},{"align-items-xl-center":"居中"},{"align-items-xl-end":"结束"},{"align-items-xl-baseline":"基准线"},{"align-items-xl-stretch":"stretch"}] ,responsive:_t.responsive.XL},

                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'sm内部结构水平对齐',options:[{"justify-content-sm-start":"起始"},{"justify-content-sm-center":"居中"},{"justify-content-sm-end":"结束"},{"justify-content-sm-around":"环绕"},{"justify-content-sm-between":"间隔"}] ,responsive:_t.responsive.SM},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'md内部结构水平对齐',options:[{"justify-content-md-start":"起始"},{"justify-content-md-center":"居中"},{"justify-content-md-end":"结束"},{"justify-content-md-around":"环绕"},{"justify-content-md-between":"间隔"}] ,responsive:_t.responsive.MD},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'lg内部结构水平对齐',options:[{"justify-content-lg-start":"起始"},{"justify-content-lg-center":"居中"},{"justify-content-lg-end":"结束"},{"justify-content-lg-around":"环绕"},{"justify-content-lg-between":"间隔"}] ,responsive:_t.responsive.LG},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'xl内部结构水平对齐',options:[{"justify-content-xl-start":"起始"},{"justify-content-xl-center":"居中"},{"justify-content-xl-end":"结束"},{"justify-content-xl-around":"环绕"},{"justify-content-xl-between":"间隔"}] ,responsive:_t.responsive.XL},

                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'sm自身对齐',options:[{"align-self-sm-auto":"自动"},{"align-self-sm-start":"起始"},{"align-self-sm-center":"居中"},{"align-self-sm-end":"结束"},{"align-self-sm-baseline":"基准线"},{"align-self-sm-stretch":"stretch"}] ,responsive:_t.responsive.SM},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'md自身对齐',options:[{"align-self-md-auto":"自动"},{"align-self-md-start":"起始"},{"align-self-md-center":"居中"},{"align-self-md-end":"结束"},{"align-self-md-baseline":"基准线"},{"align-self-md-stretch":"stretch"}] ,responsive:_t.responsive.MD},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'lg自身对齐',options:[{"align-self-lg-auto":"自动"},{"align-self-lg-start":"起始"},{"align-self-lg-center":"居中"},{"align-self-lg-end":"结束"},{"align-self-lg-baseline":"基准线"},{"align-self-lg-stretch":"stretch"}] ,responsive:_t.responsive.LG},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'xl自身对齐',options:[{"align-self-xl-auto":"自动"},{"align-self-xl-start":"起始"},{"align-self-xl-center":"居中"},{"align-self-xl-end":"结束"},{"align-self-xl-baseline":"基准线"},{"align-self-xl-stretch":"stretch"}] ,responsive:_t.responsive.XL},

                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'sm内部文字对齐方式',options:[{"text-sm-left":"左"},{"text-sm-center":"居中"},{"text-sm-right":"右"}] ,responsive:_t.responsive.SM},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'md内部文字对齐方式',options:[{"text-md-left":"左"},{"text-md-center":"居中"},{"text-md-right":"右"}] ,responsive:_t.responsive.MD},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'lg内部文字对齐方式',options:[{"text-lg-left":"左"},{"text-lg-center":"居中"},{"text-lg-right":"右"}] ,responsive:_t.responsive.LG},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'xl内部文字对齐方式',options:[{"text-xl-left":"左"},{"text-xl-center":"居中"},{"text-xl-right":"右"}] ,responsive:_t.responsive.XL},

                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'sm浮动',options:[{"float-sm-left":"左"},{"float-sm-right":"右"}] ,responsive:_t.responsive.SM},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'md浮动',options:[{"float-md-left":"左"},{"float-md-right":"右"}] ,responsive:_t.responsive.MD},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'lg浮动',options:[{"float-lg-left":"左"},{"float-lg-right":"右"}] ,responsive:_t.responsive.LG},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'xl浮动',options:[{"float-xl-left":"左"},{"float-xl-right":"右"}] ,responsive:_t.responsive.XL},

                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'sm内部结构垂直对齐',options:[{"-sm-":""},] ,responsive:_t.responsive.SM},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'md内部结构垂直对齐',options:[{"-md-":""},] ,responsive:_t.responsive.MD},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'lg内部结构垂直对齐',options:[{"-lg-":""},] ,responsive:_t.responsive.LG},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'xl内部结构垂直对齐',options:[{"-xl-":""},] ,responsive:_t.responsive.XL},
            ]
            return configArr;
        },
        rightColBuild:function(){
            var configArr = [
                {type:_t.type.TEXT      ,clearAttr:true       ,oneLine:true       ,change:_t.change.TEXT	,title:'文本'                },
                {type:_t.type.CHECKBOX  ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'自由定位',options:[{"c":"mc-ui-absolute-pane","n":"","t":"是否开启","u":""}]},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true       ,change:_t.change.CLASS   ,title:'背景色'   ,options:[{'bg-white':'白色'},{'bg-red':'赤色'},{'bg-orange':'橙色'},{'bg-green':'墨绿'},{'bg-cyan':'藏青'},{'bg-blue':'蓝色'},{'bg-black':'雅黑'},{'bg-gray':'银灰'}]},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'sm栅格数',options:[{"col-sm-auto":"自适应"},{"col-sm-1":"1/12"},{"col-sm-2":"2/12"},{"col-sm-3":"3/12"},{"col-sm-4":"4/12"},{"col-sm-5":"5/12"},{"col-sm-6":"6/12"},{"col-sm-7":"7/12"},{"col-sm-8":"8/12"},{"col-sm-9":"9/12"},{"col-sm-10":"10/12"},{"col-sm-11":"11/12"},{"col-sm-12":"12/12"}] ,responsive:_t.responsive.SM},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'md栅格数',options:[{"col-md-auto":"自适应"},{"col-md-1":"1/12"},{"col-md-2":"2/12"},{"col-md-3":"3/12"},{"col-md-4":"4/12"},{"col-md-5":"5/12"},{"col-md-6":"6/12"},{"col-md-7":"7/12"},{"col-md-8":"8/12"},{"col-md-9":"9/12"},{"col-md-10":"10/12"},{"col-md-11":"11/12"},{"col-md-12":"12/12"}] ,responsive:_t.responsive.MD},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'lg栅格数',options:[{"col-lg-auto":"自适应"},{"col-lg-1":"1/12"},{"col-lg-2":"2/12"},{"col-lg-3":"3/12"},{"col-lg-4":"4/12"},{"col-lg-5":"5/12"},{"col-lg-6":"6/12"},{"col-lg-7":"7/12"},{"col-lg-8":"8/12"},{"col-lg-9":"9/12"},{"col-lg-10":"10/12"},{"col-lg-11":"11/12"},{"col-lg-12":"12/12"}] ,responsive:_t.responsive.LG},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'xl栅格数',options:[{"col-xl-auto":"自适应"},{"col-xl-1":"1/12"},{"col-xl-2":"2/12"},{"col-xl-3":"3/12"},{"col-xl-4":"4/12"},{"col-xl-5":"5/12"},{"col-xl-6":"6/12"},{"col-xl-7":"7/12"},{"col-xl-8":"8/12"},{"col-xl-9":"9/12"},{"col-xl-10":"10/12"},{"col-xl-11":"11/12"},{"col-xl-12":"12/12"}] ,responsive:_t.responsive.XL},
            //偏移
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'sm偏移',options:[{"offset-sm-0":"无"},{"offset-sm-1":"8%"},{"offset-sm-2":"16%"},{"offset-sm-3":"1/4"},{"offset-sm-4":"1/3"},{"offset-sm-5":"41%"},{"offset-sm-6":"1/2"},{"offset-sm-7":"58%"},{"offset-sm-8":"66%"},{"offset-sm-9":"75%"},{"offset-sm-10":"83%"},{"offset-sm-11":"91%"}] ,responsive:_t.responsive.SM},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'md偏移',options:[{"offset-md-0":"无"},{"offset-md-1":"8%"},{"offset-md-2":"16%"},{"offset-md-3":"1/4"},{"offset-md-4":"1/3"},{"offset-md-5":"41%"},{"offset-md-6":"1/2"},{"offset-md-7":"58%"},{"offset-md-8":"66%"},{"offset-md-9":"75%"},{"offset-md-10":"83%"},{"offset-md-11":"91%"}] ,responsive:_t.responsive.MD},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'lg偏移',options:[{"offset-lg-0":"无"},{"offset-lg-1":"8%"},{"offset-lg-2":"16%"},{"offset-lg-3":"1/4"},{"offset-lg-4":"1/3"},{"offset-lg-5":"41%"},{"offset-lg-6":"1/2"},{"offset-lg-7":"58%"},{"offset-lg-8":"66%"},{"offset-lg-9":"75%"},{"offset-lg-10":"83%"},{"offset-lg-11":"91%"}] ,responsive:_t.responsive.LG},
                {type:_t.type.SELECT    ,clearAttr:true       ,oneLine:true      ,change:_t.change.CLASS    ,title:'xl偏移',options:[{"offset-xl-0":"无"},{"offset-xl-1":"8%"},{"offset-xl-2":"16%"},{"offset-xl-3":"1/4"},{"offset-xl-4":"1/3"},{"offset-xl-5":"41%"},{"offset-xl-6":"1/2"},{"offset-xl-7":"58%"},{"offset-xl-8":"66%"},{"offset-xl-9":"75%"},{"offset-xl-10":"83%"},{"offset-xl-11":"91%"}] ,responsive:_t.responsive.XL},
            ]
            var commonConfigArr = this.rightCommonConfig();
            for(var i=0;i<commonConfigArr.length;i++){
                configArr.push(commonConfigArr[i]);
            }
            var config = [];
            for(var key in _t.responsive){
                var value = _t.responsive[key];
                for(var i=1;i<=12;i++){
                    config['col-'+value+'-'+i] = JSON.parse(JSON.stringify(configArr));
                }
            }
            return config;
        },
        tagColBuild:function(){
            var col = {name:"列",canZoom:true,assistZoom:true,dragInto:true,assistDuplicate:true,duplicate:true, copy:true,      paste:true, assistDelete:true,   canDelete:true,onlyParents:["row"]};
            var map = {};
            for(var key in _t.responsive){
                var value = _t.responsive[key];
                for(var i=1;i<=12;i++){
                    map['col-'+value+'-'+i] = JSON.parse(JSON.stringify(col));
                }
            }
            return map;
        },
        cols:function () {
            var arr = ['col'];
            for(var key in _t.responsive){
                var value = _t.responsive[key];
                for(var i=1;i<=12;i++){
                    arr.push('col-'+value+'-'+i);
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
