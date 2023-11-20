function canConstruct(ransomNote: string, magazine: string): boolean {
  const ransomNoteArr = ransomNote.split("");
  magazine.split("").forEach((item) => {
    if (ransomNoteArr.includes(item)) {
      ransomNoteArr.splice(ransomNoteArr.indexOf(item), 1);
    }
  });
  return ransomNoteArr.length === 0;
}