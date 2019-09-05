const http = require('http')
const fs = require('fs')
const template = require('art-template')

const hostname = '127.0.0.1'
const port = 3000

const wwwDir = 'D:/Movie/www'

const server = http.createServer((req, res) => {

    fs.readFile('./apache-art-template.html', function (err, data) {
        if (err) {
            return res.end('404 Not Found.')
        }

        fs.readdir(wwwDir, function (err, files) {
            if (err) {
                return res.end('Can not find dir.')
            }
            const htmlStr = template.render(data.toString(), {
                title: 'Hello',
                files: files
            })
            res.end(htmlStr)
        })
    })
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})