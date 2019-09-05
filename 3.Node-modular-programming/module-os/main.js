const fooExports = require('./foo')

console.log(fooExports)

// 默认得到的是对象
// 使用对象中的成员必须 . 某个成员来访问

// 字符串、方法、对象
// hello
// [Function]
// { add: [Function: add], str: 'hello' }

// { str: 'zonghuang' }