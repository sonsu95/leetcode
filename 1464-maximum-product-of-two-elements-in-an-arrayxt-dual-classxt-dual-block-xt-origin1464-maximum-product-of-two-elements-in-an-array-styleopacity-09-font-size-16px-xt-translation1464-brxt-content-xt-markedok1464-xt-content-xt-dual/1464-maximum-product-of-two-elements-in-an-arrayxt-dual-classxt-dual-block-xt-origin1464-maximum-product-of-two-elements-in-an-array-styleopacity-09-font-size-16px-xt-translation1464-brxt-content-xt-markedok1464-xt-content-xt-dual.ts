function maxProduct(nums: number[]): number {
    const copyArr = [...nums];
    copyArr.sort((a, b) => b - a)
    console.log(copyArr);
    return (copyArr[0] - 1) * (copyArr[1] - 1)
};