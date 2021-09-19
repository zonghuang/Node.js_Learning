const fs = require('fs');
const protobuf = require('protocol-buffers');

// protocol-buffers: https://www.npmjs.com/package/protocol-buffers

// 根据协议，编译出一个js逻辑对象，里面包含encode和decode函数
// 实际写web服务器的时候，注意这个操作可以直接在进程启动就做
// 否则在http处理过程里做的话，是一次不必要的性能消耗
const schemas = protobuf(fs.readFileSync(`${__dirname}/test.proto`));

const buffer = schemas.Course.encode({
  id: 5,
  name: 'node',
  lesson: []
})

console.log(buffer);  // <Buffer 0d 00 00 a0 40 12 04 6e 6f 64 65>
console.log(schemas.Course.decode(buffer));  // { id: 5, name: 'node', lesson: [] }
