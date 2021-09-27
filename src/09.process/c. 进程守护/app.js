const http = require('http');

module.exports = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('hello world');
  while (true) { }
}).listen(3000, () => {
  console.log('listened 3000')
})
