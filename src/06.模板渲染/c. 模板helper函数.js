// 实现模板 helper 函数（与xss过滤类似）
const user = {
  name: '<script />'
}

const vm = require('vm');
console.log(
  vm.runInNewContext('`<h2>${helper(user.name)}</h2>`', {
    user,

    helper: function() {},
    _: function (markup) {
      if (!markup) return '';
      return String(markup)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#39;')
        .replace(/"/g, '&quot;')

    }
  })
);