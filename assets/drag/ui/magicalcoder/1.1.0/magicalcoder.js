/*为您初始化各种组件*/
/*
1 由于echarts的配置成百上千个 更像一门语言 所以我们布局器里并未穷尽 不然数据配置量实在太大 还请您自己根据业务需求 定制化一些参数
2 业务集成：
    通常您的业务中要集成图标显示，可能是选择了某几种echarts 然后针对性的结合自己的业务来定制，这中间就掺杂了需要从后端获取的业务数据 以及从
    布局器上配置的数据 进行合并，最终绘制出来 为您提供一种思路可参考

    a 定制一个echart组件
    b 选择部分比较重要的属性让用户来定制
    c 组件的属性一栏增加个数据源 让用户选择他的数据来源(这个多半来自现有的业务中)
    d 仔细阅读.setOption(option);前面部分的代码 当获取控件时，获取到用户配置的数据源后
    此时ajax请求后端，把这个数据源参数传过去，让后端给出具体的数据处理（流程到了后端 肯定想要什么就能获取什么了）
    e 如果听不懂 那就把McECharts当做你正在写echarts的代码 吃透 该改的地方改一改即可

3 然后解析控件上配置的属性值到option
鉴于echarts的配置都是采用驼峰式
我们制定了以下规则
mc-attr-
        bool-
             is_new="true"
        str-
            user_info-
                      user_name="优雅的代码"
        num-
            user_info-
                      user_age="12"
        json-
规则：
    mc-attr-:配置属性
    bool- str- num- json- 数据类型
    _下划线后面的字符会转成大写
    -则自动分隔
    多个key连接则代码是obj

例如：
<div mc-attr-bool-is_new="true" mc-attr-str-user_info-user_name="优雅的代码" mc-attr-num-user_info-user_age="12"></div>

换算到下面就是
{
    isNew:true,
    userInfo:{userName:"优雅的代码",userAge:12}
}
 */

function McECharts() {
    this.valueType = {
        BOOL:"bool",
        STR:"str",
        NUM:"num",
        JSON:"json",
        ARRAY:"array",
        UNKNOWN:"unknown",
    }
}
McECharts.prototype.render = function(){
    this.line();
    this.bar();
    this.pie();
    this.scatter();
    this.radar();
    this.k();
    this.tree();
    this.funnel();
    this.gauge();
    this.boxplot();
    this.sunburst();
    this.treemap();
    this.pictorialbar();
    this.sankey();
    this.parallel();
    this.themeriver();
    this.dataset();
}
/*遍历属性然后给option*/
McECharts.prototype.iteratorDomAttrToOption = function(echartDom){
    var attrs = echartDom.attributes;
    var option = {};
    for (var i = 0; i < attrs.length; i++) {
        var attr = attrs[i];
        var name = attr.name;
        var value = attr.value;
        if (name.indexOf("mc-") === 0) {
            name = name.replace("mc-attr-", '');
            var valueType = null;
            var nameArr = [];
            if (name.indexOf('str-') === 0) {
                name = name.replace('str-', '');
                valueType = this.valueType.STR;
            } else if (name.indexOf('bool-') === 0) {
                name = name.replace('bool-', '');
                valueType = this.valueType.BOOL;
            } else if (name.indexOf('num-') === 0) {
                name = name.replace('num-', '');
                valueType = this.valueType.NUM;
            } else if (name.indexOf('json-') === 0) {
                name = name.replace('json-', '');
                valueType = this.valueType.JSON;
            }else if (name.indexOf('array-') === 0) {
                name = name.replace('array-', '');
                valueType = this.valueType.ARRAY;
            }else if (name.indexOf('unknown-') === 0) {
                name = name.replace('unknown-', '');
                valueType = this.valueType.UNKNOWN;
            }
            nameArr = name.split("-");
            this._attrToOption(nameArr,option,valueType,value);
        }
    }
    return option;
}
//将 a_b_c="1" 转成 a.b.c:1
McECharts.prototype._attrToOption = function(nameArr,option,valueType,value){
    // var arr = longName.split("-");
    var len = nameArr.length;
    var variableName = this.htmlAttrNameToTuoFeng(nameArr[0]);
    if(len == 1){
        var value = this.parseAttrValue(valueType,value);
        option[variableName] = value;
    }else if(len>1) {
        nameArr.shift();//删除第一个
        if(typeof option[variableName] == 'undefined'){
            option[variableName] = {};
        }
        this._attrToOption(nameArr,option[variableName],valueType,value);
    }
}

McECharts.prototype.parseAttrValue = function(valueType,value){
    switch (valueType) {
        case this.valueType.BOOL:
            value == 'true' || value === '' ? value = true: value = value;
            value == 'false' ? value = false: value = value;
            break;
        case this.valueType.STR:
            break;
        case this.valueType.NUM:
            if (value !== '' && !isNaN(value)) {
                value = parseFloat(value);
            }
            break;
        case this.valueType.JSON:
            if (value !== '') {
                value = JSON.parse(value);
            }
            break;
        case this.valueType.ARRAY:
            if (value !== '') {
                value = JSON.parse("["+value+"]");
            }else {
                value = [];
            }
            break;
    }

    return value;
}

/**
 * 把下划线的名称转成驼峰命名方式
 */
McECharts.prototype.htmlAttrNameToTuoFeng = function (name) {
    var arr = name.split("_");
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (i != 0) {
            if (arr[i] != '') {
                newArr.push(this.firstCharToUpLower(arr[i]));
            }
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr.join('');
}
//首字母大写
McECharts.prototype.firstCharToUpLower = function (name) {
    var arr = name.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
}

McECharts.prototype.combineSeries = function(option,userConfigOption){
    //把用户配置的series的数据分别拷贝到这个option里 公用
    var series = userConfigOption.series;
    if(typeof series != "undefined"){
        var os = option.series;
        for(var i=0;i<os.length;i++){
            var seria = os[i];
            Object.assign(seria,series);
        }
        delete userConfigOption['series'];
    }
    //注意这里是拷贝属性 就是把用户的配置与（您后端 如果您采用把option的数据从后端返回）option合并覆盖
    Object.assign(option,userConfigOption);
}

McECharts.prototype.line = function () {
    var charsDoms = document.getElementsByClassName("mc-echarts-line");
    for(var i=0;i<charsDoms.length;i++){
        var echartDom = charsDoms[i];
        //第一步 让用户把基础的配置都通过布局器做好了
        var userConfigOption = this.iteratorDomAttrToOption(echartDom);
        //此处如果您想写死echart的配置 那么修改即可重新设置userConfigOption里的某个配置
        var myLine = echarts.init(echartDom);
        {
            var api = userConfigOption.api;//数据源配置
            //第二步：正常来说 您可能需要从此行开始ajax请求后端带着api参数 然后返回一个option 动态的来设置echarts的数据 todo
            var option = {
                xAxis:{
                    type:"category",
                    data:["数据","部分","请按","文档","打通","后端","接口"]
                },
                yAxis:{
                    type:"value"
                },
                series:[
                    {
                        data:[4,6,4],
                        type:'line',
                        name:"haha"
                    },{
                        data:[,,,,4,6,4],
                        type:'line',
                    },{
                        data:[,,2,0,2],
                        type:'line',
                    }
                ]
            }
            this.combineSeries(option,userConfigOption);
            myLine.setOption(option);
            myLine.resize();
        }
    }
}

McECharts.prototype.bar = function () {
    var charsDoms = document.getElementsByClassName("mc-echarts-bar");
    for(var i=0;i<charsDoms.length;i++){
        var echartDom = charsDoms[i];
        //第一步 让用户把基础的配置都通过布局器做好了
        var userConfigOption = this.iteratorDomAttrToOption(echartDom);
        //此处如果您想写死echart的配置 那么修改即可重新设置userConfigOption里的某个配置
        var myLine = echarts.init(echartDom);
        {
            var api = userConfigOption.api;//数据源配置
            //第二步：正常来说 您可能需要从此行开始ajax请求后端带着api参数 然后返回一个option 动态的来设置echarts的数据 todo
            var option = {
                xAxis:{
                    type:"category",
                    data:["数据","部分","请按","文档","打通","后端","接口"]
                },
                yAxis:{
                    type:"value"
                },
                series:[
                    {
                        data:[1,2,3,4,5,6,7],
                        type:'bar'
                    }
                ]
            }
            this.combineSeries(option,userConfigOption);
            myLine.setOption(option);
            myLine.resize();
        }
    }
}

McECharts.prototype.pie = function () {
    var charsDoms = document.getElementsByClassName("mc-echarts-pie");
    for(var i=0;i<charsDoms.length;i++){
        var echartDom = charsDoms[i];
        //第一步 让用户把基础的配置都通过布局器做好了
        var userConfigOption = this.iteratorDomAttrToOption(echartDom);
        //此处如果您想写死echart的配置 那么修改即可重新设置userConfigOption里的某个配置
        var myLine = echarts.init(echartDom);
        {
            var api = userConfigOption.api;//数据源配置
            //第二步：正常来说 您可能需要从此行开始ajax请求后端带着api参数 然后返回一个option 动态的来设置echarts的数据 todo
            var option = {
                backgroundColor: '#2c343c',
                title: {
                    text: '普通饼图',
                    left: 'center',
                    top: 20,
                    textStyle: {
                        color: '#ccc'
                    }
                },

                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },

                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '50%'],
                        data: [
                            {value: 100, name: '数据'},
                            {value: 110, name: '部分'},
                            {value: 120, name: '请按'},
                            {value: 140, name: '文档'},
                            {value: 150, name: '打通'},
                            {value: 160, name: '后端'}
                        ].sort(function (a, b) { return a.value - b.value; }),
                        roseType: 'radius',
                        label: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        labelLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        },
                        itemStyle: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },

                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                            return Math.random() * 200;
                        }
                    }
                ]
            }
            this.combineSeries(option,userConfigOption);
            myLine.setOption(option);
            myLine.resize();             
        }
    }
}

McECharts.prototype.scatter = function () {
    var charsDoms = document.getElementsByClassName("mc-echarts-scatter");
    for(var i=0;i<charsDoms.length;i++){
        var echartDom = charsDoms[i];
        //第一步 让用户把基础的配置都通过布局器做好了
        var userConfigOption = this.iteratorDomAttrToOption(echartDom);
        //此处如果您想写死echart的配置 那么修改即可重新设置userConfigOption里的某个配置
        var myLine = echarts.init(echartDom);
        {
            var api = userConfigOption.api;//数据源配置
            //第二步：正常来说 您可能需要从此行开始ajax请求后端带着api参数 然后返回一个option 动态的来设置echarts的数据 todo
            var option =  {
                xAxis: {},
                yAxis: {},
                series: [{
                    symbolSize: 20,
                    data: [
                        [10.0, 8.04],
                        [8.0, 6.95],
                        [13.0, 7.58],
                        [9.0, 8.81],
                        [11.0, 8.33],
                        [14.0, 9.96],
                        [6.0, 7.24],
                        [4.0, 4.26],
                        [12.0, 10.84],
                        [7.0, 4.82],
                        [5.0, 5.68]
                    ],
                    type: 'scatter'
                }]
            }
            this.combineSeries(option,userConfigOption);
            myLine.setOption(option);
            myLine.resize();
        }
    }
}

McECharts.prototype.radar = function () {
    var charsDoms = document.getElementsByClassName("mc-echarts-radar");
    for(var i=0;i<charsDoms.length;i++){
        var echartDom = charsDoms[i];
        //第一步 让用户把基础的配置都通过布局器做好了
        var userConfigOption = this.iteratorDomAttrToOption(echartDom);
        //此处如果您想写死echart的配置 那么修改即可重新设置userConfigOption里的某个配置
        var myLine = echarts.init(echartDom);
        {
            var api = userConfigOption.api;//数据源配置
            //第二步：正常来说 您可能需要从此行开始ajax请求后端带着api参数 然后返回一个option 动态的来设置echarts的数据 todo
            var option =  {
                title: {
                    text: '游戏数据统计'
                },
                tooltip: {},
                legend: {
                    left:"right",
                    data: ['选手A', '选手B']
                },
                radar: {
                    // shape: 'circle',
                    name: {
                        textStyle: {
                            color: '#fff',
                            backgroundColor: '#999',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    indicator: [
                        { name: '攻击', max: 6500},
                        { name: '防御', max: 16000},
                        { name: '辅助', max: 30000},
                        { name: '打野', max: 38000},
                        { name: '推塔', max: 52000},
                        { name: '助攻', max: 25000}
                    ]
                },
                series: [{
                    name: '选手A vs 选手B',
                    type: 'radar',
                    // areaStyle: {normal: {}},
                    data: [
                        {
                            value: [4300, 10000, 28000, 35000, 50000, 19000],
                            name: '选手A'
                        },
                        {
                            value: [5000, 14000, 28000, 31000, 42000, 21000],
                            name: '选手B'
                        }
                    ]
                }]
            }
            this.combineSeries(option,userConfigOption);
            myLine.setOption(option);
            myLine.resize();
        }
    }
}
McECharts.prototype.k = function () {
    var charsDoms = document.getElementsByClassName("mc-echarts-k");
    for(var i=0;i<charsDoms.length;i++){
        var echartDom = charsDoms[i];
        //第一步 让用户把基础的配置都通过布局器做好了
        var userConfigOption = this.iteratorDomAttrToOption(echartDom);
        //此处如果您想写死echart的配置 那么修改即可重新设置userConfigOption里的某个配置
        var myLine = echarts.init(echartDom);
        {
            var api = userConfigOption.api;//数据源配置
            //第二步：正常来说 您可能需要从此行开始ajax请求后端带着api参数 然后返回一个option 动态的来设置echarts的数据 todo
            var option =  {
                title: {
                    text: 'K线图'
                },
                xAxis: {
                    data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
                },
                yAxis: {},
                series: [{
                    type: 'k',
                    data: [
                        [20, 30, 10, 35],
                        [40, 35, 30, 55],
                        [33, 38, 33, 40],
                        [40, 40, 32, 42]
                    ]
                }]
            }
            this.combineSeries(option,userConfigOption);
            myLine.setOption(option);
            myLine.resize();
        }
    }
}
McECharts.prototype.tree = function () {
    var charsDoms = document.getElementsByClassName("mc-echarts-tree");
    for(var i=0;i<charsDoms.length;i++){
        var echartDom = charsDoms[i];
        //第一步 让用户把基础的配置都通过布局器做好了
        var userConfigOption = this.iteratorDomAttrToOption(echartDom);
        //此处如果您想写死echart的配置 那么修改即可重新设置userConfigOption里的某个配置
        var myLine = echarts.init(echartDom);
        {
            var api = userConfigOption.api;//数据源配置
            //第二步：正常来说 您可能需要从此行开始ajax请求后端带着api参数 然后返回一个option 动态的来设置echarts的数据 todo
            var option =  {
                title: {
                    text: '树形',
                    subtext:'实际数据可以阅读我们代码自动接入'
                },
                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove'
                },
                series: [
                    {
                        type: 'tree',

                        data: [
                            {
                                "name": "中国",
                                "children": [{
                                    "name": "安徽省",
                                    collapsed:false,
                                    "children": [{
                                        "name": "合肥",
                                        collapsed:false,
                                        "children": [{
                                            "name": "高新区",
                                            "value": 1
                                        }, {
                                            "name": "政务区",
                                            "value": 2
                                        }]
                                    }, {
                                        "name": "阜阳",
                                        collapsed:false,
                                        "children": [{
                                            "name": "阜南县",
                                            "value": 3
                                        }]
                                    }]
                                }]
                            }
                         ],

                        top: '1%',
                        left: '7%',
                        bottom: '1%',
                        right: '20%',

                        symbolSize: 7,

                        label: {
                            position: 'left',
                            verticalAlign: 'middle',
                            align: 'right',
                            fontSize: 9
                        },

                        leaves: {
                            label: {
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left'
                            }
                        },

                        expandAndCollapse: true,
                        animationDuration: 550,
                        animationDurationUpdate: 750
                    }
                ]
            }
            this.combineSeries(option,userConfigOption);
            myLine.setOption(option);
            myLine.resize();
        }
    }
}

McECharts.prototype.funnel = function () {
    var charsDoms = document.getElementsByClassName("mc-echarts-funnel");
    for(var i=0;i<charsDoms.length;i++){
        var echartDom = charsDoms[i];
        //第一步 让用户把基础的配置都通过布局器做好了
        var userConfigOption = this.iteratorDomAttrToOption(echartDom);
        //此处如果您想写死echart的配置 那么修改即可重新设置userConfigOption里的某个配置
        var myLine = echarts.init(echartDom);
        {
            var api = userConfigOption.api;//数据源配置
            //第二步：正常来说 您可能需要从此行开始ajax请求后端带着api参数 然后返回一个option 动态的来设置echarts的数据 todo
            var option =  {
                title: {
                    text: '漏斗图',
                    subtext: '实际数据可以阅读我们代码自动接入'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                legend: {
                    data: ['VIP付费用户','普通付费用户','注册用户量','访问量']
                },

                series: [
                    {
                        name:'漏斗图',
                        type:'funnel',
                        left: '10%',
                        top: 60,
                        //x2: 80,
                        bottom: 60,
                        width: '80%',
                        // height: {totalHeight} - y - y2,
                        min: 0,
                        max: 100,
                        minSize: '0%',
                        maxSize: '100%',
                        sort: 'descending',
                        gap: 2,
                        label: {
                            show: true,
                            position: 'inside'
                        },
                        labelLine: {
                            length: 10,
                            lineStyle: {
                                width: 1,
                                type: 'solid'
                            }
                        },
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 1
                        },
                        emphasis: {
                            label: {
                                fontSize: 20
                            }
                        },
                        data: [
                            {value: 20, name: 'VIP付费用户'},
                            {value: 40, name: '普通付费用户'},
                            {value: 60, name: '注册用户量'},
                            {value: 80, name: '访问量'},
                        ]
                    }
                ]
            }
            this.combineSeries(option,userConfigOption);
            myLine.setOption(option);
            myLine.resize();
        }
    }
}

McECharts.prototype.gauge = function () {
    var charsDoms = document.getElementsByClassName("mc-echarts-gauge");
    for(var i=0;i<charsDoms.length;i++){
        var echartDom = charsDoms[i];
        //第一步 让用户把基础的配置都通过布局器做好了
        var userConfigOption = this.iteratorDomAttrToOption(echartDom);
        //此处如果您想写死echart的配置 那么修改即可重新设置userConfigOption里的某个配置
        var myLine = echarts.init(echartDom);
        {
            var api = userConfigOption.api;//数据源配置
            //第二步：正常来说 您可能需要从此行开始ajax请求后端带着api参数 然后返回一个option 动态的来设置echarts的数据 todo
            var option =  {
                title: {
                    text: '仪表盘',
                    subtext: '实际数据可以阅读我们代码自动接入'
                },
                tooltip: {
                    formatter: '{a} <br/>{b} : {c}%'
                },
                toolbox: {
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [
                    {
                        name: '业务指标',
                        type: 'gauge',
                        detail: {formatter: '{value}%'},
                        data: [{value: 50, name: '完成率'}]
                    }
                ]
            }
            this.combineSeries(option,userConfigOption);
            myLine.setOption(option);
            myLine.resize();
        }
    }
}

McECharts.prototype.boxplot = function () {
    var charsDoms = document.getElementsByClassName("mc-echarts-boxplot");
    for(var i=0;i<charsDoms.length;i++){
        var echartDom = charsDoms[i];
        //第一步 让用户把基础的配置都通过布局器做好了
        var userConfigOption = this.iteratorDomAttrToOption(echartDom);
        //此处如果您想写死echart的配置 那么修改即可重新设置userConfigOption里的某个配置
        var myLine = echarts.init(echartDom);
        {
            var api = userConfigOption.api;//数据源配置
            //第二步：正常来说 您可能需要从此行开始ajax请求后端带着api参数 然后返回一个option 动态的来设置echarts的数据 todo
            var data = echarts.dataTool.prepareBoxplotData([
                [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
                [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
                [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
                [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
                [890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
            ]);

            var option = {
                title: [
                    {
                        text: '盒须图',
                        left: 'center',
                    },
                    {
                        text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
                        borderColor: '#999',
                        borderWidth: 1,
                        textStyle: {
                            fontSize: 14
                        },
                        left: '10%',
                        top: '90%'
                    }
                ],
                tooltip: {
                    trigger: 'item',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '10%',
                    right: '10%',
                    bottom: '15%'
                },
                xAxis: {
                    type: 'category',
                    data: data.axisData,
                    boundaryGap: true,
                    nameGap: 30,
                    splitArea: {
                        show: false
                    },
                    axisLabel: {
                        formatter: 'expr {value}'
                    },
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    name: 'km/s minus 299,000',
                    splitArea: {
                        show: true
                    }
                },
                series: [
                    {
                        name: 'boxplot',
                        type: 'boxplot',
                        data: data.boxData,
                        tooltip: {
                            formatter: function (param) {
                                return [
                                    'Experiment ' + param.name + ': ',
                                    'upper: ' + param.data[5],
                                    'Q3: ' + param.data[4],
                                    'median: ' + param.data[3],
                                    'Q1: ' + param.data[2],
                                    'lower: ' + param.data[1]
                                ].join('<br/>');
                            }
                        }
                    },
                    {
                        name: 'outlier',
                        type: 'scatter',
                        data: data.outliers
                    }
                ]
            };

            this.combineSeries(option,userConfigOption);
            myLine.setOption(option);
            myLine.resize();
        }
    }
}

McECharts.prototype.sunburst = function () {
    var charsDoms = document.getElementsByClassName("mc-echarts-sunburst");
    for(var i=0;i<charsDoms.length;i++){
        var echartDom = charsDoms[i];
        //第一步 让用户把基础的配置都通过布局器做好了
        var userConfigOption = this.iteratorDomAttrToOption(echartDom);
        //此处如果您想写死echart的配置 那么修改即可重新设置userConfigOption里的某个配置
        var myLine = echarts.init(echartDom);
        {
            var api = userConfigOption.api;//数据源配置
            //第二步：正常来说 您可能需要从此行开始ajax请求后端带着api参数 然后返回一个option 动态的来设置echarts的数据 todo
            var option = {
                title: {
                    text: '旭日图',
                    subtext: '实际数据可以阅读我们代码自动接入'
                },
                series: {
                    type: 'sunburst',
                    // highlightPolicy: 'ancestor',
                    data: [{
                        name: 'Grandpa',
                        children: [{
                            name: 'Uncle Leo',
                            value: 15,
                            children: [{
                                name: 'Cousin Jack',
                                value: 2
                            }, {
                                name: 'Cousin Mary',
                                value: 5,
                                children: [{
                                    name: 'Jackson',
                                    value: 2
                                }]
                            }, {
                                name: 'Cousin Ben',
                                value: 4
                            }]
                        }, {
                            name: 'Father',
                            value: 10,
                            children: [{
                                name: 'Me',
                                value: 5
                            }, {
                                name: 'Brother Peter',
                                value: 1
                            }]
                        }]
                    }, {
                        name: 'Nancy',
                        children: [{
                            name: 'Uncle Nike',
                            children: [{
                                name: 'Cousin Betty',
                                value: 1
                            }, {
                                name: 'Cousin Jenny',
                                value: 2
                            }]
                        }]
                    }],
                    radius: [0, '90%'],
                    label: {
                        rotate: 'radial'
                    }
                }
            };


            this.combineSeries(option,userConfigOption);
            myLine.setOption(option);
            myLine.resize();
        }
    }
}

McECharts.prototype.treemap = function () {
    var charsDoms = document.getElementsByClassName("mc-echarts-treemap");
    for(var i=0;i<charsDoms.length;i++){
        var echartDom = charsDoms[i];
        //第一步 让用户把基础的配置都通过布局器做好了
        var userConfigOption = this.iteratorDomAttrToOption(echartDom);
        //此处如果您想写死echart的配置 那么修改即可重新设置userConfigOption里的某个配置
        var myLine = echarts.init(echartDom);
        {
            var api = userConfigOption.api;//数据源配置
            //第二步：正常来说 您可能需要从此行开始ajax请求后端带着api参数 然后返回一个option 动态的来设置echarts的数据 todo
            var option = {
                title: {
                    text: '矩形树图',
                    subtext: '实际数据可以阅读我们代码自动接入'
                },
                series: [{
                    type: 'treemap',
                    data: [{
                        name: '安徽省',            // First tree
                        value: 10,
                        children: [{
                            name: '合肥',       // First leaf of first tree
                            value: 4
                        }, {
                            name: '阜阳',       // Second leaf of first tree
                            value: 6
                        }]
                    }, {
                        name: '浙江省',            // Second tree
                        value: 20,
                        children: [{
                            name: '杭州市',       // Son of first tree
                            value: 20,
                            children: [{
                                name: '西湖区',  // Granson of first tree
                                value: 20
                            }]
                        },{
                            name: '台州市',       // Son of first tree
                            value: 20,
                            children: [{
                                name: '路桥区',  // Granson of first tree
                                value: 20
                            }]
                        }]
                    }]
                }]
            };


            this.combineSeries(option,userConfigOption);
            myLine.setOption(option);
            myLine.resize();
        }
    }
}

McECharts.prototype.pictorialbar = function () {
    var charsDoms = document.getElementsByClassName("mc-echarts-pictorialbar");
    for(var i=0;i<charsDoms.length;i++){
        var echartDom = charsDoms[i];
        //第一步 让用户把基础的配置都通过布局器做好了
        var userConfigOption = this.iteratorDomAttrToOption(echartDom);
        //此处如果您想写死echart的配置 那么修改即可重新设置userConfigOption里的某个配置
        var myLine = echarts.init(echartDom);
        {
            var api = userConfigOption.api;//数据源配置
            var pathSymbols = {
                reindeer: 'path://M-22.788,24.521c2.08-0.986,3.611-3.905,4.984-5.892 c-2.686,2.782-5.047,5.884-9.102,7.312c-0.992,0.005-0.25-2.016,0.34-2.362l1.852-0.41c0.564-0.218,0.785-0.842,0.902-1.347 c2.133-0.727,4.91-4.129,6.031-6.194c1.748-0.7,4.443-0.679,5.734-2.293c1.176-1.468,0.393-3.992,1.215-6.557 c0.24-0.754,0.574-1.581,1.008-2.293c-0.611,0.011-1.348-0.061-1.959-0.608c-1.391-1.245-0.785-2.086-1.297-3.313 c1.684,0.744,2.5,2.584,4.426,2.586C-8.46,3.012-8.255,2.901-8.04,2.824c6.031-1.952,15.182-0.165,19.498-3.937 c1.15-3.933-1.24-9.846-1.229-9.938c0.008-0.062-1.314-0.004-1.803-0.258c-1.119-0.771-6.531-3.75-0.17-3.33 c0.314-0.045,0.943,0.259,1.439,0.435c-0.289-1.694-0.92-0.144-3.311-1.946c0,0-1.1-0.855-1.764-1.98 c-0.836-1.09-2.01-2.825-2.992-4.031c-1.523-2.476,1.367,0.709,1.816,1.108c1.768,1.704,1.844,3.281,3.232,3.983 c0.195,0.203,1.453,0.164,0.926-0.468c-0.525-0.632-1.367-1.278-1.775-2.341c-0.293-0.703-1.311-2.326-1.566-2.711 c-0.256-0.384-0.959-1.718-1.67-2.351c-1.047-1.187-0.268-0.902,0.521-0.07c0.789,0.834,1.537,1.821,1.672,2.023 c0.135,0.203,1.584,2.521,1.725,2.387c0.102-0.259-0.035-0.428-0.158-0.852c-0.125-0.423-0.912-2.032-0.961-2.083 c-0.357-0.852-0.566-1.908-0.598-3.333c0.4-2.375,0.648-2.486,0.549-0.705c0.014,1.143,0.031,2.215,0.602,3.247 c0.807,1.496,1.764,4.064,1.836,4.474c0.561,3.176,2.904,1.749,2.281-0.126c-0.068-0.446-0.109-2.014-0.287-2.862 c-0.18-0.849-0.219-1.688-0.113-3.056c0.066-1.389,0.232-2.055,0.277-2.299c0.285-1.023,0.4-1.088,0.408,0.135 c-0.059,0.399-0.131,1.687-0.125,2.655c0.064,0.642-0.043,1.768,0.172,2.486c0.654,1.928-0.027,3.496,1,3.514 c1.805-0.424,2.428-1.218,2.428-2.346c-0.086-0.704-0.121-0.843-0.031-1.193c0.221-0.568,0.359-0.67,0.312-0.076 c-0.055,0.287,0.031,0.533,0.082,0.794c0.264,1.197,0.912,0.114,1.283-0.782c0.15-0.238,0.539-2.154,0.545-2.522 c-0.023-0.617,0.285-0.645,0.309,0.01c0.064,0.422-0.248,2.646-0.205,2.334c-0.338,1.24-1.105,3.402-3.379,4.712 c-0.389,0.12-1.186,1.286-3.328,2.178c0,0,1.729,0.321,3.156,0.246c1.102-0.19,3.707-0.027,4.654,0.269 c1.752,0.494,1.531-0.053,4.084,0.164c2.26-0.4,2.154,2.391-1.496,3.68c-2.549,1.405-3.107,1.475-2.293,2.984 c3.484,7.906,2.865,13.183,2.193,16.466c2.41,0.271,5.732-0.62,7.301,0.725c0.506,0.333,0.648,1.866-0.457,2.86 c-4.105,2.745-9.283,7.022-13.904,7.662c-0.977-0.194,0.156-2.025,0.803-2.247l1.898-0.03c0.596-0.101,0.936-0.669,1.152-1.139 c3.16-0.404,5.045-3.775,8.246-4.818c-4.035-0.718-9.588,3.981-12.162,1.051c-5.043,1.423-11.449,1.84-15.895,1.111 c-3.105,2.687-7.934,4.021-12.115,5.866c-3.271,3.511-5.188,8.086-9.967,10.414c-0.986,0.119-0.48-1.974,0.066-2.385l1.795-0.618 C-22.995,25.682-22.849,25.035-22.788,24.521z',
                plane: 'path://M1.112,32.559l2.998,1.205l-2.882,2.268l-2.215-0.012L1.112,32.559z M37.803,23.96 c0.158-0.838,0.5-1.509,0.961-1.904c-0.096-0.037-0.205-0.071-0.344-0.071c-0.777-0.005-2.068-0.009-3.047-0.009 c-0.633,0-1.217,0.066-1.754,0.18l2.199,1.804H37.803z M39.738,23.036c-0.111,0-0.377,0.325-0.537,0.924h1.076 C40.115,23.361,39.854,23.036,39.738,23.036z M39.934,39.867c-0.166,0-0.674,0.705-0.674,1.986s0.506,1.986,0.674,1.986 s0.672-0.705,0.672-1.986S40.102,39.867,39.934,39.867z M38.963,38.889c-0.098-0.038-0.209-0.07-0.348-0.073 c-0.082,0-0.174,0-0.268-0.001l-7.127,4.671c0.879,0.821,2.42,1.417,4.348,1.417c0.979,0,2.27-0.006,3.047-0.01 c0.139,0,0.25-0.034,0.348-0.072c-0.646-0.555-1.07-1.643-1.07-2.967C37.891,40.529,38.316,39.441,38.963,38.889z M32.713,23.96 l-12.37-10.116l-4.693-0.004c0,0,4,8.222,4.827,10.121H32.713z M59.311,32.374c-0.248,2.104-5.305,3.172-8.018,3.172H39.629 l-25.325,16.61L9.607,52.16c0,0,6.687-8.479,7.95-10.207c1.17-1.6,3.019-3.699,3.027-6.407h-2.138 c-5.839,0-13.816-3.789-18.472-5.583c-2.818-1.085-2.396-4.04-0.031-4.04h0.039l-3.299-11.371h3.617c0,0,4.352,5.696,5.846,7.5 c2,2.416,4.503,3.678,8.228,3.87h30.727c2.17,0,4.311,0.417,6.252,1.046c3.49,1.175,5.863,2.7,7.199,4.027 C59.145,31.584,59.352,32.025,59.311,32.374z M22.069,30.408c0-0.815-0.661-1.475-1.469-1.475c-0.812,0-1.471,0.66-1.471,1.475 s0.658,1.475,1.471,1.475C21.408,31.883,22.069,31.224,22.069,30.408z M27.06,30.408c0-0.815-0.656-1.478-1.466-1.478 c-0.812,0-1.471,0.662-1.471,1.478s0.658,1.477,1.471,1.477C26.404,31.885,27.06,31.224,27.06,30.408z M32.055,30.408 c0-0.815-0.66-1.475-1.469-1.475c-0.808,0-1.466,0.66-1.466,1.475s0.658,1.475,1.466,1.475 C31.398,31.883,32.055,31.224,32.055,30.408z M37.049,30.408c0-0.815-0.658-1.478-1.467-1.478c-0.812,0-1.469,0.662-1.469,1.478 s0.656,1.477,1.469,1.477C36.389,31.885,37.049,31.224,37.049,30.408z M42.039,30.408c0-0.815-0.656-1.478-1.465-1.478 c-0.811,0-1.469,0.662-1.469,1.478s0.658,1.477,1.469,1.477C41.383,31.885,42.039,31.224,42.039,30.408z M55.479,30.565 c-0.701-0.436-1.568-0.896-2.627-1.347c-0.613,0.289-1.551,0.476-2.73,0.476c-1.527,0-1.639,2.263,0.164,2.316 C52.389,32.074,54.627,31.373,55.479,30.565z',
                rocket: 'path://M-244.396,44.399c0,0,0.47-2.931-2.427-6.512c2.819-8.221,3.21-15.709,3.21-15.709s5.795,1.383,5.795,7.325C-237.818,39.679-244.396,44.399-244.396,44.399z M-260.371,40.827c0,0-3.881-12.946-3.881-18.319c0-2.416,0.262-4.566,0.669-6.517h17.684c0.411,1.952,0.675,4.104,0.675,6.519c0,5.291-3.87,18.317-3.87,18.317H-260.371z M-254.745,18.951c-1.99,0-3.603,1.676-3.603,3.744c0,2.068,1.612,3.744,3.603,3.744c1.988,0,3.602-1.676,3.602-3.744S-252.757,18.951-254.745,18.951z M-255.521,2.228v-5.098h1.402v4.969c1.603,1.213,5.941,5.069,7.901,12.5h-17.05C-261.373,7.373-257.245,3.558-255.521,2.228zM-265.07,44.399c0,0-6.577-4.721-6.577-14.896c0-5.942,5.794-7.325,5.794-7.325s0.393,7.488,3.211,15.708C-265.539,41.469-265.07,44.399-265.07,44.399z M-252.36,45.15l-1.176-1.22L-254.789,48l-1.487-4.069l-1.019,2.116l-1.488-3.826h8.067L-252.36,45.15z',
                train: 'path://M67.335,33.596L67.335,33.596c-0.002-1.39-1.153-3.183-3.328-4.218h-9.096v-2.07h5.371 c-4.939-2.07-11.199-4.141-14.89-4.141H19.72v12.421v5.176h38.373c4.033,0,8.457-1.035,9.142-5.176h-0.027 c0.076-0.367,0.129-0.751,0.129-1.165L67.335,33.596L67.335,33.596z M27.999,30.413h-3.105v-4.141h3.105V30.413z M35.245,30.413 h-3.104v-4.141h3.104V30.413z M42.491,30.413h-3.104v-4.141h3.104V30.413z M49.736,30.413h-3.104v-4.141h3.104V30.413z  M14.544,40.764c1.143,0,2.07-0.927,2.07-2.07V35.59V25.237c0-1.145-0.928-2.07-2.07-2.07H-9.265c-1.143,0-2.068,0.926-2.068,2.07 v10.351v3.105c0,1.144,0.926,2.07,2.068,2.07H14.544L14.544,40.764z M8.333,26.272h3.105v4.141H8.333V26.272z M1.087,26.272h3.105 v4.141H1.087V26.272z M-6.159,26.272h3.105v4.141h-3.105V26.272z M-9.265,41.798h69.352v1.035H-9.265V41.798z',
                ship: 'path://M16.678,17.086h9.854l-2.703,5.912c5.596,2.428,11.155,5.575,16.711,8.607c3.387,1.847,6.967,3.75,10.541,5.375 v-6.16l-4.197-2.763v-5.318L33.064,12.197h-11.48L20.43,15.24h-4.533l-1.266,3.286l0.781,0.345L16.678,17.086z M49.6,31.84 l0.047,1.273L27.438,20.998l0.799-1.734L49.6,31.84z M33.031,15.1l12.889,8.82l0.027,0.769L32.551,16.1L33.031,15.1z M22.377,14.045 h9.846l-1.539,3.365l-2.287-1.498h1.371l0.721-1.352h-2.023l-0.553,1.037l-0.541-0.357h-0.34l0.359-0.684h-2.025l-0.361,0.684 h-3.473L22.377,14.045z M23.695,20.678l-0.004,0.004h0.004V20.678z M24.828,18.199h-2.031l-0.719,1.358h2.029L24.828,18.199z  M40.385,34.227c-12.85-7.009-25.729-14.667-38.971-12.527c1.26,8.809,9.08,16.201,8.213,24.328 c-0.553,4.062-3.111,0.828-3.303,7.137c15.799,0,32.379,0,48.166,0l0.066-4.195l1.477-7.23 C50.842,39.812,45.393,36.961,40.385,34.227z M13.99,35.954c-1.213,0-2.195-1.353-2.195-3.035c0-1.665,0.98-3.017,2.195-3.017 c1.219,0,2.195,1.352,2.195,3.017C16.186,34.604,15.213,35.954,13.99,35.954z M23.691,20.682h-2.02l-0.588,1.351h2.023 L23.691,20.682z M19.697,18.199l-0.721,1.358h2.025l0.727-1.358H19.697z',
                car: 'path://M49.592,40.883c-0.053,0.354-0.139,0.697-0.268,0.963c-0.232,0.475-0.455,0.519-1.334,0.475 c-1.135-0.053-2.764,0-4.484,0.068c0,0.476,0.018,0.697,0.018,0.697c0.111,1.299,0.697,1.342,0.931,1.342h3.7 c0.326,0,0.628,0,0.861-0.154c0.301-0.196,0.43-0.772,0.543-1.78c0.017-0.146,0.025-0.336,0.033-0.56v-0.01 c0-0.068,0.008-0.154,0.008-0.25V41.58l0,0C49.6,41.348,49.6,41.09,49.592,40.883L49.592,40.883z M6.057,40.883 c0.053,0.354,0.137,0.697,0.268,0.963c0.23,0.475,0.455,0.519,1.334,0.475c1.137-0.053,2.762,0,4.484,0.068 c0,0.476-0.018,0.697-0.018,0.697c-0.111,1.299-0.697,1.342-0.93,1.342h-3.7c-0.328,0-0.602,0-0.861-0.154 c-0.309-0.18-0.43-0.772-0.541-1.78c-0.018-0.146-0.027-0.336-0.035-0.56v-0.01c0-0.068-0.008-0.154-0.008-0.25V41.58l0,0 C6.057,41.348,6.057,41.09,6.057,40.883L6.057,40.883z M49.867,32.766c0-2.642-0.344-5.224-0.482-5.507 c-0.104-0.207-0.766-0.749-2.271-1.773c-1.522-1.042-1.487-0.887-1.766-1.566c0.25-0.078,0.492-0.224,0.639-0.241 c0.326-0.034,0.345,0.274,1.023,0.274c0.68,0,2.152-0.18,2.453-0.48c0.301-0.303,0.396-0.405,0.396-0.672 c0-0.268-0.156-0.818-0.447-1.146c-0.293-0.327-1.541-0.49-2.273-0.585c-0.729-0.095-0.834,0-1.022,0.121 c-0.304,0.189-0.32,1.919-0.32,1.919l-0.713,0.018c-0.465-1.146-1.11-3.452-2.117-5.269c-1.103-1.979-2.256-2.599-2.737-2.754 c-0.474-0.146-0.904-0.249-4.131-0.576c-3.298-0.344-5.922-0.388-8.262-0.388c-2.342,0-4.967,0.052-8.264,0.388 c-3.229,0.336-3.66,0.43-4.133,0.576s-1.633,0.775-2.736,2.754c-1.006,1.816-1.652,4.123-2.117,5.269L9.87,23.109 c0,0-0.008-1.729-0.318-1.919c-0.189-0.121-0.293-0.225-1.023-0.121c-0.732,0.104-1.98,0.258-2.273,0.585 c-0.293,0.327-0.447,0.878-0.447,1.146c0,0.267,0.094,0.379,0.396,0.672c0.301,0.301,1.773,0.48,2.453,0.48 c0.68,0,0.697-0.309,1.023-0.274c0.146,0.018,0.396,0.163,0.637,0.241c-0.283,0.68-0.24,0.524-1.764,1.566 c-1.506,1.033-2.178,1.566-2.271,1.773c-0.139,0.283-0.482,2.865-0.482,5.508s0.189,5.02,0.189,5.86c0,0.354,0,0.976,0.076,1.565 c0.053,0.354,0.129,0.697,0.268,0.966c0.232,0.473,0.447,0.516,1.334,0.473c1.137-0.051,2.779,0,4.477,0.07 c1.135,0.043,2.297,0.086,3.33,0.11c2.582,0.051,1.826-0.379,2.928-0.36c1.102,0.016,5.447,0.196,9.424,0.196 c3.976,0,8.332-0.182,9.423-0.196c1.102-0.019,0.346,0.411,2.926,0.36c1.033-0.018,2.195-0.067,3.332-0.11 c1.695-0.062,3.348-0.121,4.477-0.07c0.886,0.043,1.103,0,1.332-0.473c0.132-0.269,0.218-0.611,0.269-0.966 c0.086-0.592,0.078-1.213,0.078-1.565C49.678,37.793,49.867,35.408,49.867,32.766L49.867,32.766z M13.219,19.735 c0.412-0.964,1.652-2.9,2.256-3.244c0.145-0.087,1.426-0.491,4.637-0.706c2.953-0.198,6.217-0.276,7.73-0.276 c1.513,0,4.777,0.078,7.729,0.276c3.201,0.215,4.502,0.611,4.639,0.706c0.775,0.533,1.842,2.28,2.256,3.244 c0.412,0.965,0.965,2.858,0.861,3.116c-0.104,0.258,0.104,0.388-1.291,0.275c-1.387-0.103-10.088-0.216-14.185-0.216 c-4.088,0-12.789,0.113-14.184,0.216c-1.395,0.104-1.188-0.018-1.291-0.275C12.254,22.593,12.805,20.708,13.219,19.735 L13.219,19.735z M16.385,30.511c-0.619,0.155-0.988,0.491-1.764,0.482c-0.775,0-2.867-0.353-3.314-0.371 c-0.447-0.017-0.842,0.302-1.076,0.362c-0.23,0.06-0.688-0.104-1.377-0.318c-0.688-0.216-1.092-0.155-1.316-1.094 c-0.232-0.93,0-2.264,0-2.264c1.488-0.068,2.928,0.069,5.621,0.826c2.693,0.758,4.191,2.213,4.191,2.213 S17.004,30.357,16.385,30.511L16.385,30.511z M36.629,37.293c-1.23,0.164-6.386,0.207-8.794,0.207c-2.412,0-7.566-0.051-8.799-0.207 c-1.256-0.164-2.891-1.67-1.764-2.865c1.523-1.627,1.24-1.576,4.701-2.023C24.967,32.018,27.239,32,27.834,32 c0.584,0,2.865,0.025,5.859,0.404c3.461,0.447,3.178,0.396,4.699,2.022C39.521,35.623,37.887,37.129,36.629,37.293L36.629,37.293z  M48.129,29.582c-0.232,0.93-0.629,0.878-1.318,1.093c-0.688,0.216-1.145,0.371-1.377,0.319c-0.231-0.053-0.627-0.371-1.074-0.361 c-0.448,0.018-2.539,0.37-3.313,0.37c-0.772,0-1.146-0.328-1.764-0.481c-0.621-0.154-0.966-0.154-0.966-0.154 s1.49-1.464,4.191-2.213c2.693-0.758,4.131-0.895,5.621-0.826C48.129,27.309,48.361,28.643,48.129,29.582L48.129,29.582z',
                run: 'path://M13.676,32.955c0.919-0.031,1.843-0.008,2.767-0.008v0.007c0.827,0,1.659,0.041,2.486-0.019 c0.417-0.028,1.118,0.325,1.14-0.545c0.014-0.637-0.156-1.279-0.873-1.367c-1.919-0.241-3.858-0.233-5.774,0.019 c-0.465,0.062-0.998,0.442-0.832,1.069C12.715,32.602,13.045,32.977,13.676,32.955z M14.108,29.013 c1.47-0.007,2.96-0.122,4.414,0.035c1.792,0.192,3.1-0.412,4.273-2.105c-3.044,0-5.882,0.014-8.719-0.01 c-0.768-0.005-1.495,0.118-1.461,1C12.642,28.731,13.329,29.014,14.108,29.013z M23.678,36.593c-0.666-0.69-1.258-1.497-2.483-1.448 c-2.341,0.095-4.689,0.051-7.035,0.012c-0.834-0.014-1.599,0.177-1.569,1.066c0.031,0.854,0.812,1.062,1.636,1.043 c1.425-0.033,2.852-0.01,4.278-0.01v-0.01c1.562,0,3.126,0.008,4.691-0.005C23.614,37.239,24.233,37.174,23.678,36.593z  M32.234,42.292h-0.002c-1.075,0.793-2.589,0.345-3.821,1.048c-0.359,0.193-0.663,0.465-0.899,0.799 c-1.068,1.623-2.052,3.301-3.117,4.928c-0.625,0.961-0.386,1.805,0.409,2.395c0.844,0.628,1.874,0.617,2.548-0.299 c1.912-2.573,3.761-5.197,5.621-7.814C33.484,42.619,33.032,42.387,32.234,42.292z M43.527,28.401 c-0.688-1.575-2.012-0.831-3.121-0.895c-1.047-0.058-2.119,1.128-3.002,0.345c-0.768-0.677-1.213-1.804-1.562-2.813 c-0.45-1.305-1.495-2.225-2.329-3.583c2.953,1.139,4.729,0.077,5.592-1.322c0.99-1.61,0.718-3.725-0.627-4.967 c-1.362-1.255-3.414-1.445-4.927-0.452c-1.933,1.268-2.206,2.893-0.899,6.11c-2.098-0.659-3.835-1.654-5.682-2.383 c-0.735-0.291-1.437-1.017-2.293-0.666c-2.263,0.927-4.522,1.885-6.723,2.95c-1.357,0.658-1.649,1.593-1.076,2.638 c0.462,0.851,1.643,1.126,2.806,0.617c0.993-0.433,1.994-0.857,2.951-1.374c1.599-0.86,3.044-0.873,4.604,0.214 c1.017,0.707,0.873,1.137,0.123,1.849c-1.701,1.615-3.516,3.12-4.933,5.006c-1.042,1.388-0.993,2.817,0.255,4.011 c1.538,1.471,3.148,2.869,4.708,4.315c0.485,0.444,0.907,0.896-0.227,1.104c-1.523,0.285-3.021,0.694-4.538,1.006 c-1.109,0.225-2.02,1.259-1.83,2.16c0.223,1.07,1.548,1.756,2.687,1.487c3.003-0.712,6.008-1.413,9.032-2.044 c1.549-0.324,2.273-1.869,1.344-3.115c-0.868-1.156-1.801-2.267-2.639-3.445c-1.964-2.762-1.95-2.771,0.528-5.189 c1.394-1.357,1.379-1.351,2.437,0.417c0.461,0.769,0.854,1.703,1.99,1.613c2.238-0.181,4.407-0.755,6.564-1.331 C43.557,30.447,43.88,29.206,43.527,28.401z',
                walk: 'path://M29.902,23.275c1.86,0,3.368-1.506,3.368-3.365c0-1.859-1.508-3.365-3.368-3.365 c-1.857,0-3.365,1.506-3.365,3.365C26.537,21.769,28.045,23.275,29.902,23.275z M36.867,30.74c-1.666-0.467-3.799-1.6-4.732-4.199 c-0.932-2.6-3.131-2.998-4.797-2.998s-7.098,3.894-7.098,3.894c-1.133,1.001-2.1,6.502-0.967,6.769 c1.133,0.269,1.266-1.533,1.934-3.599c0.666-2.065,3.797-3.466,3.797-3.466s0.201,2.467-0.398,3.866 c-0.599,1.399-1.133,2.866-1.467,6.198s-1.6,3.665-3.799,6.266c-2.199,2.598-0.6,3.797,0.398,3.664 c1.002-0.133,5.865-5.598,6.398-6.998c0.533-1.397,0.668-3.732,0.668-3.732s0,0,2.199,1.867c2.199,1.865,2.332,4.6,2.998,7.73 s2.332,0.934,2.332-0.467c0-1.401,0.269-5.465-1-7.064c-1.265-1.6-3.73-3.465-3.73-5.265s1.199-3.732,1.199-3.732 c0.332,1.667,3.335,3.065,5.599,3.399C38.668,33.206,38.533,31.207,36.867,30.74z'
            };

            var option = {
                title: {
                    text: '象形柱图',
                    subtext: '实际数据可以阅读我们代码自动接入'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'none'
                    },
                    formatter: function (params) {
                        return params[0].name + ': ' + params[0].value;
                    }
                },
                xAxis: {
                    data: ['驯鹿', '火箭', '飞机', '高铁', '轮船', '汽车', '跑步', '步行', ],
                    axisTick: {show: false},
                    axisLine: {show: false},
                    axisLabel: {
                        color: '#e54035'
                    }
                },
                yAxis: {
                    splitLine: {show: false},
                    axisTick: {show: false},
                    axisLine: {show: false},
                    axisLabel: {show: false}
                },
                color: ['#e54035'],
                series: [{
                    name: 'hill',
                    type: 'pictorialBar',
                    barCategoryGap: '-130%',
                    // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
                    symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                    itemStyle: {
                        opacity: 0.5
                    },
                    emphasis: {
                        itemStyle: {
                            opacity: 1
                        }
                    },
                    data: [123, 60, 25, 18, 12, 9, 2, 1],
                    z: 10
                }, {
                    name: 'glyph',
                    type: 'pictorialBar',
                    barGap: '-100%',
                    symbolPosition: 'end',
                    symbolSize: 50,
                    symbolOffset: [0, '-120%'],
                    data: [{
                        value: 123,
                        symbol: pathSymbols.reindeer,
                        symbolSize: [60, 60]
                    }, {
                        value: 60,
                        symbol: pathSymbols.rocket,
                        symbolSize: [50, 60]
                    }, {
                        value: 25,
                        symbol: pathSymbols.plane,
                        symbolSize: [65, 35]
                    }, {
                        value: 18,
                        symbol: pathSymbols.train,
                        symbolSize: [50, 30]
                    }, {
                        value: 12,
                        symbol: pathSymbols.ship,
                        symbolSize: [50, 35]
                    }, {
                        value: 9,
                        symbol: pathSymbols.car,
                        symbolSize: [40, 30]
                    }, {
                        value: 2,
                        symbol: pathSymbols.run,
                        symbolSize: [40, 50]
                    }, {
                        value: 1,
                        symbol: pathSymbols.walk,
                        symbolSize: [40, 50]
                    }]
                }]
            };


            this.combineSeries(option,userConfigOption);
            myLine.setOption(option);
            myLine.resize();
        }
    }
}

McECharts.prototype.sankey = function () {
    var charsDoms = document.getElementsByClassName("mc-echarts-sankey");
    for(var i=0;i<charsDoms.length;i++){
        var echartDom = charsDoms[i];
        //第一步 让用户把基础的配置都通过布局器做好了
        var userConfigOption = this.iteratorDomAttrToOption(echartDom);
        //此处如果您想写死echart的配置 那么修改即可重新设置userConfigOption里的某个配置
        var myLine = echarts.init(echartDom);
        {
            var api = userConfigOption.api;//数据源配置
            var option = {
                title: {
                    text: '桑基图',
                    subtext: '实际数据可以阅读我们代码自动接入'
                },
                series: {
                    type: 'sankey',
                    layout: 'none',
                    focusNodeAdjacency: 'allEdges',
                    data: [{
                        name: 'a'
                    }, {
                        name: 'b'
                    }, {
                        name: 'a1'
                    }, {
                        name: 'a2'
                    }, {
                        name: 'b1'
                    }, {
                        name: 'c'
                    }],
                    links: [{
                        source: 'a',
                        target: 'a1',
                        value: 5
                    }, {
                        source: 'a',
                        target: 'a2',
                        value: 3
                    }, {
                        source: 'b',
                        target: 'b1',
                        value: 8
                    }, {
                        source: 'a',
                        target: 'b1',
                        value: 3
                    }, {
                        source: 'b1',
                        target: 'a1',
                        value: 1
                    }, {
                        source: 'b1',
                        target: 'c',
                        value: 2
                    }]
                }
            };

            this.combineSeries(option,userConfigOption);
            myLine.setOption(option);
            myLine.resize();
        }
    }
}

McECharts.prototype.parallel = function () {
    var charsDoms = document.getElementsByClassName("mc-echarts-parallel");
    for(var i=0;i<charsDoms.length;i++){
        var echartDom = charsDoms[i];
        //第一步 让用户把基础的配置都通过布局器做好了
        var userConfigOption = this.iteratorDomAttrToOption(echartDom);
        //此处如果您想写死echart的配置 那么修改即可重新设置userConfigOption里的某个配置
        var myLine = echarts.init(echartDom);
        {
            var api = userConfigOption.api;//数据源配置
            var option = {
                title: {
                    text: '平行坐标',
                    subtext: '实际数据可以阅读我们代码自动接入'
                },
                parallelAxis: [
                    {dim: 0, name: 'Price'},
                    {dim: 1, name: 'Net Weight'},
                    {dim: 2, name: 'Amount'},
                    {
                        dim: 3,
                        name: 'Score',
                        type: 'category',
                        data: ['Excellent', 'Good', 'OK', 'Bad']
                    }
                ],
                series: {
                    type: 'parallel',
                    lineStyle: {
                        width: 4
                    },
                    data: [
                        [12.99, 100, 82, 'Good'],
                        [9.99, 80, 77, 'OK'],
                        [20, 120, 60, 'Excellent']
                    ]
                }
            };

            this.combineSeries(option,userConfigOption);
            myLine.setOption(option);
            myLine.resize();
        }
    }
}

McECharts.prototype.themeriver = function () {
    var charsDoms = document.getElementsByClassName("mc-echarts-themeriver");
    for(var i=0;i<charsDoms.length;i++){
        var echartDom = charsDoms[i];
        //第一步 让用户把基础的配置都通过布局器做好了
        var userConfigOption = this.iteratorDomAttrToOption(echartDom);
        //此处如果您想写死echart的配置 那么修改即可重新设置userConfigOption里的某个配置
        var myLine = echarts.init(echartDom);
        {
            var api = userConfigOption.api;//数据源配置

// From https://github.com/jsundram/streamgraph.js/blob/master/examples/data/lastfm.js
            var rawData = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 49, 67, 16, 0, 19, 19, 0, 0, 1, 10, 5, 6, 1, 1, 0, 25, 0, 0, 0],
                [0, 6, 3, 34, 0, 16, 1, 0, 0, 1, 6, 0, 1, 56, 0, 2, 0, 2, 0, 0],
                [0, 8, 13, 15, 0, 12, 23, 0, 0, 1, 0, 1, 0, 0, 6, 0, 0, 1, 0, 1],
                [0, 9, 28, 0, 91, 6, 1, 0, 0, 0, 7, 18, 0, 9, 16, 0, 1, 0, 0, 0],
                [0, 3, 42, 36, 21, 0, 1, 0, 0, 0, 0, 16, 30, 1, 4, 62, 55, 1, 0, 0],
                [0, 7, 13, 12, 64, 5, 0, 0, 0, 8, 17, 3, 72, 1, 1, 53, 1, 0, 0, 0],
                [1, 14, 13, 7, 8, 8, 7, 0, 1, 1, 14, 6, 44, 8, 7, 17, 21, 1, 0, 0],
                [0, 6, 14, 2, 14, 1, 0, 0, 0, 0, 2, 2, 7, 15, 6, 3, 0, 0, 0, 0],
                [0, 9, 11, 3, 0, 8, 0, 0, 14, 2, 0, 1, 1, 1, 7, 13, 2, 1, 0, 0],
                [0, 7, 5, 10, 8, 21, 0, 0, 130, 1, 2, 18, 6, 1, 5, 1, 4, 1, 0, 7],
                [0, 2, 15, 1, 5, 5, 0, 0, 6, 0, 0, 0, 4, 1, 3, 1, 17, 0, 0, 9],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [6, 27, 26, 1, 0, 11, 1, 0, 0, 0, 1, 1, 2, 0, 0, 9, 1, 0, 0, 0],
                [31, 81, 11, 6, 11, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 3, 14, 0, 0, 12],
                [19, 53, 6, 20, 0, 4, 37, 0, 30, 86, 43, 7, 5, 7, 17, 19, 2, 0, 0, 5],
                [0, 22, 14, 6, 10, 24, 18, 0, 13, 21, 5, 2, 13, 35, 7, 1, 8, 0, 0, 1],
                [0, 56, 5, 0, 0, 0, 0, 0, 7, 24, 0, 17, 7, 0, 0, 3, 0, 0, 0, 8],
                [18, 29, 3, 6, 11, 0, 15, 0, 12, 42, 37, 0, 3, 3, 13, 8, 0, 0, 0, 1],
                [32, 39, 37, 3, 33, 21, 6, 0, 4, 17, 0, 11, 8, 2, 3, 0, 23, 0, 0, 17],
                [72, 15, 28, 0, 0, 0, 0, 0, 1, 3, 0, 35, 0, 9, 17, 1, 9, 1, 0, 8],
                [11, 15, 4, 2, 0, 18, 10, 0, 20, 3, 0, 0, 2, 0, 0, 2, 2, 30, 0, 0],
                [14, 29, 19, 3, 2, 17, 13, 0, 7, 12, 2, 0, 6, 0, 0, 1, 1, 34, 0, 1],
                [1, 1, 7, 6, 1, 1, 15, 1, 1, 2, 1, 3, 1, 1, 9, 1, 1, 25, 1, 72]
            ];

            var labels = [
                'The Sea and Cake',
                'Andrew Bird',
                'Laura Veirs',
                'Brian Eno',
                'Christopher Willits',
                'Wilco',
                'Edgar Meyer',
                'B\xc3\xa9la Fleck',
                'Fleet Foxes',
                'Kings of Convenience',
                'Brett Dennen',
                'Psapp',
                'The Bad Plus',
                'Feist',
                'Battles',
                'Avishai Cohen',
                'Rachael Yamagata',
                'Norah Jones',
                'B\xc3\xa9la Fleck and the Flecktones',
                'Joshua Redman'
            ];

            var data = [];
            for (var i = 0; i < rawData.length; i++) {
                for (var j = 0; j < rawData[i].length; j++) {
                    var label = labels[i];
                    data.push([
                        j, rawData[i][j], label
                    ]);
                }
            }

            var option = {
                singleAxis: {
                    max: 'dataMax'
                },
                series: [{
                    type: 'themeRiver',
                    data: data,
                    label: {
                        show: false
                    }
                }]
            };

            this.combineSeries(option,userConfigOption);
            myLine.setOption(option);
            myLine.resize();
        }
    }
}
McECharts.prototype.dataset = function () {
    var charsDoms = document.getElementsByClassName("mc-echarts-dataset");
    for(var i=0;i<charsDoms.length;i++){
        var echartDom = charsDoms[i];
        //第一步 让用户把基础的配置都通过布局器做好了
        var userConfigOption = this.iteratorDomAttrToOption(echartDom);
        //此处如果您想写死echart的配置 那么修改即可重新设置userConfigOption里的某个配置
        var myLine = echarts.init(echartDom);
        {
            var api = userConfigOption.api;//数据源配置
            var option = {
                tooltip: {},
                dataset: {
                    source: [
                        ['product', '2015', '2016', '2017'],
                        ['Matcha Latte', 43.3, 85.8, 93.7],
                        ['Milk Tea', 83.1, 73.4, 55.1],
                        ['Cheese Cocoa', 86.4, 65.2, 82.5],
                        ['Walnut Brownie', 72.4, 53.9, 39.1]
                    ]
                },
                xAxis: {type: 'category'},
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [
                    {type: 'bar'},
                    {type: 'bar'},
                    {type: 'bar'}
                ]
            };

            this.combineSeries(option,userConfigOption);
            myLine.setOption(option);
            myLine.resize();
        }
    }
}




/**/
