Array.prototype.mySlice = function () {
    var start = 0
    var end = this.length
    if (arguments.length === 1) {
        start = arguments[0]
    } else if (arguments.length === 2) {
        start = arguments[0]
        end = arguments[1]
    }
    var tmp = []
    for (var i = start; i < end; i++) {
        // fakeArr[0]
        // fakeArr[1]
        // fakeArr[2]
        tmp.push(this[i])
    }
    return tmp
}

var fakeArr = {
    0: 'abc',
    1: 'efg',
    2: 'haha',
    length: 3
}

// 所以你就得到了真正的数组。
    ;[].mySlice.call(fakeArr)