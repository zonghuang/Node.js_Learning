const user = {
  name: 'zonghuang'
}

// 使用 ES6 模板字符串渲染
const result = `<h2>${user.name}</h2>`;

// 使用 ejs（npm上的一个模板引擎库）来渲染
const template = '<h2><%= user.name %></h2>';
ejs.render(template, user);


// 思考：把ES6模板字符串当初ejs来用，要怎么做？
const vm = require('vm');
console.log(
  vm.runInNewContext('`<h2>${user.name}</h2>`', { user })
);
