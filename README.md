2020-07-17-2------------------------------------------------------------------------------------------------------------------------------------

1.更改magicalcoder\assets\drag\js\user\application-env.js，

隐藏布局器上边的 脚本、html、样式页签

2.更改magicalcoder\index-layui.html

注释掉网页顶部无用选项
注释掉布局器上边的 预览、脚本、html、样式页签，对齐方式、JS调试等按钮功能


3.对左侧组件进行精简整合
index-layui.html加载了magicaldrag/assets/drag/js/user/ui/layui/2.5.4/constant.js

注释掉constant.js无用组件
对组件按统计图表、文字、图形、图片、音乐、视频进行精简整合
自定义组件和属性 调整 参考文档：http://www.magicalcoder.com/doc/bjq/html/  自定义组件和属性


2020-07-17-1------------------------------------------------------------------------------------------------------------------------------------

1.删除layui 以外html文件
2.替换根目录img图片
-------------------------------------------------------------------------------
http://www.jshaman.com/protect.html 进行js加密混淆
<iframe></iframe>

选择一个ui的标准：近3个月内有更新还在维护 github上10k
ant design
https://www.jsdelivr.com/package/npm/ant-design-vue?path=dist
