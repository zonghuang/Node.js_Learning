console.log('start require')  // 1.start require
const lib = require('./lib')
console.log('end require')  // 3.end require
lib.test = 'test'
console.log(lib)  // 4.[Function (anonymous)] { test: 'test' }

// require返回的对象，和lib.js里的exports对象属于同一个引用
// 因此此处加的属性能在lib.js里面体现出来。
lib.additional = 'test'

// 使用webpack命令辅助理解commonjs
// webpack --devtool=inline-source-map --mode=development --target=node ./index.js