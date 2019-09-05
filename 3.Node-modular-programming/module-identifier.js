const fs = require('fs')


fs.readFile('resource/data.txt', (err, data) => {
    if(err) {
        return console.log('读取文件失败')
    }
    console.log(data)
})