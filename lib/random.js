// randomInt 函数返回一个大于等于 min，小于 max 的随机整数
export function randomInt(min, max) {
  const p = Math.random();
  return Math.floor(min * (1 - p) + max * p);
}

const sectionLength = randomInt(200, 500); // 设置段落长度介于200到500字
console.log('sectionLength', sectionLength);