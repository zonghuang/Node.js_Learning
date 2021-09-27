const fs = require('fs');

const koa = require('koa');
const mount = require('koa-mount');
const static = require('koa-static');

const app = new koa();

app.use(
  static(__dirname + '/source/')
)

// const str = fs.readFileSync(__dirname + '/source/index.htm', 'utf-8')
const buffer = fs.readFileSync(__dirname + '/source/index.htm');


app.use(
  mount('/', async (ctx) => {
    // 1. 写法一：这样中间件运行多次会，不断执行读取操作
    // ctx.body = fs.readFileSync(__dirname + '/source/index.htm', 'utf-8')

    // 2. 写法二：把它放到中间件外面提前读取，只读取一次，提升性能
    // ctx.body = str;

    // 3. (推荐)写法三：直接把 buffer 传递到 ctx.body 上，提升性能
    ctx.status = 200;
    ctx.type = 'html';  // 指定buffer是html内容，设置这个是为了不直接下载
    ctx.body = buffer;

    // 结论：尽量把在中间件执行的一些流程计算，放到中间件外面执行（程序启动的时候执行），这样能提升很多新能
    // 尽量减少不必要的计算
  })
)

app.listen(4000);
