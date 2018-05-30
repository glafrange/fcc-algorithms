function fearNotLetter(str) {
  str = str.split("");
  for(var char in str) {
    str[char] = str[char].charCodeAt();
  }
  for(var num in str) {
    if(num > 0 && str[num] != str[num-1] + 1) {
      return String.fromCharCode(str[num] - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");
