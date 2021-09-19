const fs = require('fs');
const express = require('express');

const game = require('./game');

let playerWon = 0;
let sameCount = 0;
let playerLastAction = null;

const app = express();

// 通过app.get设定 /favicon.ico 路径的路由
// .get 代表请求 method 是 get，所以这里可以用 post、delete 等。这个能力很适合用于创建 rest 服务
app.get('/favicon.ico', (request, response) => {
  // 一句 status(200) 代替 writeHead(200); end();
  response.status(200);
  return;
})

app.get('/game',
  function (request, response, next) {
    if (playerWon >= 3 || sameCount === 9) {
      response.status(500);
      response.send('我再也不和你玩了！');
      return;
    }

    // 通过next执行后续中间件
    next();

    // 当后续中间件执行完之后，会执行到这个位置
    if (response.playerWon) {
      playerWon++;
    }
  },

  function (request, response, next) {
    // express自动帮我们把query处理好挂在request上
    const query = request.query;
    const playerAction = query.action;

    if (!playerAction) {
      response.status(400);
      response.send();
      return;
    }

    if (playerLastAction === playerAction) {
      sameCount++;
      if (sameCount >= 3) {
        response.status(400);
        response.send('你作弊！我再也不玩了');
        sameCount = 9;
        return;
      }

    } else {
      sameCount = 0;
    }
    playerLastAction = playerAction;

    // 把用户操作挂在 response 上传递给下一个中间件
    response.playerAction = playerAction;
    next();
  },

  function(request, response) {
    const playerAction = response.playerAction;
    const gameResult = game(playerAction);

    // 如果这里执行setTimeout，会导致前面的洋葱模型失效
    // 因为playerWon不是在中间件执行流程所属的那个事件循环里赋值的
    // setTimeout(() => {
      response.status(200);
      if (gameResult == 0) {
        response.send('平局！');
      } else if (gameResult == 1) {
        response.send('你赢了！');
        response.playerWon = true;  // 玩家胜利次数统计+1
      } else {
        response.send('你输了！');
      }
    // }, 500)
  }
)

app.get('/', function (request, response) {
  // send接口会判断你传入的值的类型，文本的话则会处理为text/html
  // Buffer的话则会处理为下载
  response.send(fs.readFileSync(__dirname + '/index.html', 'utf-8'))
})

app.listen(3000);
