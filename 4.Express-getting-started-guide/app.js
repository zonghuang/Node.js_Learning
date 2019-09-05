const express = require('express')

const hostname = '127.0.0.1';
const port = 3000;

// 创建应用程序服务
const app = express()

// 在 Express 中开放资源，我们就可以直接通过 /public/xx 的方式访问 public 目录中的所有资源了
app.use('/public', express.static('./public'))
app.use('/static', express.static('./static'))
app.use('/node_modules', express.static('./node_modules'))

// 路径判断
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    // 在 Express 中可以直接 req.query 来获取查询字符串参数
    console.log(req.query)
    res.end('Hello Express')
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});