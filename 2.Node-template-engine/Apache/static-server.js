const http = require('http')
const fs = require('fs')
const template = require('art-template')
const path = require('path')

const hostname = '127.0.0.1'
const port = 3000

const wwwDir = 'D:/Movie/www'

// 1. 如果是文件，直接读取响应
// 2. 如果是目录，读取渲染目录列表
// 3. 如果目录并且有该目录中有 index.html 则直接渲染目录中的 index.html
const server = http.createServer((req, res) => {
    const url = req.url
    const urlPath = path.join(wwwDir, url)

    fs.stat(urlPath, function (err, stats) {
        if (err) {
            return res.end('404 Not Found.')
        }
        if (stats.isFile()) {
            fs.readFile(urlPath, function (err, data) {
                if (err) {
                    return res.end('404 Not Found.')
                }
                res.end(data)
            })
        } else if (stats.isDirectory()) {
            const templateStr = fs.readFileSync('./static-template.html').toString()
            const files = fs.readdirSync(urlPath)
            const htmlStr = template.render(templateStr, {
                files: files
            })
            res.end(htmlStr)
        }
    })
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})