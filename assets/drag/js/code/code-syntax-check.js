/*语法检查 页面标红*/
function CodeSyntaxCheck() {
    this.api = new MagicalApi();
    this.lowCodeUtil = new LowCodeUtil();
}

CodeSyntaxCheck.prototype.check = function () {
    if(!this.api){
        return;
    }
    var rootNode = this.api.getRootNode();
    if(rootNode){
        var children = rootNode.magicalCoder.children;
        for(var i=0;i<children.length;i++){
            var node = children[i];
            this.nodeCheck(node);
        }
        this.api.onlyCenterRefreshHtml();
    }
}

CodeSyntaxCheck.prototype.nodeCheck = function (node) {
    this.syntax(node);
    var children = node.magicalCoder.children;
    if(children.length>0){
        for(var i=0;i<children.length;i++){
            this.nodeCheck(children[i]);
        }
    }
}

CodeSyntaxCheck.prototype.syntax = function (node) {
    var identifier = node.magicalCoder.identifier;
    switch (identifier) {
        case 'mc-if':
            this.ifSyntax(node);
            break;
        case 'mc-condition-groups':
            this.conditionGroupsSyntax(node);
            break;
        case 'mc-condition-group':
            this.conditionGroupSyntax(node);
            break;
        case 'mc-condition':
            this.conditionSyntax(node);
            break;
        case 'mc-compare-operator':
            this.compareOperatorSyntax(node);
            break;
        case 'mc-logic-and':
        case 'mc-logic-or':
            this.andOrSyntax(node);
            break;
        case 'mc-logic-not':
            this.notSyntax(node);
            break;

        case 'mc-set-variable':
            this.mcSetVariableSyntax(node);
            break;
        case 'mc-defined-variable':
            this.mcDefinedVariableSyntax(node);
            break;
        case 'mc-set-value':
            this.mcSetValueSyntax(node);
            break;
        case 'mc-ajax-url':
            this.ajaxUrlSyntax(node);
            break;
        case 'mc-ajax-param-name':
            this.ajaxParamNameSyntax(node);
            break;
        case 'mc-ajax-param-value':
            this.ajaxParamValueSyntax(node);
            break;
        case 'mc-find-page-limit':
        case 'mc-find-page-num':
        case 'mc-find-page-total-count':
        case 'mc-ajax-then-page-field-not-array':
        case 'mc-ajax-then-page-field-array':
        case 'mc-ajax-then-page-field-page-total':
            this.requireValueSyntax(node);
            break;
        case 'mc-ajax-then-translates':
            this.ajaxThenTranslatesSyntax(node);
            break;

    }
}


CodeSyntaxCheck.prototype.ifSyntax = function (node) {
    this.setNoErrorInfo(node);
}
CodeSyntaxCheck.prototype.conditionGroupsSyntax = function (node) {
    var children = node.magicalCoder.children;
    if(children.length<=0){
        var _t = this;
        this.setErrorInfo(node,['请在【满足条件组集合】中至少放【一个条件组】'],function (nodeItem,idx) {
            _t.api.appendHtml(nodeItem,_t.code.constant.html.conditionGroup,null);
        });
        return;
    }
    this.setNoErrorInfo(node);
}
CodeSyntaxCheck.prototype.conditionGroupSyntax = function (node) {
    var _t = this;
    if(node.magicalCoder.children.length<=0){
        this.setErrorInfo(node,['【一组条件】内需要放置一个【一个条件】,是否帮你自动添加'],function (nodeItem,idx) {
            _t.api.appendHtml(nodeItem,_t.code.constant.html.condition,null);
        });
        return;
    }
    var preNode = this.api.findPreNode(node.magicalCoder.id);
    if(preNode){
        var preIdentifier = preNode.magicalCoder.identifier;
        switch (preIdentifier) {
            case 'mc-condition-group':
                var _t = this;
                this.setErrorInfo(node,['【一组条件】需要用【逻辑运算符】隔开,是否为您添加一个【并且】运算符'],function (nodeItem,idx) {
                    var parentNode = _t.api.findParentNode(node.magicalCoder.id);
                    if(parentNode){
                        _t.api.appendHtml(parentNode,'<strong class="mc-logic-and">并且</strong>',preNode)
                    }
                });
                return;
        }
    }
    var nextNode = this.api.findNextNode(node.magicalCoder.id);
    if(nextNode){
        var nextIdentifier = nextNode.magicalCoder.identifier;
        switch (nextIdentifier) {
            case 'mc-condition-group':
                var _t = this;
                this.setErrorInfo(node,['【一组条件】需要用【逻辑运算符】隔开,是否为您添加一个【并且】运算符'],function (nodeItem,idx) {
                    var parentNode = _t.api.findParentNode(node.magicalCoder.id);
                    if(parentNode){
                        _t.api.appendHtml(parentNode,'<strong class="mc-logic-and">并且</strong>',node);
                    }
                });
                return;
        }
    }
    //检查孩子节点是否合法
    //检查mc-set-value之间是否

    this.setNoErrorInfo(node);
}
CodeSyntaxCheck.prototype.conditionSyntax = function (node) {
    var _t = this;
    if(node.magicalCoder.children.length<=0){
        this.setErrorInfo(node,['【一个条件】内需要放置一个【比较语句】,是否帮你自动添加'],function (nodeItem,idx) {
            _t.api.appendHtml(nodeItem,_t.code.constant.html.compare,null);
        });
        return;
    }
    var preNode = this.api.findPreNode(node.magicalCoder.id);
    if(preNode){
        var preIdentifier = preNode.magicalCoder.identifier;
        switch (preIdentifier) {
            case 'mc-condition':
                this.setErrorInfo(node,['【一个条件】左侧不能紧跟【一个条件】，需要用逻辑运算符隔开,是否为您添加一个【并且】运算符'],function (nodeItem,idx) {
                    var parentNode = _t.api.findParentNode(node.magicalCoder.id);
                    if(parentNode){
                        _t.api.appendHtml(parentNode,'<strong class="mc-logic-and">并且</strong>',preNode)
                    }
                });
                return;
        }
    }
    var nextNode = this.api.findNextNode(node.magicalCoder.id);
    if(nextNode){
        var nextIdentifier = nextNode.magicalCoder.identifier;
        switch (nextIdentifier) {
            case 'mc-condition':
                this.setErrorInfo(node,['【一个条件】右侧不能紧跟【一个条件】，需要用逻辑运算符隔开,是否为您添加一个【并且】运算符'],function (nodeItem,idx) {
                    var parentNode = _t.api.findParentNode(node.magicalCoder.id);
                    if(parentNode){
                        _t.api.appendHtml(parentNode,'<strong class="mc-logic-and">并且</strong>',node);
                    }
                });
                return;
        }
    }
    //检查孩子节点是否合法
    //检查mc-set-value之间是否

    this.setNoErrorInfo(node);
}


CodeSyntaxCheck.prototype.compareOperatorSyntax = function(node){
    var _t = this;
    var preNode = this.api.findPreNode(node.magicalCoder.id);
    if(!preNode){
        this.setErrorInfo(node,['【比较符】缺少左侧比较对象,是否删除'],function (nodeItem,idx) {
            _t.api.deleteNodes([nodeItem]);
        });
        return;
    }
    var nextNode = this.api.findNextNode(node.magicalCoder.id);
    if(!nextNode){
        this.setErrorInfo(node,['【比较符】缺少右侧比较对象,是否删除'],function (nodeItem,idx) {
            _t.api.deleteNodes([nodeItem]);
        });
        return;
    }else {
        if(nextNode.magicalCoder.identifier == node.magicalCoder.identifier){
            this.setErrorInfo(node,['【比较符】不能紧跟【比较符】,是否删除'],function (nodeItem,idx) {
                _t.api.deleteNodes([nodeItem]);
            });
            return;
        }
    }
    this.setNoErrorInfo(node);
}
CodeSyntaxCheck.prototype.andOrSyntax = function(node){
    var _t = this;
    var preNode = this.api.findPreNode(node.magicalCoder.id);
    if(!preNode){
        this.setErrorInfo(node,['【逻辑运算符】左侧需要放置【一个条件或者一组条件】,是否删除'],function (nodeItem,idx) {
            _t.api.deleteNodes([nodeItem]);
        });
        return;
    }else {//左侧不能是逻辑
        var preIdentifier = preNode.magicalCoder.identifier;
        switch (preIdentifier) {
            case 'mc-condition':
            case 'mc-condition-group':
                break;
            default:
                this.setErrorInfo(node,['【逻辑运算符】左侧需要放置【一个条件或者一组条件】,是否删除'],function (nodeItem,idx) {
                    _t.api.deleteNodes([nodeItem]);
                });
                return;
        }
    }
    var nextNode = this.api.findNextNode(node.magicalCoder.id);
    if(!nextNode){
        this.setErrorInfo(node,['【逻辑运算符】右侧需要放置【一个条件或者一组条件】,是否删除'],function (nodeItem,idx) {
            _t.api.deleteNodes([nodeItem]);
        });
        return;
    }else {//左侧不能是逻辑
        var nextIdentifier = nextNode.magicalCoder.identifier;
        switch (nextIdentifier) {
            case 'mc-condition':
            case 'mc-condition-group':
                break;
            default:
                this.setErrorInfo(node,['【逻辑运算符】右侧需要放置【一个条件】,是否删除'],function (nodeItem,idx) {
                    _t.api.deleteNodes([nodeItem]);
                });
                return;
        }
    }
    this.setNoErrorInfo(node);
}
CodeSyntaxCheck.prototype.notSyntax = function(node){
    var _t = this;
    var nextNode = this.api.findNextNode(node.magicalCoder.id);
    if(!nextNode){
        this.setErrorInfo(node,['【逻辑运算符非】右侧需要放置【一个条件】,是否删除'],function (nodeItem,idx) {
            _t.api.deleteNodes([nodeItem]);
        });
        return;
    }else {//左侧不能是逻辑
        var nextIdentifier = nextNode.magicalCoder.identifier;
        switch (nextIdentifier) {
            case 'mc-condition':
            case 'mc-condition-group':
                break;
            default:
                this.setErrorInfo(node,['【逻辑运算符非】右侧需要放置【一个条件或一组条件】,是否删除'],function (nodeItem,idx) {
                    _t.api.deleteNodes([nodeItem]);
                });
                return;
        }
    }
    this.setNoErrorInfo(node);
}
CodeSyntaxCheck.prototype.mcSetValueSyntax = function(node){
    var _t = this;
    if(node.magicalCoder.children.length<=0){
        this.setErrorInfo(node,['【值】内需要放置一个内容'],function (nodeItem,idx) {
            layer.msg("还是请您拖拽或者配置一个结构进来吧");
            _t.api.focus([node.magicalCoder.id]);
        });
        return;
    }else{
        var content = this.lowCodeUtil.nodeUtil.pubGetNodeContent(node);
        if(this.lowCodeUtil.stringUtil.containsChinese(content)){
              if((!content.startsWith("\"") && !content.endsWith("\""))
                && (!content.startsWith("'") && !content.endsWith("'"))){
                    this.setErrorInfo(node,['【值】内包含中文，请以双引号包裹'],function (nodeItem,idx) {
                        layer.msg("您可以配置成\""+content+"\"");
                        _t.api.focus([node.magicalCoder.id]);
                     });
                    return;
              }
        }
    }
    this.setNoErrorInfo(node);
}
/*自定义的变量名*/
CodeSyntaxCheck.prototype.mcDefinedVariableSyntax = function(node){
    var _t = this;
    if(node.magicalCoder.children.length<=0){
        this.setErrorInfo(node,['【自定义的变量名】不能为空'],function (nodeItem,idx) {
            layer.msg("取个英文字符的名称吧");
            _t.api.focus([node.magicalCoder.id]);
        });
        return;
    }else {
        var name = this.lowCodeUtil.nodeUtil.pubGetNodeContent(node);
        if(name=='def'){
            this.setErrorInfo(node,['【自定义的变量名】def是系统提示名称,为避免重复使用,还是改个其他英文字母名字吧'],function (nodeItem,idx) {
                layer.msg("取个规范的英文字符的名称吧");
                _t.api.focus([node.magicalCoder.id]);
            });
            return;
        }
        if(!(/^[a-zA-Z][a-zA-Z0-9_]*$/g.test(name))){
            this.setErrorInfo(node,['【自定义的变量名】取名规范：请使用字母数字或下划线组成。必须以字母或下划线开头'],function (nodeItem,idx) {
                layer.msg("取个规范的英文字符的名称吧");
                _t.api.focus([node.magicalCoder.id]);
            });
            return;
        }
    }
    this.setNoErrorInfo(node);
}


CodeSyntaxCheck.prototype.requireValueSyntax = function(node){
    var _t = this;
    if(this.lowCodeUtil.stringUtil.isBlank(node.attributes['value'])){
        this.setErrorInfo(node,['请在属性面板选择合适的配置'],function (nodeItem,idx) {
            _t.api.focus([node.magicalCoder.id]);
        },true);
        return;
    }
    this.setNoErrorInfo(node);
}
CodeSyntaxCheck.prototype.ajaxUrlSyntax = function(node){
    var _t = this;
    if(this.lowCodeUtil.stringUtil.isBlank(node.attributes['value'])){
        this.setErrorInfo(node,['请在属性面板选择接口地址'],function (nodeItem,idx) {
            _t.api.focus([node.magicalCoder.id]);
        },true);
        return;
    }
    this.setNoErrorInfo(node);
}
CodeSyntaxCheck.prototype.ajaxParamNameSyntax = function(node){
    var _t = this;
    if(this.lowCodeUtil.stringUtil.isBlank(node.attributes['value'])){
        this.setErrorInfo(node,['请在属性面板配置参数名'],function (nodeItem,idx) {
            _t.api.focus([node.magicalCoder.id]);
        },true);
        return;
    }
    this.setNoErrorInfo(node);
}
CodeSyntaxCheck.prototype.ajaxParamValueSyntax = function(node){
    var _t = this;
    if(this.lowCodeUtil.stringUtil.isBlank(node.attributes['value'])){
        this.setErrorInfo(node,['请在属性面板配置参数值'],function (nodeItem,idx) {
            _t.api.focus([node.magicalCoder.id]);
        },true);
        return;
    }
    this.setNoErrorInfo(node);
}
CodeSyntaxCheck.prototype.ajaxThenTranslatesSyntax = function(node){
    var _t = this;
    var preNode = this.api.findPreNode(node.magicalCoder.id);
    if(preNode){
        this.setErrorInfo(node,['请把我移动到返回处理下第一位，我是在后端返回的数据后，提前把一些配置等转换成友好的文字描述'],function (nodeItem,idx) {
            var parentNode =_t.api.findParentNode(node.magicalCoder.id);
            var children = parentNode.magicalCoder.children;
            if(children && children.length>0){
                _t.api.moveExistNode(node.magicalCoder.id,children[0].magicalCoder.id,'prev');
            }
            _t.api.focus([node.magicalCoder.id]);
        });
        return;
    }

    this.setNoErrorInfo(node);
}


CodeSyntaxCheck.prototype.mcSetVariableSyntax = function(node){
    var _t = this;
    if(node.magicalCoder.children.length<=0){
        this.setErrorInfo(node,['【赋值的变量名】不能为空，您要设置哪个变量的值?'],function (nodeItem,idx) {
            layer.msg("右侧属性选择一个可用变量吧");
            _t.api.focus([node.magicalCoder.id]);
        });
        return;
    }else {
        var name = this.lowCodeUtil.nodeUtil.pubGetNodeContent(node);
        var variableMap = this.code.codeRebuildConstant.searchAllVariableMap();
        if(typeof variableMap[name] == 'undefined'){
            this.setErrorInfo(node,['【赋值的变量名】'+name+'可能是不存在的,右侧属性选择一个可用变量吧'],function (nodeItem,idx) {
                layer.msg("右侧属性选择一个可用变量吧");
                _t.api.focus([node.magicalCoder.id]);
            });
            return;
        }
    }
    this.setNoErrorInfo(node);
}


CodeSyntaxCheck.prototype.setErrorInfo = function (node, errorTitles,errorCallback,errorTooltip) {
    node.magicalCoder.error = true;
    node.magicalCoder.errorTitles = errorTitles;
    node.magicalCoder.errorCallback = errorCallback;
    node.magicalCoder.errorTooltip= errorTooltip||false;
}
CodeSyntaxCheck.prototype.setNoErrorInfo = function (node) {
    node.magicalCoder.error = false;
    node.magicalCoder.errorTitle = [];
    node.magicalCoder.errorCallback = null;
    node.magicalCoder.errorTooltip= false;
}
