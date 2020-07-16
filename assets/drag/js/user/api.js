/*给用户主动调用的 您不需要改动 或者重写
* 只要 var api = new MagicalApi();
* 即可使用api.getHtml();等各种方法
* */
function MagicalApi() {

}

/**
 * 获取布局器HTML源码
 * @return string
 */
MagicalApi.prototype.getHtml=function () {}
/**
 * 获取布局器脚本
 * @return string
 */
MagicalApi.prototype.getJavascript=function () {}
/**
 * 获取布局器根节点json
 * @return JSON
 */
MagicalApi.prototype.getRootNode=function () {}
/**
 * @version 2.2.9
 * 获取样式
 */
MagicalApi.prototype.getCss = function(){}
/**
 * @version 2.2.9
 * 获取脚本设计器的数据
 */
MagicalApi.prototype.getMagicalJsCodeData = function(){}
/**
 * @version 2.2.9
 * 获取脚本设计器的根画布的样式
 * @return obj{}
 */
MagicalApi.prototype.getCanvasStyle = function(){}
/**
 * 能获取表单条目下的控件数据
 * @return JSON[]
 */
MagicalApi.prototype.getFormItemNodes = function (){}
/**
 * 插入源码到布局器
 * @param html  取值=""可以实现清空布局器 string
 */
MagicalApi.prototype.insertHtml=function (html) {}
/**
 * 插入javascript脚本 请尽量在insertHtml方法之后执行 因为大部分脚本操作的是html 必须先有html
 * @param javascript 不要="" 可以使用null来重置脚本 string
 */
MagicalApi.prototype.insertJavascript=function (javascript) {}
/**
 * @version 2.2.9
 * 插入css
 * @param css 取值=""可以实现清空样式 =null 则加载默认样式 string
 */
MagicalApi.prototype.insertCss=function (css) {}
/**
 * @version 2.2.9
 * 插入脚本设计器的数据
 * @param magicalJsCodeData 取值={}可以实现清空 =null 则加载默认样式 object
 */
MagicalApi.prototype.insertMagicalJsCodeData=function (magicalJsCodeData) {}
/**
 * @version 2.2.9
 * 插入脚本设计器的根画布样式
 * @param canvasStyle 取值={}可以实现清空 =null 则加载默认样式 object
 */
MagicalApi.prototype.insertCanvasStyle=function (canvasStyle) {}
/**
 * 插入html javascript css常用于初始化布局器
 * @param html        取值=""可以实现清空布局器  string
 * @param javascript  取值=null可以实现重置布局器的脚本 千万不要为"" 否则默认脚本不支持 工作区不渲染 string
 * @param css  取值=""可以实现清空样式 =null 则加载默认样式 string
 * @param magicalJsCodeData  脚本设计器的预置值，取值={}可以实现清空 =null 则加载默认 object
 * @param canvasStyle  body画布基本样式，取值={}可以实现清空 =null 则加载默认样式 object
 */
MagicalApi.prototype.insert=function (html,javascript,css,magicalJsCodeData,canvasStyle) {}
/**
 * 根据rootNode 还原布局器
 * @param rootNode  根据之前保存的json方式恢复布局器 javascript请配合insertJavascript实现 JSON
 * @param javascript  取值=null可以实现重置布局器的脚本 千万不要为"" 否则默认脚本不支持 工作区不渲染 string
 * @param css  取值=""可以实现清空样式 =null 则加载默认样式 string
 * @param magicalJsCodeData  脚本设计器的预置值，取值={}可以实现清空 =null 则加载默认 object
 * @param canvasStyle  body画布基本样式，取值={}可以实现清空 =null 则加载默认样式 object
 */
MagicalApi.prototype.insertNode=function (rootNode,javascript,css,magicalJsCodeData,canvasStyle) {}
/**
 * 聚焦某个结构
 * @param magicalCoderIds 结构的唯一magicalCoder.id string[]
 */
MagicalApi.prototype.focus = function (magicalCoderIds) {}
/**
 * 获取constatn.js实例
 * 这样就可以灵活的根据事件情况来调整配置
 * @return JSON
 */
MagicalApi.prototype.getConstant = function () {}
/**
 * 获取iframe-ui.js实例
 * 这样就可以灵活的根据事件情况来调整配置
 * @return JSON
 */
MagicalApi.prototype.getIframeUi = function () {}
/**
 * 把html转换成magicalCoderNode数据
 * @param html string
 */
MagicalApi.prototype.htmlToRootNode = function (html) {}
/**
 * 把magicalCoder node数据转换成html
 * @param nodes  可以通过rootNode.magicalCoder.children传入  JSON[]
 * @param htmlWithMagicalCoderAttr true|false 是否包含magicalcode属性 默认false  boolean
 */
MagicalApi.prototype.nodesToHtml = function (nodes,htmlWithMagicalCoderAttr) {}
/**
 * 重新设置孩子节点 比如您想在某个节点插入html 那么可以先把html调用htmlToRootNode得到node,
 * 然后childrenNodes = node.magicalCoder.children; 然后就可以调用此方法了 一般用在回调处理上
 * @param parentId 父节点magicalCoder.Id string
 * @param childrenNodes 子节点数组 JSON[]
 */
MagicalApi.prototype.resetChildren = function(parentId,childrenNodes){}
/**
 * 主动触发布局器重绘工作区
 * @param force 是否强制刷新 默认false 强制刷新当您刷新不生效时可使用 比较耗费性能 会丢失当前聚焦结构 @2.2.9新增
 */
MagicalApi.prototype.refreshWorkspace = function (force) {}

/**
 * 仅仅把中间html重绘 并不触发节点变更
 */
MagicalApi.prototype.onlyCenterRefreshHtml = function(){}

/**
 * 根据magicalCoderParam查询结构
 * @param fromNode 从哪个节点开始往下搜索 如果为null 则默认从根节点 JSON
 * @param magicalCoderParam 查询参数例如 查看node.magicalCoder属性即可得知参数 {id:1,....}  object
 * return []
 */
MagicalApi.prototype.searchNodes = function (fromNode,magicalCoderParam) {}
/**
 * 重新构造左侧组件列表:如果您动态的向左侧增删组件 可以使用此方法
 * 您只需要修改完constant中的配置后 直接调用此方法 无需额外调用api.refresh();
 */
MagicalApi.prototype.rebuildLeftComponents = function () {}
/**
 * 刷新拖拽事件
 */
MagicalApi.prototype.refreshDragEvent = function () {}
/**
 * 刷新右侧属性面板 如果您获取constant并且 动态修复属性配置，则需要调用此方法刷新事件
 * @param magicalCoderId string
 */
MagicalApi.prototype.refreshRightAttrPane = function (magicalCoderId) {}
/**
 * 在节点中追加html
 * @param node  JSON 父节点
 * @param html  string
 * @param preNode  JSON 墙节点
 * @return true|false
 */
MagicalApi.prototype.appendHtml = function (parentNode,html,preNode) {}
/**
 * 删除多个节点
 * @param nodes JSON[] 主要是有magicalCoder.id
 */
MagicalApi.prototype.deleteNodes = function (nodes) {}
/**
 * 查找前置节点
 * @param magicalCoderId string
 * @return JSON
 */
MagicalApi.prototype.findPreNode = function (magicalCoderId) {}
/**
 * 查找后置节点
 * @param magicalCoderId string
 * @return JSON
 */
MagicalApi.prototype.findNextNode = function (magicalCoderId) {}
/**
 * 查找父亲节点
 * @param magicalCoderId string
 * @return JSON
 */
MagicalApi.prototype.findParentNode = function (magicalCoderId) {}
/**
 * 移动节点
 * @param dragMcId 要移动的id string
 * @param targetMcId 目标id string
 * @param moveType 可选值 inner prev next 类型 string
 */
MagicalApi.prototype.moveExistNode = function (dragMcId, targetMcId, moveType) {}
/**
 * 获取聚焦结构
 * @return JSON[]
 */
MagicalApi.prototype.findFocusNodes = function () {}
/**
 * @version 2.2.5
 * @param param 自定义一个参数 配合callback.js的reset_before(param)
 * 重置布局器
 */
MagicalApi.prototype.reset = function (param) {}

/**
 * 比如 "el-input":[{type:this.type.SELEC,attrName:'type',options:[{"text":"输入框","textarea":"文本框"}],"myId":"el-input-type",.....},]
 * @version 2.2.5
 * @param contentKey rightPanel下的content下的key 比如 'el-input'
 * @param queryObj 自定义一个查询 {"属性名":"属性值"} 这里的属性名可以由您自己定义一个 {"attrName":"type"}
 * 根据某个查询条件查询constant.js中配置的this.rightPanel下的一组满足条件的数据
 * 使用场景：如果您要根据ajax数据动态更改下拉框值 此方法很有用 记得改完调用api的refreshRightAttrPane()方法
 * @return []
 	例如：以下代码更改form表单的label-position值 假设这段代码放after_start
    var list = api.getRightPanelItemListFromConstant("el-form",{attrName:"label-position"});
    console.log(list);
    for(var i=0;i<list.length;i++){
        list[i].options=[{"1":"新值"}]
    }
 */
MagicalApi.prototype.getRightPanelItemListFromConstant = function(contentKey,queryObj){}
/**
* @version 2.2.7
* 把rootNode平展开以key value形式返回
* key:magicalCoder.id value:node
* @param node 如果为null则默认去rootNode 根节点开始遍历
*@return {}
*/
MagicalApi.prototype.getRootNodeMap=function(node){}
/**
* @version 2.2.9
* 刷新整个布局器 简单粗暴
*/
MagicalApi.prototype.refreshAll = function(){}
