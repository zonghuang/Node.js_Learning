console.log('Hello Node.js')

console.log(Date)
console.log(Math)

console.log(setTimeout)
console.log(setInterval)
console.log(setImmediate)

console.log(__dirname)  // 打印出当前目录
console.log(__filename) // 打印出当前文件（包括路径）

console.log(process)    // 打印当前程序信息

// node没有document
// console.log(document)  // ReferenceError: document is not defined

// node没有requestAnimationFrame，用setImmediate代替
// console.log(requestAnimationFrame)  // ReferenceError: requestAnimationFrame is not defined


/**
 * 运行
 * node index.js
 */
