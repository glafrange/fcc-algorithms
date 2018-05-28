function diffArray(arr1, arr2) {
  var newArr = [];
  for (let val in arr2){
    if(arr1.indexOf(arr2[val]) === -1){
      newArr.push(arr2[val]);
    }
  }
  for(let val in arr1){
    if(arr2.indexOf(arr1[val]) === -1){
      newArr.push(arr1[val]);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
