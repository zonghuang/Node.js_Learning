/**
 * 构建一个 Web 服务器
 */

// 加载 http 核心模块
const http = require('http');

// 主机名、端口号
const hostname = '127.0.0.1';
const port = 3000;

// 使用 http.createServer() 方法创建一个 Web 服务器
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log('Client request is received, The request path is' + req.url);
    res.end('Hello Node.js\n');
});

/*
server.on('request', function (request, response) {
    console.log('Client request is received, The request path is' + request.url);
    response.write('Hello Node.js');
    response.end();
});
*/

// 绑定主机名和端口号，启动服务器
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});