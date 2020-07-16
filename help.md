constant.js中可以配置编辑器的各种自定义组件 属性

                        /*clearAttr:删除按钮 extend:扩展配置按 extra:layui组件对应的扩展配置  attrName:属性名 oneLine:是否在一行 options: [n:name(属性名|样式名) t:title（标题） c:checked时候的值(string|boolean) u:unchecked时候的值(string|boolean)]*/

 SLIDER:滑动条
实例：{type:this.type.SLIDER    ,clearAttr:true       ,oneLine:false      ,change:this.change.ATTR    ,title:'顶栏高度'     ,attrName:'height'          ,extra:{min:0,max:2000,suffix:"px"}                                               },
extra:{
    suffix:"px",这种是追加单位 比如width:110px 也可以使用滑动条配置

}
