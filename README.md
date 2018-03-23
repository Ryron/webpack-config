# webpak工具
## webpack模块引入支持语法
- ES2015 `import`
- CommonJS `require()`
- ADM `define` `require`
- 样式引入 @import

### [CommonJS](http://javascript.ruanyifeng.com/nodejs/module.html)
CommonJS.js
```
exports.show = function() {
  alert('CommonJS');
}
```
main.js
```
var show = require('./fn/CommonJS.js').show;
show();
```
可以看到弹窗内容

### [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)
AMD.js
```
define(function(require, exports, module) {
    function show(){
        alert('AMD');
    }
    module.exports = show;
})
```
main.js
```
var show = require('./fn/AMD.js');
show();
```
### [ES2015](https://github.com/ruanyf/es6tutorial/search?utf8=%E2%9C%93&q=import)
es2015.js
```
export default function() {
  alert('es2015');
}
```
main.js
```
import show from './fn/es2015.js';
show()
```
### @import
variables.less
```
@primary-color: #545454;
```
style.css
```
@import './variables.less';

html,body{
    height: 100%;
    padding: 0;
    margin: 0;
}
h1{
    color: @primary-color;
}
```

## 常用插件
- html-webpack-plugin  生成(可自定义模板)html5文件，将打包的文件添加到html中
- uglifyjs-webpack-plugin js代码压缩
- clean-webpack-plugin  clean插件，打包之前清理打包目录
- webpack-dev-server    提供web服务
webpack-dev-server 本身有热更新，使用webpack-dev-middleware需要添加webpack-hot-middleware包。

## devtool
此选项控制是否生成，以及如何生成 [source map](https://doc.webpack-china.org/configuration/devtool)。

对于开发环境来说，当然是打包速度越快越好，同时兼顾代码分析查看，所以通常选择
`cheap-module-eval-source-map`。 原因：原始源代码 重构速度快

对于生产环境，不用最求速度。选择用于打包的`source-map`，用于生产环境，

## performance
- maxEntrypointSize 设置入口文件最大体积
- maxAssetSize      设置资源文件最大体积

## webpack优化
- devtool 根据不同的环境配置
- webpack.optimize.CommonsChunkPlugin 代码分离，将公用css、js代码分离
- 懒加载
- performance
