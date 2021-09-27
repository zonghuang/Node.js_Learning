const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();

  // 获取CPU的核心数，并用一般的核数来运行
  for (let i = 0; i < os.cpus().length / 2; i++) {
    cluster.fork();
  }

  // 进程挂掉后再启动，加 5000 毫秒是为了防止死循环
  cluster.on('exit', () => {
    setTimeout(() => {
      cluster.fork();
    }, 5000)
  })

} else {
  require('./app');

  process.on('uncaughtException', err => {
    console.error(err);
    // 错误上报发送错误到微信或钉钉群
    // ...

    // 没有捕获 uncaughtException 的时候进程守护
    process.exit(1);
  })

  // 内存泄露监控
  setInterval(() => {
    console.log(process.memoryUsage().res);
    if (process.memoryUsage.res > 734003200) {
      console.log('oom');
      process.exit(1);
    }
  }, 5000);
}

// 

/*
1.启动app.js服务
node app.js 
2.压测
ab -c50 -n400 http://localhost:3000/

3.停掉app.js服务，启动index.js服务
node index.js
4.压测 
ab -c50 -n400 http://localhost:3000/

5.对比app.js和index.js的压测数据
*/

// 测试内存泄露压测
// ab -c50 -t15 http://localhost:3000/