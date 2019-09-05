/*
模块化系统原理
在 Node 中，每个模块内部都有一个自己的 module 对象，该 module 对象中，有一个成员叫：exports 也是一个对象。
我们可以把需要导出的成员都挂载到 module.exports 接口对象中。
也就是：`moudle.exports.xxx = xxx` 的方式，但是每次都 `moudle.exports.xxx = xxx` 很麻烦，点儿的太多了
所以 Node 为了简化你的操作，同时在每一个模块中都提供了一个成员叫：`exports`
`exports === module.exports` 结果为  `true`
 */

// 在模块中还有这么一句隐藏代码
// let exports = module.exports
// 如果再写上上面这句，则会报错→ SyntaxError: Identifier 'exports' has already been declared

// console.log(exports === module.exports)     // true

// SyntaxError: Identifier 'module' has already been declared
// let module = {
//   exports: {
//     foo: 'bar',
//     add: function(){}
//   }
// }


// { foo: 'bar' }
// module.exports.foo = 'bar'


// { add: [Function] }
// module.exports.add = function (x, y) {
//   return x + y
// }


// 可以使用任意一方来导出内部成员
// { foo: 'bar', add: [Function] }
// exports.foo = 'bar'
// module.exports.add = function (x, y) {
//   return x + y
// }


// { a: 123, foo: 'bar' }
// exports.a = 123
// exports.foo = 'bar'

// 当一个模块需要导出单个成员的时候，直接给 exports 赋值是不管用的
// { a: 123, b: 456 }
exports.a = 123
exports = {}        // 给 exports 赋值会断开和 module.exports 之间的引用
exports.foo = 'bar'
module.exports.b = 456

// 同理，给 module.exports 重新赋值也会断开，导致 exports !== module.exports
// { foo: 'bar' }
module.exports = {
  foo: 'bar'
}

// 重新建立两者的引用关系
exports = module.exports

// { foo: 'hello' }
exports.foo = 'hello'
// { foo: 'bar' }
exports.foo = 'bar'

// { foo: 'bar', a: 123 }
module.exports.a = 123


// exports !== module.exports
// 最终 return 的是 module.exports
// 所以无论你 exports 中的成员是什么都没用
// { foo: 'bar', a: 123 }
exports = {
    a: 456
}

// { foo: 'haha', a: 123 }
module.exports.foo = 'haha'

// { foo: 'haha', a: 123 }
exports.c = 456

exports = module.exports

// { foo: 'haha', a: 789 }
exports.a = 789

// 前面再牛逼，在这里都全部推翻了，重新赋值
// [Function]
module.exports = function () {
    console.log('hello')
}