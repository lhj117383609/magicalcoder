/*给用户回调处理*/
function MagicalCallback() {

}

/**
 * 可以获取浏览器入参
 * @param name 浏览器地址的参数名
 * @return  参数值 string
 */
MagicalCallback.prototype.getParameter = function (name) {
    var query = window.location.search.substring(1);
    if(query!=''){
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair.length=2){
                if(pair[0] == name){return pair[1];}
            }
        }
    }
    return null;
}
/**
 * 初始化布局器成功后执行：您可以调用api.insert(html,javascript)来初始化布局器的默认数据
 * @param api 接口api对象 具体方法参考api.js
 */
MagicalCallback.prototype.after_start = function (api) {}


/**
 * 保存按钮
 * @param html 源码部分            string
 * @param rootNode 当前布局器JSON  JSON
 * @param javascript 脚本         string
 * @param css 样式         string
 * @param canvasStyle 画布样式         JSON
 */
MagicalCallback.prototype.save_html = function (html,rootNode,javascript,css,canvasStyle) {
    // console.log(rootNode)
    // var api = new MagicalApi();
    // api.insertNode(rootNode,null,null,null)
    // api.insert(html,null,null,null)

}
/**
 * 扩展配置钩子 这里做一些demo 注意请不要删除此demo 因为是图标的扩展配置
 * @param uiType 当前ui类型 在Constant.getUiType配置
 * @param configElem 右侧面板中 当前扩展配置按钮 左侧的dom结构
 * @param rightPanelItemObj 配置条目  {type:this.type.TEXT      ,clearAttr:true       ,oneLine:true     ,change:this.change.CLASS   ,title:'图标',extend:true    }
 * @param focusNode 聚焦结构 调试查看 attributes是结构的各种属性
 * @param callback(attrName,attrValue) 记得回调
 */
MagicalCallback.prototype.extend_config = function (uiType,configElem,rightPanelItemObj,focusNode,callback) {
    var api = new MagicalApi();
    //您可以在这里初始化你自己的控件,使用layui.open弹窗方式打开 参考 https://www.layui.com/doc/modules/layer.html
    if(rightPanelItemObj.extendKey =='icon'){
        var iframUrl = '';
        if(uiType==0){
            iframUrl = 'iframe-layui-2.5.4.html';
        }else if(uiType ==4){
            iframUrl = 'iframe-element-2.10.1.html';
        }else if(uiType ==5){
            iframUrl = 'iframe-antdesign-1.5.1.html';
        }else if(uiType ==6){
            iframUrl = 'iframe-vant-2.5.html';
        }
        var index = layer.open({
            type: 2,
            content: iframUrl+'?from=icon_list',
            title:'扩展编辑',
            area: ['800px', '600px'],
            maxmin:true,
            btn:['确定'],
            yes:function () {
                var attrName = rightPanelItemObj.attrName;
                var iframe = $("#layui-layer-iframe"+index).contents();
                var activeI = iframe.find(".magicalcoder-extend-icons").find("i.active").first();
                var newAttrValue = "";
                if(uiType==0){//layui
                    var newIconClass =activeI.length>0? activeI.attr("class").replace("active",'').replace("layui-icon",'').trim():"";
                    var attrValue = focusNode.attributes[attrName]||'';
                    if(attrValue.indexOf("layui-icon-")!=-1){
                        newAttrValue = attrValue.replace(/layui-icon-[-\w]+/g,newIconClass);
                    }else {
                        newAttrValue = attrValue + " "+newIconClass;
                    }
                }else if(uiType == 4){//elementui
                    var newIconClass =activeI.length>0? activeI.attr("class").replace("active",'').trim():"";
                    var attrValue = focusNode.attributes[attrName]||'';
                    if(attrValue.indexOf("el-icon-")!=-1){
                        newAttrValue = attrValue.replace(/el-icon-[-\w]+/g,newIconClass);
                    }else {
                        newAttrValue = attrValue + " "+newIconClass;
                    }
                }else if(uiType == 5){//antdegign 特别对待 没有开头标示了
                    var newIconClass =activeI.length>0? activeI.attr("class").replace("active",'').trim():"";
                    var iconName = newIconClass.replace("anticon anticon-","");//获取图标名称
                    newAttrValue=iconName;
                }else if(uiType == 6){//vant
                    var newIconClass =activeI.length>0? activeI.attr("class").replace("active",'').trim():"";
                    var iconName = newIconClass.replace("van-icon van-icon-","");//获取图标名称
                    newAttrValue=iconName;
                }

                newAttrValue = newAttrValue.trim();
                configElem.val(newAttrValue);
                //记得回调 使生效 此处暂时注释
                callback(attrName,newAttrValue);
                layer.close(index)
            },cancel: function(index, layero){
                //右上角关闭
                //return false 开启该代码可禁止点击该按钮关闭
            }
        });

    }
    else if(rightPanelItemObj.extendKey =='method'){//现在是编写方法 可视化编程了
        var changeAttrName = rightPanelItemObj.attrName;
        var pageCallback = function(){
            configElem.val(focusNode.attributes[changeAttrName]);
        }
        //往编码器页面传参
        window.pageParams = {api:api,changeAttr:rightPanelItemObj,pageCallback:pageCallback};
        var index = layer.open({
            type: 2,
            content: 'index-code.html',
            title:'定制动作事件',
            area: ['60%', '90%'],
            maxmin:true,
            moveOut:true,
            shade:false,
            btn:['保存','取消'],
            yes:function () {
                //注意这个值在magical-js-code.js文件的最下方 属于子页面回传
                var MAGICAL_JS_CODE = window.MAGICAL_JS_CODE;
                if(MAGICAL_JS_CODE){
                    if(MAGICAL_JS_CODE.save()){
                        configElem.val(focusNode.attributes[changeAttrName]);
                        api.refreshWorkspace();//立即生效
                        layer.close(index);
                    }
                }

            },cancel: function(index, layero){

            }
        });
    }
    else if(rightPanelItemObj.extendKey == 'params'){
        var attrName = rightPanelItemObj.attrName;
        var attrValue = focusNode.attributes[attrName]||'';
        var paramList = [];
        if(attrValue){
            paramList = JSON.parse(page.lowCodeUtil.xssUtil.unEscapeXss(attrValue));
        }
        var extendHrefParams = new ExtendHrefParams(paramList);
        var index = layer.open({
            type: 1,
            content: extendHrefParams.template(),
            title:'扩展编辑',
            area: ['800px', '600px'],
            maxmin:true,
            btn:['确定'],
            yes:function () {
                var data = extendHrefParams.getData();
                var newAttrValue = JSON.stringify(data);
                configElem.val(newAttrValue);
                //记得回调 使生效 此处暂时注释
                callback(attrName,page.lowCodeUtil.xssUtil.escapeXss(newAttrValue));
                layer.close(index)
            },cancel: function(index, layero){
                //右上角关闭
                //return false 开启该代码可禁止点击该按钮关闭
            }
        });
        extendHrefParams.render();
    }


}
/**
 * 右侧属性配置属性变更前的回调事件 变更非文本
 * @param obj.focusNode 当前聚焦的节点
 * @param obj.changeAttrName 修改的属性名
 * @param obj.changeAttrValue 修改后的属性值
 * @param obj.originAttrValue 修改前的属性值
 * @param obj.itemObj 配置属性
 */
MagicalCallback.prototype.before_change_attr_callback = function (obj) {
    return true;
}
/**
 * 右侧属性配置属性变更后的回调事件 变更非文本
 * @param obj.focusNode 当前聚焦的节点
 * @param obj.changeAttrName 修改的属性名
 * @param obj.changeAttrValue 修改后的属性值
 * @param obj.originAttrValue 修改前的属性值
 * @param obj.itemObj 配置属性
 */
MagicalCallback.prototype.after_change_attr_callback = function (obj) {
    //test 下面是一个示例 当按钮右侧下拉变化 我们来动态修改它的脚本实现逻辑 达到动态控制方法的目的 而对使用软件的人来说 仅仅配置一个下拉属性
    /*if(obj.focusNode.magicalCoder.identifier == 'el-button'||
        obj.focusNode.magicalCoder.identifier == 'a-button'||
        obj.focusNode.magicalCoder.identifier == 'van-button'
    ){
        var api = new MagicalApi();
        if(obj.changeAttrName=='testMethod'){
            //增加方法名
            obj.focusNode.attributes['@click']=obj.changeAttrValue;
            var iframeUi = api.getIframeUi();
            //先删除上一次的方法
            iframeUi.api().removeVueMethod(obj.originAttrValue);
            iframeUi.api().resetVueMounted();
            //给予当前期望的方法
            if(obj.changeAttrValue=='m1'){
                iframeUi.api().setVueMethod(obj.changeAttrValue,"function(){vueData.input='您好';alert('您好');}");
            }else if(obj.changeAttrValue=='m2'){
                iframeUi.api().setVueMethod(obj.changeAttrValue,"function(){vueData.input='您好';alert('magicalCoder');}");
            }else if(obj.changeAttrValue == 'm3'){
                iframeUi.api().setVueMethod(obj.changeAttrValue,"function(){vueData.input='m3';alert('m3');}");
                iframeUi.api().setVueMounted("function(){alert('加载成功')}");
            }
            api.refreshWorkspace();
        }
    }*/
    /*if(obj.changeAttrName=='v-model'){
        var api = new MagicalApi();
        var iframeUi = api.getIframeUi();
        iframeUi.api().removeVueData(obj.originAttrValue);
        iframeUi.api().setVueData(obj.changeAttrValue,"123");

    }*/
    //test
    //三级联动示例

}
/**
 * 右侧属性配置属性变更前的回调事件 注意变更文本（就是结构内的文本 change:this.change.TEXT）
 * @param obj.focusNode 当前聚焦的节点
 * @param obj.changeAttrName null
 * @param obj.changeAttrValue 修改后的文本值
 * @param obj.originAttrValue 修改前的文本值
 * @param obj.itemObj 配置属性
 */
MagicalCallback.prototype.before_change_text_callback = function (obj) {return true;}
/**
 * 右侧属性配置属性变更后的回调事件 注意变更文本（就是结构内的文本 change:this.change.TEXT）
 * @param obj.focusNode 当前聚焦的节点
 * @param obj.changeAttrName null
 * @param obj.changeAttrValue 修改后的文本值
 * @param obj.originAttrValue 修改前的文本值
 * @param obj.itemObj 配置属性
 */
MagicalCallback.prototype.after_change_text_callback = function (obj) {}

/**
 * @version 2.2.5
 * 布局器顶端重置按钮点击之前
 * @param param 如果您是手动调用api.reset(param) 可以获取 否则就是系统点击 null
 * @return true则继续执行 false终止执行
 */
MagicalCallback.prototype.reset_before = function (param) {return true;}
/**
 * @version 2.2.5
 * 布局器顶端重置按钮点击后
 * @param param 如果您是手动调用api.reset(param) 可以获取 否则就是系统点击 null
 */
MagicalCallback.prototype.reset_after = function (param) {}
/**
 * 异步构建右侧属性面板前触发 可配合api.refreshRightAttrPane()重置某些下拉框值等
 * @param focusNode JSON
 * @notifyContinueCallback 当您的逻辑执行完 一定要执行一下notifyContinueCallback(); 通知布局器继续绘制 由于大部分用户绘制右侧属性 多依赖后端接口 所以我们加了notifyContinueCallback @version 2.2.9
 */
MagicalCallback.prototype.pre_build_attrs = function (focusNode,notifyContinueCallback) {
    //重写此方法时 一定不能省略此行的执行 您可以在自己的ajax方法结尾加上 要通知布局器继续绘制的
    notifyContinueCallback();
}
/**
 * 当工作区变更后：比如拖拽 删除 等操作触发的
 * 请不要跟api.refreshWorkspace()配合使用 否则就会无限递归死循环
 * 可配合onlyCenterRefreshHtml把您修改的节点属性绘制出来
 */
MagicalCallback.prototype.after_workspace_change = function () {}
/**
 * 当拖拽左侧组件准备松手到中间区域前 如果您此时给 dragItem设置属性则也会生效
 * @param dragItem   拖拽的结构   DOM
 * @param targetElem 拖放的目标结构 DOM
 * @return true|false true:继续构建 false:则拖拽放入失败
 */
MagicalCallback.prototype.before_drop_left_to_center = function (dragItem,targetElem) {
    return true;
}
/**
 * 当拖拽左侧组件松手到中间区域放手后
 * @param focusItem 当前聚焦的结构 DOM
 * @param targetElem 拖放的目标结构 DOM
 */
MagicalCallback.prototype.after_drop_left_to_center = function (focusItem,targetElem) {}
/**
 * 删除当前聚焦的组件
 * @param deleteNodes 已经被删除的组件 JSON[]
 */
MagicalCallback.prototype.after_delete_nodes = function (deleteNodes) {}

/**
 * @version 2.2.5
 * 当点击左侧组件准备加入到中间面板前触发
 * @param leftLiElem 左侧点击的结构 DOM
 * @param targetElems 工作区的目标结构 DOM[]
 * @param targetFocusNodes 工作区的目标结构对应的数组 JSON[]
 * @return {boolean} true|false true:继续构建 false:则终止
 */
MagicalCallback.prototype.before_click_left_component_to_center = function (leftLiElem,targetElems,targetFocusNodes) {
    return true;
}
/**
 * @version 2.2.5
 * 当点击左侧组件加入到中间面板后触发
 * @param leftLiElem 左侧点击的结构 DOM
 * @param targetElems 工作区的目标结构 DOM[]
 * @param targetFocusNodes 工作区的目标结构对应的数组 JSON[]
 */
MagicalCallback.prototype.after_click_left_component_to_center = function (leftLiElem,targetElems,targetFocusNodes) {}
/**
* @version 2.2.6
* 右键菜单定制
* actionName: 动作事件名称 title:中文标题 handler 处理函数
* @return  [{actionName:"saveTo",title:"另存为",handler:function(focusNodes){//ajax保存吧}}];
*/
MagicalCallback.prototype.right_menu_list = function(focusNodes){
    //return [{actionName:"test",title:"测试",handler:function(focusNodes){  console.log(focusNodes) }}]
    return [];
}
/**
 *@version 2.2.7
 * 右侧属性配置样式（change:this.change.STYLE）变更前的回调事件
 * @param obj.focusNode 当前聚焦的节点
 * @param obj.changeAttrName null
 * @param obj.changeAttrValue 修改后的文本值
 * @param obj.originAttrValue 修改前的文本值
 * @param obj.itemObj 配置属性
 */
MagicalCallback.prototype.before_change_style_callback = function (obj) {return true;}
/**
 * @version 2.2.7
 * 右侧属性配置样式（change:this.change.STYLE）变更后的回调事件
 * @param obj.focusNode 当前聚焦的节点
 * @param obj.changeAttrName null
 * @param obj.changeAttrValue 修改后的文本值
 * @param obj.originAttrValue 修改前的文本值
 * @param obj.itemObj 配置属性
 */
MagicalCallback.prototype.after_change_style_callback = function (obj) {}
/**
* @version 2.2.7
* 有些时候我们的标签名是区分大小写的 但是根据浏览器规则 忽略大小写
* 此时我们可以在这个回调函数里定义要转换的一个map 从而实现我们的源码中标签名支持大小写
* {
      "保持原状的标签名":["此标签上的保持原状的属性名"]
  }
  例如这个jsp标签：{"c:forEach":["varStatus"]}
*/
MagicalCallback.prototype.tagNameNotIgnoreCase = function(){return {"c:forEach":["varStatus"]}}
/**
* @version 2.2.8
* 当拖拽控件在另外一个控件上面时，控制能否在parentNode插入childNode
* @param parentNode {}父节点
* @param childNode {}孩子节点
* #param alertMsg true|false 当不能插入时 根据此变量 是否弹窗提示错误信息
*/
MagicalCallback.prototype.canDragInToTarget = function(parentNode,childNode,alertMsg){return true;}
/**
 * @version 2.2.8
 * 当拖拽左侧组件准备松手到中间区域前 如果您此时给 dragItem设置属性则也会生效
 * @param realDragElem   真正被拖拽的结构   DOM
 * @param dragElem   拖拽的预览结构   DOM
 * @param targetElem 拖放的目标结构 DOM
 * @return true|false true:继续构建 false:则拖拽放入失败
 */
MagicalCallback.prototype.before_drop_center_to_center = function (realDragElem,elemItemObj) {
    return true;
}
/**
 * @version 2.2.8
 * 当拖拽左侧组件松手到中间区域放手后
 * @param realDragElem 真正被拖拽的结构 DOM
 * @param elemItemObj.dragElem 拖拽的预览结构 DOM
 * @param targetElem 拖放的目标结构 DOM
 */
MagicalCallback.prototype.after_drop_center_to_center = function (realDragElem,elemItemObj) {}
/**
* @version 2.2.8
* 重做按钮点击前执行
* @return  true|false true:继续 false:中断
*/
MagicalCallback.prototype.before_redo = function () {return true;}
/**
* @version 2.2.8
* 重做按钮点击后执行
* @return  true|false true:继续 false:中断
*/
MagicalCallback.prototype.after_redo = function () {}
/**
* @version 2.2.8
* 撤销按钮点击前执行
* @return  true|false true:继续 false:中断
*/
MagicalCallback.prototype.before_undo = function () {return true;}
/**
* @version 2.2.8
* 撤销按钮点击后执行
* @return  true|false true:继续 false:中断
*/
MagicalCallback.prototype.after_undo = function () {}
/**
 * @version 2.2.9
 * 点击顶部背景图回调 以下代码 模仿了 弹窗 给您打开一个面板 在里面选择服务器资源供选择
 */
MagicalCallback.prototype.background_image = function () {
    //获取选中的图片
    var api = new MagicalApi();
    var iframeUi = api.getIframeUi();
    var originBackgroundImage =iframeUi.getCanvasStyle()['background-image'];

    //您可以自己根据自身情况 拼接以下html
    var html = '<div class="layui-row choose-background-image" ><div class="layui-col-xs12" ><button id="_mc_upload_background_image" class="magicalcoder-layupload layui-btn" type="button" >上传图片</button></div><div class="layui-col-xs12" ><ul class="mc-background-images-ul"><li ><img style="width:100%;" src="img.jpg"/></li><li ><img style="width:100%;" src="img.jpg" /></li></ul></div></div>';
    var index = layer.open({
        type:1,
        content:html,
        title:'扩展编辑',
        area: ['800px', '600px'],
        maxmin:false,
        btn:['确定','重置'],
        yes:function () {
            //获取选中的图片
            var li = $(".choose-background-image").find(".active");
            if(li.length>0){
                var url = li.find('img').attr("src");
                var canvasStyle = iframeUi.getCanvasStyle();
                canvasStyle['background-image']= "url(\""+url+"\")";
                iframeUi.setCanvasStyle(canvasStyle);
            }

            layer.close(index)
        },
        btn2:function () {
            var canvasStyle = iframeUi.getCanvasStyle();
            delete canvasStyle['background-image'];
            iframeUi.setCanvasStyle(canvasStyle);
            layer.close(index)
        },
        cancel: function(index, layero){

        }
    })
    //上传图片按钮
    var settings = api.getConstant().getSettings();
    upload.render({
        elem: "#_mc_upload_background_image",
        drag:true,
        field:settings.file.name,
        drag:true,
        url:settings.file.action,
        done:function (res) {
            var url = settings.file.callback(res);
            var canvasStyle = _t.iframeUi.getCanvasStyle();
            canvasStyle['background-image']= "url(\""+url+"\")";
            iframeUi.setCanvasStyle(canvasStyle);
        },
        error:function () {
            layer.msg("请求异常");
        },
    });

    $(".choose-background-image").find("li").click(function () {
        $(".choose-background-image").find(".active").removeClass("active");
        $(this).addClass("active");
    })


}
