function numberOfSteps(num: number): number {
  if (num === 0) return 0;
  let cnt = 0;
  while (num > 0) {
    cnt += num & 1 ? 1 : 0;
    num >>= 1;
    cnt++;
  }
  return cnt - 1;
}