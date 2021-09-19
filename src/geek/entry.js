const url = require('url');
const koa = require('koa');
const mount = require('koa-mount');

const app = new koa();

/**
 * 访问url没在加最后/的情况，进行重定向
 * 另一种解决方案：在koa-mount进行路由匹配的时候直接匹配 /download/ 也是可以避免出现错误页面的
 */
app.use(async (ctx, next) => {
  const parsedUrl = url.parse(ctx.url);
  if (
    (parsedUrl.pathname === '/download') ||
    (parsedUrl.pathname === '/detail') || 
    (parsedUrl.pathname === '/play') || 
    (parsedUrl.pathname === '/list')
  ) {
    parsedUrl.pathname = parsedUrl.pathname + '/';
    ctx.redirect(url.format(parsedUrl));
    return;
  }

  await next();
})

app.use(
  mount('/download', require('./1.download/index'))
)
app.use(
  mount('/detail', require('./2.detail/index'))
)
app.use(
  mount('/play', require('./3.play/index'))
)
app.use(
  mount('/list', require('./4.list/node/index'))
)

app.listen(3000, () => {
  console.log('listened 3000');
})
