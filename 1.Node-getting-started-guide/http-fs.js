const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    const url = req.url;
    if (url === '/') {
        fs.readFile('./resource/login.html', function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('文件读取失败！');
            } else {
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.end(data);
            }
        })
    } else if (url === '/picture') {
        fs.readFile('./resource/dog.jpg', function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('文件读取失败！');
            } else {
                res.setHeader('Content-Type', 'image/jpeg');
                res.end(data);
            }
        })
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});