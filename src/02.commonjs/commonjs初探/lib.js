console.log('this is module')  // 2.this is module

exports.geekbang = { 'hello': 'haha' }

exports.tencent = function () {
  console.log('good')
}

// 知识点1：对module.exports赋值，exports对象就不再是外面require所得到的结果了。
// 但exports变量本身还是存在的
module.exports = function () {
  console.log('hello geekbang')
}

// 知识点2：外部拿到require调用的结果和这里的exports对象是同一个引用
setTimeout(()=> {
  // 验证index.js里加的additional属性是否生效
  // 用于确定外部require到的对象和此处的exports是否是同一个属性
  console.log(exports)  // 5.{ geekbang: { hello: 'haha' }, tencent: [Function (anonymous)] }
}, 100)
