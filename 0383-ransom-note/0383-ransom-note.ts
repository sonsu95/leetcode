function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineCounts: Record<string, number> = {};

  for (const char of magazine) {
    if (magazineCounts[char]) {
      magazineCounts[char]++;
    } else {
      magazineCounts[char] = 1;
    }
  }

  for (const char of ransomNote) {
    if (!magazineCounts[char] || magazineCounts[char] === 0) {
      return false;
    }
    magazineCounts[char]--;
  }

  return true;
}
