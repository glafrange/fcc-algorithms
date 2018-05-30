function pairwise(arr, arg) {
  let usedPairs = [];
  return arr.reduce((acc, curValue, curIndex) => {
    for(i=0; i < arr.length; i++) {
      if(arr[i] + curValue === arg && i !== curIndex && !usedPairs.includes(i) && !usedPairs.includes(curIndex)) {
        usedPairs.push(i, curIndex);
        return acc + i + curIndex;
      }
    }
    return acc;
  }, 0);
}

pairwise([1, 4, 2, 3, 0, 5], 7);
