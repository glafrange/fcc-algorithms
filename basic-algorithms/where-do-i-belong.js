function getIndexToIns(arr, num) {
  arr.push(num);
  return arr.sort((a, b) => (a-b)).indexOf(num);
}

getIndexToIns([40, 60], 50);
