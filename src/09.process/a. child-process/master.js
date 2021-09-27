const cp = require('child_process');

// 创建子进程（相当于在node.js服务里又跑了一个node.js服务）
const childProcess = cp.fork(__dirname + '/child.js');

childProcess.send('haha');

// 接收子进程发来的消息
childProcess.on('message', str => {
  console.log('parent', str);
})