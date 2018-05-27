function chunkArrayInGroups(arr, size) {
  var solution = [];
  while (arr.length >= size){
    solution.push(arr.splice(0,size));
  }
  if(arr.length > 0){
    solution.push(arr.splice(0,arr.length));
  }
  return solution;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
