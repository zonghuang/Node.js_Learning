const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const wwwDir = 'D:/Movie/www'

const server = http.createServer((req, res) => {
    const url = req.url

    fs.readFile('./template.html', function (err, data) {
        if (err) {
            return res.end('404 Not Found.')
        }

        // Q: 如何得到 wwwDir 目录列表中的文件名和目录名
        // A：使用 fs.readdir
        fs.readdir(wwwDir, function (err, files) {
            if (err) {
                return res.end('Can not find www dir.')
            }

            // Q: 如何将得到的文件名和目录名替换到 template.html 中
            // A: step1. 在 template.html 中需要替换的位置预留一个特殊的标记，
            //    step2. 根据 files 生成需要的 HTML 内容（生成需要替换的内容）
            let content = ''
            files.forEach(function (item) {
                content += `
                    <tr>
                        <td data-value="apple">
                            <a class="icon dir" href="/D:/Movie/www/apple/">${item}</a>
                        </td>
                        <td class="detailsColumn" data-value=""></td>
                        <td class="detailsColumn" data-value="">2019/8/28 23:00</td>
                    </tr>
                `
            })
            //    step3. 替换
            data = data.toString()
            data = data.replace('^_^', content)

            //    step4. 发送解析替换过后的响应数据
            res.end(data)
        })
    })
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})