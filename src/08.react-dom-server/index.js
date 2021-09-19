require('@babel/register')({
  presets: ['@babel/preset-react']
})

const ReactDOMServer = require('react-dom/server');

console.log(
  ReactDOMServer.renderToString(require('./index.jsx'))
);  // <h2 data-reactroot="">Hello React</h2>
