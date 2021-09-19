(async function () {
  await findJob();
  console.log('trip');
})()


async function findJob() {
  try {
    // 进行三轮面试
    await interview(1);
    await interview(2);
    await interview(3);
    try {
      await Promise.all([
        family('father'),
        family('mother')
      ])
    } catch(e) {
      e.round = 'family'
      throw e
    }
  } catch(e) {
    console.log('cry at ' + e.round)
  }
}


/**
 * 进行第round轮面试
 */
function interview(round) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        const error = new Error('failed');
        error.round = round;
        reject(error);

      } else {
        resolve('success');
      }
    }, 500)
  })
}

/**
 * 寻求家人的意见确定要不要接受offer
 */
function family(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        const error = new Error('disagree');
        error.name = name;
        reject(error);

      } else {
        resolve('agree');
      }
    }, Math.random() * 400);
  })
}