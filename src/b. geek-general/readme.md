如何运行？需开启2两个终端
- 先跑 node server.js
- 再跑 node entry.js

访问demo页
1. http://localhost:3000/download/
2. http://localhost:3000/detail/?columnid=233
3. http://localhost:3000/play/
4. http://localhost:3000/list/


使用 ab (apache bench) 对下载页进行测压
```shell
ab -c200 -n1600 http://127.0.0.1:3000/download
```

-c200: 模拟200个客户端同时请求访问服务器
-n1600: 总共要执行多少次请求
 