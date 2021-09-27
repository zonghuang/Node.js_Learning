目录结构
* backend 后端服务内容
* business 业务配置中心，模拟云函数架构存储函数内容的地方
* server 服务端运行逻辑
* workspace 模拟开发者工作空间

运行方式
0. 打包上传代码
```
node workspace/build.js
```

1. 先打开终端运行
```
node server/test.js
```

2. 再打开另一个终端运行
```
node backend/run.js
```

3. 然后打开浏览器访问`http://localhost:3000/play?columnid=1`

注意：package.json 的 webpack 版本应为 4.x 的，升级到 5.x 的会报错
暂时还没找到解决方案，目前只能优雅降级
npm uninstall webpack
npm install webpack@4
