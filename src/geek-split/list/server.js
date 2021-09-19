require('@babel/register')({
  presets: ['@babel/preset-react']
});
require('./node')

/**
 * 启动方式：
 * 先 node server.js
 * 再 node backend.js
 * 最后 http://localhost:3000/
 */