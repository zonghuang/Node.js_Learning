const glob = require('glob')

// 阻塞I/O
console.time('sync')
const result = glob.sync(__dirname + '/**/*')
console.timeEnd('sync')     // sync: 671.907ms
console.log(result.length)  // 67(当前目录字符长度)

// 非阻塞I/O
console.time('sync')
const result2 = glob(__dirname + '/**/*', function (err, result) {
  console.log(result.length)  // 3.67
})
console.timeEnd('sync')  // 1.sync: 4.876ms
// IO完成之前还可以做别的事
console.log('hello geekbang')  // 2.hello geekbang
