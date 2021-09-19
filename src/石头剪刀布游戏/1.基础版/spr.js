const playerAction = process.argv[2];
console.log(playerAction);

if (["rock", "paper", "scissor"].includes(playerAction)) {
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
  } else if (
    (playerAction == "scissor" && computerAction == "rock") ||
    (playerAction == "paper" && computerAction == "scissor") ||
    (playerAction == "rock" && computerAction == "paper")
  ) {
    console.log("你输了");
  } else {
    console.log("你赢了");
  }
} else {
  console.log("请输入rock或paper或scissor");
}

/**
 * 运行
 * node spr.js paper
 */
