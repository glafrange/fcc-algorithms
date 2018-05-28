function sumAll(arr) {
  let solution = 0;
  arr = arr.sort((a,b) => (a-b));
  solution += arr[1];
  while (arr[0] < arr[1]){
    solution += arr[0];
    arr[0] += 1;
  }
  return solution;
}

sumAll([4, 1]);
