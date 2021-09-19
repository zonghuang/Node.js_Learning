const eventloop = {
  queue: [],

  loop() {
    while (this.queue.length) {
      var callback = this.queue.shift()
      callback() // 在node里面，callback()之前都是C++代码，从这里之后就是js代码才有js调用栈
    }

    setTimeout(this.loop.bind(this), 50)
  },

  add(callback) {
    this.queue.push(callback)
  }
}

eventloop.loop()

setTimeout(() => {
  eventloop.add(function() {
    console.log(1)
  })
}, 500)

setTimeout(() => {
  eventloop.add(function() {
    console.log(2)
  })
}, 800)
