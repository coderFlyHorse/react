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
