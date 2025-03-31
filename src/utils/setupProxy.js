const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/wp-admin/admin-ajax.php",
    createProxyMiddleware({
      target: "https://content.anagatalaw.com",
      changeOrigin: true,
      secure: false,
    })
  );
};
