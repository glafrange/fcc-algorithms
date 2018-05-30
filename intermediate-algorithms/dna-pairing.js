function pairElement(str) {
  let pairs = [];
  str = str.split('');
  for(let char in str) {
    if(str[char] === "A") {
      pairs.push([str[char], "T"]);
    } else if(str[char] === "T") {
      pairs.push([str[char], "A"]);
    } else if(str[char] === "C") {
      pairs.push([str[char], "G"]);
    } else if(str[char] === "G") {
      pairs.push([str[char], "C"]);
    }
  }
  return pairs;
}

pairElement("GCG");
