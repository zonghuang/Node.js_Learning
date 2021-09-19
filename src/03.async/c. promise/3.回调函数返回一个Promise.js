(function() {
  var promise1 = interview();
  var promise2 = promise1.then(res => {
    // 但如果回调函数最终 return 了一个 Promise，
    // 该 Promise 会和回调函数 return 的 Promise 状态保持一致
    // 这样就可以在js串行执行异步任务
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve('accept')
      }, 300);
    })
  })

  setTimeout(() => {
    console.log(promise1);  // Promise {<fulfilled>: 'success'}
    console.log(promise2);  // Promise {<pending>}
  }, 800);

  setTimeout(() => {
    console.log(promise1);  // Promise {<fulfilled>: 'success'}
    console.log(promise2);  // Promise {<fulfilled>: 'accept'}
  }, 1000);

  function interview() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0) {
          resolve('success')
        } else {
          reject(new Error('fail'))
        }
      }, 500);
    })
  }
})()
