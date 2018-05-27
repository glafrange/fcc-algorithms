function findLongestWord(str) {
  let longest = '';
  str = str.split(" ");
  for(i in str) {
    if(str[i].length > longest.length) {
      longest = str[i];
    }
  }
  return longest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

