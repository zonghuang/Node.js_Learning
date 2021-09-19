(function() {
  var promise1 = interview();
  var promise2 = promise1.then(res => {
    // 如果回调函数最终是 throw，该 Promise 是 rejected 状态
    // throw new Error('refuse')

    // 如果回调函数最终是 return，该 Promise 是 fulfilled 状态
    return 'accept'
  })

  // catch 和 then 一样，用同样的效果
  // var promise2 = promise1.catch(res => {
  //   throw new Error('refuse')
  //   return 'accept'
  // })

  setTimeout(() => {
    // 回调函数最终是 throw 的情况
    // console.log(promise1);  // Promise {<fulfilled>: 'success'}
    // console.log(promise2);  // Promise {<rejected>: Error: refuse at <anonymous>:5:11}  

    // 回调函数最终是 return 的情况
    console.log(promise1);  // Promise {<fulfilled>: 'success'}
    console.log(promise2);  // Promise {<fulfilled>: 'accept'}
  }, 800);

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
