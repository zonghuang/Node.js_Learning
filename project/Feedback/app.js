const http = require('http')
const fs = require('fs')
const url = require('url')
const template = require('art-template')

const hostname = '127.0.0.1'
const port = 3000

let comments = [
    {
        name: 'zonghuang',
        message: '像我这样优秀的人',
        dateTime: '2019-9-1'
    },
    {
        name: 'Li',
        message: '像我这样优秀的人',
        dateTime: '2019-9-1'
    }
]

/**
 * 步骤：
 * 1. / index.html
 * 2. 开放 public 目录中的静态资源
 *      当请求 /public/xxx 的时候，读取响应 public 目录中的具体资源
 * 3. /comment post.html
 * 4. /comment
 * 4.1 接收表单提交数据
 * 4.2 存储表单提交的数据
 * 4.3 让表单重定向到 /
 *      statusCode
 *      setHeader
 */


const server = http.createServer((req, res) => {
    // 使用 url.parse 方法将路径解析为一个方便操作的对象
    // 第二个参数为 true 表示直接将查询字符串转为一个对象（通过 query 属性来访问）
    const parseObj = url.parse(req.url, true)

    // 单独获取不包含查询字符串的路径部分（该路径不包含 ? 之后的内容）
    const pathname = parseObj.pathname

    if (pathname === '/') {
        fs.readFile('./views/index.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found.')
            }
            let htmlStr = template.render(data.toString(), {
                comments: comments
            })
            res.end(htmlStr)
        })
    } else if (pathname === '/post') {
        fs.readFile('./views/post.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found.')
            }
            res.end(data)
        })
    } else if (pathname.indexOf('/public/') === 0) {
        // 统一处理：
        // 如果请求路径是以 /public/ 开头的，则我认为你要获取 public 中的某个资源
        // 所以我们就直接可以把请求路径当作文件路径来直接进行读取
        fs.readFile('.' + pathname, function (err, data) {
            if (err) {
                return res.end('404 Not Found.')
            }
            res.end(data)
        })
    } else if (pathname === '/comment') {
        // 无论 /comment?xxx 之后是什么，都不用担心（因为我的 pathname 是不包含 ? 之后的那个路径）
        // 我们已经使用 url 模块的 parse 方法把请求路径中的查询字符串给解析成一个对象了
        // 接下来：
        // 1. 获取表单提交的数据 parseObj.query
        // 2. 将当前时间日期添加到数据对象中，然后存储到数组中
        // 3. 让用户重定向跳转到首页

        const comment = parseObj.query
        let time = new Date()
        comment.dateTime =  time.toLocaleDateString() + ' ' +
                            time.getHours() + ':' +
                            time.getMinutes() + ':' +
                            time.getSeconds()
        comments.unshift(comment)

        // 如何通过服务器让客户端重定向？
        // 1. 状态码设置为 302 临时重定向
        // 2. 在响应头中通过 Location 告诉客户端往哪儿重定向
        res.statusCode = 302
        res.setHeader('Location', '/')
        res.end()
    } else {
        // 其它的都处理成 404 找不到
        fs.readFile('./views/404.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found.')
            }
            res.end(data)
        })
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

})
