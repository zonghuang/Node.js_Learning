// node内置模块 - EventEmitter

// 把抛事件的模块封装起来
// 强调抛事件这种模式更适合底层模块往外传递信息
const geektime = require('./geektime')

geektime.on('newlesson', ({ price }) => {
  console.log('yeah! new lesson')
  if (price < 80) {
    console.log('buy', price)
  }
})

setTimeout(() => {
  // 需要注意的是，EventEmitter如果添加了过多的监听器，Node.js觉得你有内存泄漏嫌疑，会抛出一个warning
  // 用以下这句则可以消除这个限制
  // geektime.setMaxListeners(200)
  for (let i = 0; i < 100; i++) {
    geektime.on('newlesson', ({ price }) => {})
  }
}, 1000)

/*
yeah! new lesson
buy 51.21935767941157
yeah! new lesson
yeah! new lesson
buy 2.132563930148579
yeah! new lesson
buy 70.85227201755315
yeah! new lesson
yeah! new lesson
buy 18.229572860590547
yeah! new lesson
yeah! new lesson
buy 15.447210564460768
...
*/