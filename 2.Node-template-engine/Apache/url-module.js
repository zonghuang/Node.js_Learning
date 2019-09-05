const url = require('url')

const obj = url.parse('./pinglun?name=zonghuang&message=Hello Node.js', true)

console.log(obj)
console.log(obj.query)