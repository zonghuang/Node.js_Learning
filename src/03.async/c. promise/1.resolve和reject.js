/**
 * promise的状态转换以及通过then获取内容
 * Promise 的状态：pending、fulfilled/resolved、rejected
 */
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 500);
})

promise.then(function (result) {
  console.log(result);  // 3
}).catch(function (err) {

})

setTimeout(() => {
  console.log(promise);  // Promise { 3 }
}, 800);

// 使用立即执行函数包裹，去浏览器运行
(function() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3)
    }, 500);
  })
  
  console.log(promise);  // Promise {<pending>}

  promise.then(function (result) {
    console.log(result);  // 3
  }).catch(function (err) {
    console.log(err);
  })
  
  setTimeout(() => {
    console.log(promise);  // Promise {<fulfilled>: 3}
  }, 800);
})()


(function() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error()) // 这里如果没有用catch捕获异常，那么错误会抛到js全局 （Uncaught (in promise) Error at <anonymous>:4:14）
    }, 500);
  })
  
  console.log(promise);  // Promise {<pending>}
  
  setTimeout(() => {
    console.log(promise);  // Promise {<rejected>: Error at <anonymous>:4:14}
  }, 800);
})()