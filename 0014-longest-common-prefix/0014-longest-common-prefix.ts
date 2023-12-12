function longestCommonPrefix(strs: string[]): string {
   if (strs.length === 0) return "";

    let shortest = strs[0];
    for (let str of strs) {
        if (str.length < shortest.length) {
            shortest = str;
        }
    }

    let commonPrefix = "";
    for (let i = 0; i < shortest.length; i++) {
        let currentChar = shortest[i];

        for (let str of strs) {
            if (str[i] !== currentChar) {
                return commonPrefix;
            }
        }
        commonPrefix += currentChar;
    }

    return commonPrefix;
};