const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const wwwDir = 'D:/Movie/www'

const server = http.createServer((req, res) => {
    const url = req.url
    let filePath = '/index.html'

    if (url !== '/') {
        filePath = url
    }

    fs.readFile(wwwDir + filePath, function (err, data) {
        if (err) {
            return res.end('404 Not Found.')
        }
        res.end(data)
    })
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})