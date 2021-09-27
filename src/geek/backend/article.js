const http = require('http');

const data = require('./mockdata/article');

http.createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'application/json' });
  response.end(JSON.stringify(data));
}).listen(4003, () => {
  console.log('article http server listened: 4003')
})
