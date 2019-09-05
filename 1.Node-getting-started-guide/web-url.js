const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log('Client request is received, The request path is' + req.url);
    console.log(req.socket.remoteAddress, req.socket.remotePort);

    const url = req.url;
    if (url === '/' || url === '/index') {
        res.end('index page');
    } else if (url === '/login') {
        res.end('login page');
    } else if (url === '/products') {
        const products = [
            {
                name: 'apple',
                price: 9,
            },
            {
                name: 'cherry',
                price: 6,
            },
            {
                name: 'orange',
                price: 3,
            },
        ];
        res.end(JSON.stringify(products));
    } else {
        res.end('404 Not Found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});