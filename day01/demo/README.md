# React 框架默认会安装 
 react:核心
 reacr-dom：React视图渲染的核心 [ 基于React构建webapp页面 ]
 react-native --构建和渲染App
 react-scripts webpack 配置被隐藏到了node_modules,对打包命令进行封装

 所有命令都是通过react-scripts进行


 自己配置webpack需要执行 yarn eject

 less-loader

 cross-env

# src 下创建setupProxy.js 实现开发环境的本地跨域代理
1.创建setupProxy.js
2.安装http-proxy-middleware
3.配置


```

const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware(
            "/jian", { target: "https://www.jianshu.com/asimov", changeOrigin: true, pathRewrite: { "/jian": "" } })
    )

    app.use(
        createProxyMiddleware("/api", {
            target: "https://news-at.zhihu.com/api/4",
            changeOrigin: true,
            ws: true,
            pathRewrite: { "^/api": "" }
        })
    );
}
```

框架底层 实现视图渲染，基于操作DOM实现
 + 虚拟dom=> 真实dom
 + 有效避免DOM的重绘和重排

 提高开发效率




# React是mvc框架 
model 数据层 +view 视图层 + controller控制器层 （业务逻辑层）

  @1 用专业的语法构建视图 ，react 基于jsx 构建试图
  @2 数据层：需要动态处理的（有变化的），都要有对应的数据模型
  @3 控制层：当需要在视图中进行某些操作，都是去修改相关的数据，React框架会重新渲染数据（数据会驱动视图的渲染）
  
  单向驱动
  需要开发者自己实现双向驱动（v-model） 
# Vue是mvvm框架
model 数据层 + view 视图层 + viewmodel 数据/视图监听层
  
  @1 使用template模板实现dom
  @2 data  Object.definproperty  proxy
  @3 监听视图的变化实现数据的修改 

  双向驱动


# JSX
JSX: javascript and xml 把js和html混合到一起 