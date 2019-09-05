const foo = 'bar'

function add(x, y) {
    return x + y
}

// 这种方式不行
// exports = foo
// exports = add

// 如果一个模块需要直接导出某个成员，而非挂载的方式，必须使用下面这种方式

// exports 一个字符串
module.exports = 'hello'

// exports 一个方法
module.exports = function (x, y) {
    return x + y
}

// exports 一个对象
module.exports = {
    add: function () {
        return x + y
    },
    str: 'hello'
}

exports.str = 'zonghuang'
module.exports = exports

/**
 * 1. 你可以认为在每个模块的最后 return 了这个 exports
 * 2. exports 是一个对象，我们可以通过多次为这个对象添加成员实现对外导出多个内部成员
 */