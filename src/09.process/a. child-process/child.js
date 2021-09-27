// 接收主进程的的消息
process.on('message', str => {
  console.log('child', str);

  // 给主进程发消息
  process.send('哈哈')
})
