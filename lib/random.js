// randomInt 函数返回一个大于等于 min，小于 max 的随机整数
export function randomInt(min, max) {
  const p = Math.random();
  return Math.floor(min * (1 - p) + max * p);
}

export function createRandomPicker(arr) {
  const copiedArr = [...arr]; // copy 数组，以免修改原始数据
  function randomPick() {
    const len = copiedArr.length - 1;
    const index = randomInt(0, len);
    const picked = copiedArr[index];
    [copiedArr[index], copiedArr[len]] = [copiedArr[len], copiedArr[index]];
    return picked;
  }

  randomPick(); // 抛弃第一次选择结果
  return randomPick;
}
