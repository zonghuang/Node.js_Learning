module.exports = function (playerAction) {
  if (!["rock", "scissor", "paper"].includes(playerAction)) {
    throw new Error("invalid playerAction");
  }

  // 打印玩家出的东西
  console.log('玩家出的是：', playerAction);

  // 电脑出的东西
  let computerAction;
  let random = Math.random() * 3;
  if (random < 1) {
    computerAction = "rock";
    console.log("电脑出了石头");
  } else if (random > 2) {
    computerAction = "scissor";
    console.log("电脑出了剪刀");
  } else {
    computerAction = "paper";
    console.log("电脑出了布");
  }

  // 判断输赢
  if (playerAction === computerAction) {
    console.log("平局");
    return 0;
  } else if (
    (playerAction == "scissor" && computerAction == "rock") ||
    (playerAction == "paper" && computerAction == "scissor") ||
    (playerAction == "rock" && computerAction == "paper")
  ) {
    console.log("你输了");
    return -1;
  } else {
    console.log("你赢了");
    return 1;
  }
};
