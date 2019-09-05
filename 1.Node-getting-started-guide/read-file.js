// 使用 require 方法加载 fs 核心模块
const fs = require('fs');

// 读取文件
fs.readFile('./index.html', function (error, data) {
    if (error) {
        console.log('读取文件失败！');
    } else {
        console.log(data.toString());
    }
});