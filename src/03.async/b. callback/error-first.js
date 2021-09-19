// try catch只能抓到一个调用堆栈内，即一个事件循环里的错误
try {
  // 回调函数格式规范：第一个参数是 error，后面的参数才是结果
  interview(function (err, res) {
    if (err) {
      console.log('cry');
      return;
    }
    console.log('smile');
  })
} catch (e) {
  console.log('e: ', 'cry');
}

function interview(callback) {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      callback(null, 'success')
    } else {
      // throw 不是在try catch包裹里面，就不会被try catch捕获
      // interview是在try catch里面的，那为什么try catch不能捕获？
      // 原因是：事件循环。一个事件循环是一个全新的调用栈，setTimeout是在另外一个调用栈里面的
      // 所以我们的错误需要用callback来callback出去的
      // throw new Error('fail');  // 这样写，回调函数里面的 try-catch 不能抓取到，反而会抛到 node 全局，造成全局的错误
      callback(new Error('fail'))
    }
  }, 500);
}
