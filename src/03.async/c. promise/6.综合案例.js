/**
 * 进行三轮面试，都通过之后征求爸妈的同意
 */
interview(1).then(() => {
  return interview(2)
}).then(() => {
  return interview(3)
}).then(() => {
  return Promise.all([
    family('father'),
    family('mother').catch((e) => { /* 忽略老妈的的反对意见 */ })
  ]).catch((e) => {
    e.round = 'family';
    throw e;
  })
}).then(() => {
  console.log('success');
}).catch(err => {
  console.log('cry at ' + err.round);
})


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
