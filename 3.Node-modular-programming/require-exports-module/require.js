const bExports = require('./exports');
const fs = require('fs');

console.log(bExports.foo);

console.log(bExports.add(10, 30));

console.log(bExports.age);

bExports.readFile('./require.js');

fs.readFile('./require.js', function (err, data) {
    if (err) {
        console.log('读取文件失败！');
    } else {
        console.log(data.toString());
    }
});