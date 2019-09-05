const foo = 'bbb';

console.log(exports);

exports.foo = 'hello';

exports.add = function(x, y) {
    return x + y;
};

exports.readFile = function (path, callback) {
    console.log('文件路径：', path);
};

const age = 18;

exports.age = age;

function add(x, y) {
    return x - y;
}