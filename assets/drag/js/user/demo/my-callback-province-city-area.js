/**
 * 右侧属性省市区三级联动
 */
/*当页面初始化完成后 我们在左侧加一个示例配置*/
MagicalCallback.prototype.after_start = function(api){
    var constant = api.getConstant();
    var component = {
        name:"常用",
        children:[
            {
                name:"配置示例",
                icon:"assets/drag/img/left/other1.png",
                html:"<div class='mc-demo'>我只是一个示例</div>",
            }
        ]
    };
    //追加头部
    constant.getComponents().unshift(component);

    //增加一个tagClassMapping
    constant.tagClassMapping['mc-demo']={name:"参考示例", dragInto:true, duplicateAttr:[],canDelete:true,assistDelete:true};
    //增加属性配置
    var configs = [
        {type:constant.type.SELECT,clearAttr:true       ,oneLine:true,change:constant.change.ATTR,attrName:'mc-attr-unknown-province',title:'省',tooltip:"",options:[]},
        {type:constant.type.SELECT,clearAttr:true       ,oneLine:true,change:constant.change.ATTR,attrName:'mc-attr-unknown-city',title:'市',tooltip:"",options:[]},
        {type:constant.type.SELECT,clearAttr:true       ,oneLine:true,change:constant.change.ATTR,attrName:'mc-attr-unknown-area',title:'区',tooltip:"",options:[]},
    ]
    var content = constant.getRightPanel()[0].content;
    content['mc-demo']=configs;
    api.refreshAll();
}

MagicalCallback.prototype.pre_build_attrs = function (focusNode,notifyContinueCallback) {
	//示例一：省市区级联功能 加在ecahrts线性表组件上吧
	{
		if(focusNode.magicalCoder.identifier=='mc-demo'){//表示当前操作的组件是echarts线性
			var api = new MagicalApi();
			//先获取节点上配置的省市区的默认值
            var provinceValue = focusNode.attributes['mc-attr-unknown-province'];
            var cityValue = focusNode.attributes['mc-attr-unknown-city'];
            var areaValue = focusNode.attributes['mc-attr-unknown-area'];

			//也支持从后端返回数据 任选 比较适合一次性拿出所有结构化数据来操作 如果数据嵌套总量不多可以考虑 也可以在此优化做缓存
			var treeData = [
		        {name:"安徽省",key:"ah",children:[{name:"合肥市",key:"hf",children:[{name:"蜀山区",key:"ss"},{name:"高新区",key:"gx"}]}]},
		        {name:"浙江省",key:"zj",children:[{name:"杭州市",key:"hz",children:[{name:"滨江区",key:"bj"},{name:"西湖区",key:"xh"}]}]},
	    	]
	    	var provinceOptions = [];
	    	var cityOptions = [];
	    	var areaOptions = [];
	    	for(var i=0;i<treeData.length;i++){
	    		var provinceItem = treeData[i];
	    		var map = {};
	    		map[provinceItem.key]=provinceItem.name;
	    		provinceOptions.push(map);
	    		if(provinceItem.key == provinceValue){
	    			for(var j=0;j<provinceItem.children.length;j++){
	    				var cityItem = provinceItem.children[j];
	    				var cityMap = {};
	    				cityMap[cityItem.key]=cityItem.name;
	    				cityOptions.push(cityMap);
	    				//区
	    				if(cityItem.key == cityValue){
	    					for(var k=0;k<cityItem.children.length;k++){
			    				var areaItem = cityItem.children[k];
			    				var areaMap = {};
			    				areaMap[areaItem.key]=areaItem.name;
			    				areaOptions.push(areaMap);
			    			}
	    				}
	    			}
	    		}
	    	}
	    	//根据此方法获取constant rightPanel的配置
            var provinceList = api.getRightPanelItemListFromConstant("mc-demo",{attrName:"mc-attr-unknown-province"});
            for(var i=0;i<provinceList.length;i++){
                provinceList[i].options=provinceOptions;
            }
            var cityList = api.getRightPanelItemListFromConstant("mc-demo",{attrName:"mc-attr-unknown-city"});
            for(var i=0;i<cityList.length;i++){
                cityList[i].options=cityOptions;
            }
            var areaList = api.getRightPanelItemListFromConstant("mc-demo",{attrName:"mc-attr-unknown-area"});
            for(var i=0;i<areaList.length;i++){
                areaList[i].options=areaOptions;
            }
		}
	}
    notifyContinueCallback();
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
    //示例一： 下面是一个示例 当按钮右侧下拉变化 我们来动态修改它的脚本实现逻辑 达到动态控制方法的目的 而对使用软件的人来说 仅仅配置一个下拉属性
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
    //示例二：
    /*if(obj.changeAttrName=='v-model'){
        var api = new MagicalApi();
        var iframeUi = api.getIframeUi();
        iframeUi.api().removeVueData(obj.originAttrValue);
        iframeUi.api().setVueData(obj.changeAttrValue,"123");

    }*/
    //test
    //示例三：三级联动示例
    if(obj.focusNode.magicalCoder.identifier=='mc-demo'){//当前修改的是mc-demo的属性
    	var api = new MagicalApi();
		//先获取节点上配置的省市区的默认值
	    var provinceValue = obj.focusNode.attributes['mc-attr-unknown-province'];
    	//这个数据 自己考虑是全局还是再获取一下 或者存局部变量
		var treeData = [
	        {name:"安徽省",key:"ah",children:[{name:"合肥市",key:"hf",children:[{name:"蜀山区",key:"ss"},{name:"高新区",key:"gx"}]}]},
	        {name:"浙江省",key:"zj",children:[{name:"杭州市",key:"hz",children:[{name:"滨江区",key:"bj"},{name:"西湖区",key:"xh"}]}]},
    	]
    	if(obj.changeAttrName=='mc-attr-unknown-province'){//修改省属性
    		var cityOptions = [];
    		for(var i=0;i<treeData.length;i++){
	    		var provinceItem = treeData[i];
	    		if(obj.changeAttrValue==provinceItem.key){
	    			for(var j=0;j<provinceItem.children.length;j++){
	    				var cityItem = provinceItem.children[j];
	    				var cityMap = {};
	    				cityMap[cityItem.key]=cityItem.name;
	    				cityOptions.push(cityMap);
	    			}
	    		}
    		}
			var cityList = api.getRightPanelItemListFromConstant("mc-demo",{attrName:"mc-attr-unknown-city"});
            for(var i=0;i<cityList.length;i++){
                cityList[i].options=cityOptions;
            }
            var areaList = api.getRightPanelItemListFromConstant("mc-demo",{attrName:"mc-attr-unknown-area"});
            for(var i=0;i<areaList.length;i++){
                areaList[i].options=[];
            }
    	}else if(obj.changeAttrName=='mc-attr-unknown-city'){//修改市属性
			var areaOptions = [];
    		for(var i=0;i<treeData.length;i++){
	    		var provinceItem = treeData[i];
	    		if(provinceItem.key == provinceValue){
	    			for(var j=0;j<provinceItem.children.length;j++){
	    				var cityItem = provinceItem.children[j];
	    				//区
	    				if(cityItem.key == obj.changeAttrValue){
	    					for(var k=0;k<cityItem.children.length;k++){
			    				var areaItem = cityItem.children[k];
			    				var areaMap = {};
			    				areaMap[areaItem.key]=areaItem.name;
			    				areaOptions.push(areaMap);
			    			}
	    				}
	    			}
	    		}
	    	}
            var areaList = api.getRightPanelItemListFromConstant("mc-demo",{attrName:"mc-attr-unknown-area"});
            for(var i=0;i<areaList.length;i++){
                areaList[i].options=areaOptions;
            }
    	}
	    //此处更改完一定要刷新一下 否则不会生效
        api.refreshRightAttrPane(obj.focusNode.magicalCoder.id);

    }
}
