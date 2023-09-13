function maximumWealth(accounts: number[][]): number {
    const resultArr = [];
    accounts.forEach((account, idx) => {
        let sum = 0;
        account.forEach((num, idx) => {
            sum += num;
        })
        resultArr.push(sum);
    })
    return Math.max(...resultArr);
};