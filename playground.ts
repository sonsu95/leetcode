function numberOfSteps(num: number): number {
  let cnt = 0;
  while (num > 0) {
    cnt += num & 1 ? 1 : 0;
    num >>= 1;
    cnt++;
  }
  return cnt - 1;
}

const result = numberOfSteps(14);
console.log(result);
