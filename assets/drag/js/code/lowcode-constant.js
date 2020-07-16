/*通用工具解析类*/
function LowCodeConstant() {
    /*数据库字段类型*/
    this.dbType = {
        STR:"str",
        INT:"int",
        LONG:"long",
        DECIMAL:"decimal",
        BOOL:"bool",
        DATE:"date",
        ARRAY:"array",
        OBJECT_ID:"objectId",
    }
    this.valueType = {
        NUM:1,
        STR:2,
        BOOL:3,
        JSON:4
    }

    /*比较符*/
    this.mongoDbCompare = {
        GT:"大于",
        GTE:"大于等于",
        EQ:"等于",
        NE:"不等于",
        LT:"小于",
        LTE:"小于等于",
        IN:"在其中",
        NIN:"不在其中",
        LIKE:"包含",
    }

    this.findReturnType = {
        LIST:"多条记录",
        ENTITY:"单条记录"
    }

    //比较符中文符号对照
    this.codeCompare = {
        "小于":"<",
        "小于等于":"<=",
        "等于":"==",
        "不等于":"!=",
        "大于":">",
        "大于等于":">=",
    }
    //逻辑运算符
    this.logic = {
        "并且":"&&",
        "或者":"||",
        "非":"!",
    }

    this.id = "id";//主键字段名称
    this.jsKeepName=",js,break,case,catch,class,var,this,const,default,debugger,continue,delete,do,double,else,enum,eval,export,extends,false,final,finally,float," +
        "for,function,goto,if,implements," +
        "import,in,instanceof,int,interface," +
        "let,long,native,new,null," +
        "package,private,protected,public,return," +
        "short,static,super,switch,synchronized," +
        "this,throw,throws,transient,true," +
        "try,typeof,var,void,volatile," +
        "while,with,yield,";//js保留字段
    var env =  APPLICATION_ENV.getEnv();
    //远程接口是否开启 默认关闭 因为您刚拿的我们布局器时 全是静态文件 为了演示方便 我们暂时把数据存在在浏览器控制台 如果您实现了各个http接口请设置true
    this.remote = env.page.remote;

}
