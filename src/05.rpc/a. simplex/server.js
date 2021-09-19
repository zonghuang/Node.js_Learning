const net = require('net');

const server = net.createServer(socket => {
  socket.on('data', function (buffer) {
    console.log(buffer, buffer.toString());   // <Buffer 48 65 6c 6c 6f 20 4e 6f 64 65> Hello Node
  })
});

server.listen(4000);

/**
 * 注意：
 * 需开启2个终端，先启动 server，再启动 client
 * node server.js
 * node client
 */