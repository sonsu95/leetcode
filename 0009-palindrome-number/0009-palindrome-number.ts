function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    
    const reverse = String(x).split("").reverse().join("");
    return x === Number(reverse);
};