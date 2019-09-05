console.log('a start!');

var foo = 'aaa';

// 加载 b 模块
require('./b.js');
// 推荐：省略后缀名
require('./b');


console.log('a end!');

console.log('foo 的值是：', foo);