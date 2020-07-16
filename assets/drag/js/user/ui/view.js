/*dom追加html*/
HTMLElement.prototype.appendHTML = function(html) {
    var divTemp = document.createElement("div"), nodes = null
        // 文档片段，一次性append，提高性能
        , fragment = document.createDocumentFragment();
    divTemp.innerHTML = html;
    nodes = divTemp.childNodes;
    for (var i=0, length=nodes.length; i<length; i+=1) {
        fragment.appendChild(nodes[i].cloneNode(true));
    }
    this.appendChild(fragment);
    // 据说下面这样子世界会更清净
    nodes = null;
    fragment = null;
}
if(cache.uiName=='layui'){
    var classVal = document.body.getAttribute("class");
    if(classVal!=null){
        classVal = classVal.concat(" layui-form");
    }else {
        classVal = "layui-form";
    }
    document.body.setAttribute("class",classVal);
    document.body.appendHTML(cache.html);
}else if(cache.uiName=='miniui' || cache.uiName=='bootstrap4'){
    document.body.appendHTML(cache.html);
}else {
    //参考iframeUi.realHtml 保持一致
    var html = cache.html.replace(/(<div.*?>)([\s\S]*)<\/div>/,"$1<template>$2</template></div>")
    document.body.appendHTML(html);
}
eval(cache.js);
