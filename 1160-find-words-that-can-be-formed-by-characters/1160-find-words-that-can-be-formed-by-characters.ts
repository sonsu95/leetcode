function countCharacters(words: string[], chars: string): number {
  let totalLength = 0;
  const charsFrequency = getCharFrequency(chars);
  words.forEach(word => {
    const wordFrequency = getCharFrequency(word);
    if (isFrequencyMapMatching(wordFrequency, charsFrequency)) {
      totalLength += word.length;
    }
  })
  return totalLength;
}

function getCharFrequency(str: string): Map<string, number> {
  const frequency = new Map<string, number>();
  for (const char of str) {
    frequency.get(char) >= 1 
      ? frequency.set(char, frequency.get(char) + 1)
      : frequency.set(char, 1);
  }
  return frequency
}

function isFrequencyMapMatching(wordMap: Map<string, number>, charMap: Map<string, number>): boolean {
  for (const [wordChar, count] of wordMap) {
    if (!charMap.has(wordChar) || count > charMap.get(wordChar)) {
      return false; 
    }
  }
  return true;
}
