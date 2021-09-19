// 方式一：通过 form 创建 Buffer
const buffer1 = Buffer.from('geekbang');
const buffer2 = Buffer.from([1, 2, 3, 4, 'hello']);

// 方式二：通过 alloc 创建 Buffer
const buffer3 = Buffer.alloc(20);

console.log(buffer1);  // <Buffer 67 65 65 6b 62 61 6e 67>
console.log(buffer2);  // <Buffer 01 02 03 04 00>
console.log(buffer3);  // <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>


buffer2.writeInt8(12, 1);
console.log(buffer2);  // <Buffer 01 0c 03 04 00>
buffer2.writeInt16BE(512, 2);
console.log(buffer2);  // <Buffer 01 0c 02 00 00>
buffer2.writeInt16LE(512, 2);
console.log(buffer2);  // <Buffer 01 0c 00 02 00>