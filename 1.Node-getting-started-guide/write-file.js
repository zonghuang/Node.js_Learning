// 使用 require 方法加载 fs 核心模块
const fs = require('fs');

// 写入文件
fs.writeFile('./new.txt', 'Hello Node.js',function (error) {
    if (error) {
        console.log('写入文件失败！');
    } else {
        console.log('写入文件成功！');
    }
});

// 读取文件
fs.readFile('./new.txt', function (error, data) {
    if (error) {
        console.log('读取文件失败！');
    } else {
        console.log(data.toString());
    }
});