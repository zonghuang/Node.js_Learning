const fs = require('fs');
const http = require('http');


const leak = [];  // 用于存储内存泄露
http.createServer(function(request, response) {
  response.writeHead(200, { 'content-type': 'text/html' });
  // response.end(fs.readFileSync(__dirname + '/index.htm', 'utf-8'));

  // 
  setTimeout(() => {
    console.log(window.location.href);
    // response.end(fs.readFileSync(__dirname + '/index.htm', 'utf-8'));
    const result = fs.readFileSync(__dirname + '/index.htm', 'utf-8');

    leak.push(result);
    response.end(result);
  }, 50)

}).listen(3000, () => {
  console.log('listened 3000');
})

// 另一个窗口运行以下命令，会因为window.location.href，报错，从而主进程退出
/*
curl http://localhost:3000/
curl http://127.0.0.1:3000/
*/