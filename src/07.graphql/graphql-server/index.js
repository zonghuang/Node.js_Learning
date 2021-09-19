const query = require('./query');

query('{ hello }').then(res => {
  console.log(res);  // { data: [Object: null prototype] { hello: 'Hello World' } }
})
