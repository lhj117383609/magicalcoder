/*js浏览器ie兼容性重写*/
if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (prefix){
        return this.slice(0, prefix.length) === prefix;
    };
}
if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function (suffix){
        return this.slice(-1*suffix.length) === suffix;
    };
}
if (typeof String.prototype.trimRight != 'function') {
    String.prototype.trimRight = function (){
        return this.replace(/\s+$/g, '');;
    };
}
if (typeof String.prototype.trimLeft != 'function') {
    String.prototype.trimLeft = function (){
        return this.replace(/^\s+/g, '');
    };
}
if (typeof String.prototype.trim != 'function') {
    String.prototype.trim = function (){
        return this.replace(/^\s+|\s+$/g, '');
    };
}
if (typeof Object.assign != "function") {
    Object.assign = function(target) {
        "use strict";
        if (target == null) {
            throw new TypeError("Cannot convert undefined or null to object");
        }

        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
}
function MagicalCoderUtil() {
    this.ctx = "/lowcode-web/";//后端
    this.frontCtx = "/lowcode/";//前端
    this.functionName = {
        _pageNum:"_pageNum",//分页时当前页参数
        _switchValue:"_currentSwitchValue",//开关按钮新值
        _radioGroupValue:"_currentChooseRadioGroupValue",
        _checkboxGroupValue:"_currentChooseCheckboxGroupValue",
        _inputValue:"_currentInputValue",
        _inputNumberValue:"_currentInputNumberValue",
        _oldInputNumberValue:"_oldInputNumberValue",
        _selectValue:"_currentSelectValue",
        _sliderValue:"_currentSliderValue",
        _currentValue:"_currentValue",
        _keywordValue:"_keyword",
    }
    //正则规则
    this.regRules = {
        //表单字段规则
        formFieldReg:"^[a-zA-Z][a-zA-Z0-9_]*$",
        //页面字段规则
        pageVariableReg:"^[a-zA-Z][a-zA-Z0-9_\\[\\]\\.]*$"
    }
}
MagicalCoderUtil.prototype.isBlank = function (str) {
    return typeof str =='undefined' || str==null || str+""=="";
}
MagicalCoderUtil.prototype.isNotBlank = function (str) {
    return !this.isBlank(str);
}
MagicalCoderUtil.prototype.isEmptyArr = function(arr){
    return typeof arr == 'undefined' || arr == null || arr.length<=0;
}
MagicalCoderUtil.prototype.existInArr = function (arr,item) {
    if(typeof arr == 'undefined' || arr == null || arr.length<=0){
        return false;
    }
    else if(this.isBlank(item)){
        return false;
    }
    for(var i=0;i<arr.length;i++){
        if(item == arr[i]){
            return true;
        }
    }
    return false;
}
MagicalCoderUtil.prototype.mapToKeyValue = function (map) {
    if(map==null || typeof map == 'undefined'){
        return null;
    }
    for(var key in map){
        return {key:key,value:map[key]};
    }
    return null;
}
MagicalCoderUtil.prototype.deleteFromArr = function (arr, deleteItem) {
    if(this.isEmptyArr(arr)){
        return [];
    }
    for(var i=0;i<arr.length;i++){
        if(arr[i] == deleteItem){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}
MagicalCoderUtil.prototype.getParameter = function (name) {
    var query = window.location.search.substring(1);
    if(query!=''){
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair.length=2){
                if(pair[0] == name){return decodeURIComponent(pair[1]);}
            }
        }
    }
    return null;
}
MagicalCoderUtil.prototype.listToMap = function (fieldName, list) {
    var map = {}
    if(list && list.length>0){
        for(var i=0;i<list.length;i++){
            var obj = list[i];
            var value = obj[fieldName];
            map[value] = obj;
        }
    }
    return map;
}
MagicalCoderUtil.prototype.arrEqual = function (arr1, arr2) {
    if(typeof arr1 == 'undefined' && typeof arr2 == 'undefined'){
        return true;
    }
    if(arr1 && arr1.length==0 && arr2 && arr2.length==0){
        return true;
    }
    if(arr1.length != arr2.length){
        return false;
    }
    for(var i=0;i<arr1.length;i++){
        var exist = false;
        for(var j=0;j<arr2.length;j++){
            if(arr1[i] == arr2[j]){
                exist = true;
                break;
            }
        }
        if(!exist){
            return false;
        }
    }
    return true;
}
MagicalCoderUtil.prototype.combineArr = function (arr1, arr2) {
    if(arr2 && arr2.length>0){
        for(var i=0;i<arr2.length;i++){
            arr1.push(arr2[i]);
        }
    }
}
/**
 * 页面跳转
 * @param url
 * @param type :_blank
 */
MagicalCoderUtil.prototype.openUrl = function (url,type) {
    var tempWindow=window.open(type); // 先打开页面
    tempWindow.location=url; // 后更改页面地址
}
//el-上传文件组件 比较奇怪 不是动态的
MagicalCoderUtil.prototype.elUploadFileList = function (uploadFiles) {
    var arr = [];
    if(uploadFiles && uploadFiles.length>0){
        for(var i=0;i<uploadFiles.length;i++){
            var item = uploadFiles[i];
            if(item){
                var res = item.response;
                if(res){
                    if(res.flag){
                        arr.push(res.data);
                    }
                }else {
                    arr.push({name:item.name,url:item.url})
                }
            }
        }
    }
    return arr;
}

MagicalCoderUtil.prototype.axios = function (_t,url,param,method,callback) {
    var _this = this;
    switch (method) {
        case 'get':
            axios({
                url: commonUtil.ctx+url,
                method: method,
                params: param,
                transformRequest: [function (data) {
                    var ret = ''
                    for (var it in data) {
                        if(data[it]!=null) {
                            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                        }
                    }
                    return ret
                }],
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).catch(function (error) {
                // _t.$message.error("网络异常");
                return false;
            }).then(function(response) {
                _this.axiosThen(response,_t,callback);
            })
            break;
        case 'post':
            axios({
                url: commonUtil.ctx+url,
                method: method,
                data: param,
                transformRequest: [function (data) {
                    var ret = ''
                    for (var it in data) {
                        if(data[it]!=null) {
                            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                        }
                    }
                    return ret
                }],
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).catch(function (error) {
                // _t.$message.error("网络异常");
                return false;
            }).then(function(response) {
                _this.axiosThen(response,_t,callback);
            })
            break;
    }

}
MagicalCoderUtil.prototype.axiosThen = function(response,_t,callback){
    var _this = this;
    if(!response){
        _t.$message.error("网络异常");
        return;
    }
    var data = response.data;
    if(!data.flag){
        _t.$message.error(data.desc)
        if(data.code==10000){
            setTimeout(function () {
                _this.redirectToLoginPage();
            },2000)
        }else if(data.code == 11000){
            //弹窗提示注册成开发者
            // window.location.href='';
        }
    }else {
        if(callback){
            callback(response.data);
        }
    }
}
MagicalCoderUtil.prototype.redirectToLoginPage = function () {
    window.location.href=this.frontCtx+'userinfo/login.html';
}

MagicalCoderUtil.prototype.isVariable = function (str) {
    var reg = /^[a-zA-Z][a-zA-Z0-9_]*$/g;
    var result = reg.test(str);
    return result;
}

MagicalCoderUtil.prototype.apiConstantTagClassMapping = function () {
    return {
        /*这个是api-constant.js的配置 因为要在此页面自动配置 所以需要这些identifier*/
        "mc-find-param-groups":{name:"查询参数组集合",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,       paste:true, canDelete:false, onlyChildren:['mc-find-param-group','mc-find-param-groups-logic-name'],onlyParents:['mc-find','mc-delete','mc-update'],assistAdd:true,addOneItems:[{"":[{html:'<div class="layui-col-xs12 mc-find-param-group"><input class="layui-input mc-find-param-group-logic-name" type="text" readonly placeholder="组内逻辑运算" value="且" /><div class="layui-col-xs12 mc-find-param"><input class="layui-input mc-db-name" type="text" readonly placeholder="选择字段" value="" /><input class="layui-input mc-db-compare" type="text" readonly placeholder="比较符" value="等于" /><input class="layui-input mc-db-value" type="text" readonly placeholder="值" mc-is-variable /></div></div>',focus:false}]}]    },
        "mc-find-param-groups-logic-name":{name:"组间逻辑运算符",dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false, onlyParents:['mc-find-param-groups']    },
        "mc-find-param-group":{name:"一组参数",canZoom:true,assistZoom:true,dragInto:true,      duplicate:true,duplicateAttr:[],        copy:true,       paste:false, canDelete:true, onlyChildren:['mc-find-param-group-logic-name','mc-find-param'],onlyParents:['mc-find-param-groups'],assistDuplicate:true,assistDelete:true,assistAdd:true,addOneItems:[{"":[{html:'<div class="layui-col-xs12 mc-find-param"><input class="layui-input mc-db-name" type="text" readonly placeholder="选择字段" value="" /><input class="layui-input mc-db-compare" type="text" readonly placeholder="比较符" value="等于" /><input class="layui-input mc-db-value" type="text" readonly placeholder="值" mc-is-variable /></div>',focus:false}]}]     },
        "mc-find-param-group-logic-name":{name:"组内逻辑运算符",dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false,onlyParents:['mc-find-param-group']     },
        "mc-find-param":{name:"参数",dragInto:true,      duplicate:true,duplicateAttr:[],        copy:true,       paste:false, canDelete:true, onlyChildren:['mc-db-name','mc-db-compare','mc-db-value'],onlyParents:['mc-find-param-group'],assistDuplicate:true,assistDelete:true    },
        "mc-db-name":{name:"参数名",treeExtraName:{attr:['value'],text:false},dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false, onlyParents:['mc-find-param']    },
        "mc-db-compare":{name:"比较符",treeExtraName:{attr:['value'],text:false},dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false,onlyParents:['mc-find-param']    },
        "mc-db-value":{name:"参数值",treeExtraName:{attr:['value'],text:false},dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false, onlyParents:['mc-find-param']   },
        "mc-find-sorts":{name:"排序集合",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,       paste:true, canDelete:false,assistAdd:true, onlyChildren:['mc-find-sort'],onlyParents:['mc-find'] ,addOneItems:[{"":[{html:'<div class="layui-col-xs12 mc-find-sort"><input class="layui-input mc-find-sort-name" type="text" readonly placeholder="选择字段" /><input class="layui-input mc-find-sort-method" type="text" readonly placeholder="排序方式" /></div>',focus:false}]}]    },
        "mc-find-sort":{name:"排序",dragInto:true,      duplicate:true,duplicateAttr:[],        copy:false,       paste:false, canDelete:true,assistDelete:true,assistDuplicate:true, onlyChildren:['mc-find-sort-name','mc-group-count-sort-name','mc-find-sort-param'],onlyParents:['mc-find-sorts']    },
        "mc-find-sort-name":{name:"字段名",dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false, onlyParents:['mc-find-sort']    },
        "mc-find-sort-method":{name:"排序方式",dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false, onlyParents:['mc-find-sort']    },
        "mc-find-return-type-box":{name:"返回条数类型",dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false, onlyParents:['mc-find'],onlyChildren:['mc-find-return-type']    },
        "mc-find-return-type":{name:"条数类型",dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false,onlyParents:['mc-find-return-type-box']   },
        "mc-find-return-name-box":{name:"返回字段",dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false,onlyParents:['mc-find'], onlyChildren:['mc-find-return-name']    },
        "mc-find-return-name":{name:"字段名",dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false,onlyParents:['mc-find-return-name-box']   },
        // "mc-find-logic-name":{name:"逻辑运算符",dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false   },
        "mc-find-page":{name:"分页",dragInto:true,      duplicate:true,duplicateAttr:[],        copy:false,       paste:false, canDelete:false, onlyChildren:['mc-find'],onlyChildren:['mc-find-page-num','mc-find-page-limit','mc-find-page-total-count']    },
        "mc-find-page-num":{name:"当前页码",dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false , onlyChildren:['mc-find-page']  },
        "mc-find-page-limit":{name:"返回条数",dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false, onlyChildren:['mc-find-page']    },
        "mc-find-page-total-count":{name:"是否返回总条数",dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false, onlyChildren:['mc-find-page']    },
        "mc-set-params":   {name:"设置集合",canZoom:true,assistZoom:true,dragInto:true,assistAdd:true,      duplicate:false,duplicateAttr:[],        copy:false,   paste:true, canDelete:false,onlyParents:['mc-insert','mc-update','mc-delete'], onlyChildren:['mc-set-param'],addOneItems:[{"":[{html:'<div class="layui-col-xs12 mc-set-param"><input class="layui-input mc-db-name" type="text" readonly placeholder="选择字段" value="" /><input class="layui-input mc-update-type" type="text" readonly placeholder="赋值方式" value="等于" /><input class="layui-input mc-db-value" type="text" readonly placeholder="值:如果选择动态传参，则配置的自定义值不生效" mc-is-variable /></div>',focus:false}]}]     },
        "mc-set-param":    {name:"设置",dragInto:true,assistDelete:true,assistDuplicate:true,      duplicate:true,duplicateAttr:[],        copy:false,       paste:false, canDelete:true,onlyParents:['mc-set-params'], onlyChildren:['mc-db-name','mc-db-value']    },
        "mc-find-count":      {name:"查询条数",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:true,assistDelete:true, onlyChildren:['mc-find-logic','mc-find-params']    },
        "mc-find":      {name:"查询数据",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:true,assistDelete:true, onlyChildren:['mc-find-logic','mc-find-params']    },
        "mc-insert":    {name:"插入数据",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:true,assistDelete:true, onlyChildren:['mc-insert-param']    },
        "mc-delete":    {name:"删除数据",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:true,assistDelete:true, onlyChildren:['mc-delete-param']    },
        "mc-update":    {name:"修改数据",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:true,assistDelete:true, onlyChildren:['mc-delete-param']    },
        "mc-math-set":{name:"赋值为",treeExtraName:{attr:[],text:true},dragInto:false, copy:true,      paste:false,    canDelete:false},
        "mc-update-type":{name:"赋值方式",treeExtraName:{attr:['value'],text:false},dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false,onlyParents:['mc-set-param']    },

        "mc-group-count":{name:"条数分组",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:true,assistDelete:true, onlyChildren:['mc-find-logic','mc-find-params']    },
        "mc-group-by-name-box":{name:"分组字段",dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false,onlyParents:['mc-find'], onlyChildren:['mc-find-return-name']    },
        "mc-group-by-name":{name:"字段名",dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false,onlyParents:['mc-find-return-name-box']   },
        "mc-group-count-sort-name":{name:"字段名",dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false, onlyParents:['mc-find-sort']    },

        "mc-group-count-returns":{name:"分组返回集合",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,       paste:true, canDelete:false, onlyChildren:['mc-group-count-return'],onlyParents:['mc-group-count'],assistAdd:true,addOneItems:[{"":[{html:"<div class='layui-col-xs12 mc-group-count-return'><input class='layui-input mc-group-count-return-name' type='text' readonly placeholder='自定义返回字段名'/><input class='layui-input mc-group-count-calc-func' type='text' readonly placeholder='分组计算方法'/><input class='layui-input mc-group-count-calc-obj' type='text' readonly placeholder='参与分组计算参数'/></div>",focus:false}]}]    },
        "mc-group-count-return":{name:"一组返回",dragInto:true,      duplicate:true,duplicateAttr:[],        copy:true,       paste:false, canDelete:true, onlyChildren:['mc-group-count-return-name','mc-group-count-calc-func','mc-group-count-calc-obj'],onlyParents:['mc-group-count-returns'],assistDuplicate:true,assistDelete:true},
        "mc-group-count-return-name":{name:"分组返回字段名",dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false,onlyParents:['mc-group-count-return']   },
        "mc-group-count-calc-func":{name:"分组计算方法",dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false,onlyParents:['mc-group-count-return']   },
        "mc-group-count-calc-obj":{name:"分组计算参数",dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false,onlyParents:['mc-group-count-return']   },

        "mc-aggregate":{name:"关联查询",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:true,assistDelete:true, onlyChildren:['mc-lookups','mc-find-logic','mc-find-params']    },
        "mc-lookups":{name:"关联表组",canZoom:true,assistZoom:true,dragInto:true,      duplicate:false,duplicateAttr:[],       copy:false,       paste:true, canDelete:false, onlyChildren:['mc-lookup'],onlyParents:['mc-aggregate'],assistAdd:true,addOneItems:[{"":[{html:"<div class='layui-col-xs12 mc-lookup'><input class='layui-input mc-lookup-from' type='text' readonly placeholder='选择关联表' /><input class='layui-input mc-lookup-local-field' type='text' readonly placeholder='选择当前表字段' /><input class='layui-input mc-lookup-foreign-field' type='text' readonly placeholder='选择关联表字段' /><input class='layui-input mc-lookup-as' type='text' readonly placeholder='定义返回名称' /></div>",focus:false}]}]    },
        "mc-lookup":{name:"关联表"   ,canZoom:true,assistZoom:true,dragInto:true,   assistDuplicate:true,  duplicate:true,duplicateAttr:[],         copy:false,       paste:false, assistDelete:true,canDelete:true, onlyChildren:['mc-lookup-from','mc-lookup-local-field','mc-lookup-foreign-field','mc-lookup-as'],onlyParents:['mc-lookups']    },
        "mc-lookup-from":{name:"关联表名",treeExtraName:{attr:['value'],text:false},dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false, onlyParents:['mc-lookup']    },
        "mc-lookup-local-field":{name:"关联表名",treeExtraName:{attr:['value'],text:false},dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false, onlyParents:['mc-lookup']    },
        "mc-lookup-foreign-field":{name:"关联表名",treeExtraName:{attr:['value'],text:false},dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false, onlyParents:['mc-lookup']    },
        "mc-lookup-as":{name:"关联表名",treeExtraName:{attr:['value'],text:false},dragInto:false,      duplicate:false,duplicateAttr:[],        copy:false,       paste:false, canDelete:false, onlyParents:['mc-lookup']    },
    }
}

MagicalCoderUtil.prototype.laytpl = function (template, renderObj) {
    template = template.replace(/\n/g,"--换行--");//layui会替换\n为空 导致换行没了
    var value = laytpl(template).render(renderObj);
    value = value.replace(/--换行--/g,"\n");
    return value;
}
/**
 * 打开新窗口
 * @param url 地址
 * @param method get post
 * @param target _blank ''
 */
MagicalCoderUtil.prototype.openWindow = function(action,method,target,data){
    var form = $('form');
    form.html('')
    form.hide();
    form.attr("id","caonima");
    form.attr("action",action);
    form.attr("method",method);
    if(target) {
        form.attr("target", target);
    }
    if(data){
        for(var key in data){
            var textarea = $("<textarea name='"+key+"'></textarea>");
            var value = data[key];
            value = value.replace(/</g,"&lt;");
            textarea.val(value);
            form.append(textarea);
        }
    }
    form.submit();
}
var magicalCoderUtil = new MagicalCoderUtil();
