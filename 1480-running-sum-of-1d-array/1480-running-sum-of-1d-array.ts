function runningSum(nums: number[]): number[] {
    return nums.reduce((acc, num, i) => {
        i === 0 ? acc.push(num) : acc.push(acc[i - 1] + num)
        return acc;
    }, []);
};