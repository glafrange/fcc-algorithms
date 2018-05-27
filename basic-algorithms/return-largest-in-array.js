function largestOfFour(arr) {
  const solutionArr = [];
  arr.forEach(subArr => {
    subArr.sort((a,b) => (a-b));
    solutionArr.push(subArr[subArr.length-1]);
  });
  return solutionArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
