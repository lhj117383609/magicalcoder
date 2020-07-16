/*通用工具解析类*/
function LowCodeUtil() {
    var lowCodeConstant = new LowCodeConstant();
    var _this = this;

    this.nodeUtil = {

        pubDeleteNode:function(startNode,magicalCoder){
            if(this.priMatchNode(startNode,magicalCoder)){
                delete startNode;
            }else {
                this.priDeleteNode(startNode,magicalCoder);
            }
        },
        //startNode如果满足的话 是不删除的 手工操作吧
        priDeleteNode:function(startNode,magicalCoder){
            if(!this.priMatchNode(startNode,magicalCoder)){
                return true;
            }else {
                var children = startNode.magicalCoder.children;
                if(children.length>0){
                    for(var i=0;i<children.length;i++){
                        var find = this.pubDeleteNode(children[i],magicalCoder);
                        if(find){
                            children.splice(i,1);//删除这个节点 返回的是数组
                            i--;
                        }
                    }
                }
            }
            return false;
        },
        pubSearchFirstNode : function (node,magicalCoder) {
            var nodes = this.pubSearchNodeList(node,magicalCoder);
            if(nodes.length>0){
                return nodes[0];
            }else {
                return null;
            }
        },
        pubSearchNodeList : function (node,magicalCoder) {
            var nodes = [];
            this.priSearchNodes(nodes,node,magicalCoder);
            return nodes;
        },
        priSearchNodes : function (nodes,node,magicalCoder) {
            if(this.priMatchNode(node,magicalCoder)){
                nodes.push(node);
            }
            var children = node.magicalCoder.children;
            if(children.length>0){
                for(var i=0;i<children.length;i++){
                    this.priSearchNodes(nodes,children[i],magicalCoder);
                }
            }
        },
        priMatchNode : function(node,magicalCoder){
            var find = true;
            for(var key in magicalCoder){
                if(node.magicalCoder[key] != magicalCoder[key]){
                    find = false;
                    break;
                }
            }
            return find;
        },
        /**
         * 获取节点text
         * @param node
         * @returns {string}
         */
        pubGetNodeContent : function (node) {
            var jsArr = [];
            if(node.magicalCoder.nodeType==3){
                jsArr.push(node.magicalCoder.textContent);
            }else {
                var children = node.magicalCoder.children;
                for(var i=0;i<children.length;i++){
                    var child = children[i];
                    if(child.magicalCoder.nodeType==3){
                        jsArr.push(child.magicalCoder.textContent);
                    }
                }
            }
            return jsArr.join('').trim();
        },
        /**
         * 设置text节点的内容
         * @param node
         * @param textContent
         */
        pubSetNodeContent:function(node,textContent){
            if(node.magicalCoder.nodeType==3){
                node.magicalCoder.textContent = content;
            }else {
                var children = node.magicalCoder.children;
                for(var i=0;i<children.length;i++){
                    var child = children[i];
                    if(child.magicalCoder.nodeType==3){
                        child.magicalCoder.textContent = textContent;
                    }
                }
            }
        },
        pubFindNodeValue :  function (node,valueType) {
            return this.pubFindNodeAttrValue(node,'value',valueType);
        },
        pubFindNodeAttrValue :  function (node,attrName,valueType) {
            var value = null;
            if(node!=null){
                value = node.attributes[attrName];
            }
            switch (valueType) {
                case lowCodeConstant.valueType.NUM:
                    if(value!=null || value!==''){
                        return parseInt(value);
                    }
                case lowCodeConstant.valueType.STR:
                    return value;
                case lowCodeConstant.valueType.BOOL:
                    if(value!=null && value!=''){
                        if(value == 'true'||value=='是'){
                            return true;
                        }
                    }
                case lowCodeConstant.valueType.JSON:
                    if(value!=null && value!=''){
                        return JSON.parse(_this.xssUtil.unEscapeXss(value));
                    }
            }
            return value;
        },
        /**
         * 把节点转换成数组
         * @param node 节点
         * @param nodeList []自行传入
         */
        nodeToList:function (node,nodeList) {
            nodeList.push(node);
            var children = node.magicalCoder.children;
            for(var i=0;i<children.length;i++){
                this.nodeToList(children[i],nodeList);
            }
        },
        /**
         * 把节点转换成map key=magicalCoderId
         * @param node
         */
        nodeToMap:function(node){
            var map = {}
            var nodeList = []
            this.nodeToList(node,nodeList);
            for(var i=0;i<nodeList.length;i++){
                map[nodeList[i].magicalCoder.id] = nodeList[i];
            }
            return map;
        },
    }

    this.xssUtil = {
        //转义html特殊标签
        escapeXss : function (value) {
            if(value==null || typeof value == 'undefined' || typeof value != 'string'){
                return value;
            }
            return value.replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
        },
//反转义html特殊标签
        unEscapeXss : function (value) {
            if(value==null || typeof value == 'undefined' || typeof value != 'string'){
                return value;
            }
            return value.replace(/&quot;/g,"\"").replace(/&lt;/g,"<").replace(/&gt;/g,">");
        }
    }

    this.arrayUtil = {
        copyArray : function (originArr, newArray) {
            if(newArray){
                for(var i=0;i<newArray.length;i++){
                    originArr.push(newArray[i]);
                }
            }
            return originArr;
        }
    }
    this.mapUtil = {
        coverToKeyValue:function (map) {
            if(map){
                for(var key in map){
                    return {key:key,value:map[key]};
                }
            }
            return null;
        }
    }
    this.stringUtil = {
        isBlank:function (str) {
            return typeof str =='undefined' || str==null || str==='';
        },
        containsChinese:function(val){     
        　　var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
        　　if(reg.test(val)){return true;}
            return false;   
        }
    }
    this.constantUtil = {
        //替换一下constant.js里下拉
        replaceConstantSelectOptions:function (constant,replaceIdentifier,newOptions) {
            var rightPanel = constant.getRightPanel();
            for(var i=0;i<rightPanel.length;i++){
                var content = rightPanel[i].content;
                for(var identifier in content){
                    var configs = content[identifier];
                    for(var j=0;j<configs.length;j++){
                        var config = configs[j];
                        if(replaceIdentifier == identifier){//可排序的源
                            if(config['attrName'] == 'value' &&
                                config['type']==userTableApi.constant.type.SELECT){
                                config.options = newOptions;
                                return;
                            }
                        }
                    }
                }
            }
        }
    }
    //浏览器缓存本地工具
    this.daoUtil = function(){
        var supportLocalStorage =  typeof window.localStorage=='object';
        var supportSessionStorage =  typeof window.sessionStorage=='object';
        var obj = {
            serializeValueToString:function(value){
                if(value){
                    if(typeof value == 'object'){
                        return JSON.stringify(value);
                    }else {
                        return value;
                    }
                }
                return value;
            },
            serializeValueToObj:function(value){
                if(value){
                    if(value.startsWith("{")||value.startsWith("[")){
                        return JSON.parse(value);
                    }
                }
                return value;
            },
            sessionSetItem:function (key,value) {
                if(supportSessionStorage){
                    if(value!=null){
                        window.sessionStorage.setItem(key,this.serializeValueToString(value));
                    }
                }
            },
            sessionGetItem:function (key) {
                if(supportSessionStorage){
                    return this.serializeValueToObj(window.sessionStorage.getItem(key));
                }
                return null;
            },
            sessionRemoveItem:function (key) {
                if(supportSessionStorage){
                    window.sessionStorage.removeItem(key);
                }
            },
            localSetItem:function (key,value) {
                if(supportLocalStorage){
                    if(value!=null) {
                        window.localStorage.setItem(key, this.serializeValueToString(value));
                    }
                }
            },
            localGetItem:function (key) {
                if(supportLocalStorage){
                    return this.serializeValueToObj(window.localStorage.getItem(key));
                }
                return null;
            },
            localRemoveItem:function (key) {
                if(supportLocalStorage){
                    window.localStorage.removeItem(key);
                }
            }
        }
        return obj;
    }
}
